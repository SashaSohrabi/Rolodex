import { Component } from 'react';
import CardList from './components/card-list/card-list.component';
import SearchBax from './components/search-box/search-box.component';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: '',
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((users) =>
        this.setState(
          () => {
            return { monsters: users, monstersCopy: users };
          },
          () => console.log(users)
        )
      );
  }

  onSearchChange = (event) => {
    const searchField = event.target.value.toLocaleLowerCase();

    this.setState(() => ({ searchField }));
  };

  render() {
    const { monsters, searchField } = this.state;
    const { onSearchChange } = this;

    const filteredMonsters = monsters.filter((monster) => {
      return monster.name.toLowerCase().includes(searchField);
    });

    return (
      <div className="App">
        <h1 className='app-title'>Monsters Rolodex</h1>
        <SearchBax
          onChangeHandler={onSearchChange}
          placeholder={'search monsters'}
          className={'monsters-search-box'}
        />
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;
