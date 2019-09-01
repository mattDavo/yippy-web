import React, { Component } from 'react';

class TabOption extends Component {

    render() {
        return (
            <button
                className={"Tab-option " + (this.props.isSelected ? "Tab-option-selected" : "Tab-option-unselected")}
                onClick={() => {
                    this.refs[`tab-option-${this.props.tab}`].blur();
                    this.props.handleTabClicked(this.props.tab);
                }}
                ref={`tab-option-${this.props.tab}`}
            >
                {this.props.title}
            </button>
        )
    }
}

export default TabOption;
