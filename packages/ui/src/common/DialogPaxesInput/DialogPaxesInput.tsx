import React, { useState } from 'react'
import clsx from 'clsx'
import Badge from '@material-ui/core/Badge'
import InputLabel from '@material-ui/core/InputLabel'
import ButtonBase from '@material-ui/core/ButtonBase'
import Person from '@material-ui/icons/Person'
import ChildCareIcon from '@material-ui/icons/ChildCare'
import Dialog from '@material-ui/core/Dialog'
import { withStyles } from '@material-ui/core/styles'
import Paxes from '../Paxes'
import { PaxesFormType } from '../Paxes/types'
import { Props } from './types'
import styles from './styles'

const DialogPaxesInput = (
  {
    classes,
    className: classNameProp,
    label = 'Paxes:',
    showLabel = true,
    paxes,
    onChange
  }: Props
) => {
  const [open, setOpen] = useState<boolean>(false)

  const openModal = () => {
    setOpen(true)
  }

  const closeModal = () => {
    setOpen(false)
  }

  const className = clsx(classNameProp, classes.root)

  const onSubmit = (paxesForm: PaxesFormType) => {
    if (!paxesForm.error) {
      onChange(paxesForm.paxes)
      closeModal()
    }
  }

  return (
    <div className={className}>
      { showLabel && <InputLabel className={classes.label}>{label}</InputLabel>}

      <ButtonBase
        className={classes.control}
        onClick={openModal}
      >
        <Badge badgeContent={String(paxes.adults)}>
          <Person fontSize="small" />
        </Badge>

        <Badge badgeContent={String(paxes.children)}>
          <ChildCareIcon fontSize="small" />
        </Badge>

        <Dialog
          open={open}
          onClose={closeModal}
          fullScreen
          transitionDuration={0}
        >
          <Paxes
            onSubmit={onSubmit}
            initialData={paxes}
          />
        </Dialog>
      </ButtonBase>
    </div>
  )
}

export default withStyles(styles)(DialogPaxesInput)
