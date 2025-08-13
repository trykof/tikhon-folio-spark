import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Mail, Github, Send, ExternalLink } from "lucide-react";
import privozoffLogo from "@/assets/privozoff-logo.png";
import t25Logo from "@/assets/t25-logo.png";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8 animate-fade-in-up">
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-portfolio-gradient-start to-portfolio-gradient-end bg-clip-text text-transparent mb-4">
              Рыжиков Тихон
            </h1>
            <p className="text-xl md:text-2xl text-portfolio-text-light">
              Full-stack разработка сайтов
            </p>
          </div>
          <div className="w-16 h-1 bg-gradient-to-r from-portfolio-gradient-start to-portfolio-gradient-end mx-auto animate-gradient-shift" 
               style={{ backgroundSize: '200% 200%' }}></div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-6 bg-portfolio-section-bg">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">О себе</h2>
          <div className="max-w-2xl mx-auto text-center">
            <p className="text-lg text-portfolio-text-light leading-relaxed mb-6">
              Создаю современные и функциональные веб-приложения с использованием актуальных технологий. 
              Специализируюсь на React, Node.js и базах данных, обеспечивая полный цикл разработки от идеи до развертывания.
            </p>
            <p className="text-lg text-portfolio-text-light leading-relaxed">
              Увлечен созданием интуитивных пользовательских интерфейсов и эффективных серверных решений, 
              которые помогают бизнесу достигать поставленных целей.
            </p>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Проекты</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-8 bg-portfolio-card-bg border-border hover:shadow-lg transition-all duration-300 group">
              <div className="h-48 bg-white rounded-lg mb-6 flex items-center justify-center p-4">
                <img src={t25Logo} alt="Т-25 Logo" className="max-h-full max-w-full object-contain" />
              </div>
              <h3 className="text-2xl font-bold mb-4 group-hover:text-accent transition-colors">Т-25</h3>
              <p className="text-portfolio-text-light mb-4 leading-relaxed">
                Переработка существующего проекта t-25.ru с полным рефакторингом backend'а, 
                обновлением дизайна и улучшением пользовательского интерфейса.
              </p>
              <Button variant="outline" className="group-hover:bg-accent group-hover:text-accent-foreground group-hover:border-accent transition-all" asChild>
                <a href="https://t-25.ru" target="_blank" rel="noopener noreferrer">
                  Посмотреть
                  <ExternalLink className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </Card>

            <Card className="p-8 bg-portfolio-card-bg border-border hover:shadow-lg transition-all duration-300 group">
              <div className="h-48 bg-white rounded-lg mb-6 flex items-center justify-center p-4">
                <img src={privozoffLogo} alt="ПривозоффАвто Logo" className="max-h-full max-w-full object-contain" />
              </div>
              <h3 className="text-2xl font-bold mb-4 group-hover:text-accent transition-colors">ПривозоффАвто</h3>
              <p className="text-portfolio-text-light mb-4 leading-relaxed">
                Лендинг-сайт privozoff.com, разработанный с нуля с базовым функционалом 
                системы заявок и современным адаптивным дизайном.
              </p>
              <Button variant="outline" className="group-hover:bg-accent group-hover:text-accent-foreground group-hover:border-accent transition-all" asChild>
                <a href="https://privozoff.com" target="_blank" rel="noopener noreferrer">
                  Посмотреть
                  <ExternalLink className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </Card>
          </div>
        </div>
      </section>

      {/* Contacts Section */}
      <section className="py-20 px-6 bg-portfolio-section-bg">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-12">Контакты</h2>
          <div className="mb-8">
            <p className="text-lg text-portfolio-text-light mb-8">
              Готов обсудить ваш проект и воплотить идеи в жизнь
            </p>
            <div className="flex items-center justify-center mb-8">
              <Mail className="h-5 w-5 text-accent mr-3" />
              <a 
                href="mailto:m@nllp.ru" 
                className="text-lg hover:text-accent transition-colors"
              >
                m@nllp.ru
              </a>
            </div>
          </div>
          
          <div className="flex justify-center space-x-6">
            <Button variant="outline" size="lg" className="hover:bg-accent hover:text-accent-foreground hover:border-accent transition-all" asChild>
              <a href="https://github.com/trykof" target="_blank" rel="noopener noreferrer">
                <Github className="h-5 w-5 mr-2" />
                GitHub
              </a>
            </Button>
            <Button variant="outline" size="lg" className="hover:bg-accent hover:text-accent-foreground hover:border-accent transition-all" asChild>
              <a href="https://t.me/trykof" target="_blank" rel="noopener noreferrer">
                <Send className="h-5 w-5 mr-2" />
                Telegram
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
