import { FaArrowUp } from "react-icons/fa";

function BackTop(){

const top=()=>{

window.scrollTo({

top:0,

behavior:"smooth"

})

}

return(

<button
className="top-btn"
onClick={top}
>

<FaArrowUp/>

</button>

)

}

export default BackTop;