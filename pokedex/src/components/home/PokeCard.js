import React from 'react';
import { useHistory } from 'react-router-dom';
import { goDetailPage } from '../../routes/coordinator';

const PokeCard = (props) => {
    const history = useHistory()

    return (
        <div className="CardBox">
            <img src={props.image}/>
            <button className="add" type="submit">Adicionar</button>
            <button
                onClick={() => goDetailPage(history)}            
            className="detail" type="submit">Ver Detal.</button>
        </div>
    );
}
    
export default PokeCard;