import React, { useState } from "react";
import "./TodoList.css";
import { observable } from "mobx";
import { Observer, useObserver, observer } from "mobx-react-lite";

function TodoList() {
  const [list, setList] = useState([]);
  const [message, setMessage] = useState("");

  const listaObservable = observable({
    tam: list.length,
    total:2 
  });

  const QuantidadeObservada = observer(({ listaObservable }) => (
    <>
      <h3>{listaObservable.tam}</h3>
    </>
  ));

  function handleSubmit(e) {
    setList([{ text: message }, ...list]);

    setMessage("");
    e.preventDefault();
  }

  return (
    <>
      <h1>TodoList</h1>
      <p> Resultados: </p>
      <span> </span>
      <QuantidadeObservada
        listaObservable={listaObservable}
      ></QuantidadeObservada>
      <form onSubmit={handleSubmit}>
        <input
          required
          className="input"
          onChange={(e) => {
            setMessage(e.target.value);
          }}
          value={message}
        ></input>

        <button
          className="btn waves-effect waves-light"
          type="submit"
          name="action"
        >
          send
        </button>
      </form>
      {list.map((msg, index) => (
        <div key={index}>{msg.text}</div>
      ))}
    </>
  );
}
export default TodoList;
