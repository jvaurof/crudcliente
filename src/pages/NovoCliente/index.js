import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import history from '../../services/history';
import api from '../../services/api';

export default function NovoCliente() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [fone, setFone] = useState('');
  const [cpf, setCpf] = useState('');
  const [nascimento, setNascimento] = useState('');

  async function addCliente(data) {
    try {
      const response = await api.post('/clientes', data);
      console.log(response);
    } catch (error) {
      console.log('erroooooooooor: ', error);
    }
  }

  const mySubmitHandler = () => {
    const data = {
      nome,
      cpf,
      data_nascimento: nascimento,
      telefone: fone,
      email,
    };

    addCliente(data);

    history.push('/');
  };

  const changeNome = event => {
    setNome(event.target.value);
  };

  const changeEmail = event => {
    setEmail(event.target.value);
  };

  const changeFone = event => {
    setFone(event.target.value);
  };

  const changeCpf = event => {
    setCpf(event.target.value);
  };

  const changeNascimento = event => {
    setNascimento(event.target.value);
  };

  return (
    <div className="container">
      <Form onSubmit={mySubmitHandler}>
        <Form.Group>
          <Form.Label>Nome</Form.Label>
          <Form.Control
            name="nome"
            placeholder="Insira o nome"
            type="text"
            onChange={changeNome}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>E-mail</Form.Label>
          <Form.Control
            name="email"
            placeholder="Insira o nome"
            type="mail"
            onChange={changeEmail}
          />
        </Form.Group>

        <Form.Row>
          <Form.Group>
            <Form.Label>CPF</Form.Label>
            <Form.Control
              name="cpf"
              placeholder="Insira o CPF"
              type="text"
              onChange={changeCpf}
            />
          </Form.Group>

          <Form.Group>
            <Form.Label>Telefone</Form.Label>
            <Form.Control
              name="fone"
              placeholder="(xx) xxxxx - xxxx"
              type="text"
              onChange={changeFone}
            />
          </Form.Group>

          <Form.Group>
            <Form.Label>Data de nascimento</Form.Label>
            <Form.Control
              name="nascimento"
              type="date"
              onChange={changeNascimento}
            />
          </Form.Group>
        </Form.Row>
        <Button variant="outline-secondary" type="submit">
          Cancelar
        </Button>

        <Button
          variant="outline-success"
          onClick={mySubmitHandler}
          type="submit"
        >
          Adicionar
        </Button>
      </Form>
    </div>
  );
}
