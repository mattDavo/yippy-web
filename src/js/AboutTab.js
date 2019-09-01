import React from 'react';
import Tab from './Tab';
import screenshot from '../images/screenshot.png';

class AboutTab extends Tab {
    renderTab() {
        return (
            <div className="About-tab">
                <div className="About-hero">
                    <h2 className="About-heading">An open source clipboard manager for macOS</h2>
                    <br />
                    <img src={screenshot} alt="Yippy screenshot" className="Screenshot-img" />
                </div>
                <div className="About-info">
                    <div className="Rounded-box About-info-box">
                        <h3 className="Rounded-box-title">Features</h3>
                        <p className="Rounded-box-content">
                            Yippy can be toggled open and closed by using the hotkey Command (⌘) + Shift + v.
                            Select the text you would like to paste by clicking or using the up and down arrows.
                            Then press enter to paste the selected text into the current cursor location.
                        </p>
                    </div>
                    <div className="Rounded-box About-info-box">
                        <h3 className="Rounded-box-title">What's Next?</h3>
                        <p className="Rounded-box-content">
                            Yippy is still in development and welcoming help. Features coming soon are:
                        </p>
                        <ul className="Rounded-box-content">
                            <li>Different window locations</li>
                            <li>Customisable keyboard shortcuts</li>
                            <li>Formatted pasting e.g. styling, images, files, etc.</li>
                        </ul>
                    </div>
                    <div className="Rounded-box About-info-box">
                        <h3 className="Rounded-box-title">Contributing</h3>
                        <p className="Rounded-box-content">
                            Contributions are encouraged, whether it means making
                            a <a href="https://github.com/mattDavo/Yippy/compare" target="_blank">pull request</a>,
                            testing Yippy and providing feedback
                            or <a href="https://github.com/mattDavo/Yippy/issues/new" target="_blank">suggesting new features</a>.
                        </p>
                    </div>
                </div>
            </div>
        );
    }
}

export default AboutTab;
