import { Dispatch, SetStateAction, useState } from 'react'
import Sinkbowl, { SinkbowlType } from 'constants/sinkbowl'

export type FormValueType = {
  width: string
  height: string
}

type useFilterSinkbowlType = {
  formValue: FormValueType
  setFormValue: Dispatch<SetStateAction<FormValueType>>
  filterSinkbowl: () => void
  sinkbowl: SinkbowlType[]
  isFirst: boolean
}

export default function useFilterSinkbowl(): useFilterSinkbowlType {
  const [formValue, setFormValue] = useState<FormValueType>({
    width: '',
    height: '',
  })

  const [sinkbowl, setSinkbowl] = useState<SinkbowlType[]>([])
  const [isFirst, setIsFirst] = useState<boolean>(true)

  const filterSinkbowl = () => {
    const { width, height } = formValue

    if (width === '' || height === '') {
      alert('가로, 세로 값을 올바르게 입력해주세요.')
      return
    }

    const sizeIsValid = (
      name: keyof typeof formValue,
      sinkbowl: SinkbowlType,
      error = 5,
    ): boolean => Math.abs(parseInt(formValue[name]) - sinkbowl[name]) <= error

    const filteredSinkbowl = Sinkbowl.filter((sinkbowl: SinkbowlType) =>
      sinkbowl.widthError === undefined || sinkbowl.heightError === undefined
        ? sizeIsValid('width', sinkbowl) && sizeIsValid('height', sinkbowl)
        : sizeIsValid('width', sinkbowl, sinkbowl.widthError) &&
        sizeIsValid('height', sinkbowl, sinkbowl.heightError),
    )

    setSinkbowl(filteredSinkbowl)
    setIsFirst(false)
  }

  return { formValue, setFormValue, filterSinkbowl, sinkbowl, isFirst }
}
