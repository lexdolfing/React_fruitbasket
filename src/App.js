import React, {useState} from 'react';
import './App.css';
import logo from './assets/screenshot-logo.png'
import FruitButtons from "./FruitButtons";
import {fireEvent} from "@testing-library/react";
import FormEntry from "./FormEntry";

function App() {


    const [fruitState, setFruitState] = useState( {
        strawberries : 0,
        bananas : 0,
        apples : 0,
        kiwis : 0
    })

    const [formState, setFormState] = useState({
        firstname : '',
        lastname: '',
        age : 0,
        postalCode : '',
        frequency : 'Iedere week',
        moment : 'daytime',
        comment : '',
        conditions : false,
    })



    function handleChange(e) {
        const changedFieldName = e.target.name;
        const newValue = e.target.type === "checkbox" ? e.target.checked : e.target.value;
        setFormState({
            ...formState,
            [changedFieldName]: newValue,
        });
    }

    // function logFormValues

    // This function resets all the counters for the four fruits
    function handleReset() {
        setStrawberries(strawberries-strawberries)
        setKiwis(kiwis-kiwis)
        setBananas(bananas-bananas)
        setApples(apples-apples)
    }

    function handleSubmit(e) {
        e.preventDefault();
        console.log(formState)
    }

  return (
    <>
        <img src={logo} alt="Logo of our fruit delivery service"/>

        <FruitButtons
            title="🍓 Aardbeien"
            buttonNameMinus="minusButton"
                buttonNamePlus="plusButton"
                disabled={fruitState.strawberries === 0}
                onClickMinus={() => setFruitState({...fruitState, strawberries: fruitState.strawberries-1 })}
                onClickPlus={() => setFruitState({...fruitState, strawberries: fruitState.strawberries+1})}
                counter={fruitState.strawberries}
        />
        <FruitButtons
            title="🍌 Bananen"
                buttonNameMinus="minusButton"
                buttonNamePlus="plusButton"
                disabled={fruitState.bananas ===0}
                onClickMinus={() => setFruitState({...fruitState, bananas: fruitState.bananas-1})}
                onClickPlus={() => setFruitState({...fruitState, bananas: fruitState.bananas+1})}
                counter={fruitState.bananas}
        />
        <FruitButtons
            title="🍏 Appels"
            buttonNameMinus="minusButton"
            buttonNamePlus="plusButton"
            disabled={fruitState.apples ===0}
            onClickMinus={() => setFruitState({...fruitState, apples: fruitState.apples-1})}
            onClickPlus={() => setFruitState({...fruitState, apples: fruitState.apples+1})}
            counter={fruitState.apples}
        />
        <FruitButtons
            title="🥝 kiwis"
            buttonNameMinus="minusButton"
            buttonNamePlus="plusButton"
            disabled={fruitState.kiwis ===0}
            onClickMinus={() => setFruitState({...fruitState, kiwis: fruitState.kiwis-1})}
            onClickPlus={() => setFruitState({...fruitState, kiwis: fruitState.kiwis+1})}
            counter={fruitState.kiwis}
        />

        <button onClick={() => handleReset()}>Reset</button>
        <form onSubmit={handleSubmit}>

            <FormEntry
                name="firstname"
                labelDutch="Voornaam"
                value={formState.firstname}
                handleChange={handleChange}
            />
            <FormEntry
            name="lastname"
            labelDutch="Achternaam"
            value={formState.lastname}
            handleChange={handleChange}
            />
            <FormEntry
                name="age"
                labelDutch="Leeftijd"
                value={formState.age}
                handleChange={handleChange}
            />
         <FormEntry
                name="postalCode"
                labelDutch="Postcode"
                value={formState.postalCode}
                handleChange={handleChange}
         />
            <label htmlFor="frequency">
                Bezorgfrequentie
                <select
                    name="frequency"
                    id="frequency"
                    value={formState.frequency}
                    onChange={handleChange}>
                    <option value="everyWeek">Iedere week</option>
                    <option value="once">Eenmalig</option>
                    <option value="everyMonth">Iedere maand</option>
                ></select>
            </label>
            <label>
                Overdag
                <input
                    type="radio"
                    name="moment"
                    value="daytime"
                    checked={formState.moment === "daytime"}
                    onChange={handleChange}
                />
            </label>
            <label>
                's Avonds
                <input
                    type="radio"
                    name="moment"
                    value="evening"
                    checked={formState.moment === "evening"}
                    onChange={handleChange}
                />
            </label>
            <label htmlFor="comment">
                Opmerking
                <textarea
                    name="comment" id="comment" cols="30" rows="10"
                    value={formState.comment}
                    onChange={handleChange}
                ></textarea>
            </label>
            <label htmlFor="conditions">
                <input
                    type="checkbox"
                    name='conditions'
                    checked={formState.conditions}
                    onChange={handleChange}
                />
                Ik ga akkoord met de voorwaarden
            </label>
            <button type="submit">Verzend</button>
        </form>
    </>
  );
}

export default App;
