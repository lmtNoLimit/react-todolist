import React, { Component } from 'react';
import { Table } from 'reactstrap';
import ListItem from './ListItem';

class TodoTable extends Component {
  render() {
    const { items, onDelete } = this.props;
    return (
      <div>
        <Table className="mt-5" hover responsive>
          <thead>
            <tr>
              <th style={{width: "5%"}}>#</th>
              <th style={{width: "35%"}}>Task</th>
              <th style={{width: "10%"}}>Level</th>
              <th className="text-center" style={{width: "20%"}}>Action</th>
            </tr>
          </thead>
          <tbody>
            <ListItem onDelete={onDelete} items={items}/>
          </tbody>
        </Table>
      </div>
    );
  }
}

export default TodoTable;