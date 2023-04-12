import React from "react"
import { InputSearch } from "./styled"
import { FaPlus, FaSearch } from 'react-icons/fa'
import { Flex } from "../../Styles"

const SearchBar = ({ term, setTerm }) => {
	return (
		<Flex alignItens="center">
			<FaSearch />
			<InputSearch
				type="text"
				placeholder="Buscar lista"
				value={term}
				onChange={(e) => setTerm(e.target.value)}
			/>
			<FaPlus />
		</Flex>
	)
}

export default SearchBar