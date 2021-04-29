import { FunctionComponent } from 'react'
import { SinkbowlInfoType } from 'constants/sinkbowl-info'

type ImagePresenterProps = {
  sinkbowl: SinkbowlInfoType[]
}

const ImagePresenter: FunctionComponent<ImagePresenterProps> = function ({
  sinkbowl,
}) {
  return (
    <div>
      {sinkbowl.map(({ name, src }: SinkbowlInfoType) => (
        <div key={name}>
          <div>{name}</div>
          <img src={src} alt="image" />
        </div>
      ))}
    </div>
  )
}

export default ImagePresenter
