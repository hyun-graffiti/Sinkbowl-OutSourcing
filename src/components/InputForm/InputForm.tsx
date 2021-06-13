import { ChangeEvent, Dispatch, FunctionComponent, SetStateAction } from 'react'
import styled from '@emotion/styled'
import { FormValueType } from 'hooks/useFilterSinkbowl'

type InputFormProps = {
  formValue: FormValueType
  setFormValue: Dispatch<SetStateAction<FormValueType>>
  onButtonClick: () => void
}

const InputFormWrapper = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`

const HeightInput = styled.input`
  position: absolute;
  top: 250px;
  left: calc(50% - 500px);
  transform: translate(-50%, -50%);
  width: 100px;
  padding: 5px 10px;
  border: 0;
  border-bottom: 2px solid rgba(64, 64, 64, 1);
  font-size: 1rem;
  font-weight: 800;
  text-align: center;
  outline: none;

  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`

const WidthInput = styled.input`
  position: absolute;
  bottom: 50px;
  left: 50%;
  transform: translate(-50%, 50%);
  width: 100px;
  padding: 5px 10px;
  border: 0;
  border-bottom: 2px solid rgba(64, 64, 64, 1);
  font-size: 1rem;
  font-weight: 800;
  text-align: center;
  outline: none;

  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`

const FormButton = styled.button`
  position: absolute;
  top: 250px;
  right: calc(50% - 520px);
  transform: translate(50%, -50%);
  padding: 8px;
  width: 130px;
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
  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormValue((prev: FormValueType) => ({ ...prev, [name]: value }))
  }

  return (
    <InputFormWrapper>
      <HeightInput
        type="number"
        min="0"
        name="height"
        placeholder="세로 길이"
        value={height}
        onChange={onChange}
      />
      <WidthInput
        type="number"
        min="0"
        name="width"
        placeholder="가로 길이"
        value={width}
        onChange={onChange}
      />

      <FormButton onClick={onButtonClick}>
        사용 가능한
        <br />
        싱크볼 알아보기
      </FormButton>
    </InputFormWrapper>
  )
}

export default InputForm
