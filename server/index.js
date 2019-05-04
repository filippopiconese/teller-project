const app = require('./app')

// Start the server
const { port } = require('../config')
app.listen(port, () => console.info(`Server has started on ${port}`))
