import React, { Component } from 'react';
import {
  Input,
  Button,
  InputGroup,
  InputGroupAddon,
  Row, 
  Col,
  Form
} from 'reactstrap';

class FormController extends Component {
  constructor(props) {
    super(props);
    this.state = {
      task: '',
      level: 'high'
    }
  }
  handleSubmit = e => {
    e.preventDefault();
    let item = {
      task: this.state.task,
      level: this.state.level
    }
    this.props.onClickSubmit(item)
  }
  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  render() {
    return (
      <Row>
        <Col sm="6" />
        <Col sm="6">
          <Form onSubmit={this.handleSubmit}>
            <InputGroup className="mt-3">
              <Input 
                type="text" 
                name="task" 
                placeholder="Task name..." 
                style={{width: "40%"}}
                onChange={this.handleChange}
                value={this.state.task}
              />
              <Input 
                type="select" 
                name="level" 
                onChange={this.handleChange}
                value={this.state.level}
              >
                <option value="high">High</option>
                <option value="medium">Medium</option>
                <option value="low">Low</option>
              </Input>
              <InputGroupAddon addonType="append">
                <Button color="info">Submit</Button>
              </InputGroupAddon>
            </InputGroup>
          </Form>
        </Col>

      </Row>
    );
  }
};

export default FormController;