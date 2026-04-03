import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { 
  Phone, 
  MapPin, 
  Clock, 
  ChevronRight, 
  Star, 
  CheckCircle2, 
  Menu, 
  X,
  Stethoscope,
  Sparkles,
  ShieldCheck,
  HeartHandshake
} from 'lucide-react';

export default function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-100px" },
    transition: { duration: 0.6, ease: "easeOut" }
  };

  const staggerContainer = {
    initial: { opacity: 0 },
    whileInView: { opacity: 1 },
    viewport: { once: true, margin: "-100px" },
    transition: { staggerChildren: 0.2 }
  };

  const staggerItem = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
  };

  return (
    <div className="min-h-screen bg-white font-sans text-primary overflow-x-hidden">
      {/* Navigation */}
      <header 
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'
        }`}
      >
        <div className="container mx-auto px-6 max-w-7xl flex items-center justify-between">
          <a href="#" className="flex items-center gap-2 group">
            <div className="w-10 h-10 rounded-xl bg-secondary flex items-center justify-center text-white shadow-lg shadow-secondary/20 group-hover:scale-105 transition-transform">
              <Stethoscope size={24} strokeWidth={2.5} />
            </div>
            <span className="text-2xl font-bold tracking-tight text-primary">
              Dental<span className="text-secondary">Care</span>
            </span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8 font-medium text-sm">
            <a href="#services" className="hover:text-secondary transition-colors">Услуги</a>
            <a href="#doctors" className="hover:text-secondary transition-colors">Врачи</a>
            <a href="#prices" className="hover:text-secondary transition-colors">Цены</a>
            <a href="#reviews" className="hover:text-secondary transition-colors">Отзывы</a>
            <a href="#contacts" className="hover:text-secondary transition-colors">Контакты</a>
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <a href="tel:+74951234567" className="font-semibold hover:text-secondary transition-colors">
              +7 (495) 123-45-67
            </a>
            <button className="bg-secondary hover:bg-tertiary text-white px-6 py-3 rounded-full font-medium transition-all shadow-lg shadow-secondary/20 hover:shadow-xl hover:shadow-secondary/30 hover:-translate-y-0.5 active:translate-y-0">
              Записаться
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden p-2 text-primary"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Nav */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-xl border-t border-neutral/50 py-6 px-6 flex flex-col gap-4">
            <a href="#services" onClick={() => setIsMobileMenuOpen(false)} className="text-lg font-medium">Услуги</a>
            <a href="#doctors" onClick={() => setIsMobileMenuOpen(false)} className="text-lg font-medium">Врачи</a>
            <a href="#prices" onClick={() => setIsMobileMenuOpen(false)} className="text-lg font-medium">Цены</a>
            <a href="#reviews" onClick={() => setIsMobileMenuOpen(false)} className="text-lg font-medium">Отзывы</a>
            <a href="#contacts" onClick={() => setIsMobileMenuOpen(false)} className="text-lg font-medium">Контакты</a>
            <div className="h-px bg-neutral my-2"></div>
            <a href="tel:+74951234567" className="text-lg font-bold text-secondary">+7 (495) 123-45-67</a>
            <button className="bg-secondary text-white px-6 py-4 rounded-xl font-medium w-full mt-2">
              Записаться на прием
            </button>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-neutral/30 -z-10"></div>
        
        {/* Decorative background elements */}
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-secondary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 -z-10"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-tertiary/5 rounded-full blur-3xl translate-y-1/3 -translate-x-1/4 -z-10"></div>

        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              className="max-w-2xl"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white shadow-sm border border-neutral/50 text-sm font-medium text-tertiary mb-8">
                <Sparkles size={16} />
                <span>Забота о вашей улыбке с 2010 года</span>
              </div>
              <h1 className="text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.1] mb-6 text-primary">
                Здоровая улыбка <br/>
                <span className="text-secondary">без боли и страха</span>
              </h1>
              <p className="text-lg lg:text-xl text-primary/70 mb-10 leading-relaxed max-w-xl">
                Современная стоматология, где о вас уже заботятся. Чистый дизайн, передовые технологии и врачи, которым доверяют тысячи пациентов.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-secondary hover:bg-tertiary text-white px-8 py-4 rounded-full font-medium text-lg transition-all shadow-lg shadow-secondary/20 hover:shadow-xl hover:shadow-secondary/30 hover:-translate-y-0.5 flex items-center justify-center gap-2 group">
                  Записаться на прием
                  <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </button>
                <button className="bg-white hover:bg-neutral text-primary border border-neutral-200 px-8 py-4 rounded-full font-medium text-lg transition-all flex items-center justify-center">
                  Узнать стоимость
                </button>
              </div>
              
              <div className="mt-12 flex items-center gap-6 text-sm font-medium text-primary/60">
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={20} className="text-secondary" />
                  <span>Первая консультация бесплатно</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={20} className="text-secondary" />
                  <span>Рассрочка 0%</span>
                </div>
              </div>
            </motion.div>

            <motion.div 
              className="relative lg:h-[600px] rounded-3xl overflow-hidden shadow-2xl"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            >
              <img 
                src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=1200&q=80" 
                alt="Современный стоматологический кабинет" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent"></div>
              
              {/* Floating Badge */}
              <motion.div 
                className="absolute bottom-8 left-8 bg-white/90 backdrop-blur-md p-6 rounded-2xl shadow-xl max-w-[280px]"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.6 }}
              >
                <div className="flex items-center gap-4 mb-3">
                  <div className="flex -space-x-3">
                    {[1, 2, 3, 4].map((i) => (
                      <img key={i} src={`https://i.pravatar.cc/100?img=${i + 10}`} alt="Patient" className="w-10 h-10 rounded-full border-2 border-white object-cover" />
                    ))}
                  </div>
                  <div className="flex flex-col">
                    <div className="flex text-amber-400">
                      <Star size={14} fill="currentColor" />
                      <Star size={14} fill="currentColor" />
                      <Star size={14} fill="currentColor" />
                      <Star size={14} fill="currentColor" />
                      <Star size={14} fill="currentColor" />
                    </div>
                    <span className="text-xs font-bold mt-0.5">5.0 на Я.Картах</span>
                  </div>
                </div>
                <p className="text-sm font-medium text-primary/80">Более 5,000 счастливых пациентов выбрали нас.</p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-white">
        <div className="container mx-auto px-6 max-w-7xl">
          <motion.div {...fadeIn} className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-bold mb-6">Наши услуги</h2>
            <p className="text-lg text-primary/70">
              Мы предлагаем полный спектр стоматологических услуг, используя только проверенные материалы и новейшее оборудование.
            </p>
          </motion.div>

          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {[
              {
                title: "Имплантация",
                desc: "Восстановление утраченных зубов с пожизненной гарантией на имплант.",
                img: "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=600&q=80"
              },
              {
                title: "Виниры",
                desc: "Идеальная форма и цвет зубов за несколько визитов. Керамика премиум-класса.",
                img: "https://images.unsplash.com/photo-1606811971618-4486d14f3f99?auto=format&fit=crop&w=600&q=80"
              },
              {
                title: "Отбеливание",
                desc: "Безопасное осветление эмали на 8-10 тонов за один сеанс без повышения чувствительности.",
                img: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=600&q=80"
              },
              {
                title: "Лечение зубов",
                desc: "Лечение кариеса и каналов под микроскопом. Спасаем даже сложные зубы.",
                img: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=600&q=80"
              }
            ].map((service, idx) => (
              <motion.div 
                key={idx} 
                variants={staggerItem}
                className="group rounded-3xl overflow-hidden bg-neutral border border-neutral-200 hover:shadow-xl hover:shadow-secondary/10 transition-all duration-300 flex flex-col h-full"
              >
                <div className="h-48 overflow-hidden shrink-0">
                  <img 
                    src={service.img} 
                    alt={service.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-8 flex flex-col flex-grow">
                  <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                  <p className="text-primary/70 mb-6 leading-relaxed flex-grow">{service.desc}</p>
                  <a href="#" className="inline-flex items-center gap-2 text-secondary font-medium hover:text-tertiary transition-colors mt-auto">
                    Подробнее <ChevronRight size={16} />
                  </a>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Why Us / Approach */}
      <section className="py-24 bg-neutral">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              {...fadeIn}
              className="order-2 lg:order-1 grid grid-cols-2 gap-4"
            >
              <img 
                src="https://images.unsplash.com/photo-1600170311833-c2cf5280ce49?auto=format&fit=crop&w=600&q=80" 
                alt="Счастливый пациент" 
                className="rounded-3xl w-full h-64 object-cover mt-8"
              />
              <img 
                src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=600&q=80" 
                alt="Врач за работой" 
                className="rounded-3xl w-full h-64 object-cover"
              />
            </motion.div>
            
            <motion.div {...fadeIn} className="order-1 lg:order-2">
              <h2 className="text-4xl font-bold mb-6">Лечение, которое меняет отношение к стоматологии</h2>
              <p className="text-lg text-primary/70 mb-10 leading-relaxed">
                Мы создали клинику, в которой нет места страху. Наша философия — это прозрачность на каждом этапе, абсолютный комфорт и забота о вашем времени.
              </p>
              
              <div className="space-y-6">
                {[
                  { icon: ShieldCheck, title: "Гарантия результата", desc: "Мы уверены в качестве нашей работы и даем расширенную гарантию на все виды лечения." },
                  { icon: HeartHandshake, title: "Без боли и стресса", desc: "Используем современные анестетики и седацию. Вы можете спать, пока мы лечим." },
                  { icon: Sparkles, title: "Прозрачные цены", desc: "План лечения и стоимость фиксируются до начала работы. Никаких скрытых платежей." }
                ].map((feature, idx) => (
                  <div key={idx} className="flex gap-4">
                    <div className="w-12 h-12 shrink-0 rounded-2xl bg-white shadow-sm flex items-center justify-center text-secondary">
                      <feature.icon size={24} />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold mb-2">{feature.title}</h4>
                      <p className="text-primary/70">{feature.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Doctors Section */}
      <section id="doctors" className="py-24 bg-white">
        <div className="container mx-auto px-6 max-w-7xl">
          <motion.div {...fadeIn} className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
            <div className="max-w-2xl">
              <h2 className="text-4xl font-bold mb-6">Наши специалисты</h2>
              <p className="text-lg text-primary/70">
                Команда экспертов, которые постоянно совершенствуют свои навыки и работают по международным протоколах.
              </p>
            </div>
            <button className="hidden md:inline-flex items-center gap-2 text-secondary font-medium hover:text-tertiary transition-colors">
              Все врачи клиники <ChevronRight size={20} />
            </button>
          </motion.div>

          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            className="grid md:grid-cols-3 gap-8"
          >
            {[
              {
                name: "Александр Смирнов",
                role: "Главный врач, хирург-имплантолог",
                exp: "Опыт 15 лет",
                img: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=800&q=80"
              },
              {
                name: "Елена Волкова",
                role: "Стоматолог-ортопед, эстетист",
                exp: "Опыт 12 лет",
                img: "https://images.unsplash.com/photo-1614608682850-e0d6ed316d47?auto=format&fit=crop&w=800&q=80"
              },
              {
                name: "Дмитрий Иванов",
                role: "Стоматолог-терапевт, эндодонтист",
                exp: "Опыт 9 лет",
                img: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&w=800&q=80"
              }
            ].map((doctor, idx) => (
              <motion.div key={idx} variants={staggerItem} className="group">
                <div className="relative rounded-3xl overflow-hidden mb-6 aspect-[4/5] bg-neutral">
                  <img 
                    src={doctor.img} 
                    alt={doctor.name} 
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                    <button className="w-full bg-white text-primary py-3 rounded-xl font-medium hover:bg-secondary hover:text-white transition-colors">
                      Записаться к врачу
                    </button>
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-2">{doctor.name}</h3>
                <p className="text-secondary font-medium mb-1">{doctor.role}</p>
                <p className="text-primary/60 text-sm">{doctor.exp}</p>
              </motion.div>
            ))}
          </motion.div>
          
          <button className="md:hidden mt-10 w-full inline-flex items-center justify-center gap-2 text-secondary font-medium border border-secondary/20 py-4 rounded-xl hover:bg-neutral transition-colors">
            Все врачи клиники <ChevronRight size={20} />
          </button>
        </div>
      </section>

      {/* Reviews Section */}
      <section id="reviews" className="py-24 bg-neutral">
        <div className="container mx-auto px-6 max-w-7xl">
          <motion.div {...fadeIn} className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-bold mb-6">Истории наших пациентов</h2>
            <p className="text-lg text-primary/70">
              Лучшее подтверждение нашего профессионализма — это искренние улыбки и отзывы тех, кто уже доверил нам свое здоровье.
            </p>
          </motion.div>

          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            className="grid md:grid-cols-3 gap-6"
          >
            {[
              {
                name: "Мария К.",
                service: "Установка виниров",
                text: "Долго не решалась на виниры, боялась, что будет выглядеть неестественно. Но результат превзошел все ожидания! Улыбка выглядит идеально, но при этом абсолютно натурально. Огромное спасибо доктору Елене!"
              },
              {
                name: "Игорь В.",
                service: "Имплантация",
                text: "Удаляли зуб и сразу ставили имплант. Думал, что это будет долго и больно. Оказалось — быстро, комфортно и вообще без боли. Клиника высочайшего уровня, сервис на 5+."
              },
              {
                name: "Анна С.",
                service: "Лечение кариеса",
                text: "С детства боялась стоматологов до дрожи. Сюда пришла по рекомендации и не пожалела. Включили музыку, сделали анестезию так, что я даже укола не почувствовала. Теперь только к вам!"
              }
            ].map((review, idx) => (
              <motion.div key={idx} variants={staggerItem} className="bg-white p-8 rounded-3xl shadow-sm border border-neutral-200 flex flex-col h-full">
                <div className="flex text-amber-400 mb-6 shrink-0">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} size={18} fill="currentColor" />
                  ))}
                </div>
                <p className="text-primary/80 mb-8 leading-relaxed italic flex-grow">"{review.text}"</p>
                <div className="shrink-0 mt-auto">
                  <h4 className="font-bold text-lg">{review.name}</h4>
                  <p className="text-sm text-secondary">{review.service}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="container mx-auto px-6 max-w-7xl">
          <motion.div 
            {...fadeIn}
            className="bg-gradient-to-br from-[#EBF5FF] to-[#F4F7F9] border border-secondary/20 rounded-[3rem] p-10 md:p-16 lg:p-20 relative overflow-hidden text-primary shadow-xl shadow-secondary/5"
          >
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-secondary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 -z-10"></div>
            <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-tertiary/5 rounded-full blur-2xl translate-y-1/2 -translate-x-1/4 -z-10"></div>
            
            <div className="relative z-10 max-w-2xl">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                Готовы к улыбке, <br/>о которой мечтали?
              </h2>
              <p className="text-lg text-primary/70 mb-10 leading-relaxed max-w-xl">
                Запишитесь на первичную консультацию. Мы проведем осмотр, сделаем снимки и составим подробный план лечения с фиксированной стоимостью.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-secondary hover:bg-tertiary text-white px-8 py-4 rounded-full font-bold text-lg transition-all shadow-lg shadow-secondary/20 hover:shadow-xl hover:shadow-secondary/30 hover:-translate-y-0.5 flex items-center justify-center gap-2 group">
                  Записаться на прием
                  <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </button>
                <a href="tel:+74951234567" className="bg-white hover:bg-neutral text-primary border border-neutral-200 px-8 py-4 rounded-full font-medium text-lg transition-all flex items-center justify-center gap-2">
                  <Phone size={20} />
                  Позвонить нам
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contacts" className="bg-neutral pt-20 pb-10 border-t border-neutral-200">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
            <div className="lg:col-span-1">
              <a href="#" className="flex items-center gap-2 mb-6">
                <div className="w-8 h-8 rounded-lg bg-secondary flex items-center justify-center text-white">
                  <Stethoscope size={18} strokeWidth={2.5} />
                </div>
                <span className="text-xl font-bold tracking-tight text-primary">
                  Dental<span className="text-secondary">Care</span>
                </span>
              </a>
              <p className="text-primary/70 mb-6">
                Современная стоматологическая клиника экспертного класса. Создаем здоровые и красивые улыбки с 2010 года.
              </p>
            </div>
            
            <div>
              <h4 className="font-bold text-lg mb-6">Услуги</h4>
              <ul className="space-y-4 text-primary/70">
                <li><a href="#" className="hover:text-secondary transition-colors">Имплантация зубов</a></li>
                <li><a href="#" className="hover:text-secondary transition-colors">Установка виниров</a></li>
                <li><a href="#" className="hover:text-secondary transition-colors">Отбеливание</a></li>
                <li><a href="#" className="hover:text-secondary transition-colors">Лечение кариеса</a></li>
                <li><a href="#" className="hover:text-secondary transition-colors">Профессиональная гигиена</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-lg mb-6">Клиника</h4>
              <ul className="space-y-4 text-primary/70">
                <li><a href="#doctors" className="hover:text-secondary transition-colors">Наши врачи</a></li>
                <li><a href="#prices" className="hover:text-secondary transition-colors">Цены и рассрочка</a></li>
                <li><a href="#reviews" className="hover:text-secondary transition-colors">Отзывы пациентов</a></li>
                <li><a href="#" className="hover:text-secondary transition-colors">Вопросы и ответы</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-lg mb-6">Контакты</h4>
              <ul className="space-y-4 text-primary/70">
                <li className="flex items-start gap-3">
                  <MapPin size={20} className="text-secondary shrink-0 mt-0.5" />
                  <span>г. Москва, ул. Примерная, д. 12, Бизнес-центр "Плаза", 1 этаж</span>
                </li>
                <li className="flex items-center gap-3">
                  <Phone size={20} className="text-secondary shrink-0" />
                  <a href="tel:+74951234567" className="hover:text-secondary transition-colors font-medium">+7 (495) 123-45-67</a>
                </li>
                <li className="flex items-start gap-3">
                  <Clock size={20} className="text-secondary shrink-0 mt-0.5" />
                  <span>Пн-Вс: 09:00 - 21:00<br/>Без выходных</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="pt-8 border-t border-primary/10 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-primary/50">
            <p>© 2026 DentalCare. Все права защищены.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-secondary transition-colors">Политика конфиденциальности</a>
              <a href="#" className="hover:text-secondary transition-colors">Пользовательское соглашение</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
