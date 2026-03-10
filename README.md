# Магазин

Одностраничное приложение на React + TypeScript.

## Что реализовано

- Список товаров с изображением, названием и ценой
- Поиск по названию в реальном времени
- Фильтрация по категориям
- Модальное окно с полной информацией о товаре — закрывается по кнопке X, клику вне окна и клавише Esc
- Имитация API-запроса через хук `useProducts`
- Адаптивная верстка: мобильные (≤ 480px), планшеты (≤ 768px), десктоп

## Стек

- React 18
- TypeScript
- CSS 

## Требования

Нужен [Node.js](https://nodejs.org) версии 16 или выше. Проверить:

```bash
node -v
```

## Запуск

```bash
npm install
npm start
```

Открой [http://localhost:3000](http://localhost:3000) в браузере.

## Структура проекта

```
src/
├── components/       # SearchBar, ProductCard, CategoryFilter, Modal
├── hooks/            # useProducts, useProductsFilter, useModal
├── mocks/            # Моковые данные (имитация API)
├── types/            # TypeScript типы
├── App.tsx
└── App.css
```
