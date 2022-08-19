import './styles.css';
import { Card }from '../../components/card';

function Home() {
  return (
    <div className='container'>
      <h1>Lista de presença</h1>
      <input type="text" placeholder="Digite um nome ..." required />
      <button type="button">Adicionar</button>

      <Card  name="Roger" time="15:15:25"/>
      <Card  name="Philippe" time="15:16:05"/>


    </div>
  )
}
export default Home; 