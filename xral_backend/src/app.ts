import express from 'express'
import feedRoutes from './routes/feed.routes'

const app = express()

app.use(express.json())

app.use('/api', feedRoutes)

export default app
