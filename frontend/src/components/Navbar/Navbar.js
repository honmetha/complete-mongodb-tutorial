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
              <Button>AAAAA</Button>
              <Button>BBBBB</Button>
              <Button>CCCCC</Button>
              <Button>DDDDD</Button>
            </Row>
          </Col>
          <Col span={1}>4</Col>
        </Row>
      </div>
    )
  }
}
