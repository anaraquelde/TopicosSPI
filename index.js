const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) =>  {
    res.send('Hello Sistemas para Internet - P3 - Noite. A melhor turma.')
})

app.listen(port, () => {
    console.log(`Exemple app listening on port ${port}`)
})
