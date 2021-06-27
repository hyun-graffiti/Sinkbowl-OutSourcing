import { FunctionComponent } from 'react'
import styled from '@emotion/styled'
import { Global, css } from '@emotion/react'
import useDecorateResult from 'hooks/useDecorateResult'
import useFilterSinkbowl from 'hooks/useFilterSinkbowl'
import Faucet from 'constants/faucet'
import Waterspout from 'constants/waterspout'
import InputForm from 'components/InputForm'
import ImagePresenter from 'components/ImagePresenter'
import EmailForm from 'components/EmailForm'

const globalStyle = css`
  @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@400;700&display=swap');

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Noto Sans KR', sans-serif;
  }

  #root {
    max-width: 1250px;
    margin: 30px auto;

    @media (max-width: 991px) {
      width: 100%;
      padding: 0 15px;
    }
  }
`

const PresenterBox = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  grid-gap: 50px;
  margin-top: 80px;

  @media (max-width: 992px) {
    grid-gap: 20px;
  }

  @media (max-width: 768px) {
    display: block;
  }
`

const Line = styled.hr`
  margin: 150px 0;

  @media (max-width: 768px) {
    margin: 75px 0;
  }
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
    selectableItem,
    isNotSelect,
    afterChange,
    setDecoratedSelectableItem,
    setIsNotSelectItem,
    getItemById,
  } = useDecorateResult()

  return (
    <>
      <Global styles={globalStyle} />
      <InputForm
        formValue={formValue}
        setFormValue={setFormValue}
        onButtonClick={filterSinkbowl}
      />
      <PresenterBox>
        <ImagePresenter
          name="sinkbowl"
          title="싱크볼 목록"
          items={sinkbowl}
          afterChange={afterChange('sinkbowl')}
          setDecoratedSelectableItem={setDecoratedSelectableItem('sinkbowl')}
          isFirst={isFirst}
          selectBox={false}
        />
        <ImagePresenter
          name="faucet"
          title="수전 목록"
          items={Faucet}
          afterChange={afterChange('faucet')}
          setDecoratedSelectableItem={setDecoratedSelectableItem('faucet')}
          selectBox
          isNotSelect={isNotSelect.faucetIsNotSelect}
          setIsNotSelect={setIsNotSelectItem('faucet')}
        />
        <ImagePresenter
          name="waterspout"
          title="배수구 목록"
          items={Waterspout}
          afterChange={afterChange('waterspout')}
          setDecoratedSelectableItem={setDecoratedSelectableItem('waterspout')}
          selectBox
          isNotSelect={isNotSelect.waterspoutIsNotSelect}
          setIsNotSelect={setIsNotSelectItem('waterspout')}
        />
      </PresenterBox>
      <Line />
      <EmailForm
        item={selectableItem}
        isNotSelect={isNotSelect}
        getItemById={getItemById}
      />
    </>
  )
}

export default App
