import "./topbar.scss";
import PersonIcon from "@mui/icons-material/Person";
import MailIcon from "@mui/icons-material/Mail";
const Topbar = ({menuOpen,setmenu}) => {


  return (
    <div className= { menuOpen?"top active":"top"}>
      <div className="wrap">
        <div className="left">
          <a href="#intro" className="head">
            Hello
          </a>
          <div className="left-">
            <div className="left-inner">
              <PersonIcon sx={{ marginRight: "10px" }} />
              <span> +91 9565253063</span>
            </div>
            <div className="left-outer">
              <MailIcon sx={{ marginRight: "10px" }} />
              <span>pk8348052@gmail.com</span>
            </div>
          </div>
        </div>
        <div className="right">
          <div className="line" onClick={()=>setmenu(!menuOpen)}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
