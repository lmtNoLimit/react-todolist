import React, { Component } from 'react';
import { Input, Badge } from 'reactstrap';

class SortBy extends Component {  
  render() {
    return (
      <div className="d-flex align-items-center">
        <Input type="select" name="select">
          <option>Name - Ascending</option>
          <option>Name - Descending</option>
          <option>Level - Ascending</option>
          <option>Level - Descending</option>
        </Input>
        <Badge className="ml-4 p-2" color="success">ASC</Badge>
      </div>
    );
  }
};

export default SortBy;