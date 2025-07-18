import React from 'react';
import { Button } from "../components/ui/button";
import { ContactModal } from "../components/ui/ContactModal";
import { Phone, Users, TrendingDown, Clock, Search, BarChart3, Settings, CheckCircle } from "lucide-react";
import '../styles/telephony.css';

export const TelephonyPage: React.FC = () => {
  const benefits = [
    {
      icon: Users,
      title: "Доступ к специальным тарифам",
      description: "Подключение к корпоративным тарифам с особыми условиями"
    },
    {
      icon: Phone,
      title: "Не нужно менять номер",
      description: "Сохраните привычные номера при смене оператора"
    },
    {
      icon: TrendingDown,
      title: "Среднее снижение затрат 30%",
      description: "Доказанная экономия на телефонных услугах"
    },
    {
      icon: Clock,
      title: "Смена оператора за 8 дней",
      description: "Быстрое подключение к новому тарифу"
    }
  ];

  const steps = [
    {
      icon: Search,
      title: "Анализ текущих затрат",
      description: "Позвоните нам по номеру +7 (3822) 97-79-97 или оставьте заявку",
      colorClass: "blue"
    },
    {
      icon: BarChart3,
      title: "Подбор оптимального тарифа",
      description: "Мы проанализируем ваши затраты и подберем оптимальный тариф",
      colorClass: "green"
    },
    {
      icon: Settings,
      title: "Оформление документов",
      description: "Оформим пакет документов для перехода на новый тариф",
      colorClass: "yellow"
    },
    {
      icon: Clock,
      title: "Перевод на новый тариф",
      description: "Перевод на новый тариф в течение 8 дней",
      colorClass: "blue"
    },
    {
      icon: CheckCircle,
      title: "Экономия до 30%",
      description: "Вы экономите до 30% благодаря подключению к новому тарифу",
      colorClass: "green"
    }
  ];

  return (
    <div className="telephony-page">
      <section className="telephony-hero">
        <div className="container">
          <div className="telephony-title-section">
            <h1 className="telephony-title">
              Телефония
            </h1>
          </div>

          <div className="telephony-content">
            <div className="telephony-left">
              <div className="telephony-text-section">
                <h2 className="telephony-main-title">
                  Хотите сократить до 30% затрат на сотовую связь?
                </h2>
                <p className="telephony-main-subtitle">
                  Подключим вашу организацию к специальным корпоративным тарифам БЕСПЛАТНО!
                </p>
              </div>

              <div className="telephony-benefits">
                {benefits.map((benefit, index) => {
                  const IconComponent = benefit.icon;
                  return (
                    <div key={index} className="benefit-card">
                      <div className="benefit-header">
                        <div className="benefit-icon">
                          <IconComponent />
                        </div>
                        <h3 className="benefit-title">
                          {benefit.title}
                        </h3>
                      </div>
                      <p className="benefit-description">
                        {benefit.description}
                      </p>
                    </div>
                  );
                })}
              </div>

              <ContactModal
                trigger={
                  <button className="gradient-button">
                    Получить доступ к специальным тарифам
                  </button>
                }
              />
            </div>

            <div className="telephony-stats-card">
              <div className="stats-content">
                <div className="stats-number">
                  30%
                </div>
                <div>
                  <h3 className="stats-title">
                    Среднее снижение затрат
                  </h3>
                  <p className="stats-description">
                    Благодаря подключению к корпоративным тарифам
                  </p>
                </div>
                <div>
                  <ContactModal
                    trigger={
                      <button className="stats-button">
                        Рассчитать экономию
                      </button>
                    }
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="telephony-process">
        <div className="container">
          <div className="process-header">
            <h2 className="process-title">
              Как мы сократим затраты
            </h2>
            <p className="process-subtitle">
              Поэтапная методология оптимизации, которая гарантирует результат уже в первый месяц работы
            </p>
          </div>

          <div className="process-steps">
            <div className="process-line"></div>
            
            <div className="steps-grid">
              {steps.map((step, index) => {
                const IconComponent = step.icon;
                return (
                  <div key={index} className="step-card">
                    <div className="step-number">
                      {index + 1}
                    </div>
                    
                    <div className={`step-icon-container ${step.colorClass}`}>
                      <IconComponent />
                    </div>
                    
                    <h3 className="step-title">
                      {step.title}
                    </h3>
                    <p className="step-description">
                      {step.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="process-actions">
            <div className="actions-container">
              <ContactModal
                trigger={
                  <button className="gradient-button">
                    Оставить заявку
                  </button>
                }
              />
              <a href="tel:+73822977997" className="action-button outline">
                Позвонить: +7 (3822) 97-79-97
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};