import React, { Component } from 'react';
import './Loser.css'
import App from '../../App';
class Loser extends Component {
    state = {
        lost: true
    };

    reRender = () => {
        this.setState({
            lost: false
        })
    }

    render() {
        if (this.state.lost === false) {
            return <App />
        }
        return (
            <div>
                <h1 className="lostGame">Game Over, get a better memory!</h1>
                <button onClick={this.reRender} className="btn">Play Again</button>
            </div >
        )
    }
}


export default Loser;