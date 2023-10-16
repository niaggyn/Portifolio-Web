import { useEffect, useState } from "react";

function getWindowDimensions(){
    const {innerWidth: width, innerHeight: height} = window;
    return{width,height};
}

function useWindowDimensions(){
    const [vh, setVh] = useState(getWindowDimensions());

    useEffect(()=>{
        function resizePage(){
            setVh(getWindowDimensions());
        }
        window.addEventListener('resize',resizePage);
        return()=>{
            window.removeEventListener('resize',resizePage);
        }
    },[]);

    return vh;
}

export default useWindowDimensions