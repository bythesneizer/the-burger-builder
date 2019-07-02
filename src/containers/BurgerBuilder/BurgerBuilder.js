import React, { Component } from 'react'
import Auxiliary from '../../hoc/Auxiliary/Auxiliary'
import Burger from '../../components/Burger/Burger'

class BurgerBuilder extends Component {
    render(){
        return(
            <Auxiliary>
                <Burger/>
                <main>Burger Controls</main>
            </Auxiliary>
        )
    }
}

export default BurgerBuilder