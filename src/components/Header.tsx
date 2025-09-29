import { useState } from 'react';
import { Search, Menu, X, Phone, MapPin } from 'lucide-react';
import { Button } from './ui/buttonP';
import { Input } from './ui/input';
import AnnouncementBar from './ui/announcementBar';
import Image from "next/image";


export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'Packages', href: './umrah-packages' },
    { name: 'FAQs', href: '#faqs' }
  ];

  return (
    
    <header className="sticky top-0 z-50 w-full  bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <AnnouncementBar className=" "/>
      <div className="container mx-auto px-4">
        {/* Top bar with contact info */}
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <Image
                      src="/images/logo.svg"
                      alt="Qafila-e-Miqat Travel and Tours"
                      width={60}
                      height={90}
                      priority
                      className={`w-12 h-16 sm:w-12 sm:h-16`}
                    />

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-foreground hover:text-primary transition-colors"
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* Search Bar */}
          <div className="hidden lg:flex items-center gap-2">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
              <Input
                type="text"
                placeholder="Search packages by duration, hotel, or budget..."
                className="pl-10 w-64"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <Button size="sm" className="!text-accent">Search</Button>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <nav className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-foreground hover:text-primary transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              {/* Mobile search */}
              <div className="flex gap-2 pt-4 border-t">
                <Input
                  type="text"
                  placeholder="Search packages..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <Button size="sm" className="!text-accent">Search</Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}