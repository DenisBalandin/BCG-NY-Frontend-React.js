import React, { useContext, useEffect, useState } from 'react';
import { animated, useTransition } from 'react-spring';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  __RouterContext
} from 'react-router-dom'
import ScreenSaver from "./ScreenSaver";
import HomePage from "./HomePage";
import MessageBox from './MessageBox';
import MessageList from './MessageList';
import HowDoI from './HowDoI';
import WherIs from './components/WhereIs';
import Search from './Search';
import WhoWeAre from './WhoWeAre';
import Emergency from './Emergency';
import WeatherWidget from './WeatherWidget';
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
         {/* <Route exact path="/about"  component={About}/>
                <Route exact path="/news"  component={News}/>
                <Route exact path="/contacts"  component={Contacts}/> */}
                <Route exact path="/emergency"  component={Emergency}/>
                <Route exact path="/whoweare"  component={WhoWeAre}/>
                <Route exact path="/search"  component={Search}/>
                <Route exact path="/whereis"  component={WherIs}/>
                <Route exact path="/homepage"  component={HomePage}/>
                <Route exact path="/messagelist"  component={MessageList}/>
                <Route exact path="/messagebox"  component={MessageBox}/>
                <Route exact path="/howdoi"  component={HowDoI}/>
                <Route exact path="/weather"  component={WeatherWidget}/>
                <Route exact path="/"  component={ScreenSaver}/>
                {/* <Route exact path="/pageitem/:itemid" component={ItemPage} />
                <Route exact path="/pageinews/:itemid" component={NewsPage} /> */}
      </Switch>
    </animated.div>
  ))
}
const Routes = () => {
  return (
    <Router>
      <Main />
    </Router>
  )
}
export default Routes
