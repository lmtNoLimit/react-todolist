import React, { Component } from 'react';
import PageHeader from './components/PageHeader';
import Controls from './components/Controls';
import TodoTable from './components/TodoTable';
import { Container } from 'reactstrap';
// import todos from './mocks/data';
import FormController from './components/FormController';
import uuidv4 from 'uuid/v4';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
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
    });
    localStorage.setItem("todos", JSON.stringify(this.state.items));
  }
  renderForm = () => {
    if(this.state.isOpen) {
      return <FormController onClickSubmit={this.handleSubmit}/>;
    }
    return;
  }

  handleSearch = value => {
    let data = JSON.parse(localStorage.getItem("todos"))
    this.setState({
      items: data.filter(item => item.task.toLowerCase().indexOf(value.trim()) !== -1)
    });
  }
  
  handleDelete = id => {
    const { items } = this.state;
    console.log(id);
    this.setState({
      items: items.filter(item => item.id !== id)
    });
  }
  
  componentWillMount() {    
    let items = JSON.parse(localStorage.getItem("todos"))
    this.setState({
      items: items
    })
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
