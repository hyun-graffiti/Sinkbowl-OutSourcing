import { FunctionComponent } from 'react'
// import styled from '@emotion/styled'
import { Global, css } from '@emotion/react'
import InputForm from 'components/InputForm'

const globalStyle = css`
  @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@400;700&display=swap');

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Noto Sans KR', sans-serif;
  }
`

const App: FunctionComponent = function () {
  return (
    <div>
      <Global styles={globalStyle} />
      {/* <img src={process.env.PUBLIC_URL + '/images/apple-1.png'} /> */}
      <InputForm />
    </div>
  )
}

export default App
