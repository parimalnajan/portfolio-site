import React from 'react';
import mainclass from '../profileApp';
import LandingPage from './LandingPage';
import Projects from './Projects';
import Resume from './Resume';
import Contact from './Contact';

import { Switch, Route,} from "react-router-dom";

const Main = () => (

    <Switch>
             
        <Route path="/projects" component={Projects}/>
        <Route  path="/contact" component={Contact}/>
        <Route  path="/skills" component={Resume}/>
        <Route exact path={["/home", "/"]} component={LandingPage} />
    </Switch>
)  


export default Main;