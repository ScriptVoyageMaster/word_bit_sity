const express = require('express');
const app = express();
const port = 3000;

// Маршрут для головної сторінки
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

// Запуск сервера
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
