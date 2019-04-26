import React, { Component } from 'react';
import SearchBox from './SearchBox';
import SortBy from './SortBy';
import FormController from './FormController';
import { Row, Col, Button } from 'reactstrap';

class Controls extends Component {
  render() {
    return (
      <div>
        <Row>
          <Col md="3">
            <SearchBox />
          </Col>
          <Col md="3">
            <SortBy />
          </Col>
          <Col md="6">
            <Button color="info" style={{width: "100%"}}>Add task</Button>
          </Col>
        </Row>
        <Row>
          <Col sm="6"></Col>
          <Col sm="6">
            <FormController />
          </Col>        
        </Row>
      </div>
    );
  }
}

export default Controls;