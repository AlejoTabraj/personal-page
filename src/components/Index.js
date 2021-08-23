import React, {useState} from 'react'
import Main from './pages/Main'
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Navbar from './organisms/Navbar';
import Projects from './pages/Projects';

export default function Index(){
    const [transition, setTransition] = useState(false);

    return (
    <Router>
        <Navbar transition={transition}/>
        <Switch>
            <Route exact path='/'>
                <Main transition={transition} setTransition={setTransition}/>
            </Route>
            
            <Route exact path='/projects'>
                <Projects />
            </Route>
    
    </Switch>
    </Router>)
}