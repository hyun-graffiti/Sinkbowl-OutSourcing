import { ImageType } from 'components/ImagePresenter/ImagePresenter'

const generateImageSrc = (index: number) => `/images/faucet/faucet-${index}.jpg`

const Waterspout: ImageType[] = [
  {
    id: 'waterspout-1',
    name: '배수구 1',
    src: generateImageSrc(1),
  },
  {
    id: 'waterspout-2',
    name: '배수구 2',
    src: generateImageSrc(2),
  },
  {
    id: 'waterspout-3',
    name: '배수구 3',
    src: generateImageSrc(3),
  },
]

export default Waterspout
