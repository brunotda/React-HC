import React, { useState } from 'react';
import axios from 'axios';

import * as S from './styled';
import { useHistory } from 'react-router-dom';

function App(props) {
  const history = useHistory();
  const [usuario, setUsuario] = useState('');
  const [erro, setErro] = useState('');

  function handlePesquisa(e) {
    axios.get(`https://api.github.com/users/${usuario}/repos`)
      .then(response => {
        // handle success
        const repositories = response.data;
        const repositoriesName = [];
        repositories.map((repository) => {
          repositoriesName.push(repository.name);
        })
        localStorage.setItem('repositoriesName', JSON.stringify(repositoriesName));
        setErro(false);
        history.push('/repositories');
      })
      .catch(err => {
        // handle error
        setErro(true);
      })
      .then(function () {
        // always executed
      });
  }

  return (
    <S.HomeContainer>
      <S.Content>
        <S.Input className="usuarioInput" placeholder="Usuários" onChange={e => setUsuario(e.target.value)} />
        <S.Button type="button" onClick={handlePesquisa} >pesquisar</S.Button>
      </S.Content>
      { erro ? <S.ErrorMsg>Usuário não encontrado, tente novamente.</S.ErrorMsg> : '' }
    </S.HomeContainer>
  );
}

export default App;

// [usuario, setUsuario]
