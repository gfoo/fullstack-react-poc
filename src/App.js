import React from 'react';
import PropTypes from 'prop-types';

// const App = () => <h1>Hi 1</h1>

class App extends React.Component {


    constructor() {
        super();
        this.state = {
            currentEvent: '---',
        }
        this.update = this.update.bind(this)
    }

    update(e) {
        this.setState(
            {currentEvent: e.type})
    }

    render() {
        let txt2 = "prop value txt2"
        return (
            <div>
            <Title text="12345678"/>
            <br/>
            <textarea onKeyPress={this.update}
                      onCopy={this.update}
                      onFocus={this.update}
                      onBlur={this.update}
                      cols="30" 
                      rows="10" />
            <h1>{this.state.currentEvent}</h1>
            <br/>
            txt prop='{this.props.txt}' 
            <br/>
            txt2 prop='{txt2}' 
            <br/>
            txt3 prop='{this.props.txt3}' 
            <br/>
            cat prop='{this.props.cat}'
            <br/>
            <b>Bold</b>
            <br/>
            <Button>I <Heart/> React</Button>
            </div>
            )
    }
}

App.propTypes = {
    txt: PropTypes.string,
    cat: PropTypes.number.isRequired,
}

App.defaultProps = {
    txt3: "default value"
}


const Title = (props) => 
    <h1>Hi 3 props.text='{props.text}' </h1>

Title.propTypes = {
    text(props,propName,component) {
        if(!(propName in props)) {
            return new Error('missing ${propName}')
        }
        if(props[propName].length < 6) {
            return new Error('${propName} was too short')
        }
    } 
}

const Widget = (props) => 
    <input type="text" onChange={props.update}/>

const Button = (props) => 
    <button>{props.children}</button>

class Heart extends React.Component {
    render() {
        return <span>&hearts;</span>
    }
}

export default App