/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/no-array-index-key */

import React from 'react';
import '../assets/styles/sass/components/_table.scss';
import '../assets/styles/sass/components/_stepProgress.scss';

export default class DynamicTable extends React.Component {
  constructor(props) {
    super(props);
    this.getHeader = this.getHeader.bind(this);
    this.getRowsData = this.getRowsData.bind(this);
    this.getKeys = this.getKeys.bind(this);
  }

  getKeys = () => {
    return Object.keys(this.props.data[0]);
  };

  getHeader = () => {
    const keys = this.getKeys();
    return keys.map((key, index) => {
      return <th key={key}>{key.toUpperCase()}</th>;
    });
  };

  getRowsData = () => {
    const items = this.props.data;
    const keys = this.getKeys();
    return items.map((row, index) => {
      return (
        <tr key={`${index}t`}>
          <RenderRow key={index} data={row} keys={keys} />
        </tr>
      );
    });
  };

  render() {
    return (
      <div className='table-responsive'>
        <table className='table table-striped'>
          <thead>
            <tr>{this.getHeader()}</tr>
          </thead>
          <tbody>{this.getRowsData()}</tbody>
        </table>
      </div>
    );
  }
}

const RenderRow = (props) => {
  return props.keys.map((key, index) => {
    return <td key={props.data[key]}>{props.data[key]}</td>;
  });
};
