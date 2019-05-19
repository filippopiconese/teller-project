const app = require('./server/app')

// Start the server
const { port } = require('./server/configuration')
app.listen(port, () => console.info(`Server has started on ${port}`))
