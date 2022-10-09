const swaggerJsDoc = require('swagger-jsdoc');


const options = {
    definition: {
        info: {
            title: 'My Api',
            version: '1.0.0'
        }
    }, 
    apis: ['./routes/*.js']
}

const swaggerDocs = swaggerJsDoc(options);
console.log(swaggerDocs)

module.exports = swaggerDocs