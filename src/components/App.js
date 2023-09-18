import Superhero from './Superhero';
import '../style/App.css';
import superheroes from './superheroes.json'


function App() {
  return (
    <div className="App">
      {superheroes.map((superhero) => (
        <Superhero
          name={superhero.name}
          universe={superhero.universe}
          alterego={superhero.alterego}
          occupation={superhero.occupation}
          friends={superhero.friends}
          superpowers={superhero.superpowers}
          url={superhero.url}
          info={superhero.info}
          key={superhero.name}
        ></Superhero>
      ))}
    </div>
  );
}

export default App;
