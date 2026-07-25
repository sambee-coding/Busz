
import React, { useState, useEffect } from 'react';
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
  Pause
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

  const toggleVideo = (id) => {
    const video = document.getElementById(id);
    if (!video) return;
    if (video.paused) {
      video.play();
      setPlayingVideo((prev) => ({ ...prev, [id]: true }));
    } else {
      video.pause();
      setPlayingVideo((prev) => ({ ...prev, [id]: false }));
    }
  };

  const handleReservationSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  const content = {
    en: {
      nav: { story: "Our Story", menu: "Menu", videos: "Videos", gallery: "Gallery", reviews: "Reviews", reserve: "Book Table" },
      hero: {
        welcome: "Bienvenue",
        tagline: "Where Addis meets Paris — Bulbula",
        desc: "An elegant sanctuary of fine dining, artisanal French pastries, and Italian classics nestled in the heart of Addis Ababa.",
        ctaMenu: "View Menu",
        ctaBook: "Book Table"
      },
      about: {
        tag: "Our Story",
        title: "A Little Piece of Paris in Bulbula",
        p1: "Tucked into the heart of Bulbula, La Vie En Rose is where quiet elegance meets everyday comfort. Guests describe our space as peaceful and beautifully designed — a place to slow down over an all-day menu.",
        p2: "From morning croissants to evening pasta and steak, with fasting-friendly dishes woven in for every guest at the table.",
        point1: "Sun-lit terrace seating",
        point2: "Breakfast through dinner, every day",
        point3: "Fasting-friendly menu options"
      },
      menu: {
        tag: "Curated Offerings",
        title: "A Taste of the House",
        subtitle: "Artisanal recipes crafted with European culinary precision and local ingredients."
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
      reserve: {
        tag: "Direct Reservations",
        title: "Reserve Your Table",
        subtitle: "Join us for breakfast, business lunches, or candlelit dinners."
      }
    },
    fr: {
      nav: { story: "Notre Histoire", menu: "Menu", videos: "Vidéos", gallery: "Galerie", reviews: "Avis", reserve: "Réserver" },
      hero: {
        welcome: "Bienvenue",
        tagline: "Là où Addis rencontre Paris — Bulbula",
        desc: "Un sanctuaire élégant de cuisine raffinée, de pâtisseries françaises artisanales et de classiques italiens au cœur d'Addis-Abeba.",
        ctaMenu: "Voir le Menu",
        ctaBook: "Réserver"
      },
      about: {
        tag: "Notre Histoire",
        title: "Un Petit Coin de Paris à Bulbula",
        p1: "Niché au cœur de Bulbula, La Vie En Rose est le lieu où l'élégance discrète rencontre le confort quotidien. Nos clients décrivent notre espace comme un havre de paix.",
        p2: "Du croissant du matin aux pâtes et steaks du soir, avec des options de jeûne adaptées à chaque invité.",
        point1: "Terrasse ensoleillée",
        point2: "Du petit-déjeuner au dîner, tous les jours",
        point3: "Options de menu pour le jeûne"
      },
      menu: {
        tag: "Nos Propositions",
        title: "Un Goût de la Maison",
        subtitle: "Des recettes artisanales créées avec la précision culinaire européenne."
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
      reserve: {
        tag: "Réservations Directes",
        title: "Réservez Votre Table",
        subtitle: "Rejoignez-nous pour le petit-déjeuner, un déjeuner d'affaires ou un dîner romantique."
      }
    },
    am: {
      nav: { story: "ታሪካችን", menu: "ምናሌ", videos: "ቪዲዮዎች", gallery: "ማዕከለ-ስዕላት", reviews: "ግምገማዎች", reserve: "ቦታ ያስይዙ" },
      hero: {
        welcome: "እንኳን ደህና መጡ",
        tagline: "አዲስ ፓሪስን የሚያገኝበት — ቡልቡላ",
        desc: "በአዲስ አበባ እምብርት ውስጥ የሚገኝ የፈረንሳይና የጣሊያን ውብ ጣዕሞችና ምቹ ከባቢ አየር።",
        ctaMenu: "ምናሌ ይመልከቱ",
        ctaBook: "ቦታ ያስይዙ"
      },
      about: {
        tag: "ታሪካችን",
        title: "በቡልቡላ ውስጥ ትንሽ ፓሪስ",
        p1: "በቡልቡላ እምብርት ውስጥ የሚገኘው ላ ቪ አን ሮዝ ጸጥተኛ ውበት ከዕለት ተዕለት ምቾት ጋር የሚገናኝበት ቦታ ነው።",
        p2: "ከጠዋት ቁርስ እስከ እራት፣ የጾም አማራጮችን ጨምሮ ለሁሉም እንግዶች የተዘጋጀ።",
        point1: "በፀሐይ የተሞላ የውጭ መቀመጫ",
        point2: "ከቁርስ እስከ እራት፣ በየቀኑ",
        point3: "የጾም አማራጮች ያሉት ምናሌ"
      },
      menu: {
        tag: "የእኛ ምናሌ",
        title: "የቤቱ ጣዕም",
        subtitle: "በጥንቃቄ የተዘጋጁ ልዩ የጣሊያንና የፈረንሳይ ምግቦች።"
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

          {/* Desktop Links */}
          <div className="hidden md:flex items-center space-x-8 text-xs font-medium uppercase tracking-widest">
            <a href="#about" className="hover:text-[#B26D77] transition-colors">{t.nav.story}</a>
            <a href="#menu" className="hover:text-[#B26D77] transition-colors">{t.nav.menu}</a>
            <a href="#videos" className="hover:text-[#B26D77] transition-colors">{t.nav.videos}</a>
            <a href="#gallery" className="hover:text-[#B26D77] transition-colors">{t.nav.gallery}</a>
            <a href="#reviews" className="hover:text-[#B26D77] transition-colors">{t.nav.reviews}</a>
          </div>

          <div className="hidden md:flex items-center gap-4">
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
            className="md:hidden text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X /> : <MenuIcon />}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden bg-[#2D1B1E] px-6 py-6 border-b border-[#3D1A22] space-y-4 text-center">
            <a href="#about" onClick={() => setMobileMenuOpen(false)} className="block text-stone-300 hover:text-[#B26D77]">{t.nav.story}</a>
            <a href="#menu" onClick={() => setMobileMenuOpen(false)} className="block text-stone-300 hover:text-[#B26D77]">{t.nav.menu}</a>
            <a href="#videos" onClick={() => setMobileMenuOpen(false)} className="block text-stone-300 hover:text-[#B26D77]">{t.nav.videos}</a>
            <a href="#gallery" onClick={() => setMobileMenuOpen(false)} className="block text-stone-300 hover:text-[#B26D77]">{t.nav.gallery}</a>
            <a href="#reserve" onClick={() => setMobileMenuOpen(false)} className="block text-stone-300 hover:text-[#B26D77]">{t.nav.reserve}</a>
            
            <div className="flex justify-center gap-2 pt-2">
              <button onClick={() => setLang('en')} className={`px-3 py-1 rounded-full text-xs ${lang === 'en' ? 'bg-[#B26D77] text-white' : 'bg-stone-800 text-stone-300'}`}>EN</button>
              <button onClick={() => setLang('fr')} className={`px-3 py-1 rounded-full text-xs ${lang === 'fr' ? 'bg-[#B26D77] text-white' : 'bg-stone-800 text-stone-300'}`}>FR</button>
              <button onClick={() => setLang('am')} className={`px-3 py-1 rounded-full text-xs ${lang === 'am' ? 'bg-[#B26D77] text-white' : 'bg-stone-800 text-stone-300'}`}>አማ</button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section with Local Hero Asset Overlay */}
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
                <p className="text-lg font-bold">Bulbula, Addis</p>
                <p className="text-xs text-stone-400">Quiet & Peaceful Location</p>
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
              <img 
                src="/assets/5983144676514532820_119.jpg" 
                alt="La Vie En Rose Atmosphere" 
                className="w-full h-full object-cover"
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
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredMenu.map((item) => (
              <div key={item.id} className="bg-[#FAF5F3] rounded-2xl overflow-hidden group hover:shadow-xl transition-all duration-300 border border-stone-200/60 flex flex-col justify-between">
                <div>
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <img 
                      src={item.image} 
                      alt={item.name} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <span className="absolute top-3 right-3 bg-[#2D1B1E]/90 backdrop-blur-md text-[#F0DFDC] text-[10px] uppercase font-bold px-3 py-1 rounded-full">
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

      {/* Video Reels Section with Local MP4 Assets */}
      <section id="videos" className="py-24 bg-[#2D1B1E] text-white">
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
              <div key={reel.id} className="relative rounded-2xl overflow-hidden bg-stone-900 shadow-xl group aspect-[9/16]">
                <video 
                  id={reel.id} 
                  autoPlay 
                  muted 
                  loop 
                  playsInline 
                  poster={reel.poster}
                  className="w-full h-full object-cover"
                >
                  <source src={reel.src} type="video/mp4" />
                </video>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex flex-col justify-end p-6">
                  <div className="flex justify-between items-center">
                    <p className="text-sm font-semibold">{reel.title}</p>
                    <button 
                      onClick={() => toggleVideo(reel.id)} 
                      className="bg-white/20 hover:bg-white/40 backdrop-blur-md p-2.5 rounded-full text-white transition-all"
                    >
                      {playingVideo[reel.id] ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section with Local JPG Assets */}
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
              <img src={item.img} alt={item.caption} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
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

      {/* Reservation Form */}
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
                <span>Bulbula, Addis Ababa</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-[#B26D77]" />
                <span>+251 900 000 000</span>
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
                  Thank you for choosing La Vie En Rose. We have received your booking and look forward to hosting you.
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
                  className="w-full bg-[#B26D77] hover:bg-[#96545E] text-white font-bold py-4 rounded-xl transition-all shadow-md uppercase tracking-wider text-xs"
                >
                  Confirm Table Reservation
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Location Map */}
      <section id="location" className="py-24 bg-white border-t border-stone-200">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <span className="text-xs font-bold uppercase tracking-widest text-[#B26D77]">Visit Us</span>
            <h2 className="text-4xl font-serif text-[#2D1B1E]">Tucked in Peaceful Bulbula</h2>
            <p className="text-stone-600 font-light leading-relaxed">
              Where quiet elegance meets everyday comfort. Come enjoy our sun-lit terrace, freshly roasted specialty coffee, and French-Italian dining.
            </p>

            <div className="space-y-4 pt-2">
              <div className="p-4 rounded-2xl bg-[#FAF5F3] flex items-start gap-4">
                <MapPin className="w-6 h-6 text-[#B26D77] shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-stone-900">Address</h4>
                  <p className="text-sm text-stone-600">Bulbula, Addis Ababa, Ethiopia</p>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-[#FAF5F3] flex items-start gap-4">
                <Clock className="w-6 h-6 text-[#B26D77] shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-stone-900">Hours of Operation</h4>
                  <p className="text-sm text-stone-600">Monday – Sunday: Open Daily (Breakfast to Dinner)</p>
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-3xl overflow-hidden shadow-xl h-[400px] bg-stone-200 relative border border-stone-200">
            <iframe 
              title="La Vie En Rose Location"
              src="https://maps.google.com/maps?q=Bulbula%2C%20Addis%20Ababa&hl=en&z=15&output=embed" 
              className="w-full h-full border-0" 
              allowFullScreen="" 
              loading="lazy" 
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#2D1B1E] text-white py-12 border-t border-[#3D1A22]">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <div>
            <span className="text-2xl font-serif text-[#F0DFDC] block">La Vie En Rose</span>
            <p className="text-xs text-stone-400 mt-1">Where Addis meets Paris — Bulbula</p>
          </div>

          <div className="text-xs text-stone-500">
            © {new Date().getFullYear()} La Vie En Rose. All rights reserved.
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Quick-Contact */}
      <a 
        href="https://wa.me/251900000000" 
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