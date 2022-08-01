const Menu = () => {
  const padding = {
    paddingRight: 5
  }
  return (

    <div>

      <Link style={padding} to = '/' > Anecdote </Link>
      <Link style={padding} to = '/about' > About </Link>
      <Link style={padding} to = '/create-new' > Create new </Link>
    </div>
  )
}
 export default Menu