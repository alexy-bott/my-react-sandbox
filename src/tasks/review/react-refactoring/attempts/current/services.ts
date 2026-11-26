export type ReviewData = {
  argument: number
  checksum: number
}

export function bigComputations(argument: number): ReviewData {
  let checksum = 0

  for (let index = 0; index < 50_000; index += 1) {
    checksum = (checksum + argument * index) % 997
  }

  return {argument, checksum}
}

export function sendMetric(name: string) {
  console.log('metric', name)
}

export function sendData(data: ReviewData, itemId: number) {
  console.log('data', data, itemId)
}
