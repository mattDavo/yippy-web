import React from 'react';
import Tab from './Tab';
import releasesData from '../content/releases.json';

class ReleasesTab extends Tab {
    
    renderRelease(data) {
        let date = new Date(data.date * 1000);
        const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
        let dateStr = `${months[date.getUTCMonth()]} ${date.getUTCDate()}, ${date.getUTCFullYear()}`

        return (
            <div key={data.id} className="Rounded-box">
                <h3 className="Rounded-box-title">Release {data.release} - <a href={data.path} download="Yippy" className="Releases-icon-button far fa-file-archive" /> - <a href={data.link} target="_blank" className="Releases-icon-button fas fa-code" />
                </h3>
                <h6 className="Rounded-box-subtitle">{dateStr}</h6>
                <p className="Rounded-box-content">{data.notes}</p>
            </div>
        );
    }
    
    renderTab() {
        const releases = releasesData.sort((x, y) => {
            return y.date - x.date;
        }).map(this.renderRelease);

        return (
            <div className="Releases-tab">
                {releases}
            </div>
        );
    }
}

export default ReleasesTab;
