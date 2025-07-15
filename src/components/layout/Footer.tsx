import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="modern-footer">
      {/* Основная секция футера */}
      <div className="footer-main bg-dark text-white py-5">
        <Container>
          <Row className="align-items-center">
            <Col md={6}>
              <div className="footer-contact">
                <h5 className="text-gradient mb-3">Свяжитесь с нами</h5>
                <div className="contact-item mb-2">
                  <i className="contact-icon">📞</i>
                  <span className="contact-text">
                    <strong>+7 (3822) 97-79-97</strong>
                  </span>
                </div>
                <div className="contact-item mb-3">
                  <i className="contact-icon">📧</i>
                  <span className="contact-text">ibtcom@ibtcom.ru</span>
                </div>
                <Button variant="outline-light" className="footer-cta-btn">
                  Заказать звонок
                </Button>
              </div>
            </Col>
            
            <Col md={6}>
              <div className="footer-company text-md-end">
                <h5 className="company-title mb-3">IBTCOM</h5>
                <p className="company-description mb-3">
                  Компания Инновационных Бизнес Технологий - 
                  ваш надежный партнер в области IT-решений 
                  и оптимизации бизнес-процессов
                </p>
                <div className="social-links">
                  <a 
                    href="https://t.me/ibtcom" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="social-link"
                  >
                    <i className="social-icon">📱</i>
                    <span>Telegram</span>
                  </a>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      {/* Нижняя секция с копирайтом */}
      <div className="footer-bottom bg-darker py-3">
        <Container>
          <Row className="align-items-center">
            <Col md={8}>
              <div className="copyright-info">
                <p className="mb-1">
                  © 2010-{currentYear}, ООО «Компания Инновационных Бизнес Технологий». 
                  Все права защищены.
                </p>
                <p className="company-details mb-0">
                  <small>ИНН 7017275599/КПП 701701001</small>
                </p>
              </div>
            </Col>
            <Col md={4} className="text-md-end">
              <div className="footer-links">
                <a href="/privacy" className="footer-link">
                  Политика конфиденциальности
                </a>
                <span className="mx-2">•</span>
                <a href="/terms" className="footer-link">
                  Условия использования
                </a>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </footer>
  );
};

export default Footer;