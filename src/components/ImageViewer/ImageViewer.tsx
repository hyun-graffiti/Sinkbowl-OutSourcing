import { FunctionComponent } from 'react'
import styled from '@emotion/styled'
import { ImageType } from 'components/ImagePresenter/ImagePresenter'

type ImageViewerProps = ImageType

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

const Info = styled.div`
  width: 90%;
  margin: 10px auto 0;
`

const Name = styled.div`
  font-size: 1.1rem;
  font-weight: 300;
  display: inline-block;
  width: 100%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  text-align: center;
`

const ExtraInfo = styled.div`
  font-size: 0.75rem;
  font-weight: 700;
  text-align: center;

  a {
    color: inherit;
  }
`

const ImageViewer: FunctionComponent<ImageViewerProps> = function ({
  name,
  price,
  src,
  link,
}) {
  return (
    <Wrapper>
      <img src={src} alt="preview-image" />
      <Info>
        <Name>{name}</Name>
        <ExtraInfo>
          {parseInt(price).toLocaleString('ko-KR')}원 /{' '}
          <a href={link} target="_blank">
            자세히 보기
          </a>
        </ExtraInfo>
      </Info>
    </Wrapper>
  )
}

export default ImageViewer
