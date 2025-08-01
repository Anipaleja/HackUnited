import { Button } from "./ui/button";
import { ArrowRight, Code, Users, Trophy, Terminal, Cpu, Network, Zap, Shield, Database } from "lucide-react";
import { useEffect, useState } from "react";

export function Hero() {
  const [typedText, setTypedText] = useState("");
  const [showCursor, setShowCursor] = useState(true);
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);
  
  const messages = [
    "const hackathon = await create();",
    "function innovate() { return future; }",
    "git commit -m 'build the future'",
    "npm run hack-united"
  ];

  useEffect(() => {
    const currentMessage = messages[currentMessageIndex];
    let currentIndex = 0;
    
    const typeInterval = setInterval(() => {
      if (currentIndex <= currentMessage.length) {
        setTypedText(currentMessage.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(typeInterval);
        setTimeout(() => {
          setCurrentMessageIndex((prev) => (prev + 1) % messages.length);
          setTypedText("");
        }, 2000);
      }
    }, 100);

    return () => clearInterval(typeInterval);
  }, [currentMessageIndex]);

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);
    return () => clearInterval(cursorInterval);
  }, []);

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-slate-950">
      {/* Refined Grid Background */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
      
      {/* Subtle Glow Effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-950/20 via-transparent to-purple-950/20"></div>
      
      {/* Static Geometric Accents */}
      <div className="absolute top-20 left-20 w-24 h-24 border border-blue-500/10 bg-blue-500/5 backdrop-blur-sm rounded-lg rotate-12"></div>
      <div className="absolute top-32 right-32 w-16 h-16 border border-purple-500/10 bg-purple-500/5 backdrop-blur-sm rounded-full"></div>
      <div className="absolute bottom-40 left-32 w-20 h-20 border border-cyan-500/10 bg-cyan-500/5 backdrop-blur-sm rotate-45"></div>
      
      {/* Advanced Circuit Pattern */}
      <div className="absolute top-0 right-0 w-96 h-96 opacity-5">
        <svg viewBox="0 0 200 200" className="w-full h-full">
          <defs>
            <pattern id="circuit" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M10 10h20v20h-20z" fill="none" stroke="currentColor" strokeWidth="0.5"/>
              <circle cx="10" cy="10" r="1" fill="currentColor"/>
              <circle cx="30" cy="30" r="1" fill="currentColor"/>
            </pattern>
          </defs>
          <rect width="200" height="200" fill="url(#circuit)" className="text-blue-400"/>
        </svg>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Content */}
            <div className="space-y-8">
              {/* Enhanced Terminal Badge */}
              <div className="inline-flex items-center gap-3 bg-slate-900/90 border border-slate-700/50 rounded-lg px-4 py-2 font-mono text-sm backdrop-blur-sm shadow-lg shadow-blue-500/10">
                <div className="flex gap-1">
                  <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse-slow"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full animate-pulse-slow" style={{ animationDelay: '0.2s' }}></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse-slow" style={{ animationDelay: '0.4s' }}></div>
                </div>
                <span className="text-slate-300">hack_united:~$</span>
                <span className="text-blue-400">status --global</span>
                <span className="text-green-400">online</span>
              </div>

              {/* Main Headline */}
              <div className="space-y-4">
                <h1 className="text-5xl lg:text-7xl xl:text-8xl font-black tracking-tight">
                  <span className="block text-white animate-slide-up">HACK</span>
                  <span className="block bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent animate-slide-up" style={{ animationDelay: '0.2s' }}>
                    UNITED
                  </span>
                </h1>
                
                {/* Static Enhanced Underline */}
                <div className="relative">
                  <div className="h-1 w-32 bg-gradient-to-r from-blue-500 to-purple-500 animate-expand-width"></div>
                </div>
              </div>

              {/* Professional Subheading */}
              <div className="space-y-6">
                <p className="text-xl lg:text-2xl text-slate-300 leading-relaxed animate-fade-up" style={{ animationDelay: '0.4s' }}>
                  Where{" "}
                  <span className="text-blue-400 font-semibold">global developers</span>{" "}
                  unite to build{" "}
                  <span className="text-purple-400 font-semibold">tomorrow's technology</span>{" "}
                  through collaborative innovation.
                </p>
                
                {/* Enhanced Typing Animation Terminal */}
                <div className="bg-slate-900/80 border border-slate-700/50 rounded-lg p-4 font-mono text-sm backdrop-blur-sm animate-fade-up shadow-lg shadow-blue-500/10" style={{ animationDelay: '0.6s' }}>
                  <div className="flex items-center gap-2 mb-2">
                    <Terminal className="w-4 h-4 text-green-400" />
                    <span className="text-slate-400">developer@hackunited:~$</span>
                  </div>
                  <div className="text-green-400">
                    {typedText}
                    <span className={`inline-block w-2 h-5 bg-green-400 ml-1 ${showCursor ? 'opacity-100' : 'opacity-0'}`}></span>
                  </div>
                </div>
              </div>

              {/* Enhanced CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 animate-fade-up" style={{ animationDelay: '0.8s' }}>
                <Button 
                  size="lg" 
                  className="group bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white border-0 px-8 py-4 shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
                >
                  <Cpu className="mr-3 w-5 h-5" />
                  Join Next Hackathon
                  <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="group border-slate-600 text-slate-300 hover:text-white hover:bg-slate-800 hover:border-slate-500 px-8 py-4 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
                >
                  <Network className="mr-3 w-5 h-5" />
                  Explore Community
                </Button>
              </div>
            </div>

            {/* Right Column - Enhanced Interactive Stats */}
            <div className="space-y-6 animate-fade-up" style={{ animationDelay: '1s' }}>
              {/* Stats Grid with Enhanced Design */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-slate-900/80 border border-slate-700/50 rounded-xl p-6 backdrop-blur-sm hover:bg-slate-900/90 transition-all duration-300 hover:scale-[1.02] group shadow-lg shadow-blue-500/5">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-blue-500/20 to-blue-600/20 rounded-lg flex items-center justify-center border border-blue-500/20">
                      <Users className="w-5 h-5 text-blue-400" />
                    </div>
                    <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
                  </div>
                  <div className="text-2xl font-bold text-white mb-1 group-hover:text-blue-400 transition-colors">50,000+</div>
                  <div className="text-sm text-slate-400">Active Developers</div>
                </div>

                <div className="bg-slate-900/80 border border-slate-700/50 rounded-xl p-6 backdrop-blur-sm hover:bg-slate-900/90 transition-all duration-300 hover:scale-[1.02] group shadow-lg shadow-purple-500/5">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-purple-500/20 to-purple-600/20 rounded-lg flex items-center justify-center border border-purple-500/20">
                      <Code className="w-5 h-5 text-purple-400" />
                    </div>
                    <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
                  </div>
                  <div className="text-2xl font-bold text-white mb-1 group-hover:text-purple-400 transition-colors">2,500+</div>
                  <div className="text-sm text-slate-400">Projects Built</div>
                </div>

                <div className="bg-slate-900/80 border border-slate-700/50 rounded-xl p-6 backdrop-blur-sm hover:bg-slate-900/90 transition-all duration-300 hover:scale-[1.02] group shadow-lg shadow-cyan-500/5">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-cyan-500/20 to-cyan-600/20 rounded-lg flex items-center justify-center border border-cyan-500/20">
                      <Trophy className="w-5 h-5 text-cyan-400" />
                    </div>
                    <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
                  </div>
                  <div className="text-2xl font-bold text-white mb-1 group-hover:text-cyan-400 transition-colors">$2M+</div>
                  <div className="text-sm text-slate-400">Prizes Awarded</div>
                </div>

                <div className="bg-slate-900/80 border border-slate-700/50 rounded-xl p-6 backdrop-blur-sm hover:bg-slate-900/90 transition-all duration-300 hover:scale-[1.02] group shadow-lg shadow-green-500/5">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-green-500/20 to-green-600/20 rounded-lg flex items-center justify-center border border-green-500/20">
                      <Zap className="w-5 h-5 text-green-400" />
                    </div>
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" style={{ animationDelay: '0.6s' }}></div>
                  </div>
                  <div className="text-2xl font-bold text-white mb-1 group-hover:text-green-400 transition-colors">100+</div>
                  <div className="text-sm text-slate-400">Countries</div>
                </div>
              </div>

              {/* Enhanced Live Activity Feed */}
              <div className="bg-slate-900/80 border border-slate-700/50 rounded-xl p-6 backdrop-blur-sm shadow-lg shadow-green-500/5">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 bg-gradient-to-br from-green-500/20 to-green-600/20 rounded-lg flex items-center justify-center border border-green-500/20">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  </div>
                  <span className="text-sm font-semibold text-slate-300">Live Activity</span>
                  <div className="flex-1"></div>
                  <div className="text-xs text-slate-500 font-mono">ACTIVE</div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center gap-3 animate-slide-left">
                    <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                    <span className="text-sm text-slate-400">Alex_Dev joined from San Francisco</span>
                    <div className="flex-1"></div>
                    <span className="text-xs text-slate-500">2m</span>
                  </div>
                  <div className="flex items-center gap-3 animate-slide-left" style={{ animationDelay: '1s' }}>
                    <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                    <span className="text-sm text-slate-400">Team "Neural Nexus" submitted project</span>
                    <div className="flex-1"></div>
                    <span className="text-xs text-slate-500">5m</span>
                  </div>
                  <div className="flex items-center gap-3 animate-slide-left" style={{ animationDelay: '2s' }}>
                    <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                    <span className="text-sm text-slate-400">Hackathon "AI for Good" starts in 2 days</span>
                    <div className="flex-1"></div>
                    <span className="text-xs text-slate-500">1h</span>
                  </div>
                </div>
              </div>

              {/* New System Status Panel */}
              <div className="bg-slate-900/80 border border-slate-700/50 rounded-xl p-6 backdrop-blur-sm shadow-lg">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 bg-gradient-to-br from-blue-500/20 to-purple-600/20 rounded-lg flex items-center justify-center border border-blue-500/20">
                    <Shield className="w-4 h-4 text-blue-400" />
                  </div>
                  <span className="text-sm font-semibold text-slate-300">System Status</span>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                    <span className="text-xs text-slate-400">API</span>
                    <span className="text-xs text-green-400 ml-auto">99.9%</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                    <span className="text-xs text-slate-400">DB</span>
                    <span className="text-xs text-green-400 ml-auto">99.8%</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                    <span className="text-xs text-slate-400">CDN</span>
                    <span className="text-xs text-blue-400 ml-auto">100%</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                    <span className="text-xs text-slate-400">AUTH</span>
                    <span className="text-xs text-green-400 ml-auto">99.9%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Enhanced Bottom Section - Tech Stack Icons */}
          <div className="mt-16 pt-8 border-t border-slate-800/50">
            <div className="text-center mb-6">
              <p className="text-slate-400 text-sm">Trusted by developers worldwide</p>
            </div>
            <div className="flex justify-center items-center gap-8 opacity-60">
              <div className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors cursor-pointer group">
                <div className="w-8 h-8 bg-slate-800/80 border border-slate-700/50 rounded-lg flex items-center justify-center group-hover:bg-slate-700/80 transition-colors">
                  <span className="text-xs font-bold">JS</span>
                </div>
                <span className="text-sm">JavaScript</span>
              </div>
              <div className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors cursor-pointer group">
                <div className="w-8 h-8 bg-slate-800/80 border border-slate-700/50 rounded-lg flex items-center justify-center group-hover:bg-slate-700/80 transition-colors">
                  <span className="text-xs font-bold">PY</span>
                </div>
                <span className="text-sm">Python</span>
              </div>
              <div className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors cursor-pointer group">
                <div className="w-8 h-8 bg-slate-800/80 border border-slate-700/50 rounded-lg flex items-center justify-center group-hover:bg-slate-700/80 transition-colors">
                  <span className="text-xs font-bold">GO</span>
                </div>
                <span className="text-sm">Go</span>
              </div>
              <div className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors cursor-pointer group">
                <div className="w-8 h-8 bg-slate-800/80 border border-slate-700/50 rounded-lg flex items-center justify-center group-hover:bg-slate-700/80 transition-colors">
                  <span className="text-xs font-bold">RS</span>
                </div>
                <span className="text-sm">Rust</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}