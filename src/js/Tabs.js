import React, { Component } from 'react';
import TabOption from './TabOption';
import { withRouter } from 'react-router-dom';

class Tabs extends Component {

    render() {
        let tabSelected = this.props.location.pathname;

        return (
            <div ref="tabBar">
                <TabOption
                    isSelected={tabSelected === "/"}
                    title="About"
                    route="/"
                />
                |
                <TabOption
                        isSelected={tabSelected === "/blog"}
                        title="Blog"
                        route="/blog"
                    />
                    |
                <TabOption
                        isSelected={tabSelected === "/releases"}
                        title="Releases"
                        route="/releases"
                    />
                    |
                <TabOption
                    isSelected={tabSelected === "/installation"}
                    title="Installation"
                    route="/installation"
                />
            </div>
        );
    }
}

const WrappedTabs = withRouter(Tabs);

export default WrappedTabs;
