# `@keldor/themes`

> Collection of themes

###What a theme is?
A theme is a JS object that specifies the color of the components, darkness of the surfaces, level of shadow, appropriate opacity of ink elements, etc.

Themes let you apply a consistent tone to your app. It allows you to customize all design aspects of your project in order to meet the specific needs of your business or brand.


### Example theme

```
const myTheme = {
  palette: {
    primary: {
      light: "#7986cb",
      main: "#3f51b5",
      dark: "#303f9f",
      contrastText: "#fff"
    },
    secondary: {
      light: "#ff4081",
      main: "#f50057",
      dark: "#c51162",
      contrastText: "#fff"
    }
  }
}
```

### Build
`$ yarn build`
