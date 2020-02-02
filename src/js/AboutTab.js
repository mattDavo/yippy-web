import React from 'react';
import Tab from './Tab';
import screenshot from '../images/screenshot.jpg';
import releasesData from '../content/releases.json';

import screenshot1 from '../images/screenshot1.png';
import yippyDrag from '../images/yippy-drag.gif';
import yippyPreviewWindow from '../images/yippy-preview-window.gif';

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
                        <a className="About-download" href={release.path} download="Yippy.dmg">
                            <u>Download Yippy {release.release} Now!</u>
                        <br />
                        <br />
                        <i className="fas fa-download fa-4x"></i>
                    </a>
                    </h1>
                </div>
                <div className="About-hero">
                    <div className="feature-block">
                        <div className="feature-text">
                            <ul>
                                <li>Toggle open using the hotkey: Command (⌘) + Shift + v</li>
                                <li>Select the item you would like to paste by clicking or using the up and down arrows</li>
                                <li>Press enter to paste the selected text into the current cursor location.</li>
                                <li>Float Yippy window on the left, right, top or bottom portion of the screen.</li>
                                <li>Hotkeys for the 10 most recent copied items</li>
                                <li>Easily delete any items in the history</li>
                            </ul>
                            <p>
                            </p>
                            <p>
                            </p>
                        </div>
                        <img src={screenshot1} alt="Yippy preview window" className="feature-image" />
                    </div>
                    <div className="feature-block">
                        <img src={yippyDrag} alt="Yippy drag paste" className="feature-image" />
                        <p className="feature-text">
                            Drag items directly where you would like them.
                        </p>
                    </div>
                    <div className="feature-block">
                        <p className="feature-text">
                            Preview large text, files and images by pressing the spacebar.
                        </p>
                        <img src={yippyPreviewWindow} alt="Yippy preview items" className="feature-image" />
                    </div>
                </div>
                <div className="About-info">
                    <div className="Rounded-box About-info-box">
                        <h3 className="Rounded-box-title">What's Next?</h3>
                        <p className="Rounded-box-content">
                            Yippy is still in development and welcoming help. Features coming soon are:
                        </p>
                        <ul className="Rounded-box-content">
                            <li>Customisable window size</li>
                            <li>Customisable keyboard shortcuts</li>
                            <li>Formatted pasting e.g. styling, images, files, etc.</li>
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
                            Source code available on <a href="https://github.com/mattDavo/Yippy">Github</a>.
                        </p>
                    </div>
                </div>
            </div>
        );
    }
}

export default AboutTab;
