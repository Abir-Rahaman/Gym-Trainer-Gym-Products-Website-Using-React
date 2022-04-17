import { useEffect, useState } from "react"

const useFirebase = () =>{
    const [user , setUser] = useState({})
    useEffect (() => {

    },[])
    const signInWithGoogle = () => {
        console.log('done');
    }

    return {user , setUser ,signInWithGoogle}
}
export default useFirebase;