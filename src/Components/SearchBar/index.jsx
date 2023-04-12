import React from "react"
import { InputSearch } from "./styled"
import { FaPlus, FaSearch } from 'react-icons/fa'
import { Flex } from "../../Styles"

const SearchBar = () => {
	return (
		<Flex alignItens="center">
			<FaSearch />
			<InputSearch type="text" placeholder="Buscar lista" />
			<FaPlus />
		</Flex>
	)
}

export default SearchBar