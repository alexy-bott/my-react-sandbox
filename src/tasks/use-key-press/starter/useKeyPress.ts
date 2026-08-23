type KeyPressOptions = {
  target?: EventTarget
  event?: 'keydown' | 'keyup'
}

export function useKeyPress(
  key: string,
  callback: (event: KeyboardEvent) => void,
  {target = window, event = 'keydown'}: KeyPressOptions = {},
) {
  void key
  void callback
  void target
  void event
}
