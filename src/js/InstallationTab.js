import React from 'react';
import Tab from './Tab';
import installation0 from '../images/installation/installation0.png'
import installation1 from '../images/installation/installation1.png'
import installation2 from '../images/installation/installation2.png'
import installation3 from '../images/installation/installation3.png'
import installation4 from '../images/installation/installation4.png'
import installation5 from '../images/installation/installation5.png'

class InstallationTab extends Tab {

    renderTab() {
        return (
            <div className="Installation-tab">
                <h1>1. Download Yippy and open the disk image.</h1>
                <h3>You should see this folder open</h3>
                <img src={installation0} alt="Installation screenshot 0" className="Screenshot-img" />
                
                <h1>2. Drag Yippy into the applications folder.</h1>
                
                <h1>3. Close the window and open Yippy from the Applications folder.</h1>
                <h3>You should see an alert like this. Click open. If there is no option to open, open System Preferences > Security & Privacy > General and allow Yippy to be opened.</h3>
                <img src={installation1} alt="Installation screenshot 1" className="Screenshot-img" />
                
                <h1>3. Then you should see this window:</h1>
                <img src={installation2} alt="Installation screenshot 2" className="Screenshot-img" />
                
                <h1>4. Click allow access and you will see this window:</h1>
                <img src={installation3} alt="Installation screenshot 3" className="Screenshot-img" />
                
                <h1>5. Then find Yippy in the Privacy tab and make sure it is ticked.</h1>
                <h3>If it is already ticked, untick it and tick it again.</h3>
                <img src={installation4} alt="Installation screenshot 4" className="Screenshot-img" />
                
                <h1>6. Close System Preferences and you should see this window. Then you are ready to start using Yippy!</h1>
                <img src={installation5} alt="Installation screenshot 5" className="Screenshot-img" />
            </div>
        );
    }
}

export default InstallationTab;
