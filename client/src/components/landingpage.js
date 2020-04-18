import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';


class Landing extends Component {
    render() {
        return (
            <div style={{ width: '100%', margin: 'auto' }}>
                <Grid className="landing-grid">
                    <Cell col={12}>
                        <img
                            src="https://www.sfgirlbybay.com/wp-content/uploads/2010/04/5v.jpg"
                            alt="avatar"
                            className="avatar-img"
                        />
                        <div className="banner-text">
                            <h1>Web Development and Chemistry Automation Solutions</h1>

                            <hr />

                            <p>HTML/CSS | React | JavaScript | NodeJS | Express | Analytical Chemistry | Mass Spectrometry</p>
                            <div className="social-links">
                                {/* LinkedIn */}
                                <a href="http://google.com" rel="noopener noreferrer" target="_blank">
                                    <i className="fa fa-linkedin-square" aria-hidden="true" />
                                </a>

                                {/* Github */}
                                <a href="http://google.com" rel="noopener noreferrer" target="_blank">
                                    <i className="fa fa-github-square" aria-hidden="true" />
                                </a>

                                {/* Freecodecamp */}
                                <a href="http://google.com" rel="noopener noreferrer" target="_blank">
                                    <i className="fa fa-free-code-camp" aria-hidden="true" />
                                </a>

                                {/* Youtube */}
                                <a href="http://google.com" rel="noopener noreferrer" target="_blank">
                                    <i className="fa fa-youtube-square" aria-hidden="true" />
                                </a>

                            </div>
                        </div>
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Landing;




