import React , {Component} from 'react';

class tabela extends Component{
    render(){
        return(
            <div>
                <p>teste</p>
                <h2>teste</h2>
                <table>
                    <thead>
                        <tr>
                            <th>Autores</th>
                            <th>Livros</th>
                            <th>Precos</th>
                            <th>Remover</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Thomas</td>
                            <td>Node-js</td>
                            <td>10000</td>
                            <td></td>
                        </tr>
                    </tbody>
                </table> 
            </div>
        );
    
    }
}
export default tabela;