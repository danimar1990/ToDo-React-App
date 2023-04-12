import React, { useState } from "react"
import Header from "../../Components/Header"
import Footer from "../../Components/Footer"
import SearchBar from "../../Components/SearchBar"
import Container from "../../Components/Container"
import RenderList from "../../Components/RenderList"

const Home = () => {
	const [term, setTerm] = useState('')
	const [list, setList] = useState([
		{
			name: 'Lista de Compras 1',
			id: new Date().getTime(),
			itens: []
		},
		{
			name: 'Lista de Compras 2',
			id: new Date().getTime() * 2,
			itens: []
		},
		{
			name: 'Lista de Compras 3',
			id: new Date().getTime() * 4,
			itens: []
		},
	])

	const adicionaUm = () => {
		const novoItem = {
			name: 'Lista de Compras 4',
			id: new Date().getTime() * 4,
			itens: []
		}

		const novaLista = [...list, novoItem]
		setList(novaLista)
		console.log(novaLista)
	}

	return (
		<div>
			<Header />
			<Container title="teste" description="teste 1">
				<div>
					<button onClick={adicionaUm}>a</button>
					<SearchBar term={term} setTerm={setTerm} />
					<RenderList list={list} term={term} />
				</div>
			</Container>
			<Footer />
		</div>
	)
}

export default Home