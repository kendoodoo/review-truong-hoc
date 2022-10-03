// begins my big project journey :)))
// kendoodoo make this of course (og terrorist)
// use freely except the data

// imports
const compression = require('compression')
const express = require('express')
const app = express()
const path = require('path')
const port = 3000
const rateLimit = require('express-rate-limit')

const school_info = require('./handle/database/schoolinfo')
const review_post = require('./handle/database/post')

var quote = require('./handle/custom/quotes')

// use ejs
app.set('view engine', 'ejs')
// optimize cached
app.set('view cache', true)
// gzip
app.use(compression())
// assets folder 
app.use('/assets', express.static(path.join(__dirname, './assets')))
// limiter
const limiter = rateLimit({
	windowMs: 15 * 60 * 1000, // 15 minutes
	max: 1000, // Limit each IP to 100 requests per `window` (here, per 15 minutes)
	standardHeaders: false, // Return rate limit info in the `RateLimit-*` headers
	legacyHeaders: true, // Disable the `X-RateLimit-*` headers
})
// Apply the rate limiting middleware to all requests
app.use(limiter)
// here comes the joke
app.use(function (req, res, next) {
  res.setHeader('X-Powered-By', 'your mom')
  res.setHeader('notice', 'reading headers doesn"t help anything ;)')
  next()
})



// homepage
app.get("/", async (req, res) => {
  const schooldb = await school_info.find()
  res.render('index', {
    school_info: schooldb
  })
})

// school db review fetch
app.get("/school", (req, res) => {
  res.render('school')
})

// use 404 handle
app.use(function(req,res){
  res.status(404).render('errors/404');
});
// add post
/*fastify.post("/school/add_post", async (req, reply) => {

  if (!req.body.code) {
    reply.redirect('/')
  } else {
    const insert_post = new review_post({
        star_rating: req.body.star,
        post_user: req.body.user,
        title: req.body.title,
        content: req.body.content,
        from_school: req.body.school
    })
    
    await insert_post.save()
  }
})*/



// fire up da server
app.listen(port)