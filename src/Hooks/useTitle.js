import { useEffect } from "react"

const useTitle = (title) =>{
    useEffect(()=>{
        document.title =`${title} - Nafis Photography`
    },[title])
}

export default useTitle;