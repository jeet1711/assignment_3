import React, { Component } from 'react';
import './BurgerNav.css';

class Burger extends Component {
    state={
        open: false
    }

    setOpen = () => {
        const open = this.state.open
        this.setState({
            open: !open
        })
    }

    render() {
        return (
            <div className="burger-nav" onClick={() => this.setOpen}>
                <div className="burger"></div> 
                <div className="burger"></div> 
                <div className="burger"></div> 
            </div>
        )
    }
}

export default Burger;