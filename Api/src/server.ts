import { env } from './env'
import { app } from './app'
import { authenticateInstagramLogin } from './utils/authenticateInstagramLogin'
// import { authenticateDiscordLogin } from './utils/authenticateDiscordLogin'

app
  .listen({
    host: '0.0.0.0',
    port: env.PORT,
  })
  .then(() => {
    console.log(`🚀 HTTP Server Running ${env.PORT} !`)
    authenticateInstagramLogin({
      igUsername: 'xdhjfvjksdhfjkhsdjkfsdfsd',
      igPassword: '210697efr',
    })
    // authenticateDiscordLogin(env.DISCORD_TOKEN_BOT)
  })
