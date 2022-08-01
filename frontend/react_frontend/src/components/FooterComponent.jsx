import React, { Component } from "react";

class FooterComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <footer className="footer">
        <span className="text-muted">All Rights Reserved 2022 @heshanK</span>
      </footer>
    );
  }
}

export default FooterComponent;
