'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      const link = e.currentTarget.getAttribute('href');
      if (link) {
        window.location.href = link;
      }
    }
  };

  return (
    <section className="relative min-h-screen flex items-center py-20 overflow-hidden">
      {/* 배경 그래디언트 */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10" />
      
      {/* 배경 이미지 (오버레이 효과) */}
      <div className="absolute inset-0 opacity-10 bg-[url('/images/pattern.svg')] bg-repeat" />
      
      {/* 메인 콘텐츠 */}
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center lg:space-x-12">
          {/* 텍스트 영역 */}
          <div 
            className={`w-full lg:w-1/2 text-center lg:text-left space-y-6 mb-10 lg:mb-0 transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight animate-fadeInUp">
              러닝은 <span className="hover-text-animation">혼자</span> 하는 게 아니야.
            </h1>
            
            <p className="text-lg md:text-xl text-white max-w-xl mx-auto lg:mx-0 animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
              같이 성장하는 러닝크루, 지금 함께해요.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4 justify-center lg:justify-start animate-fadeInUp" style={{ animationDelay: '0.4s' }}>
              <Link 
                href="#join" 
                className="btn-gradient text-white px-8 py-3 rounded-full shadow-lg font-medium w-full sm:w-auto text-center"
                tabIndex={0}
                onKeyDown={handleKeyDown}
                aria-label="러닝크루 참여하기"
              >
                러닝크루 참여하기
              </Link>
              <Link 
                href="#how-it-works" 
                className="bg-white hover:bg-neutral-100 text-primary border-2 border-primary px-8 py-3 rounded-full transition-colors w-full sm:w-auto text-center font-medium"
                tabIndex={0}
                onKeyDown={handleKeyDown}
                aria-label="이용 방법 알아보기"
              >
                이용 방법
              </Link>
            </div>
            
            {/* 간단한 통계 */}
            <div className="flex justify-center lg:justify-start space-x-8 md:space-x-12 pt-6">
              <div className="text-center">
                <p className="text-3xl font-bold text-primary">500+</p>
                <p className="text-neutral-600">활동 회원</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-primary">12+</p>
                <p className="text-neutral-600">모임 장소</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-primary">4.9</p>
                <p className="text-neutral-600">평균 평점</p>
              </div>
            </div>
          </div>
          
          {/* 이미지 영역 */}
          <div 
            className={`w-full lg:w-1/2 transition-all duration-1000 delay-300 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <div className="relative">
              {/* 러너 일러스트 */}
              <div className="rounded-3xl overflow-hidden shadow-2xl bg-white border-4 border-white aspect-square md:aspect-[4/3] flex items-center justify-center p-6">
                <div className="relative w-full h-full">
                  <div className="relative w-full h-full">
                    <Image 
                      src="/images/running.svg" 
                      alt="러닝 일러스트레이션" 
                      fill 
                      className="w-full h-full object-contain opacity-90" 
                    />
                  </div>
                </div>
              </div>
              
              {/* 장식용 요소들 */}
              <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-accent rounded-full opacity-70 animate-pulse"></div>
              <div className="absolute -top-6 -right-6 w-16 h-16 bg-primary rounded-full opacity-70 animate-pulse" style={{ animationDelay: '1s' }}></div>
              <div className="absolute bottom-12 -right-8 w-20 h-20 bg-secondary rounded-full opacity-50 animate-pulse" style={{ animationDelay: '1.5s' }}></div>
            </div>
          </div>
        </div>
        
        {/* 아래로 스크롤 버튼 */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce hidden md:block">
          <Link
            href="#benefits"
            aria-label="아래로 스크롤하여 혜택 보기"
            tabIndex={0}
            onKeyDown={handleKeyDown}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-primary">
              <path d="M7 10L12 15L17 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;