import express from 'express'
import morgan from 'morgan'
import * as Sentry from '@sentry/node'
import { ProfilingIntegration } from "@sentry/profiling-node"
import rateRoutesV1 from './v1/routes/rates.js'
import clean_files  from '../utils/cleanTemp.js'

const app = express()
Sentry.init({
  dsn: process.env.SENTRY_DSN,
  integrations: [
    // enable HTTP calls tracing
    new Sentry.Integrations.Http({ tracing: true }),
    // enable Express.js middleware tracing
    new Sentry.Integrations.Express({ app }),
    new ProfilingIntegration(),
  ],
  // Performance Monitoring
  tracesSampleRate: 1.0,
  // Set sampling rate for profiling - this is relative to tracesSampleRate
  profilesSampleRate: 1.0,
})
app.use(Sentry.Handlers.requestHandler());
app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(Sentry.Handlers.tracingHandler())

app.use('/api/v1/rates',rateRoutesV1)
app.get("/debug-sentry", function mainHandler(req, res) {
  throw new Error("My first Sentry error!");
});


app.use(Sentry.Handlers.errorHandler())
app.use(function onError(err, req, res, next) {
  // The error id is attached to `res.sentry` to be returned
  // and optionally displayed to the user for support.
  res.statusCode = 500;
  res.end(res.sentry + "\n");
});
clean_files()
export default app;