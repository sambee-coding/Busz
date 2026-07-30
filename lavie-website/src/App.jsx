import React, { useState, useEffect, useRef } from 'react';
import { 
  Phone, 
  MapPin, 
  Clock, 
  Star, 
  ChevronRight, 
  Menu as MenuIcon, 
  X, 
  Sparkles,
  CheckCircle2,
  Play,
  Pause,
  Briefcase,
  Send,
  ArrowUpRight
} from 'lucide-react';

export default function LaVieEnRose() {
  const [lang, setLang] = useState('en');
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState('all');
  const [playingVideo, setPlayingVideo] = useState({
    mainReel: true,
    reel2: true,
    reel3: true,
    reel4: true
  });

  // Table Reservation State
  const [reservation, setReservation] = useState({
    name: '',
    phone: '',
    guests: '2',
    date: '',
    time: '19:00',
    notes: ''
  });
  const [submitted, setSubmitted] = useState(false);

  // Careers Application Modal State
  const [careerModalOpen, setCareerModalOpen] = useState(false);
  const [selectedRole, setSelectedRole] = useState('');
  const [careerForm, setCareerForm] = useState({
    name: '',
    phone: '',
    experience: '',
    message: ''
  });
  const [careerSubmitted, setCareerSubmitted] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleVideo = (id) => {
    const video = document.getElementById(id);
    if (!video) return;
    if (video.paused) {
      const playPromise = video.play();
      if (playPromise !== undefined) {
        playPromise.catch((err) => console.log('Autoplay or play blocked:', err));
      }
    } else {
      video.pause();
    }
  };

  // WHATSAPP DIRECT RESERVATION HANDLER
  const handleReservationSubmit = (e) => {
    e.preventDefault();

    const whatsappNumber = "251995031695";

    const message = `Bonjour La Vie En Rose! 🌹\n\n` +
      `I would like to reserve a table:\n` +
      `• *Name:* ${reservation.name}\n` +
      `• *Phone:* ${reservation.phone}\n` +
      `• *Guests:* ${reservation.guests} ${reservation.guests === '1' ? 'Person' : 'People'}\n` +
      `• *Date:* ${reservation.date}\n` +
      `• *Time:* ${reservation.time}\n` +
      (reservation.notes ? `• *Special Notes:* ${reservation.notes}\n` : '') +
      `\nPlease confirm table availability. Thank you!`;

    const encodedMessage = encodeURIComponent(message);

    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);

    window.open(`https://wa.me/${whatsappNumber}?text=${encodedMessage}`, '_blank');
  };

  const handleCareerSubmit = (e) => {
    e.preventDefault();
    setCareerSubmitted(true);
    setTimeout(() => {
      setCareerSubmitted(false);
      setCareerModalOpen(false);
    }, 4000);
  };

  const openApplyModal = (roleTitle) => {
    setSelectedRole(roleTitle);
    setCareerModalOpen(true);
  };

  const content = {
    en: {
      nav: { story: "Our Story", menu: "Menu", videos: "Videos", gallery: "Gallery", reviews: "Reviews", locations: "Locations", careers: "Careers", reserve: "Book Table" },
      hero: {
        welcome: "Bienvenue",
        tagline: "Where Addis meets Paris — Bulbula & Bole Rwanda",
        desc: "An elegant sanctuary of fine dining, artisanal French pastries, and Italian classics nestled in the heart of Addis Ababa.",
        ctaMenu: "View Menu",
        ctaBook: "Book Table"
      },
      about: {
        tag: "Our Story",
        title: "A Little Piece of Paris in Addis Ababa",
        p1: "Tucked into the peaceful neighborhoods of Bulbula and Bole Rwanda, La Vie En Rose is where quiet elegance meets everyday comfort. Guests describe our space as peaceful and beautifully designed — a place to slow down over an all-day menu.",
        p2: "From morning croissants to evening pasta and steak, with fasting-friendly dishes woven in for every guest at the table.",
        point1: "Sun-lit terrace seating",
        point2: "Breakfast through dinner, every day",
        point3: "Fasting-friendly menu options"
      },
      menu: {
        tag: "Curated Offerings",
        title: "A Taste of the House",
        subtitle: "Artisanal recipes crafted with European culinary precision and local ingredients.",
        categories: { all: "All", breakfast: "Breakfast", mains: "Mains", fasting: "Fasting", drinks: "Drinks" }
      },
      videos: {
        tag: "Video Snapshots",
        title: "Experience the Atmosphere"
      },
      gallery: {
        tag: "Photo Gallery",
        title: "Snapshots of La Vie En Rose"
      },
      reviews: {
        tag: "Guest Testimonials",
        title: "Loved by Our Guests"
      },
      locations: {
        tag: "Our Spaces",
        title: "Visit Our Branches",
        subtitle: "Experience the La Vie En Rose atmosphere across Addis Ababa."
      },
      careers: {
        tag: "Join Our Team",
        title: "Career Opportunities",
        subtitle: "We are expanding! Passionate about hospitality, pastry arts, or Italian cuisine? Join us."
      },
      reserve: {
        tag: "Direct Reservations",
        title: "Reserve Your Table",
        subtitle: "Join us for breakfast, business lunches, or candlelit dinners."
      }
    },
    fr: {
      nav: { story: "Notre Histoire", menu: "Menu", videos: "Vidéos", gallery: "Galerie", reviews: "Avis", locations: "Adresses", careers: "Carrières", reserve: "Réserver" },
      hero: {
        welcome: "Bienvenue",
        tagline: "Là où Addis rencontre Paris — Bulbula & Bole Rwanda",
        desc: "Un sanctuaire élégant de cuisine raffinée, de pâtisseries françaises artisanales et de classiques italiens au cœur d'Addis-Abeba.",
        ctaMenu: "Voir le Menu",
        ctaBook: "Réserver"
      },
      about: {
        tag: "Notre Histoire",
        title: "Un Petit Coin de Paris à Addis-Abeba",
        p1: "Niché au cœur de Bulbula et Bole Rwanda, La Vie En Rose est le lieu où l'élégance discrète rencontre le confort quotidien. Nos clients décrivent notre espace comme un havre de paix.",
        p2: "Du croissant du matin aux pâtes et steaks du soir, avec des options de jeûne adaptées à chaque invité.",
        point1: "Terrasse ensoleillée",
        point2: "Du petit-déjeuner au dîner, tous les jours",
        point3: "Options de menu pour le jeûne"
      },
      menu: {
        tag: "Nos Propositions",
        title: "Un Goût de la Maison",
        subtitle: "Des recettes artisanales créées avec la précision culinaire européenne.",
        categories: { all: "Tous", breakfast: "Petit-Déjeuner", mains: "Plats Principaux", fasting: "Jeûne", drinks: "Boissons" }
      },
      videos: {
        tag: "Clips Vidéo",
        title: "Vivez L'Ambiance"
      },
      gallery: {
        tag: "Galerie Photos",
        title: "Aperçus de La Vie En Rose"
      },
      reviews: {
        tag: "Avis Clients",
        title: "Aimé par Nos Clients"
      },
      locations: {
        tag: "Nos Lieux",
        title: "Nos Établissements",
        subtitle: "Découvrez l'ambiance La Vie En Rose à travers Addis-Abeba."
      },
      careers: {
        tag: "Rejoignez-Nous",
        title: "Opportunités de Carrière",
        subtitle: "Passionné par l'hospitalité ou la gastronomie ? Postulez dès aujourd'hui."
      },
      reserve: {
        tag: "Réservations Directes",
        title: "Réservez Votre Table",
        subtitle: "Rejoignez-nous pour le petit-déjeuner, un déjeuner d'affaires ou un dîner romantique."
      }
    },
    am: {
      nav: { story: "ታሪካችን", menu: "የምግብ ዝርዝር", videos: "ቪዲዮዎች", gallery: "ማዕከለ-ስዕላት", reviews: "ግምገማዎች", locations: "ቅርንጫፎች", careers: "ሥራ ዕድል", reserve: "ቦታ ያስይዙ" },
      hero: {
        welcome: "እንኳን ደህና መጡ",
        tagline: "አዲስ ፓሪስን የሚያገኝበት — ቡልቡላ እና ቦሌ ሩዋንዳ",
        desc: "በአዲስ አበባ እምብርት ውስጥ የሚገኝ የፈረንሳይና የጣሊያን ውብ ጣዕሞችና ምቹ ከባቢ አየር።",
        ctaMenu: "የምግብ ዝርዝር ይመልከቱ",
        ctaBook: "ቦታ ያስይዙ"
      },
      about: {
        tag: "ታሪካችን",
        title: "በአዲስ አበባ ውስጥ ትንሽ ፓሪስ",
        p1: "በቡልቡላ እና ቦሌ ሩዋንዳ እምብርት ውስጥ የሚገኘው ላ ቪ አን ሮዝ ጸጥተኛ ውበት ከዕለት ተዕለት ምቾት ጋር የሚገናኝበት ቦታ ነው።",
        p2: "ከጠዋት ቁርስ እስከ እራት፣ የጾም አማራጮችን ጨምሮ ለሁሉም እንግዶች የተዘጋጀ።",
        point1: "በፀሐይ የተሞላ የውጭ መቀመጫ",
        point2: "ከቁርስ እስከ እራት፣ በየቀኑ",
        point3: "የጾም አማራጮች ያሉት የምግብ ዝርዝር"
      },
      menu: {
        tag: "የምግብ ዝርዝራችን",
        title: "የቤቱ ጣዕም",
        subtitle: "በጥንቃቄ የተዘጋጁ ልዩ የጣሊያንና የፈረንሳይ ምግቦች።",
        categories: { all: "ሁሉም", breakfast: "ቁርስ", mains: "ዋና ምግቦች", fasting: "የጾም", drinks: "መጠጦች" }
      },
      videos: {
        tag: "የቪዲዮ ቅንጥቦች",
        title: "ከባቢ አየሩን ይለማመዱ"
      },
      gallery: {
        tag: "የፎቶ ማዕከለ-ስዕላት",
        title: "የላ ቪ አን ሮዝ ምስሎች"
      },
      reviews: {
        tag: "ግምገማዎች",
        title: "በደንበኞቻችን የተወደደ"
      },
      locations: {
        tag: "ቦታዎቻችን",
        title: "ቅርንጫፎቻችንን ይጎብኙ",
        subtitle: "የላ ቪ አን ሮዝን ውብ ከባቢ አየር በአዲስ አበባ ይለማመዱ።"
      },
      careers: {
        tag: "የሥራ ዕድሎች",
        title: "እኛን ይቀላቀሉ",
        subtitle: "የእንግዳ ተቀባይነት ወይም የምግብ ዝግጅት ፍላጎት አለዎት? አሁኑኑ ያመልክቱ።"
      },
      reserve: {
        tag: "ቦታ ለማስያዝ",
        title: "ጠረጴዛዎን ያስይዙ",
        subtitle: "ለቁርስ፣ ለምሳ ወይም ለምሽት እራት ከእኛ ጋር ይሁኑ።"
      }
    }
  };

  const t = content[lang];

  const menuItems = [
    {
      id: 1,
      name: "Fettuccine Alfredo",
      category: "mains",
      price: "ETB 620",
      description: "Rich, silky, and consistently our guests' favorite pasta on the menu.",
      highlight: "Guest Favorite",
      image: "/assets/5983144676514532822_119.jpg"
    },
    {
      id: 2,
      name: "Avocado Toast & Eggs",
      category: "breakfast",
      price: "ETB 450",
      description: "A brunch favorite — fresh toasted sourdough, poached eggs, and avocado.",
      highlight: "Brunch Classic",
      image: "/assets/5983144676514532814_119.jpg"
    },
    {
      id: 3,
      name: "Croissant Egg Sandwich",
      category: "breakfast",
      price: "ETB 380",
      description: "Buttery, flaky french croissant filled with soft scrambled eggs and melted cheese.",
      highlight: "Parisian Bakery",
      image: "/assets/5983144676514532813_119.jpg"
    },
    {
      id: 4,
      name: "Spanish Specialty Latte",
      category: "drinks",
      price: "ETB 220",
      description: "Smooth single-origin espresso with sweetened condensed milk and silky foam.",
      highlight: "House Specialty",
      image: "/assets/5983144676514532815_119.jpg"
    },
    {
      id: 5,
      name: "Prime Steak Sandwich",
      category: "mains",
      price: "ETB 680",
      description: "Tender seared beef steak strips, caramelized onions, melted cheese, and garlic aioli.",
      highlight: "Hearty Choice",
      image: "/assets/5983144676514532818_119.jpg"
    },
    {
      id: 6,
      name: "Fasting Eggplant Caponata",
      category: "fasting",
      price: "ETB 420",
      description: "A rich Sicilian eggplant stew with capers, herbs, olive oil, and toasted artisanal bread.",
      highlight: "100% Fasting Friendly",
      image: "/assets/5983144676514532817_119.jpg"
    }
  ];

  const jobPostings = [
    {
      id: 1,
      title: "Senior Barista & Latte Artist",
      type: "Full-Time",
      experience: "2+ Years",
      desc: "Mastery over espresso extraction, steaming micro-foam, and creating memorable coffee experiences."
    },
    {
      id: 2,
      title: "Italian Line Cook",
      type: "Full-Time",
      experience: "3+ Years",
      desc: "Specializing in handcrafted fresh pasta, pan sauces, and authentic Italian culinary presentation."
    },
    {
      id: 3,
      title: "Head Host & Guest Relations",
      type: "Full-Time / Part-Time",
      experience: "1+ Year",
      desc: "Warm, professional individual to manage direct table reservations, greetings, and atmosphere."
    }
  ];

  const filteredMenu = activeCategory === 'all' 
    ? menuItems 
    : menuItems.filter(item => item.category === activeCategory);

  return (
    <div className="bg-[#FAF5F3] text-[#2D1B1E] font-sans antialiased selection:bg-[#B26D77] selection:text-white">
      
      {/* Navigation Bar */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-[#3D1A22]/95 backdrop-blur-md py-4 text-white shadow-2xl' : 'bg-gradient-to-b from-[#2D1B1E]/90 to-transparent py-6 text-white'
      }`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-9 h-9 rounded-full bg-[#B26D77]/20 border border-[#B26D77] flex items-center justify-center p-1.5 transition-transform group-hover:rotate-12">
              <svg viewBox="0 0 200 200" className="w-full h-full fill-current text-[#F0DFDC]">
                <circle cx="100" cy="100" r="20" />
                <path d="M100,100 C90,80 90,55 100,40 C110,55 110,80 100,100 Z" />
                <path d="M100,100 C90,80 90,55 100,40 C110,55 110,80 100,100 Z" transform="rotate(72 100 100)" />
                <path d="M100,100 C90,80 90,55 100,40 C110,55 110,80 100,100 Z" transform="rotate(144 100 100)" />
                <path d="M100,100 C90,80 90,55 100,40 C110,55 110,80 100,100 Z" transform="rotate(216 100 100)" />
                <path d="M100,100 C90,80 90,55 100,40 C110,55 110,80 100,100 Z" transform="rotate(288 100 100)" />
              </svg>
            </div>
            <div>
              <span className="text-2xl font-serif tracking-wider text-[#F0DFDC] block leading-none">La Vie En Rose</span>
              <span className="text-[10px] uppercase tracking-widest text-[#B26D77]">Addis Ababa</span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center space-x-6 text-xs font-medium uppercase tracking-widest">
            <a href="#about" className="hover:text-[#B26D77] transition-colors">{t.nav.story}</a>
            <a href="#menu" className="hover:text-[#B26D77] transition-colors">{t.nav.menu}</a>
            <a href="#videos" className="hover:text-[#B26D77] transition-colors">{t.nav.videos}</a>
            <a href="#gallery" className="hover:text-[#B26D77] transition-colors">{t.nav.gallery}</a>
            <a href="#locations" className="hover:text-[#B26D77] transition-colors">{t.nav.locations}</a>
            <a href="#careers" className="hover:text-[#B26D77] transition-colors">{t.nav.careers}</a>
            <a href="#reviews" className="hover:text-[#B26D77] transition-colors">{t.nav.reviews}</a>
          </div>

          <div className="hidden lg:flex items-center gap-4">
            <div className="flex items-center bg-white/10 rounded-full p-1 border border-white/20 text-xs">
              <button onClick={() => setLang('en')} className={`px-2.5 py-1 rounded-full transition-all ${lang === 'en' ? 'bg-[#B26D77] text-white font-bold' : 'text-stone-300'}`}>EN</button>
              <button onClick={() => setLang('fr')} className={`px-2.5 py-1 rounded-full transition-all ${lang === 'fr' ? 'bg-[#B26D77] text-white font-bold' : 'text-stone-300'}`}>FR</button>
              <button onClick={() => setLang('am')} className={`px-2.5 py-1 rounded-full transition-all ${lang === 'am' ? 'bg-[#B26D77] text-white font-bold' : 'text-stone-300'}`}>አማ</button>
            </div>

            <a 
              href="#reserve" 
              className="bg-[#B26D77] hover:bg-[#96545E] text-white font-semibold px-5 py-2.5 rounded-full text-xs uppercase tracking-wider transition-all transform hover:scale-105 shadow-lg"
            >
              {t.nav.reserve}
            </a>
          </div>

          <button 
            className="lg:hidden text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X /> : <MenuIcon />}
          </button>
        </div>

        {/* Mobile Dropdown Nav Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#2D1B1E] px-6 py-6 border-b border-[#3D1A22] space-y-4 text-center">
            <a href="#about" onClick={() => setMobileMenuOpen(false)} className="block text-stone-300 hover:text-[#B26D77]">{t.nav.story}</a>
            <a href="#menu" onClick={() => setMobileMenuOpen(false)} className="block text-stone-300 hover:text-[#B26D77]">{t.nav.menu}</a>
            <a href="#videos" onClick={() => setMobileMenuOpen(false)} className="block text-stone-300 hover:text-[#B26D77]">{t.nav.videos}</a>
            <a href="#gallery" onClick={() => setMobileMenuOpen(false)} className="block text-stone-300 hover:text-[#B26D77]">{t.nav.gallery}</a>
            <a href="#locations" onClick={() => setMobileMenuOpen(false)} className="block text-stone-300 hover:text-[#B26D77]">{t.nav.locations}</a>
            <a href="#careers" onClick={() => setMobileMenuOpen(false)} className="block text-stone-300 hover:text-[#B26D77]">{t.nav.careers}</a>
            <a href="#reserve" onClick={() => setMobileMenuOpen(false)} className="block text-stone-300 hover:text-[#B26D77]">{t.nav.reserve}</a>
            
            <div className="flex justify-center gap-2 pt-2">
              <button onClick={() => setLang('en')} className={`px-3 py-1 rounded-full text-xs ${lang === 'en' ? 'bg-[#B26D77] text-white' : 'bg-stone-800 text-stone-300'}`}>EN</button>
              <button onClick={() => setLang('fr')} className={`px-3 py-1 rounded-full text-xs ${lang === 'fr' ? 'bg-[#B26D77] text-white' : 'bg-stone-800 text-stone-300'}`}>FR</button>
              <button onClick={() => setLang('am')} className={`px-3 py-1 rounded-full text-xs ${lang === 'am' ? 'bg-[#B26D77] text-white' : 'bg-stone-800 text-stone-300'}`}>አማ</button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-[#2D1B1E] text-white overflow-hidden pt-28 pb-24">
        <div className="absolute inset-0 z-0 opacity-40">
          <img 
            src="/assets/5983144676514532822_119.jpg" 
            alt="La Vie En Rose Atmosphere" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#2D1B1E] via-[#2D1B1E]/75 to-[#2D1B1E]/40" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center space-y-8 my-auto">
          <div className="inline-flex items-center gap-2 bg-[#B26D77]/20 border border-[#B26D77]/40 rounded-full px-5 py-2 backdrop-blur-md">
            <Sparkles className="w-4 h-4 text-[#F0DFDC]" />
            <span className="text-xs uppercase font-semibold text-[#F0DFDC] tracking-widest">{t.hero.welcome}</span>
          </div>

          <h1 className="text-5xl md:text-8xl font-serif font-light leading-tight tracking-wide">
            La Vie En Rose
          </h1>

          <p className="text-lg md:text-2xl font-serif italic text-[#F0DFDC]">
            "{t.hero.tagline}"
          </p>

          <p className="text-stone-300 max-w-2xl mx-auto text-sm md:text-base font-light leading-relaxed">
            {t.hero.desc}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <a 
              href="#reserve" 
              className="w-full sm:w-auto bg-[#B26D77] hover:bg-[#96545E] text-white font-bold px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105 shadow-2xl flex items-center justify-center gap-2"
            >
              {t.hero.ctaBook} <ChevronRight className="w-4 h-4" />
            </a>
            <a 
              href="#menu" 
              className="w-full sm:w-auto bg-white/10 hover:bg-white/20 text-white border border-white/20 font-medium px-8 py-4 rounded-full transition-all backdrop-blur-md flex items-center justify-center"
            >
              {t.hero.ctaMenu}
            </a>
          </div>

          {/* Social Proof Strip */}
          <div className="pt-12 mb-12 md:mb-16 grid grid-cols-2 md:grid-cols-3 gap-6 border-t border-white/10 max-w-3xl mx-auto text-left">
            <div className="flex items-center gap-3">
              <div className="bg-[#B26D77]/20 p-2.5 rounded-full text-[#F0DFDC]">
                <Star className="w-5 h-5 fill-current" />
              </div>
              <div>
                <p className="text-lg font-bold">4.7 Star Rated</p>
                <p className="text-xs text-stone-400">45 Verified Google Reviews</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="bg-[#B26D77]/20 p-2.5 rounded-full text-[#F0DFDC]">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <p className="text-lg font-bold">Bulbula & Bole</p>
                <p className="text-xs text-stone-400">Prime Locations in Addis</p>
              </div>
            </div>
            <div className="col-span-2 md:col-span-1 flex items-center gap-3">
              <div className="bg-[#B26D77]/20 p-2.5 rounded-full text-[#F0DFDC]">
                <Clock className="w-5 h-5" />
              </div>
              <div>
                <p className="text-lg font-bold">Open Daily</p>
                <p className="text-xs text-stone-400">Breakfast to Dinner</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[4/5] border border-[#B26D77]/20">
              <OptimizedImage 
                src="/assets/5983144676514532820_119.jpg" 
                alt="La Vie En Rose Atmosphere" 
                priority={true}
                containerClassName="w-full h-full"
              />
            </div>
            <div className="absolute -bottom-8 -right-8 bg-white p-6 rounded-2xl shadow-xl border border-stone-100 max-w-xs hidden sm:block">
              <div className="flex items-center gap-1 text-[#B26D77] mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>
              <p className="text-sm font-serif italic text-stone-800">
                "Roomy, light-filled space with modern interiors. The coffee is great and breakfast is a hearty treat."
              </p>
              <p className="text-xs text-stone-400 mt-2">— Verified Google Reviewer</p>
            </div>
          </div>

          <div className="space-y-6">
            <span className="text-xs font-bold uppercase tracking-widest text-[#B26D77]">{t.about.tag}</span>
            <h2 className="text-4xl md:text-5xl font-serif leading-tight text-[#2D1B1E]">
              {t.about.title}
            </h2>
            <p className="text-stone-600 leading-relaxed font-light">
              {t.about.p1}
            </p>
            <p className="text-stone-600 leading-relaxed font-light">
              {t.about.p2}
            </p>

            <div className="space-y-3 pt-4">
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#B26D77] shrink-0" />
                <span className="text-sm font-medium text-stone-800">{t.about.point1}</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#B26D77] shrink-0" />
                <span className="text-sm font-medium text-stone-800">{t.about.point2}</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#B26D77] shrink-0" />
                <span className="text-sm font-medium text-stone-800">{t.about.point3}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Menu Section */}
      <section id="menu" className="py-24 bg-white border-y border-stone-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto space-y-4 mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-[#B26D77]">{t.menu.tag}</span>
            <h2 className="text-4xl font-serif text-[#2D1B1E]">{t.menu.title}</h2>
            <p className="text-stone-500 font-light">{t.menu.subtitle}</p>

            <div className="flex flex-wrap justify-center gap-2 pt-6">
              {['all', 'breakfast', 'mains', 'fasting', 'drinks'].map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-5 py-2 rounded-full text-xs font-semibold uppercase tracking-wider transition-all ${
                    activeCategory === cat 
                      ? 'bg-[#2D1B1E] text-white shadow-md' 
                      : 'bg-stone-100 text-stone-600 hover:bg-stone-200'
                  }`}
                >
                  {t.menu.categories ? t.menu.categories[cat] : cat}
                </button>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredMenu.map((item) => (
              <div key={item.id} className="bg-[#FAF5F3] rounded-2xl overflow-hidden group hover:shadow-xl transition-all duration-300 border border-stone-200/60 flex flex-col justify-between">
                <div>
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <OptimizedImage 
                      src={item.image} 
                      alt={item.name} 
                      className="group-hover:scale-105 transition-transform duration-500"
                      containerClassName="w-full h-full"
                    />
                    <span className="absolute top-3 right-3 z-20 bg-[#2D1B1E]/90 backdrop-blur-md text-[#F0DFDC] text-[10px] uppercase font-bold px-3 py-1 rounded-full">
                      {item.highlight}
                    </span>
                  </div>
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-serif font-bold text-xl text-[#2D1B1E]">{item.name}</h3>
                      <span className="font-semibold text-sm text-[#B26D77] whitespace-nowrap ml-2">{item.price}</span>
                    </div>
                    <p className="text-stone-600 text-xs leading-relaxed font-light">
                      {item.description}
                    </p>
                  </div>
                </div>
                <div className="p-6 pt-0">
                  <a href="#reserve" className="w-full block text-center py-2.5 text-xs font-semibold text-[#2D1B1E] border border-[#2D1B1E]/20 rounded-xl hover:bg-[#2D1B1E] hover:text-white transition-colors uppercase tracking-wider">
                    {t.nav.reserve}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Locations & Branches Showcase */}
      <section id="locations" className="py-24 bg-[#FAF5F3] border-b border-stone-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto space-y-4 mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-[#B26D77]">{t.locations.tag}</span>
            <h2 className="text-4xl font-serif text-[#2D1B1E]">{t.locations.title}</h2>
            <p className="text-stone-600 font-light">{t.locations.subtitle}</p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            
            {/* Branch 1: Bulbula Main */}
            <div className="bg-white rounded-3xl p-8 shadow-xl border border-stone-200/80 flex flex-col justify-between space-y-6">
              <div>
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <span className="text-xs font-bold uppercase tracking-widest text-[#B26D77]">Main Flagship</span>
                    <h3 className="text-2xl font-serif text-[#2D1B1E] font-bold">Bulbula Branch</h3>
                  </div>
                  <span className="bg-emerald-100 text-emerald-800 text-[10px] font-bold uppercase px-3 py-1 rounded-full">Open Today</span>
                </div>

                <p className="text-xs text-stone-600 font-light leading-relaxed mb-6">
                  Tucked in the peaceful streets of Bulbula, offering sun-lit outdoor balcony terrace seating, full French-Italian dining, and specialty coffee roasting.
                </p>

                <div className="space-y-3 text-xs text-stone-700">
                  <div className="flex items-center gap-3">
                    <MapPin className="w-4 h-4 text-[#B26D77]" />
                    <span>Bulbula, Addis Ababa (Near Maria Mazoriya)</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Clock className="w-4 h-4 text-[#B26D77]" />
                    <span>Open Daily: 7:00 AM – 10:30 PM</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="w-4 h-4 text-[#B26D77]" />
                    <span>099 503 1695</span>
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                <a 
                  href="https://maps.google.com/maps?q=Bulbula%2C%20Addis%20Ababa" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#B26D77] hover:underline"
                >
                  Open in Google Maps <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
                <div className="rounded-2xl overflow-hidden h-48 border border-stone-200">
                  <iframe 
                    title="Bulbula Location Map"
                    src="https://maps.google.com/maps?q=Bulbula%2C%20Addis%20Ababa&hl=en&z=15&output=embed" 
                    className="w-full h-full border-0" 
                    allowFullScreen="" 
                    loading="lazy" 
                  />
                </div>
              </div>
            </div>

            {/* Branch 2: Bole Rwanda Branch */}
            <div className="bg-white rounded-3xl p-8 shadow-xl border border-stone-200/80 flex flex-col justify-between space-y-6">
              <div>
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <span className="text-xs font-bold uppercase tracking-widest text-[#B26D77]">Bole Branch</span>
                    <h3 className="text-2xl font-serif text-[#2D1B1E] font-bold">Bole Rwanda Branch</h3>
                  </div>
                  <span className="bg-emerald-100 text-emerald-800 text-[10px] font-bold uppercase px-3 py-1 rounded-full">Open Today</span>
                </div>

                <p className="text-xs text-stone-600 font-light leading-relaxed mb-6">
                  Our premier destination in Bole Rwanda area, delivering authentic French pastry craft, Italian espresso specialties, and cozy indoor dining.
                </p>

                <div className="space-y-3 text-xs text-stone-700">
                  <div className="flex items-center gap-3">
                    <MapPin className="w-4 h-4 text-[#B26D77]" />
                    <span>Bole Rwanda Area, Addis Ababa</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Clock className="w-4 h-4 text-[#B26D77]" />
                    <span>Open Daily: 7:00 AM – 10:30 PM</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="w-4 h-4 text-[#B26D77]" />
                    <span>099 503 1695</span>
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                <a 
                  href="https://www.google.com/maps/search/la+vie+en+rose+addis/@8.9900905,38.4738291,11z?entry=ttu&g_ep=EgoyMDI2MDcyNy4wIKXMDSoASAFQAw%3D%3D" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#B26D77] hover:underline"
                >
                  Open Location Link <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
                <div className="rounded-2xl overflow-hidden h-48 border border-stone-200">
                  <iframe 
                    title="Bole Rwanda Branch Location Map"
                    src="https://maps.google.com/maps?q=8.9900905,38.4738291&hl=en&z=14&output=embed" 
                    className="w-full h-full border-0" 
                    allowFullScreen="" 
                    loading="lazy" 
                  />
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Careers & Open Hiring Roles */}
      <section id="careers" className="py-24 bg-[#2D1B1E] text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto space-y-4 mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-[#B26D77]">{t.careers.tag}</span>
            <h2 className="text-4xl font-serif">{t.careers.title}</h2>
            <p className="text-stone-300 font-light text-sm">{t.careers.subtitle}</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {jobPostings.map((job) => (
              <div key={job.id} className="bg-white/5 p-8 rounded-3xl border border-white/10 backdrop-blur-md flex flex-col justify-between space-y-6 hover:border-[#B26D77]/50 transition-all">
                <div>
                  <div className="flex justify-between items-center mb-4">
                    <span className="bg-[#B26D77]/30 text-[#F0DFDC] text-[10px] uppercase font-bold px-3 py-1 rounded-full">{job.type}</span>
                    <span className="text-xs text-stone-400 flex items-center gap-1"><Briefcase className="w-3.5 h-3.5 text-[#B26D77]" /> {job.experience}</span>
                  </div>
                  <h3 className="text-xl font-serif font-bold text-[#F0DFDC] mb-2">{job.title}</h3>
                  <p className="text-xs text-stone-300 leading-relaxed font-light">{job.desc}</p>
                </div>

                <button 
                  onClick={() => openApplyModal(job.title)}
                  className="w-full bg-[#B26D77] hover:bg-[#96545E] text-white py-3 rounded-xl text-xs uppercase font-bold tracking-wider transition-all flex items-center justify-center gap-2"
                >
                  Apply For Role <Send className="w-3.5 h-3.5" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Reels Section */}
      <section id="videos" className="py-24 bg-[#2D1B1E] text-white border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto space-y-4 mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-[#B26D77]">{t.videos.tag}</span>
            <h2 className="text-4xl font-serif">{t.videos.title}</h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { id: 'mainReel', title: 'Dining & Atmosphere', src: '/assets/5983144676054539097.mp4', poster: '/assets/5983144676514532818_119.jpg' },
              { id: 'reel2', title: 'Craft Drinks & Cocktails', src: '/assets/5983144676054539099.mp4', poster: '/assets/5983144676514532823_119.jpg' },
              { id: 'reel3', title: 'Artisanal Bakery & Coffee', src: '/assets/5983144676054539098.mp4', poster: '/assets/5983144676514532823_119.jpg' },
              { id: 'reel4', title: 'Morning Brunch Moments', src: '/assets/5983144676054539096.mp4', poster: '/assets/5983144676514532821_119.jpg' },
            ].map((reel) => (
              <VideoReelCard key={reel.id} reel={reel} />
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-24 max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto space-y-4 mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-[#B26D77]">{t.gallery.tag}</span>
          <h2 className="text-4xl font-serif text-[#2D1B1E]">{t.gallery.title}</h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {[
            { img: '/assets/5983144676514532822_119.jpg', caption: 'Baked Lasagna Specialty' },
            { img: '/assets/5983144676514532820_119.jpg', caption: 'Savory Meatballs in Sauce' },
            { img: '/assets/5983144676514532818_119.jpg', caption: 'Creamy Mushroom Steak & Rice' },
            { img: '/assets/5983144676514532817_119.jpg', caption: 'Avocado Wrap & Crispy Fries' },
            { img: '/assets/5983144676514532812_119.jpg', caption: 'Fresh Basil Pesto Pasta' },
            { img: '/assets/5983144676514532814_119.jpg', caption: 'Avocado & Eggs Benedict' },
            { img: '/assets/5983144676514532813_119.jpg', caption: 'Traditional Breakfast Platter' },
            { img: '/assets/5983144676514532815_119.jpg', caption: 'Refreshing Mint Mocktail' },
            { img: '/assets/5983144676514532816_119.jpg', caption: 'Grilled Chicken & Seasoned Rice' }
          ].map((item, idx) => (
            <div key={idx} className="relative rounded-2xl overflow-hidden group shadow-lg aspect-square">
              <OptimizedImage 
                src={item.img} 
                alt={item.caption} 
                className="group-hover:scale-105 transition-transform duration-500"
                containerClassName="w-full h-full"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6 z-20">
                <span className="text-white text-xs uppercase font-semibold tracking-wider">{item.caption}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Reviews Section */}
      <section id="reviews" className="py-24 bg-[#2D1B1E] text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto space-y-4 mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-[#B26D77]">{t.reviews.tag}</span>
            <h2 className="text-4xl font-serif">{t.reviews.title}</h2>
            <div className="inline-flex items-center gap-2 bg-white/10 px-4 py-1.5 rounded-full text-xs font-semibold text-[#F0DFDC] border border-white/20">
              <Star className="w-4 h-4 fill-current text-[#B26D77]" /> 4.7 out of 5 · 45 Google Reviews
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              "One of the best spots for Italian food in the area — the interior is beautifully designed, stylish, and comfortable.",
              "A permanent stop on our route — it earns that spot every single time.",
              "Roomy, light-filled space with modern interiors. The coffee is great and breakfast is a hearty treat."
            ].map((review, i) => (
              <div key={i} className="bg-white/5 p-8 rounded-3xl border border-white/10 backdrop-blur-md flex flex-col justify-between space-y-6">
                <div className="flex text-[#B26D77] gap-1">
                  {[...Array(5)].map((_, star) => (
                    <Star key={star} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                <p className="font-serif italic text-stone-300 text-sm leading-relaxed">"{review}"</p>
                <p className="text-xs uppercase font-semibold text-stone-400 tracking-wider">— Verified Google Guest</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Table Reservation Form */}
      <section id="reserve" className="py-24 max-w-7xl mx-auto px-6">
        <div className="bg-[#2D1B1E] text-white rounded-3xl overflow-hidden shadow-2xl grid lg:grid-cols-12 border border-[#B26D77]/20">
          
          <div className="lg:col-span-5 p-8 lg:p-12 bg-gradient-to-br from-[#2D1B1E] to-stone-900 flex flex-col justify-between space-y-8">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#B26D77]">{t.reserve.tag}</span>
              <h2 className="text-3xl lg:text-4xl font-serif font-light mt-2 mb-4">{t.reserve.title}</h2>
              <p className="text-stone-400 text-sm font-light leading-relaxed">
                {t.reserve.subtitle}
              </p>
            </div>

            <div className="space-y-4 text-sm text-stone-300">
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-[#B26D77]" />
                <span>Bulbula & Bole Rwanda Branches, Addis Ababa</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-[#B26D77]" />
                <span>099 503 1695</span>
              </div>
              <div className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-[#B26D77]" />
                <span>Open Daily: Breakfast to Dinner</span>
              </div>
            </div>

            <div className="pt-6 border-t border-stone-800">
              <p className="text-xs text-stone-500">Need immediate assistance or private events? Call us directly.</p>
            </div>
          </div>

          <div className="lg:col-span-7 p-8 lg:p-12 bg-white text-stone-900">
            {submitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center space-y-4 py-12">
                <div className="w-16 h-16 bg-rose-100 text-[#B26D77] rounded-full flex items-center justify-center">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-serif font-bold">Reservation Received!</h3>
                <p className="text-stone-600 max-w-md text-sm">
                  Thank you for choosing La Vie En Rose. We have opened WhatsApp to confirm your table details directly with our team.
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
                      placeholder="e.g. Marie Dupont" 
                      value={reservation.name}
                      onChange={(e) => setReservation({...reservation, name: e.target.value})}
                      className="w-full bg-[#FAF5F3] border border-stone-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#B26D77]"
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
                      className="w-full bg-[#FAF5F3] border border-stone-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#B26D77]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div>
                    <label className="block text-xs font-bold uppercase text-stone-600 mb-2">Guests</label>
                    <select 
                      value={reservation.guests}
                      onChange={(e) => setReservation({...reservation, guests: e.target.value})}
                      className="w-full bg-[#FAF5F3] border border-stone-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#B26D77]"
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
                      className="w-full bg-[#FAF5F3] border border-stone-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#B26D77]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase text-stone-600 mb-2">Time</label>
                    <input 
                      type="time" 
                      required 
                      value={reservation.time}
                      onChange={(e) => setReservation({...reservation, time: e.target.value})}
                      className="w-full bg-[#FAF5F3] border border-stone-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#B26D77]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase text-stone-600 mb-2">Special Requests (Optional)</label>
                  <textarea 
                    rows="3" 
                    placeholder="Sun-lit terrace preference, dietary restrictions, birthday notes..." 
                    value={reservation.notes}
                    onChange={(e) => setReservation({...reservation, notes: e.target.value})}
                    className="w-full bg-[#FAF5F3] border border-stone-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#B26D77]"
                  ></textarea>
                </div>

                <button 
                  type="submit" 
                  className="w-full bg-[#B26D77] hover:bg-[#96545E] text-white font-bold py-4 rounded-xl transition-all shadow-md uppercase tracking-wider text-xs flex items-center justify-center gap-2"
                >
                  Send Table Booking via WhatsApp 💬
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Careers Application Modal */}
      {careerModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm">
          <div className="bg-white text-stone-900 rounded-3xl p-6 sm:p-8 max-w-lg w-full max-h-[90vh] overflow-y-auto relative shadow-2xl space-y-6">
            <button 
              onClick={() => setCareerModalOpen(false)}
              className="absolute top-6 right-6 text-stone-400 hover:text-stone-900"
            >
              <X className="w-5 h-5" />
            </button>

            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#B26D77]">Apply Now</span>
              <h3 className="text-2xl font-serif font-bold text-[#2D1B1E]">{selectedRole}</h3>
              <p className="text-xs text-stone-500 mt-1">Submit your details and our management team will reach out to you.</p>
            </div>

            {careerSubmitted ? (
              <div className="py-8 text-center space-y-3">
                <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto" />
                <h4 className="text-lg font-bold">Application Received!</h4>
                <p className="text-xs text-stone-600">Thank you for your interest in joining La Vie En Rose.</p>
              </div>
            ) : (
              <form onSubmit={handleCareerSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-bold uppercase text-stone-600 mb-1">Full Name</label>
                  <input 
                    type="text" 
                    required 
                    placeholder="Your Full Name"
                    value={careerForm.name}
                    onChange={(e) => setCareerForm({...careerForm, name: e.target.value})}
                    className="w-full bg-[#FAF5F3] border border-stone-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#B26D77]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase text-stone-600 mb-1">Phone Number</label>
                  <input 
                    type="tel" 
                    required 
                    placeholder="0911..."
                    value={careerForm.phone}
                    onChange={(e) => setCareerForm({...careerForm, phone: e.target.value})}
                    className="w-full bg-[#FAF5F3] border border-stone-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#B26D77]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase text-stone-600 mb-1">Years of Experience</label>
                  <input 
                    type="text" 
                    required 
                    placeholder="e.g. 2 years at specialty cafe"
                    value={careerForm.experience}
                    onChange={(e) => setCareerForm({...careerForm, experience: e.target.value})}
                    className="w-full bg-[#FAF5F3] border border-stone-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#B26D77]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase text-stone-600 mb-1">Short Introduction / Notes</label>
                  <textarea 
                    rows="3" 
                    placeholder="Tell us about yourself..."
                    value={careerForm.message}
                    onChange={(e) => setCareerForm({...careerForm, message: e.target.value})}
                    className="w-full bg-[#FAF5F3] border border-stone-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#B26D77]"
                  ></textarea>
                </div>

                <button 
                  type="submit" 
                  className="w-full bg-[#B26D77] hover:bg-[#96545E] text-white font-bold py-3.5 rounded-xl text-xs uppercase tracking-wider transition-all"
                >
                  Submit Application
                </button>
              </form>
            )}
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="bg-[#2D1B1E] text-white py-12 border-t border-[#3D1A22]">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <div>
            <span className="text-2xl font-serif text-[#F0DFDC] block">La Vie En Rose</span>
            <p className="text-xs text-stone-400 mt-1">Where Addis meets Paris — Bulbula & Bole Rwanda</p>
          </div>

          <div className="text-xs text-stone-500">
            © {new Date().getFullYear()} La Vie En Rose. All rights reserved.
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Quick-Contact */}
      <a 
        href="https://wa.me/251995031695" 
        target="_blank" 
        rel="noreferrer" 
        className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform flex items-center justify-center"
        aria-label="WhatsApp Chat"
      >
        💬
      </a>

    </div>
  );
}

function VideoReelCard({ reel }) {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    video.muted = true;
    video.defaultMuted = true;

    const playPromise = video.play();
    if (playPromise !== undefined) {
      playPromise.catch((err) => {
        console.log('Autoplay deferred:', err);
        setIsPlaying(false);
      });
    }
  }, []);

  const togglePlay = () => {
    const video = videoRef.current;
    if (!video) return;

    if (video.paused) {
      video.play().then(() => setIsPlaying(true)).catch(() => {});
    } else {
      video.pause();
      setIsPlaying(false);
    }
  };

  return (
    <div 
      onClick={togglePlay}
      className="relative rounded-2xl overflow-hidden bg-stone-900 shadow-xl group aspect-[9/16] cursor-pointer"
    >
      <video 
        ref={videoRef}
        id={reel.id}
        src={reel.src}
        autoPlay 
        muted 
        defaultMuted
        loop 
        playsInline 
        preload="auto"
        poster={reel.poster}
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
        className="w-full h-full object-cover"
      >
        <source src={reel.src} type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex flex-col justify-end p-6 pointer-events-none">
        <div className="flex justify-between items-center w-full">
          <p className="text-sm font-semibold text-white">{reel.title}</p>
          <button 
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              togglePlay();
            }} 
            className="bg-[#B26D77] hover:bg-[#96545E] backdrop-blur-md p-3 rounded-full text-white shadow-lg transition-all pointer-events-auto flex items-center justify-center"
          >
            {isPlaying ? <Pause className="w-4 h-4 fill-current" /> : <Play className="w-4 h-4 fill-current ml-0.5" />}
          </button>
        </div>
      </div>
    </div>
  );
}

function OptimizedImage({ src, alt, className = '', priority = false, containerClassName = '', ...props }) {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className={`relative overflow-hidden bg-stone-200 ${containerClassName}`}>
      {!isLoaded && (
        <div className="absolute inset-0 bg-stone-200 animate-pulse z-10" />
      )}
      <img
        src={src}
        alt={alt}
        loading={priority ? 'eager' : 'lazy'}
        decoding="async"
        fetchPriority={priority ? 'high' : 'auto'}
        onLoad={() => setIsLoaded(true)}
        className={`w-full h-full object-cover transition-opacity duration-500 ${
          isLoaded ? 'opacity-100' : 'opacity-0'
        } ${className}`}
        {...props}
      />
    </div>
  );
}