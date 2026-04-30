const express = require('express')
const app = express()
const port = 3000
// const router = express.Router()

 //#Applocation-level Middleware
// app.use((req,res,next)=>{
//  console.log("Hello from Middleware")
//  next()
// })

// //Get the method and route in middleware
// app.use((req,res,next)=>{
//  console.log(`${req.method} ${req.url}`)
//  next()
// })

// //Get the Date in middleware
// app.use((req,res,next)=>{
//     const d = new Date()
//     console.log(`Date:${d.getDate()} / ${d.getMonth()}`)
//  next()
// })


// //Get the Time in middleware
// const mymiddleware=((req,res,next)=>{
//     const d = new Date()
//     console.log(`Time:${d.getHours()} : ${d.getMinutes()}`)
//  next()
// })

// //app.use(mymiddleware)


// app.get('/', mymiddleware,(req, res) => {
//   res.send('<h1>Home Page</h1>')
// })

// app.get('/',(req, res) => {
//   res.send('<h1>Home Page</h1>')
// })

// app.get('/about', (req, res) => {
//   res.send('<h1>About Page</h1>')
// })


// #Route-Level Middleware
// router.use((req,res,next)=>{
//  console.log("Hello  from Router-Middleware")
//  next()
// })

// router.get('/',(req, res) => {
//   res.send('<h1>Home Page</h1>')
// })

// router.get('/about', (req, res) => {
//   res.send('<h1>About Page</h1>')
// })

// app.use('/test',router)

// #Error-Based Middleware


//  app.get('/', (req, res) => {
//   res.send('<h1>Home Page</h1>')
// })

// app.get('/about',(req, res) => {
//   res.sen('<h1>About Page</h1>')
// })

// app.use((err,req,res,next)=>{
//  console.error(err.stack)
//  res.status(500).send("Something went wrong")
//  next()
// })

//  app.use((req,res)=>{
//     res.send("page not found")
// })

//Show error if a page wanted to be access that doesnt exist

//  app.get('/', (req, res) => {
//   res.send('<h1>Home Page</h1>')
// })

// app.get('/about',(req, res) => {
//   res.send('<h1>About Page</h1>')
// })

//  app.use((req,res)=>{
//     res.send("page not found")
// })

 app.get('/', (req, res) => {
  res.send('<h1>Home Page</h1>')
})

app.get('/about',(req, res) => {
  res.send('<h1>About Page</h1>')
})



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})