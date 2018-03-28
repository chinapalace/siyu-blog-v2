import React from 'react';
import mark from '../images/mark.jpg'
import nick from '../images/nick.jpg'

export default function About() {
  return (
    <div id="main">
      <section className="post">
        <header className="major">
          <h1>About</h1>
        </header>
        <div className="image main"><img src="images/pic01.jpg" alt="" /></div>
        <p> At Siyu Capital Insights, we digest the most pressing and pertinent trends in the equity, bond, and derivatives markets for you. Our weekly brief is geared at those who are trying to deepen their understanding of and broaden their interest in the world of investing and finance. Insights are intended to develop a more comprehensive investment view while underpinning sound personal finance learning as well.
  Our inspiration to write stems from daily engagement in the investment space across the asset classes delineated above. We take a granular, often esoteric look at specific challenges in markets, but also keep an overall macroeconomic sentiment at the core of our value proposition.
  No portion of any writing either within the weekly brief or on this website itself will ever take the form of actionable financial advice. We are not certified financial planners, chartered financial analysts, or chartered market technicians (although we’re working on it). Go Bruins.
        </p>
        <div className="image fit">
          <div className="row 50% uniform">
            <div className="6u">
              <img src={nick} alt="nick van oldson" />
              <br />
              <ul className="icons alt">
                <li><a href="mailto:nicholas.f.vanosdol@gmail.com"><i className="icon alt fa fa-envelope"></i></a></li>
                <li><a href="https://twitter.com/nickvanosdol" target="_blank"><i className="icon alt fa fa-twitter"></i></a></li>
                <li><a href="https://www.linkedin.com/in/nicholasvanosdol/" target="_blank"><i className="icon alt fa fa-linkedin"></i></a></li>
              </ul>
            </div>
            <div className="6u">
              <img src={mark} alt="mark grace" />
              <br />
              <ul className="icons alt">
                <li><a href="mailto:mwgrace95@gmail.com"><i className="icon alt fa fa-envelope"></i></a></li>
                <li><a href="https://www.linkedin.com/in/markgrace95/" target="_blank"><i className="icon alt fa fa-linkedin"></i></a></li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
