import React from 'react';
import { InputGroup, Button, InputGroupAddon, Input } from 'reactstrap';

const SearchBox = () => {
  return (
    <React.Fragment>      
      <InputGroup>
        <Input placeholder="Search..." />
        <InputGroupAddon addonType="append">
          <Button color="info">Go</Button>
        </InputGroupAddon>
      </InputGroup>
    </React.Fragment>
  );
};

export default SearchBox;