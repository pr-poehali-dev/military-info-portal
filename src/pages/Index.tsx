import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import Icon from "@/components/ui/icon";

const Index = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const newsItems = [
    {
      id: 1,
      title: "Ежедневная сводка оперативной обстановки",
      description: "Обновление по состоянию на 08:00 МСК",
      category: "open",
      time: "08:00",
      priority: "high",
    },
    {
      id: 2,
      title: "Сводка о боевых действиях",
      description: "Информация за последние 24 часа",
      category: "restricted",
      time: "20:00",
      priority: "high",
    },
    {
      id: 3,
      title: "Техническое обслуживание",
      description: "Плановые работы с оборудованием",
      category: "open",
      time: "14:30",
      priority: "medium",
    },
  ];

  const reports = [
    {
      id: 1,
      date: "08.07.2025",
      title: "Отчет о выполнении боевых задач",
      classification: "Для служебного пользования",
      status: "completed",
    },
    {
      id: 2,
      date: "07.07.2025",
      title: "Сводка разведывательных данных",
      classification: "Секретно",
      status: "pending",
    },
  ];

  const getCategoryBadge = (category: string) => {
    switch (category) {
      case "open":
        return (
          <Badge
            variant="outline"
            style={{
              backgroundColor: "var(--military-light)",
              color: "var(--military-dark)",
            }}
          >
            ОТКРЫТО
          </Badge>
        );
      case "restricted":
        return (
          <Badge
            style={{
              backgroundColor: "var(--military-accent)",
              color: "var(--military-dark)",
            }}
          >
            ДСП
          </Badge>
        );
      default:
        return <Badge variant="secondary">НЕИЗВЕСТНО</Badge>;
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "high":
        return "var(--military-accent)";
      case "medium":
        return "var(--military-gray)";
      default:
        return "var(--military-light)";
    }
  };

  return (
    <div
      className="min-h-screen"
      style={{ backgroundColor: "var(--military-light)" }}
    >
      {/* Header */}
      <header
        className="border-b-2"
        style={{
          backgroundColor: "var(--military-green)",
          borderColor: "var(--military-accent)",
        }}
      >
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <img
                src="/img/46dcd728-b9e5-4e16-95cf-0dbf5c92234f.jpg"
                alt="Герб России"
                className="w-12 h-12 rounded-full bg-white p-1"
              />
              <div>
                <h1 className="text-2xl font-bold text-white">
                  4 ГВАРДЕЙСКАЯ ВАПНЯРСКО-БЕРЛИНСКАЯ ВОЕННАЯ БАЗА
                </h1>
                <p
                  className="text-sm"
                  style={{ color: "var(--military-light)" }}
                >
                  Министерство обороны Российской Федерации
                </p>
              </div>
            </div>
            <div className="text-right text-white">
              <div className="text-sm opacity-90 bg-transparent rounded-full">
                08 июля 2025
              </div>
              <div className="text-lg font-mono">08:45 МСК</div>
            </div>
          </div>
        </div>
      </header>

      {/* Navigation */}
      <nav
        className="border-b"
        style={{ backgroundColor: "var(--military-dark)" }}
      >
        <div className="container mx-auto px-4">
          <div className="flex space-x-8">
            {[
              "ГЛАВНАЯ",
              "НОВОСТИ",
              "СВОДКИ",
              "ОТЧЕТЫ",
              "АРХИВ",
              "ДОКУМЕНТЫ",
              "КОНТАКТЫ",
            ].map((item) => (
              <button
                key={item}
                className="py-3 px-2 text-sm font-medium text-white hover:text-yellow-400 transition-colors border-b-2 border-transparent hover:border-yellow-400"
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - News & Updates */}
          <div className="lg:col-span-2">
            <div className="flex items-center justify-between mb-6">
              <h2
                className="text-3xl font-bold"
                style={{ color: "var(--military-dark)" }}
              >
                <Icon name="Newspaper" size={32} className="inline mr-2" />
                ОПЕРАТИВНАЯ ИНФОРМАЦИЯ
              </h2>
              <Button
                variant="outline"
                style={{
                  borderColor: "var(--military-green)",
                  color: "var(--military-green)",
                }}
              >
                <Icon name="Plus" size={16} className="mr-2" />
                Добавить
              </Button>
            </div>

            {/* Classification Filter */}
            <div className="flex space-x-4 mb-6">
              <Button
                variant={selectedCategory === "all" ? "default" : "outline"}
                onClick={() => setSelectedCategory("all")}
                style={{
                  backgroundColor:
                    selectedCategory === "all"
                      ? "var(--military-green)"
                      : "transparent",
                }}
              >
                ВСЕ
              </Button>
              <Button
                variant={selectedCategory === "open" ? "default" : "outline"}
                onClick={() => setSelectedCategory("open")}
                style={{
                  backgroundColor:
                    selectedCategory === "open"
                      ? "var(--military-green)"
                      : "transparent",
                }}
              >
                ОТКРЫТЫЕ
              </Button>
              <Button
                variant={
                  selectedCategory === "restricted" ? "default" : "outline"
                }
                onClick={() => setSelectedCategory("restricted")}
                style={{
                  backgroundColor:
                    selectedCategory === "restricted"
                      ? "var(--military-green)"
                      : "transparent",
                }}
              >
                СЛУЖЕБНЫЕ
              </Button>
            </div>

            {/* News Cards */}
            <div className="space-y-4">
              {newsItems
                .filter(
                  (item) =>
                    selectedCategory === "all" ||
                    item.category === selectedCategory,
                )
                .map((item) => (
                  <Card
                    key={item.id}
                    className="hover:shadow-lg transition-shadow border-l-4"
                    style={{ borderLeftColor: getPriorityColor(item.priority) }}
                  >
                    <CardHeader className="pb-3">
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <div className="flex items-center space-x-2 mb-2">
                            {getCategoryBadge(item.category)}
                            <span className="text-sm text-gray-500">
                              {item.time}
                            </span>
                          </div>
                          <CardTitle
                            className="text-lg"
                            style={{ color: "var(--military-dark)" }}
                          >
                            {item.title}
                          </CardTitle>
                          <CardDescription className="mt-1">
                            {item.description}
                          </CardDescription>
                        </div>
                        <Icon
                          name="ChevronRight"
                          size={20}
                          className="text-gray-400 mt-1"
                        />
                      </div>
                    </CardHeader>
                  </Card>
                ))}
            </div>
          </div>

          {/* Right Column - Reports & Quick Access */}
          <div className="space-y-6">
            {/* Daily Reports */}
            <Card>
              <CardHeader>
                <CardTitle
                  className="flex items-center"
                  style={{ color: "var(--military-dark)" }}
                >
                  <Icon name="FileText" size={20} className="mr-2" />
                  ЕЖЕДНЕВНЫЕ ОТЧЕТЫ
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {reports.map((report) => (
                    <div
                      key={report.id}
                      className="p-3 rounded border"
                      style={{ backgroundColor: "var(--military-light)" }}
                    >
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-medium">
                          {report.date}
                        </span>
                        <Badge
                          variant={
                            report.status === "completed"
                              ? "default"
                              : "secondary"
                          }
                          style={{ backgroundColor: "var(--military-green)" }}
                        >
                          {report.status === "completed" ? "ГОТОВ" : "В РАБОТЕ"}
                        </Badge>
                      </div>
                      <h4 className="font-medium text-sm mb-1">
                        {report.title}
                      </h4>
                      <p className="text-xs text-gray-600">
                        {report.classification}
                      </p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card>
              <CardHeader>
                <CardTitle
                  className="flex items-center"
                  style={{ color: "var(--military-dark)" }}
                >
                  <Icon name="Settings" size={20} className="mr-2" />
                  БЫСТРЫЕ ДЕЙСТВИЯ
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-3">
                  <Button
                    variant="outline"
                    className="h-16 flex-col"
                    style={{ borderColor: "var(--military-green)" }}
                  >
                    <Icon name="Search" size={20} className="mb-1" />
                    <span className="text-xs">ПОИСК</span>
                  </Button>
                  <Button
                    variant="outline"
                    className="h-16 flex-col"
                    style={{ borderColor: "var(--military-green)" }}
                  >
                    <Icon name="Archive" size={20} className="mb-1" />
                    <span className="text-xs">АРХИВ</span>
                  </Button>
                  <Button
                    variant="outline"
                    className="h-16 flex-col"
                    style={{ borderColor: "var(--military-green)" }}
                  >
                    <Icon name="Users" size={20} className="mb-1" />
                    <span className="text-xs">КОНТАКТЫ</span>
                  </Button>
                  <Button
                    variant="outline"
                    className="h-16 flex-col"
                    style={{ borderColor: "var(--military-green)" }}
                  >
                    <Icon name="HelpCircle" size={20} className="mb-1" />
                    <span className="text-xs">ПОМОЩЬ</span>
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* System Status */}
            <Card>
              <CardHeader>
                <CardTitle
                  className="flex items-center"
                  style={{ color: "var(--military-dark)" }}
                >
                  <Icon name="Activity" size={20} className="mr-2" />
                  СТАТУС СИСТЕМЫ
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Связь</span>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 rounded-full bg-green-500"></div>
                      <span className="text-xs text-green-600">АКТИВНА</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Серверы</span>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 rounded-full bg-green-500"></div>
                      <span className="text-xs text-green-600">ОНЛАЙН</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Безопасность</span>
                    <div className="flex items-center space-x-2">
                      <div
                        className="w-2 h-2 rounded-full"
                        style={{ backgroundColor: "var(--military-accent)" }}
                      ></div>
                      <span
                        className="text-xs"
                        style={{ color: "var(--military-gray)" }}
                      >
                        ПРОВЕРКА
                      </span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer
        className="border-t mt-12"
        style={{ backgroundColor: "var(--military-dark)" }}
      >
        <div className="container mx-auto px-4 py-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div>
              <h3 className="text-white font-semibold mb-3">ИНФОРМАЦИЯ</h3>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>
                  <a href="#" className="hover:text-yellow-400">
                    О проекте
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-yellow-400">
                    Инструкции
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-yellow-400">
                    Техподдержка
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-3">ДОКУМЕНТЫ</h3>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>
                  <a href="#" className="hover:text-yellow-400">
                    Регламенты
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-yellow-400">
                    Приказы
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-yellow-400">
                    Инструкции
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-3">СВЯЗЬ</h3>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>
                  <a href="#" className="hover:text-yellow-400">
                    Дежурная часть
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-yellow-400">
                    Техническая служба
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-yellow-400">
                    Экстренная связь
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-3">СИСТЕМА</h3>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>
                  <a href="#" className="hover:text-yellow-400">
                    Статус серверов
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-yellow-400">
                    Обновления
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-yellow-400">
                    Безопасность
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <Separator className="my-6" />
          <div className="text-center text-sm text-gray-400">
            © 2025 Министерство обороны Российской Федерации. Все права
            защищены.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
