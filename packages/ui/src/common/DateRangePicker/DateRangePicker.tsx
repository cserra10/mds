import React, { useState, useEffect, memo } from 'react'
import clsx from 'clsx'
import { DatePicker, useUtils } from '@material-ui/pickers'
import { MaterialUiPickersDate } from '@material-ui/pickers/typings/date'
import InputBase from '@material-ui/core/InputBase'
import InputLabel from '@material-ui/core/InputLabel'
import DateRangeIcon from '@material-ui/icons/DateRange'
import { withStyles } from '@material-ui/core/styles'
import { Props } from './types'
import styles from './styles'

const DateRangePicker = (
  {
    className: classNameProp,
    classes,
    value,
    onChange,
    labelFunc,
    format,
    emptyLabel,
    autoOk,
    onOpen,
    onClose,
    open: openForward,
    disablePast = false,
    label = 'Date Range: ',
    placeholder = 'Tap to select',
    showLabel = true,
    renderInput: renderInputProp,
    ...props
  }: Props
) => {
  const [begin, setBegin] = useState<MaterialUiPickersDate>(value[0])
  const [end, setEnd] = useState<undefined | MaterialUiPickersDate>(value[1])
  const [prevBegin, setPrevBegin] = useState<undefined | MaterialUiPickersDate>(undefined)
  const [prevEnd, setPrevEnd] = useState<undefined | MaterialUiPickersDate>(undefined)
  const [hasClicked, setHasClicked] = useState<boolean>(false)
  const [hover, setHover] = useState<undefined | MaterialUiPickersDate>(undefined)
  const [accepted, setAccepted] = useState<boolean>(false)

  const utils = useUtils()

  // @ts-ignore
  const min = Math.min(begin, end || hover)
  // @ts-ignore
  const max = Math.max(begin, end || hover)

  const [open, setOpen] = useState(false)

  const isOpen = openForward !== undefined ? openForward : open

  useEffect(() => {
    // Only way to get to this state is is openForward is used
    if (isOpen && accepted && !prevBegin && !prevEnd) {
      setAccepted(false)
      setPrevBegin(begin)
      setPrevEnd(end)
      return
    }

    // Closed without accepting, reset to prev state, don't find onChange
    if (!isOpen && !accepted) {
      setBegin(prevBegin as MaterialUiPickersDate)
      setEnd(prevEnd as MaterialUiPickersDate)
      setHover(undefined)
      setHasClicked(false)
    }

    // Auto ok and hasn't been accepted, but has all the items set, accept and close.
    // This will also trigger the on change event by setting isOpen to false
    if (isOpen && autoOk && !accepted && begin && end && hasClicked) {
      setAccepted(true)
      if (onClose) {
        onClose()
      } else {
        setOpen(false)
      }
    }

    if (accepted && begin && end && !isOpen && hasClicked) {
      setHasClicked(false)
      onChange({ begin, end })
      if (onClose) {
        onClose()
      } else {
        setOpen(false)
      }
    }
  }, [begin, end, autoOk, accepted, isOpen, prevBegin, hasClicked, prevEnd])

  const renderDay = (
    day: MaterialUiPickersDate,
    selectedDate: MaterialUiPickersDate,
    dayInCurrentMonth: boolean,
    dayComponent: JSX.Element
  ) => (
    React.cloneElement(dayComponent, {
      onClick: (e: React.MouseEvent) => {
        setHasClicked(true)
        e.stopPropagation()
        if (!begin) {
          setBegin(day)
        } else if (!end) {
          if (utils.isBeforeDay(day as any, begin as any)) {
            setEnd(begin)
            setBegin(day)
          } else {
            setEnd(day)
          }
          if (autoOk) {
            setPrevBegin(undefined)
            setPrevEnd(undefined)
          }
        } else {
          setBegin(day)
          setEnd(undefined)
        }
      },
      onMouseEnter: () => requestAnimationFrame(() => setHover(day)),
      onFocus: () => requestAnimationFrame(() => setHover(day)),
      className: clsx(classes.day, {
        [classes.hidden]: dayComponent.props.hidden,
        [classes.current]: dayComponent.props.current,
        [classes.dayDisabled]: dayComponent.props.disabled,
        [classes.focusedRange]:
        (utils.isAfterDay(day as any, min as any) && utils.isBeforeDay(day as any, max as any))
        || (utils.isSameDay(day as any, min as any) && !utils.isSameDay(day as any, max as any))
        || (utils.isSameDay(day as any, max as any) && !utils.isSameDay(day as any, min as any)),
        [classes.focusedFirst]:
        utils.isSameDay(day as any, min as any) && !utils.isSameDay(day as any, max as any),
        [classes.focusedLast]:
        utils.isSameDay(day as any, max as any) && !utils.isSameDay(day as any, min as any),
        [classes.beginCap]: utils.isSameDay(day as any, min as any),
        [classes.endCap]: utils.isSameDay(day as any, max as any)
      }),
      disabled: true
    })
  )

  const formatDate = (date: MaterialUiPickersDate | undefined) => (
    date ? utils.format(date as any, format || utils.dateFormat) : ''
  )

  const className = clsx(classNameProp, classes.inputContainer)
  const renderInput = renderInputProp || (
    (from: MaterialUiPickersDate, to: MaterialUiPickersDate) => (
      <div className={className}>
        {showLabel && (
          <InputLabel className={classes.inputLabel}>{label}</InputLabel>
        )}
        <InputBase
          className={classes.input}
          onFocus={() => setOpen(true)}
          value={from && to ? `${formatDate(from)} - ${formatDate(to)}` : ''}
          placeholder={placeholder}
          startAdornment={<DateRangeIcon className={classes.inputIcon} />}
        />
      </div>
    )
  )

  return (
    <DatePicker
      {...props}
      value={begin}
      renderDay={renderDay}
      open={isOpen}
      onOpen={() => {
        setAccepted(false)
        setPrevBegin(begin)
        setPrevEnd(end)
        if (onOpen) {
          onOpen()
        } else {
          setOpen(true)
        }
      }}
      onAccept={() => {
        if (!begin || !end) {
          if (hover && utils.isBeforeDay(begin, hover)) {
            setEnd(hover)
          } else {
            setEnd(begin)
            setBegin(hover as MaterialUiPickersDate)
          }
        }
        setPrevBegin(undefined)
        setPrevEnd(undefined)
        // if (!autoOk) {
        setAccepted(true)
        // }
      }}
      onClose={() => {
        if (onClose) {
          onClose()
        } else {
          setOpen(false)
        }
      }}
      onChange={() => {}}
      DialogProps={{ className: classes.dateRangePickerDialog }}
      TextFieldComponent={() => renderInput(begin, end)}
      views={['year', 'month', 'date']}
      animateYearScrolling
      disablePast={disablePast}
    />
  )
}

export default memo(withStyles(styles)(DateRangePicker))
