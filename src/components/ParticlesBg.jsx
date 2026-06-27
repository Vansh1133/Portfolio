import { useCallback } from "react";
import Particles from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

function ParticlesBg() {

const init = useCallback(async(engine)=>{
await loadSlim(engine);
},[]);

return(

<Particles

id="tsparticles"

init={init}

options={{

background:{color:"transparent"},

fpsLimit:60,

particles:{

number:{value:70},

color:{value:"#3b82f6"},

links:{
enable:true,
distance:150,
color:"#3b82f6",
opacity:.25
},

move:{
enable:true,
speed:2
},

size:{
value:3
},

opacity:{
value:.6
}

}

}}

/>

)

}

export default ParticlesBg;