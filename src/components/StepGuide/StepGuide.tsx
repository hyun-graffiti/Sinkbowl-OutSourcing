import { FunctionComponent } from 'react'
import styled from '@emotion/styled'

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 30px;
  width: 100%;

  @media (max-width: 991px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`

const StepGuideWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 50px 0;
  border-radius: 20px;
  box-shadow: 0 0 8px rgba(64, 64, 64, 0.25);

  @media (max-width: 991px) {
    padding: 25px 0;
  }
`

const StepNumber = styled.div`
  font-size: 1.6rem;
  font-weight: 800;
  color: rgba(64, 64, 64, 1);

  @media (max-width: 991px) {
    font-size: 1.3rem;
  }
`

const StepDesc = styled.div`
  margin-top: 40px;
  font-size: 1.2rem;
  font-weight: 400;
  text-align: center;
  color: rgba(64, 64, 64, 0.7);

  @media (max-width: 991px) {
    font-size: 1rem;
  }
`

const StepGuide: FunctionComponent = function () {
  return (
    <Wrapper>
      <StepGuideWrapper>
        <StepNumber>Step 1</StepNumber>
        <StepDesc>
          현재 자택에 설치된
          <br />
          싱크볼의 가로/세로
          <br />
          길이를 입력해주세요.
        </StepDesc>
      </StepGuideWrapper>
      <StepGuideWrapper>
        <StepNumber>Step 2</StepNumber>
        <StepDesc>
          길이 입력 폼 우측의 버튼을
          <br />
          눌러 사용 가능한 싱크볼을
          <br />
          알아보세요.
        </StepDesc>
      </StepGuideWrapper>
      <StepGuideWrapper>
        <StepNumber>Step 3</StepNumber>
        <StepDesc>
          자택에 설치하고 싶은
          <br />
          싱크볼, 수전, 배수구를
          <br />
          선택해주세요.
        </StepDesc>
      </StepGuideWrapper>
      <StepGuideWrapper>
        <StepNumber>Step 4</StepNumber>
        <StepDesc>
          선택한 정보를 가지고
          <br />
          견적 문의 요청을
          <br />
          보내주세요.
        </StepDesc>
      </StepGuideWrapper>
    </Wrapper>
  )
}

export default StepGuide
