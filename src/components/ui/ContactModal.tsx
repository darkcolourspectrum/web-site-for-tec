import React, { useState } from 'react';
import { X, Send, CheckCircle } from 'lucide-react';

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

      <style>{`
        .modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.7);
          backdrop-filter: blur(8px);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 1050;
          animation: fadeIn 0.3s ease-out;
          padding: 1rem;
        }

        .modal-container {
          position: relative;
          max-width: 500px;
          width: 100%;
          max-height: 90vh;
          overflow-y: auto;
          animation: slideUp 0.3s ease-out;
        }

        .modal-background {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(135deg, rgba(255, 255, 255, 0.95) 0%, rgba(247, 250, 255, 0.9) 100%);
          backdrop-filter: blur(20px);
          border-radius: 24px;
          border: 1px solid rgba(255, 255, 255, 0.3);
          box-shadow: 
            0 25px 50px -12px rgba(0, 0, 0, 0.25),
            0 0 0 1px rgba(255, 255, 255, 0.1) inset;
        }

        .modal-content {
          position: relative;
          padding: 2.5rem;
          z-index: 1;
        }

        .modal-close {
          position: absolute;
          top: 1rem;
          right: 1rem;
          background: rgba(255, 255, 255, 0.8);
          border: none;
          border-radius: 50%;
          width: 40px;
          height: 40px;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.3s ease;
          color: #64748b;
          z-index: 2;
        }

        .modal-close:hover {
          background: rgba(239, 68, 68, 0.1);
          color: #ef4444;
          transform: scale(1.1);
        }

        .modal-header {
          text-align: center;
          margin-bottom: 0;
        }

        .modal-title {
          font-size: 1.75rem;
          font-weight: 700;
          color: #1e293b;
          margin-bottom: 0;
          background: linear-gradient(135deg, #1e293b 0%, #475569 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .modal-subtitle-wrapper {
          text-align: center;
          margin-bottom: 2rem;
        }

        .modal-subtitle {
          color: #64748b;
          font-size: 1rem;
          line-height: 1.5;
          margin: 0;
        }

        .modal-form {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .form-group {
          position: relative;
        }

        .input-wrapper,
        .textarea-wrapper,
        .phone-wrapper {
          position: relative;
          display: flex;
          align-items: center;
        }

        .phone-wrapper {
          background: rgba(255, 255, 255, 0.8);
          border: 2px solid #e2e8f0;
          border-radius: 12px;
          padding: 0;
          transition: all 0.3s ease;
          backdrop-filter: blur(10px);
        }

        .phone-wrapper:focus-within {
          border-color: #007bff;
          box-shadow: 0 0 0 3px rgba(0, 123, 255, 0.1);
          background: rgba(255, 255, 255, 0.95);
        }

        .phone-prefix {
          padding: 1rem 0.5rem 1rem 1rem;
          color: #1e293b;
          font-weight: 600;
          white-space: nowrap;
          border-right: 1px solid #e2e8f0;
          margin-right: 0.5rem;
        }

        .phone-input {
          border: none !important;
          background: transparent !important;
          box-shadow: none !important;
          padding: 1rem 1rem 1rem 0.5rem !important;
          flex: 1;
        }

        .form-input,
        .form-textarea {
          width: 100%;
          padding: 1rem;
          border: 2px solid #e2e8f0;
          border-radius: 12px;
          font-size: 1rem;
          background: rgba(255, 255, 255, 0.8);
          backdrop-filter: blur(10px);
          transition: all 0.3s ease;
          color: #1e293b;
        }

        .form-input:focus,
        .form-textarea:focus {
          outline: none;
          border-color: #007bff;
          box-shadow: 0 0 0 3px rgba(0, 123, 255, 0.1);
          background: rgba(255, 255, 255, 0.95);
        }

        .form-textarea {
          resize: vertical;
          min-height: 100px;
          font-family: inherit;
        }

        .modal-actions {
          display: flex;
          gap: 1rem;
          margin-top: 1rem;
        }

        .btn-secondary,
        .btn-primary {
          flex: 1;
          padding: 0.875rem 1.5rem;
          border-radius: 12px;
          font-weight: 600;
          font-size: 1rem;
          transition: all 0.3s ease;
          cursor: pointer;
          border: none;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
        }

        .btn-secondary {
          background: rgba(148, 163, 184, 0.1);
          color: #64748b;
          border: 2px solid #e2e8f0;
        }

        .btn-secondary:hover {
          background: rgba(148, 163, 184, 0.2);
          border-color: #cbd5e1;
          transform: translateY(-2px);
        }

        .btn-primary {
          background: linear-gradient(135deg, #007bff 0%, #0056b3 100%);
          color: white;
          box-shadow: 0 4px 15px rgba(0, 123, 255, 0.3);
        }

        .btn-primary:disabled {
          background: rgba(148, 163, 184, 0.3);
          color: rgba(148, 163, 184, 0.7);
          cursor: not-allowed;
          transform: none;
          box-shadow: none;
        }

        .agreement-wrapper {
          margin: 1rem 0;
        }

        .agreement-checkbox {
          display: flex;
          align-items: flex-start;
          gap: 0.75rem;
          cursor: pointer;
          user-select: none;
        }

        .checkbox-input {
          display: none;
        }

        .checkbox-custom {
          width: 20px;
          height: 20px;
          border: 2px solid #e2e8f0;
          border-radius: 4px;
          background: rgba(255, 255, 255, 0.8);
          position: relative;
          transition: all 0.3s ease;
          flex-shrink: 0;
          margin-top: 2px;
        }

        .checkbox-input:checked + .checkbox-custom {
          background: linear-gradient(135deg, #007bff 0%, #0056b3 100%);
          border-color: #007bff;
        }

        .checkbox-input:checked + .checkbox-custom::after {
          content: '';
          position: absolute;
          top: 2px;
          left: 6px;
          width: 4px;
          height: 8px;
          border: solid white;
          border-width: 0 2px 2px 0;
          transform: rotate(45deg);
        }

        .agreement-text {
          font-size: 0.875rem;
          color: #64748b;
          line-height: 1.4;
        }

        .privacy-link {
          color: #007bff;
          text-decoration: none;
          transition: color 0.3s ease;
        }

        .privacy-link:hover {
          color: #0056b3;
          text-decoration: underline;
        }

        .success-content {
          text-align: center;
          padding: 2rem 0;
        }

        .success-icon {
          color: #10b981;
          margin-bottom: 1.5rem;
          animation: successPulse 0.6s ease-out;
        }

        .success-title {
          font-size: 1.75rem;
          font-weight: 700;
          color: #1e293b;
          margin-bottom: 0.5rem;
        }

        .success-subtitle {
          color: #64748b;
          font-size: 1rem;
          line-height: 1.5;
          margin: 0;
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(30px) scale(0.95);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        @keyframes successPulse {
          0% {
            transform: scale(0.8);
            opacity: 0;
          }
          50% {
            transform: scale(1.1);
          }
          100% {
            transform: scale(1);
            opacity: 1;
          }
        }

        @media (max-width: 640px) {
          .modal-content {
            padding: 1.5rem;
          }

          .modal-title {
            font-size: 1.5rem;
          }

          .modal-actions {
            flex-direction: column;
          }

          .btn-secondary,
          .btn-primary {
            flex: none;
          }
        }
      `}</style>
    </>
  );
};