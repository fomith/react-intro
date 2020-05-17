import { connect } from "react-redux";
import Navbar from "./Navbar";



const mapStateToProps = (state) => {
return(
    {
        id: state.contentPage.Id
    }
)
}




export default connect(mapStateToProps)(Navbar)