import styles from './Card.module.css';

function Card({ country }) {

    const name = country.common;
    const image = country.png;

    return (
        <div className={styles.countryCard}>
            <img src={image} alt={name} className={styles.flagImage} />
            <h3>{name}</h3>
        </div>
    )
}

export default Card;