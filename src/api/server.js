import express from 'express'
import morgan from 'morgan'


import rateRoutesV1 from './v1/routes/rates.js'

const app = express()

app.use(morgan('dev'))
app.use(express.urlencoded({extended:true}))

app.use('/api/v1/rates',rateRoutesV1)

export default app;