import { UserProvider } from './contexts/UserContext';
import Router from './routes';
import { GlobalStyles } from './styles/global';
import Modal from 'react-modal';
import { CardProvider } from './contexts/CartContext';

Modal.setAppElement('#root');

const App = () => (
  <>
    <UserProvider>
      <CardProvider>
        <GlobalStyles />
        <Router />
      </CardProvider>
    </UserProvider>
  </>
);

export default App;
