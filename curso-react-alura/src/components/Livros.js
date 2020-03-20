import React, { Fragment, Component } from 'react'
import Header from './Header';
import DataTable from './DataTable';

export default class Livros extends Component {

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
        titulo: 'Livros'
    }


    render() {

        return (
            <Fragment>
                <Header></Header>
                <div className="container">

                    <h1>Livros</h1>
                    <DataTable dados={this.state.autores} titulo={this.state.titulo} colunas={['livro']}></DataTable>
                </div>

            </Fragment>

        )
    }
}
