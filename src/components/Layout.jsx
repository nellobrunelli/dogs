import React, { Component } from "react";

class Layout extends Component {

  render() {
    return (
      <div className="flex">
        <div className="bg-red-200 w-1/4 h-max">Sidebar</div>
        <div className="w-3/4">Corpo</div>
      </div>
    );
  }
}

export default Layout;
