import './payday.css'
import promoImg from './../../img/images/promo-img.webp'

const Payday = () => {
	return (
		<section className='payday'>
			<div className='payday__content'>
				<div className='payday__img'>
					<img src={promoImg} alt='Payday' />
				</div>
				<div className='payday__text'>
					<div className='payday__title'>
						<span className='highlight'>
							<span>PAYDAY</span>
						</span>
						<span className='payday__tittle-2'>SALE NOW</span>
					</div>
					<div className='payday__desc '>
						Spend minimal $100 get 30% off voucher code for your next purchase
					</div>
					<div className='payday__data'>1 June - 10 June 2021</div>
					<div className='payday__politics'>*Terms & Conditions apply</div>
					<div className='payday__btn-wrapper'>
						<a href='#!' className='payday__btn'>
							Shop Now
						</a>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Payday
