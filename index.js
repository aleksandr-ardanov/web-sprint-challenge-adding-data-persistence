const server = require('./api/server')

const port = 5555;

server.listen(port, () => {
    console.log(`server is up and running on port ${port}`)
})