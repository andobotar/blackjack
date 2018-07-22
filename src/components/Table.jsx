import React, {Component} from 'react';
import shuffle from 'lodash/shuffle';

import Interface from './Interface';

class Table extends Component {

    fullDeck = ['s1', 's2', 's3', 's4', 's5', 's6', 's7', 's8', 's9', 's10', 's11', 's12', 's13',
        'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'h7', 'h8', 'h9', 'h10', 'h11', 'h12', 'h13',
        'c1', 'c2', 'c3', 'c4', 'c5', 'c6', 'c7', 'c8', 'c9', 'c10', 'c11', 'c12', 'c13',
        'd1', 'd2', 'd3', 'd4', 'd5', 'd6', 'd7', 'd8', 'd9', 'd10', 'd11', 'd12', 'd13'];

    state = {
        deck: [...this.fullDeck],
        computerHand: ['00', '00'],
        playerHand: ['00', '00'],
        message: 'Press \'Deal\' to start the game',
        status: 'playing'
    };

    deal = () => {};

    hit = () => {};

    stand = () => {};

    countScore = (hand) => {};

    componentDidMount() {
        this.deal();
    }

    render() {

        return (
            <div>
                <Hand cards={this.state.computerHand}/>
                <Interface
                    message={this.state.message}
                    deal={this.deal}
                    hit={/* TODO */}
                    stand={/* TODO */}
                    computerScore={/* TODO */}
                    playerScore={/* TODO */} />
                <Hand cards={this.state.playerHand}/>
            </div>
        )
    }
}

export default Table;