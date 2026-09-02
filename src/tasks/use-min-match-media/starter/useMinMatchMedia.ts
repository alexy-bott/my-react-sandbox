export interface MediaDimensions {
  width: number
  height: number
}

export const useMinMatchMedia = (
  mediaParams: MediaDimensions,
  callback?: () => void,
): boolean => {
  void mediaParams
  void callback

  return false
}
