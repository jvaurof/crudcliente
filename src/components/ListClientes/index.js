/* eslint-disable react/destructuring-assignment */
/* eslint-disable jsx-a11y/control-has-associated-label */
import React, { Component } from 'react';
import { Button, Table } from 'react-bootstrap';
import api from '../../services/api';
import './styles.css';

export default class ListClientes extends Component {
  state = {
    clientes: [],
  };

  componentDidMount() {
    this.loadUsers();
  }

  // componentDidUpdate(_, prevState) {
  //   if (prevState.clientes !== this.state.clientes) {
  //     this.loadUsers();
  //   }
  // }

  loadUsers = async () => {
    const response = await api.get('/clientes');

    this.setState({ clientes: response.data });
  };

  render() {
    return (
      <div className="container">
        <Table striped bordered hover className="aqui">
          <thead>
            <tr>
              <th>Nome</th>
              <th>CPF</th>
              <th>Data de nascimento</th>
              <th>Telefone</th>
              <th>E-mail</th>
              <th />
            </tr>
          </thead>
          <tbody>
            {this.state.clientes.map(cliente => (
              <tr key={cliente.id}>
                <td>{cliente.nome}</td>
                <td>{cliente.cpf}</td>
                <td>{cliente.data_nascimento}</td>
                <td>{cliente.telefone}</td>
                <td>{cliente.email}</td>

                <td>
                  <div className="button-group">
                    <Button variant="outline-warning">Editar</Button>
                    <Button className="button-space" variant="outline-danger">
                      Excluir
                    </Button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    );
  }
}
