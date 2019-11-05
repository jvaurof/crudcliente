import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import ListClientes from '../../components/ListClientes';

import './styles.css';
// import ModalCliente from '../../components/ModalCliente';

export default function Home() {
  return (
    <>
      <div className="container d-flex flex-row-reverse bd-highlight modal-align">
        <Link to="/novocliente">
          <Button variant="outline-primary">Adicionar cliente</Button>
        </Link>
      </div>
      <ListClientes />
    </>
  );
}
