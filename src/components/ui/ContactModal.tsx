import React, { useState, useEffect } from 'react';
import { X, Send, CheckCircle } from 'lucide-react';
import '../../styles/components/modal.css'

interface ContactModalProps {
  trigger: React.ReactElement;
  withMessage?: boolean;
}

export const ContactModal: React.FC<ContactModalProps> = ({ trigger, withMessage = false }) => {
  const [show, setShow] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isAgreed, setIsAgreed] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  });

  useEffect(() => {
    if (show) {
      const scrollY = window.scrollY;
      document.body.style.position = 'fixed';
      document.body.style.top = `-${scrollY}px`;
      document.body.style.width = '100%';
      document.body.classList.add('modal-open');
    } else {
      const scrollY = document.body.style.top;
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.width = '';
      document.body.classList.remove('modal-open');
      if (scrollY) {
        window.scrollTo(0, parseInt(scrollY || '0') * -1);
      }
    }

    return () => {
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.width = '';
      document.body.classList.remove('modal-open');
    };
  }, [show]);

  const handleClose = () => {
    setShow(false);
    setTimeout(() => {
      setIsSubmitted(false);
      setIsAgreed(false);
      setFormData({ name: '', phone: '', email: '', message: '' });
    }, 300);
  };
  
  const handleShow = () => setShow(true);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      handleClose();
    }, 2000);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value.replace(/\D/g, '');
    
    if (value.length <= 10) {
      let formatted = '';
      if (value.length > 0) {
        formatted += '(' + value.substring(0, 3);
        if (value.length >= 3) {
          formatted += ') ' + value.substring(3, 6);
          if (value.length >= 6) {
            formatted += '-' + value.substring(6, 8);
            if (value.length >= 8) {
              formatted += '-' + value.substring(8, 10);
            }
          }
        }
      }
      
      setFormData({
        ...formData,
        phone: formatted
      });
    }
  };

  return (
    <>
      {React.cloneElement(trigger as any, { onClick: handleShow })}
      
      {show && (
        <div className="modal-overlay" onClick={handleClose}>
          <div className="modal-container" onClick={(e) => e.stopPropagation()}>
            <div className="modal-background"></div>
            
            <div className="modal-content">
              <button className="modal-close" onClick={handleClose}>
                <X size={24} />
              </button>

              {!isSubmitted ? (
                <>
                  <div className="modal-header">
                    <h2 className="modal-title">Оставьте заявку</h2>
                  </div>
                  
                  <div className="modal-subtitle-wrapper">
                    <p className="modal-subtitle">
                      И наши менеджеры свяжутся с вами в ближайшее время
                    </p>
                  </div>

                  <form className="modal-form" onSubmit={handleSubmit}>
                    <div className="form-group">
                      <div className="input-wrapper">
                        <input
                          type="text"
                          name="name"
                          placeholder="Введите ваше имя"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          className="form-input"
                        />
                      </div>
                    </div>

                    <div className="form-group">
                      <div className="phone-wrapper">
                        <span className="phone-prefix">+7</span>
                        <input
                          type="tel"
                          name="phone"
                          placeholder="(___) ___-__-__"
                          value={formData.phone}
                          onChange={handlePhoneChange}
                          required
                          className="form-input phone-input"
                          maxLength={15}
                        />
                      </div>
                    </div>

                    <div className="form-group">
                      <div className="input-wrapper">
                        <input
                          type="email"
                          name="email"
                          placeholder="Введите ваш email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          className="form-input"
                        />
                      </div>
                    </div>

                    {withMessage && (
                      <div className="form-group">
                        <div className="textarea-wrapper">
                          <textarea
                            name="message"
                            placeholder="Опишите ваш запрос или задачу"
                            value={formData.message}
                            onChange={handleInputChange}
                            rows={4}
                            className="form-textarea"
                          />
                        </div>
                      </div>
                    )}

                    <div className="agreement-wrapper">
                      <label className="agreement-checkbox">
                        <input
                          type="checkbox"
                          checked={isAgreed}
                          onChange={(e) => setIsAgreed(e.target.checked)}
                          className="checkbox-input"
                        />
                        <span className="checkbox-custom"></span>
                        <span className="agreement-text">
                          Я согласен(а) с{' '}
                          <a href="/privacy" target="_blank" className="privacy-link">
                            Политикой конфиденциальности
                          </a>
                        </span>
                      </label>
                    </div>

                    <div className="modal-actions">
                      <button type="button" className="btn-secondary" onClick={handleClose}>
                        Отмена
                      </button>
                      <button type="submit" className="btn-primary" disabled={!isAgreed}>
                        <Send size={18} />
                        Отправить заявку
                      </button>
                    </div>
                  </form>
                </>
              ) : (
                <div className="success-content">
                  <div className="success-icon">
                    <CheckCircle size={64} />
                  </div>
                  <h2 className="success-title">Заявка отправлена!</h2>
                  <p className="success-subtitle">
                    Спасибо за обращение. Мы свяжемся с вами в ближайшее время.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};