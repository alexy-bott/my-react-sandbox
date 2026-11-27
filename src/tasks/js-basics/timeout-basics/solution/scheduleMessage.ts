export function scheduleMessage(showMessage: () => void) {
  // Возвращаем id: вызывающий код сможет отменить отложенное сообщение.
  return setTimeout(showMessage, 1000)
}
