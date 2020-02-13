import React, { Component } from 'react'
import './app.css'
import client from '../client'
import ToDoListSelector from './todo-list-selector'
import ToDoList from './todo-list'
import { Switch, Route } from 'react-router-dom'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      hasAuthenticated: false
    }
  }

  componentWillMount() {
    client.authenticateUser().then(() => {
      this.setState({
        hasAuthenticated: true
      })
    })
  }

  render() {
    let appBody
    // if (this.state.hasAuthenticated) {
    appBody = (
      <span>
        <p>Hi from CI/CD!</p>
        <Switch>
          <Route exact path="/" component={ToDoListSelector} />
          <Route exact path="/lists" component={ToDoListSelector} />
          <Route exact path="/list" component={ToDoList} />
          <Route exact path="/list/:listId" component={ToDoList} />
          <Route exact path="/todo-example/" component={ToDoListSelector} />
          <Route exact path="/todo-example" component={ToDoListSelector} />
          <Route
            exact
            path="/todo-example/lists"
            component={ToDoListSelector}
          />
          <Route exact path="/todo-example/list" component={ToDoList} />
          <Route exact path="/todo-example/list/:listId" component={ToDoList} />
        </Switch>
      </span>
    )
    // }

    return <div className="app">{appBody}</div>
  }
}

export default App
