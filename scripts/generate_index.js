import fs from 'fs'
import path from 'path'
import listFiles from './_lib/list_files'
import listLocales from './_lib/list_locales'

const localeRequireLines = listLocales()
  .map((locale) => `    ${locale.name}: require('${locale.path.replace(/\.js$/, '')}/index.js')`)

const propertyRequireLines = listFiles()
  .map((fn) => `  ${fn.name}: require('${fn.path.replace(/\.js$/, '')}/index.js')`)
  .concat(['  locale: {']
    .concat(localeRequireLines.join(',\n'))
    .concat('  }')
    .join('\n')
  )

const indexLines = ['module.exports = {']
  .concat(propertyRequireLines.join(',\n'))
  .concat('}')
  .join('\n')

fs.writeFileSync(path.join(process.cwd(), 'index.js'), `${indexLines}\n`)
