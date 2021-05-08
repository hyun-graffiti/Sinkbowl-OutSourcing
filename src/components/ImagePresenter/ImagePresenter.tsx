import { useState, useRef, FunctionComponent } from 'react'
import styled from '@emotion/styled'
import Slider, { Settings } from 'react-slick'
import ImageViewer from 'components/ImageViewer'
import { ImageViewerProps } from 'components/ImageViewer/ImageViewer'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

type ImagePresenterProps = {
  title: string
  items: ImageViewerProps[]
  afterChange: (presentImages: ImageViewerProps[]) => (current: number) => void
}

type PresenterArrowProps = {
  direction: 'right' | 'left'
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`

const Title = styled.div`
  margin-bottom: 15px;
  padding: 3px 0;
  color: rgba(64, 64, 64, 1);
  font-size: 1.15rem;
  font-weight: 700;
`

const Presenter = styled.div`
  flex: 1;
  width: 100%;
  position: relative;
`

const PresenterArrow = styled.div<PresenterArrowProps>`
  display: grid;
  place-items: center;
  width: 70px;
  height: 100%;
  position: absolute;
  z-index: 5;
  top: 0;
  ${({ direction }) => direction}: 0;
  color: rgba(64, 64, 64, 1);
  font-size: 1.3rem;
  cursor: pointer;
`

const ImagePresenter: FunctionComponent<ImagePresenterProps> = function ({
  title,
  items,
  afterChange,
}) {
  const slider = useRef<Slider | null>(null)
  const [presentImages] = useState<ImageViewerProps[]>(items)

  const settings: Settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    afterChange: afterChange(presentImages),
  }

  const showPrevImage = (): void => {
    if (slider.current === null) return
    slider.current.slickPrev()
  }

  const showNextImage = (): void => {
    if (slider.current === null) return
    slider.current.slickNext()
  }

  return (
    <Wrapper>
      <Title>{title}</Title>
      <Presenter>
        <PresenterArrow onClick={showPrevImage} direction="left">
          ◀
        </PresenterArrow>
        <Slider {...settings} ref={slider}>
          {presentImages.map(({ name, src }: ImageViewerProps) => (
            <ImageViewer name={name} src={src} key={name} />
          ))}
        </Slider>
        <PresenterArrow onClick={showNextImage} direction="right">
          ▶
        </PresenterArrow>
      </Presenter>
    </Wrapper>
  )
}

export default ImagePresenter
