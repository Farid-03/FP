import './downloads.css'
import vouchersImg from './../../img/images/vouchers-img.png'
import appleIcon from './../../img/icons/app-store.png'
import googleIcon from './../../img/icons/google-play.png'

const Downloads = () => {
	return (
		<section className='downloads'>
			<div className='downloads__content'>
				<div className='downloads__text'>
					<div className='downloads__title'>
						<span className='downloads__title-2'>
							DOWNLOAD APP & GET THE VOUCHER!
						</span>
					</div>
					<div className='downloads__desc'>
						Get 30% off for first transaction using Rondovision mobile app for
						now.
					</div>
					<a href='#!' className='downloads__btn'>
						<img src={appleIcon} alt='Apple' />
						<img className='gogbtn' src={googleIcon} alt='Google' />
					</a>
				</div>
				<div className='downloads__img'>
					<img src={vouchersImg} alt='Voucher' />
				</div>
			</div>
		</section>
	)
}

export default Downloads
