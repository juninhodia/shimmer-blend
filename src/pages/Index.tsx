import { BackgroundGradientAnimation } from "@/components/ui/background-gradient-animation";
import { Button } from "@/components/ui/button";

const Index = () => {
  return (
    <BackgroundGradientAnimation
      gradientBackgroundStart="rgb(108, 0, 162)"
      gradientBackgroundEnd="rgb(0, 17, 82)"
      firstColor="138, 43, 226"
      secondColor="186, 85, 211"
      thirdColor="123, 104, 238"
      fourthColor="147, 112, 219"
      fifthColor="75, 0, 130"
      pointerColor="199, 21, 133"
    >
      <div className="absolute z-50 inset-0 flex items-center justify-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-8">
            {/* Hero Heading */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-hero-text leading-tight animate-fade-in">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-white to-purple-200 drop-shadow-2xl">
                PARE DE PERDER CLIENTES TODOS OS DIAS!
              </span>
            </h1>
            
            {/* Hero Description */}
            <p className="text-lg sm:text-xl md:text-2xl text-hero-text-muted max-w-3xl mx-auto leading-relaxed animate-fade-in">
              Empresas que investiram em Landing Pages profissionais aumentaram suas vendas nos primeiros 60 dias. 
              <span className="text-hero-text font-medium"> Não fique para trás!</span>
            </p>
            
            {/* Call to Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center pt-8 animate-fade-in">
              <Button 
                variant="hero" 
                size="lg" 
                className="w-full sm:w-auto text-base sm:text-lg px-8 py-4 min-h-[56px] hover:scale-105 transition-transform duration-200"
              >
                QUERO MEU ORÇAMENTO GRATUITO AGORA
              </Button>
              
              <Button 
                variant="hero-outline" 
                size="lg" 
                className="w-full sm:w-auto text-base sm:text-lg px-8 py-4 min-h-[56px] hover:scale-105 transition-transform duration-200"
              >
                VER BENEFÍCIOS DE TER LANDING PAGE
              </Button>
            </div>
          </div>
        </div>
      </div>
    </BackgroundGradientAnimation>
  );
};

export default Index;