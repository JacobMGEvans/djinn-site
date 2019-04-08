import React from 'react';
import { styles } from './style';

import spaceMarine from '../../assets/space-Marine-caleb.jpg';
import axeWeilding from '../../assets/axe-caleb.jpg';

const About = () => {
  return (
    <section style={styles.flexContainer}>
      <h2 style={styles.flexItem}>About Me</h2>
      <img
        src={spaceMarine}
        alt="Djinn Fabricator Space Marine Costume"
        style={styles.imageItems}
      />
      <main style={styles.flexItem}>
        <p>
          My name is Caleb Neal, and I hail from Southern California. I have
          always enjoyed works of theater and film, to me the glimpse into other
          worlds they provide is one of life’s great joys. A few years ago I
          finally tried my hand at building something from one of the many
          universes created by film, and found I had a passion for it. Now I am
          trying to get myself out of the office and into the garage, where I
          can spend my allotted share building entertaining items for awesome
          people!
        </p>
        <p>
          Many projects have come and gone since I settled in California, each
          of them a new and interesting venture, each one an improvement on past
          works. I wish to try my hand at eventually contributing to the film
          and theater I love so much – and in pursuit of that goal I have met
          many fantastic and talented individuals. The costuming community here
          is the greatest I have encountered, and I stand honored to be a part
          of our collective struggles to create. I hope you enjoy the work I
          post here, and I hope one day to give back to the community that has
          brought me so much joy. Keep on creating my friends, keep on creating.
        </p>
      </main>
      <img
        src={axeWeilding}
        alt="Djinn Wielding Axe"
        style={styles.imageItems}
      />
    </section>
  );
};
export default About;
