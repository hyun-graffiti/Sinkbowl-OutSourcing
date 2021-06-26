import { ImageType } from 'components/ImagePresenter/ImagePresenter'
import { useState } from 'react'

export type SelectableItem = {
  sinkbowl: string
  faucet: string
  waterspout: string
}

export type IsNotSelectItem = {
  faucetIsNotSelect: boolean
  waterspoutIsNotSelect: boolean
}

type AfterChangeParameter = 'sinkbowl' | 'faucet' | 'waterspout'

type useDecorateResultType = {
  selectableItem: SelectableItem
  isNotSelect: IsNotSelectItem
  afterChange: (
    item: AfterChangeParameter,
  ) => (presentImages: ImageType[]) => (current: number) => void
  setDecoratedSelectableItem: (
    item: AfterChangeParameter,
  ) => (id: string) => void
  setIsNotSelectItem: (item: AfterChangeParameter) => (value: boolean) => void
}

export default function useDecorateResult(): useDecorateResultType {
  const [selectableItem, setSelectableItem] = useState<SelectableItem>({
    sinkbowl: '',
    faucet: '',
    waterspout: '',
  })
  const [isNotSelect, setIsNotSelect] = useState<IsNotSelectItem>({
    faucetIsNotSelect: false,
    waterspoutIsNotSelect: false,
  })

  const setDecoratedSelectableItem = (item: AfterChangeParameter) => (
    id: string,
  ) => setSelectableItem((prev: SelectableItem) => ({ ...prev, [item]: id }))

  const setIsNotSelectItem = (item: AfterChangeParameter) => (value: boolean) =>
    setIsNotSelect(prev => ({ ...prev, [`${item}IsNotSelect`]: value }))

  const afterChange = (item: AfterChangeParameter) => (
    presentImages: ImageType[],
  ) => (current: number) =>
    setDecoratedSelectableItem(item)(presentImages[current].id)

  return {
    selectableItem,
    isNotSelect,
    afterChange,
    setDecoratedSelectableItem,
    setIsNotSelectItem,
  }
}
