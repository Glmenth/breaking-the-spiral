"use client";

import { useState } from 'react';
import Link from 'next/link';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="site-header relative z-50 bg-white border-b border-gray-200">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* Logo */}
          <Link href="/" className="site-logo text-xl font-bold text-[#1a3b45] shrink-0" onClick={closeMenu}>
            Breaking The Spiral
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/ultimate-guide-mbct" className="text-gray-700 hover:text-[#c16533] font-medium transition-colors">
              Ultimate Guide
            </Link>
            <Link href="/join" className="text-gray-700 hover:text-[#c16533] font-medium transition-colors">
              Join a Group
            </Link>
            <Link href="/reviews/zindel-segal-course" className="text-gray-700 hover:text-[#c16533] font-medium transition-colors">
              Course Review
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-[#c16533] font-medium transition-colors">
              About
            </Link>
            <Link href="/contact" className="bg-[#1a3b45] text-white px-5 py-2 rounded-md hover:bg-[#142E35] transition-colors shadow-sm font-medium">
              Join the Waitlist
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-[#1a3b45] hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-[#1a3b45]"
              onClick={toggleMobileMenu}
              aria-expanded={isMobileMenuOpen}
            >
              <span className="sr-only">Open main menu</span>
              {/* Hamburger Icon */}
              {!isMobileMenuOpen ? (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                /* Close (X) Icon */
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-20 left-0 w-full bg-white shadow-lg border-b border-gray-200">
          <div className="px-4 pt-2 pb-6 space-y-2">
            <Link 
              href="/ultimate-guide-mbct" 
              className="block px-3 py-3 rounded-md text-base font-medium text-gray-700 hover:text-[#1a3b45] hover:bg-gray-50"
              onClick={closeMenu}
            >
              Ultimate Guide
            </Link>
            <Link 
              href="/join" 
              className="block px-3 py-3 rounded-md text-base font-medium text-gray-700 hover:text-[#1a3b45] hover:bg-gray-50"
              onClick={closeMenu}
            >
              Join a Group
            </Link>
            <Link 
              href="/reviews/zindel-segal-course" 
              className="block px-3 py-3 rounded-md text-base font-medium text-gray-700 hover:text-[#1a3b45] hover:bg-gray-50"
              onClick={closeMenu}
            >
              Course Review
            </Link>
            <Link 
              href="/about" 
              className="block px-3 py-3 rounded-md text-base font-medium text-gray-700 hover:text-[#1a3b45] hover:bg-gray-50"
              onClick={closeMenu}
            >
              About
            </Link>
            <div className="pt-2">
              <Link 
                href="/contact" 
                className="block w-full text-center px-4 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-[#1a3b45] hover:bg-[#142E35]"
                onClick={closeMenu}
              >
                Join the Waitlist
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
