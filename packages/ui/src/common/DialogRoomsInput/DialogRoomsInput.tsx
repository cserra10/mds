import React, { useState } from 'react'
import clsx from 'clsx'
import Badge from '@material-ui/core/Badge'
import InputLabel from '@material-ui/core/InputLabel'
import ButtonBase from '@material-ui/core/ButtonBase'
import Person from '@material-ui/icons/Person'
import ChildCareIcon from '@material-ui/icons/ChildCare'
import Hotel from '@material-ui/icons/Hotel'
import Dialog from '@material-ui/core/Dialog'
import { withStyles } from '@material-ui/core/styles'
import Rooms from '../Rooms/Rooms'
import { RoomsFormType } from '../Rooms/types'
import { Props } from './types'
import styles from './styles'

const DialogRoomsInput = (
  {
    classes,
    className: classNameProp,
    label = 'Rooms:',
    showLabel = true,
    rooms,
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

  const adults = rooms.reduce(
    (acc, room) => (acc + (room.adults ? room.adults : 0)),
    0
  )

  const children = rooms.reduce(
    (acc, room) => (acc + (room.children ? room.children : 0)),
    0
  )

  const onRoomsSubmit = (roomsForm: RoomsFormType) => {
    if (!roomsForm.error) {
      onChange(roomsForm.rooms.map(room => room.paxes))
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
        <Badge badgeContent={String(rooms.length)}>
          <Hotel fontSize="small" />
        </Badge>

        <Badge badgeContent={String(adults)}>
          <Person fontSize="small" />
        </Badge>

        <Badge badgeContent={String(children)}>
          <ChildCareIcon fontSize="small" />
        </Badge>

        <Dialog
          open={open}
          onClose={closeModal}
          fullScreen
          transitionDuration={0}
        >
          <Rooms
            onSubmit={onRoomsSubmit}
            initialData={rooms}
          />
        </Dialog>
      </ButtonBase>
    </div>
  )
}

export default withStyles(styles)(DialogRoomsInput)
