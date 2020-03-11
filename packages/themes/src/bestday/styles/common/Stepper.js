export default theme => ({
  root: {
    display: 'flex',
    border: 'unset',
    height: 40,
    width: 140,
    justifyContent: 'space-between',
    '& > * ': {
      flexBasis: 'unset'
    }
  },

  input: {
    borderLeft: 'unset',
    borderRight: 'unset',
    height: 40
  },

  increaseButton: {
    borderRadius: '50%',
    border: `1px solid ${theme.palette.primary.main}`,
    width: 40,
    height: 40,
    '& svg': {
      fill: theme.palette.primary.main
    }
  },

  decreaseButton: {
    borderRadius: '50%',
    border: `1px solid ${theme.palette.primary.main}`,
    width: 40,
    height: 40,
    '& svg': {
      fill: theme.palette.primary.main
    }
  }
})
