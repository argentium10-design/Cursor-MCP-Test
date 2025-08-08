'use client';

import { useState } from 'react';
import Link from 'next/link';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      handleMenuToggle();
    }
  };
  
  return (
    <header className="fixed w-full bg-white/80 backdrop-blur-md z-50 py-4 shadow-sm">
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <Link href="/" className="flex items-center space-x-2" aria-label="러닝크루 홈">
          <span className="text-2xl font-bold text-gradient">러닝크루</span>
        </Link>

        {/* 데스크톱 메뉴 */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link href="#benefits" className="text-neutral-700 hover:text-primary transition-colors font-medium">
            혜택
          </Link>
          <Link href="#how-it-works" className="text-neutral-700 hover:text-primary transition-colors font-medium">
            이용 방법
          </Link>
          <Link href="#testimonials" className="text-neutral-700 hover:text-primary transition-colors font-medium">
            후기
          </Link>
          <Link
            href="#join"
            className="btn-gradient text-white px-6 py-2 rounded-full font-medium"
          >
            참여하기
          </Link>
        </nav>

        {/* 모바일 메뉴 토글 버튼 */}
        <div className="md:hidden">
          <button
            aria-label={isMenuOpen ? "메뉴 닫기" : "메뉴 열기"}
            aria-expanded={isMenuOpen}
            onClick={handleMenuToggle}
            onKeyDown={handleKeyDown}
            tabIndex={0}
            className="p-2"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="text-neutral-700"
            >
              {isMenuOpen ? (
                <path
                  d="M18 6L6 18M6 6L18 18"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              ) : (
                <path
                  d="M4 6H20M4 12H20M4 18H20"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* 모바일 메뉴 */}
      {isMenuOpen && (
        <nav className="md:hidden bg-white p-4 absolute left-0 right-0 top-full shadow-lg">
          <div className="flex flex-col space-y-4">
            <Link
              href="#benefits"
              className="text-neutral-700 hover:text-primary transition-colors py-2 font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              혜택
            </Link>
            <Link
              href="#how-it-works"
              className="text-neutral-700 hover:text-primary transition-colors py-2 font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              이용 방법
            </Link>
            <Link
              href="#testimonials"
              className="text-neutral-700 hover:text-primary transition-colors py-2 font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              후기
            </Link>
            <Link
              href="#join"
              className="btn-gradient text-white px-6 py-2 rounded-full text-center font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              참여하기
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;