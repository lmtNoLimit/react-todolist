import React, { Component } from 'react';
import {
  Input,
  Button,
  InputGroup,
  InputGroupAddon,
  Row, 
  Col
} from 'reactstrap';

class FormController extends Component {
  render() {
    return (
      <Row>
        <Col sm="6" />
        <Col sm="6">
          <InputGroup className="mt-3">
            <Input type="text" placeholder="Task name..." style={{width: "40%"}}/>
            <Input type="select" name="select">
              <option>High</option>
              <option>Medium</option>
              <option>Low</option>
            </Input>
            <InputGroupAddon addonType="append">
              <Button color="info">Submit</Button>
            </InputGroupAddon>
          </InputGroup>
        </Col>
      </Row>
    );
  }
};

export default FormController;