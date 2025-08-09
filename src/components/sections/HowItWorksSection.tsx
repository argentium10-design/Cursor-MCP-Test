'use client';

import { useState, useEffect, useRef } from 'react';

const HowItWorksSection = () => {
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

    const currentRef = sectionRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  const steps = [
    {
      number: '01',
      title: '러닝크루 신청',
      description: '웹사이트에서 간단한 폼을 작성하여 러닝크루 참여를 신청합니다. 경험 수준과 목표를 공유해주세요.',
      delay: 0
    },
    {
      number: '02',
      title: '멤버 매칭',
      description: '유사한 목표와 페이스를 가진 크루원들과 매칭됩니다. 48시간 내에 확인 메일을 받게 됩니다.',
      delay: 200
    },
    {
      number: '03',
      title: '스터디 진행',
      description: '정기적인 오프라인 모임과 온라인 소통을 통해 함께 성장하는 러닝 여정을 시작합니다.',
      delay: 400
    }
  ];

  return (
    <section id="how-it-works" ref={sectionRef} className="py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            어떻게 <span className="text-gradient">진행</span>되나요?
          </h2>
          <div className="w-20 h-1 bg-secondary mx-auto mb-6"></div>
          <p className="text-lg text-neutral-800 max-w-3xl mx-auto">
            러닝크루 참여는 간단합니다. 신청부터 활동까지 단 3단계면 충분합니다.
          </p>
        </div>

        <div className="relative max-w-5xl mx-auto">
          {/* 연결선 */}
          <div className="absolute hidden md:block top-24 left-0 right-0 h-1 bg-gradient-to-r from-primary via-accent to-secondary"></div>

          {/* 단계별 과정 */}
          <div className="flex flex-col md:flex-row md:justify-between items-start gap-8">
            {steps.map((step, index) => (
              <div 
                key={index} 
                className={`md:w-1/3 transition-all duration-1000 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${step.delay}ms` }}
              >
                <div className="relative mb-6">
                  <div className="bg-white w-16 h-16 rounded-full border-4 border-primary flex items-center justify-center relative z-10 mx-auto shadow-lg">
                    <span className="text-xl font-bold text-primary">{step.number}</span>
                  </div>
                </div>
                <div className="text-center">
                  <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                  <p className="text-neutral-800">{step.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* 추가 안내 */}
          <div 
            className={`mt-16 text-center p-6 bg-white rounded-xl shadow-md border border-neutral-200 transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
            style={{ transitionDelay: '600ms' }}
          >
            <p className="text-neutral-800 font-medium">
              러닝크루는 매주 화요일 저녁과 토요일 아침에 정기 모임을 진행하며, 참가자들의 일정에 따라 유연하게 조정됩니다.
              <br className="hidden md:block" />
              첫 모임 참석 전 안내 이메일을 통해 자세한 내용을 확인하세요!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
