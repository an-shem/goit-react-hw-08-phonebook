import { Toaster } from 'react-hot-toast';
import ContactsPages from '../../Pages/ContactsPages';
import AddContact from '../../Pages/AddContact';
import LoginPages from '../../Pages/LoginPages';
import RregisterPages from '../../Pages/RregisterPages';
import Header from '../Header';
import Card from '../Card';
import PrivateRoute from '../../components/PrivateRoute.js';
import PublicRoute from '../../components/PublicRoute';
import { AppWrapper, Container } from './App.styled';

import { Switch, Redirect } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

import { fetchCurrentUser } from '../../redux/authUser/authUserOperations';
import { getFetchingCurrentUser } from '../../redux/authUser/authUser-selectors';

export default function App() {
  const isFetchingCurrentUser = useSelector(getFetchingCurrentUser);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCurrentUser());
  }, [dispatch]);

  return (
    !isFetchingCurrentUser && (
      <AppWrapper>
        <Header />
        <Container>
          <Card>
            <Switch>
              <PublicRoute path="/register" restricted>
                <RregisterPages />
              </PublicRoute>
              <PublicRoute path="/login" restricted>
                <LoginPages />
              </PublicRoute>
              <PrivateRoute path="/contacts/add">
                <AddContact />
              </PrivateRoute>
              <PrivateRoute path="/contacts">
                <ContactsPages />
              </PrivateRoute>
              <Redirect to="/contacts" />
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
    )
  );
}
