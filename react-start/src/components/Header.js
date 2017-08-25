import React, { Component } from 'react';


export default class Header extends Component {
    render(){
        return(
            <header>
                <a>TallBallMall</a>
                <nav>
                    <a>Home</a>
                    <a>Shop</a>
                    <a>Inpiration</a>
                    <a>Cart</a>
                </nav>
            </header>
        )
    }
} 