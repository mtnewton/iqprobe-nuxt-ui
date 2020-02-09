import express from 'express'
import httpProxy from 'http-proxy'
import cors from 'cors'

const proxy = httpProxy.createProxyServer({
  secure: false,
  target: process.env.IQPROBE_API_URL + '/api'
})

const app = express()

app.use(
  cors({
    origin(origin, callback) {
      const whitelist = process.env.CORS_WHITELIST.split(',')
      const valid = whitelist.find((domain) => {
        return origin == null || origin.includes(domain)
      })
      return callback(null, !!valid)
    }
  })
)

app.all('*', async (req, res) => {
  proxy.web(req, res)
})

// Export the server middleware
export default {
  path: '/api',
  handler: app
}
