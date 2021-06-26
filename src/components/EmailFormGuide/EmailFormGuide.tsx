import { FunctionComponent } from 'react'
import styled from '@emotion/styled'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    width: 60%;
    min-width: 250px;
    margin: 40px 0;
  }
`

const Title = styled.div`
  font-size: 1.5rem;
  font-weight: 800;
  color: rgba(64, 64, 64, 0.9);
  text-align: center;

  @media (max-width: 768px) {
    font-size: 1.3rem;
  }
`

const Description = styled.div`
  font-size: 1rem;
  color: rgb(64, 64, 64);
  text-align: center;
  line-height: 1.7;

  p {
    word-break: keep-all;
  }

  @media (max-width: 768px) {
    font-size: 0.85rem;
  }
`

const Line = styled.div`
  width: 100%;
  height: 1px;
  margin: 40px 0;
  background: rgba(64, 64, 64, 0.5);

  @media (max-width: 768px) {
    background: transparent;
    margin: 20px 0;
  }
`

const EmailFormGuide: FunctionComponent = function () {
  return (
    <Wrapper>
      <Title>싱크볼 사진 예시 및 주의 사항</Title>
      <img
        src={process.env.PUBLIC_URL + '/guide_image.jpeg'}
        alt="Guide Image"
      />
      <Description>
        <p>현재 자택에 설치된 싱크볼 사진을 보내주실 때,</p>
        <p>
          상담의 편의를 위해 <strong>위와 같은 구도</strong>의 사진을
          보내주세요.
        </p>
      </Description>
      <Line />
      <Description>
        <p>
          반드시 상단의 <strong>싱크볼, 수전, 배수구</strong>를 선택해주세요
        </p>
        <p>
          만약 수전과 배수구 구매를 희망하지 않으시다면{' '}
          <strong>선택안함</strong>을 체크해주세요.
        </p>

        <p>
          우측의 양식에 맞춰 <strong>모든 정보</strong>를 입력해주세요.
        </p>

        <p>
          자택의 <strong>인터넷 환경</strong>에 따라 문의를 보내는 데 시간이
          소요될 수 있습니다.
        </p>
        <p>
          따라서 문의를 보내는 중에는 <strong>새로고침 또는 창닫기</strong>를
          하지 말아주세요.
        </p>
      </Description>
    </Wrapper>
  )
}

export default EmailFormGuide
