import React, { useState } from "react";

const listItems = [
  {
    id: 1,
    title: "Bangun",
    done: false,
  },
  {
    id: 2,
    title: "Sholat Subuh",
    done: false,
  },
  {
    id: 3,
    title: "Mandi",
    done: false,
  },
  {
    id: 4,
    title: "Sarapan",
    done: false,
  },
];

function App() {
  return (
    <div className="app">
      <Logo />
      <Form />
      <CheckList />
      <Stats />
    </div>
  );
}

function Logo() {
  return <span className="logo">Go Check ✅</span>;
}

function Form() {
  const [title, setTitle] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    console.log(e);
  }

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3 className="">Ada yang mau dicatat?</h3>
      <input
        className=""
        type="text"
        name="title"
        id="title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button type="submit" className="">
        Add
      </button>
    </form>
  );
}

function CheckList() {
  return (
    <div className="list">
      <ul className="">
        {listItems.map((item) => (
          <Item key={item.id} item={item} />
        ))}
      </ul>
    </div>
  );
}

function Item({ item }) {
  return (
    <li key={item.id} className="">
      <input className="" type="checkbox" />
      <span
        style={{ textDecoration: item.done ? "line-through" : "" }}
        className=""
      >
        {item.title}
      </span>
      <button className="">❌</button>
    </li>
  );
}

function Stats() {
  return (
    <footer className="stats">
      <span className="">
        Kamu punya x catatan dan baru x yang di CheckList (x%) ✅
      </span>
    </footer>
  );
}

export default App;
