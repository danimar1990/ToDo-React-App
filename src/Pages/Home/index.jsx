import React from "react"
import Header from "../../Components/Header"
import Footer from "../../Components/Footer"
import SearchBar from "../../Components/SearchBar"
import Container from "../../Components/Container"
import RenderList from "../../Components/RenderList"

const list = [
	{
		name: 'Lista de Compras 1',
		id: new Date().getTime() * 2,
		itens: []
	},
	{
		name: 'Lista de Compras 2',
		id: new Date().getTime() * 3,
		itens: []
	},
	{
		name: 'Lista de Compras 3',
		id: new Date().getTime() * 3,
		itens: []
	},
]

const Home = () => {
	return (
		<div>
			<Header />
			<Container title="teste" description="teste 1">
				<div>
					<SearchBar />
					<RenderList list={list} />
				</div>
			</Container>
			<Footer />
		</div>
	)
}

export default Home