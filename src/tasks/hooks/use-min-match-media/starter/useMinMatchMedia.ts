export interface MediaDimensions {
  width: number
  height: number
}

export const useMinMatchMedia = (
  _mediaParams: MediaDimensions,
  _callback?: () => void,
): boolean => {

  return false
}
