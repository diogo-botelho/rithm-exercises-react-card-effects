// import react from 'react';

function Card({ card }) {
    return (
        <div>
            <img id = {card.code} className="card" src={card.image}></img>
        </div>
    ) 
}

export default Card;