import {
  useState,
  useEffect,
  useRef,
  ChangeEvent,
  Dispatch,
  FunctionComponent,
  SetStateAction,
} from 'react'
import styled from '@emotion/styled'
import { FormValueType } from 'hooks/useFilterSinkbowl'

type InputFormProps = {
  formValue: FormValueType
  setFormValue: Dispatch<SetStateAction<FormValueType>>
  onButtonClick: () => void
}

type ImageComponentProps = {
  pos: 'width' | 'height'
  ratio: number
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const ImageForm = styled.div`
  position: relative;
  width: 100%;
  margin: 0 auto;

  img {
    width: 100%;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    width: 100%;
  }
`

const Input = styled.input<ImageComponentProps>`
  position: absolute;
  width: 150px;
  padding: 7px 10px;
  border: 0;
  border-radius: 7px;
  box-shadow: 0 0 7px rgba(64, 64, 64, 0.8);
  font-size: 0.9rem;
  font-weight: 800;
  text-align: center;
  outline: none;

  ${({ pos, ratio }) =>
    pos === 'width'
      ? `
    top: calc(540px * ${ratio} - (17.5px * (1 - ${ratio})));
    left: 50%;
    transform: translateX(-50%);
  `
      : `
    top: 50%;
    left: calc(200px * ${ratio} - (75px * (1 - ${ratio})));
    transform: translateY(-50%);
  `}

  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  @media (max-width: 768px) {
    width: 100px;
    font-size: 0.75rem;

    ${({ pos, ratio }) =>
      pos === 'width'
        ? `
    top: calc(540px * ${ratio} - (17.5px * (1 - ${ratio})));
  `
        : `
    left: calc(200px * ${ratio} - (50px * (1 - ${ratio})));
  `}
  }
`

const FormButton = styled.button`
  width: 100%;
  margin: 30px auto 0;
  padding: 10px 20px;
  background: rgba(64, 64, 64, 1);
  border: none;
  border-radius: 7px;
  color: #ffffff;
  font-size: 0.85rem;
  font-weight: 700;
  cursor: pointer;
  transition: background 0.15s;

  &:hover {
    background: rgba(0, 0, 0, 0.8);
  }
`

const InputForm: FunctionComponent<InputFormProps> = function ({
  formValue: { width, height },
  setFormValue,
  onButtonClick,
}) {
  const imageFormRef = useRef<HTMLDivElement | null>(null)
  const [imageRatio, setImageRatio] = useState<number>(1)

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormValue((prev: FormValueType) => ({ ...prev, [name]: value }))
  }

  const calcRatio = () => {
    if (imageFormRef.current === null) return

    const { width } = imageFormRef.current.getBoundingClientRect()

    setImageRatio(width / 1250)
  }

  useEffect(() => {
    calcRatio()
    window.addEventListener('resize', calcRatio)

    return () => window.removeEventListener('resize', calcRatio)
  }, [imageFormRef.current])

  return (
    <Wrapper>
      <ImageForm ref={imageFormRef}>
        <img src={process.env.PUBLIC_URL + '/sinkbowl_form.png'} alt="form" />

        <Input
          type="number"
          min="0"
          name="width"
          placeholder="가로 길이 (mm)"
          value={width}
          onChange={onChange}
          pos="width"
          ratio={imageRatio}
        />
        <Input
          type="number"
          min="0"
          name="height"
          placeholder="세로 길이 (mm)"
          value={height}
          onChange={onChange}
          pos="height"
          ratio={imageRatio}
        />
      </ImageForm>

      <FormButton onClick={onButtonClick}>
        사용 가능한 싱크볼 알아보기
      </FormButton>
    </Wrapper>
  )
}

export default InputForm
