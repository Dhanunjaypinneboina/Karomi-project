import {Route} from 'react-router-dom'

import './App.css'
import Home from './components/Home'
import NewProjects from './components/NewProjects'
import AllProjects from './components/AllProjects'
import SearchItems from './components/SearchItems'
import ReportsRoute from './components/ReportsRoute'

const App = () => (
  <div>
    <Route exact path="/" component={Home} />
    <Route exact path="/new-projects" component={NewProjects} />
    <Route exact path="/all-projects" component={AllProjects} />
    <Route exact path="/search-item" component={SearchItems} />
    <Route exact path="/report" component={ReportsRoute} />
  </div>
)
export default App
