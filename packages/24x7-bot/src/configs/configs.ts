// Configure environments
import 'dotenv/config'

const token: string = process.env.TOKEN || ''

// eslint-disable-next-line import/prefer-default-export
export { token }
