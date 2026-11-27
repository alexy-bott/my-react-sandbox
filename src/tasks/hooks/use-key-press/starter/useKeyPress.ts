type KeyPressOptions = {
  target?: EventTarget
  event?: 'keydown' | 'keyup'
}

export function useKeyPress(
  _key: string,
  _callback: (event: KeyboardEvent) => void,
  _options: KeyPressOptions = {},
) {
}
