import { ImageViewerProps } from 'components/ImageViewer/ImageViewer'

const generateImageSrc = (index: number) => `/images/faucet/faucet-${index}.jpg`

const Waterspout: ImageViewerProps[] = [
  {
    name: '배수구 1',
    src: generateImageSrc(1),
  },
  {
    name: '배수구 2',
    src: generateImageSrc(2),
  },
  {
    name: '배수구 3',
    src: generateImageSrc(3),
  },
]

export default Waterspout
