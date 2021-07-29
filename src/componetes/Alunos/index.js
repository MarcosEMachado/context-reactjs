import { useContext } from  'react';
import { UserContext } from '../../contexts/user';
import Nome from '../Nome';

function Alunos() {
    const { qtdAlunos } = useContext(UserContext);

    return (
      <div>
        <h2>Quantidade de alunos : {qtdAlunos}</h2>
        <Nome/>
      </div>
    );
  }
  
  export default Alunos;