import fs from 'fs'
import path from 'path'

import docsJSON from '../dist/date_fns_docs.json'

const fns = Object.keys(docsJSON)
  .reduce((acc, category) => {
    docsJSON[category].forEach((fn) => acc.push(fn))
    return acc
  }, [])
  .filter((doc) => doc.type === 'jsdoc')
  .sort((a, b) => a.title.localeCompare(b.title))

generateFlowTypings(fns)
generateTypeScriptTypings(fns)

function generateFlowTypings (fns) {
  fns.forEach((doc) => {
    const flowFilename = doc.file.fullPath.replace('index.js', 'index.js.flow')
    const params = generateParams(doc.params, {left: '(', right: ')', nesting: 0})
    const type = generateType(doc.returns[0].type)

    const typingsSource = `// @flow\n\ndeclare module.exports: ${params} => ${type}\n`

    fs.writeFileSync(path.join(process.cwd(), flowFilename), typingsSource)
  })
}

function generateTypeScriptTypings (fns) {
  const dateFnsModule = generateTypeScriptDateFnsModule(fns)
  const fnModules = fns.map(generateTypeScriptFnModule)
  const typingsSource = [dateFnsModule].concat(fnModules).join('\n\n')

  fs.writeFileSync(path.join(process.cwd(), `./typings.d.ts`), `${typingsSource}\n`)
}

function generateTypeScriptDateFnsModule (fns) {
  return ['declare module \'date-fns\' {']
    .concat(fns.map(generateTypeScriptFnTyping).join('\n\n'))
    .concat('}')
    .join('\n')
}

function generateTypeScriptFnTyping (fn) {
  const name = fn.title
  const params = generateParams(fn.params, {left: '(', right: ')', nesting: 1})
  const type = generateType(fn.returns[0].type)
  const fnDeclaration = `  function ${name} ${params}: ${type}`
  const namespaceDeclaration = `  namespace ${name} {}`

  return [fnDeclaration, namespaceDeclaration].join('\n')
}

function generateTypeScriptFnModule (fn) {
  const fnName = fn.title
  const moduleName = fn.file.path.replace(/^\.\//, 'date-fns/')
  return [`declare module '${moduleName}' {`]
    .concat(`  import {${fnName}} from 'date-fns'`)
    .concat(`  export = ${fnName}`)
    .concat('}')
    .join('\n')
}

function generateParams (params, {left, right, nesting}) {
  if (params.length === 0) {
    return `${left}${right}`
  }

  const lineIndent = '  '.repeat(nesting + 1)
  const rightIndent = '  '.repeat(nesting)

  return [left]
    .concat(params
      .map((param) => {
        const {name, optional, type, props} = param
        const typeString = generateType(type, {props, nesting})
        return `${lineIndent}${name}${optional ? '?' : ''}: ${typeString}`
      })
      .join(',\n')
    )
    .concat(`${rightIndent}${right}`)
    .join('\n')
}

function generateType (type, {props, nesting} = {}) {
  if (props) {
    return generateParams(props, {left: '{', right: '}', nesting: nesting + 1})
  }

  if (type.names.every((name) => name.startsWith('Array'))) {
    const typeStrings = type.names
      .map(generateTypeString)

    const typeString = typeStrings.length > 1
      ? `(${typeStrings.join(' | ')})`
      : typeStrings[0]

    return `${typeString}[]`
  }

  return type.names
    .map(generateTypeString)
    .join(' | ')
}

function generateTypeString (typeName) {
  if (typeName === 'Date' || typeName === 'Object') {
    return typeName
  }

  if (typeName === 'String' || typeName === 'Boolean' || typeName === 'Number') {
    return typeName.toLowerCase()
  }

  if (typeName === '*') {
    return 'any'
  }

  if (typeName.startsWith('Array')) {
    const elementTypeName = /Array\.<(.*)>/.exec(typeName)[1]
    const elementTypeString = generateTypeString(elementTypeName)
    return elementTypeString
  }

  return typeName
}
