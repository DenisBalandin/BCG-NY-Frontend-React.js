import React, { useContext, useEffect, useState } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  __RouterContext
} from 'react-router-dom'
import Newcomp from './Newcomp';
import One from './One';
import Three from './Three';
import Home from "./Home";
import MessageBox from './MessageBox';
import MessageList from './MessageList';
import { animated, useTransition } from 'react-spring'

function useRouter() {
  return useContext(__RouterContext)
}

const Main = () => {
  const { location } = useRouter()

  const transitions = useTransition(location, location => location.key, {
    from: {
      opacity: 0,
      position: 'absolute',
      width: '100%',
      'transition-duration': '1s'
    },
    enter: { 
      opacity: 1,
      'transition-duration': '1s'
    },
    leave: {
      opacity: 0,
      'transition-duration': '1s'
      
    }
  })

  return transitions.map(({ item, props: transition, key }) => (
    <animated.div key={key} style={transition}>
      <Switch location={item}>
        <Route exact path="/" component={Home} />
        <Route exact path="/two" component={MessageBox} />
        <Route exact path="/three" component={MessageList} />
      </Switch>
    </animated.div>
  ))
}

const Routes = () => {
  return (
    <Router>
      <ul className="router-nav">
        {/* <Link to="/">One</Link> */}
       
      </ul>
      <Main />
    </Router>
  )
}
export default Routes
