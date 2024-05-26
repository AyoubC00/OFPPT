// import { useAuthContext } from "../../contexts/authContext";
import AdminDemandes from "./administrateur"

const index = () => {
    // const {user} = useAuthContext()
    const user = {
        role:"administratuer"
    }
  return (
    <>
        {user.role === "administratuer" && (<AdminDemandes/>)}
        {user.role === "stagiaire" && (<h1>stagiaire</h1>)}
    </>
  )
}

export default index