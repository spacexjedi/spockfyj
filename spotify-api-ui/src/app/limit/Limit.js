import React, {Component} from 'react';
import Button from "react-bootstrap/lib/Button";
import ButtonGroup from "react-bootstrap/lib/ButtonGroup";
import PropTypes from "prop-types";
// limit pagination
export default class Limit extends Component {

    static propTypes:Map = {
       
        limit: PropTypes.array,
   
        onRefresh: PropTypes.func,
   
        onChange: PropTypes.func
    };

    static defaultProps = {
        limit: [5, 10, 20, 50]
    };

    render() {
        return (<span>
                    <Button bsSize="small" className="pull-left hidden-xs limit" onClick={this.props.onRefresh}>
                        <i className="fa fa-refresh" aria-hidden="true"/></Button>
                    <ButtonGroup className="pull-left hidden-xs limitGroup" bsSize="small">
                        <Button disabled>Limit:</Button>
                        {this.__renderLimitButtons()}
                </ButtonGroup>
            </span>
        );
    }

    __renderLimitButtons = () => {
        let limitArr = this.props.limit;
        let buttonArr = [];

        for (let i = 0; i < limitArr.length; i++) {
            let limit = limitArr[i];
            buttonArr.push(<Button key={i} active={this.props.pageSize === {limit}} onClick={this.props.onChange}
                                   value={limit}>{limit}</Button>);
        }

        return buttonArr;
    };
}