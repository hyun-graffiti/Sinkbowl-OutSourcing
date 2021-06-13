import { FunctionComponent } from 'react'
import styled from '@emotion/styled'

type PreviewResultProps = {
  src: string
}

const Result = styled.div`
  overflow: hidden;
  display: flex;
  justify-content: space-evenly;
  align-items: center;

  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  z-index: -1;

  width: 800px;
  height: 500px;

  color: rgba(64, 64, 64, 1);
  font-size: 1.5rem;
  font-weight: 700;

  img {
    height: 500px;
    object-fit: cover;
  }
`

const StepGuide = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 230px;
  height: 300px;
  padding: 50px 0;
  border-radius: 20px;
  box-shadow: 0 0 8px rgba(64, 64, 64, 0.25);
`

const StepNumber = styled.div`
  font-size: 1.6rem;
  font-weight: 800;
  color: rgba(64, 64, 64, 1);
`

const StepDesc = styled.div`
  margin-top: 40px;
  font-size: 1.2rem;
  font-weight: 400;
  text-align: center;
  color: rgba(64, 64, 64, 0.7);
`

const PreviewResult: FunctionComponent<PreviewResultProps> = function ({
  src = '',
}) {
  return (
    <Result>
      {src === '' ? (
        <>
          <StepGuide>
            <StepNumber>Step 1</StepNumber>
            <StepDesc>
              현재 자택에 설치된
              <br />
              싱크볼의 가로/세로
              <br />
              길이를 입력해주세요.
            </StepDesc>
          </StepGuide>
          <StepGuide>
            <StepNumber>Step 2</StepNumber>
            <StepDesc>
              우측의 버튼을 눌러
              <br />
              사용 가능한 싱크볼을
              <br />
              알아보세요.
            </StepDesc>
          </StepGuide>
          <StepGuide>
            <StepNumber>Step 3</StepNumber>
            <StepDesc>
              하단에 표시된
              <br />
              싱크볼, 수전, 배수구를
              <br />
              조합하여 만들어지는
              <br />
              결과물을 확인해보세요.
            </StepDesc>
          </StepGuide>
        </>
      ) : (
        <img src={src} alt="Result Preview" />
      )}
    </Result>
  )
}

export default PreviewResult
