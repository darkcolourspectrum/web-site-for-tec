import React from 'react';
import { ContactModal } from "../components/ui/ContactModal";
import { 
  Headphones,
  HardDrive,
  Camera,
  Network,
  Phone,
  Shield,
  Target,
  Lightbulb,
  BarChart3,
  CheckCircle
} from "lucide-react";
import '../styles/hardware.css';

export const HardwarePage: React.FC = () => {
  const services = [
    {
      icon: Headphones,
      title: "Консалтинговые услуги",
      description: "Профессиональная консультация по выбору оптимального аппаратного обеспечения",
      price: "от 10 000 ₽"
    },
    {
      icon: HardDrive,
      title: "Выбор / закупка / монтаж / настройка аппаратного обеспечения",
      description: "Полный цикл работ от подбора до запуска оборудования в эксплуатацию",
      price: "от 30 000 ₽"
    },
    {
      icon: Camera,
      title: "Организация систем видеонаблюдения",
      description: "Проектирование, установка и настройка систем видеонаблюдения любой сложности",
      price: "от 45 000 ₽"
    },
    {
      icon: Network,
      title: "Построение и проектирование локальных вычислительных сетей",
      description: "Создание надежной сетевой инфраструктуры для вашего бизнеса",
      price: "от 40 000 ₽"
    },
    {
      icon: Phone,
      title: "Работа с АТС. Настройка, эксплуатация",
      description: "Установка, настройка и техническое обслуживание телефонных станций",
      price: "от 25 000 ₽"
    },
    {
      icon: Shield,
      title: "Монтаж систем контроля и учета доступа",
      description: "Современные системы безопасности и контроля доступа в помещения",
      price: "от 35 000 ₽"
    }
  ];

  const approaches = [
    {
      icon: Target,
      title: "Бесплатные консалтинговые услуги",
      description: "Предоставляем экспертную помощь при выборе аппаратного обеспечения без дополнительной платы"
    },
    {
      icon: Lightbulb,
      title: "Индивидуальные пакеты решений",
      description: "Формируем персональные комплекты оборудования в зависимости от функций сотрудника"
    },
    {
      icon: BarChart3,
      title: "Работа с ведущими поставщиками",
      description: "Прямое сотрудничество с крупнейшими дистрибьюторами и производителями оборудования"
    },
    {
      icon: CheckCircle,
      title: "Полный цикл внедрения",
      description: "От консультации и проектирования до установки, настройки и последующего обслуживания"
    }
  ];

  return (
    <div className="hardware-page">
      {/* Hero + Services Section */}
      <section className="hardware-hero-services">
        <div className="container">
          <div className="hardware-title-section">
            <h1 className="hardware-title">
              Аппаратное обеспечение
            </h1>
            <p className="hardware-subtitle">
              Подберем и произведем монтаж АО для оптимизации вашего бизнеса
            </p>
          </div>

          <div className="services-grid">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <div 
                  key={index}
                  className="service-card"
                >
                  <div className="service-card-content">
                    <div className="service-icon-wrapper">
                      <div className="service-icon-container">
                        <IconComponent />
                      </div>
                    </div>
                    
                    <div className="service-content">
                      <h3 className="service-title">
                        {service.title}
                      </h3>
                      <p className="service-description">
                        {service.description}
                      </p>
                      
                      <div className="service-footer">
                        <div className="service-price">
                          <span className="price-label">Стоимость:</span>
                          <span className="price-value">
                            {service.price}
                          </span>
                        </div>
                        <button className="service-learn-more">
                          Узнать больше
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="services-cta">
            <ContactModal
              trigger={
                <button className="gradient-button">
                  Получить индивидуальное предложение
                </button>
              }
            />
          </div>
        </div>
      </section>

      {/* Individual Approach Section */}
      <section className="individual-approach">
        <div className="container">
          <div className="approach-content">
            <div className="approach-text">
              <h2 className="approach-title">
                Профессиональный подход
              </h2>
              <p className="approach-description">
                Компания предоставляет бесплатные консалтинговые услуги при выборе аппаратного обеспечения 
                и предлагает пакеты программ в зависимости от функции сотрудника.
              </p>
            </div>

            <div className="approach-features">
              {approaches.map((approach, index) => {
                const IconComponent = approach.icon;
                return (
                  <div key={index} className="approach-feature">
                    <div className="feature-icon">
                      <IconComponent />
                    </div>
                    <div className="feature-content">
                      <h3 className="feature-title">
                        {approach.title}
                      </h3>
                      <p className="feature-description">
                        {approach.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="approach-cta">
            <ContactModal
              trigger={
                <button className="gradient-button">
                  Заказать консультацию
                </button>
              }
            />
            <a href="tel:+73822977997" className="action-button outline">
              Позвонить: +7 (3822) 97-79-97
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};