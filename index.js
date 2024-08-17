const express = require('express')
const app = express()
const port = 3001

app.get('/', (req, res) => {
  res.send('Hello Express JS Deploy With PM2, Nginx Reverse Proxy, Jenkins CI/CD!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
