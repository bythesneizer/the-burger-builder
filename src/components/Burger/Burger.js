import React from 'react'
import Ingredient from './BurgerIngredient/BurgerIngredient'
import classes from './Burger.css'

const burger = (props) => {
    let transformedIngredients = Object.keys(props.ingredients) //e.g. [cheese,meat,salad,bacon]
        .map(igKey => { //igKey being each element in the above defined array e.g. cheese
            return [...Array(props.ingredients[igKey])].map((_,i) => { //Number of the current ingredient being mapped to a blank array e.g. [ , , , , ]
                return <Ingredient key={igKey+i} type={igKey}/>;
            });
        }).reduce((arr,el) => {
            return arr.concat(el); 
        }, []);

    console.log(transformedIngredients);

    if(transformedIngredients.length===0){
        transformedIngredients=<p>Please add one or more ingredients</p>
    }

    return(
        <div className={classes.Burger}>
            <Ingredient type="bread-top"/>
            {transformedIngredients}
            <Ingredient type="bread-bottom"/>
        </div>
    );
}

export default burger