import { userContext } from  'react';
import { UserContext } from '../../contexts/user';

function Nome() {
    const { alunos, setAlunos } = userContext(UserContext);

    return (
      <div>
        <span style={{ color: '#FF0000'}} >Bem vindo: {alunos}</span><br/>
        <button onClick={ ()=> setAlunos('Marcos Machado')} >Troca nome</button>
      </div>
    );
  }
  
  export default Nome;