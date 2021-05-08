import { FunctionComponent } from 'react'
import styled from '@emotion/styled'
import { Global, css } from '@emotion/react'
import useDecorateResult from 'hooks/useDecorateResult'
import useFilterSinkbowl from 'hooks/useFilterSinkbowl'
import Faucet from 'constants/faucet'
import Waterspout from 'constants/waterspout'
import InputForm from 'components/InputForm'
import ImagePresenter from 'components/ImagePresenter'
import PreviewResult from 'components/PreviewResult'

export type FormValueTypes = {
  'width-min': number
  'width-max': number
  'height-min': number
  'height-max': number
  'size-min': number
  'size-max': number
}

const globalStyle = css`
  @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@400;700&display=swap');

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Noto Sans KR', sans-serif;
  }
`

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 300px minmax(0, 1fr);
  grid-gap: 100px;
`

const PresenterBox = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  grid-gap: 40px;
  height: 300px;
  margin-top: 100px;
`

const App: FunctionComponent = function () {
  const {
    formValue,
    setFormValue,
    filterSinkbowl,
    sinkbowl,
  } = useFilterSinkbowl()

  const { decorateResult, afterChange } = useDecorateResult()

  return (
    <>
      <Wrapper>
        <Global styles={globalStyle} />
        <InputForm
          formValue={formValue}
          setFormValue={setFormValue}
          onButtonClick={filterSinkbowl}
        />
        <PreviewResult src={decorateResult} />
      </Wrapper>
      <PresenterBox>
        <ImagePresenter
          title="선택 가능 씽크볼"
          items={sinkbowl}
          afterChange={afterChange('sinkbowl')}
        />
        <ImagePresenter
          title="선택 가능 수전"
          items={Faucet}
          afterChange={afterChange('faucet')}
        />
        <ImagePresenter
          title="선택 가능 배수구"
          items={Waterspout}
          afterChange={afterChange('waterspout')}
        />
      </PresenterBox>
    </>
  )
}

export default App
