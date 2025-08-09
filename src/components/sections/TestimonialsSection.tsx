'use client';

import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';

interface Testimonial {
  name: string;
  role: string;
  quote: string;
  rating: number;
  imageUrl?: string;
}

const TestimonialsSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const testimonialsRef = useRef<HTMLDivElement>(null);

  const testimonials: Testimonial[] = [
    {
      name: "김지원",
      role: "28세, 직장인",
      quote: "혼자 달리기에 지쳐있었는데, 러닝크루는 완전히 새로운 경험이었어요! 매주 함께 달리면서 제 기록도 놀랍게 향상되었고, 친구들도 많이 사귀었습니다. 생각보다 훨씬 재미있고 동기부여가 되는 커뮤니티예요!",
      rating: 5
    },
    {
      name: "박준호",
      role: "34세, 디자이너",
      quote: "처음에는 5km도 힘들었지만, 이제는 하프 마라톤도 완주했어요. 러닝크루의 체계적인 접근법과 함께 달리는 동료들의 응원이 저를 계속 성장시켜줬습니다. 단순한 운동을 넘어 삶의 활력소가 되었어요.",
      rating: 5
    },
    {
      name: "이서연",
      role: "25세, 대학원생",
      quote: "바쁜 학업 중에도 꾸준히 달릴 수 있었던 건 러닝크루 덕분이에요. 정해진 시간에 만나서 달리는 약속이 있으니까 미루지 않게 되더라고요. 건강해진 것은 물론이고 스트레스 해소에도 정말 좋아요!",
      rating: 4
    }
  ];

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

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [testimonials.length]);

  const handleDotClick = (index: number) => {
    setActiveIndex(index);
  };

  const handleKeyDown = (e: React.KeyboardEvent, index: number) => {
    if (e.key === 'Enter' || e.key === ' ') {
      handleDotClick(index);
    }
  };

  return (
    <section id="testimonials" ref={sectionRef} className="py-20 bg-neutral-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-gradient">실제</span> <span className="text-gradient">러닝크루 후기</span>
          </h2>
          <div className="w-20 h-1 bg-accent mx-auto mb-6"></div>
          <p className="text-lg text-neutral-700 max-w-3xl mx-auto">
            러닝크루와 함께한 사람들의 생생한 경험담을 들어보세요.
          </p>
        </div>

        {/* 테스티모니얼 슬라이더 */}
        <div 
          className={`relative max-w-4xl mx-auto transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="overflow-hidden" ref={testimonialsRef}>
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div 
                  key={index} 
                  className="w-full flex-shrink-0 px-4"
                >
                  <div className="bg-white rounded-2xl shadow-lg p-8 md:p-10 card-hover">
                    {/* 인용부호 */}
                    <div className="text-primary opacity-20 mb-4">
                      <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                      </svg>
                    </div>
                    
                    {/* 별점 */}
                    <div className="flex mb-6">
                      {[...Array(5)].map((_, i) => (
                        <svg
                          key={i}
                          className={`w-5 h-5 ${i < testimonial.rating ? 'text-accent' : 'text-neutral-300'}`}
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                    
                    {/* 인용구 */}
                    <blockquote className="text-lg md:text-xl mb-8 italic text-neutral-700">
                      &ldquo;{testimonial.quote}&rdquo;
                    </blockquote>
                    
                    {/* 작성자 */}
                    <div className="flex items-center">
                      {testimonial.imageUrl ? (
                        <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                          <Image
                            src={testimonial.imageUrl}
                            alt={testimonial.name}
                            width={48}
                            height={48}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      ) : (
                        <div className="w-12 h-12 rounded-full bg-primary/10 text-primary flex items-center justify-center mr-4">
                          <span className="text-lg font-bold">
                            {testimonial.name.charAt(0)}
                          </span>
                        </div>
                      )}
                      <div>
                        <p className="font-bold">{testimonial.name}</p>
                        <p className="text-neutral-500 text-sm">{testimonial.role}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* 네비게이션 점 */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                aria-label={`후기 ${index + 1}번으로 이동`}
                onClick={() => handleDotClick(index)}
                onKeyDown={(e) => handleKeyDown(e, index)}
                tabIndex={0}
                className={`w-3 h-3 rounded-full transition-all ${
                  activeIndex === index ? 'bg-primary scale-125' : 'bg-neutral-300'
                }`}
              />
            ))}
          </div>
          
          {/* 좌우 화살표 (태블릿 이상에서만 표시) */}
          <button
            onClick={() => setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-5 hidden md:block bg-white rounded-full p-2 shadow-md hover:bg-neutral-100 transition-colors"
            aria-label="이전 후기"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={() => setActiveIndex((prev) => (prev + 1) % testimonials.length)}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-5 hidden md:block bg-white rounded-full p-2 shadow-md hover:bg-neutral-100 transition-colors"
            aria-label="다음 후기"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;