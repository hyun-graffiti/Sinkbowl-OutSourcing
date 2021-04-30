import { useRef, FunctionComponent } from 'react'
import styled from '@emotion/styled'
import { SinkbowlInfoType } from 'constants/sinkbowl-info'
import Slider, { Settings } from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

type ImagePresenterProps = {
  sinkbowl: SinkbowlInfoType[]
}

type PresenterArrowProps = {
  direction: 'right' | 'left'
}

const Presenter = styled.div`
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
  color: #4c6ef5;
  font-size: 1.3rem;
  cursor: pointer;
`

const ImagePresenter: FunctionComponent<ImagePresenterProps> = function ({
  sinkbowl,
}) {
  const slider = useRef<Slider | null>(null)

  const settings: Settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  }

  console.log(sinkbowl)

  const showNextImage = (): void => {
    if (slider.current === null) return
    slider.current.slickNext()
  }

  return (
    <Presenter>
      <PresenterArrow onClick={showNextImage} direction="left">
        ◀
      </PresenterArrow>
      <Slider {...settings} ref={slider}>
        {/* {sinkbowl.map(({ name, src }: SinkbowlInfoType) => (
        <div key={name}>
          <div>{name}</div>
          <img src={src} alt="image" />
        </div>
      ))} */}
        <div>1</div>
        <div>2</div>
        <div>3</div>
      </Slider>
      <PresenterArrow onClick={showNextImage} direction="right">
        ▶
      </PresenterArrow>
    </Presenter>
  )
}

export default ImagePresenter
