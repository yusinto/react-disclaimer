import React from 'react';
import Disclaimer from './disclaimer/disclaimer';
import DisclaimerCsv from './disclaimer/disclaimerCsv';

const Home = () =>
  <div>
    <h1>Welcome to Universal Hot Reload</h1>
    <p>
      Try<Disclaimer>Some disclaimer here</Disclaimer> changing this text in src/universal/home.js and verify that hot
      reloading works both on the server (view
      source to confirm)
      and the browser<Disclaimer>Another disclaimer!</Disclaimer>!
    </p>
    <DisclaimerCsv/>
  </div>;

export default Home;