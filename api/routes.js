const
    express = require('express'),
    router = express.Router(),
    superagent = require('superagent')
path = require('path')


module.exports = () => {

    router.get('/api/:type', (req, res) => {


        const { type } = req.params, { number } = req.query

        superagent
            .get(`http://numbersapi.com/${number}/${type}`)
            .query({ json: true })
            .end((err, response) => {
                //        res.json(response.body)
                res.json(response.body)

            })

    })

    router.get('*', (req, res) => {
        res.sendFile(path.join(__dirname, '../client/index.html'))
    })

    return router
}