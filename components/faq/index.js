import React from 'react';

import { styles } from './style';

const FAQ = () => {
  return (
    <section style={styles.flexContainer}>
      <main style={styles.textContainer}>
        <h3>Do you take commissions?</h3>

        <p>
          Yes I do! If you’re interested in a custom piece of armor or weapon,
          crafted by me, please take a journey over to the “Contact Me” section
          and send me an email with a detailed description of your project,
          include as much information as possible, I WILL follow up with you if
          you give me more information then “hyper electric glory sword”. You
          can attach reference pictures or any other documents to the contact me
          form, and I will get them!
        </p>

        <p>
          I do not take many commissions a year, but if I can’t help you out in
          time, I can refer you to someone who may be able to.
        </p>

        <p>
          Commissions are priced on a case by case basis, but the formula is
          always the same. Time + Materials + Shipping.
        </p>

        <h3>Why isn’t that MacGuffin $50?</h3>

        <p>
          Time is money, friend. There is a lot that goes into creating a custom
          prop, between research, planning, material acquisition, the hours tend
          to wrack up even before the actual plastic hits the table. When you’re
          trying to survive off of your art, there are harsh realities to face
          as to the cost of survival. Bill Doran over at Punished Props says it
          best.
        </p>
      </main>
    </section>
  );
};
export default FAQ;
