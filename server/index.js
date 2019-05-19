const app = require('./app')

// Start the server
const { port } = require('./configuration')
app.listen(port, () => console.info(`Server has started on ${port}`))
