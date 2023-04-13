import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import View from "./Pages/View";
import { ListProvider } from "./Context/List.context";

import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  html, body {
    margin: 0;
    padding: 0;
  }

  * {
    font-family: 'Montserrat', sans-serif;
		box-sizing: border-box;
  }
`

const App = () => {
	return (
		<ListProvider>
			<GlobalStyle />
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/lista/:id" element={<View />} />
				</Routes>
			</BrowserRouter>
		</ListProvider>
	);
}

export default App;
