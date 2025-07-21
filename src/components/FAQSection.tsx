import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { ContactModal } from './ui/ContactModal';

interface FAQItem {
  question: string;
  answer: string;
}

export const FAQSection: React.FC = () => {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const faqData: FAQItem[] = [
    {
      question: "Работаете ли вы с частными лицами?",
      answer: "К сожалению, мы работаем только с юридическими лицами"
    },
    {
      question: "Занимаетесь ли вы спутниковой связью?",
      answer: "Да, мы готовы предложить любые отраслевые решения, вплоть до организации магистральных каналов."
    },
    {
      question: "Какие формы оплаты принимаете?",
      answer: "Мы принимаем к оплате только безналичный расчёт"
    },
    {
      question: "Как долго вы работаете?",
      answer: "Организация работает на рынке информационных технологий более 5 лет."
    },
    {
      question: "Как долго действуют тарифы, которые вы предлагаете?",
      answer: "У тарифных планов нет сроков действия. Согласно законодательству сотовый оператор не может менять условия тарифного плана, на который вы уже подключились ранее."
    },
    {
      question: "Бывало ли, что клиенты жаловались на качество ваших работ?",
      answer: "Нет. Были замечания по графику работы. Но это выбор нашей компании. Мы стараемся уважать личную жизнь наших клиентов и сотрудников, и поэтому работаем только с 9:00 до 18:00"
    },
    {
      question: "Что необходимо для перехода на новые тарифы телефонии?",
      answer: "Для организаций достаточно прислать заявку на адрес электронной почты со своими реквизитами и информацией о имеющихся абонентах (номера, операторы, затраты, ФИО абонентов)"
    }
  ];

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  return (
    <section className="questions-section-unique">
      <div className="questions-wrapper-unique">
        <div className="questions-heading-unique">
          <h2 className="questions-main-title-unique">Часто задаваемые вопросы</h2>
          <p className="questions-subtitle-unique">
            Ответы на самые популярные вопросы о наших услугах
          </p>
        </div>

        <div className="questions-list-unique">
          {faqData.map((item, index) => (
            <div key={index} className={`question-card-unique ${openItems.includes(index) ? 'question-expanded-unique' : ''}`}>
              <button 
                className="question-toggle-unique"
                onClick={() => toggleItem(index)}
                aria-expanded={openItems.includes(index)}
              >
                <span className="question-title-unique">{item.question}</span>
                <span className="question-chevron-unique">
                  {openItems.includes(index) ? (
                    <ChevronUp size={20} />
                  ) : (
                    <ChevronDown size={20} />
                  )}
                </span>
              </button>
              
              <div className="question-content-unique">
                <div className="question-text-unique">
                  <p>{item.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="questions-contact-unique">
          <div className="questions-contact-inner-unique">
            <h3 className="questions-contact-title-unique">Не нашли ответ на свой вопрос?</h3>
            <p className="questions-contact-text-unique">
              Задайте его нашим специалистам, и мы с радостью поможем вам
            </p>
            <ContactModal
              trigger={
                <button className="questions-ask-button-unique">
                  Задать свой вопрос
                </button>
              }
              withMessage={true}
            />
          </div>
        </div>
      </div>

      <style>{`
        .questions-section-unique {
          padding: 5rem 0;
          background: linear-gradient(135deg, #f8fafc 0%, #ffffff 50%, #f1f5f9 100%);
          isolation: isolate;
          position: relative;
        }

        .questions-wrapper-unique {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 1rem;
          position: relative;
          z-index: 1;
        }

        .questions-heading-unique {
          text-align: center;
          margin-bottom: 4rem;
        }

        .questions-main-title-unique {
          font-size: 2.5rem;
          font-weight: 700;
          color: #1e293b;
          margin-bottom: 1rem;
          background: linear-gradient(135deg, #1e293b 0%, #475569 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .questions-subtitle-unique {
          font-size: 1.125rem;
          color: #64748b;
          max-width: 48rem;
          margin: 0 auto;
          line-height: 1.6;
        }

        .questions-list-unique {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1rem;
          margin-bottom: 4rem;
        }

        @media (min-width: 768px) {
          .questions-list-unique {
            grid-template-columns: 1fr 1fr;
            gap: 2rem;
          }
        }

        .question-card-unique {
          background: rgba(255, 255, 255, 0.9);
          backdrop-filter: blur(10px);
          border-radius: 16px;
          border: 1px solid rgba(255, 255, 255, 0.3);
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
          transition: all 0.3s ease;
          overflow: hidden;
          position: relative;
        }

        .question-card-unique:hover {
          box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
          transform: translateY(-2px);
        }

        .question-toggle-unique {
          width: 100%;
          background: none;
          border: none;
          padding: 1.5rem;
          text-align: left;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 1rem;
          transition: all 0.3s ease;
        }

        .question-toggle-unique:hover {
          background: rgba(0, 123, 255, 0.05);
        }

        .question-title-unique {
          font-size: 1.125rem;
          font-weight: 600;
          color: #1e293b;
          line-height: 1.4;
        }

        .question-chevron-unique {
          color: #007bff;
          transition: transform 0.3s ease;
          flex-shrink: 0;
        }

        .question-expanded-unique .question-chevron-unique {
          transform: rotate(180deg);
        }

        .question-content-unique {
          max-height: 0;
          overflow: hidden;
          transition: max-height 0.3s ease;
        }

        .question-expanded-unique .question-content-unique {
          max-height: 300px;
        }

        .question-text-unique {
          padding: 0 1.5rem 1.5rem;
          color: #64748b;
          line-height: 1.6;
          font-size: 1rem;
        }

        .question-text-unique p {
          margin: 0;
        }

        .questions-contact-unique {
          text-align: center;
          background: linear-gradient(135deg, rgba(0, 123, 255, 0.1) 0%, rgba(0, 86, 179, 0.05) 100%);
          border-radius: 20px;
          padding: 3rem 2rem;
          border: 1px solid rgba(0, 123, 255, 0.1);
          position: relative;
          isolation: isolate;
        }

        .questions-contact-inner-unique {
          max-width: 600px;
          margin: 0 auto;
          position: relative;
          z-index: 1;
        }

        .questions-contact-title-unique {
          font-size: 1.5rem;
          font-weight: 700;
          color: #1e293b;
          margin-bottom: 0.75rem;
        }

        .questions-contact-text-unique {
          color: #64748b;
          font-size: 1rem;
          line-height: 1.6;
          margin-bottom: 2rem;
        }

        .questions-ask-button-unique {
          background: linear-gradient(135deg, #007bff 0%, #0056b3 100%);
          color: white;
          border: none;
          padding: 0.875rem 2rem;
          border-radius: 12px;
          font-weight: 600;
          font-size: 1rem;
          cursor: pointer;
          transition: all 0.3s ease;
          box-shadow: 0 4px 15px rgba(0, 123, 255, 0.3);
        }

        .questions-ask-button-unique:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(0, 123, 255, 0.4);
        }

        @media (max-width: 768px) {
          .questions-main-title-unique {
            font-size: 2rem;
          }

          .questions-list-unique {
            grid-template-columns: 1fr;
          }

          .question-toggle-unique {
            padding: 1.25rem;
          }

          .question-title-unique {
            font-size: 1rem;
          }

          .question-text-unique {
            padding: 0 1.25rem 1.25rem;
          }

          .questions-contact-unique {
            padding: 2rem 1.5rem;
          }

          .questions-contact-title-unique {
            font-size: 1.25rem;
          }
        }
      `}</style>
    </section>
  );
};