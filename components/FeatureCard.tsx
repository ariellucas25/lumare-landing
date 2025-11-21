import React from 'react';

interface FeatureCardProps {
  title: string;
  description: string;
  delay?: string;
  gradient: string;
}

export const FeatureCard: React.FC<FeatureCardProps> = ({ title, description, delay = '0ms', gradient }) => {
  return (
    <div 
      className={`relative p-8 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-all duration-500 group overflow-hidden`}
      style={{ animationDelay: delay }}
    >
      {/* Gradient Glow Effect on Hover */}
      <div className={`absolute -inset-full top-0 block h-full w-1/2 -skew-x-12 bg-gradient-to-r ${gradient} to-transparent opacity-0 group-hover:animate-shine`} />
      
      <div className="relative z-10">
        <h3 className="text-xl font-semibold text-white mb-3">{title}</h3>
        <p className="text-lumare-muted leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
};