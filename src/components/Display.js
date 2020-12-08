import React, { Component } from 'react';

class Display extends Component {
    render () {
        return(
            <div result = {this.props.result} className = "display">
                {this.props.result}
            </div>
        )
    }
}

export default Display;