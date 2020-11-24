import React from 'react';

import './Detail.css';

export function DetailPokemon(props){
    return (
        <div className='container'>
            <div className='image'>
                <img className='image1' src={props.frontImage} alt=""/>
                <img className='image2' src={props.backImage} alt=""/>
            </div>

            <div className='status1'>
                <h3>poderes</h3>
                <div className="hp">{props.hp}</div>
                <div className="attack">{props.attack}</div>
                <div className="defense">{props.defense}</div>
                <div className="special-attack">{props.specialAttack}</div>
                <div className="special-defense">{props.specialDefense}</div>
                <div className="speed">{props.speed}</div>
            </div>

            <div className='status2'> 
                <div className="status3">
                     <div className="type1">{props.type1}</div>
                    <div className="type2">{props.type2}</div>
                </div>
                <div className="status4">
                    <h3>Principais Ataques</h3>
                    <div className="moveName1">{props.moveName1}</div>
                    <div className="moveName2">{props.moveName2}</div>
                    <div className="moveName3">{props.moveName3}</div>
                </div>
            </div>
        </div>    
    );
}
        
export default DetailPokemon;