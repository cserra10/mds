import bestday from '../bestday'

export default {
  ...bestday,
  palette: {
    ...bestday.palette,
    type: 'dark',
    primary: {
      main: '#003A8C'
    },
    secondary: {
      main: '#E08843'
    }
  }
}
