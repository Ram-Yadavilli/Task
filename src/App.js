import "./App.css";

import List from "./List";

import { AiOutlineUnorderedList } from "react-icons/ai";
import { BsGrid } from "react-icons/bs";

import { useState, useEffect } from "react";

function App() {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("s");
  const [a, setA] = useState(true);
  const [b, setB] = useState(false);

  useEffect(() => {
    let x = async function () {
      let response = await fetch(
        "https://mocki.io/v1/0934df88-6bf7-41fd-9e59-4fb7b8758093"
      );
      let d = await response.json();
      setData(d.data);
      console.log(d.data);
    };
    x();
  }, []);

  let change = (event) => {
    setSearch(event.target.value);
  };

  let b1 = () => {
    setA(true);
    setB(false);
  };

  let b2 = () => {
    setA(false);
    setB(true);
  };

  let z = a ? "l" : "g";

  return (
    <div className="main">
      <h1>PLP</h1>
      <div className="in">
        <input
          type="text"
          onChange={change}
          placeholder="place something to search..."
        />
        <button className="ico" onClick={b1}>
          <AiOutlineUnorderedList style={{ height: "20px", width: "20px" }} />
        </button>
        <button className="ico" onClick={b2}>
          <BsGrid style={{ height: "15px", width: "15px" }} />
        </button>
      </div>

      <ul className={z}>
        {data.map((i) => (
          <List detail={i} search={search} a={a} b={b} />
        ))}
      </ul>
    </div>
  );
}

export default App;
