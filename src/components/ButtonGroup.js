import React, { Component } from 'react';
import Button from './Button';



class ButtonGroup extends Component {



    render () {
        return(
            <div className = "button-group">
                <Button text = "AC" classes = "button span-two number" getButton = {this.props.getButton}/>
                <Button text = "DEL" classes = "button number" getButton = {this.props.getButton}/>
                <Button text = "/" classes = "button operation" getButton = {this.props.getButton}/>
                <Button text = "1" classes = "button number" getButton = {this.props.getButton} />
                <Button text = "2" classes = "button number" getButton = {this.props.getButton}/>
                <Button text = "3" classes = "button number" getButton = {this.props.getButton}/>
                <Button text = "*" classes = "button operation" getButton = {this.props.getButton}/>
                <Button text = "4" classes = "button number" getButton = {this.props.getButton}/>
                <Button text = "5" classes = "button number" getButton = {this.props.getButton}/>
                <Button text = "6" classes = "button number" getButton = {this.props.getButton}/>
                <Button text = "+" classes = "button operation" getButton = {this.props.getButton}/>
                <Button text = "7" classes = "button number" getButton = {this.props.getButton}/>
                <Button text = "8" classes = "button number" getButton = {this.props.getButton}/>
                <Button text = "9" classes = "button number" getButton = {this.props.getButton}/>
                <Button text = "-" classes = "button operation" getButton = {this.props.getButton}/>
                <Button text = "." classes = "button number" getButton = {this.props.getButton}/>
                <Button text = "0" classes = "button number" getButton = {this.props.getButton}/>
                <Button text = "=" classes = "button span-two equals" getButton = {this.props.getButton}/>
            </div>
        )
    }
}

export default ButtonGroup;