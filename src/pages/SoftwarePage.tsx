import React from 'react';
import { ContactModal } from "../components/ui/ContactModal"
import { 
  Smartphone, 
  Monitor, 
  Server, 
  Shield, 
  Cloud, 
  Database,
  Wifi,
  Settings,
  Headphones,
  FileText,
  Users,
  Zap,
  HardDrive,
  Globe,
  Lock,
  CheckCircle,
  Target,
  Lightbulb,
  BarChart3
} from "lucide-react";
import '../styles/software.css';

export const SoftwarePage: React.FC = () => {
  const services = [
    {
      icon: Smartphone,
      title: "Оптимизация сотовой связи",
      description: "Анализ тарифов, подбор оптимальных решений, контроль расходов",
      price: "от 15 000 ₽"
    },
    {
      icon: Monitor,
      title: "Подбор и настройка ПО",
      description: "CRM, ERP, учетные системы, специализированное ПО",
      price: "от 25 000 ₽"
    },
    {
      icon: Server,
      title: "Серверные решения",
      description: "Установка, настройка и обслуживание серверного оборудования",
      price: "от 50 000 ₽"
    },
    {
      icon: Shield,
      title: "Информационная безопасность",
      description: "Защита данных, антивирусные решения, мониторинг угроз",
      price: "от 20 000 ₽"
    },
    {
      icon: Cloud,
      title: "Облачные технологии",
      description: "Миграция в облако, гибридные решения, резервное копирование",
      price: "от 30 000 ₽"
    },
    {
      icon: Database,
      title: "Управление базами данных",
      description: "Оптимизация СУБД, резервное копирование, восстановление",
      price: "от 35 000 ₽"
    },
    {
      icon: Wifi,
      title: "Сетевая инфраструктура",
      description: "Проектирование и настройка локальных и беспроводных сетей",
      price: "от 40 000 ₽"
    },
    {
      icon: Settings,
      title: "IT-автоматизация",
      description: "Автоматизация бизнес-процессов, интеграция систем",
      price: "от 45 000 ₽"
    },
    {
      icon: Headphones,
      title: "Техническая поддержка",
      description: "Круглосуточная поддержка пользователей и оборудования",
      price: "от 10 000 ₽"
    },
    {
      icon: FileText,
      title: "IT-консалтинг",
      description: "Стратегическое планирование IT-развития компании",
      price: "от 25 000 ₽"
    },
    {
      icon: Users,
      title: "Обучение персонала",
      description: "Курсы повышения IT-грамотности сотрудников",
      price: "от 15 000 ₽"
    },
    {
      icon: Zap,
      title: "Оптимизация производительности",
      description: "Ускорение работы систем, оптимизация ресурсов",
      price: "от 20 000 ₽"
    },
    {
      icon: HardDrive,
      title: "Модернизация оборудования",
      description: "Подбор и установка современного IT-оборудования",
      price: "от 30 000 ₽"
    },
    {
      icon: Globe,
      title: "Веб-решения",
      description: "Разработка и поддержка корпоративных сайтов",
      price: "от 40 000 ₽"
    },
    {
      icon: Lock,
      title: "Лицензирование ПО",
      description: "Легализация программного обеспечения, управление лицензиями",
      price: "от 15 000 ₽"
    }
  ];

  const approaches = [
    {
      icon: Target,
      title: "Предварительный аудит инфраструктуры",
      description: "Комплексный анализ существующих IT-решений и выявление точек роста"
    },
    {
      icon: Lightbulb,
      title: "Разработка стратегии оптимизации",
      description: "Создание персонального плана развития IT-инфраструктуры"
    },
    {
      icon: BarChart3,
      title: "Поэтапное внедрение решений",
      description: "Постепенная модернизация без остановки рабочих процессов"
    },
    {
      icon: Headphones,
      title: "Постоянная техническая поддержка",
      description: "Круглосуточная поддержка и сопровождение внедренных решений"
    }
  ];

  return (
    <div className="software-page">
      {/* Hero + Services Section */}
      <section className="software-hero-services">
        <div className="container">
          <div className="software-title-section">
            <h1 className="software-title">
              Программное обеспечение
            </h1>
            <p className="software-subtitle">
              Комплексные IT-решения для оптимизации всех аспектов вашего бизнеса
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
                Индивидуальный подход
              </h2>
              <p className="approach-description">
                Каждое решение разрабатывается с учетом специфики вашего бизнеса. 
                Мы не предлагаем шаблонные решения - только персональные стратегии оптимизации.
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