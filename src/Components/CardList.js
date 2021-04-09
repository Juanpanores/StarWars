import React from 'react';
import Card from './Card.js';

const CardList = ({handCards,pickCard}) => {
    return(
        <div className='hand'>
            {
            handCards.map((user,i) =>{
                return ( 
                    <Card 
                        user={user}
                        name={user.name}
                        pickCard={pickCard}
                        /> 
                    )
                })
            };
        </div>  
    );
}   

export default CardList;