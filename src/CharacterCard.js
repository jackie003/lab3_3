import React from 'react';



class CharacterCard extends React.Component {
    state = {
        active: false
    }
    
       
    activate = () => {
        this.setState({
            active:true
        });
        if (this.state.active == false)
        this.props.activationHandler(this.props.value);

    }
    componentDidUpdate = (prevProps) => {
        console.log(this.props.attempt);
        if (prevProps.attempt !== this.props.attempt || prevProps.restartGame !==this.props.restartGame) {
            this.setState({ active: false })
            console.log('...');
        }
    }
    render() {
        //  let activateClass = this.state.act
        let className = `card ${this.state.active ? 'activeCard' : ''}`
        return (
            <div className={className} onClick={this.activate}>
                {this.props.value}
            </div>
        )
    }
}


export default CharacterCard;