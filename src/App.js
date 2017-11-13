import React from 'react';
import PropTypes from 'prop-types';

// const App = () => <h1>Hi 1</h1>

class App extends React.Component {


    constructor() {
        super();
        this.state = {
            txt4: "this is state txt4",
            txt5: "this is state txt5",
        }

    }

    update(e) {
        this.setState({txt4: e.target.value})
    }

    render() {
        let txt2 = "prop value txt2"
        return (
            <div>
            <h1>Hi 3 </h1>
            <br/>
            txt prop='{this.props.txt}' 
            <br/>
            txt2 prop='{txt2}' 
            <br/>
            txt3 prop='{this.props.txt3}' 
            <br/>
            cat prop='{this.props.cat}'
            <br/>
            <input type="text" onChange={this.update.bind(this)}/>
            txt4 prop='{this.state.txt4}'
            <br/>
            txt5 prop='{this.state.txt5}'
            <br/>
            <b>Bold</b>
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

export default App