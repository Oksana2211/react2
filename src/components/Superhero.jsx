import React from 'react';
import '../style/Superhero.css';


function Superhero(props) {
    return(
        <section className ="card">
            <div className="name">{props.name}</div>
            <div className="text">Вселенная: {props.universe}</div>
            <div className="text">Альтерэго: {props.alterego}</div>
            <div className="text">Вид деятельности: {props.occupation}</div>
            <div className="text">Друзья: {props.friends}</div>
            <div className="text">Суперспособности: {props.superpowers}</div>
            <img className="img" src={props.url}></img>
            <div className="text">{props.info}</div>
        </section>
    )
}

export default Superhero;