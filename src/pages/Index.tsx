import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Icon from "@/components/ui/icon";

const Index = () => {
  const [isAuthOpen, setIsAuthOpen] = useState(false);
  const [balance, setBalance] = useState(1250);
  const [activeTab, setActiveTab] = useState("games");

  const gameItems = [
    {
      id: 1,
      title: "Minecraft Premium",
      price: 899,
      image: "/img/cafaa466-8d0b-4ce5-8ffa-d74f6f707dac.jpg",
      category: "Игры",
      seller: "GamerShop"
    },
    {
      id: 2,
      title: "Roblox Premium",
      price: 299,
      image: "/img/cafaa466-8d0b-4ce5-8ffa-d74f6f707dac.jpg",
      category: "Игры",
      seller: "ProGaming"
    },
    {
      id: 3,
      title: "Steam Gift Card",
      price: 500,
      image: "/img/cafaa466-8d0b-4ce5-8ffa-d74f6f707dac.jpg",
      category: "Игры",
      seller: "SteamDealer"
    }
  ];

  const robuxItems = [
    {
      id: 4,
      title: "800 Robux",
      price: 159,
      image: "/img/074c53a4-0ca4-48db-aed7-d5c3858efc16.jpg",
      category: "Робуксы",
      seller: "RobuxKing"
    },
    {
      id: 5,
      title: "1700 Robux",
      price: 299,
      image: "/img/074c53a4-0ca4-48db-aed7-d5c3858efc16.jpg",
      category: "Робуксы", 
      seller: "FastRobux"
    },
    {
      id: 6,
      title: "4500 Robux",
      price: 799,
      image: "/img/074c53a4-0ca4-48db-aed7-d5c3858efc16.jpg",
      category: "Робуксы",
      seller: "MegaRobux"
    }
  ];

  const allItems = [...gameItems, ...robuxItems];

  const getItemsByCategory = () => {
    switch(activeTab) {
      case "games": return gameItems;
      case "robux": return robuxItems;
      default: return allItems;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gaming-dark via-gaming-blue to-gaming-purple">
      {/* Header */}
      <header className="border-b border-gaming-purple/20 bg-gaming-dark/80 backdrop-blur-md">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-6">
              <h1 className="text-2xl font-bold bg-gradient-to-r from-gaming-purple to-gaming-orange bg-clip-text text-transparent">
                MAKS Торговля
              </h1>
              <nav className="hidden md:flex space-x-6">
                <Button variant="ghost" className="text-white hover:text-gaming-cyan">
                  <Icon name="Home" size={16} className="mr-2" />
                  Главная
                </Button>
                <Button variant="ghost" className="text-white hover:text-gaming-cyan">
                  <Icon name="Gamepad2" size={16} className="mr-2" />
                  Игры
                </Button>
                <Button variant="ghost" className="text-white hover:text-gaming-cyan">
                  <Icon name="Coins" size={16} className="mr-2" />
                  Робуксы
                </Button>
                <Button variant="ghost" className="text-white hover:text-gaming-cyan">
                  <Icon name="Package" size={16} className="mr-2" />
                  Заказы
                </Button>
                <Button variant="ghost" className="text-white hover:text-gaming-cyan">
                  <Icon name="HelpCircle" size={16} className="mr-2" />
                  Поддержка
                </Button>
              </nav>
            </div>
            
            <div className="flex items-center space-x-4">
              {/* Wallet */}
              <Card className="bg-gaming-purple/20 border-gaming-purple/30">
                <CardContent className="flex items-center space-x-2 p-3">
                  <Icon name="Wallet" size={20} className="text-gaming-cyan" />
                  <span className="text-white font-semibold">{balance}₽</span>
                  <Button size="sm" variant="outline" className="border-gaming-cyan text-gaming-cyan hover:bg-gaming-cyan hover:text-gaming-dark">
                    <Icon name="Plus" size={14} />
                  </Button>
                </CardContent>
              </Card>

              {/* Auth Dialog */}
              <Dialog open={isAuthOpen} onOpenChange={setIsAuthOpen}>
                <DialogTrigger asChild>
                  <Button className="bg-gaming-orange hover:bg-gaming-orange/80">
                    <Icon name="User" size={16} className="mr-2" />
                    Войти
                  </Button>
                </DialogTrigger>
                <DialogContent className="bg-gaming-dark border-gaming-purple/30">
                  <DialogHeader>
                    <DialogTitle className="text-white">Вход в аккаунт</DialogTitle>
                    <DialogDescription className="text-gaming-cyan">
                      Войдите или зарегистрируйтесь для доступа к торговле
                    </DialogDescription>
                  </DialogHeader>
                  <Tabs defaultValue="login" className="w-full">
                    <TabsList className="grid w-full grid-cols-2 bg-gaming-blue">
                      <TabsTrigger value="login" className="text-white">Вход</TabsTrigger>
                      <TabsTrigger value="register" className="text-white">Регистрация</TabsTrigger>
                    </TabsList>
                    <TabsContent value="login" className="space-y-4">
                      <Input placeholder="Email" className="bg-gaming-blue border-gaming-purple/30 text-white" />
                      <Input type="password" placeholder="Пароль" className="bg-gaming-blue border-gaming-purple/30 text-white" />
                      <Button className="w-full bg-gaming-purple hover:bg-gaming-purple/80">Войти</Button>
                    </TabsContent>
                    <TabsContent value="register" className="space-y-4">
                      <Input placeholder="Имя пользователя" className="bg-gaming-blue border-gaming-purple/30 text-white" />
                      <Input placeholder="Email" className="bg-gaming-blue border-gaming-purple/30 text-white" />
                      <Input type="password" placeholder="Пароль" className="bg-gaming-blue border-gaming-purple/30 text-white" />
                      <Button className="w-full bg-gaming-orange hover:bg-gaming-orange/80">Зарегистрироваться</Button>
                    </TabsContent>
                  </Tabs>
                </DialogContent>
              </Dialog>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
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

      {/* Product Categories */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full grid-cols-3 max-w-md mx-auto bg-gaming-blue/50 mb-8">
              <TabsTrigger value="all" className="text-white">Все</TabsTrigger>
              <TabsTrigger value="games" className="text-white">Игры</TabsTrigger>
              <TabsTrigger value="robux" className="text-white">Робуксы</TabsTrigger>
            </TabsList>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {getItemsByCategory().map((item) => (
                <Card key={item.id} className="bg-gaming-dark/80 border-gaming-purple/30 hover:border-gaming-cyan/50 transition-all duration-300 hover:scale-105 animate-fade-in">
                  <CardHeader className="p-0">
                    <div className="relative">
                      <img 
                        src={item.image} 
                        alt={item.title}
                        className="w-full h-48 object-cover rounded-t-lg"
                      />
                      <Badge className="absolute top-2 right-2 bg-gaming-orange text-white">
                        {item.category}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="p-4">
                    <CardTitle className="text-white mb-2">{item.title}</CardTitle>
                    <CardDescription className="text-gaming-cyan mb-4">
                      Продавец: {item.seller}
                    </CardDescription>
                    <div className="flex items-center justify-between">
                      <span className="text-2xl font-bold text-gaming-orange">{item.price}₽</span>
                      <Button className="bg-gaming-purple hover:bg-gaming-purple/80">
                        <Icon name="ShoppingCart" size={16} className="mr-2" />
                        Купить
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </Tabs>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-gaming-dark/50">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl font-bold text-center text-white mb-12">
            Почему выбирают нас?
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="bg-gaming-purple/20 border-gaming-purple/30 text-center">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-gaming-cyan rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Shield" size={32} className="text-gaming-dark" />
                </div>
                <CardTitle className="text-white mb-2">Безопасность</CardTitle>
                <CardDescription className="text-gaming-cyan">
                  Все транзакции защищены системой эскроу
                </CardDescription>
              </CardContent>
            </Card>
            
            <Card className="bg-gaming-orange/20 border-gaming-orange/30 text-center">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-gaming-purple rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Zap" size={32} className="text-white" />
                </div>
                <CardTitle className="text-white mb-2">Быстро</CardTitle>
                <CardDescription className="text-gaming-cyan">
                  Мгновенная доставка цифровых товаров
                </CardDescription>
              </CardContent>
            </Card>
            
            <Card className="bg-gaming-cyan/20 border-gaming-cyan/30 text-center">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-gaming-orange rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Users" size={32} className="text-white" />
                </div>
                <CardTitle className="text-white mb-2">Сообщество</CardTitle>
                <CardDescription className="text-gaming-cyan">
                  Тысячи активных продавцов и покупателей
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
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
    </div>
  );
};

export default Index;