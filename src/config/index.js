require("dotenv").config() // Load env to process.env


const env = process.env


module.exports = {
  APP_NAME: env.APP_NAME,
  PORT: env.PORT,
  BCRYPT_SALT: 10,


  "url": {
    BASE_URL: env.BASE_URL,
    CLIENT_URL: env.CLIENT_URL
  },

  "nodemailer": {
    HOST: env.MAILER_HOST,
    USER: env.MAILER_USER,
    PASSWORD: env.MAILER_PASSWORD,
    PORT: env.MAILER_PORT,
    SECURE: env.MAILER_PASSWORD,
    DOMAIN: env.MAILER_DOMAIN
  },

  "mongodb": {
    URI: env.MONGODB_URI,
  },

  "jwt": {
    AUTH_SECRET: env.JWT_AUTH_SECRET,
  },

  "blockchain": {
    CONTRACT_ADDRESS_721: env.CONTRACT_ADDRESS_721,
    NODE: env.NODE,
    PRIVATE_KEY: env.PRIVATE_KEY,
    NODE_SOCKET: env.NODE_SOCKET,
    MORALIS_SERVER_URL: env.MORALIS_SERVER_URL,
    MORALIS_APP_ID: env.MORALIS_APP_ID,
    PINATA_API_KEY: env.PINATA_API_KEY,
    PINATA_API_SECRET: env.PINATA_API_SECRET,
    PINATA_JWT: env.PINATA_JWT,
    BADGE_HASH: env.BADGE_HASH,
    METADATA_DESCRIPTION: env.METADATA_DESCRIPTION,
    METADATA_NAME: env.METADATA_NAME,
    IPFS_GATEWAY_BASE_URL: env.IPFS_GATEWAY_BASE_URL
  }
}