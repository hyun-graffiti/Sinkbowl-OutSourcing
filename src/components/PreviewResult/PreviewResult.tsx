import { FunctionComponent } from 'react'
import styled from '@emotion/styled'

type PreviewResultProps = {
  src: string
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`

const Title = styled.div`
  margin-bottom: 10px;
  padding: 3px 0;
  color: rgba(64, 64, 64, 1);
  font-size: 1.15rem;
  font-weight: 700;
`

const Result = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;

  color: rgba(64, 64, 64, 1);
  font-size: 1.5rem;
  font-weight: 700;
`

const PreviewResult: FunctionComponent<PreviewResultProps> = function ({
  src = '',
}) {
  return (
    <Wrapper>
      <Title>꾸며보기 결과물</Title>
      <Result>
        {!src ? (
          '세 가지 품목을 올바르게 선택해주세요.'
        ) : (
          <img src={src} alt="Result Preview" />
        )}
      </Result>
    </Wrapper>
  )
}

export default PreviewResult
