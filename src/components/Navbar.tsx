
import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';
import './Navbar.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isMobile = useIsMobile();
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="logo">
          <Link to="/">
            <h1>IIID</h1>
          </Link>
        </div>
        
        {isMobile ? (
          <>
            <button 
              className="mobile-menu-toggle" 
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
            
            {isMenuOpen && (
              <div className="mobile-nav-links">
                <Link 
                  to="/" 
                  className={`nav-link ${location.pathname === '/' ? 'active' : ''}`} 
                  onClick={toggleMenu}
                >
                  Home
                </Link>
                <Link 
                  to="/about" 
                  className={`nav-link ${location.pathname === '/about' ? 'active' : ''}`}
                  onClick={toggleMenu}
                >
                  About
                </Link>
                <Link 
                  to="/events" 
                  className={`nav-link ${location.pathname === '/events' ? 'active' : ''}`}
                  onClick={toggleMenu}
                >
                  Events
                </Link>
                <Link 
                  to="/speakers" 
                  className={`nav-link ${location.pathname === '/speakers' ? 'active' : ''}`}
                  onClick={toggleMenu}
                >
                  Speakers
                </Link>
                <Link 
                  to="/workshops" 
                  className={`nav-link ${location.pathname === '/workshops' ? 'active' : ''}`}
                  onClick={toggleMenu}
                >
                  Workshops
                </Link>
                <Link 
                  to="/sponsors" 
                  className={`nav-link ${location.pathname === '/sponsors' ? 'active' : ''}`}
                  onClick={toggleMenu}
                >
                  Sponsors
                </Link>
                <Button asChild className="register-btn mobile-register-btn white-register-btn">
                  <Link to="/register" onClick={toggleMenu}>Register</Link>
                </Button>
              </div>
            )}
          </>
        ) : (
          <div className="nav-links">
            <Link 
              to="/" 
              className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}
            >
              Home
            </Link>
            <Link 
              to="/about" 
              className={`nav-link ${location.pathname === '/about' ? 'active' : ''}`}
            >
              About
            </Link>
            <Link 
              to="/events" 
              className={`nav-link ${location.pathname === '/events' ? 'active' : ''}`}
            >
              Events
            </Link>
            <Link 
              to="/speakers" 
              className={`nav-link ${location.pathname === '/speakers' ? 'active' : ''}`}
            >
              Speakers
            </Link>
            <Link 
              to="/workshops" 
              className={`nav-link ${location.pathname === '/workshops' ? 'active' : ''}`}
            >
              Workshops
            </Link>
            <Link 
              to="/sponsors" 
              className={`nav-link ${location.pathname === '/sponsors' ? 'active' : ''}`}
            >
              Sponsors
            </Link>
            <Button asChild className="register-btn white-register-btn">
              <Link to="/register">Register</Link>
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
