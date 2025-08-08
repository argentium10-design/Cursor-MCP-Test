'use client';

import { useState, useRef, useEffect } from 'react';

const JoinSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    level: '',
    message: '',
    agree: false
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    // 입력 시 에러 메시지 지우기
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: checked
    }));

    // 입력 시 에러 메시지 지우기
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = '이름을 입력해주세요';
    if (!formData.email.trim()) newErrors.email = '이메일을 입력해주세요';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = '유효한 이메일 주소를 입력해주세요';
    if (!formData.phone.trim()) newErrors.phone = '전화번호를 입력해주세요';
    if (!formData.level) newErrors.level = '러닝 수준을 선택해주세요';
    if (!formData.agree) newErrors.agree = '개인정보 수집에 동의해주세요';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validateForm()) {
      setIsSubmitting(true);
      
      // 실제 구현에서는 여기에 API 호출 등을 수행
      setTimeout(() => {
        setIsSubmitting(false);
        setIsSubmitted(true);
        // 폼 초기화
        setFormData({
          name: '',
          email: '',
          phone: '',
          level: '',
          message: '',
          agree: false
        });
      }, 1500);
    }
  };

  const faqs = [
    {
      question: "러닝크루에 가입하려면 어떤 준비물이 필요한가요?",
      answer: "편안한 러닝화와 운동복만 준비하시면 됩니다. 초보자도 부담 없이 참여할 수 있습니다."
    },
    {
      question: "러닝 경험이 없어도 참여할 수 있나요?",
      answer: "네, 물론입니다. 초보자를 위한 별도의 프로그램이 있으며, 기초부터 차근차근 배울 수 있습니다."
    },
    {
      question: "회비는 어떻게 되나요?",
      answer: "월 30,000원의 회비가 있으며, 이는 전문 코치 비용, 장소 대여, 이벤트 개최 등에 사용됩니다."
    },
    {
      question: "정기 모임 외에 다른 활동도 있나요?",
      answer: "정기 러닝 외에도 마라톤 대회 참가, 워크샵, 친목 식사, 온라인 커뮤니티 활동 등 다양한 활동을 진행합니다."
    }
  ];

  return (
    <section id="join" ref={sectionRef} className="py-20 gradient-bg">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            크루 대기열에 등록하기
          </h2>
          <div className="w-20 h-1 bg-white mx-auto mb-6 opacity-60"></div>
          <p className="text-lg text-white/90 max-w-3xl mx-auto">
            러닝크루의 일원이 되어 함께 달리고, 성장하고, 즐거운 추억을 쌓아보세요.
            지금 등록하시면 첫 모임 무료 참여 기회를 드립니다!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* 왼쪽: 폼 */}
          <div 
            className={`bg-white rounded-xl shadow-lg p-8 transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            {!isSubmitted ? (
              <>
                <h3 className="text-2xl font-bold mb-6">러닝크루 참여하기</h3>
                <form onSubmit={handleSubmit}>
            <div className="space-y-4">
          <div>
                      <label htmlFor="name" className="block text-sm font-medium text-neutral-700 mb-1">
                        이름 <span className="text-primary">*</span>
                </label>
                <input 
                  type="text" 
                  id="name" 
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 rounded-lg border ${
                          errors.name ? 'border-red-500' : 'border-neutral-300'
                        } focus:outline-none focus:ring-2 focus:ring-primary/50`}
                        placeholder="홍길동"
                      />
                      {errors.name && (
                        <p className="mt-1 text-sm text-red-500">{errors.name}</p>
                      )}
              </div>
              
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-neutral-700 mb-1">
                        이메일 <span className="text-primary">*</span>
                </label>
                <input 
                  type="email" 
                  id="email" 
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 rounded-lg border ${
                          errors.email ? 'border-red-500' : 'border-neutral-300'
                        } focus:outline-none focus:ring-2 focus:ring-primary/50`}
                        placeholder="example@email.com"
                      />
                      {errors.email && (
                        <p className="mt-1 text-sm text-red-500">{errors.email}</p>
                      )}
                    </div>
                    
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-neutral-700 mb-1">
                        전화번호 <span className="text-primary">*</span>
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 rounded-lg border ${
                          errors.phone ? 'border-red-500' : 'border-neutral-300'
                        } focus:outline-none focus:ring-2 focus:ring-primary/50`}
                        placeholder="010-0000-0000"
                      />
                      {errors.phone && (
                        <p className="mt-1 text-sm text-red-500">{errors.phone}</p>
                      )}
                    </div>
                    
                    <div>
                      <label htmlFor="level" className="block text-sm font-medium text-neutral-700 mb-1">
                        러닝 수준 <span className="text-primary">*</span>
                      </label>
                      <select
                        id="level"
                        name="level"
                        value={formData.level}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 rounded-lg border ${
                          errors.level ? 'border-red-500' : 'border-neutral-300'
                        } focus:outline-none focus:ring-2 focus:ring-primary/50`}
                      >
                        <option value="">선택해주세요</option>
                        <option value="beginner">초보자 (5km 이하)</option>
                        <option value="intermediate">중급자 (5km~10km)</option>
                        <option value="advanced">고급자 (10km 이상)</option>
                      </select>
                      {errors.level && (
                        <p className="mt-1 text-sm text-red-500">{errors.level}</p>
                      )}
              </div>
              
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-neutral-700 mb-1">
                        하고 싶은 말 (선택사항)
                </label>
                <textarea 
                  id="message" 
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                  rows={4}
                        className="w-full px-4 py-3 rounded-lg border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-primary/50"
                        placeholder="궁금한 점이나 전달하고 싶은 내용이 있다면 작성해주세요."
                      />
                    </div>
                    
                    <div className="flex items-start">
                      <div className="flex items-center h-5">
                        <input
                          id="agree"
                          name="agree"
                          type="checkbox"
                          checked={formData.agree}
                          onChange={handleCheckboxChange}
                          className="w-4 h-4 text-primary border-neutral-300 rounded focus:ring-primary"
                        />
                      </div>
                      <div className="ml-3 text-sm">
                        <label htmlFor="agree" className={`font-medium ${errors.agree ? 'text-red-500' : 'text-neutral-700'}`}>
                          개인정보 수집 및 이용에 동의합니다. <span className="text-primary">*</span>
                        </label>
                        {errors.agree && (
                          <p className="mt-1 text-sm text-red-500">{errors.agree}</p>
                        )}
                      </div>
              </div>
              
                    <div className="pt-2">
              <button 
                type="submit" 
                        disabled={isSubmitting}
                        className="w-full py-3 px-4 btn-gradient text-white rounded-lg font-medium flex items-center justify-center"
                      >
                        {isSubmitting ? (
                          <>
                            <svg className="animate-spin -ml-1 mr-2 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                            제출 중...
                          </>
                        ) : (
                          '크루 참여하기'
                        )}
              </button>
                    </div>
                  </div>
            </form>
              </>
            ) : (
              <div className="text-center py-8">
                <div className="mb-6 text-success">
                  <svg className="w-16 h-16 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-2">신청이 완료되었습니다!</h3>
                <p className="text-neutral-700 mb-6">
                  입력하신 이메일로 상세 안내가 발송될 예정입니다.
                  빠른 시일 내에 담당자가 연락드리겠습니다.
                </p>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="px-6 py-2 btn-gradient text-white rounded-lg font-medium"
                >
                  새로 작성하기
                </button>
              </div>
            )}
          </div>
          
          {/* 오른쪽: FAQ */}
          <div 
            className={`transition-all duration-1000 delay-300 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <h3 className="text-2xl font-bold mb-6">자주 묻는 질문</h3>
            
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-white rounded-lg shadow-md p-6 card-hover">
                  <h4 className="text-lg font-semibold mb-2">{faq.question}</h4>
                  <p className="text-neutral-800">{faq.answer}</p>
                </div>
              ))}
            </div>
            
            <div className="mt-8 bg-primary/10 rounded-lg p-6">
              <h4 className="font-bold text-lg mb-2 text-primary">추가 문의사항이 있으신가요?</h4>
              <p className="mb-4">언제든지 문의주시면 빠르게 답변해드리겠습니다.</p>
              <div className="space-y-2">
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-primary mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span>info@runningcrew.com</span>
                </div>
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-primary mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span>02-123-4567</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JoinSection;