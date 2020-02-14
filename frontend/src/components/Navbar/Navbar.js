import React, { Component } from 'react';
import './Navbar.css';
import { Row, Col } from 'antd';
import Logo from '../../images/Logo.png';

export default class Navbar extends Component {
  render() {
    return (
      <div>
        <Row className="Navbar-Body">
          <Col span={1}>1</Col>
          <Col span={22}><img src={Logo} alt="" width="200" /></Col>
          <Col span={1}>3</Col>
        </Row>
      </div>
    )
  }
}
