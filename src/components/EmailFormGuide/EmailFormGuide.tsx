import { FunctionComponent } from 'react'
import styled from '@emotion/styled'

const Wrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: stretch;

  img {
    width: 70%;
    min-width: 250px;
    margin: 40px auto;
  }
`

const Title = styled.div`
  font-size: 1.7rem;
  font-weight: 800;
  color: rgb(64, 64, 64);
  text-align: left;

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
          1. 맨 위에서{' '}
          <strong>현재 설치되어 있는 싱크볼의 가로 및 세로 길이</strong>를
          입력해주세요.
        </p>
        <p>
          2. <strong>사용 가능한 싱크볼 알아보기 버튼</strong>을 누른 후, 원하는
          싱크볼을 선택해주세요.
        </p>
        <p>
          3. <strong>수전과 배수구를 선택</strong>해주세요. 단, 희망하지 않는
          경우에는 선택안함을 체크해주세요.
        </p>
        <p>
          4. <strong>교체 의뢰 양식</strong>을 작성해주시고, 견적 문의 요청을
          보내주세요.
          <br />
          현재 설치되어 있는 싱크볼의 가로, 세로 길이와 장폭을 함께
          작성해주세요.
        </p>
        <br />
        <p>
          <strong>
            <u>
              문의를 보내는 중에는 <strong>새로고침 또는 창닫기</strong>를 하지
              말아주세요.
            </u>
          </strong>
        </p>
      </Description>
    </Wrapper>
  )
}

export default EmailFormGuide
