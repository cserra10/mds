import React, { useEffect } from 'react'
import clsx from 'clsx'
import { withStyles } from '@material-ui/core/styles'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import InputBase from '@material-ui/core/InputBase'
import AppBar from '@material-ui/core/AppBar/AppBar'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search'
import { Props } from './types'
import styles from './styles'

const Header = (
  {
    className: classNameProp,
    classes,
    title = 'AppHeader'
  } : Props
) => {
  const className = clsx(classNameProp, classes.root)

  return (
    <AppBar
      className={className}
      position="relative"
      color="primary"
    >
      <Toolbar>
        <IconButton
          edge="start"
          className={classes.menuButton}
          color="inherit"
          aria-label="open drawer"
        >
          <MenuIcon />
        </IconButton>
        <Typography className={classes.title} variant="h6" noWrap>
          {title}
        </Typography>
        <div className={classes.search}>
          <div className={classes.searchIcon}>
            <SearchIcon />
          </div>
          <InputBase
            placeholder="Search…"
            className={classes.searchInput}
            inputProps={{ 'aria-label': 'search' }}
          />
        </div>
      </Toolbar>
    </AppBar>
  )
}

export default withStyles(styles)(Header)
