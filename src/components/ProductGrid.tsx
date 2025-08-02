import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Icon from "@/components/ui/icon";

interface ProductGridProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  getItemsByCategory: () => any[];
}

const ProductGrid = ({ activeTab, setActiveTab, getItemsByCategory }: ProductGridProps) => {
  return (
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
  );
};

export default ProductGrid;