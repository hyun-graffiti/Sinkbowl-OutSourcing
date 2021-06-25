import { ChangeEvent, FunctionComponent, useState } from 'react'
import styled from '@emotion/styled'
import InputBox from 'components/InputBox'

type EmailFormValueType = {
  name: string
  phone: string
  file: File | null
  desc: string
}

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  width: 100%;
  padding: 30px 0;
  border-radius: 10px;
  box-shadow: 0 0 8px rgba(64, 64, 64, 0.15);
`

const Partition = styled.div`
  padding: 0 50px;

  & + & {
    border-left: 0.5px solid rgba(64, 64, 64, 0.5);
  }
`

const Button = styled.div`
  width: 100%;
  margin-top: 50px;
  padding: 10px;
  background: rgba(64, 64, 64, 1);
  border: none;
  border-radius: 7px;
  font-size: 1rem;
  font-weight: 800;
  color: #ffffff;
  text-align: center;
  cursor: pointer;
  transition: background 0.15s;

  &:hover {
    background: rgba(0, 0, 0, 0.8);
  }
`

const EmailForm: FunctionComponent = function () {
  const smtpjs = window.Email

  const [{ name, phone, desc }, setForm] = useState<EmailFormValueType>({
    name: '',
    phone: '',
    file: null,
    desc: '',
  })

  const handleChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value, files } = event.target as HTMLInputElement

    if (name === 'file' && files !== null)
      setForm(prev => ({ ...prev, [name]: files[0] }))
    else setForm(prev => ({ ...prev, [name]: value }))
  }

  const handleSendEmail = () => {
    const {
      REACT_APP_SMTP_HOST,
      REACT_APP_MAIL_DESTINATION,
      REACT_APP_MAIL_CLIENT_ID,
      REACT_APP_MAIL_CLIENT_PW,
    } = process.env

    if (
      REACT_APP_SMTP_HOST === undefined ||
      REACT_APP_MAIL_DESTINATION === undefined ||
      REACT_APP_MAIL_CLIENT_ID === undefined ||
      REACT_APP_MAIL_CLIENT_PW === undefined
    )
      return

    smtpjs
      .send({
        Host: REACT_APP_SMTP_HOST,
        Username: REACT_APP_MAIL_CLIENT_ID,
        Password: REACT_APP_MAIL_CLIENT_PW,
        To: 'ji5485@naver.com',
        From: REACT_APP_MAIL_CLIENT_ID,
        Subject: 'This is the subject',
        Body: 'And this is the body',
        Attachments: [
          {
            name: 'smtpjs.png',
            path:
              'https://networkprogramming.files.wordpress.com/2017/11/smtpjs.png',
          },
        ],
      })
      .then(message => alert(message))
  }

  return (
    <Wrapper>
      <Partition></Partition>
      <Partition>
        <InputBox
          type="text"
          title="성함"
          name="name"
          value={name}
          onChange={handleChange}
          placeholder="성함을 입력해주세요."
        />
        <InputBox
          type="text"
          title="전화번호"
          name="phone"
          value={phone}
          onChange={handleChange}
          placeholder="추후 상담 진행을 위해 연락처를 입력해주세요."
        />
        <InputBox
          type="file"
          title="현재 싱크볼 상태 사진"
          name="file"
          onChange={handleChange}
        />
        <InputBox
          type="textarea"
          title="설명"
          name="desc"
          value={desc}
          onChange={handleChange}
          placeholder="현재 싱크볼 상태에 대한 설명 및 요청 사항을 입력해주세요."
        />
        <Button onClick={handleSendEmail}>작업 문의 요청 보내기</Button>
      </Partition>
    </Wrapper>
  )
}

export default EmailForm
