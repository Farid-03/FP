import Card from '../card/Card'
import './favourite.css'

import cat01Img from './../../img/categories/cat-01.jpg'
import cat02Img from './../../img/categories/cat-02.jpg'
import cat03Img from './../../img/categories/cat-03.jpg'

const Favourite = () => {
	return (
		<section className='favourite'>
			<div className='container'>
				<div className='favourite__header'>
					<h2 className='title-2'>FAVOURITE ITEMS</h2>
				</div>
				<div className='favourite__cards'>
					<Card title='Hoodies & Sweetshirt' img={cat01Img} />
					<Card title='Coats & Parkas' img={cat02Img} />
					<Card title='Tees & T-Shirt' img={cat03Img} />
				</div>
			</div>
		</section>
	)
}

export default Favourite
