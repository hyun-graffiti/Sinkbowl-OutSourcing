import { ImageViewerProps } from 'components/ImageViewer/ImageViewer'
import { useState, useEffect } from 'react'

type SelectableItem = {
  sinkbowl: string
  faucet: string
  waterspout: string
}

type AfterChangeParameter = 'sinkbowl' | 'faucet' | 'waterspout'

type useDecorateResultType = {
  decorateResult: string
  afterChange: (
    item: AfterChangeParameter,
  ) => (presentImages: ImageViewerProps[]) => (current: number) => void
  setDecoratedSelectableItem: (
    item: AfterChangeParameter,
  ) => (id: string) => void
}

export default function useDecorateResult(): useDecorateResultType {
  const [selectableItem, setSelectableItem] = useState<SelectableItem>({
    sinkbowl: 'sinkbowl-1',
    faucet: 'faucet-1',
    waterspout: 'waterspout-1',
  })

  const [decorateResult, setDecorateResult] = useState<string>('')

  const setDecoratedSelectableItem = (item: AfterChangeParameter) => (
    id: string,
  ) => setSelectableItem((prev: SelectableItem) => ({ ...prev, [item]: id }))

  const afterChange = (item: AfterChangeParameter) => (
    presentImages: ImageViewerProps[],
  ) => (current: number) =>
    setDecoratedSelectableItem(item)(presentImages[current].id)

  useEffect(() => {
    setDecorateResult(
      `/images/result/${Object.values(selectableItem).join('_')}.jpg`,
    )
  }, [selectableItem])

  return { decorateResult, afterChange, setDecoratedSelectableItem }
}
