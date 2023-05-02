import Footer from "./Footer";
import Navbar from "./Navbar";
export default function Layout({ children }) {
	return (
		<div className="bg-gradient-to-b from-emerald-800 to-emerald-950 min-h-screen text-white">
			<Navbar />
			{children}
			<Footer />
		</div>
	);
}
