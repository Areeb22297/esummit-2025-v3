
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, MapPin } from 'lucide-react';
import './EventsPage.css';

interface Event {
  id: number;
  title: string;
  date: string;
  location: string;
  image: string;
}

const EventsPage = () => {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const events: Event[] = [
    {
      id: 1,
      title: "STARTUP GROWTH STRATEGIES",
      date: "Mar 10, 2025",
      location: "Online",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: 2,
      title: "CONCEPT MARKETING CHALLENGE",
      date: "Mar 12, 2025",
      location: "IIITD, Delhi, India",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: 3,
      title: "HACK FOR IMPACT",
      date: "Mar 15, 2025",
      location: "Online",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: 4,
      title: "VENTURE CAPITAL PITCH DAY",
      date: "Mar 18, 2025",
      location: "IIITD, Delhi, India",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: 5,
      title: "BLOCKCHAIN INNOVATION SUMMIT",
      date: "Mar 20, 2025",
      location: "Online",
      image: "https://images.unsplash.com/photo-1639322537228-f710d846310a?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: 6,
      title: "TECH STARTUP SHOWCASE",
      date: "Mar 22, 2025",
      location: "IIITD, Delhi, India",
      image: "https://images.unsplash.com/photo-1496171367470-9ed9a91ea931?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: 7,
      title: "WOMEN IN TECH FORUM",
      date: "Mar 25, 2025",
      location: "Online",
      image: "https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: 8,
      title: "FINTECH INNOVATION CHALLENGE",
      date: "Mar 27, 2025",
      location: "IIITD, Delhi, India",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: 9,
      title: "SUSTAINABLE BUSINESS SUMMIT",
      date: "Mar 29, 2025",
      location: "Online",
      image: "https://images.unsplash.com/photo-1536856136534-bb679c52a9aa?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: 10,
      title: "ENTREPRENEUR NETWORKING NIGHT",
      date: "Mar 30, 2025",
      location: "IIITD, Delhi, India",
      image: "https://images.unsplash.com/photo-1587614380862-f272cb8abb11?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: 11,
      title: "AI IN BUSINESS CONFERENCE",
      date: "Apr 2, 2025",
      location: "Online",
      image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: 12,
      title: "PRODUCT DESIGN SPRINT",
      date: "Apr 5, 2025",
      location: "IIITD, Delhi, India",
      image: "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?auto=format&fit=crop&w=600&q=80"
    }
  ];

  return (
    <div className="events-page">
      <Navbar />
      <main>
        <div className="events-hero">
          <div className="texture-overlay"></div>
          <div className="events-hero-content">
            <h1 className="events-title">
              EVENTS <span className="highlight">CONCLAVE</span>
            </h1>
            <p className="events-description">
              Explore our lineup of exciting events designed to inspire, educate, and connect entrepreneurs at all stages.
            </p>
          </div>
        </div>
        
        <div className="events-grid">
          {events.map(event => (
            <Card key={event.id} className="event-card">
              <div className="event-card-image" style={{ backgroundImage: `url(${event.image})` }}></div>
              <CardContent className="event-card-content">
                <h3 className="event-card-title">{event.title}</h3>
                <div className="event-card-details">
                  <div className="event-card-detail">
                    <Calendar size={16} />
                    <span>Starts {event.date}</span>
                  </div>
                  <div className="event-card-detail">
                    <MapPin size={16} />
                    <span>{event.location}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default EventsPage;
