
const UserCard = (props) => {
  return (
   
      
      <div className='text-center h-[350px] w-[250px] bg-black text-white my-5'>
        <img className='w-full h-[70%]' src={props.img} alt="img" />
        <h3>{props.username}</h3>
        <h4>Location: {props.location}</h4>
        <h5>{props.message}</h5>
      </div>
 
  )
}

export default UserCard
