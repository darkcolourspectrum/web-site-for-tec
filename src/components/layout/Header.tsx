import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Container, Button, Row, Col } from 'react-bootstrap';

const Header: React.FC = () => {
  const [expanded, setExpanded] = useState(false);

  const handleNavClick = () => setExpanded(false);

  const navItems = [
    { path: '/', label: 'Главная', isRoute: true },
    { path: 'telephony', label: 'Телефония', isRoute: true },
    { path: 'software', label: 'Программное обеспечение', isRoute: true },
    { path: 'hardware', label: 'Аппаратное обеспечение', isRoute: true },
    { path: 'about', label: 'О компании', isRoute: true },
  ];

  return (
    <>
      {/* Верхняя панель с навигацией */}
      <div className="header-top bg-light py-2">
        <Container>
          <Row className="align-items-center">
            <Col md={2}>
              <div className="company-logo">
                <strong>IBTCOM</strong>
              </div>
            </Col>
            <Col md={10}>
              <Navbar 
                expand="lg" 
                bg="light" 
                className="p-0"
                expanded={expanded}
                onToggle={setExpanded}
              >
                <Navbar.Toggle 
                  aria-controls="main-navbar-nav" 
                  className="border-0 ms-auto"
                />
                
                <Navbar.Collapse id="main-navbar-nav">
                  <Nav className="ms-auto align-items-center">
                    {navItems.map((item) => (
                      item.isRoute ? (
                        <Nav.Link 
                          key={item.path}
                          as={Link} 
                          to={item.path}
                          className="nav-link-custom"
                          onClick={handleNavClick}
                        >
                          {item.label}
                        </Nav.Link>
                      ) : (
                        <Nav.Link 
                          key={item.path}
                          href={item.path}
                          className="nav-link-custom"
                          onClick={handleNavClick}
                        >
                          {item.label}
                        </Nav.Link>
                      )
                    ))}
                    <Button 
                      variant="primary" 
                      className="cta-button ms-3"
                      onClick={handleNavClick}
                    >
                      Получить консультацию
                    </Button>
                  </Nav>
                </Navbar.Collapse>
              </Navbar>
            </Col>
          </Row>
        </Container>
      </div>

      {/* Нижняя узкая полоса с информацией */}
      <div className="header-bottom bg-white shadow-sm py-1">
        <Container>
          <Row className="align-items-center">
            <Col md={8}>
              <div className="company-name text-muted small">
                Компания Инновационных Бизнес Технологий
              </div>
            </Col>
            <Col md={4} className="text-end">
              <div className="contact-info-inline">
                <span className="phone-number fw-bold">+7(3822) 97-79-97</span>
                <span className="separator mx-2">|</span>
                <span className="email text-muted">ibtcom@ibtcom.ru</span>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Header;