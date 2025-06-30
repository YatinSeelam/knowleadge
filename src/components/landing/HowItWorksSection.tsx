import React, { useRef, useEffect, useState } from 'react';
import { Pencil, ExternalLink, Magnet, FileText, ArrowRight } from 'lucide-react';

const HowItWorksSection: React.FC = () => {
  const howItWorksRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (howItWorksRef.current) {
        const rect = howItWorksRef.current.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        const progress = Math.max(0, Math.min(1, (windowHeight - rect.top) / (windowHeight + rect.height)));
        setScrollProgress(progress);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const pencilRotate = scrollProgress * 360;
  const pencilY = 50 - (scrollProgress * 100);

  const steps = [
    {
      step: "01",
      title: "Paste Any URL",
      description: "Just drop a LinkedIn profile, company website, or any social media link",
      icon: ExternalLink,
      color: "bg-blue-50",
      speechBubble: "Easy as copy-paste!",
      bubbleColor: "bg-blue-400"
    },
    {
      step: "02", 
      title: "AI Magic Happens",
      description: "Our intelligent magnet scans and pulls key insights, pain points, and conversation gold",
      icon: Magnet,
      color: "bg-red-50",
      speechBubble: "Pulling intel...",
      bubbleColor: "bg-red-400"
    },
    {
      step: "03",
      title: "Get Your Brief",
      description: "Receive a detailed research document with everything you need to nail that conversation",
      icon: FileText,
      color: "bg-green-50",
      speechBubble: "Ready to impress!",
      bubbleColor: "bg-green-400"
    }
  ];

  return (
    <>
      <style>{`
        @keyframes fade-in-up {
          to {
            opacity: 1;
            transform: translateY(0) rotate(0deg);
          }
        }
        
        @keyframes scale-in {
          to {
            transform: translate(-50%, 0) scale(1);
          }
        }
        
        @keyframes pulse-x {
          0%, 100% { transform: translateY(-50%) translateX(0); }
          50% { transform: translateY(-50%) translateX(10px); }
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out;
        }
        
        .animate-scale-in {
          animation: scale-in 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55);
        }
        
        .animate-pulse-x {
          animation: pulse-x 2s ease-in-out infinite;
        }
      `}</style>
      <section id="how-it-works" ref={howItWorksRef} className="py-16 px-6 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
        {/* Notebook paper background */}
        <div className="absolute inset-0 opacity-10">
          <div className="w-full h-full" style={{
            backgroundImage: `repeating-linear-gradient(
              transparent,
              transparent 29px,
              #e0e0e0 29px,
              #e0e0e0 30px
            )`
          }} />
          <div className="absolute top-0 left-20 w-0.5 h-full bg-red-400 opacity-50"></div>
        </div>

        <div className="max-w-7xl mx-auto relative">
          <div className="text-center mb-16 relative">
            {/* Moved pencil much higher - now at -top-32 instead of -top-20 */}
            <div
              style={{ 
                transform: `translate(-50%, ${pencilY}px) rotate(${pencilRotate}deg)`,
                transition: 'transform 0.1s ease-out'
              }}
              className="absolute -top-32 left-1/2 z-10"
            >
              <Pencil className="w-12 h-12 text-yellow-500" />
            </div>
            
            <h3 className="text-5xl font-extrabold text-gray-900 mb-4 mt-16">
              How It Works
            </h3>
            <div className="w-32 h-2 bg-yellow-400 mx-auto transform -rotate-1"></div>
          </div>

          <div className="grid lg:grid-cols-3 gap-16 items-start">
            {steps.map((item, index) => (
              <div
                key={index}
                className="relative group opacity-0 translate-y-12 animate-fade-in-up"
                style={{ animationDelay: `${index * 300}ms`, animationFillMode: 'forwards' }}
              >
                {/* Speech Bubble */}
                <div
                  className={`absolute -top-8 left-1/2 transform -translate-x-1/2 ${item.bubbleColor} text-white px-4 py-2 rounded-full text-sm font-bold whitespace-nowrap z-20 shadow-md scale-0 animate-scale-in`}
                  style={{ animationDelay: `${index * 300 + 500}ms`, animationFillMode: 'forwards' }}
                >
                  {item.speechBubble}
                  <div className={`absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-8 border-transparent ${item.bubbleColor.replace('bg-', 'border-t-')}`}></div>
                </div>

                {/* Main Card */}
                <div className={`relative p-8 ${item.color} border-3 border-gray-900 rounded-3xl shadow-[8px_8px_0_0_rgb(17,24,39)] transform group-hover:rotate-2 transition-all duration-300 group-hover:shadow-[12px_12px_0_0_rgb(17,24,39)]`}>
                  {/* Step Number */}
                  <div className="absolute -top-6 -left-6 w-16 h-16 bg-yellow-400 border-3 border-gray-900 rounded-full flex items-center justify-center transform -rotate-12 group-hover:rotate-0 transition-transform shadow-md">
                    <span className="text-2xl font-black text-gray-900">{item.step}</span>
                  </div>
                  
                  {/* Doodle decorations */}
                  <div className="absolute top-4 right-4 w-8 h-8 border-2 border-gray-600 rounded-full opacity-30 transform rotate-12"></div>
                  <div className="absolute bottom-4 left-4 w-12 h-1 bg-yellow-400 opacity-50 transform -rotate-6"></div>

                  <div className="space-y-6 mt-8">
                    <div className="inline-block hover:scale-110 hover:rotate-3 transition-transform duration-300">
                      <item.icon className="w-16 h-16 text-gray-900" />
                    </div>
                    <h4 className="text-3xl font-black text-gray-900 leading-tight">{item.title}</h4>
                    <p className="text-gray-600 text-lg leading-relaxed">{item.description}</p>
                  </div>

                  {/* Arrow to next step */}
                  {index < 2 && (
                    <div className="hidden lg:block absolute -right-16 top-1/2 transform -translate-y-1/2 animate-pulse-x">
                      <ArrowRight className="w-12 h-12 text-gray-600" />
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default HowItWorksSection;