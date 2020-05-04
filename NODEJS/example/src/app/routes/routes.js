const LivroDao = require('../infra/livro-dao')
const db = require('../config/database')

module.exports = (app) => {

	app.get('/', (req, res) => {
		res.send(
			`
			<html>
				<body>
					ROOT
				</body>
			</html>
			`
		)
	})
	
	
	app.get('/livros', (req, resp) => {
		db.all('SELECT * FROM livros', (err, res) => {
			console.log(res)
			tabela = ''
			for (i = 0; i <= data.livros.lenght; i++){
				livro = data.livros[i]
				tabela += `	<tr>
								<td>${livro.id}</td>
								<td>${livro.titulo}</td>
							</tr>
							`
			}

			resp.send(`
				<html>
					<head>
						<meta charset="utf-8">
					</head>
					<body>
						<h1> Listagem de livros </h1>
				
						<table>
							<tr>
								<td>ID</td>
								<td>Título</td>
							</tr>
							${tabela}
						</table> 
					</body> 
				</html>`
	
		);})

		
	});

}