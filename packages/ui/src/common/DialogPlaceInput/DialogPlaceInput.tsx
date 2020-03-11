import React, { useState } from 'react'
import clsx from 'clsx'
import InputBase from '@material-ui/core/InputBase'
import ButtonBase from '@material-ui/core/ButtonBase'
import InputLabel from '@material-ui/core/InputLabel'
import Dialog from '@material-ui/core/Dialog'
import PlaceIcon from '@material-ui/icons/Place'
import Close from '@material-ui/icons/Close'
import { withStyles } from '@material-ui/core/styles'
import PlaceInput, { PlaceType } from '../PlaceInput'
import { DialogPlaceInputProps } from './types'
import styles from './styles'

const DialogPlaceInput: React.FC<DialogPlaceInputProps> = (
  {
    className: classNameProp,
    classes,
    onPlaceChange,
    placeholder = 'Tap to search',
    label = 'Place:',
    fetchPlaces,
    value = null,
    renderInput: renderInputProp,
    showLabel = true,
    showStartAdornment = true
  }: DialogPlaceInputProps
) => {
  const [dialogOpen, setDialogOpen] = useState<boolean>(false)
  const closeDialog = () => setDialogOpen(false)
  const openDialog = () => setDialogOpen(true)

  const className = clsx(classNameProp, classes.root)

  const handlePlaceChange = (p: PlaceType) => {
    onPlaceChange(p)
    closeDialog()
  }

  const renderInput = renderInputProp || (
    (p: PlaceType) => (
      <>
        {showLabel && <InputLabel className={classes.label}>{label}</InputLabel>}
        <InputBase
          className={classes.input}
          startAdornment={
            showStartAdornment && <PlaceIcon className={classes.inputStartAdornment} />
          }
          value={p ? p.Label : ''}
          placeholder={placeholder}
          onClick={openDialog}
          readOnly
        />
      </>
    )
  )

  return (
    <div className={className}>
      {renderInput(value)}

      <Dialog
        fullScreen
        open={dialogOpen}
        onClose={closeDialog}
        transitionDuration={0}
      >
        <ButtonBase
          className={classes.close}
          onClick={closeDialog}
        >
          <Close />
        </ButtonBase>

        <PlaceInput
          placeholder={placeholder}
          fetchPlaces={fetchPlaces}
          onPlaceChange={handlePlaceChange}
          autoFocus
          showClear
        />
      </Dialog>
    </div>
  )
}

export default React.memo(withStyles(styles)(DialogPlaceInput))
