import {
  useState,
  useEffect,
  useRef,
  FunctionComponent,
  ChangeEvent,
  MutableRefObject,
} from 'react'
import styled from '@emotion/styled'
import Slider, { Settings } from 'react-slick'
import ImageViewer from 'components/ImageViewer'
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

export type ImageType = {
  id: string
  name: string
  price: string
  src: string
  link: string
}

type ImagePresenterProps = {
  name: 'sinkbowl' | 'faucet' | 'waterspout'
  title: string
  items: ImageType[]
  afterChange: (presentImages: ImageType[]) => (current: number) => void
  setDecoratedSelectableItem: (id: string) => void
  isFirst?: boolean
  selectBox: boolean
  isNotSelect?: boolean
  setIsNotSelect?: (value: boolean) => void
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 15px;
  box-shadow: 0 0 8px rgba(64, 64, 64, 0.25);
  border-radius: 15px;

  @media (max-width: 768px) {
    & + & {
      margin-top: 30px;
    }
  }
`

const Title = styled.div`
  margin-bottom: 15px;
  padding: 0 0 15px;
  color: rgba(64, 64, 64, 0.9);
  border-bottom: 1px solid rgba(64, 64, 64, 1);
  font-size: 1.15rem;
  font-weight: 700;
  text-align: center;

  @media (max-width: 992px) {
    font-size: 0.9rem;
  }
`

const Presenter = styled.div`
  flex: 1;
  width: 100%;
  position: relative;
`

const NextImageIcon = styled.div`
  position: absolute;
  top: 45%;
  right: -7px;
  transform: translateY(-50%);
  z-index: 10;
  font-size: 2rem;
  cursor: pointer;
  color: rgba(64, 64, 64, 1);
`

const PrevImageIcon = styled.div`
  position: absolute;
  top: 45%;
  left: -7px;
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

const SelectBox = styled.label<{ selectBox: boolean }>`
  display: flex;
  align-items: center;
  margin: 20px auto 0;
  font-size: 0.9rem;
  visibility: ${({ selectBox }) => (selectBox ? 'visible' : 'hidden')};

  input {
    margin-top: 1px;
    margin-right: 5px;
  }

  @media (max-width: 992px) {
    font-size: 0.8rem;
  }

  @media (max-width: 768px) {
    display: ${({ selectBox }) => (selectBox ? 'flex' : 'none')};
  }
`

const ImagePresenter: FunctionComponent<ImagePresenterProps> = function ({
  name,
  title,
  items,
  afterChange,
  setDecoratedSelectableItem,
  isFirst,
  selectBox,
  isNotSelect,
  setIsNotSelect,
}) {
  const slider = useRef<Slider | null>(null)
  const [presentImages, setPresentImages] = useState<ImageType[]>(items)

  useEffect(() => {
    setPresentImages(items)

    if (items.length !== 0) setDecoratedSelectableItem(items[0].id)
    else setDecoratedSelectableItem('')
  }, [items])

  const handleChangeCheckbox = ({
    target: { checked },
  }: ChangeEvent<HTMLInputElement>) => {
    if (setIsNotSelect === undefined) return
    setIsNotSelect(checked)
  }

  return (
    <Wrapper>
      <Title>{title}</Title>

      <Contents
        name={name}
        presentImages={presentImages}
        isFirst={isFirst}
        isNotSelect={isNotSelect}
        slider={slider}
        afterChange={afterChange}
      />

      <SelectBox selectBox={selectBox}>
        <input
          type="checkbox"
          checked={isNotSelect}
          onChange={handleChangeCheckbox}
        />
        <p>
          ???????????? (
          {name === 'faucet' ? '????????????/???????????????' : '??????????????? ????????????'})
        </p>
      </SelectBox>
    </Wrapper>
  )
}

type ContentsProps = {
  name: 'sinkbowl' | 'faucet' | 'waterspout'
  presentImages: ImageType[]
  isFirst?: boolean
  isNotSelect?: boolean
  slider: MutableRefObject<Slider | null>
  afterChange: (presentImages: ImageType[]) => (current: number) => void
}

const Contents: FunctionComponent<ContentsProps> = function ({
  name,
  presentImages,
  isFirst,
  isNotSelect,
  slider,
  afterChange,
}) {
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

  if (name === 'sinkbowl' && presentImages.length === 0) {
    if (isFirst) {
      return (
        <Presenter>
          <Info>
            ???????????? ?????????
            <br />
            ?????? ????????????
            <br />
            ?????? ??? ????????????.
          </Info>
        </Presenter>
      )
    } else {
      return (
        <Presenter>
          <Info>
            ????????? ???????????? ??????
            <br />
            ?????? ????????? ????????????
            <br />
            ?????????????????????.
          </Info>
        </Presenter>
      )
    }
  }

  if (isNotSelect)
    return (
      <Presenter>
        <Info>
          ???????????? ?????????
          <br />
          ?????????????????????.
        </Info>
      </Presenter>
    )

  if (presentImages.length !== 0) {
    return (
      <Presenter>
        <PrevImageIcon onClick={showPrevImage}>
          <MdKeyboardArrowLeft />
        </PrevImageIcon>

        <Slider {...settings} ref={slider}>
          {presentImages.map(({ id, name, price, src, link }: ImageType) => (
            <ImageViewer
              id={id}
              name={name}
              price={price}
              src={src}
              link={link}
              key={id}
            />
          ))}
        </Slider>

        <NextImageIcon onClick={showNextImage}>
          <MdKeyboardArrowRight />
        </NextImageIcon>
      </Presenter>
    )
  } else {
    return (
      <Presenter>
        <Info>
          ????????? ???????????? ??????
          <br />
          ?????? ????????? ????????????
          <br />
          ?????????????????????.
        </Info>
      </Presenter>
    )
  }
}

export default ImagePresenter
