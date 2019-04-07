import React from 'react';

import logo from '../../assets/PatreonImage.png';
import { style } from './style';

const Home = () => {
  return (
    <main>
      <section style={style.textContainer}>
        <h2> Welcome to Fabricator Djinn</h2>
        <p>
          Here you’ll find build logs, videos, and links to everything I
          build!
        </p>
        <p>Head over to my Shop and pick yourself up something cool aswell!</p>
        <p>
          Good news everyone! After the fun and success of my 3 day build event,
          I decided to really focus on bringing that kind of content more and
          more. To that effect, I’ve started a Patreon to help accomplish
          this! The goal of this one being to bring more and more streamed
          events and build days to you all, aswell as tips tricks and kickbacks.
          Click the image below and take a look! There are some pretty cool
          rewards and goals (.. I think.. anyways.. I may be biased)
        </p>
      </section>
      <div style={style.flexContainer}>
        <img src={logo} alt="Patreon Logo" style={style.logo} />
      </div>
    </main>
  );
};
export default Home;
