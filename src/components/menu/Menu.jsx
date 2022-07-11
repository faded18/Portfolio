import "./menu.scss"

const Menu = ({menuOpen,setmenu}) => {
  return (
    <div className=  {menuOpen?"menu active":"menu"}>
         <ul>
              <li onClick={()=>setmenu(!menuOpen)}>
                <a href="#intro">Home</a>
              </li>
              <li onClick={()=>setmenu(!menuOpen)}>
                <a href="#port">Port</a>
              </li>
              <li onClick={()=>setmenu(!menuOpen)}>
                <a href="#work">Work</a>
              </li>
              <li onClick={()=>setmenu(!menuOpen)}>
                <a href="#test">Testimonials</a>
              </li>
              <li onClick={()=>setmenu(!menuOpen)}>
                <a href="#contact">Contact</a>
              </li>


         </ul>



    </div>
  )
}

export default Menu