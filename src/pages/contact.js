import React from 'react';
import Link from 'gatsby-link';
import mobile from '../images/Siyu-mobile.png'

export default function Contact() {
  return (
    <div id="main">
      <section className="post">
        <header className="major">
          <h1>Weekly Newsletter</h1>
        </header>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))' }}>
          <div >
            <p>
              Get our weekly brief in your email. Full of pertinent news and topics. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
            </p>
            <form id="email" method="post" action="https://siyucapital.com/api/recipients/" style={{ padding: '3rem', minWidth: '50px' }} >
              <input size="50" className="fit" type="email" placeholder="Email Address" />
              <input id="submit" type="submit" />
            </form>
          </div>
          <div style={{ justifySelf: 'center' }}>
            <img src={mobile} alt="" width="250" height="450" />
          </div>
        </div>
      </section>
    </div>

  );
}
