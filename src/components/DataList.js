import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchData } from "../actions";

class DataList extends Component {

  handleClick = () => {
    console.log("clicked");
    this.props.fetchData();
  };

  render() {
    const { data } = this.props;
    console.log("DATA: ", data);
    return (
      <div>
        <button onClick={this.handleClick}>Fetch data</button>
        {data && (
          <ul>
            {data.map(eachData => (
              <li key={eachData.title}>
                <p>USER ID :{eachData.userId}</p>
                <p>ID: {eachData.id}</p>
                <p>Title: {eachData.title}</p>
                <p>Completed: {`${eachData.completed}`}</p>
              </li>
            ))}
          </ul>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  data: state.data
});

export default connect(
  mapStateToProps,
  { fetchData }
)(DataList);
