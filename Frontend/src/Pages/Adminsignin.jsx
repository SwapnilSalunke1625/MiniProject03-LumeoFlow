import React from "react"
import './Adminsignin.css';


function Adminsignin() {
 

  return (
    
     <form>
      <label for="username">Username:</label>
      <input type="text" id="username" name="username" required />

      <label for="password">Password:</label>
      <input type="password" id="password" name="password" required />

      <input type="submit" value="Submit" />
    </form>
      
    
  )
}

export default Adminsignin;
