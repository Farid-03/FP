import './payday.css';
import promoImg from './../../img/images/promo-img.jpg';

const Payday = () => {
    return (
        <section className="payday">
                <div className="payday__content">
                    <div className="payday__img">
                        <img src={promoImg} alt="Promo" />
                    </div>
                    <div className="payday__text">
                        <div className="payday__title">
                            <span className="highlight">
                                <span>LET’S</span>
                            </span>
                            EXPLORE
                            <span className="highlight">
                                <span>UNIQUE</span>
                            </span>
                            CLOTHES.
                        </div>
                        <div className="payday__desc">
                            Live for Influential and Innovative fashion!
                        </div>
                        <div className="payday__btn-wrapper">
                            <a href="#!" className="payday__btn">
                                Shop Now
                            </a>
                        </div>
                    </div>
                </div>
        </section>
    );
};

export default Payday;