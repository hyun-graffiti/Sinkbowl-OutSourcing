import { ChangeEvent, FunctionComponent } from 'react'
import styled from '@emotion/styled'

type InputBoxProps = {
  title: string
  name: string
  minValue: number
  maxValue: number
  onChange: (e: ChangeEvent<HTMLInputElement>) => void
}

const InputBoxWrapper = styled.div`
  width: 300px;

  & + & {
    margin-top: 40px;
  }
`

const Title = styled.div`
  margin-bottom: 5px;
  padding: 3px 0;
  color: #4c6ef5;
  font-size: 1.15rem;
  font-weight: 700;
`

const InputBlock = styled.div`
  display: flex;
  justify-content: space-between;

  span {
    margin: 0 10px;
    font-size: 1.5rem;
  }
`

const Input = styled.input`
  width: 120px;
  padding: 5px 10px;
  border: 0;
  border-bottom: 2px solid #4c6ef5;
  font-size: 1rem;
  outline: none;
`

const InputBox: FunctionComponent<InputBoxProps> = function ({
  title,
  name,
  minValue,
  maxValue,
  onChange,
}) {
  return (
    <InputBoxWrapper>
      <Title>{title}</Title>
      <InputBlock>
        <Input
          type="number"
          name={`${name}-min`}
          placeholder="최소값"
          value={minValue}
          onChange={onChange}
        />
        <span>~</span>
        <Input
          type="number"
          name={`${name}-max`}
          placeholder="최대값"
          value={maxValue}
          onChange={onChange}
        />
      </InputBlock>
    </InputBoxWrapper>
  )
}

export default InputBox
