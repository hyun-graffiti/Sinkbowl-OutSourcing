import { ImageType } from 'components/ImagePresenter/ImagePresenter'
import { useState } from 'react'

type SelectableItem = {
  sinkbowl: string
  faucet: string
  waterspout: string
}

type AfterChangeParameter = 'sinkbowl' | 'faucet' | 'waterspout'

type useDecorateResultType = {
  selectableItem: SelectableItem
  afterChange: (
    item: AfterChangeParameter,
  ) => (presentImages: ImageType[]) => (current: number) => void
  setDecoratedSelectableItem: (
    item: AfterChangeParameter,
  ) => (id: string) => void
}

export default function useDecorateResult(): useDecorateResultType {
  const [selectableItem, setSelectableItem] = useState<SelectableItem>({
    sinkbowl: '',
    faucet: '',
    waterspout: '',
  })

  const setDecoratedSelectableItem = (item: AfterChangeParameter) => (
    id: string,
  ) => setSelectableItem((prev: SelectableItem) => ({ ...prev, [item]: id }))

  const afterChange = (item: AfterChangeParameter) => (
    presentImages: ImageType[],
  ) => (current: number) =>
    setDecoratedSelectableItem(item)(presentImages[current].id)

  return { selectableItem, afterChange, setDecoratedSelectableItem }
}
