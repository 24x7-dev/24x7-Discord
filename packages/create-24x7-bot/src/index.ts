#!/usr/bin/env node

import chalk from 'chalk'
import { execSync } from 'child_process'
import path from 'node:path'
import ora from 'ora'
import prompts from 'prompts'

import { IsFolderEmpty, MakeDir } from './helper/dir.js'
import TryGitInit from './helper/git.js'
import ValidateNpmName from './helper/npm.js'
import {
  GetPackageManager,
  InstallPackage,
  PackageManager,
} from './helper/package-manager.js'
import { DownloadAndExtractTemplate, GetTemplates } from './helper/template.js'
// eslint-disable-next-line import/no-named-default
import { default as version } from './helper/updater.js'

/**
 * Startup
 */

console.log(`
:'#######::'##::::::::'##::::'##:'########::::'########::'########:'##::::'##:
'##.... ##: ##:::'##::. ##::'##:: ##..  ##:::: ##.... ##: ##.....:: ##:::: ##:
..::::: ##: ##::: ##:::. ##'##:::..:: ##:::::: ##:::: ##: ##::::::: ##:::: ##:
:'#######:: ##::: ##::::. ###::::::: ##::::::: ##:::: ##: ######::: ##:::: ##:
'##:::::::: #########::: ## ##::::: ##:::::::: ##:::: ##: ##...::::. ##:: ##::
 ##::::::::...... ##::: ##:. ##:::: ##:::::::: ##:::: ##: ##::::::::. ## ##:::
 #########::::::: ##:: ##:::. ##::: ##:::::::: ########:: ########:::. ###::::
.........::::::::..:::..:::::..::::..:::::::::........:::........:::::...:::::
  ${chalk.dim(`v${version}`)}
`)

/**
 * Get project path and name
 */

let projectPath = './'

const res = await prompts(
  {
    initial: 'my-app',
    message: 'What is your project named?',
    name: 'path',
    type: 'text',
    validate: name => {
      const validation = ValidateNpmName(path.basename(path.resolve(name)))
      if (validation.valid) {
        return true
      }

      return `Invalid project name: ${validation.problems?.[0]}` ?? 'unknown'
    },
  },
  {
    onCancel: () => {
      process.exit()
    },
  }
)

if (typeof res.path === 'string') {
  projectPath = res.path.trim()
}

const resolvedProjectPath = path.resolve(projectPath)
const projectName = path.basename(resolvedProjectPath)

/**
 * Select package manager
 */

const packageManager = await GetPackageManager()

if (packageManager === null) {
  process.exit()
}

/**
 * Select template prompt
 */

const templateList = await GetTemplates()

if (!templateList.length) {
  console.log(chalk.red('> Unable to load templates :('))
  process.exit()
}

const response = await prompts<string>(
  {
    choices: templateList,
    message: 'Pick template',
    name: 'template',
    type: 'select',
  },
  {
    onCancel: () => {
      process.exit()
    },
  }
)

if (!response.template || typeof response.template !== 'string') {
  console.log(chalk.red('> Please select a template :('))
  process.exit()
}

/**
 * Make project directory
 */

try {
  await MakeDir(resolvedProjectPath)
} catch (err) {
  console.log(chalk.red('> Failed to create specified directory :('))
  process.exit()
}

/**
 * Make sure directory is clean
 */

if (!IsFolderEmpty(resolvedProjectPath, projectName)) {
  process.exit()
}

/**
 * Download and extract template
 */

const spinner = ora({
  text: chalk.bold('Downloading template...'),
}).start()

try {
  await DownloadAndExtractTemplate(resolvedProjectPath, response.template)
  spinner.succeed(chalk.bold('Downloaded template'))
} catch (err) {
  spinner.fail(chalk.bold('Failed to download selected template :('))
  process.exit()
}

/**
 * Update project name
 */

try {
  execSync(
    `npx -y json -I -f package.json -e "this.name=\\"${projectName}\\""`,
    {
      cwd: resolvedProjectPath,
      stdio: 'ignore',
    }
  )
} catch (err) {
  console.log(chalk.red('> Failed to update project name :('))
}

/**
 * Init git
 */

TryGitInit(resolvedProjectPath)

/**
 * Install packages
 */

await InstallPackage(resolvedProjectPath, packageManager)

/**
 * End
 */
const isWin = process.platform === 'win32'

console.log(
  chalk.greenBright('√'),
  chalk.bold('Created 24x7-Bot (24x7) project'),
  chalk.gray('»'),
  chalk.greenBright(projectName)
)

console.log(chalk.blueBright('?'), chalk.bold('Next Steps!'))
console.log(`\t> cd ${projectPath}`)

if (PackageManager.none === packageManager) {
  console.log('\t> npm install')
}

if (isWin) {
  console.log(chalk.dim('\t> // Command Prompt (CMD)'))
  console.log('\t> Create .env file with TOKEN=youre-bot-token')
  console.log(chalk.dim('\t> // Powershell'))
  console.log('\t> Create .env file with TOKEN=youre-bot-token"')
} else {
  console.log('\t> Create .env file with TOKEN=youre-bot-token')
}

if (PackageManager.none === packageManager) {
  console.log('\t> npm run dev')
} else {
  console.log(`\t> ${PackageManager[packageManager]} run dev`)
}

console.log()
console.log(chalk.blueBright('?'), chalk.bold('Support'))
console.log('    Discord Server: https://discord.gg/9yUjFtcFqP')
console.log('     Documentation: https://24x7.gg')
console.log('            GitHub: https://github.com/24x7-dev/24x7-Bot')
console.log()
console.log(
  chalk.greenBright('√'),
  chalk.bold('Thank you for using 24x7 (24x7)'),
  chalk.red('❤️')
)
