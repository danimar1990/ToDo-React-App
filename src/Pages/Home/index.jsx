import React, { useState } from "react"
import Header from "../../Components/Header"
import Footer from "../../Components/Footer"
import SearchBar from "../../Components/SearchBar"
import Container from "../../Components/Container"
import RenderList from "../../Components/RenderList"
import BarInput from "../../Components/BarInput"
import { useListContext } from "../../Context/List.context"

const Home = () => {
	const [term, setTerm] = useState('')
	const [listName, setListName] = useState('')
	const [add, setAdd] = useState(false)

	const { list, setList } = useListContext()

	const addOne = () => {
		const novoItem = {
			name: listName,
			id: new Date().getTime() * 4,
			itens: []
		}

		const novaLista = [...list, novoItem]
		setList(novaLista)
		setListName('')
	}

	const removeOne = (id) => {
		const newList = list.filter(item => item.id !== id)

		setList(newList)
	}

	return (
		<div>
			<Header />
			<Container title="teste" description="teste 1">
				<div>
					<SearchBar term={term} setTerm={setTerm} add={add} setAdd={setAdd} />
					{
						add &&
						<BarInput
							setListName={setListName}
							listName={listName}
							addOne={addOne}
						/>
					}
					<RenderList list={list} term={term} removeOne={removeOne} />
				</div>
			</Container>
			<Footer />
		</div>
	)
}

export default Home