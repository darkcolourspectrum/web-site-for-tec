import React, { useEffect, useRef } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const HeroSection: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mousePosition = useRef({ x: 0, y: 0 });
  const animationFrameId = useRef<number | null>(null);
  const navigate = useNavigate();
  
  const particles = useRef<Array<{
    x: number;
    y: number;
    vx: number;
    vy: number;
    radius: number;
    opacity: number;
  }>>([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const isMobile = window.innerWidth <= 768;
    if (isMobile) {
      canvas.style.display = 'none';
      return;
    }

    const setCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      canvas.style.display = window.innerWidth <= 768 ? 'none' : 'block';
    };
    setCanvasSize();
    window.addEventListener('resize', setCanvasSize);

    const particleCount = 150;
    for (let i = 0; i < particleCount; i++) {
      particles.current.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        radius: Math.random() * 2 + 1,
        opacity: Math.random() * 0.5 + 0.2
      });
    }

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mousePosition.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top
      };
    };
    window.addEventListener('mousemove', handleMouseMove);

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      particles.current.forEach((particle, index) => {
        particle.x += particle.vx;
        particle.y += particle.vy;
        
        if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1;
        if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1;
        
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(0, 123, 255, ${particle.opacity})`;
        ctx.fill();
        
        particles.current.forEach((otherParticle, otherIndex) => {
          if (index !== otherIndex) {
            const dx = particle.x - otherParticle.x;
            const dy = particle.y - otherParticle.y;
            const distance = Math.sqrt(dx * dx + dy * dy);
            
            if (distance < 100) {
              ctx.beginPath();
              ctx.moveTo(particle.x, particle.y);
              ctx.lineTo(otherParticle.x, otherParticle.y);
              ctx.strokeStyle = `rgba(0, 123, 255, ${0.1 * (1 - distance / 100)})`;
              ctx.stroke();
            }
          }
        });
        
        const dx = mousePosition.current.x - particle.x;
        const dy = mousePosition.current.y - particle.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        if (distance < 150) {
          const force = (150 - distance) / 150;
          particle.vx += (dx / distance) * force * 0.03;
          particle.vy += (dy / distance) * force * 0.03;
        }
      });
      
      animationFrameId.current = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      window.removeEventListener('resize', setCanvasSize);
      window.removeEventListener('mousemove', handleMouseMove);
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }
    };
  }, []);

  const handleLearnMoreClick = () => {
    navigate('/about');
    window.scrollTo(0, 0);
  };

  return (
    <section className="hero-section">
      <canvas ref={canvasRef} className="hero-canvas" />
      
      <div className="hero-content">
        <Container>
          <Row className="align-items-center min-vh-100">
            <Col lg={12}>
              <div className="hero-text-wrapper">
                <h1 className="hero-title">
                  <span className="hero-gradient">Оптимизируем</span> и{' '}
                  <span className="hero-gradient">сократим</span> ваши затраты
                </h1>
                
                <p className="hero-description">
                  Компания Инновационных Бизнес Технологий - ваш надежный партнер 
                  в области IT-решений и оптимизации бизнес-процессов
                </p>
                
                <div className="hero-features">
                  <div className="feature-card">
                    <div className="feature-icon">💸</div>
                    <h3>Сократим затраты<br/>на сотовую связь</h3>
                    <p>До 30% экономии</p>
                  </div>
                  
                  <div className="feature-card">
                    <div className="feature-icon">🌐</div>
                    <h3>Подберем и оптимизируем<br/>программное обеспечение</h3>
                    <p>Эффективные решения</p>
                  </div>
                  
                  <div className="feature-card">
                    <div className="feature-icon">🖥️</div>
                    <h3>Подберем и установим<br/>аппаратное обеспечение</h3>
                    <p>Полный цикл услуг</p>
                  </div>
                </div>
                
                <div className="hero-actions">
                  <button className="hero-primary-btn-unique">
                    Получить консультацию
                  </button>
                  <Button 
                    variant="outline-light" 
                    className="secondary-btn"
                    onClick={handleLearnMoreClick}
                  >
                    Узнать больше
                  </Button>
                </div>
                
                <div className="hero-stats">
                  <div className="stat-item">
                    <div className="stat-number" data-value="15">15+</div>
                    <div className="stat-label">Лет опыта</div>
                  </div>
                  <div className="stat-item">
                    <div className="stat-number" data-value="500">500+</div>
                    <div className="stat-label">Довольных клиентов</div>
                  </div>
                  <div className="stat-item">
                    <div className="stat-number" data-value="30">30%</div>
                    <div className="stat-label">Средняя экономия</div>
                  </div>
                </div>

                <div className="scroll-indicator">
                  <div className="scroll-mouse">
                    <div className="scroll-wheel"></div>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </section>
  );
};

export default HeroSection;