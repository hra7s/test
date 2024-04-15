import User from "./User"
import UserClass from "./UserClass"

const About=()=>{
    return (
        <div>
            <h1>About</h1>
            <h2>This is about section </h2>
            <User/>
            <UserClass name={"Phani (class)"}/>
        </div>
    )
}


export default About
