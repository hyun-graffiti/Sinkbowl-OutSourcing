import { ChangeEvent, Dispatch, FunctionComponent, SetStateAction } from 'react'
import styled from '@emotion/styled'
import { FormValueTypes } from 'components/App'
import InputBox from 'components/InputBox'

type InputFormProps = {
  formValue: FormValueTypes
  setFormValue: Dispatch<SetStateAction<FormValueTypes>>
  onButtonClick: () => void
}

const InputFormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`

const FormButton = styled.button`
  margin-top: 30px;
  padding: 8px;
  width: 100%;
  background: #4c6ef5;
  border: none;
  border-radius: 7px;
  color: #ffffff;
  font-size: 0.9rem;
  font-weight: 700;
  cursor: pointer;
  transition: background 0.15s;

  &:hover {
    background: #3b5bdb;
  }
`

const InputForm: FunctionComponent<InputFormProps> = function ({
  formValue,
  setFormValue,
  onButtonClick,
}) {
  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormValue((prev: FormValueTypes) => ({ ...prev, [name]: value }))
  }

  return (
    <InputFormWrapper>
      <InputBox
        title="길이"
        name="width"
        minValue={formValue['width-min']}
        maxValue={formValue['width-max']}
        onChange={onChange}
      />
      <InputBox
        title="높이"
        name="height"
        minValue={formValue['height-min']}
        maxValue={formValue['height-max']}
        onChange={onChange}
      />
      <InputBox
        title="크기"
        name="size"
        minValue={formValue['size-min']}
        maxValue={formValue['size-max']}
        onChange={onChange}
      />

      <FormButton onClick={onButtonClick}>
        사용 가능한 싱크볼 알아보기
      </FormButton>
    </InputFormWrapper>
  )
}

export default InputForm
