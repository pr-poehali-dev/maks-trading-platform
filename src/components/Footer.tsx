import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className="bg-gaming-dark border-t border-gaming-purple/20 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="text-center md:text-left mb-4 md:mb-0">
            <h4 className="text-xl font-bold bg-gradient-to-r from-gaming-purple to-gaming-orange bg-clip-text text-transparent">
              MAKS Торговля
            </h4>
            <p className="text-gaming-cyan">Безопасная торговля игровыми товарами</p>
          </div>
          <div className="flex space-x-4">
            <Button variant="ghost" size="sm" className="text-gaming-cyan hover:text-white">
              Помощь
            </Button>
            <Button variant="ghost" size="sm" className="text-gaming-cyan hover:text-white">
              Контакты
            </Button>
            <Button variant="ghost" size="sm" className="text-gaming-cyan hover:text-white">
              Правила
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;