import { FunctionComponent } from 'react'
import styled from '@emotion/styled'

type ImageViewerProps = {
  id: string
  name: string
  src: string
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    width: 100%;
    height: 300px;
    object-fit: contain;
  }
`

const Name = styled.div`
  margin-top: 10px;
  font-size: 1.1rem;
  font-weight: 300;
  display: inline-block;
  width: 100%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  text-align: center;
`

const ImageViewer: FunctionComponent<ImageViewerProps> = function ({
  name,
  src,
}) {
  return (
    <Wrapper>
      <img src={src} alt="preview-image" />
      <Name>{name}</Name>
    </Wrapper>
  )
}

export default ImageViewer
