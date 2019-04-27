import React, { Component } from 'react';
import PageHeader from './components/PageHeader';
import Controls from './components/Controls';
import TodoTable from './components/TodoTable';
import { Container } from 'reactstrap';
import todos from './mocks/data';
import FormController from './components/FormController';
import uuidv4 from 'uuid/v4';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: todos,
      isOpen: false,
    }
  }
  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  handleSubmit = item => {
    let {items} = this.state;
    items.push({
      id: uuidv4(),
      task: item.task,
      level: item.level
    });
    this.setState({
      items: items
    })
  }
  renderForm = () => {
    if(this.state.isOpen) {
      return <FormController onClickSubmit={this.handleSubmit}/>;
    }
    return;
  }

  handleSearch = value => {
    this.setState({
      items: todos.filter(item => item.task.toLowerCase().indexOf(value.trim()) !== -1)
    });
  }
  
  handleDelete = id => {
    const { items } = this.state;
    console.log(id);
    this.setState({
      items: items.filter(item => item.id !== id)
    });
  }
  
  render() {
    const { items } = this.state;
    return (
      <Container>
        <PageHeader />
        <Controls 
          openForm={this.toggle} 
          isOpen={this.state.isOpen} 
          onSearch={this.handleSearch}
        />
        {this.renderForm()}
        <TodoTable 
          items={items} 
          onDelete={this.handleDelete}
        />
      </Container>
    );
  }
}

export default App;
