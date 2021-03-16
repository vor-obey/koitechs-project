import React from 'react';
import './style.scss';
import FooterLogo from './Screenshot 2021-03-03 at 21.02.57.png';
import { Col, Row, Layout } from 'antd';
import StorageService from '../../services/StorageService';

const { Footer } = Layout;

const MainFooter = () => {
  const token = StorageService.getJWTToken('acc');

  return (
    <Footer className='footer'>
      {!token && <div className='vertical-line'/>}
      <div className='logotype-footer' >
        <img src={FooterLogo} alt=""/>
      </div>
      <Row className='footer-row'>
        <Col className='footer-col'>
          <Row>
            Citroneer AB
          </Row>
          <Row>
            Vasagatan 7A, 111 20, Stockholm, Sweden
          </Row>
          <Row>
            +46 (0)8 410 155 00 kontakt@citroneer.com
          </Row>
        </Col>
        <Col className='footer-col center'>
          <Col className='footer-col-left'>
            <Row>Nyhetsrum</Row>
            <Row>Våra tjänster</Row>
          </Col>
          <Col className='footer-col-center'>
            <Row>Karriär</Row>
            <Row>Kontakt</Row>
          </Col>
          <Col className='footer-col-right'>
            <Row>Juridisk information</Row>
            <Row>Integritetspolicy</Row>
          </Col>
        </Col>
        <Col className='footer-col'>
          Bli en del av vår rådgivarekår
        </Col>
      </Row>
    </Footer>
  );
};

export default MainFooter;
