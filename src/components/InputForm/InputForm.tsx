import { ChangeEvent, useState, FunctionComponent } from 'react'
import styled from '@emotion/styled'
import InputBox from 'components/InputBox'

const InputFormWrapper = styled.div``

type FormValueTypes = {
  'width-min': number
  'width-max': number
  'height-min': number
  'height-max': number
  'size-min': number
  'size-max': number
}

const InputForm: FunctionComponent = function () {
  const [value, setValue] = useState<FormValueTypes>({
    'width-min': 0,
    'width-max': 0,
    'height-min': 0,
    'height-max': 0,
    'size-min': 0,
    'size-max': 0,
  })

  console.log(value)

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setValue((prev: FormValueTypes) => ({ ...prev, [name]: value }))
  }

  return (
    <InputFormWrapper>
      <InputBox title="길이" name="width" onChange={onChange} />
      <InputBox title="높이" name="height" onChange={onChange} />
      <InputBox title="크기" name="size" onChange={onChange} />
    </InputFormWrapper>
  )
}

export default InputForm
