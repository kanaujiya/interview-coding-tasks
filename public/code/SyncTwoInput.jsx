import React, { useState } from "react";

const InputComp = (props) => {
  const { data, setData } = props;
  return (
    <div>
      <label htmlFor="input">Enter a value:</label>
      <input type="text" id="input" value={data} onChange={setData} />
    </div>
  );
};

const SyncTwoInput = () => {
  const [data, setData] = useState("");
  return (
    <div className="container">
      <InputComp data={data} setData={(e) => setData(e.target.value)} />
      <InputComp data={data} setData={(e) => setData(e.target.value)} />
    </div>
  );
};

export default SyncTwoInput;
