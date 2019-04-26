import React, { Component } from 'react';
import {
  Input,
  Button,
  InputGroup,
  InputGroupAddon
} from 'reactstrap';

class FormController extends Component {
  render() {
    return (
      <InputGroup className="mt-3">
        <Input type="text" placeholder="Task name..." />      
        <Input type="select" name="select">
          <option>High</option>
          <option>Medium</option>
          <option>Low</option>
        </Input>
        <InputGroupAddon addonType="append">
          <Button color="info">Submit</Button>
          <Button color="danger">Cancel</Button>
        </InputGroupAddon>
      </InputGroup>
    );
  }
};

export default FormController;