export function scheduleMessage(showMessage: () => void) {
  // Твой код здесь: запланируй один вызов showMessage через 1000 мс.

  return setTimeout(showMessage, 1000);
}
