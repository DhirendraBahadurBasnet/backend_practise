// require('dotenv').config()
import express from 'express'
const app = express()
const port = process.env.PORT || 3000


app.use(express.static('dist'))

// app.get('/', (req, res) => {
//   res.send('Server is Ready')
// })

app.get('/api/jokes', (req, res) => {
    const jokes =[
      
        {
            "id":1,
            "title":"first joke ",
            "content":"this is first joke"
        },
        {
            "id":2,
            "title":"second joke ",
            "content":"this is second joke"
        },
        {
            "id":3,
            "title":"third joke ",
            "content":"this is third joke"
        },
        {
            "id":4,
            "title":"fourth joke ",
            "content":"this is fourth joke"
        }

    ];
  res.send(jokes)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})