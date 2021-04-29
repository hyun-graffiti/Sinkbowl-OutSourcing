import { useState, FunctionComponent } from 'react'
import styled from '@emotion/styled'
import { Global, css } from '@emotion/react'
import { SinkbowlInfo, SinkbowlInfoType } from 'constants/sinkbowl-info'
import InputForm from 'components/InputForm'
import ImagePresenter from 'components/ImagePresenter'

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
  grid-template-columns: 300px 1fr;
  grid-gap: 50px;
`

const App: FunctionComponent = function () {
  const [value, setValue] = useState<FormValueTypes>({
    'width-min': 0,
    'width-max': 0,
    'height-min': 0,
    'height-max': 0,
    'size-min': 0,
    'size-max': 0,
  })

  const [sinkbowl, setSinkbowl] = useState<SinkbowlInfoType[]>(SinkbowlInfo)

  const onButtonClick = () => {
    const key = []

    if (value['width-min'] >= value['width-max']) key.push('가로')
    if (value['height-min'] >= value['height-max']) key.push('세로')
    if (value['size-min'] >= value['size-max']) key.push('크기')

    if (key.length !== 0) {
      const wrongValue = key.join(', ')
      alert(`${wrongValue}값을 올바르게 설정해주세요.`)
      return
    }

    const filteredSinkbowl = SinkbowlInfo.filter(
      (sinkbowl: SinkbowlInfoType) => {
        const widthIsValid =
          value['width-min'] <= sinkbowl['width-min'] &&
          sinkbowl['width-max'] <= value['width-max']
        const heightIsValid =
          value['height-min'] <= sinkbowl['height-min'] &&
          sinkbowl['height-max'] <= value['height-max']
        const sizeIsValid =
          value['size-min'] <= sinkbowl['size-min'] &&
          sinkbowl['size-max'] <= value['size-max']

        return widthIsValid && heightIsValid && sizeIsValid
      },
    )

    setSinkbowl(filteredSinkbowl)
  }

  return (
    <Wrapper>
      <Global styles={globalStyle} />
      <InputForm
        formValue={value}
        setFormValue={setValue}
        onButtonClick={onButtonClick}
      />
      <ImagePresenter sinkbowl={sinkbowl} />
    </Wrapper>
  )
}

export default App
