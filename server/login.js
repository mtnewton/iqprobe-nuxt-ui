import express from 'express'
import axios from 'axios'
import cors from 'cors'

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

app.post('/', async (req, res) => {
  const response = await axios.post(
    process.env.IQPROBE_API_URL + '/oauth/token',
    {
      grant_type: 'password',
      client_id: process.env.IQPROBE_CLIENT_ID,
      client_secret: process.env.IQPROBE_CLIENT_SECRET,
      scope: '*',
      username: req.body.username,
      password: req.body.password
    },
    {
      headers: {
        Accept: 'application/json'
      }
    }
  )
  res.status(response.status).json(response.data)
})

// Export the server middleware
export default {
  path: '/login',
  handler: app
}
