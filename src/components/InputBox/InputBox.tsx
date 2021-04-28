import { ChangeEvent, FunctionComponent } from 'react'
import styled from '@emotion/styled'

type InputBoxProps = {
  title: string
  name: string
  onChange: (e: ChangeEvent<HTMLInputElement>) => void
}

const InputBoxWrapper = styled.div`
  width: 300px;

  & + & {
    margin-top: 30px;
  }
`

const Title = styled.div`
  margin-bottom: 10px;
  padding: 3px 0;
  border-bottom: 1px solid grey;
  font-size: 1.2rem;
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
  border: 1px solid grey;
  border-radius: 15px;
  font-size: 1rem;
  text-align: center;
  outline: none;
`

const InputBox: FunctionComponent<InputBoxProps> = function ({
  title,
  name,
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
          onChange={onChange}
        />
        <span>~</span>
        <Input
          type="number"
          name={`${name}-max`}
          placeholder="최대값"
          onChange={onChange}
        />
      </InputBlock>
    </InputBoxWrapper>
  )
}

export default InputBox
