import React from "react"
import { ListItem } from "./styled"
import { FaEye, FaTrash } from "react-icons/fa"

const RenderList = ({ list }) => {
	console.log(list)

	return (
		<div>
			{
				list.map((item, index) => (
					<ListItem key={item.id} className={`${index % 2 !== 0 ? 'divisor' : ''}`}>
						<div>
							{item.name}
						</div>
						<div>
							<FaEye />
							<FaTrash />
						</div>
					</ListItem>
				))
			}
			<div></div>
		</div>
	)
}

export default RenderList