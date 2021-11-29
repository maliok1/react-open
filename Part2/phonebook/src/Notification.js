const Notification =({ message })=>{
  if(message == null){
    return null
  }
  let messageClass = message.includes('Added') ? 'success' : 'error' 

  return (
      <h2 className={messageClass}>{message}</h2>
    )   
}

export default Notification