import { useState } from "react";
import { toast } from "@/components/ui/use-toast";
import { Toaster } from "@/components/ui/toaster";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ProductGrid from "@/components/ProductGrid";
import Features from "@/components/Features";
import Footer from "@/components/Footer";

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
      <Header
        balance={balance}
        isLoggedIn={isLoggedIn}
        userProfile={userProfile}
        isAuthOpen={isAuthOpen}
        setIsAuthOpen={setIsAuthOpen}
        buyRobuxOpen={buyRobuxOpen}
        setBuyRobuxOpen={setBuyRobuxOpen}
        robuxAmount={robuxAmount}
        setRobuxAmount={setRobuxAmount}
        nickname={nickname}
        setNickname={setNickname}
        orders={orders}
        loginForm={loginForm}
        setLoginForm={setLoginForm}
        registerForm={registerForm}
        setRegisterForm={setRegisterForm}
        handleRobuxPurchase={handleRobuxPurchase}
        handleLogin={handleLogin}
        handleRegister={handleRegister}
        handleLogout={handleLogout}
      />
      
      <Hero />
      
      <ProductGrid
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        getItemsByCategory={getItemsByCategory}
      />
      
      <Features />
      
      <Footer />
      
      <Toaster />
    </div>
  );
};

export default Index;