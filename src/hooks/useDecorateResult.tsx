import { ImageViewerProps } from 'components/ImageViewer/ImageViewer'
import { useState, useEffect } from 'react'

type SelectableItem = {
  sinkbowl: number
  faucet: number
  waterspout: number
}

type AfterChangeParameter = 'sinkbowl' | 'faucet' | 'waterspout'

type useDecorateResultType = {
  decorateResult: string
  afterChange: (
    item: AfterChangeParameter,
  ) => (presentImages: ImageViewerProps[]) => (current: number) => void
}

export default function useDecorateResult(): useDecorateResultType {
  const [selectableItem, setSelectableItem] = useState<SelectableItem>({
    sinkbowl: 0,
    faucet: 0,
    waterspout: 0,
  })

  const [decorateResult, setDecorateResult] = useState<string>('')

  const afterChange = (item: AfterChangeParameter) => (
    presentImages: ImageViewerProps[],
  ) => (current: number) => {
    // setSelectableItem((prev: SelectableItem) => ({
    //   ...prev,
    //   [item]: presentImages[current],
    // }))
    console.log(setSelectableItem, item)
    console.log(presentImages[current])
  }

  useEffect(() => {
    setDecorateResult(
      `/images/result/${Object.values(selectableItem).join('-')}.jpg`,
    )
  }, [selectableItem])

  return { decorateResult, afterChange }
}
