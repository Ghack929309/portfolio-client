import { Header, About, Footer, Skills, Work, Testimonial } from "./container";
import { Navbar } from "./components";
function App() {
	return (
		<div className="app">
			<Navbar />
			<Header />
			<About />
			<Work />
			<Skills />
			<Testimonial />
			<Footer />
		</div>
	);
}

export default App;
