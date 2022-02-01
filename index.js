const express = require('express');
const Database = require('./mysqlcon');

const cors = require('cors')

const port = 3001;

const app = express();

app.use(cors());
app.use(express.json())


app.get('/', (req, res) => {
    res.send('Servidor OK !!!');
})

app.get('/alumno', (req, res) => {
    const db = new Database()
    const cn = db.getConnection()
    cn.execute(
        'SELECT * FROM alumno', [],
        function (err, results, fields) {
            res.json(results)
        }
    );

})
app.get('/usuarios', (req, res) => {
    const db = new Database()
    const cn = db.getConnection()
    cn.execute(
        'SELECT * FROM usuarios', [],
        function (err, results, fields) {
            res.json(results)
        }
    );

})


app.get('/alumno/:id', (req, res) => {
    const { id } = req.params;
    const db = new Database()
    const cn = db.getConnection()
    cn.execute(
        'SELECT * FROM alumno WHERE id = ?', [id],
        function (err, results, fields) {
            res.json(results[0])
        }
    );

})
app.get('/usuarios/:id', (req, res) => {
    const { id } = req.params;
    const db = new Database()
    const cn = db.getConnection()
    cn.execute(
        'SELECT * FROM alumno WHERE id = ?', [id],
        function (err, results, fields) {
            res.json(results[0])
        }
    );

})

                    //REquest peticion     response  response
app.post('/alumno', (req, res) => {
    const body = req.body;
    console.log (body);
    const db = new Database()
    const cn = db.getConnection()

    const query = `INSERT INTO alumno   
                (id_alumno, nombre, apellido, edad) VALUES
                 (?,?,?,?)`;

    cn.execute(
        query, [body.id_alumno, body.nombre, body.apellido, body.edad],
        function (err, results, fields) {
            if (err) {
                res.status(500).json({
                    message: err.message
                })
            }
            else {
                res.json(body)
            }
        }
    );
})


app.put('/alumno', (req, res) => {
    const body = req.body;
    console.log (body);
    const db = new Database()
    const cn = db.getConnection()

    const query = `UPDATE alumno    
                SET nombre=?, apellido=?, edad=?
                WHERE id = ?`;
    cn.execute(
        query, [body.nombre, body.apellido, body.edad, body.id_alumno],
        function (err, results, fields) {
            if (err) {
                res.status(500).json({
                    message: err.message
                })
            }
            else {
                res.json(body)
            }
        }
    );
})
//Habilitamos el servidor en el puerto indicado
//En esta caso sera 3001 porque el 3000 ya es usado por React
app.listen(port, () => {
    console.log('Sevidor Express en: http://localhost:' + port);
})