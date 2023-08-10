import { Provider } from 'react-redux'
import GlobalStyle from './style';
import Header from './containers/Header';
import ContactList from './containers/ContactList';
import AddNew from './components/AddNew';
import { store } from './store';

function App() {
  return (
    <Provider store={store} >
    <GlobalStyle/>
      <Header/>
      <div className="container">
      <ContactList/>
    </div>
      <AddNew/>
    </Provider>
  );
}

export default App;