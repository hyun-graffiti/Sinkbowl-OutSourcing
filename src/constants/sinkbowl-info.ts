export type SinkbowlInfoType = {
  'width-min': number
  'width-max': number
  'height-min': number
  'height-max': number
  'size-min': number
  'size-max': number
  name: string
  src: string
}

export const SinkbowlInfo: SinkbowlInfoType[] = [
  {
    'width-min': 10,
    'width-max': 40,
    'height-min': 10,
    'height-max': 40,
    'size-min': 10,
    'size-max': 40,
    name: '사과 1',
    src: '/images/apple-1.png',
  },
  {
    'width-min': 40,
    'width-max': 80,
    'height-min': 40,
    'height-max': 80,
    'size-min': 40,
    'size-max': 80,
    name: '사과 2',
    src: '/images/apple-2.png',
  },
]
