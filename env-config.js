const Dotenv = require('dotenv')

const dotEnvVars = Dotenv.config().parsed

module.exports = {
  'AUTH0_CLIENT_ID': dotEnvVars.AUTH0_CLIENT_ID || 'secret',
  'AUTH0_DOMAIN': dotEnvVars.AUTH0_DOMAIN || '<domain>.auth0.com',
  'ROCKET_API_HOST': dotEnvVars.ROCKET_API_HOST || 'localhost:3001',
  'ROOT_URL': dotEnvVars.ROOT_URL || 'localhost:3002'
}
