import React from 'react';
import PropTypes from 'prop-types';

// const App = () => <h1>Hi 1</h1>

class App extends React.Component {
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