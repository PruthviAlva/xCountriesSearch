import  './Card.css';

function Card({ country }) {

    const name = country.common;
    const image = country.png;

    return (
        <div className="countryCard">
            <img src={image} alt={name} className="flagImage" />
            <h2>{name}</h2>
        </div>
    )
}

export default Card;