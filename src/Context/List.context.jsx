import React, { createContext, useContext, useState } from "react"

const ListContext = createContext({
	list: [],
	setList: () => { }
})

export const useListContext = () => useContext(ListContext);

export const ListProvider = ({ children }) => {
	const [list, setList] = useState([
		{
			name: 'Lista de Compras',
			id: new Date().getTime(),
			itens: []
		},
		{
			name: 'Lista de Vendas',
			id: new Date().getTime() * 2,
			itens: []
		},
		{
			name: 'Lista de Afazeres',
			id: new Date().getTime() * 4,
			itens: []
		},
	])

	return (
		<ListContext.Provider value={{ list, setList }}>
			{children}
		</ListContext.Provider>
	)
}