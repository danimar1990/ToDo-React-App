
import React from "react"
import { ContainerContent } from "./styled"

const Container = (props) => {
	console.log(props);
	return (
		<ContainerContent>
			{props.children}
		</ContainerContent>
	)
}

export default Container