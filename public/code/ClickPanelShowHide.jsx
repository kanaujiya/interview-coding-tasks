import React, { useState } from "react";

const Panel = (props) => {
  const { title, children, isActive, onShow } = props;
  return (
    <section>
      <h2>{title}</h2>
      {isActive && <p>{children}</p>}
      {!isActive && <button onClick={onShow}>Show</button>}
    </section>
  );
};

const ClickPanelShowHide = () => {
  const [isActive, setIsActive] = useState(0);
  return (
    <div className="container">
      <Panel
        title="Fist Title"
        isActive={isActive === 1}
        onShow={() => setIsActive(1)}
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur
        repudiandae sunt voluptas iusto dicta assumenda Doloribus.
      </Panel>
      <Panel
        title="Second Title"
        isActive={isActive === 2}
        onShow={() => setIsActive(2)}
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur
        perspiciatis amet quisquam! Odio nisi cupiditate ullam similique officia
        ipsam minima deleniti quod doloribus aut, tempore et architecto debitis?
        Laborum, eos.
      </Panel>
    </div>
  );
};

export default ClickPanelShowHide;
