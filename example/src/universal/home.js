import React from 'react';
import Disclaimer, {getDisclaimersForPage} from './disclaimer/disclaimer';

const Home = () =>
  <div>
    <h1>Welcome to Universal Hot Reload</h1>
    <p>
      Try<Disclaimer>Some disclaimer here</Disclaimer> changing this text in src/universal/home.js and verify that hot reloading works both on the server (view
      source to confirm)
      and the browser<Disclaimer>Another disclaimer!</Disclaimer>!
    </p>
    <div>
      {
        // TODO: does not work yet!
        getDisclaimersForPage().map(d => `${d.symbol}`)
      }
    </div>
  </div>;

export default Home;