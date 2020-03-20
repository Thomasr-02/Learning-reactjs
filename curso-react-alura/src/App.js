import React, { Component } from 'react';
import 'materialize-css/dist/css/materialize.min.css';

import Tabela from './components/Tabela';
import Formulario from './components/Formulario';
import Header from './components/Header';
import PopUp from './components/PopUp'
import './App.css'

class App extends Component {



  state = {
    autores: [
      {
        nome: 'Paulo',
        livro: 'React',
        preco: '1000'
      },
      {
        nome: 'Daniel',
        livro: 'Java',
        preco: '99'
      },
      {
        nome: 'Marcos',
        livro: 'Design',
        preco: '150'
      },
      {
        nome: 'Bruno',
        livro: 'DevOps',
        preco: '100'
      }
    ],
  }

  removeAutor = index => {

    const { autores } = this.state;

    this.setState({
      autores: autores.filter((autor, posAtual) => {
        return posAtual !== index;
      }),
    })
    PopUp.exibeMensagem("error","Autor removido com sucesso!")

  }

  escutadorDeSubmit = autor => {
    this.setState({ autores: [...this.state.autores, autor] });
    PopUp.exibeMensagem("success","Autor adicionado com sucesso!")
  }
  render() {
    return (

      <div>
        <Header />
        <div className="container">
          <Tabela autores={this.state.autores} removeAutor={this.removeAutor} />
          <Formulario escutadorDeSubmit={this.escutadorDeSubmit} />
        </div>
      </div>
    );
  }
}

export default App;