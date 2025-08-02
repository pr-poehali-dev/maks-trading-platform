import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Hero = () => {
  return (
    <section className="py-16 text-center">
      <div className="container mx-auto px-4">
        <h2 className="text-5xl font-bold text-white mb-4">
          Торговая площадка
          <span className="block bg-gradient-to-r from-gaming-purple to-gaming-orange bg-clip-text text-transparent">
            для геймеров
          </span>
        </h2>
        <p className="text-xl text-gaming-cyan mb-8 max-w-2xl mx-auto">
          Покупайте и продавайте игры, робуксы и игровые товары с безопасными транзакциями
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="bg-gaming-purple hover:bg-gaming-purple/80 animate-pulse-glow">
            <Icon name="ShoppingCart" size={20} className="mr-2" />
            Начать покупки
          </Button>
          <Button size="lg" variant="outline" className="border-gaming-orange text-gaming-orange hover:bg-gaming-orange hover:text-white">
            <Icon name="Store" size={20} className="mr-2" />
            Стать продавцом
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;