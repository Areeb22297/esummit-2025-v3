
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from "@/components/ui/button";
import { Mail } from 'lucide-react';
import './SponsorsPage.css';

interface Sponsor {
  id: number;
  name: string;
  logo: string;
  tier: 'platinum' | 'gold' | 'silver' | 'bronze';
}

const SponsorsPage = () => {
  const sponsors: Sponsor[] = [
    { id: 1, name: "Google", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/1200px-Google_2015_logo.svg.png", tier: "platinum" },
    { id: 2, name: "Microsoft", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Microsoft_logo.svg/1200px-Microsoft_logo.svg.png", tier: "platinum" },
    { id: 3, name: "Amazon", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png", tier: "gold" },
    { id: 4, name: "Apple", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Apple_logo_black.svg/1024px-Apple_logo_black.svg.png", tier: "gold" },
    { id: 5, name: "Meta", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Meta_Platforms_Inc._logo.svg/1024px-Meta_Platforms_Inc._logo.svg.png", tier: "gold" },
    { id: 6, name: "Accenture", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Accenture.svg/1200px-Accenture.svg.png", tier: "silver" },
    { id: 7, name: "IBM", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/IBM_logo.svg/1200px-IBM_logo.svg.png", tier: "silver" },
    { id: 8, name: "Intel", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/Intel_logo_%282006-2020%29.svg/1200px-Intel_logo_%282006-2020%29.svg.png", tier: "silver" },
    { id: 9, name: "Adobe", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/Adobe_Corporate_logo.png/1200px-Adobe_Corporate_logo.png", tier: "bronze" },
    { id: 10, name: "Salesforce", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Salesforce.com_logo.svg/1200px-Salesforce.com_logo.svg.png", tier: "bronze" },
    { id: 11, name: "Oracle", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Oracle_logo.svg/1280px-Oracle_logo.svg.png", tier: "bronze" },
    { id: 12, name: "SAP", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/SAP_2011_logo.svg/1200px-SAP_2011_logo.svg.png", tier: "bronze" }
  ];

  const sponsorsByTier = {
    platinum: sponsors.filter(sponsor => sponsor.tier === 'platinum'),
    gold: sponsors.filter(sponsor => sponsor.tier === 'gold'),
    silver: sponsors.filter(sponsor => sponsor.tier === 'silver'),
    bronze: sponsors.filter(sponsor => sponsor.tier === 'bronze')
  };

  return (
    <div className="sponsors-page">
      <Navbar />
      <main>
        <div className="sponsors-page-hero">
          <div className="texture-overlay"></div>
          <div className="sponsors-page-hero-content">
            <h1 className="sponsors-page-title">
              OUR <span className="highlight">SPONSORS</span>
            </h1>
            <p className="sponsors-page-description">
              We are grateful to our sponsors for their generous support in making E-Summit possible.
            </p>
          </div>
        </div>
        
        <div className="sponsors-tiers">
          <div className="tier platinum-tier">
            <h2 className="tier-title">Platinum Sponsors</h2>
            <div className="sponsors-grid platinum-grid">
              {sponsorsByTier.platinum.map(sponsor => (
                <div key={sponsor.id} className="sponsor-page-card">
                  <img src={sponsor.logo} alt={sponsor.name} className="sponsor-page-logo" />
                </div>
              ))}
            </div>
          </div>
          
          <div className="tier gold-tier">
            <h2 className="tier-title">Gold Sponsors</h2>
            <div className="sponsors-grid gold-grid">
              {sponsorsByTier.gold.map(sponsor => (
                <div key={sponsor.id} className="sponsor-page-card">
                  <img src={sponsor.logo} alt={sponsor.name} className="sponsor-page-logo" />
                </div>
              ))}
            </div>
          </div>
          
          <div className="tier silver-tier">
            <h2 className="tier-title">Silver Sponsors</h2>
            <div className="sponsors-grid silver-grid">
              {sponsorsByTier.silver.map(sponsor => (
                <div key={sponsor.id} className="sponsor-page-card">
                  <img src={sponsor.logo} alt={sponsor.name} className="sponsor-page-logo" />
                </div>
              ))}
            </div>
          </div>
          
          <div className="tier bronze-tier">
            <h2 className="tier-title">Bronze Sponsors</h2>
            <div className="sponsors-grid bronze-grid">
              {sponsorsByTier.bronze.map(sponsor => (
                <div key={sponsor.id} className="sponsor-page-card">
                  <img src={sponsor.logo} alt={sponsor.name} className="sponsor-page-logo" />
                </div>
              ))}
            </div>
          </div>
        </div>
        
        <div className="become-sponsor">
          <div className="become-sponsor-content">
            <h2 className="become-sponsor-title">Become a Sponsor</h2>
            <p className="become-sponsor-text">
              Interested in sponsoring E-Summit? Partner with us to gain visibility among the brightest minds and future entrepreneurs.
            </p>
            <Button className="contact-btn">
              <Mail className="mr-2" size={16} />
              Contact Us
            </Button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default SponsorsPage;
