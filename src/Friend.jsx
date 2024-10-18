export default function({friend}){
    const {name, email} = friend
    return(
        <div className="box2">
            <h3>Name: {name}</h3>
            <h4>Email: {email}</h4>
        </div>
    )
}