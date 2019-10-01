import React, { Component } from 'react';

class NotFoundComponent extends Component {
    
    render() {
        return (
            <div className="Not-found">
                <div className="Rounded-box">
                    <h1 className="Not-found-text">Hmmm, yeah there isn't anything here...</h1>
                    <h3 className="Not-found-subtext">Did you copy the link wrong? You should probably download Yippy! We'll help with that :)</h3>
                </div>
            </div>
        )
    }
}

export default NotFoundComponent;
