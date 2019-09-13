import React from 'react';
import Tab from './Tab';
import screenshot from '../images/screenshot.jpg';
import releasesData from '../content/releases.json';

class AboutTab extends Tab {
    getLatestRelease() {
        return releasesData.sort((x, y) => {
            return y.date - x.date;
        })[0];
    }
    
    renderTab() {
        const release = this.getLatestRelease();
        
        return (
            <div className="About-tab">
                <div className="About-hero">
                    <h2 className="About-heading">An open source clipboard manager for macOS</h2>
                    <br />
                    <img src={screenshot} alt="Yippy screenshot" className="Screenshot-img" />
                    <br />
                    <br />
                    <h1 className="About-download">
                        <a className="About-download" href={release.path} download="Yippy">
                            <u>Download Yippy {release.release} Now!</u>
                        <br />
                        <br />
                        <i className="fas fa-download fa-4x"></i>
                    </a>
                    </h1>
                </div>
                <div className="About-info">
                    <div className="Rounded-box About-info-box">
                        <h3 className="Rounded-box-title">Features</h3>
                        <p className="Rounded-box-content">
                            Yippy can be toggled open and closed by using the hotkey Command (⌘) + Shift + v.
                            Select the text you would like to paste by clicking or using the up and down arrows.
                            Then press enter to paste the selected text into the current cursor location.
                            <br /><br />
                            The Yippy window can be customised to float on the left, right, top or bottom portion of the screen.
                        </p>
                    </div>
                    <div className="Rounded-box About-info-box">
                        <h3 className="Rounded-box-title">What's Next?</h3>
                        <p className="Rounded-box-content">
                            Yippy is still in development and welcoming help. Features coming soon are:
                        </p>
                        <ul className="Rounded-box-content">
                            <li>Customisable window size</li>
                            <li>Customisable keyboard shortcuts</li>
                            <li>Formatted pasting e.g. styling, images, files, etc.</li>
                            <li>Hotkeys for fast pasting of older clipboard items.</li>
                            <li>Delete items from clipboard history.</li>
                            <li>Automatic updates.</li>
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
