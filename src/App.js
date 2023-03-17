import React, {useState} from 'react';
import './App.css';
import logo from './assets/screenshot-logo.png'
import Fruit from "./Fruit";
import {fireEvent} from "@testing-library/react";
import FormEntry from "./FormEntry";

function App() {
    const [strawberries, setStrawberries] = useState(0);
    const [bananas, setBananas] = useState(0);
    const [apples, setApples] = useState(0);
    const [kiwis, setKiwis] = useState(0);

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

        <Fruit
            title="🍓 Aardbeien"
            buttonNameMinus="minusButton"
                buttonNamePlus="plusButton"
                disabled={strawberries === 0}
                onClickMinus={() => setStrawberries(strawberries-1)}
                onClickPlus={() => setStrawberries(strawberries+1)}
                counter={strawberries}
        />
        <Fruit
            title="🍌 Bananen"
                buttonNameMinus="minusButton"
                buttonNamePlus="plusButton"
                disabled={bananas ===0}
                onClickMinus={() => setBananas(bananas-1)}
                onClickPlus={() => setBananas(bananas+1)}
                counter={bananas}
        />
        <Fruit
            title="🍏 Appels"
            buttonNameMinus="minusButton"
            buttonNamePlus="plusButton"
            disabled={apples ===0}
            onClickMinus={() => setApples(apples-1)}
            onClickPlus={() => setApples(apples+1)}
            counter={apples}
        />
        <Fruit
            title="🥝 kiwis"
            buttonNameMinus="minusButton"
            buttonNamePlus="plusButton"
            disabled={kiwis ===0}
            onClickMinus={() => setKiwis(kiwis-1)}
            onClickPlus={() => setKiwis(kiwis+1)}
            counter={kiwis}
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
