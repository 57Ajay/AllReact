import { useEffect } from "react"

const useDocumentClicks = ()=>{
    useEffect(()=>{
        const HandleDocumentClick = ()=>{
            console.log("clicked")
          }
          document.addEventListener("click", HandleDocumentClick);
          return ()=>{
            document.removeEventListener("click", HandleDocumentClick);
          }
    }, []);
    console.log("useDocumentClicks have been called")
}

export default useDocumentClicks;