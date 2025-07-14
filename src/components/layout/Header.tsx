import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Container, Button, Row, Col } from 'react-bootstrap';

const Header: React.FC = () => {
  const [expanded, setExpanded] = useState(false);

  return (
    <>
      {/* Верхняя компактная панель */}
      <div className="header-top bg-light py-2">
        <Container>
          <Row className="align-items-center">
            <Col md={4}>
              <div className="company-logo">
                <strong>IBTCOM</strong>
              </div>
            </Col>
            <Col md={4} className="text-center">
              <div className="company-name">
                <small className="text-muted">
                  Компания Инновационных Бизнес Технологий
                </small>
              </div>
            </Col>
            <Col md={4} className="text-end">
              <div className="contact-info">
                <div className="phone-number fw-bold">+7(3822) 97-79-97</div>
                <div className="email text-muted">ibtcom@ibtcom.ru</div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      {/* Компактная навигационная панель */}
      <Navbar 
        expand="lg" 
        bg="white" 
        className="main-navbar shadow-sm py-2"
        expanded={expanded}
        onToggle={() => setExpanded(!expanded)}
      >
        <Container>
          <Navbar.Toggle 
            aria-controls="main-navbar-nav" 
            className="border-0"
            onClick={() => setExpanded(!expanded)}
          />
          
          <Navbar.Collapse id="main-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link 
                as={Link} 
                to="/" 
                className="nav-link-custom"
                onClick={() => setExpanded(false)}
              >
                Главная
              </Nav.Link>
              <Nav.Link 
                href="#telephony" 
                className="nav-link-custom"
                onClick={() => setExpanded(false)}
              >
                Телефония
              </Nav.Link>
              <Nav.Link 
                href="#software" 
                className="nav-link-custom"
                onClick={() => setExpanded(false)}
              >
                Программное обеспечение
              </Nav.Link>
              <Nav.Link 
                href="#hardware" 
                className="nav-link-custom"
                onClick={() => setExpanded(false)}
              >
                Аппаратное обеспечение
              </Nav.Link>
              <Nav.Link 
                href="#partners" 
                className="nav-link-custom"
                onClick={() => setExpanded(false)}
              >
                Партнеры
              </Nav.Link>
              <Nav.Link 
                href="#faq" 
                className="nav-link-custom"
                onClick={() => setExpanded(false)}
              >
                Вопросы
              </Nav.Link>
            </Nav>
            
            <Button 
              variant="primary" 
              className="cta-button"
              onClick={() => setExpanded(false)}
            >
              Получить консультацию
            </Button>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
