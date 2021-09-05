import { Redirect, Route } from 'react-router';
import { useSelector } from 'react-redux';
import { getUserIsLoggedIn } from '../redux/authUser/authUser-selectors';

export default function PrivateRoute({ children, ...routeProps }) {
  const isLoggedIn = useSelector(getUserIsLoggedIn);
  return (
    <Route {...routeProps}>
      {isLoggedIn ? children : <Redirect to="/login" />}
    </Route>
  );
}
