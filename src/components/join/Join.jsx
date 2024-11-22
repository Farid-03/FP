import './join.css'

const Join = () => {
	return (
		<section className='join'>
			<div className='join__content'>
				<div className='join__header'>
					<h2>JOIN SHOPPING COMMUNITY TO GET MONTHLY PROMO</h2>
				</div>
				<div className='join__subheader'>
					<p>Type your email down below and be young wild generation</p>
				</div>
				<div className='join__form'>
					<input
						type='email'
						className='join__input'
						placeholder='Add your email here'
					/>
					<button className='join__btn'>Send</button>
				</div>
			</div>
		</section>
	)
}

export default Join
