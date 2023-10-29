import swaggerJSDoc from 'swagger-jsdoc'
import swaggerUI from 'swagger-ui-express'


const opts = {
    definition: {
    openapi: "3.0.0",
    info: { title: "CR Exchange Rates API", version: "1.0.0" },
  },
  apis: ["src/api/v1/routes/rates.js"],
};

const swaggerSpecs = swaggerJSDoc(opts);

export const swaggerDocs = (app, port) => {
  app.use('/api/docs/v1', swaggerUI.serve, swaggerUI.setup(swaggerSpecs))
  console.log(`Api docs running on http://localhost:${port}/api/docs/v1/`)
}