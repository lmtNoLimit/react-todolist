import React, { Component } from 'react';
import { Input, Badge } from 'reactstrap';

class SortBy extends Component {
  render() {
    return (
      <div className="d-flex align-items-center">
        <Input type="select" name="select">
          <option onClick={this.handleSort}>Name - Ascending</option>
          <option onClick={this.handleSort}>Name - Descending</option>
          <option onClick={this.handleSort}>Level - Ascending</option>
          <option onClick={this.handleSort}>Level - Descending</option>
        </Input>
        <Badge className="ml-4 p-2" color="success"></Badge>
      </div>
    );
  }
};

export default SortBy;