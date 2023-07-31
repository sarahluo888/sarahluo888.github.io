import React, { Component } from 'react';
// import { Controller, Scene } from 'react-scrollmagic';
// import { Tween } from 'react-gsap';
import './home.css';
import About from '../About/about';
import Projects from '../Projects/projects';
import Publications from '../../components/Publications/publications';
const axios = require('axios');

class Home extends Component {
  constructor() {
    super();
    this.state = {
      currentStatus: 'making you wait for my API call',
      statusDate: 'date',
    }
  }

//   componentDidMount = () => {
//     const sheetsDB = "https://spreadsheets.google.com/feeds/cells/1EiFmoErOHeRcE0dUUXdwk_wf1mfcgq4d-25uShy-47A/od6/public/basic?alt=json";

//     axios.get(sheetsDB)
//       .then((response => this.setState({
//         currentStatus: response.data.feed.entry[2].content.$t,
//         statusDate: response.data.feed.entry[2].updated.$t
//       }, () => {
//         console.log(response);
//       })))
//       .catch((error) => {
//         console.log('Can\'t fetch.', error.message);
//       })
//   }

  /* <div className="status">
    <h6><b>Live Status</b>: I'm { this.state.currentStatus }</h6>
  </div> */
  render() {

    return (
      <div className="home">
        <section className="Intro">
          {/* <Controller>
            <Scene
              triggerElement="#trigger"
              duration={4000}
            > */}
              {(progress) => (
                // <Tween
                //   to={{
                //     opacity: '0',
                //     filter: 'blur(20px)',
                //     transform: 'scale(0.9)',
                //   }}
                //   ease="Strong.easeOut"
                //   totalProgress={progress}
                //   paused
                // >
                    <div className="intro-text">
                      <div className="Name">Sarah Luo</div>
                      <div className="Greeting">

                        <h6>Information management. HCI research at the <a className="creativity" href="https://creativity.ucsd.edu/" target="_blank" rel="noreferrer">Creativity Lab</a>.</h6>
                        {/* <h6>Computer Science at <a className="ucsd" href="https://ucsd.edu" target="_blank" rel="noreferrer">UC San Diego</a>. HCI research at the <a className="creativity" href="https://creativity.ucsd.edu/" target="_blank" rel="noreferrer">Creativity Lab</a>.</h6> */}
                        {/* <h6>Webdev, HCI research, and minimalism at UCSD. Currently, I'm an Undergraduate Research Assistant and Lead Developer at the <a className="t4g" href="https://tech4good.soe.ucsc.edu/#/" target="_blank" rel="noreferrer">Tech4Good Lab</a>.</h6> */}
                      </div>
                    </div>
                // </Tween>
              )}
            {/* </Scene>
          </Controller> */}
        </section>
        <div id="intro-ends"></div>

        <section class="about-section">
          <div class="about-inner">
            <div class="about-component">
              <About/>
            </div>
            <div class="angle-border"></div>
          </div>
        </section>

        <section className='publications-section'>
          <Publications />
        </section>

        <section class="projects-section">
          <div class="projects-component">
            <Projects/>
          </div>
        </section>
      </div>
    )
  }
}

export default Home
