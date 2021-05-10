import { ImageViewerProps } from 'components/ImageViewer/ImageViewer'

export type SinkbowlType = {
  width: number
  height: number
} & ImageViewerProps

const generateImageSrc = (id: number): string =>
  `/images/sinkbowl/sinkbowl-${id}.jpg`

const Sinkbowl: SinkbowlType[] = [
  {
    id: 'sinkbowl-1',
    width: 500,
    height: 500,
    name: '엠보 WDS500 (배수구 포함)',
    src: generateImageSrc(1),
  },
  {
    id: 'sinkbowl-2',
    width: 850,
    height: 515,
    name: '엠보 FDS850 SET (악세사리 + 배수구)',
    src: generateImageSrc(2),
  },
  {
    id: 'sinkbowl-3',
    width: 761,
    height: 465,
    name: '엠보 프리미엄 사각볼 ZR009 (배수구 포함)',
    src: generateImageSrc(3),
  },
  {
    id: 'sinkbowl-4',
    width: 900,
    height: 520,
    name: '엠보 3D900 SET (악세사리 + 배수구)',
    src: generateImageSrc(4),
  },
  {
    id: 'sinkbowl-5',
    width: 860,
    height: 515,
    name: '엠보 WAVE860 SET (악세사리 + 배수구)',
    src: generateImageSrc(5),
  },
  {
    id: 'sinkbowl-6',
    width: 850,
    height: 460,
    name: '엠보 SJS850 (배수구 포함)',
    src: generateImageSrc(6),
  },
  {
    id: 'sinkbowl-7',
    width: 870,
    height: 480,
    name: '엠보 JS870 (배수구 포함)',
    src: generateImageSrc(7),
  },
  {
    id: 'sinkbowl-8',
    width: 850,
    height: 515,
    name: '엠보 NS850 (배수구 포함)',
    src: generateImageSrc(8),
  },
  {
    id: 'sinkbowl-9',
    width: 550,
    height: 440,
    name: '엠보 SC550 (배수구 포함)',
    src: generateImageSrc(9),
  },
  {
    id: 'sinkbowl-10',
    width: 840,
    height: 510,
    name: '엠보 RS840 (배수구 포함)',
    src: generateImageSrc(10),
  },
  {
    id: 'sinkbowl-11',
    width: 630,
    height: 470,
    name: '엠보 OS630 (배수구 포함)',
    src: generateImageSrc(11),
  },
  {
    id: 'sinkbowl-12',
    width: 630,
    height: 470,
    name: '엠보 OS630 배수구포함',
    src: generateImageSrc(12),
  },
  {
    id: 'sinkbowl-13',
    width: 870,
    height: 515,
    name: '엠보 EDGE870 SET (악세사리 + 배수구)',
    src: generateImageSrc(13),
  },
  {
    id: 'sinkbowl-14',
    width: 740,
    height: 515,
    name: '엠보 DS740 SET (악세사리 + 배수구)',
    src: generateImageSrc(14),
  },
  {
    id: 'sinkbowl-15',
    width: 980,
    height: 525,
    name: 'DS980 SET',
    src: generateImageSrc(15),
  },
  {
    id: 'sinkbowl-16',
    width: 835,
    height: 479,
    name: 'Age-Friendly 835',
    src: generateImageSrc(16),
  },
  {
    id: 'sinkbowl-17',
    width: 430,
    height: 476,
    name: 'Age-Friendly 430',
    src: generateImageSrc(17),
  },
  {
    id: 'sinkbowl-18',
    width: 500,
    height: 500,
    name: '싱크볼 WDS500 (배수구 포함)',
    src: generateImageSrc(18),
  },
]

export default Sinkbowl
