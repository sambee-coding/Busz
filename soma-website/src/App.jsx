import React, { useState, useEffect } from 'react';
import { 
  Phone, 
  MapPin, 
  Clock, 
  Calendar, 
  Users, 
  Star, 
  ChevronRight, 
  Menu as MenuIcon, 
  X, 
  Coffee, 
  Utensils, 
  Sparkles,
  CheckCircle2,
  Heart
} from 'lucide-react';

export default function SomaWebsite() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState('all');
  const [reservation, setReservation] = useState({
    name: '',
    phone: '',
    guests: '2',
    date: '',
    time: '19:00',
    notes: ''
  });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleReservationSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  const menuItems = [
    {
      id: 1,
      name: "Grilled Chicken & Bowtie Pasta",
      category: "mains",
      price: "ETB 680",
      description: "Char-grilled seasoned chicken breast served over bowtie pasta with fresh peas and shaved carrots.",
      highlight: "Chef's Signature",
      image: "/food-1.webp"
    },
    {
      id: 2,
      name: "SOMA Deluxe Pasta Platter",
      category: "mains",
      price: "ETB 850",
      description: "An incredible sampler featuring house-baked lasagna, handmade ravioli, roasted chicken, and wild rice.",
      highlight: "Popular",
      image: "/food-2.webp"
    },
    {
      id: 3,
      name: "Crispy Milanese Spaghetti",
      category: "mains",
      price: "ETB 620",
      description: "Golden herb-crusted cutlets served alongside silky cream spaghetti and fresh garden greens.",
      highlight: "House Special",
      image: "/food-3.webp"
    },
    {
      id: 4,
      name: "Creamy Tomato Chicken Penne",
      category: "mains",
      price: "ETB 580",
      description: "Tender sliced chicken breast tossed in rich San Marzano tomato cream sauce with fresh herbs.",
      highlight: "Italian Classic",
      image: "/food-4.webp"
    }
  ];

  const filteredMenu = activeCategory === 'all' 
    ? menuItems 
    : menuItems.filter(item => item.category === activeCategory);

  return (
    <div className="bg-[#F9F3EA] text-[#1A1412] font-sans antialiased selection:bg-[#FFA552] selection:text-white">
      
      {/* Dynamic Header */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-[#1A1412]/90 backdrop-blur-md py-4 text-white shadow-xl' : 'bg-transparent py-6 text-white'
      }`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <a href="#" className="flex items-center gap-2 group">
            <span className="text-2xl font-serif font-bold tracking-wider text-[#FFA552]">SOMA</span>
            <span className="text-xs uppercase tracking-widest text-stone-300 border-l border-stone-600 pl-2">Cafe & Restaurant</span>
          </a>

          <div className="hidden md:flex items-center space-x-8 text-sm font-medium tracking-wide">
            <a href="#about" className="hover:text-[#FFA552] transition-colors">Our Story</a>
            <a href="#menu" className="hover:text-[#FFA552] transition-colors">Menu</a>
            <a href="#ambience" className="hover:text-[#FFA552] transition-colors">Ambience</a>
            <a href="#reserve" className="hover:text-[#FFA552] transition-colors">Reservations</a>
            <a href="#location" className="hover:text-[#FFA552] transition-colors">Find Us</a>
          </div>

          <div className="hidden md:flex items-center gap-4">
            <a href="tel:0999266392" className="text-xs flex items-center gap-2 text-stone-300 hover:text-white transition-colors">
              <Phone className="w-4 h-4 text-[#FFA552]" /> 099 926 6392
            </a>
            <a 
              href="#reserve" 
              className="bg-[#FFA552] hover:bg-[#e08e3d] text-[#1A1412] font-semibold px-5 py-2.5 rounded-full text-sm transition-all transform hover:scale-105 shadow-md"
            >
              Book Table
            </a>
          </div>

          <button 
            className="md:hidden text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X /> : <MenuIcon />}
          </button>
        </div>

        {/* Mobile Navigation Dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-[#1A1412] px-6 py-6 border-b border-stone-800 space-y-4">
            <a href="#about" onClick={() => setMobileMenuOpen(false)} className="block text-stone-300 hover:text-[#FFA552]">Our Story</a>
            <a href="#menu" onClick={() => setMobileMenuOpen(false)} className="block text-stone-300 hover:text-[#FFA552]">Menu</a>
            <a href="#ambience" onClick={() => setMobileMenuOpen(false)} className="block text-stone-300 hover:text-[#FFA552]">Ambience</a>
            <a href="#reserve" onClick={() => setMobileMenuOpen(false)} className="block text-stone-300 hover:text-[#FFA552]">Reservations</a>
            <a href="#location" onClick={() => setMobileMenuOpen(false)} className="block text-stone-300 hover:text-[#FFA552]">Location</a>
            <a 
              href="#reserve" 
              onClick={() => setMobileMenuOpen(false)}
              className="block text-center bg-[#FFA552] text-[#1A1412] font-bold py-3 rounded-full"
            >
              Reserve Now
            </a>
          </div>
        )}
      </nav>

      {/* Hero Section with Custom SOMA Interior Photo */}
      <section className="relative min-h-screen flex items-center justify-center bg-[#1A1412] text-white overflow-hidden pt-28 pb-24">
        <div className="absolute inset-0 z-0 opacity-50">
          <img 
            src="/hero-interior.webp" 
            alt="SOMA Restaurant Dining Room" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1A1412] via-[#1A1412]/70 to-[#1A1412]/40" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center space-y-8 my-auto">
          <div className="inline-flex items-center gap-2 bg-[#FFA552]/20 border border-[#FFA552]/40 rounded-full px-4 py-1.5 backdrop-blur-md">
            <Sparkles className="w-4 h-4 text-[#FFA552]" />
            <span className="text-xs uppercase font-semibold text-[#FFA552] tracking-widest">Italian Cuisine & Specialty Cafe</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-serif font-light leading-tight">
            Crafted for the body, <br />
            <span className="italic font-normal text-[#FFA552]">served for the soul.</span>
          </h1>

          <p className="text-stone-300 max-w-2xl mx-auto text-base md:text-lg font-light leading-relaxed">
            Welcome to Bole Bulbula's all-in-one culinary destination. Experience handcrafted Italian classics, artisanal coffee, and serene outdoor seating designed for moments that matter.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <a 
              href="#reserve" 
              className="w-full sm:w-auto bg-[#FFA552] hover:bg-[#e08e3d] text-[#1A1412] font-bold px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105 shadow-xl flex items-center justify-center gap-2"
            >
              Reserve Your Table <ChevronRight className="w-4 h-4" />
            </a>
            <a 
              href="#menu" 
              className="w-full sm:w-auto bg-white/10 hover:bg-white/20 text-white border border-white/20 font-medium px-8 py-4 rounded-full transition-all backdrop-blur-md flex items-center justify-center"
            >
              Explore Menu
            </a>
          </div>

          {/* Social Proof Strip with Bottom Margin */}
          <div className="pt-12 mb-12 md:mb-16 grid grid-cols-2 md:grid-cols-3 gap-6 border-t border-white/10 max-w-3xl mx-auto text-left">
            <div className="flex items-center gap-3">
              <div className="bg-[#FFA552]/20 p-2.5 rounded-full text-[#FFA552]">
                <Star className="w-5 h-5 fill-current" />
              </div>
              <div>
                <p className="text-lg font-bold">5.0 Star Rated</p>
                <p className="text-xs text-stone-400">100% Positive Google Reviews</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="bg-[#FFA552]/20 p-2.5 rounded-full text-[#FFA552]">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <p className="text-lg font-bold">Bole Bulbula</p>
                <p className="text-xs text-stone-400">Maria Mazoriya, Tsehay Bldg</p>
              </div>
            </div>
            <div className="col-span-2 md:col-span-1 flex items-center gap-3">
              <div className="bg-[#FFA552]/20 p-2.5 rounded-full text-[#FFA552]">
                <Clock className="w-5 h-5" />
              </div>
              <div>
                <p className="text-lg font-bold">Open Daily</p>
                <p className="text-xs text-stone-400">Until 11:00 PM</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Brand Story Section with Custom SOMA Exterior Image */}
      <section id="about" className="py-24 max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[4/5]">
              <img 
                src="/about-story.webp" 
                alt="SOMA Exterior Signage" 
                className="w-full h-full object-cover"
              />
            </div>
            {/* Overlapping Badge Card */}
            <div className="absolute -bottom-8 -right-8 bg-white p-6 rounded-2xl shadow-xl border border-stone-100 max-w-xs hidden sm:block">
              <div className="flex items-center gap-1 text-[#FFA552] mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>
              <p className="text-sm font-medium text-stone-800">
                "An amazing experience! The new all-in-one spot in Bole Bulbula you must visit."
              </p>
              <p className="text-xs text-stone-400 mt-2">— Verified Google Reviewer</p>
            </div>
          </div>

          <div className="space-y-6">
            <span className="text-xs font-bold uppercase tracking-widest text-[#FFA552]">The SOMA Experience</span>
            <h2 className="text-4xl md:text-5xl font-serif leading-tight">
              A modern sanctuary for lovers of fine Italian flavors and artisanal coffee.
            </h2>
            <p className="text-stone-600 leading-relaxed font-light">
              Situated on the ground floor of the Tsehay Building in Maria Mazoriya, SOMA was conceived as a seamless hybrid between a refined Italian restaurant and an inviting neighborhood cafe.
            </p>
            <p className="text-stone-600 leading-relaxed font-light">
              Whether you are catching up over freshly roasted espresso, hosting a business lunch, or enjoying an evening pasta dinner on our open-air outdoor terrace, every element is meticulously crafted for your well-being.
            </p>

            <div className="grid grid-cols-2 gap-6 pt-4">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#FFA552] shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-stone-900">Outdoor Seating</h4>
                  <p className="text-xs text-stone-500">Relax in our breezy terrace environment.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#FFA552] shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-stone-900">Family Friendly</h4>
                  <p className="text-xs text-stone-500">High chairs and spacious arrangements available.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Food Menu Section */}
      <section id="menu" className="py-24 bg-white border-y border-stone-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto space-y-4 mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-[#FFA552]">Curated Offerings</span>
            <h2 className="text-4xl font-serif">Explore Our Menu</h2>
            <p className="text-stone-500 font-light">From authentic Italian recipes to carefully extracted specialty coffee brews.</p>

            {/* Menu Filter Tabs */}
            <div className="flex justify-center gap-2 pt-6">
              {['all', 'mains', 'desserts', 'drinks'].map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-5 py-2 rounded-full text-xs font-semibold capitalize transition-all ${
                    activeCategory === cat 
                      ? 'bg-[#1A1412] text-white shadow-md' 
                      : 'bg-stone-100 text-stone-600 hover:bg-stone-200'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Menu Items Grid with Real Food Photos */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {filteredMenu.map((item) => (
              <div key={item.id} className="bg-[#F9F3EA] rounded-2xl overflow-hidden group hover:shadow-xl transition-all duration-300 border border-stone-200/60 flex flex-col justify-between">
                <div>
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <img 
                      src={item.image} 
                      alt={item.name} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <span className="absolute top-3 right-3 bg-[#1A1412]/80 backdrop-blur-md text-[#FFA552] text-[10px] uppercase font-bold px-3 py-1 rounded-full">
                      {item.highlight}
                    </span>
                  </div>
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-serif font-bold text-lg text-stone-900">{item.name}</h3>
                      <span className="font-semibold text-sm text-[#FFA552] whitespace-nowrap ml-2">{item.price}</span>
                    </div>
                    <p className="text-stone-600 text-xs leading-relaxed font-light">
                      {item.description}
                    </p>
                  </div>
                </div>
                <div className="p-6 pt-0">
                  <a href="#reserve" className="w-full block text-center py-2 text-xs font-semibold text-[#1A1412] border border-[#1A1412]/20 rounded-lg hover:bg-[#1A1412] hover:text-white transition-colors">
                    Order for Table
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SOMA Ambience & Terrace Showcase (Using Outdoor Seating & Logo Wall Photos) */}
      <section id="ambience" className="py-24 bg-[#F9F3EA]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto space-y-4 mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-[#FFA552]">Indoor & Terrace Spaces</span>
            <h2 className="text-4xl font-serif">Designed for Comfort & Style</h2>
            <p className="text-stone-600 font-light">
              Experience the perfect setting—whether relaxing outdoors on our breezy balcony terrace or sinking into cozy indoor seating.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="relative rounded-3xl overflow-hidden shadow-xl group aspect-[16/10]">
              <img 
                src="/outdoor-seating.webp" 
                alt="SOMA Outdoor Terrace Seating" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1A1412]/80 via-transparent to-transparent flex items-end p-8">
                <div>
                  <h3 className="text-2xl font-serif text-white font-bold">Outdoor Terrace</h3>
                  <p className="text-xs text-stone-300 mt-1">Open-air dining with sweeping views of Bole Bulbula.</p>
                </div>
              </div>
            </div>

            <div className="relative rounded-3xl overflow-hidden shadow-xl group aspect-[16/10]">
              <img 
                src="/hero-interior.webp" 
                alt="SOMA Indoor Lounge Area" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1A1412]/80 via-transparent to-transparent flex items-end p-8">
                <div>
                  <h3 className="text-2xl font-serif text-white font-bold">Main Dining Room & Lounge</h3>
                  <p className="text-xs text-stone-300 mt-1">Warm Sorbet Orange accents and comfortable lounge seating.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Table Reservation Section */}
      <section id="reserve" className="py-24 max-w-7xl mx-auto px-6">
        <div className="bg-[#1A1412] text-white rounded-3xl overflow-hidden shadow-2xl grid lg:grid-cols-12">
          
          <div className="lg:col-span-5 p-8 lg:p-12 bg-gradient-to-br from-[#1A1412] to-stone-900 flex flex-col justify-between space-y-8">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#FFA552]">Direct Reservations</span>
              <h2 className="text-3xl lg:text-4xl font-serif font-light mt-2 mb-4">Book Your Table at SOMA</h2>
              <p className="text-stone-400 text-sm font-light leading-relaxed">
                Skip the wait and secure your spot for family gatherings, romantic evenings, or business coffee meetings.
              </p>
            </div>

            <div className="space-y-4 text-sm text-stone-300">
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-[#FFA552]" />
                <span>Maria Mazoriya, Tsehay Building, Ground Floor</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-[#FFA552]" />
                <span>099 926 6392</span>
              </div>
              <div className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-[#FFA552]" />
                <span>Daily: 7:00 AM – 11:00 PM</span>
              </div>
            </div>

            <div className="pt-6 border-t border-stone-800">
              <p className="text-xs text-stone-500">Need immediate assistance or private dining? Call us directly.</p>
            </div>
          </div>

          <div className="lg:col-span-7 p-8 lg:p-12 bg-white text-stone-900">
            {submitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center space-y-4 py-12">
                <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-serif font-bold">Reservation Received!</h3>
                <p className="text-stone-600 max-w-md text-sm">
                  Thank you for booking with SOMA. We've received your request and will hold your table. See you soon!
                </p>
              </div>
            ) : (
              <form onSubmit={handleReservationSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-bold uppercase text-stone-600 mb-2">Full Name</label>
                    <input 
                      type="text" 
                      required 
                      placeholder="e.g. Abebe Bikila" 
                      value={reservation.name}
                      onChange={(e) => setReservation({...reservation, name: e.target.value})}
                      className="w-full bg-[#F9F3EA] border border-stone-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#FFA552]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase text-stone-600 mb-2">Phone Number</label>
                    <input 
                      type="tel" 
                      required 
                      placeholder="0911..." 
                      value={reservation.phone}
                      onChange={(e) => setReservation({...reservation, phone: e.target.value})}
                      className="w-full bg-[#F9F3EA] border border-stone-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#FFA552]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div>
                    <label className="block text-xs font-bold uppercase text-stone-600 mb-2">Guests</label>
                    <select 
                      value={reservation.guests}
                      onChange={(e) => setReservation({...reservation, guests: e.target.value})}
                      className="w-full bg-[#F9F3EA] border border-stone-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#FFA552]"
                    >
                      <option value="1">1 Person</option>
                      <option value="2">2 People</option>
                      <option value="4">4 People</option>
                      <option value="6">6+ Large Group</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase text-stone-600 mb-2">Date</label>
                    <input 
                      type="date" 
                      required 
                      value={reservation.date}
                      onChange={(e) => setReservation({...reservation, date: e.target.value})}
                      className="w-full bg-[#F9F3EA] border border-stone-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#FFA552]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase text-stone-600 mb-2">Time</label>
                    <input 
                      type="time" 
                      required 
                      value={reservation.time}
                      onChange={(e) => setReservation({...reservation, time: e.target.value})}
                      className="w-full bg-[#F9F3EA] border border-stone-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#FFA552]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase text-stone-600 mb-2">Special Requests (Optional)</label>
                  <textarea 
                    rows="3" 
                    placeholder="Outdoor seating preference, birthday celebrations, dietary notes..." 
                    value={reservation.notes}
                    onChange={(e) => setReservation({...reservation, notes: e.target.value})}
                    className="w-full bg-[#F9F3EA] border border-stone-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#FFA552]"
                  ></textarea>
                </div>

                <button 
                  type="submit" 
                  className="w-full bg-[#FFA552] hover:bg-[#e08e3d] text-[#1A1412] font-bold py-4 rounded-xl transition-all shadow-md"
                >
                  Confirm Reservation
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Location & Map Section */}
      <section id="location" className="py-24 bg-white border-t border-stone-200">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <span className="text-xs font-bold uppercase tracking-widest text-[#FFA552]">Visit SOMA</span>
            <h2 className="text-4xl font-serif">Located in the Heart of Bole Bulbula</h2>
            <p className="text-stone-600 font-light leading-relaxed">
              Find us on the Ground Floor of the Tsehay Building at Maria Mazoriya. Easy street access, ample parking, and cozy outdoor arrangements await.
            </p>

            <div className="space-y-4 pt-2">
              <div className="p-4 rounded-2xl bg-[#F9F3EA] flex items-start gap-4">
                <MapPin className="w-6 h-6 text-[#FFA552] shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-stone-900">Address</h4>
                  <p className="text-sm text-stone-600">Bole Bulbula, Maria Mazoriya Tsehay Building, Ground Floor, Addis Ababa</p>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-[#F9F3EA] flex items-start gap-4">
                <Clock className="w-6 h-6 text-[#FFA552] shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-stone-900">Hours of Operation</h4>
                  <p className="text-sm text-stone-600">Monday – Sunday: 7:00 AM – 11:00 PM</p>
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-3xl overflow-hidden shadow-xl h-[400px] bg-stone-200 relative">
            <iframe 
              title="SOMA Location Map"
              src="https://maps.google.com/maps?q=8.9512349,38.7857809&hl=en&z=17&output=embed" 
              className="w-full h-full border-0" 
              allowFullScreen="" 
              loading="lazy" 
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#1A1412] text-white py-12 border-t border-stone-800">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <div>
            <span className="text-2xl font-serif font-bold text-[#FFA552]">SOMA</span>
            <p className="text-xs text-stone-400 mt-1">Crafted for the body, served for the soul.</p>
          </div>

          <div className="flex items-center gap-6">
            <a 
              href="https://www.instagram.com/soma_restaurant_cafe" 
              target="_blank" 
              rel="noreferrer"
              className="flex items-center gap-2 text-stone-300 hover:text-[#FFA552] transition-colors text-sm"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
              </svg>
              @soma_restaurant_cafe
            </a>
          </div>

          <div className="text-xs text-stone-500">
            © {new Date().getFullYear()} SOMA Restaurant & Cafe. All rights reserved.
          </div>
        </div>
      </footer>

    </div>
  );
}