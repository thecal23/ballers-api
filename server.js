const express = require('express')
const app = express()
const PORT = 8000
const cors = require('cors')

app.use(cors())

const ballers = {
    "lebron james": {
        "name":"LeBron James",
        "team":"Los Angeles Lakers",
        "position":"Forward",
        "height":`6'9"`,
        "weight":"250 lbs",
        "age":37,
    },
    "stephen curry": {
        "name":"Stephen Curry",
        "team":"Golden State Warriors",
        "position":"Guard",
        "height":`6'2"`,
        "weight":"185 lbs",
        "age":34,
    },
    "kevin durant":{
        "name":"Kevin Durant",
        "team":"New Jersey Nets",
        "position":"Forward",
        "height":`6'10"`,
        "weight":"240 lbs",
        "age":33,
    },
    "jimmy butler":{
        "name":"Jimmy Butler",
        "team":"Miami Heat",
        "position":"Forward",
        "height":`6'7"`,
        "weight":"230 lbs",
        "age":32,
    },
    "giannis antetokounmpo":{
        "name":"Giannis Antetokounmpo",
        "team":"Milwaukee Bucks",
        "position":"Forward",
        "height":`6'11"`,
        "weight":"242 lbs",
        "age":27,
    },
    "jayson tatum":{
        "name":"Jayson Tatum",
        "team":"Boston Celtics",
        "position":"Forward",
        "height":`6'8"`,
        "weight":"210 lbs",
        "age":24,
    },
    "ja morant":{
        "name":"Ja Morant",
        "team":"Memphis Grizzlies",
        "position":"Guard",
        "height":`6'3"`,
        "weight":"174 lbs",
        "age":22,
    },
    "devin booker":{
        "name":"Devin Booker",
        "team":"Phoenix Suns",
        "position":"Guard",
        "height":`6'5"`,
        "weight":"206 lbs",
        "age":33,
    },
    "damian lillard":{
        "name":"Damian Lillard",
        "team":"Portland Trail Blazers",
        "position":"Guard",
        "height":`6'2"`,
        "weight":"195 lbs",
        "age":31,
    },
    "anthony edwards":{
        "name":"Anthony Edwards",
        "team":"Minnesota Timberwolves",
        "position":"Guard",
        "height":`6'4"`,
        "weight":"225 lbs",
        "age":20,
    },
    "unknown":{
        "name":"unknown",
        "team":"unknown",
        "position":"unknown",
        "height":`unknown`,
        "weight":"unknown",
        "age":"unknown",
    }
}

// app.use("/static", express.static('./static/'));

app.get('/', (req,res) => {
    res.sendFile(__dirname + "/index.html")
})

app.get('/js/main.js',(req,res)=> {
    res.sendFile(__dirname + '/js/main.js')
})

app.get('/api/:name',(req,res)=>{
    const ballerName = req.params.name.toLowerCase()
    if(ballers[ballerName]){
        res.json(ballers[ballerName])
    } else {
        res.json(ballers["unknown"])
    }
})

app.listen(process.env.PORT || PORT , ()=>{
    console.log(`We are now live on PORT ${PORT}`)
})