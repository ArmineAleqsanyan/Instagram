import { useCallback, useState } from "react";

export const showMore = (Component) => {
    return (props) => {
        const [isShow, setIsShow] = useState(false)
        const open = useCallback(() => {
            setIsShow(true)
        }, [])
     return <Component {...props} isShow = {isShow} open ={open} />
    }
}