import express from 'express'
import morgan from 'morgan'
import indicatorRoutes from './v1/routes/indicators.js'
import ratesRoutes from './v1/routes/rates.js'
const app = express()   
app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use('/api/v1/indicators', indicatorRoutes)
app.use('/api/v1/rates',ratesRoutes)

export default app;