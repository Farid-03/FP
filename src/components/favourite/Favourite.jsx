import Cards from '../cards/Cards'
import './favourite.css'

import Promo1 from './../../img/images/promo-01.jpg'
import Promo2 from './../../img/images/promo-02.jpg'

const Favourite = () => {
	return (
		<section className='favourite'>
			<div className='container'>
				<div className='favourite__header'>
					<h2 className='title-2'>Young’s Favourite</h2>
				</div>
				<div className='favourite__cards'>
					<Cards title='Hoodies & Sweetshirt' img={Promo1} />
					<Cards title='Coats & Parkas' img={Promo2} />
				</div>
			</div>
		</section>
	)
}

export default Favourite
