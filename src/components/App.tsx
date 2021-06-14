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
  width: 1200px;
  height: 600px;
  margin: 0 auto;
`

const PresenterBox = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  grid-gap: 50px;
  width: 1200px;
  margin: 0 auto;
  margin-top: 100px;
`

const App: FunctionComponent = function () {
  const {
    formValue,
    setFormValue,
    filterSinkbowl,
    sinkbowl,
    isFirst,
  } = useFilterSinkbowl()

  const {
    decorateResult,
    afterChange,
    setDecoratedSelectableItem,
  } = useDecorateResult()

  return (
    <>
      <Global styles={globalStyle} />
      <Wrapper>
        <InputForm
          formValue={formValue}
          setFormValue={setFormValue}
          onButtonClick={filterSinkbowl}
        />
        <PreviewResult src={decorateResult} />
      </Wrapper>
      <PresenterBox>
        <ImagePresenter
          title="싱크볼 목록"
          items={sinkbowl}
          afterChange={afterChange('sinkbowl')}
          setDecoratedSelectableItem={setDecoratedSelectableItem('sinkbowl')}
          isFirst={isFirst}
        />
        <ImagePresenter
          title="수전 목록"
          items={Faucet}
          afterChange={afterChange('faucet')}
          setDecoratedSelectableItem={setDecoratedSelectableItem('faucet')}
        />
        <ImagePresenter
          title="배수구 목록"
          items={Waterspout}
          afterChange={afterChange('waterspout')}
          setDecoratedSelectableItem={setDecoratedSelectableItem('waterspout')}
        />
      </PresenterBox>
    </>
  )
}

export default App
