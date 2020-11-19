import React from 'react'
import { OptionComponentProps } from '@salsita/configurator-sdk/client'
import { useProperty } from '@spicy-hooks/core'

export function DisplaySizeSlider ({ selectionInfo, option, onValueChange }: OptionComponentProps<{ diagonal: number }>) {
  const [diagonal, setDiagonal] = useProperty(selectionInfo?.values ?? option.defaultValues, onValueChange, 'diagonal')

  return (
    <label>
      <input
        type='range'
        value={diagonal}
        onChange={event => setDiagonal(Number(event.target.value))}
        min={15}
        max={32}
      /> {diagonal}"
    </label>
  )
}
