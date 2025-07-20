import React from 'react';
import { ContactModal } from "../components/ui/ContactModal";
import { 
  Users,
  Award,
  Target,
  Clock,
  CheckCircle,
  Lightbulb,
  BarChart3,
  Handshake
} from "lucide-react";
import partners from "../styles/assets/partners.png"
import '../styles/about.css';

export const AboutPage: React.FC = () => {
  const companyFeatures = [
    {
      icon: Users,
      title: "Высококвалифицированная помощь при выборе программного обеспечения",
      description: "Наши эксперты помогут подобрать оптимальные IT-решения для вашего бизнеса"
    },
    {
      icon: Handshake,
      title: "Работа напрямую с крупнейшими дистрибьюторами и ресселерами ПО",
      description: "Прямые партнерские отношения обеспечивают лучшие цены и условия"
    },
    {
      icon: Award,
      title: "Продажа специализированного ПО",
      description: "Широкий спектр профессиональных программных решений для различных отраслей"
    },
    {
      icon: Target,
      title: "Формирование пакета программ в зависимости от функции сотрудника",
      description: "Индивидуальный подход к комплектации ПО"
    }
  ];

  const workingPrinciples = [
    {
      icon: Clock,
      title: "Уважение к личному времени",
      description: "Мы работаем только с 9:00 до 18:00, уважая личную жизнь наших клиентов и сотрудников"
    },
    {
      icon: CheckCircle,
      title: "Более 5 лет на рынке",
      description: "Организация работает на рынке информационных технологий более 5 лет"
    },
    {
      icon: Lightbulb,
      title: "Работа только с юридическими лицами",
      description: "Специализируемся на корпоративных решениях и B2B сегменте"
    },
    {
      icon: BarChart3,
      title: "Безналичный расчет",
      description: "Принимаем к оплате только безналичный расчет для удобства ведения документооборота"
    }
  ];

  const partnerLogos = [];

  return (
    <div className="about-page">
    {/* Hero Section */}
      <section className="about-hero">
        <div className="container">
          <div className="about-title-section">
            <h1 className="about-title">
              IBTCOM - это
            </h1>
            <p className="about-subtitle">
                Профессиональная команда экспертов, готовая решить любые IT-задачи вашего бизнеса
            </p>
          </div>
          
          <div className="features-grid">
            {companyFeatures.map((feature, index) => {
                const IconComponent = feature.icon;
                return (
                <div key={index} className="feature-card">
                    <div className="feature-icon-container">
                    <IconComponent />
                    </div>
                    <div className="feature-content">
                    <h3 className="feature-title">
                        {feature.title}
                    </h3>
                    <p className="feature-description">
                        {feature.description}
                    </p>
                    </div>
                </div>
                );
            })}
          </div>
        </div>
      </section>


      {/* Working Principles Section */}
      <section className="working-principles">
        <div className="container">
          <div className="principles-header">
            <h2 className="section-title">Наши принципы работы</h2>
            <p className="section-subtitle">
              Мы ценим долгосрочные отношения и строим бизнес на доверии и профессионализме
            </p>
          </div>

          <div className="principles-grid">
            {workingPrinciples.map((principle, index) => {
              const IconComponent = principle.icon;
              return (
                <div key={index} className="principle-card">
                  <div className="principle-icon">
                    <IconComponent />
                  </div>
                  <div className="principle-content">
                    <h3 className="principle-title">
                      {principle.title}
                    </h3>
                    <p className="principle-description">
                      {principle.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="partners-section">
        <div className="container">
          <div className="partners-header">
            <h2 className="section-title">Наши партнеры</h2>
          </div>

          <div className="partners-image-container">
            <img 
              src={partners}
              alt="Наши партнеры"
              className="partners-image"
            />
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="contact-cta">
        <div className="container">
          <div className="cta-content">
            <h2 className="cta-title">Готовы начать сотрудничество?</h2>
            <p className="cta-description">
              Свяжитесь с нами для получения консультации и индивидуального предложения
            </p>
            <div className="cta-buttons">
              <ContactModal
                trigger={
                  <button className="gradient-button">
                    Получить консультацию
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