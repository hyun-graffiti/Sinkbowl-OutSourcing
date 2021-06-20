import { ChangeEvent, Dispatch, FunctionComponent, SetStateAction } from 'react'
import styled from '@emotion/styled'
import { FormValueType } from 'hooks/useFilterSinkbowl'

type InputFormProps = {
  formValue: FormValueType
  setFormValue: Dispatch<SetStateAction<FormValueType>>
  onButtonClick: () => void
}

const InputFormWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 50px;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`

const InputWrapper = styled.div`
  display: flex;

  input + input {
    margin-left: 30px;
  }

  @media (max-width: 768px) {
    width: 100%;
    justify-content: space-between;
  }
`

const Input = styled.input`
  width: 150px;
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

  @media (max-width: 768px) {
    flex: 1;
  }
`

const FormButton = styled.button`
  padding: 8px 20px;
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

  @media (max-width: 768px) {
    width: 100%;
    margin-top: 30px;
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
      <InputWrapper>
        <Input
          type="number"
          min="0"
          name="width"
          placeholder="가로 길이 입력"
          value={width}
          onChange={onChange}
        />
        <Input
          type="number"
          min="0"
          name="height"
          placeholder="세로 길이 입력"
          value={height}
          onChange={onChange}
        />
      </InputWrapper>

      <FormButton onClick={onButtonClick}>
        사용 가능한 싱크볼 알아보기
      </FormButton>
    </InputFormWrapper>
  )
}

export default InputForm
