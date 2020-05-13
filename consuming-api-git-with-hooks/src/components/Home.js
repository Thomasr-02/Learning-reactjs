import React, { useState,useEffect } from "react";
import Axios from "axios";
import "./Home.css";
export default function Home() {
  const [repository, setRepository] = useState([]);
  const [name, setName] = useState([""]);
  function getGit() {
    Axios.get("https://api.github.com/users/" + name + "/repos")
      .then(async (res) => {
        var data = await res.data;
        setRepository(data);
       })
      .catch((e) => console.log("User não encontrado"));
  }
  
  useEffect(() => {
    getGit();
  }, [name]); 

  return (
    <>
      <input
        className="input"
        placeholder="Digite seu nome"
        onChange={(e) => {
          setName(e.target.value);
        }}
      ></input>

      <h4>listagem dos repositorios</h4>
      <ul className="repositorios">
        {repository.map((repo) => (
          <li key={repo.id} className="repo">
            {" "}
            - {repo.name}
          </li>
        ))}
      </ul>
    </>
  );
}
