import React from 'react';

type ChildComponentProps = {
    title: string;
}

type ChildComponentState = {
    toggle: boolean;
}

class ChildComponent extends React.Component<ChildComponentProps, ChildComponentState> {
    
    state = {
        toggle: false
    }
    
    render() {
        return (
            <div className={`child-component ${this.props.title.replace(/\s/g, "-").toLowerCase()}${this.state.toggle ? ' toggled' : ''}`}>
                <h2>{this.props.title}</h2>
                <button className="button-one" onClick={this.onButtonOneClick}>Toggle Style</button>
                <button className="button-one">Do nothing</button>
                <input className="input-one" placeholder="Text goes here"/>
            </div>
        )
    }

    onButtonOneClick = () => {
        this.setState({toggle: !this.state.toggle});
    }
 }

 export default ChildComponent;