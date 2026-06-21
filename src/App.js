import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Nav from './Nav';
import data from './db.json';
import Article from './Article';
import Card from './Card';
import './Card.css';

function App(props) {
  let db=data.people;
  return (
    <div className="App">
      <Header />
      <Nav navigation={props.navigation} />
      <Article db={db} />
    </div>
    
  );
}

export default App;
