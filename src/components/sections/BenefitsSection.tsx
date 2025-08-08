'use client';

import { useState, useEffect, useRef } from 'react';

const BenefitsSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        root: null,
        threshold: 0.1
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const benefits = [
    {
      icon: (
        <img 
          src="/icons/target.svg" 
          alt="목표 달성" 
          className="w-12 h-12 text-white" 
        />
      ),
      title: '몰입도 상승',
      description: '함께 달리는 동료들과의 건강한 경쟁심은 당신의 운동 몰입도와 지속력을 크게 높여줍니다.',
      color: 'bg-primary'
    },
    {
      icon: (
        <img 
          src="/icons/zap.svg" 
          alt="목표 달성률" 
          className="w-12 h-12 text-white" 
        />
      ),
      title: '목표 달성률 UP',
      description: '개인의 페이스와 목표에 맞춘 체계적인 러닝 계획으로 목표 달성 확률이 3배 이상 높아집니다.',
      color: 'bg-accent'
    },
    {
      icon: (
        <img 
          src="/icons/users.svg" 
          alt="함께하는 즐거움" 
          className="w-12 h-12 text-white" 
        />
      ),
      title: '혼자가 아님',
      description: '비슷한 목표를 가진 동료들과 함께하는 러닝은 외롭지 않고 즐겁게 지속할 수 있는 힘이 됩니다.',
      color: 'bg-secondary'
    },
    {
      icon: (
        <img 
          src="/icons/message.svg" 
          alt="실시간 피드백" 
          className="w-12 h-12 text-white" 
        />
      ),
      title: '실시간 피드백',
      description: '러닝 후 전문가와 동료들의 즉각적인 피드백으로 빠른 성장과 개선이 가능합니다.',
      color: 'bg-primary-dark'
    }
  ];

  return (
    <section id="benefits" ref={sectionRef} className="py-20 bg-neutral-100">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-primary">러닝크루의</span> <span className="text-gradient">특별한 혜택</span>
          </h2>
          <div className="w-20 h-1 bg-accent mx-auto mb-6"></div>
          <p className="text-lg text-neutral-700 max-w-3xl mx-auto">
            혼자서는 지치기 쉬운 러닝도 러닝크루와 함께라면 즐겁고 지속적인 습관이 됩니다.
            함께하는 즐거움과 동기부여를 경험해보세요.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {benefits.map((benefit, index) => (
            <div 
              key={index} 
              className={`rounded-xl p-6 bg-white shadow-lg card-hover transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className={`rounded-full p-4 w-20 h-20 flex items-center justify-center mb-6 ${benefit.color}`}>
                {benefit.icon}
              </div>
              <h3 className="text-xl font-bold mb-3 text-[#0A0A0A]">{benefit.title}</h3>
              <p className="text-neutral-800">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
