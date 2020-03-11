import React, {
  memo,
  useCallback,
  useEffect,
  useState
} from 'react'
import shortid from 'shortid'
import clsx from 'clsx'
import { withStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import ButtonBase from '@material-ui/core/ButtonBase'
import { RoomsProps, RoomsFormType, RoomType } from './types'
import Paxes, { PaxesType } from '../Paxes'
import styles from './styles'

export const createRoomsForm = ({ id, rooms }: RoomsFormType = {
  id: shortid.generate(),
  rooms: []
}): RoomsFormType => ({
  id,
  rooms: [...rooms],
  submitted: false,
  submitCount: 0,
  error: undefined
})

const Rooms: React.FunctionComponent<RoomsProps> = (
  {
    id = shortid.generate(),
    className: classNameProp,
    classes,
    title = 'Rooms',
    minRooms = 1,
    maxRooms = 4,
    PaxesProps,
    onChange,
    onSubmit,
    submitLabel = 'Apply',
    autoSubmit = false,
    showSubmit = true,
    initialData = [{
      adults: 2,
      children: 0,
      childrenAges: []
    }]
  }: RoomsProps
) => {
  const createRoom = (paxes?: PaxesType): RoomType => {
    if (paxes) {
      return {
        id: shortid.generate(),
        paxes
      }
    }

    return {
      id: shortid.generate(),
      paxes: {
        adults: PaxesProps?.initialData.adults || 2,
        children: PaxesProps?.initialData.children || 0,
        childrenAges: new Array(PaxesProps?.initialData.children || 0).fill(undefined)
      }
    }
  }

  const [form, setForm] = useState<RoomsFormType>({
    id,
    rooms: initialData.map((paxes: PaxesType) => createRoom(paxes)),
    submitted: false,
    submitCount: 0,
    error: undefined
  })

  const { rooms, error, submitCount } = form

  const handleSubmit = () => {
    const isValid = rooms.every((room: RoomType) => room.paxes.childrenAges.every(age => age >= 0))
    setForm((prevState: RoomsFormType) => ({
      ...prevState,
      submitted: true,
      error: isValid ? undefined : { message: 'Enter child age' },
      submitCount: prevState.submitCount + 1
    }))
  }

  const addRoom = () => {
    const roomCount = rooms.length + 1
    if (roomCount <= maxRooms) {
      const newRoom = createRoom()
      setForm((prevState: RoomsFormType) => ({
        ...prevState,
        rooms: prevState.rooms.concat(...[newRoom])
      }))
    }
  }

  useEffect(() => {
    if (onChange) onChange(form.rooms)
    if (autoSubmit) handleSubmit()
  }, [form.rooms])

  useEffect(() => {
    if (onSubmit && submitCount > 0) {
      onSubmit(form)
    }
  }, [submitCount])

  const deleteRoom = (index: number) => {
    setForm((prevState: RoomsFormType) => {
      const temp = [...prevState.rooms]
      temp.splice(index, 1)
      return {
        ...prevState,
        rooms: temp
      }
    })
  }

  const updatePaxesInRoom = useCallback((paxes: PaxesType, index) => {
    setForm((prevState: RoomsFormType) => {
      const temp = [...prevState.rooms]
      temp[index].paxes = paxes
      return {
        ...prevState,
        rooms: temp
      }
    })
  }, [])

  const className = clsx(classNameProp, classes.root)

  return (
    <div className={className}>
      <Typography
        className={classes.title}
        variant="subtitle1"
      >
        {title}
      </Typography>

      {rooms.map((room, index: number) => (
        <div
          key={`room_${room.id}`}
          className={classes.room}
        >
          <Paxes
            className={classes.paxes}
            id={`paxesForm_${room.id}`}
            title={`Room ${index + 1}`}
            onSubmit={paxesForm => updatePaxesInRoom(paxesForm.paxes, index)}
            autoSubmit
            showError={false}
            showSubmit={false}
            initialData={room.paxes}
            classes={{
              title: classes.roomTitle
            }}
          />

          { index >= minRooms && (
            <ButtonBase
              className={classes.deleteRoomButton}
              data-index={index}
              onClick={() => deleteRoom(index)}
            >
              Remove room
            </ButtonBase>
          )}
        </div>
      ))}

      <ButtonBase
        className={classes.addRoomButton}
        onClick={addRoom}
      >
        Add room
      </ButtonBase>

      {error && <Typography>{error.message}</Typography>}

      {showSubmit && (
        <ButtonBase
          className={classes.submitButton}
          onClick={handleSubmit}
        >
          {submitLabel}
        </ButtonBase>
      )}
    </div>
  )
}

export default memo(withStyles(styles)(Rooms))
