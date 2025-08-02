import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import Icon from "@/components/ui/icon";

interface HeaderProps {
  balance: number;
  isLoggedIn: boolean;
  userProfile: {
    name: string;
    email: string;
    avatar: string;
  };
  isAuthOpen: boolean;
  setIsAuthOpen: (open: boolean) => void;
  buyRobuxOpen: boolean;
  setBuyRobuxOpen: (open: boolean) => void;
  robuxAmount: string;
  setRobuxAmount: (amount: string) => void;
  nickname: string;
  setNickname: (nickname: string) => void;
  orders: any[];
  loginForm: { email: string; password: string };
  setLoginForm: (form: { email: string; password: string }) => void;
  registerForm: { name: string; email: string; password: string };
  setRegisterForm: (form: { name: string; email: string; password: string }) => void;
  handleRobuxPurchase: () => void;
  handleLogin: () => void;
  handleRegister: () => void;
  handleLogout: () => void;
}

const Header = ({
  balance,
  isLoggedIn,
  userProfile,
  isAuthOpen,
  setIsAuthOpen,
  buyRobuxOpen,
  setBuyRobuxOpen,
  robuxAmount,
  setRobuxAmount,
  nickname,
  setNickname,
  orders,
  loginForm,
  setLoginForm,
  registerForm,
  setRegisterForm,
  handleRobuxPurchase,
  handleLogin,
  handleRegister,
  handleLogout,
}: HeaderProps) => {
  return (
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
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;