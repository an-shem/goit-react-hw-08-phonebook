import { Toaster } from 'react-hot-toast';
import ContactsPages from '../../Pages/ContactsPages';
import AddContact from '../../Pages/AddContact';
import LoginPages from '../../Pages/LoginPages';
import RregisterPages from '../../Pages/RregisterPages';
import Header from '../Header';
import Card from '../Card';

import { AppWrapper, Container } from './App.styled';

import { Route, Switch } from 'react-router-dom';

export default function App() {
  return (
    <AppWrapper>
      <Header />
      <Container>
        <Card>
          <Switch>
            <Route path="/register">
              <RregisterPages />
            </Route>
            <Route path="/login">
              <LoginPages />
            </Route>
            <Route path="/contacts/add">
              <AddContact />
            </Route>
            <Route path="/contacts">
              <ContactsPages />
            </Route>
            {/* <Route>
          <NotFound />
        </Route> */}
          </Switch>
          <Toaster
            position="top-center"
            toastOptions={{
              style: {
                background: '#363636',
                color: '#fff',
              },
            }}
          />
        </Card>
      </Container>
    </AppWrapper>

    // <Card>
    //   <Header />
    //   <Switch>
    //     <Route path="/register">
    //       <RregisterPages />
    //     </Route>
    //     <Route path="/login">
    //       <LoginPages />
    //     </Route>
    //     <Route path="/contacts">
    //       <ContactsPages />
    //     </Route>
    //     {/* <Route>
    //       <NotFound />
    //     </Route> */}
    //   </Switch>
    //   <Toaster
    //     position="top-center"
    //     toastOptions={{
    //       style: {
    //         background: '#363636',
    //         color: '#fff',
    //       },
    //     }}
    //   />
    // </Card>
  );
}
