import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
  useHistory,
  useLocation
} from 'react-router-dom'

export const AuthExample = () => {
  return (
    <Router>
      <div>
        <AuthButton/>

        <ul>
          <li>
            <Link to={'/public'}>Public Page</Link>
          </li>
          <li>
            <Link to={'private'}>Private Page</Link>
          </li>
        </ul>

        <Switch>
          <Route path={'/public'}>
            <PublicPage />
          </Route>
          <Route path={'/login'}>
            <LoginPage />
          </Route>
          <PrivateRoute path={'/private'}>
            <ProtectedPage />
          </PrivateRoute>
        </Switch>
      </div>
    </Router>
  )
}

const fakeAuth = {
  isAuthenticated: false,
  authenticate(cb) {
    fakeAuth.isAuthenticated = true
    setTimeout(cb, 100)
  },
  signout(cb) {
    fakeAuth.isAuthenticated = false
    setTimeout(cb, 100)
  }
}

const AuthButton = () => {
  let history = useHistory()

  return fakeAuth.isAuthenticated ? (
    <p>
      Welcome!{' '}
      <button 
        onClick={() => {
          fakeAuth.signout(() => history.push('/'))
        }}>
        Sign out
      </button>
    </p>
  ) : (
    <p>You are not logged in.</p>
  )
}

const PrivateRoute = ({ children, ...rest }) => {
  return (
    <Route 
      {...rest}
      render={({ location }) =>
        fakeAuth.isAuthenticated ? (
          children
        ) : (
          <Redirect to={{ pathname: '/login', state: { from: location } }} />
        )
    }/>
  )
}

const PublicPage = () => {
  return <h3>Public</h3>
}

const ProtectedPage = () => {
  return <h3>Private</h3>
}

const LoginPage = () => {
  let history = useHistory()
  let location = useLocation()

  let { from } = location.state || { from: { pathname: '/' } }
  let login = () => {
    fakeAuth.authenticate(() => {
      history.replace(from)
    })
  }

  return (
    <div>
      <p>You must log in to view the page at { from.pathname }</p>
      <button onClick={login}>Log in</button>
    </div>
  )
}