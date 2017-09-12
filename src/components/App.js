import React, { Component } from 'react'
import Content from '@/pages/root/content'
import City from '@/pages/citys/city'

import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

class App extends Component {

  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={ Content }></Route>
          <Route path="/citys/" component={ City }></Route>
        </div>
      </Router>
    )
  }
}

export default App
