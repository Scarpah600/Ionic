const variables = {
    Api: {
        port: process.env.port || 3000
    },
    Database: {
        connection: process.env.connection || 'mongodb+srv://gustavo:gustavo@mongodb-wjuv3.mongodb.net/test?retryWrites=true&w=majority'
    }
}
module.exports = variables;