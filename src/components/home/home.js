import React, { Component } from 'react';


class Home extends Component {

    render() {
        return (
            <div className="nav">
                <div className="nav-header">
                    <div className="nav-title">
                    JoGeek
                    </div>
                </div>
                <div className="nav-btn">
                    <label htmlFor="nav-check">
                    <span></span>
                    <span></span>
                    <span></span>
                    </label>
                </div>
                <input type="checkbox" id="nav-check" />
                <div className="nav-links">
                    <a href="//github.io/jo_geek" target="_blank">Github</a>
                    <a href="http://stackoverflow.com/users/4084003/" target="_blank">Stackoverflow</a>
                    <a href="https://in.linkedin.com/in/jonesvinothjoseph" target="_blank">LinkedIn</a>
                    <a href="https://codepen.io/jo_Geek/" target="_blank">Codepen</a>
                    <a href="https://jsfiddle.net/user/jo_Geek/" target="_blank">JsFiddle</a>
                </div>
            </div>
        );
    }

}

export default Home;