import React, { Component } from 'react';
import PageHeader from './components/PageHeader';
import Controls from './components/Controls';
import TodoTable from './components/TodoTable';
import { Container } from 'reactstrap';
import todos from './mocks/data';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: todos
    }
  }
  
  render() {
    const { items } = this.state;
    return (
      <Container>
        <PageHeader />
        <Controls />
        <TodoTable items={items} />
      </Container>
    );
  }
}

export default App;
