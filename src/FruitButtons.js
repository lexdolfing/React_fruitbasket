import React from 'react';
export default function FruitButtons({title, buttonNameMinus, buttonNamePlus, disabled, onClickMinus, onClickPlus, counter}) {
    return (
        <article>
            <h1 className="Product">{title}</h1>
            <button name={buttonNameMinus} disabled={disabled} onClick={onClickMinus}>-</button>
            <label htmlFor={buttonNameMinus}>{counter}</label>
            <button name={buttonNamePlus} onClick={onClickPlus}>+</button>
        </article>
    )
};