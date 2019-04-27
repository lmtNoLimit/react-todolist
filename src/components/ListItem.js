import React, { Component } from 'react';
import { Button, Badge } from 'reactstrap';
class ListItem extends Component {
  getBadgeColor = (level) => {
    if(level === 'high') {
      return 'danger';
    } else if(level === 'medium') {
      return 'warning';
    }
    return 'success';  
  }
  handleDelete = id => {
    this.props.onDelete(id)
  }
  render() {
    const { items } = this.props;
    return (
      <React.Fragment>
        {items.map((item, i) => (
          <tr key={i}>
            <td>{i + 1}</td>
            <td>{item.task}</td>
            <td><Badge color={this.getBadgeColor(item.level)}>{item.level}</Badge></td>
            <td className="text-center">
              <Button color="warning" size="sm">Edit</Button>
              <Button onClick={() => this.handleDelete(item.id)} color="danger" size="sm" className="ml-2">Delete</Button>
            </td>
          </tr>
        ))}
      </React.Fragment>
    );
  }
}

export default ListItem;