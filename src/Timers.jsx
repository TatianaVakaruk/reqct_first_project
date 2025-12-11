import React from 'react';

const Timers = () => {
  return (
    <section className="timers">
      <h2 className="timers__title">
        <span className="bold">Why </span>
        do we do it?
      </h2>
      <p className="timers__description">
        This sounded nonsense to Alice, so she said nothing, but set off at once
        toward the Red Queen. To her surprise, she lost sight of her in a
        moment.
      </p>
      <div className="timers__content">
        <form className="timers__form">
          <input type="text" placeholder="Timer Name" />
          <button className="timers__submit-button button1" type="submit">
            Create Timer
          </button>
        </form>
        <span className="timers__line"></span>
        <ul className="timers__list"></ul>
      </div>
    </section>
  );
};
export default Timers;
