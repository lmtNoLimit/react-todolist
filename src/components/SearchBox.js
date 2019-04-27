import React, { Component } from 'react';
import { InputGroup, Button, InputGroupAddon, Input } from 'reactstrap';

class SearchBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchString: ''
    }
  }
  handleSearch = () => {
    this.props.onSearch(this.state.searchString)
  }
  changeInput = e => {
    this.setState({
      searchString: e.target.value
    });
  }

  render() {
    return (
      <React.Fragment>      
        <InputGroup>
          <Input placeholder="Search..." onChange={this.changeInput} value={this.state.searchString}/>
          <InputGroupAddon addonType="append">
            <Button color="info" onClick={this.handleSearch}>Go</Button>
          </InputGroupAddon>
        </InputGroup>
      </React.Fragment>
    );
  }
};

export default SearchBox;