import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class TabOption extends Component {

    render() {
        console.log(this.props.location);
        console.log(this.props.route);
        return (
            <Link
                to={this.props.route}
                className="Tab-option"
                onClick={() => {
                    this.refs[`tab-option-${this.props.tab}`].blur();
                }}
                ref={`tab-option-${this.props.tab}`}
                style={{ textDecoration: (this.props.isSelected ? 'underline' : 'none') }}
            >
                {this.props.title}
            </Link>
        )
    }
}

export default TabOption;
