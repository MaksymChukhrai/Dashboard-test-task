
// Проверяем, если `window.browser` ещё не определён
if (typeof window.browser === 'undefined') {
  // Определяем глобальный объект `browser`
  window.browser = {
    runtime: {
      // Метод для отправки сообщений
      sendMessage: (message) => {
        console.log('Попытка отправить сообщение:', message);
        return Promise.resolve({ success: false, error: 'browser API не доступно' });
      },
      // Метод для добавления слушателя сообщений
      onMessage: {
        addListener: (callback) => {
          console.log('Попытка добавить слушатель сообщений');
        }
      }
    },
   
  };
  


}
