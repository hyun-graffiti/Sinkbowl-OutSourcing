import { ImageType } from 'components/ImagePresenter/ImagePresenter'
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
  ) => (presentImages: ImageType[]) => (current: number) => void
  setDecoratedSelectableItem: (
    item: AfterChangeParameter,
  ) => (id: string) => void
}

export default function useDecorateResult(): useDecorateResultType {
  const [
    { sinkbowl, faucet, waterspout },
    setSelectableItem,
  ] = useState<SelectableItem>({
    sinkbowl: '',
    faucet: '',
    waterspout: '',
  })

  const [decorateResult, setDecorateResult] = useState<string>('')

  const setDecoratedSelectableItem = (item: AfterChangeParameter) => (
    id: string,
  ) => setSelectableItem((prev: SelectableItem) => ({ ...prev, [item]: id }))

  const afterChange = (item: AfterChangeParameter) => (
    presentImages: ImageType[],
  ) => (current: number) =>
    setDecoratedSelectableItem(item)(presentImages[current].id)

  useEffect(() => {
    if (sinkbowl === '' || faucet === '' || waterspout === '') {
      setDecorateResult('')
      return
    }
    setDecorateResult(`/images/${sinkbowl}_${faucet}_${waterspout}.jpg`)
  }, [sinkbowl, faucet, waterspout])

  return { decorateResult, afterChange, setDecoratedSelectableItem }
}
