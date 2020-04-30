const app = require('./src/app/config/custom-express')

app.listen(3000, () => {
	console.log("Servidor iniciando na porta 3000")

})








// USANDO NODEJS SEM EXPRESS
/*
const http = require('http')
const servidor = http.createServer((req, res) => {
	let html
	//console.log(req)



	if(req.url == '/'){
		html = `
		<html>
			<body>
			oi
			</body>
		</html>
	
			`
	
	}
	
	

	else if(req.url == '/livros'){
		html = `
		<html>
			<body>
			Pagina de Livros
			</body>
		</html>
		
		`
	

	}



















	res.end(html)
})
servidor.listen(3000)
*/


