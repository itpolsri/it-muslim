const express = require('express')
const bodyParser = require('body-parser')
const nunjucks = require('nunjucks')
const axios = require('axios').default

const envNunjucks = 
    new nunjucks.Environment(
        new nunjucks.FileSystemLoader('templates')
    )



const app = express()
envNunjucks.express(app)


app.use('/assets',express.static(__dirname + '/assets'))
app.use(bodyParser.urlencoded({
    extended:true
}))



 

app.get('/surah/:surah',(req,res)=>{
    axios
        .get(`http://api.alquran.cloud/surah/${req.params.surah}/ar.alafasy`)
        .then(r=>{
            const {data} = r.data

            res.render('index.html',{
                pageTitle:'Index Page',
                data
            })
        })
        .catch(err=>{
            console.error('ERR_RESPONSE',err)
            res.send('ERR')
        })
})

app.get('/',(req,res)=>{ 

    axios
        .get(`http://api.alquran.cloud/surah/1/ar.alafasy`)
        .then(r=>{
            const {data} = r.data

            res.render('index.html',{
                pageTitle:'Index Page',
                data
            })
        })
        .catch(err=>{
            console.error('ERR_RESPONSE',err)
            res.send('ERR')
        })

})

app.listen(9696,()=> console.log('server running...'))