import { useState } from 'react';
import { Star, Quote, ChevronLeft, ChevronRight, Play } from 'lucide-react';
import { Card, CardContent } from './ui/cardP';
import { Button } from './ui/buttonP';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface Testimonial {
  id: string;
  name: string;
  location: string;
  rating: number;
  text: string;
  image: string;
  packageType: string;
  travelDate: string;
  isVideo?: boolean;
}

export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials: Testimonial[] = [
    {
      id: '1',
      name: 'Muhammad Ahmed Khan',
      location: 'Lahore, Pakistan',
      rating: 5,
      text: 'Alhamdulillah, our Umrah journey was absolutely perfect. The hotel was walking distance from Haram, visa process was smooth, and the team provided excellent support throughout our 14-day journey. Highly recommended for Pakistani families.',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
      packageType: '14-Day Luxury Package',
      travelDate: 'December 2024'
    },
    {
      id: '2',
      name: 'Fatima Bibi',
      location: 'Karachi, Pakistan',
      rating: 5,
      text: 'This was my second Umrah but first time with UmrahPak. The difference was incredible - everything was organized, hotels were clean with proper halal food, and our guide was very knowledgeable about Islamic history.',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face',
      packageType: '10-Day Standard Package',
      travelDate: 'November 2024',
      isVideo: true
    },
    {
      id: '3',
      name: 'Ali Hassan',
      location: 'Islamabad, Pakistan',
      rating: 5,
      text: 'From Lahore to Mecca, every detail was taken care of. The flight timing was perfect, hotel rooms were spacious, and the most important thing - we never had to worry about anything during our spiritual journey.',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
      packageType: '7-Day Express Package',
      travelDate: 'January 2025'
    },
    {
      id: '4',
      name: 'Khadija Malik',
      location: 'Faisalabad, Pakistan',
      rating: 5,
      text: 'As a solo female traveler, I was initially worried, but UmrahPak made sure I felt safe and comfortable throughout. The group was very respectful and the female guide was amazing. JazakAllah khair!',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face',
      packageType: '21-Day Extended Package',
      travelDate: 'October 2024'
    },
    {
      id: '5',
      name: 'Usman Tariq',
      location: 'Peshawar, Pakistan',
      rating: 5,
      text: 'Best decision we made for our family Umrah. Kids were well taken care of, elderly parents had wheelchair assistance, and hotels had elevators and proper facilities. Worth every penny.',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face',
      packageType: '14-Day Family Package',
      travelDate: 'September 2024'
    }
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${
          i < rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'
        }`}
      />
    ));
  };

  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            What Our Pilgrims Say
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Real experiences from thousands of Pakistani families who trusted us for their spiritual journey
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Main Testimonial Display */}
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="w-full flex-shrink-0 px-4">
                  <Card className="mx-auto">
                    <CardContent className="p-8">
                      <div className="flex flex-col md:flex-row gap-6">
                        {/* Profile Section */}
                        <div className="md:w-1/3 text-center md:text-left">
                          <div className="relative inline-block">
                            <ImageWithFallback
                              src={testimonial.image}
                              alt={`${testimonial.name} - Umrah testimonial`}
                              className="w-24 h-24 rounded-full mx-auto md:mx-0 object-cover"
                            />
                            {testimonial.isVideo && (
                              <div className="absolute inset-0 flex items-center justify-center bg-black/20 rounded-full">
                                <Play className="w-6 h-6 text-white" />
                              </div>
                            )}
                          </div>
                          <h4 className="font-semibold mt-4">{testimonial.name}</h4>
                          <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                          <div className="flex justify-center md:justify-start mt-2">
                            {renderStars(testimonial.rating)}
                          </div>
                          <div className="mt-3 space-y-1">
                            <p className="text-sm font-medium text-primary">{testimonial.packageType}</p>
                            <p className="text-xs text-muted-foreground">{testimonial.travelDate}</p>
                          </div>
                        </div>

                        {/* Testimonial Content */}
                        <div className="md:w-2/3">
                          <Quote className="w-8 h-8 text-primary mb-4" />
                          <blockquote className="text-lg leading-relaxed text-foreground">
                            "{testimonial.text}"
                          </blockquote>
                          
                          {testimonial.isVideo && (
                            <Button variant="outline" className="mt-4 flex items-center gap-2">
                              <Play className="w-4 h-4" />
                              Watch Video Review
                            </Button>
                          )}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <Button
              variant="outline"
              size="icon"
              onClick={prevTestimonial}
              className="rounded-full"
            >
              <ChevronLeft className="w-4 h-4" />
            </Button>

            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    index === currentIndex ? 'bg-primary' : 'bg-muted-foreground/30'
                  }`}
                />
              ))}
            </div>

            <Button
              variant="outline"
              size="icon"
              onClick={nextTestimonial}
              className="rounded-full"
            >
              <ChevronRight className="w-4 h-4" />
            </Button>
          </div>
        </div>

        {/* Trust Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-16 text-center">
          <div>
            <div className="text-3xl font-bold text-primary">10,000+</div>
            <p className="text-muted-foreground">Happy Pilgrims</p>
          </div>
          <div>
            <div className="text-3xl font-bold text-primary">4.9/5</div>
            <p className="text-muted-foreground">Average Rating</p>
          </div>
          <div>
            <div className="text-3xl font-bold text-primary">100%</div>
            <p className="text-muted-foreground">Visa Success Rate</p>
          </div>
          <div>
            <div className="text-3xl font-bold text-primary">15+</div>
            <p className="text-muted-foreground">Years Experience</p>
          </div>
        </div>
      </div>
    </section>
  );
}