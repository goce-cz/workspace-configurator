import React from 'react'
import { OptionComponentProps, useAutoSelectProxy } from '@salsita/configurator-sdk/client'
import { useProperty } from '@spicy-hooks/core'

export function ExtraDriedSlider ({ selectionInfo, option, onValueChange, onAdd, onRemove }: OptionComponentProps<{ months: number }>) {
  const handleValueChange = useAutoSelectProxy({
    onValueChange,
    option,
    currentlySelected: selectionInfo != null,
    onAdd,
    onRemove
  })
  const [months, setMonths] = useProperty(selectionInfo?.values ?? option.defaultValues, handleValueChange, 'months')

  return (
    <div>
      <div>{months} months</div>
      <input type='range' value={months} onChange={event => setMonths(Number(event.target.value))} min={0} max={15} />
    </div>
  )
}
