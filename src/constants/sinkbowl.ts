import { ImageViewerProps } from 'components/ImageViewer/ImageViewer'

export type SinkbowlType = {
  width: number
  height: number
  thickness: number
} & ImageViewerProps

const Sinkbowl: SinkbowlType[] = [
  {
    id: 'sinkbowl-1',
    width: 500,
    height: 500,
    thickness: 0.6,
    name: '엠보 WDS500 / 배수구포함',
    src: '/images/sinkbowl/sinkbowl-1.jpg',
  },
  {
    id: 'sinkbowl-2',
    width: 850,
    height: 515,
    thickness: 0.6,
    name: '엠보 FDS850 SET (악세사리+배수구)',
    src: '/images/sinkbowl/sinkbowl-2.jpg',
  },
]

export default Sinkbowl
