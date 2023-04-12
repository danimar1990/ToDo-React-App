import React from "react"
import Header from "../../Components/Header"
import Footer from "../../Components/Footer"
import SearchBar from "../../Components/SearchBar"
import Container from "../../Components/Container"

const Home = () => {
	return (
		<div>
			<Header />
			<Container title="teste" description="teste 1">
				<div>
					<SearchBar />
				</div>
			</Container>
			<Footer />
		</div>
	)
}

export default Home