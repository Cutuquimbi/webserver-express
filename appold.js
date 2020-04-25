const http = require('http');
const app = express();

app.use(express.static(__dirname + '/public'));

http.createServer((req, res) => {
        res.writeHead(200, { 'Content-Type': 'application/json' });

        let salida = {
            nombre: 'Jony',
            edad: 32,
            url: req.url
        }

        res.write(JSON.stringify(salida));
        res.end();
    })
    .listen(8080);


console.log(`Escuchando el puerto 8080`);