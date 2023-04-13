import React, { useMemo } from "react"
import { ListItem } from "./styled"
import { FaEye, FaTrash } from "react-icons/fa"
import { Link } from "react-router-dom"

const RenderList = ({ list, term, removeOne }) => {
	console.log(list)

	const listFiltered = useMemo(() => {
		return list.filter(item => {
			return item.name.toLowerCase().includes(term.toLowerCase())
		})
	}, [term, list])

	return (
		<div>
			{
				listFiltered.map((item, index) => (
					<ListItem key={item.id} className={`${index % 2 !== 0 ? 'divisor' : ''}`}>
						<div>
							{item.name}
						</div>
						<div>
							<Link>
								<FaEye to={`/lista/${item.id}`} />
							</Link>
							<FaTrash onClick={() => removeOne(item.id)} />
						</div>
					</ListItem>
				))
			}
			<div></div>
		</div>
	)
}

export default RenderList