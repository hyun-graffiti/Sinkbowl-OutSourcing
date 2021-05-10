import { Dispatch, SetStateAction, useState } from 'react'
import Sinkbowl, { SinkbowlType } from 'constants/sinkbowl'

type FormValueType = {
  [key: string]: number
  'width-min': number
  'width-max': number
  'height-min': number
  'height-max': number
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
  })

  const [sinkbowl, setSinkbowl] = useState<SinkbowlType[]>(Sinkbowl)

  const filterSinkbowl = () => {
    const key = []

    if (formValue['width-min'] > formValue['width-max']) key.push('가로')
    if (formValue['height-min'] > formValue['height-max']) key.push('세로')

    if (key.length !== 0) {
      const wrongValue = key.join(', ')
      alert(`${wrongValue}값을 올바르게 설정해주세요.`)
      return
    }

    const sizeIsValid = (
      name: 'width' | 'height',
      sinkbowl: SinkbowlType,
    ): boolean =>
      formValue[`${name}-min`] - 10 <= sinkbowl[name] &&
      sinkbowl[name] <= formValue[`${name}-max`] + 10

    const filteredSinkbowl = Sinkbowl.filter(
      (sinkbowl: SinkbowlType) =>
        sizeIsValid('width', sinkbowl) && sizeIsValid('height', sinkbowl),
    )

    setSinkbowl(filteredSinkbowl)
  }

  return { formValue, setFormValue, filterSinkbowl, sinkbowl }
}
