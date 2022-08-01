const Menu = () => {
  const padding = {
    paddingRight: 5
  }
  return (
    // <div>
    //   <a href='#' style={padding}>anecdotes</a>
    //   <a href='#' style={padding}>create new</a>
    //   <a href='#' style={padding}>about</a>
    // </div>

    <div>

      <Link style={padding} to = '/' > Anecdote </Link>
      <Link style={padding} to = '/about' > About </Link>
      <Link style={padding} to = '/create-new' > Create new </Link>
    </div>
  )
}
 export default Menu