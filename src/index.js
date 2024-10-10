import {config} from 'dotenv'
import app from './api/server.js';
config();
app.listen(process.env.PORT, () => {
    console.info(`Server is running in http://localhost:${process.env.PORT}/api/v1`)
})