import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { toast } from "@/components/ui/use-toast";
import { Toaster } from "@/components/ui/toaster";
import Icon from "@/components/ui/icon";

const Index = () => {
  const [isAuthOpen, setIsAuthOpen] = useState(false);
  const [balance, setBalance] = useState(0);
  const [activeTab, setActiveTab] = useState("games");
  const [buyRobuxOpen, setBuyRobuxOpen] = useState(false);
  const [robuxAmount, setRobuxAmount] = useState("");
  const [nickname, setNickname] = useState("");
  const [orders, setOrders] = useState<any[]>([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userProfile, setUserProfile] = useState({
    name: "",
    email: "",
    avatar: ""
  });
  const [loginForm, setLoginForm] = useState({ email: "", password: "" });
  const [registerForm, setRegisterForm] = useState({ name: "", email: "", password: "" });

  const gameItems = [
    {
      id: 2,
      title: "Roblox Premium",
      price: 299,
      image: "/img/cafaa466-8d0b-4ce5-8ffa-d74f6f707dac.jpg",
      category: "Игры",
      seller: "ProGaming"
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

  const handleRobuxPurchase = () => {
    if (!robuxAmount || !nickname) {
      toast({
        title: "Ошибка",
        description: "Заполните все поля",
        variant: "destructive",
      });
      return;
    }

    const newOrder = {
      id: Date.now(),
      type: "robux",
      amount: robuxAmount,
      nickname: nickname,
      timestamp: new Date().toLocaleString('ru-RU'),
      status: "В обработке"
    };

    setOrders([...orders, newOrder]);
    
    toast({
      title: "Заказ создан!",
      description: `Администратор получил заказ на ${robuxAmount} робуксов для ${nickname}`,
    });

    setRobuxAmount("");
    setNickname("");
    setBuyRobuxOpen(false);
  };

  const handleLogin = () => {
    if (!loginForm.email || !loginForm.password) {
      toast({
        title: "Ошибка",
        description: "Заполните все поля",
        variant: "destructive",
      });
      return;
    }

    setUserProfile({
      name: loginForm.email.split('@')[0],
      email: loginForm.email,
      avatar: `https://api.dicebear.com/7.x/avataaars/svg?seed=${loginForm.email}`
    });
    setIsLoggedIn(true);
    setIsAuthOpen(false);
    setBalance(500);
    
    toast({
      title: "Добро пожаловать!",
      description: "Вы успешно вошли в систему",
    });
  };

  const handleRegister = () => {
    if (!registerForm.name || !registerForm.email || !registerForm.password) {
      toast({
        title: "Ошибка",
        description: "Заполните все поля",
        variant: "destructive",
      });
      return;
    }

    setUserProfile({
      name: registerForm.name,
      email: registerForm.email,
      avatar: `https://api.dicebear.com/7.x/avataaars/svg?seed=${registerForm.email}`
    });
    setIsLoggedIn(true);
    setIsAuthOpen(false);
    setBalance(1000);
    
    toast({
      title: "Регистрация успешна!",
      description: "Добро пожаловать на платформу!",
    });
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUserProfile({ name: "", email: "", avatar: "" });
    setBalance(0);
    setOrders([]);
    setLoginForm({ email: "", password: "" });
    setRegisterForm({ name: "", email: "", password: "" });
    
    toast({
      title: "До свидания!",
      description: "Вы вышли из системы",
    });
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
                <Dialog open={buyRobuxOpen} onOpenChange={setBuyRobuxOpen}>
                  <DialogTrigger asChild>
                    <Button variant="ghost" className="text-white hover:text-gaming-cyan">
                      <Icon name="Coins" size={16} className="mr-2" />
                      Робуксы
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="bg-gaming-dark border-gaming-purple/30">
                    <DialogHeader>
                      <DialogTitle className="text-white">Купить Робуксы</DialogTitle>
                      <DialogDescription className="text-gaming-cyan">
                        Укажите количество робуксов и ваш никнейм в Roblox
                      </DialogDescription>
                    </DialogHeader>
                    <div className="space-y-4">
                      <div>
                        <Label htmlFor="robux-amount" className="text-white">Количество робуксов</Label>
                        <Input
                          id="robux-amount"
                          type="number"
                          placeholder="Например: 800"
                          value={robuxAmount}
                          onChange={(e) => setRobuxAmount(e.target.value)}
                          className="bg-gaming-blue border-gaming-purple/30 text-white"
                        />
                      </div>
                      <div>
                        <Label htmlFor="nickname" className="text-white">Никнейм в Roblox</Label>
                        <Input
                          id="nickname"
                          placeholder="Ваш никнейм"
                          value={nickname}
                          onChange={(e) => setNickname(e.target.value)}
                          className="bg-gaming-blue border-gaming-purple/30 text-white"
                        />
                      </div>
                      <Button 
                        onClick={handleRobuxPurchase} 
                        className="w-full bg-gaming-purple hover:bg-gaming-purple/80"
                      >
                        <Icon name="ShoppingCart" size={16} className="mr-2" />
                        Создать заказ
                      </Button>
                    </div>
                  </DialogContent>
                </Dialog>
                <Dialog>
                  <DialogTrigger asChild>
                    <Button variant="ghost" className="text-white hover:text-gaming-cyan">
                      <Icon name="Package" size={16} className="mr-2" />
                      Заказы ({orders.length})
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="bg-gaming-dark border-gaming-purple/30 max-w-2xl">
                    <DialogHeader>
                      <DialogTitle className="text-white">Заказы</DialogTitle>
                      <DialogDescription className="text-gaming-cyan">
                        История ваших заказов
                      </DialogDescription>
                    </DialogHeader>
                    <div className="space-y-4 max-h-80 overflow-y-auto">
                      {orders.length === 0 ? (
                        <p className="text-gaming-cyan text-center py-8">Заказов пока нет</p>
                      ) : (
                        orders.map((order) => (
                          <Card key={order.id} className="bg-gaming-blue/30 border-gaming-purple/30">
                            <CardContent className="p-4">
                              <div className="flex justify-between items-start">
                                <div>
                                  <p className="text-white font-semibold">
                                    {order.amount} робуксов для {order.nickname}
                                  </p>
                                  <p className="text-gaming-cyan text-sm">{order.timestamp}</p>
                                </div>
                                <Badge className="bg-gaming-orange text-white">
                                  {order.status}
                                </Badge>
                              </div>
                            </CardContent>
                          </Card>
                        ))
                      )}
                    </div>
                  </DialogContent>
                </Dialog>
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

              {/* User Profile or Auth */}
              {isLoggedIn ? (
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" className="flex items-center space-x-3 p-2">
                      <Avatar className="w-8 h-8">
                        <AvatarImage src={userProfile.avatar} alt={userProfile.name} />
                        <AvatarFallback className="bg-gaming-purple text-white">
                          {userProfile.name.charAt(0).toUpperCase()}
                        </AvatarFallback>
                      </Avatar>
                      <span className="text-white hidden md:block">{userProfile.name}</span>
                      <Icon name="ChevronDown" size={16} className="text-white" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="bg-gaming-dark border-gaming-purple/30">
                    <DropdownMenuItem className="text-white hover:bg-gaming-purple/20">
                      <Icon name="User" size={16} className="mr-2" />
                      Профиль
                    </DropdownMenuItem>
                    <DropdownMenuItem className="text-white hover:bg-gaming-purple/20">
                      <Icon name="Settings" size={16} className="mr-2" />
                      Настройки
                    </DropdownMenuItem>
                    <DropdownMenuItem 
                      onClick={handleLogout}
                      className="text-gaming-orange hover:bg-gaming-orange/20"
                    >
                      <Icon name="LogOut" size={16} className="mr-2" />
                      Выйти
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              ) : (
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
                      <Input 
                        placeholder="Email" 
                        value={loginForm.email}
                        onChange={(e) => setLoginForm({...loginForm, email: e.target.value})}
                        className="bg-gaming-blue border-gaming-purple/30 text-white" 
                      />
                      <Input 
                        type="password" 
                        placeholder="Пароль"
                        value={loginForm.password}
                        onChange={(e) => setLoginForm({...loginForm, password: e.target.value})}
                        className="bg-gaming-blue border-gaming-purple/30 text-white" 
                      />
                      <Button onClick={handleLogin} className="w-full bg-gaming-purple hover:bg-gaming-purple/80">
                        Войти
                      </Button>
                    </TabsContent>
                    <TabsContent value="register" className="space-y-4">
                      <Input 
                        placeholder="Имя пользователя"
                        value={registerForm.name}
                        onChange={(e) => setRegisterForm({...registerForm, name: e.target.value})}
                        className="bg-gaming-blue border-gaming-purple/30 text-white" 
                      />
                      <Input 
                        placeholder="Email"
                        value={registerForm.email}
                        onChange={(e) => setRegisterForm({...registerForm, email: e.target.value})}
                        className="bg-gaming-blue border-gaming-purple/30 text-white" 
                      />
                      <Input 
                        type="password" 
                        placeholder="Пароль"
                        value={registerForm.password}
                        onChange={(e) => setRegisterForm({...registerForm, password: e.target.value})}
                        className="bg-gaming-blue border-gaming-purple/30 text-white" 
                      />
                      <Button onClick={handleRegister} className="w-full bg-gaming-orange hover:bg-gaming-orange/80">
                        Зарегистрироваться
                      </Button>
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
      <Toaster />
    </div>
  );
};

export default Index;