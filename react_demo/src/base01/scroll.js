import React from'react';

class ScrollableList extends React.Component {
  constructor(props) {
    super(props);
    this.listRef = React.createRef();
  }
  getSnapshotBeforeUpdate(prevProps, prevState) {
    const list = this.listRef.current;
    return list.scrollTop;
  }
  componentDidUpdate(prevProps, prevState, snapshot) {
    const list = this.listRef.current;
    list.scrollTop = snapshot;
  }
  render() {
    return (
      <div
        ref={this.listRef}
        style={{
          height: '200px',
          overflow: 'auto',
          border: '1px solid black'
        }}
      >
        {this.props.items.map((item, index) => (
          <div key={index}>{item}</div>
        ))}
      </div>
    );
  }
}

export default ScrollableList;