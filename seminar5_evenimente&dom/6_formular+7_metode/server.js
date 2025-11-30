let express = require('express')
let bodyParser = require('body-parser')
let cors = require('cors')

let app = express()
let router = express.Router()

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(cors())
app.use('/api', router)

const array = [
    { id: 1, name: "Ionuț", age: 25 },
    { id: 2, name: "Alex", age: 18 },
    { id: 3, name: "Mihai", age: 13 },
    { id: 4, name: "Marcel", age: 12 },
    { id: 5, name: "Marius", age: 22 }
]

router.route('/getList').get((req, res) => {
    res.json(array)
})

router.route('/postList').post((req, res) => {
    let el = req.body
    el.id = array.length + 1
    array.push(el)
    res.json(el)
})

router.route('/getResource/:id').get((req, res) => {
    let idCautat = parseInt(req.params.id);
    let elementGasit = array.find(item => item.id === idCautat);

    if (elementGasit) {
        res.status(200).json(elementGasit);
    } else {
        res.status(404).json({ message: "Nu am găsit resursa" });
    }
})

router.route('/updateList/:id').put((req, res) => {
    let id = parseInt(req.params.id);
    let index = array.findIndex(item => item.id === id);

    if (index > -1) {
        array[index].name = req.body.name || array[index].name;
        array[index].age = req.body.age || array[index].age;
        res.json(array[index]);
    } else {
        res.status(404).json({ message: "Nu am găsit persoana de modificat" });
    }
})

router.route('/deleteList/:id').delete((req, res) => {
    let id = parseInt(req.params.id);
    let index = array.findIndex(item => item.id === id);

    if (index > -1) {
        array.splice(index, 1);
        res.json({ message: "Sters cu succes" });
    } else {
        res.status(404).json({ message: "Nu am găsit persoana de șters" });
    }
})

let port = 8000
app.listen(port)
console.log(" Serverul a pornit pe portul 8000!")