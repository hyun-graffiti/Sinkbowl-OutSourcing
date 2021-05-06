import { ImageViewerProps } from 'components/ImageViewer/ImageViewer'

const generateImageSrc = (index: number) => `/images/faucet/faucet-${index}.jpg`

const Faucet: ImageViewerProps[] = [
  {
    name: '백조씽크 / BF-D4000',
    src: generateImageSrc(1),
  },
  {
    name: '백조씽크 / BF-D3000(레드)',
    src: generateImageSrc(2),
  },
  {
    name: '백조씽크 / BF-D3000(블랙)',
    src: generateImageSrc(3),
  },
  {
    name: '백조씽크 / BF-D2000',
    src: generateImageSrc(4),
  },
  {
    name: '백조씽크 / BF-D1000',
    src: generateImageSrc(5),
  },
  {
    name: '백조씽크 / 자바라 직수 스프레이 린(LYNN)313',
    src: generateImageSrc(6),
  },
  {
    name: '백조씽크 / 거위목 직수 스프레이 카이(KAI)553',
    src: generateImageSrc(7),
  },
  {
    name: '백조씽크 / 자바라 직수 갤리스(GALICE)277',
    src: generateImageSrc(8),
  },
  {
    name: '백조씽크 / 거위목 직수 스프레이 도리스(DORIS)645',
    src: generateImageSrc(9),
  },
  {
    name: '백조씽크 / 자바라 직수 스프레이 에딜런(EDLYN)354',
    src: generateImageSrc(10),
  },
]

export default Faucet
