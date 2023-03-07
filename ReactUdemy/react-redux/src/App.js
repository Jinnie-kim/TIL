import Counter from './components/Counter';
import Header from './components/Header';
import Auth from './components/Auth';
import UserProfile from './components/UserProfile';
import { useSelector } from 'react-redux';

function App() {
  const authState = useSelector((state) => state.auth.isAuthenticated);

  return (
    <>
      <Header />
      {authState ? <UserProfile /> : <Auth />}
      <Counter />
    </>
  );
}

export default App;
