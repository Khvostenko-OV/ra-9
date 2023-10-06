import './App.css';
import Card from './Card';

function App() {
  return (
    <>
      <Card title='My card' text='Some text' href='https://google.com' link='Go Google!'>
        <img className='card-img' src="https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/1.jpg" alt='...'/>
      </Card>
      <Card title='Another one' text='Note that the development build is not optimized. To create a production build, use npm run build.' href='#' link='Click me!'>
        <img className='card-img' src="https://i.etsystatic.com/16754592/r/il/63cb4f/1945247446/il_570xN.1945247446_kh4u.jpg" alt='...'/>
      </Card>
      <Card title='One more card' text='Lorem ipsum' href='https://apple.com' link='EXIT'/>
    </>
  );
}

export default App;
