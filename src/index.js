import {config} from 'dotenv'
config();


import app from './api/server.js';
import {swaggerDocs} from './api/v1/swagger.js'
app.listen(process.env.PORT, () => {
    console.info(`Server is running in http://localhost:${process.env.PORT}/api/v1`)
    swaggerDocs(app,process.env.PORT)
})