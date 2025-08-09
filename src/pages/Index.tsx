import { BackgroundGradientAnimation } from "@/components/ui/background-gradient-animation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useEffect, useState } from "react";
import chatfyLogo from "../../assets/Logo_chatfy-removebg-preview (1) - Copia.png";

const Index = () => {
  const [quizOpen, setQuizOpen] = useState(false);
  const [activeStep, setActiveStep] = useState(1);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [nextStep, setNextStep] = useState<number | null>(null);
  const [phase, setPhase] = useState<"start" | "end">("start");
  const [offerOpen, setOfferOpen] = useState(false);
  const [offerMounted, setOfferMounted] = useState(false);
  const [showCongrats, setShowCongrats] = useState(false);

  // Gatilho de entrada suave do overlay (slide de cima para baixo)
  const [overlayMounted, setOverlayMounted] = useState(false);
  useEffect(() => {
    if (quizOpen) {
      // garante que o overlay faça a transição de -translate-y-full -> 0
      const t = setTimeout(() => setOverlayMounted(true), 10);
      return () => clearTimeout(t);
    } else {
      setOverlayMounted(false);
    }
  }, [quizOpen]);

  // Esconde a notificação automaticamente após 3s
  useEffect(() => {
    if (offerOpen && showCongrats) {
      const t = setTimeout(() => setShowCongrats(false), 3000);
      return () => clearTimeout(t);
    }
  }, [offerOpen, showCongrats]);

  const handleOpenQuiz = () => {
    setQuizOpen(true);
    setActiveStep(1);
  };

  const startTransition = (toStep: number) => {
    if (isTransitioning) return;
    setNextStep(toStep);
    setIsTransitioning(true);
    setPhase("start");
    // Avança para a fase final no próximo tick para disparar a transição CSS
    setTimeout(() => setPhase("end"), 20);
    // Conclui a troca após a duração da animação
    setTimeout(() => {
      setActiveStep(toStep);
      setIsTransitioning(false);
      setNextStep(null);
      setPhase("start");
    }, 520);
  };

  const cardButtonClasses = "bg-white border-[#130A2F] text-slate-900 hover:bg-white/90 hover:text-slate-900 h-auto min-h-[48px] whitespace-normal break-words text-center leading-normal";

  const renderCard = (step: number) => (
    <Card className="bg-slate-50 text-slate-900 border-transparent shadow-2xl rounded-2xl">
      <CardHeader className="text-center px-8 sm:px-12 pt-8 sm:pt-10">
        {step === 1 ? (
          <>
            <CardTitle className="text-2xl sm:text-3xl">🎯 Primeiro, me conta:</CardTitle>
            <CardDescription className="text-lg text-slate-600">Sua empresa já tem presença online?</CardDescription>
          </>
        ) : step === 2 ? (
          <>
            <CardTitle className="text-2xl sm:text-3xl">🚀 Vamos falar de objetivos:</CardTitle>
            <CardDescription className="text-lg text-slate-600">Qual é sua maior dificuldade hoje?</CardDescription>
          </>
        ) : step === 3 ? (
          <>
            <CardTitle className="text-2xl sm:text-3xl">⏰ Para finalizar:</CardTitle>
            <CardDescription className="text-lg text-slate-600">
              Há quanto tempo sua empresa sente que precisa melhorar a presença online?
            </CardDescription>
          </>
        ) : (
          <>
            <CardTitle className="text-2xl sm:text-3xl">Você gostaria de ganhar um desconto</CardTitle>
            <CardDescription className="text-lg text-slate-600">
              Para fazer a landing page, você gostaria de ganhar desconto de quantos porcento?
            </CardDescription>
          </>
        )}
      </CardHeader>
      <CardContent className="space-y-5 px-8 sm:px-12 pb-8 sm:pb-10">
        {step === 1 ? (
          <div className="space-y-4">
            <Button variant="outline" className={`w-full items-start justify-center text-lg py-4 px-4 ${cardButtonClasses}`} onClick={() => startTransition(2)}>
              Sim, temos site e redes sociais
            </Button>
            <Button variant="outline" className={`w-full items-start justify-center text-lg py-4 px-4 ${cardButtonClasses}`} onClick={() => startTransition(2)}>
              Temos só redes sociais
            </Button>
            <Button variant="outline" className={`w-full items-start justify-center text-lg py-4 px-4 ${cardButtonClasses}`} onClick={() => startTransition(2)}>
              Temos só redes sociais
            </Button>
          </div>
        ) : step === 2 ? (
          <div className="space-y-4">
            <Button variant="outline" className={`w-full items-start justify-center text-lg py-4 px-4 ${cardButtonClasses}`} onClick={() => startTransition(3)}>
              Conseguir mais leads qualificados
            </Button>
            <Button variant="outline" className={`w-full items-start justify-center text-lg py-4 px-4 ${cardButtonClasses}`} onClick={() => startTransition(3)}>
              Converter visitantes em clientes
            </Button>
            <Button variant="outline" className={`w-full items-start justify-center text-lg py-4 px-4 ${cardButtonClasses}`} onClick={() => startTransition(3)}>
              Aparecer no Google
            </Button>
          </div>
        ) : step === 3 ? (
          <div className="space-y-4">
            <Button variant="outline" className={`w-full items-start justify-center text-lg py-4 px-4 ${cardButtonClasses}`} onClick={() => startTransition(4)}>
              Há mais de 1 ano (está na hora!)
            </Button>
            <Button variant="outline" className={`w-full items-start justify-center text-lg py-4 px-4 ${cardButtonClasses}`} onClick={() => startTransition(4)}>
              Alguns meses (estamos pesquisando)
            </Button>
            <Button variant="outline" className={`w-full items-start justify-center text-lg py-4 px-4 ${cardButtonClasses}`} onClick={() => startTransition(4)}>
              É uma ideia nova (acabamos de pensar nisso)
            </Button>
          </div>
        ) : (
          <div className="space-y-4">
            <Button variant="outline" className={`w-full items-start justify-center text-lg py-4 px-4 ${cardButtonClasses}`} onClick={() => {
              setQuizOpen(false);
              setOfferOpen(true);
              // Monta e anima a oferta (sobe de baixo para cima)
              setTimeout(() => setOfferMounted(true), 10);
              // 1s depois, mostra a notificação de parabéns
              setTimeout(() => setShowCongrats(true), 1000);
            }}>
              10%
            </Button>
            <Button variant="outline" className={`w-full items-start justify-center text-lg py-4 px-4 ${cardButtonClasses}`} onClick={() => {
              setQuizOpen(false);
              setOfferOpen(true);
              setTimeout(() => setOfferMounted(true), 10);
              setTimeout(() => setShowCongrats(true), 1000);
            }}>
              30%
            </Button>
            <Button variant="outline" className={`w-full items-start justify-center text-lg py-4 px-4 ${cardButtonClasses}`} onClick={() => {
              setQuizOpen(false);
              setOfferOpen(true);
              setTimeout(() => setOfferMounted(true), 10);
              setTimeout(() => setShowCongrats(true), 1000);
            }}>
              50%
            </Button>
          </div>
        )}

        {step === 1 ? (
          <div className="mt-8 text-base text-slate-600 space-y-1.5 text-center">
            <p>✨ Cada resposta nos ajuda a criar a solução perfeita para você</p>
            <p>🔒 Suas informações são confidenciais e seguras</p>
          </div>
        ) : step === 2 ? (
          <div className="mt-8 text-base text-amber-300/90 text-center">
            <p>💡 Perfeito! Com uma Landing Page bem feita, esse número pode aumentar significativamente...</p>
          </div>
        ) : (
          <div className="mt-8 text-base text-amber-300/90 text-center">
            <p>💡 Perfeito! Com base no seu histórico, já sei exatamente como podemos otimizar seus objetivos...</p>
          </div>
        )}
      </CardContent>
    </Card>
  );

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
            {/* Logo acima do título principal */}
            <img
              src={chatfyLogo}
              alt="Logo Chatfy"
              className="mx-auto h-12 sm:h-16 w-auto drop-shadow-lg animate-fade-in"
            />
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
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-6 justify-center items-center pt-6 sm:pt-8 animate-fade-in">
              <div className="moving-border rounded-md w-full sm:w-auto">
                <Button 
                  variant="hero" 
                  size="default" 
                  asChild
                  className="w-full text-sm sm:text-lg px-4 sm:px-8 py-3 sm:py-4 min-h-[44px] sm:min-h-[56px] hover:scale-105 transition-transform duration-200"
                >
                  <a href="https://wa.me/5584999391928?text=Quero%20fazer%20um%20or%C3%A7amento%20de%20landing%20page" target="_blank" rel="noopener noreferrer">
                    QUERO MEU ORÇAMENTO GRATUITO AGORA
                  </a>
                </Button>
              </div>
              
              <Button 
                variant="hero-outline" 
                size="default" 
                onClick={handleOpenQuiz}
                className="w-full sm:w-auto text-sm sm:text-lg px-4 sm:px-8 py-3 sm:py-4 min-h-[44px] sm:min-h-[56px] hover:scale-105 transition-transform duration-200"
              >
                VER BENEFÍCIOS DE TER LANDING PAGE
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Overlay do Quiz */}
      {quizOpen && (
        <div
          className={[
            "absolute inset-0 z-[60] transform-gpu transition-transform duration-500 ease-out",
            overlayMounted ? "translate-y-0" : "-translate-y-full",
          ].join(" ")}
        >
          <div className="quiz-overlay h-full w-full flex items-center justify-center">
            <div className="relative w-full h-full flex items-center justify-center">
              <Button
                variant="ghost"
                size="icon"
                className="text-hero-text absolute top-4 right-4"
                onClick={() => setQuizOpen(false)}
                aria-label="Fechar"
              >
                ✕
              </Button>
              <div className="w-full max-w-4xl px-6 sm:px-8 lg:px-10">
                <div className="text-center mb-6">
                  <h2 className="text-3xl sm:text-4xl font-bold text-hero-text">Potencial da Sua Empresa</h2>
                  <p className="text-hero-text-muted mt-1">Responda algumas perguntas simples</p>
                </div>

                {/* Transição: quando ativo, renderiza dois layers absolutos (saindo e entrando). */}
                <div className="relative h-full min-h-[320px]">
                  {!isTransitioning && (
                    <div>
                      {renderCard(activeStep)}
                    </div>
                  )}

                  {isTransitioning && nextStep !== null && (
                    <>
                      {/* Saindo (esquerda) */}
                      <div
                        className={[
                          "absolute inset-0 will-change-transform transition-transform duration-500 ease-out",
                          phase === "start" ? "translate-x-0" : "-translate-x-[120%]",
                        ].join(" ")}
                      >
                        {renderCard(activeStep)}
                      </div>

                      {/* Entrando (direita) */}
                      <div
                        className={[
                          "absolute inset-0 will-change-transform transition-transform duration-500 ease-out",
                          phase === "start" ? "translate-x-[120%]" : "translate-x-0",
                        ].join(" ")}
                      >
                        {renderCard(nextStep)}
                      </div>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Overlay da Oferta (aparece após escolha no último card) */}
      {offerOpen && (
        <div
          className={[
            "absolute inset-0 z-[70] transform-gpu transition-transform transition-opacity duration-[800ms] ease-in-out",
            offerMounted ? "translate-y-0 opacity-100" : "translate-y-full opacity-0",
          ].join(" ")}
        >
          <div className="offer-overlay h-full w-full">
            {/* Faixa superior */}
            <div className="absolute top-0 left-0 right-0">
              <div className="mx-auto max-w-5xl px-4 py-2">
                <div className="w-full rounded-b-md bg-gradient-to-r from-purple-500/90 via-pink-500/90 to-indigo-500/90 text-white text-center text-sm sm:text-base font-semibold tracking-wide shadow-lg">
                  RESTAM APENAS 3 VAGAS ESTE MÊS
                </div>
              </div>
            </div>

            {/* Notificação que cai de cima 1s depois */}
            {showCongrats && (
              <div className="absolute left-1/2 -translate-x-1/2 top-4 sm:top-8 w-[90%] sm:w-auto">
                <div className="transform-gpu transition-transform duration-500 ease-out translate-y-0">
                  <div className="rounded-xl bg-white/95 text-slate-900 px-4 py-3 shadow-xl border border-white/60 text-center">
                    <p className="text-sm sm:text-base leading-snug">
                      <span className="mr-1">💡</span>
                      Parabéns, você ganhou uma oferta imperdível de 50% para criar a landing page
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* Conteúdo da oferta */}
            <div className="h-full w-full flex items-center justify-center px-4 sm:px-6 lg:px-8">
              <div className="w-full max-w-4xl">
                <div className="grid grid-cols-1 gap-6">
                  <div className="relative rounded-2xl border border-purple-300/20 bg-gradient-to-br from-purple-800/50 via-fuchsia-800/40 to-indigo-800/50 p-6 sm:p-8 shadow-2xl">
                    <div className="mb-6 text-center">
                      <h3 className="text-2xl sm:text-3xl font-bold text-white">Plano Premium</h3>
                      <p className="text-white/80 mt-1">Oferta exclusiva para você</p>
                    </div>
                    <div className="grid sm:grid-cols-2 gap-6">
                      <ul className="space-y-3 text-white/90">
                        <li>✔ Receba em até uma semana</li>
                        <li>✔ Arquitetura da landing page</li>
                        <li>✔ Consultoria</li>
                        <li>✔ Credibilidade no online</li>
                      </ul>
                      <div className="rounded-xl bg-gradient-to-r from-primary to-accent text-white p-5 shadow-lg flex flex-col items-center sm:items-start justify-center gap-1.5">
                        <div className="flex items-end gap-2">
                          <span className="text-base text-white/80 line-through">De 597</span>
                          <span className="text-3xl sm:text-4xl font-extrabold">R$ 298</span>
                        </div>
                        <div className="text-xs text-white/80 self-center sm:self-auto">à vista</div>
                      </div>
                    </div>
                    <div className="mt-6 flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
                      <Button className="bg-gradient-to-r from-primary to-accent text-primary-foreground hover:from-primary/90 hover:to-accent/90 px-6 py-4 text-base rounded-lg shadow-lg" asChild>
                        <a href="https://wa.me/5584999391928?text=Quero%20fazer%20um%20or%C3%A7amento%20de%20landing%20page" target="_blank" rel="noopener noreferrer">
                          GARANTIR AGORA
                        </a>
                      </Button>
                      <Button variant="hero-outline" className="px-6 py-4 text-base rounded-lg" asChild>
                        <a href="https://wa.me/5584999391928?text=Quero%20fazer%20um%20or%C3%A7amento%20de%20landing%20page" target="_blank" rel="noopener noreferrer">
                          FAZER ORÇAMENTO
                        </a>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </BackgroundGradientAnimation>
  );
};

export default Index;