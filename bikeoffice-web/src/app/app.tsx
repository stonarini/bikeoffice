import { Admin, ListGuesser, Resource } from 'react-admin';
import simpleRestProvider from 'ra-data-simple-rest';
import { authProvider } from '../authProvider';
import { UserList } from '../components/UserList';

export function App() {
  return (
    <div>
      <Admin dataProvider={simpleRestProvider("/api")} authProvider={authProvider}>
        <Resource name="users" list={UserList} />
      </Admin>
    </div>
  );
}

export default App;
