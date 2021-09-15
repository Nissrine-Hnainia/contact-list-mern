import { Route, Switch } from 'react-router';
import './App.css';
import Home from './components/Home';
import AddUser from './components/AddUser';
import UsersList from './components/UsersList';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/users" render={() => <UsersList/>} />
        <Route path="/create-user" render={() => <AddUser />} />
      </Switch>
    </div>
  );
}

export default App;
