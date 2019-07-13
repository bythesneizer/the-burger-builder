import React, { Component } from 'react'
import Auxiliary from '../../hoc/Auxiliary/Auxiliary'
import Burger from '../../components/Burger/Burger'

class BurgerBuilder extends Component {
    state = {
        ingredients: {
            cheese: 1,
            meat: 1,
            salad: 1,
            bacon: 0
        }
    }
    
    render(){
        return(
            <Auxiliary>
                <Burger ingredients={this.state.ingredients}/>
                <main>Burger Controls</main>
            </Auxiliary>
        )
    }
}

export default BurgerBuilder