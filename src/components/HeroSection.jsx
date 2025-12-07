
export function HeroSection() {

  const handleGetStartedClick = () => {
    console.log('Get Started button clicked!');
  
  };

  const handleWatchDemoClick = () => {
    console.log('Watch Demo button clicked!');
    
  };

  return (
    <section className="bg-white w-full px-6 py-12 md:px-16 md:py-20 lg:px-20 lg:py-24 rounded-2xl shadow-lg">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-16">
          
          {/*left column*/}
          <div className="flex-1 max-w-2xl space-y-8 order-1 lg:order-1">
          
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-sans leading-tight tracking-tight">
              UNLOCK YOUR CREATIVE FLOW
            </h1>
            
    
            <p className="text-lg lg:text-xl text-gray-600 leading-relaxed">
              Simplify your projects, collaborate effortlessly, and bring ideas to life with our intuitive platform
            </p>
            
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              {/* Primary Button */}
              <button
                onClick={handleGetStartedClick}
                className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white font-medium rounded-xl px-8 py-4 hover:shadow-xl hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 shadow-md"
              >
                Get Started
              </button>
              
              {/* Secondary Button */}
              <button
                onClick={handleWatchDemoClick}
                className="border-2 border-indigo-500 text-indigo-500 font-medium rounded-xl px-8 py-4 hover:bg-indigo-50 active:bg-indigo-100 transition-all duration-300"
              >
                Watch Demo
              </button>
            </div>
            
            
            <div className="pt-8">
              <p className="text-sm text-gray-500">
                Trusted by 10,000+ creative professionals worldwide
              </p>
            </div>
          </div>
          
          {/* right column */}
          <div className="flex-1 flex justify-center order-2 lg:order-2">
            <div className="relative w-full max-w-md lg:max-w-lg">
            
              <img
                src="/src/assets/hero.svg"
                alt="hero section"
                className="w-full h-auto object-contain rounded-lg"
              
              />
              
            
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-full blur-sm opacity-70"></div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-tr from-indigo-100 to-blue-100 rounded-full blur-sm opacity-70"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}



export default HeroSection;