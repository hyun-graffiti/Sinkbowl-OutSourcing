import { FunctionComponent } from 'react'
import styled from '@emotion/styled'

export type ImageViewerProps = {
  id: string
  name: string
  src: string
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    height: 300px;
  }
`

const ImageViewer: FunctionComponent<ImageViewerProps> = function ({
  name,
  src,
}) {
  return (
    <Wrapper>
      <div>{name}</div>
      <img src={src} alt="preview-image" />
    </Wrapper>
  )
}

export default ImageViewer
