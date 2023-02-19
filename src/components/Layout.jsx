import React, { Component } from "react";
import axios from "axios";

import { URL_GET_DOGS } from '../constants/state';

class Layout extends Component {

  constructor() {
    super()
    this.state = {
      onLoading: false,
      error: false
    };
  }

  // componentDidMount () {
  // axios.post(`${API.REST_OAUTH2}/token`, p)
  //     .then(res => {
  //       API.TOKEN = res.data.access_token;
  //       this.getMe(API.TOKEN);
  //     })
  //     .catch(() => this.setState({
  //       loading: false,
  //       failure: true,
  //     }));
  // };

  componentDidMount() {
    this.setState({ onLoading: true });
    axios.get(URL_GET_DOGS)
      .then(e => {
        console.log('>>>>>>>> ', e);
      })
      .catch((e) => {
        console.log('>>>>>>>> ', e);
        throw e;
      })
  }

  getDogs = () => {
    this.setState({ onLoading: true });
    axios.get(URL_GET_DOGS)
      .then(e => {
        console.log('>>>>>>>> ', e);
      })
      .catch((e) => {
        console.log('>>>>>>>> ', e);

        throw e;
      })
  };

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
