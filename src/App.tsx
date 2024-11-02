import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Interface from "./pages/Interface";
import Components from "./pages/Components";
import Pages from "./pages/Pages";
import Forms from "./pages/Forms";
import Gallery from "./pages/Gallery";
import Documentation from "./pages/Documentation";

const App = () => {
	return (
		<>
			<BrowserRouter>
			<Header />
			<Navbar />
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/interface' element={<Interface />} />
					<Route path='/components' element={<Components />} />
					<Route path='/pages' element={<Pages />} />
					<Route path='/forms' element={<Forms />} />
					<Route path='/gallery' element={<Gallery />} />
					<Route path='/documentation' element={<Documentation />} />
				</Routes>
			</BrowserRouter>
		</>
	);
};

export default App;
