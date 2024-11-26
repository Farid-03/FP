import './footer.css'
import Facebook from './../../img/socials/fb.svg'
import Linkedin from './../../img/socials/in.svg'
import İnstagram from './../../img/socials/inst.svg'
import Twitter from './../../img/socials/tw.svg'

const Footer = () => {
	return (
		<footer className='footer'>
			<div className='container'>
				<div className='footer__content'>
					<div className='footer__left'>
						<h2 className='footer__title'>FASHION</h2>
						<p className='footer__description'>
							Complete your style with awesome clothes from us.
						</p>
						<div className='footer__socials'>
							<a href='#!' className='footer__icon'>
								<img src={Facebook} alt='Facebook' />
							</a>
							<a href='#!' className='footer__icon'>
								<img src={İnstagram} alt='İnstagram' />
							</a>
							<a href='#!' className='footer__icon'>
								<img src={Twitter} alt='Twitter' />
							</a>
							<a href='#!' className='footer__icon'>
								<img src={Linkedin} alt='Linkedin' />
							</a>
						</div>
					</div>

					<div className='footer__right'>
						<div className='footer__column'>
							<a href='#!' className='footer__up'>
								Company
							</a>
							<a href='#!' className='footer__link'>
								About
							</a>
							<a href='#!' className='footer__link'>
								Contact us
							</a>
							<a href='#!' className='footer__link'>
								Support
							</a>
							<a href='#!' className='footer__link'>
								Careers
							</a>
						</div>
						<div className='footer__column'>
							<a href='#!' className='footer__up'>
								Quick Link
							</a>
							<a href='#!' className='footer__link'>
								Share Location
							</a>
							<a href='#!' className='footer__link'>
								Orders Tracking
							</a>
							<a href='#!' className='footer__link'>
								Size Guide
							</a>
							<a href='#!' className='footer__link'>
								FAQs
							</a>
						</div>
						<div className='footer__column'>
							<a href='#!' className='footer__up'>
								Legal
							</a>
							<a href='#!' className='footer__link'>
								Terms & conditions
							</a>
							<a href='#!' className='footer__link'>
								Privacy Policy
							</a>
						</div>
					</div>
				</div>
			</div>
		</footer>
	)
}

export default Footer
