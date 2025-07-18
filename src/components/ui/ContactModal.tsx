import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';

interface ContactModalProps {
  trigger: React.ReactElement;
}

export const ContactModal: React.FC<ContactModalProps> = ({ trigger }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Здесь будет логика отправки формы
    handleClose();
  };

  return (
    <>
      {React.cloneElement(trigger as any, { onClick: handleShow })}
      
      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Оставьте заявку</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p className="text-muted mb-4">
            И наши менеджеры свяжутся с вами в ближайшее время
          </p>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
              <Form.Label>Имя</Form.Label>
              <Form.Control 
                type="text" 
                placeholder="Введите ваше имя"
                required
              />
            </Form.Group>
            
            <Form.Group className="mb-3">
              <Form.Label>Телефон</Form.Label>
              <Form.Control 
                type="tel" 
                placeholder="Введите ваш номер телефона"
                required
              />
            </Form.Group>
            
            <Form.Group className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control 
                type="email" 
                placeholder="Введите ваш email"
                required
              />
            </Form.Group>
            
            <div className="d-flex gap-2">
              <Button variant="secondary" onClick={handleClose} className="me-2">
                Отмена
              </Button>
              <Button 
                type="submit" 
                className="gradient-button flex-fill"
                style={{
                  background: 'linear-gradient(135deg, #007bff 0%, #0056b3 100%)',
                  border: 'none'
                }}
              >
                Отправить заявку
              </Button>
            </div>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
};