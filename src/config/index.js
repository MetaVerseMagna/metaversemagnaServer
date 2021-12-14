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
    PRIVATE_KEY: env.PRIVATE_KEY
  }
}