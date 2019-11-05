import React from 'react';
import * as Yup from 'yup';

const schema = Yup.object().shape({
  email: Yup.string()
    .email('insira um email valido')
    .required('campo requerido'),
});

export default function teste() {
  const func = event => {
    event.preventDefault();
    console.log(Yup);
  };
  return (
    <form schema={schema} onSubmit={func} style={{ marginLeft: 100 }}>
      <input name="email" type="email" placeholder="email" />

      <button type="submit">enviar</button>
    </form>
  );
}
