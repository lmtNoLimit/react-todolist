import React, { Component } from 'react';
import { Button } from 'reactstrap';
class ListItem extends Component {
  render() {
    const { items } = this.props;
    return (
      <React.Fragment>
        {items.map((item, i) => (
          <tr key={i}>
            <td>{item.id}</td>
            <td>{item.task}</td>
            <td>{item.level}</td>
            <td className="text-center">
              <Button color="warning" size="sm">Edit</Button>
              <Button color="danger" size="sm" className="ml-2">Delete</Button>
            </td>
          </tr>
        ))}
      </React.Fragment>
    );
  }
}

export default ListItem;