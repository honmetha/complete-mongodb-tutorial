import React, { Component } from 'react';
import './Navbar.css';
import { Row, Col, Button } from 'antd';
import Logo from '../../images/Logo.png';

export default class Navbar extends Component {
  render() {
    return (
      <div>
        <Row className="Navbar-Body">
          <Col span={1}>1</Col>
          <Col span={6}><img src={Logo} alt="" width="200" /></Col>
          <Col span={16}>
            <Row type="flex" align="end">
              <Button className="Navbar-Buttons">AAAAA</Button>
              <Button className="Navbar-Buttons">BBBBB</Button>
              <Button className="Navbar-Buttons">CCCCC</Button>
              <Button className="Navbar-Buttons">DDDDD</Button>
            </Row>
          </Col>
          <Col span={1}>4</Col>
        </Row>
      </div>
    )
  }
}
