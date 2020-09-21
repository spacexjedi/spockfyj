import React, {Component} from "react";
import Rating from "../lib/Rating";
import {ControlLabel} from "react-bootstrap";

export default class App extends Component {


    render() {
        return (
            <div style={{maxWidth: 600, margin: "0 auto"}}>
                <h4 >Pre Rating</h4>
                <p style={{marginBottom: 50}}>Pre-Rating is a composition that offers rating with font-awesome icons.</p>

                <div style={{marginBottom: 10}}>
                    <ControlLabel>With Default Size And Current Value</ControlLabel><br/>
                    <Rating currentValue={8}
                            onChange={this.__handleChange}
                            onMouseOver={this.__handleMouseOver}
                    />
                </div>
                <div style={{marginBottom: 10}}>
                    <ControlLabel>With Different Size And Disabled</ControlLabel><br/>
                    <Rating size={2}
                            currentValue={4.5}
                            onChange={this.__handleChange}
                            disabled
                    />
                </div>
                <div style={{marginBottom: 10}}>
                    <ControlLabel>Love Is In The Air</ControlLabel><br/>
                    <Rating size={1}
                            iconCount={5}
                            initialIcon="fa-heart-o"
                            selectedIcon="fa-heart"
                            style={{color: "red"}}
                            onChange={this.__handleChange}
                    />
                </div>
                <div style={{marginBottom: 10}}>
                    <ControlLabel>Default Sample</ControlLabel><br/>
                    <Rating/>
                </div>
            </div>);
    };

    __handleMouseOver(e) {
        console.log(e.target.value, e.target.parsedValue);
    }

    __handleChange(e) {
        console.log(e.target.value, e.target.parsedValue);
    };

}