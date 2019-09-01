import React, { Component } from 'react';

class Tab extends Component {

    renderTab() {
        return (
            <div>
                Tab
            </div>
        );
    }

    render() {
        return (
            <div className={'Tab ' + (this.props.isEnabled ? 'Tab-enabled' : 'Tab-not-enabled')}>
                {this.renderTab()}
            </div>
        );
    }
}

export default Tab;
