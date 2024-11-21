import styles from './Cards.module.css'
import arrowImg from './../../img/icons/arrow.svg'

const Cards = ({ title, img }) => {
	return (
		<div className={styles.cards}>
			<a href='#!' className={styles.cards__link}></a>
			<img className={styles.cards__img} src={img} alt='Category ...' />

			<div className={styles.cards__body}>
				<div className={styles.cards__text}>
					<div className={styles.cards__title}>{title}</div>
					<div className={styles.cards__muted}>Explore Now!</div>
				</div>
				<div className={styles.cards__icon}>
					<img src={arrowImg} alt='Open' />
				</div>
			</div>
		</div>
	)
}

export default Cards
