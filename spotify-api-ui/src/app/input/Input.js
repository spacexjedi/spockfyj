import React, {Component} from 'react';
import FormControl from "react-bootstrap/lib/FormControl";
import InputGroup from "react-bootstrap/lib/InputGroup";
import PropTypes from "prop-types";
// input
export default class Input extends Component {

    static propTypes:Map = {

        query: PropTypes.string,
    
        loading: PropTypes.bool,
   
        onChange: PropTypes.func
    };

    static defaultProps = {
        loading: false
    };

    render() {

        let searchIcon = this.props.loading ? "fa fa-circle-o-notch fa-spin" : "fa fa-search";

        return (
            <InputGroup>
                <FormControl
                    type="text"
                    placeholder="Search"
                    value={this.props.query}
                    onChange={this.props.onChange}
                />
                <InputGroup.Addon><i className={searchIcon} aria-hidden="true"/></InputGroup.Addon>
            </InputGroup>
        );
    }
}