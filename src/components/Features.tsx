import { Card, CardContent, CardDescription, CardTitle } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Features = () => {
  return (
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
  );
};

export default Features;