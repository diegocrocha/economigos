import React from 'react'
import HeaderSign from '../../components/HeaderSign/HeaderSign'
import * as S from './style'
import * as L from '../Login/style'
import { Link } from 'react-router-dom'
import Input from '../../components/Form/Input/Input'
import api from '../../services/api'

export default function Cadastro() {
  const [form, setForm] = React.useState({
    email: "",
    senha: "",
    confirmaSenha: ""
  });

  async function handleSubmit(event) {
    event.preventDefault();
    await api.post('economigos/usuarios', {
        email: form.email,
        senha: form.senha
    }).then(function (response) {
      console.log(response.data)
    }).catch(function (error) {
      console.log(error);
    })
  }

  function handleChange({ target }) {
    const { id, value } = target;
    setForm({
      ...form,
      [id]: value,
    });
  }


  return (
    <S.Cadastro>
      <HeaderSign />
      <L.DivAux>
      <L.ContainerSign>
        <S.DivAux2>
          <S.Bloob>
            {/* bloob */}
          </S.Bloob>
        </S.DivAux2>
        <L.FormSign className="animeLeft">
          <h4><span style={{color: '#44CE6C'}}>Econo</span>migos</h4>
          <h1>Cadastro</h1>
          <form>
            <Input
              primary={true}
              onChange={handleChange}
              value={form.email}
              id="email"
              label="E-mail"
              required/>
            <Input
              primary={true}
              onChange={handleChange}
              value={form.senha}
              id="senha"
              label="Senha"
              type="password"
              required/>
            <Input
              primary={true}
              onChange={handleChange}
              value={form.confirmaSenha}
              id="confirmaSenha"
              label="Confirme a senha"
              type="password"
              required/>
          </form>
          <L.ContainerButtons>
              <L.ButtonSignUp onClick={handleSubmit}>Cadastre-se</L.ButtonSignUp>
              <Link to="/login">
                <L.ButtonSignIn>Login</L.ButtonSignIn>
              </Link>
          </L.ContainerButtons>
        </L.FormSign>
      </L.ContainerSign>
      </L.DivAux>
    </S.Cadastro>
  )
}
