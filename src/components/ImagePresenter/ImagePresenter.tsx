import { useState, useEffect, useRef, FunctionComponent } from 'react'
import styled from '@emotion/styled'
import Slider, { Settings } from 'react-slick'
import ImageViewer from 'components/ImageViewer'
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

export type ImageType = {
  id: string
  name: string
  src: string
}

type ImagePresenterProps = {
  title: string
  items: ImageType[]
  afterChange: (presentImages: ImageType[]) => (current: number) => void
  setDecoratedSelectableItem: (id: string) => void
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 430px;
  padding: 15px;
  box-shadow: 0 0 8px rgba(64, 64, 64, 0.25);
  border-radius: 15px;
`

const Title = styled.div`
  margin-bottom: 15px;
  padding: 0 0 15px;
  color: rgba(64, 64, 64, 0.9);
  border-bottom: 1px solid rgba(64, 64, 64, 1);
  font-size: 1.15rem;
  font-weight: 700;
  text-align: center;
`

const Presenter = styled.div`
  flex: 1;
  width: 100%;
  position: relative;
`

const NextImageIcon = styled.div`
  position: absolute;
  top: 50%;
  right: 0;
  transform: translateY(-50%);
  z-index: 10;
  font-size: 2rem;
  cursor: pointer;
  color: rgba(64, 64, 64, 1);
`

const PrevImageIcon = styled.div`
  position: absolute;
  top: 50%;
  left: 0;
  transform: translateY(-50%);
  z-index: 10;
  font-size: 2rem;
  cursor: pointer;
  color: rgba(64, 64, 64, 1);
`

const Info = styled.div`
  display: grid;
  place-items: center;
  width: 100%;
  height: 100%;
  color: rgba(64, 64, 64, 0.8);
  font-size: 1.2rem;
  font-weight: 300;
  text-align: center;
  line-height: 1.5;
`

const ImagePresenter: FunctionComponent<ImagePresenterProps> = function ({
  title,
  items,
  afterChange,
  setDecoratedSelectableItem,
}) {
  const slider = useRef<Slider | null>(null)
  const [presentImages, setPresentImages] = useState<ImageType[]>(items)

  useEffect(() => {
    setPresentImages(items)

    if (items.length !== 0) setDecoratedSelectableItem(items[0].id)
  }, [items])

  const settings: Settings = {
    dots: false,
    arrows: false,
    infinite: false,
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
        {presentImages.length !== 0 ? (
          <>
            <PrevImageIcon onClick={showPrevImage}>
              <MdKeyboardArrowLeft />
            </PrevImageIcon>

            <Slider {...settings} ref={slider}>
              {presentImages.map(({ id, name, src }: ImageType) => (
                <ImageViewer id={id} name={name} src={src} key={id} />
              ))}
            </Slider>

            <NextImageIcon onClick={showNextImage}>
              <MdKeyboardArrowRight />
            </NextImageIcon>
          </>
        ) : (
          <Info>
            상단의 도움말에 따라
            <br />
            사용 가능한 싱크볼을
            <br />
            필터링해주세요.
          </Info>
        )}
      </Presenter>
    </Wrapper>
  )
}

export default ImagePresenter
