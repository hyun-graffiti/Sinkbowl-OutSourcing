import { ChangeEvent, FunctionComponent, useState } from 'react'
import styled from '@emotion/styled'
import InputBox from 'components/InputBox'
import EmailFormGuide from 'components/EmailFormGuide'
import { SelectableItem, IsNotSelectItem } from 'hooks/useDecorateResult'

type EmailFormProps = {
  item: SelectableItem
  isNotSelect: IsNotSelectItem
}

type EmailFormValueType = {
  name: string
  phone: string
  file: {
    type: string
    data: string
  }
  desc: string
}

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  width: 100%;
  padding: 30px 0;
  border-radius: 10px;
  box-shadow: 0 0 8px rgba(64, 64, 64, 0.15);

  @media (max-width: 768px) {
    grid-template-columns: 100%;
    grid-template-rows: 1fr 1fr;
    padding: 0 30px;
  }
`

const Partition = styled.div`
  padding: 0 50px;

  & + & {
    border-left: 0.5px solid rgba(64, 64, 64, 0.5);
  }

  @media (max-width: 768px) {
    width: 100%;
    padding: 30px 0;

    & + & {
      border-left: 0;
      border-top: 0.5px solid rgba(64, 64, 64, 0.5);
    }
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

  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
`

const EmailForm: FunctionComponent<EmailFormProps> = function ({
  item: { sinkbowl, faucet, waterspout },
  isNotSelect: { faucetIsNotSelect, waterspoutIsNotSelect },
}) {
  const smtpjs = window.Email

  const [
    {
      name,
      phone,
      file: { type, data },
      desc,
    },
    setForm,
  ] = useState<EmailFormValueType>({
    name: '',
    phone: '',
    file: {
      type: '',
      data: '',
    },
    desc: '',
  })
  const [isSending, setIsSending] = useState<boolean>(false)

  const getBase64 = (file: File): Promise<string> => {
    const reader = new FileReader()

    reader.readAsDataURL(file)

    return new Promise(resolve => {
      reader.onload = (ev: ProgressEvent<FileReader>) => {
        const result = ev.target?.result
        resolve(result as string)
      }
    })
  }

  const handleChange = async (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value, files } = event.target as HTMLInputElement

    if (name === 'file' && files !== null) {
      const base64 = await getBase64(files[0])
      const type = files[0].name.substring(files[0].name.lastIndexOf('.') + 1)

      setForm(prev => ({
        ...prev,
        [name]: {
          type,
          data: base64,
        },
      }))
    } else setForm(prev => ({ ...prev, [name]: value }))
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

    const isNotFaucetSelected = faucetIsNotSelect ? true : faucet === ''
    const isNotWaterspoutSelected = waterspoutIsNotSelect
      ? true
      : waterspout === ''

    if (sinkbowl === '' || isNotFaucetSelected || isNotWaterspoutSelected) {
      alert(
        '싱크볼, 수전, 배수구를 선택해주세요.\n만약 수전이나 배수구 구매를 희망하지 않는다면 선택안함을 체크해주세요.',
      )
      return
    }

    if (name === '' || phone === '' || data === '' || desc === '') {
      alert(
        '양식에 맞춰 모든 정보를 입력해주세요.\n만약 모든 정보를 입력해도 해당 창이 뜬다면 관리자에게 문의해주세요.',
      )
      return
    }

    setIsSending(true)

    smtpjs
      .send({
        Host: REACT_APP_SMTP_HOST,
        Username: REACT_APP_MAIL_CLIENT_ID,
        Password: REACT_APP_MAIL_CLIENT_PW,
        To: 'ji5485@naver.com',
        From: REACT_APP_MAIL_CLIENT_ID,
        Subject: `${name}님의 작업 견적 문의 요청입니다.`,
        Body: '<h1>And this is the body</h1>',
        Attachments: [
          {
            name: `${name}_sinkbowl.${type}`,
            data,
          },
        ],
      })
      .then(status => {
        if (status !== 'OK')
          alert(
            `작업 견적 문의 요청을 보내는데 문제가 발생했습니다.\n쇼핑몰 관리자에게 문의해주세요.\n에러 메세지 : ${status}`,
          )
        else alert('작업 견적 문의 요청을 보냈습니다.')
        setIsSending(false)
      })
  }

  return (
    <Wrapper>
      <Partition>
        <EmailFormGuide />
      </Partition>
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
        <Button onClick={handleSendEmail}>
          {isSending ? '문의 보내는 중...' : '작업 견적 문의 요청 보내기'}
        </Button>
      </Partition>
    </Wrapper>
  )
}

export default EmailForm
