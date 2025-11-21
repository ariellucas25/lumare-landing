import React from 'react';
import { FeatureCard } from '../components/FeatureCard';

const playerImage = new URL('../assets/player.png', import.meta.url).href;
const journeyImage = new URL('../assets/journey.png', import.meta.url).href;
const onboardingImage = new URL('../assets/onboarding-1.png', import.meta.url).href;

const Landing: React.FC = () => {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-16 pb-24 md:pt-24 md:pb-32">
        {/* Background Glows */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-lumare-primary/20 rounded-full blur-[120px] opacity-30 pointer-events-none" />
        <div className="absolute top-1/3 right-0 w-[400px] h-[400px] bg-lumare-secondary/20 rounded-full blur-[100px] opacity-20 pointer-events-none" />

        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-6 leading-tight">
              Resonance <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-lumare-primary to-lumare-secondary">
                for your daily life
              </span>
            </h1>
            <p className="text-lg md:text-xl text-lumare-muted mb-10 leading-relaxed">
              Lumare delivers Rise and Rest sessions crafted to enhance focus, energy, and emotional balance. Just press play and let the sound guide your mind.
            </p>
            
            <a 
              href="#"
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium text-white bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300 transform hover:-translate-y-1"
            >
              <svg className="w-6 h-6 mr-2" viewBox="0 0 24 24" fill="currentColor">
                 <path d="M17.893 9.638c-.036-2.886 2.367-4.276 2.477-4.327-.023-.078-1.536-5.236-5.083-5.29-2.139-.033-4.152 1.266-5.231 1.266-1.078 0-2.73-1.236-4.49-1.204-2.309.035-4.438 1.345-5.626 3.416-2.4 4.164-.613 10.332 1.724 13.706 1.141 1.649 2.502 3.499 4.29 3.434 1.715-.069 2.364-1.109 4.434-1.109 2.066 0 2.656 1.109 4.471 1.073 1.854-.036 3.03-1.683 4.154-3.335 1.31-1.913 1.848-3.765 1.883-3.86-.041-.02-3.607-1.385-3.636-5.786h.005l.032.016zm-3.083-7.55c.952-1.168 1.596-2.792 1.418-4.412-1.375.056-3.042.918-4.03 2.102-.886 1.058-1.661 2.746-1.453 4.368 1.536.12 3.108-.889 4.065-2.058z"/>
              </svg>
              Download on the App Store
            </a>
          </div>

          {/* Visual Showcase - 3 Phones */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center justify-center mt-12">
             {/* Left Phone - Rest */}
             <div className="hidden md:block transform translate-y-12 hover:translate-y-8 transition-transform duration-500">
                <div className="rounded-[3rem] overflow-hidden border-8 border-gray-800 shadow-2xl bg-lumare-bg aspect-[9/19.5] relative group">
                  <img 
                    src={playerImage} 
                    alt="Lumare Player screen" 
                    className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-700" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-lumare-bg to-transparent opacity-50"></div>
                </div>
             </div>

             {/* Center Phone - Main */}
             <div className="transform hover:-translate-y-4 transition-transform duration-500 z-10">
                <div className="rounded-[3rem] overflow-hidden border-8 border-gray-800 shadow-2xl shadow-purple-500/20 bg-lumare-bg aspect-[9/19.5] relative group">
                  <img 
                    src={journeyImage} 
                    alt="Lumare Journey screen" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                  />
                </div>
             </div>

             {/* Right Phone - Stats */}
             <div className="hidden md:block transform translate-y-12 hover:translate-y-8 transition-transform duration-500">
                <div className="rounded-[3rem] overflow-hidden border-8 border-gray-800 shadow-2xl bg-lumare-bg aspect-[9/19.5] relative group">
                  <img 
                    src={onboardingImage} 
                    alt="Lumare Onboarding screen" 
                    className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-700" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-lumare-bg to-transparent opacity-50"></div>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24 relative z-10">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-16 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Designed for your rhythm</h2>
            <p className="text-lumare-muted max-w-2xl mx-auto">
              Small daily sessions create meaningful change. Use Lumare every day to deepen your focus, rest, and emotional cadence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <FeatureCard 
              title="Daily Sound Journey"
              description="Rise and Rest sessions crafted with curated frequencies, tones, and moods to help you start with clarity and unwind with peace."
              gradient="from-white/20 via-white/5"
            />
            <FeatureCard 
              title="Resonance Timeline"
              description="A living record of the sessions that shape your focus and rest. Track your progress and revisit past sessions anytime."
              gradient="from-lumare-primary/20 via-lumare-primary/5"
              delay="100ms"
            />
            <FeatureCard 
              title="Reflect & Capture"
              description="Lightweight notes keep context, emotions, and breakthroughs close. Your journey evolves as you do—one day at a time."
              gradient="from-lumare-secondary/20 via-lumare-secondary/5"
              delay="200ms"
            />
          </div>
        </div>
      </section>
      
      {/* Bottom CTA */}
      <section className="py-24 relative overflow-hidden">
         <div className="absolute inset-0 bg-gradient-to-b from-transparent to-lumare-bg/80 pointer-events-none"></div>
         <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-8">Ready to find your flow?</h2>
            <a 
              href="#"
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium text-lumare-bg bg-white rounded-full hover:bg-gray-100 transition-all duration-300"
            >
              Start Your Journey
            </a>
         </div>
      </section>
    </div>
  );
};

export default Landing;
