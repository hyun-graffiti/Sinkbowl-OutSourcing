import { ChangeEvent, FunctionComponent } from 'react'
import styled from '@emotion/styled'

type InputBoxProps = {
  type: 'text' | 'textarea' | 'file'
  title: string
  name: string
  value?: string
  onChange: (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void
  placeholder?: string
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;

  & + & {
    margin-top: 30px;
  }
`

const Title = styled.div`
  margin-bottom: 10px;
  font-size: 1rem;
  font-weight: 800;
  color: rgb(64, 64, 64);
`

const Input = styled.input`
  padding: 15px;
  border: 0;
  border-radius: 5px;
  background: rgba(64, 64, 64, 0.1);
  font-size: 1rem;
  font-weight: 800;
  color: rgba(64, 64, 64, 0.9);
  outline: none;
`

const TextArea = styled.textarea`
  height: 150px;
  padding: 15px;
  border: 0;
  border-radius: 5px;
  background: rgba(64, 64, 64, 0.1);
  font-size: 1rem;
  font-weight: 800;
  color: rgba(64, 64, 64, 0.9);
  outline: none;
  resize: none;
`

const InputBox: FunctionComponent<InputBoxProps> = function ({
  type,
  title,
  name,
  value,
  onChange,
  placeholder,
}) {
  return (
    <Wrapper>
      <Title>{title}</Title>
      {type === 'text' && (
        <Input
          type="text"
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
        />
      )}
      {type === 'file' && (
        <Input
          type="file"
          name={name}
          onChange={onChange}
          placeholder={placeholder}
          accept="image/jpg,image/png,image/jpeg"
        />
      )}
      {type === 'textarea' && (
        <TextArea
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
        />
      )}
    </Wrapper>
  )
}

export default InputBox
