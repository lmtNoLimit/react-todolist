import React, { Component } from 'react';
import SearchBox from './SearchBox';
import SortBy from './SortBy';
import { Row, Col, Button } from 'reactstrap';

class Controls extends Component {
  renderButton = () => {
    if(this.props.isOpen) {
      return (
        <Button 
          color="danger" 
          style={{width: "100%"}} 
          onClick={this.props.openForm}              
        >
          Cancel 
        </Button>
      )
    }
    return (
      <Button 
        color="info" 
        style={{width: "100%"}} 
        onClick={this.props.openForm}
      >
        Add task
      </Button>
    )
  }
  render() {
    const { onSearch } = this.props;
    return (
      <div>
        <Row>
          <Col md="3">
            <SearchBox onSearch={onSearch} />
          </Col>
          <Col md="3">
            <SortBy />
          </Col>
          <Col md="6">
            {this.renderButton()}
          </Col>
        </Row>
      </div>
    );
  }
}

export default Controls;