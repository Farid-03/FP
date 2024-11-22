import Arrivals from './components/arrivals/Arrivals'
import Brands from './components/brands/Brands'
import Header from './components/header/Header'
import Promo from './components/promo/Promo'
import Payday from './components/payday/Payday'
import Favourite from './components/favourite/Favourite'
import Downloads from './components/downloads/Downloads'
import Join from './components/join/Join'

function App() {
	return (
		<div className='App'>
			<Header />
			<Promo />
			<Brands />
			<Arrivals />
			<Payday />
			<Favourite />
			<Downloads />
			<Join />
		</div>
	)
}

export default App
