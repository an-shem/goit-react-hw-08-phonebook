import { Redirect, Route } from 'react-router';
import { useSelector } from 'react-redux';
import { getUserIsLoggedIn } from '../redux/authUser/authUser-selectors';

export default function PublicRoute({
  children,
  restricted = false,
  ...routeProps
}) {
  const isLoggedIn = useSelector(getUserIsLoggedIn);
  const shouldRedirect = isLoggedIn && restricted;
  return (
    <Route {...routeProps}>
      {shouldRedirect ? <Redirect to="/contacts" /> : children}
    </Route>
  );
}
