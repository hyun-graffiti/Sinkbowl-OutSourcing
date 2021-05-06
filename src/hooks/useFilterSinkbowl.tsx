import { Dispatch, SetStateAction, useState } from 'react'
import Sinkbowl, { SinkbowlType } from 'constants/sinkbowl'

type FormValueType = {
  'width-min': number
  'width-max': number
  'height-min': number
  'height-max': number
  'size-min': number
  'size-max': number
}

type useFilterSinkbowlType = {
  formValue: FormValueType
  setFormValue: Dispatch<SetStateAction<FormValueType>>
  filterSinkbowl: () => void
  sinkbowl: SinkbowlType[]
}

export default function useFilterSinkbowl(): useFilterSinkbowlType {
  const [formValue, setFormValue] = useState<FormValueType>({
    'width-min': 0,
    'width-max': 0,
    'height-min': 0,
    'height-max': 0,
    'size-min': 0,
    'size-max': 0,
  })

  const [sinkbowl, setSinkbowl] = useState<SinkbowlType[]>(Sinkbowl)

  const filterSinkbowl = () => {
    const key = []

    if (formValue['width-min'] >= formValue['width-max']) key.push('가로')
    if (formValue['height-min'] >= formValue['height-max']) key.push('세로')
    if (formValue['size-min'] >= formValue['size-max']) key.push('크기')

    if (key.length !== 0) {
      const wrongValue = key.join(', ')
      alert(`${wrongValue}값을 올바르게 설정해주세요.`)
      return
    }

    const filteredSinkbowl = Sinkbowl.filter((sinkbowl: SinkbowlType) => {
      const widthIsValid =
        formValue['width-min'] <= sinkbowl['width-min'] &&
        sinkbowl['width-max'] <= formValue['width-max']
      const heightIsValid =
        formValue['height-min'] <= sinkbowl['height-min'] &&
        sinkbowl['height-max'] <= formValue['height-max']
      const sizeIsValid =
        formValue['size-min'] <= sinkbowl['size-min'] &&
        sinkbowl['size-max'] <= formValue['size-max']

      return widthIsValid && heightIsValid && sizeIsValid
    })

    setSinkbowl(filteredSinkbowl)
  }

  return { formValue, setFormValue, filterSinkbowl, sinkbowl }
}
