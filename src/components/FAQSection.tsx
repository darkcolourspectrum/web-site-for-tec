import React, { useState, useCallback } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { ContactModal } from './ui/ContactModal';
import '../styles/components/faq.css';

interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export const FAQSection: React.FC = () => {
  const [openItemId, setOpenItemId] = useState<string | null>(null);

  const faqData: FAQItem[] = [
    {
      id: 'faq-private-clients',
      question: "Работаете ли вы с частными лицами?",
      answer: "К сожалению, мы работаем только с юридическими лицами"
    },
    {
      id: 'faq-satellite',
      question: "Занимаетесь ли вы спутниковой связью?",
      answer: "Да, мы готовы предложить любые отраслевые решения, вплоть до организации магистральных каналов."
    },
    {
      id: 'faq-payment',
      question: "Какие формы оплаты принимаете?",
      answer: "Мы принимаем к оплате только безналичный расчёт"
    },
    {
      id: 'faq-experience',
      question: "Как долго вы работаете?",
      answer: "Организация работает на рынке информационных технологий более 5 лет."
    },
    {
      id: 'faq-tariffs',
      question: "Как долго действуют тарифы, которые вы предлагаете?",
      answer: "У тарифных планов нет сроков действия. Согласно законодательству сотовый оператор не может менять условия тарифного плана, на который вы уже подключились ранее."
    },
    {
      id: 'faq-complaints',
      question: "Бывало ли, что клиенты жаловались на качество ваших работ?",
      answer: "Нет. Были замечания по графику работы. Но это выбор нашей компании. Мы стараемся уважать личную жизнь наших клиентов и сотрудников, и поэтому работаем только с 9:00 до 18:00"
    },
    {
      id: 'faq-migration',
      question: "Что необходимо для перехода на новые тарифы телефонии?",
      answer: "Для организаций достаточно прислать заявку на адрес электронной почты со своими реквизитами и информацией о имеющихся абонентах (номера, операторы, затраты, ФИО абонентов)"
    }
  ];

  const toggleItem = useCallback((itemId: string) => {
    setOpenItemId(prevId => prevId === itemId ? null : itemId);
  }, []);

  const isItemOpen = useCallback((itemId: string) => {
    return openItemId === itemId;
  }, [openItemId]);

  return (
    <section className="faq-section">
      <div className="faq-container">
        <div className="faq-header">
          <h2 className="faq-title">Часто задаваемые вопросы</h2>
          <p className="faq-subtitle">
            Ответы на самые популярные вопросы о наших услугах
          </p>
        </div>

        <div className="faq-grid">
          {faqData.map((item) => {
            const isOpen = isItemOpen(item.id);
            return (
              <article 
                key={item.id} 
                className={`faq-item ${isOpen ? 'faq-item--open' : 'faq-item--closed'}`}
                data-faq-id={item.id}
              >
                <button 
                  className="faq-question"
                  onClick={() => toggleItem(item.id)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${item.id}`}
                  type="button"
                >
                  <span className="faq-question-text">{item.question}</span>
                  <span className="faq-question-icon" aria-hidden="true">
                    {isOpen ? (
                      <ChevronUp size={20} />
                    ) : (
                      <ChevronDown size={20} />
                    )}
                  </span>
                </button>
                
                <div 
                  className="faq-answer"
                  id={`faq-answer-${item.id}`}
                  role="region"
                  aria-labelledby={`faq-question-${item.id}`}
                >
                  <div className="faq-answer-content">
                    <p>{item.answer}</p>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        <div className="faq-cta">
          <div className="faq-cta-content">
            <h3 className="faq-cta-title">Не нашли ответ на свой вопрос?</h3>
            <p className="faq-cta-text">
              Задайте его нашим специалистам, и мы с радостью поможем вам
            </p>
            <ContactModal
              trigger={
                <button className="faq-ask-question-btn" type="button">
                  Задать свой вопрос
                </button>
              }
              withMessage={true}
            />
          </div>
        </div>
      </div>
    </section>
  );
};