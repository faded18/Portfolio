import "./portlist.scss"

const Portlist = ({id,active,title,setselected}) => {
  return (
  <li className={active?"portlist active":"portlist"}  onMouseEnter={()=>setselected(id)}>
       {title}
  </li>
  )
}

export default Portlist