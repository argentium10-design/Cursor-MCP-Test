'use client';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-neutral-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {/* 로고 및 소개 */}
          <div>
            <div className="flex items-center mb-4">
              <span className="text-2xl font-bold text-gradient">러닝크루</span>
            </div>
            <p className="text-neutral-300 mb-6">
              함께 달리며 성장하는 러닝 커뮤니티입니다.
              건강한 라이프스타일과 즐거운 추억을 함께 만들어가요.
            </p>
            {/* 소셜 미디어 아이콘 */}
            <div className="flex space-x-4">
              <a 
                href="#" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white hover:text-accent transition-colors"
                aria-label="인스타그램"
                tabIndex={0}
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0z" />
                  <path d="M12 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8z" />
                  <circle cx="18.406" cy="5.594" r="1.44" />
                </svg>
              </a>
              <a 
                href="#" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white hover:text-accent transition-colors"
                aria-label="페이스북"
                tabIndex={0}
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
              <a 
                href="#" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white hover:text-accent transition-colors"
                aria-label="유튜브"
                tabIndex={0}
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </a>
              <a 
                href="#" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white hover:text-accent transition-colors"
                aria-label="카카오톡 채널"
                tabIndex={0}
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 3c-5.5 0-10 3.7-10 8.2 0 2.9 1.9 5.4 4.7 6.9-.2.6-.7 2.3-.8 2.6 0 0-.1.1-.1.1l.1.1c.2.1 1.1-.2 3.8-1.4.8.2 1.5.3 2.3.3 5.5 0 10-3.7 10-8.2S17.5 3 12 3" />
                </svg>
              </a>
            </div>
          </div>
          
          {/* 주요 링크 */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-white">바로가기</h3>
            <ul className="space-y-2">
              <li>
                <a href="#benefits" className="text-neutral-300 hover:text-accent transition-colors">
                  혜택
                </a>
              </li>
              <li>
                <a href="#how-it-works" className="text-neutral-300 hover:text-accent transition-colors">
                  이용 방법
                </a>
              </li>
              <li>
                <a href="#testimonials" className="text-neutral-300 hover:text-accent transition-colors">
                  후기
                </a>
              </li>
              <li>
                <a href="#join" className="text-neutral-300 hover:text-accent transition-colors">
                  참여하기
                </a>
              </li>
            </ul>
            
            <h3 className="text-lg font-bold mb-4 mt-8 text-white">정책</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-neutral-300 hover:text-accent transition-colors">
                  이용약관
                </a>
              </li>
              <li>
                <a href="#" className="text-neutral-300 hover:text-accent transition-colors">
                  개인정보처리방침
                </a>
              </li>
            </ul>
          </div>
          
          {/* 연락처 */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-white">연락처</h3>
            <ul className="space-y-2">
              <li className="flex items-start">
                <svg className="w-5 h-5 text-accent mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span className="text-neutral-300">
                  서울특별시 강남구 테헤란로 123<br />
                  러닝크루 빌딩 4층
                </span>
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 text-accent mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span className="text-neutral-300">02-123-4567</span>
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 text-accent mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span className="text-neutral-300">info@runningcrew.com</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 mt-8 border-t border-neutral-700 text-center sm:flex sm:justify-between sm:items-center">
          <p className="text-neutral-400 mb-4 sm:mb-0">
            &copy; {currentYear} 러닝크루. All rights reserved.
          </p>
          <div className="flex justify-center space-x-4">
                          <a href="#" className="text-neutral-400 hover:text-accent transition-colors">
              About
            </a>
            <span className="text-neutral-700">|</span>
            <a href="#" className="text-neutral-400 hover:text-accent transition-colors">
              Contact
            </a>
            <span className="text-neutral-700">|</span>
            <a href="#" className="text-neutral-400 hover:text-accent transition-colors">
              Instagram
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;