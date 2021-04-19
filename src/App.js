import React, { useState } from "react";
import "./App.css";
import data from "./data";

function App() {
  const [count, setCount] = useState(0);
  const [paras, setParas] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    let amount = parseInt(count);
    if (count <= 0) {
      setParas(data.slice(0, 1));
    } else {
      setParas(data.slice(0, amount));
    }
  };

  return (
    <section className="section-center">
      <header>
        <h2>Lorem Builder</h2>
      </header>
      <form type="submit" onSubmit={handleSubmit}>
        <label>paragraphs required</label>
        <input
          type="number"
          onChange={(e) => setCount(e.target.value)}
          value={count}
        />
        <button>generate</button>
      </form>
      <article>
        {paras.map((para, index) => {
          return <p key={index}>{para}</p>;
        })}
      </article>
    </section>
  );
}

export default App;
