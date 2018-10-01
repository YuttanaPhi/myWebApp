import React, { Component } from "react";

class Province extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoad: false,
      item: []
    };
  }

  componentDidMount() {
    fetch("http://coal.dmf.go.th:9200/api/v1/coal/noauth/lt_province")
      .then(res => res.json())
      .then(
        result => {
          this.setState({
            isLoad: true,
            items: result.data
          });
        },
        error => {
          this.setState({
            isLoad: true,
            error
          });
        }
      );
  }

  render() {
    const { error, isLoad, items } = this.state;
    if (error) {
      return (
        <div>
          <h1>Service Error!</h1>
        </div>
      );
    } else if (!isLoad) {
      return <div>loading.....</div>;
    } else {
      return (
        <div>
          <table class="table">
            <thead>
              <tr>
                <th>ID</th>
                <th>NameTH</th>
                <th>NameEN</th>
              </tr>
            </thead>
            <tbody>
                {items.map(item =>(
                    <tr>
                        <td>{item.id}</td>
                        <td>{item.name.th}</td>
                        <td>{item.name.en}</td>
                    </tr>
                ))}
            </tbody>
            <tfoot>
              <tr>
                <th>ID</th>
                <th>NameTH</th>
                <th>NameEN</th>
              </tr>
            </tfoot>
          </table>
        </div>
      );
    }
  }
}

export default Province;
