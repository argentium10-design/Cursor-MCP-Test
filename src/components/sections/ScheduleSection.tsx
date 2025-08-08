'use client';

import { useState, useRef, useEffect } from 'react';

interface ScheduleEvent {
  day: string;
  date: string;
  time: string;
  title: string;
  location: string;
  description: string;
  level: 'beginner' | 'intermediate' | 'advanced' | 'all';
  distance?: string;
}

const ScheduleSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [activeFilter, setActiveFilter] = useState<string>('all');
  
  const scheduleEvents: ScheduleEvent[] = [
    {
      day: '화요일',
      date: '2023.06.04',
      time: '19:00',
      title: '평일 저녁 러닝',
      location: '올림픽 공원',
      description: '퇴근 후 스트레스를 날려버리는 평일 저녁 러닝입니다. 초보자도 환영합니다!',
      level: 'all',
      distance: '5km'
    },
    {
      day: '목요일',
      date: '2023.06.06',
      time: '19:30',
      title: '인터벌 트레이닝',
      location: '한강 공원 여의도',
      description: '단거리 스피드와 지구력 향상을 위한 인터벌 트레이닝입니다.',
      level: 'intermediate',
      distance: '400m x 10회'
    },
    {
      day: '토요일',
      date: '2023.06.08',
      time: '07:00',
      title: '주말 장거리 러닝',
      location: '한강 공원 잠실',
      description: '여유로운 페이스로 함께하는 장거리 러닝입니다. 마라톤 준비하시는 분들에게 추천합니다.',
      level: 'advanced',
      distance: '15km'
    },
    {
      day: '일요일',
      date: '2023.06.09',
      time: '08:00',
      title: '초보자 러닝 클래스',
      location: '서울숲 공원',
      description: '러닝을 처음 시작하시는 분들을 위한 기초 교육과 함께하는 가벼운 러닝입니다.',
      level: 'beginner',
      distance: '3km'
    }
  ];

  const filteredEvents = activeFilter === 'all'
    ? scheduleEvents
    : scheduleEvents.filter(event => event.level === activeFilter);

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

  const handleFilterChange = (filter: string) => {
    setActiveFilter(filter);
  };

  const handleKeyDown = (e: React.KeyboardEvent, filter: string) => {
    if (e.key === 'Enter' || e.key === ' ') {
      handleFilterChange(filter);
    }
  };

  const getLevelBadgeClass = (level: string) => {
    switch (level) {
      case 'beginner':
        return 'bg-success/10 text-success';
      case 'intermediate':
        return 'bg-secondary/10 text-secondary';
      case 'advanced':
        return 'bg-primary/10 text-primary';
      default:
        return 'bg-accent/10 text-accent';
    }
  };

  const getLevelText = (level: string) => {
    switch (level) {
      case 'beginner':
        return '초급';
      case 'intermediate':
        return '중급';
      case 'advanced':
        return '고급';
      default:
        return '전체';
    }
  };

  return (
    <section id="schedule" ref={sectionRef} className="py-20 bg-neutral-100">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            러닝 일정
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-lg text-neutral-700 max-w-3xl mx-auto">
            함께 달릴 수 있는 정기 모임 일정입니다. 자신의 수준과 일정에 맞는 모임을 찾아보세요.
          </p>
        </div>

        {/* 필터 버튼들 */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {['all', 'beginner', 'intermediate', 'advanced'].map(filter => (
            <button
              key={filter}
              onClick={() => handleFilterChange(filter)}
              onKeyDown={(e) => handleKeyDown(e, filter)}
              tabIndex={0}
              aria-pressed={activeFilter === filter}
              className={`px-4 py-2 rounded-full transition-colors ${
                activeFilter === filter
                  ? 'bg-primary text-white'
                  : 'bg-white text-neutral-700 hover:bg-neutral-200'
              }`}
            >
              {filter === 'all' ? '전체' : getLevelText(filter)}
            </button>
          ))}
        </div>

        {/* 일정 카드들 */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
          {filteredEvents.map((event, index) => (
            <div
              key={index}
              className={`bg-white rounded-xl shadow-md overflow-hidden transition-all duration-500 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* 상단 색상 바 */}
              <div className="h-2 bg-primary"></div>
              
              <div className="p-6">
                {/* 날짜 및 시간 */}
                <div className="flex justify-between items-center mb-4">
                  <div>
                    <span className="block text-lg font-bold">{event.day}</span>
                    <span className="text-neutral-500 text-sm">{event.date}</span>
                  </div>
                  <span className="text-primary font-medium">{event.time}</span>
                </div>
                
                {/* 이벤트 제목 */}
                <h3 className="text-xl font-bold mb-2">{event.title}</h3>
                
                {/* 레벨 & 거리 */}
                <div className="flex space-x-2 mb-4">
                  <span className={`text-xs px-3 py-1 rounded-full ${getLevelBadgeClass(event.level)}`}>
                    {getLevelText(event.level)}
                  </span>
                  {event.distance && (
                    <span className="text-xs bg-neutral-100 text-neutral-700 px-3 py-1 rounded-full">
                      {event.distance}
                    </span>
                  )}
                </div>
                
                {/* 위치 */}
                <div className="flex items-center text-neutral-600 mb-4">
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span>{event.location}</span>
                </div>
                
                {/* 설명 */}
                <p className="text-neutral-700 mb-6">{event.description}</p>
                
                {/* 참가 버튼 */}
                <button className="w-full py-2 bg-white border-2 border-primary text-primary rounded-full hover:bg-primary hover:text-white transition-colors font-medium">
                  참가 신청
                </button>
              </div>
            </div>
          ))}
        </div>
        
        {/* 달력 다운로드 버튼 */}
        <div className="mt-12 text-center">
          <button className="inline-flex items-center px-6 py-3 bg-white border-2 border-primary text-primary rounded-full hover:bg-primary hover:text-white transition-colors font-medium">
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            전체 일정 캘린더 다운로드
          </button>
        </div>
      </div>
    </section>
  );
};

export default ScheduleSection;