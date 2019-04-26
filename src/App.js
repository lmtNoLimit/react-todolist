import React, { Component } from 'react';
import PageHeader from './components/PageHeader';
import Controls from './components/Controls';
import TodoTable from './components/TodoTable';
import { Container } from 'reactstrap';
import todos from './mocks/data';
import FormController from './components/FormController';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: todos,
      isOpen: false,
      searchString: ''
    }
  }
  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  renderForm = () => {
    if(this.state.isOpen) {
      return <FormController />;
    }
    return;
  }
  handleSearch = (value) => {
    this.setState({
      items: todos.filter(item => item.task.toLowerCase().indexOf(value.trim()) !== -1)
    });
  }
  render() {
    const { items } = this.state;
    return (
      <Container>
        <PageHeader />
        <Controls openForm={this.toggle} isOpen={this.state.isOpen} onSearch={this.handleSearch}/>
        {this.renderForm()}
        <TodoTable items={items} />
      </Container>
    );
  }
}

export default App;
