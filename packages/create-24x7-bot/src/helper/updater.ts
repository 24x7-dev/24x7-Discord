import boxen from 'boxen'
import chalk from 'chalk'
import isInstalledGlobally from 'is-installed-globally'
import { readFile } from 'node:fs/promises'
import checkForUpdate from 'update-check'

/**
 * Read package.json
 */
const packageJson = JSON.parse(
  await readFile(new URL('../../package.json', import.meta.url), 'utf-8')
)

/**
 * Check for update
 */

let update = null

try {
  update = await checkForUpdate(packageJson)
} catch (err) {
  console.log(
    boxen('Failed to check for updates', {
      align: 'center',
      borderColor: 'red',
      borderStyle: 'round',
      margin: 1,
      padding: 1,
    })
  )
}

if (update) {
  const updateCmd = isInstalledGlobally
    ? 'npm i -g create-24x7-bot@latest'
    : 'npm i create-24x7-bot@latest'

  const template = `Update available ${chalk.dim(
    `${packageJson.version}`
  )}${chalk.reset(' → ')}${chalk.green(`${update.latest}`)} \nRun ${chalk.cyan(
    updateCmd
  )} to update`

  console.log(
    boxen(template, {
      align: 'center',
      borderColor: 'yellow',
      borderStyle: 'round',
      margin: 1,
      padding: 1,
    })
  )
}

export default packageJson.version