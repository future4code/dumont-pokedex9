import React from 'react';

export function PokeCard(props){
    return (
        <div className="CardBox">
            <img src={props.image}/>
            <button className="add" type="submit">Adicionar</button>
            <button className="detail" type="submit">Ver Detal.</button>
        </div>
    );
}
    
export default PokeCard;