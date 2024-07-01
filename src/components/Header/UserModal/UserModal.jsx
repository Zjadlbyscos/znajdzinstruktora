import React from "react";
import { NavLink } from "react-router-dom";

import { ProfieleModalContainer } from "./UserModal.styled";
export const UserModal = ()=>{
   

// handle logout 


return(
<ProfieleModalContainer>
<NavLink to="/zarejestruj">Zarejestruj</NavLink>
      <NavLink to="/zaloguj">Zaloguj</NavLink>
</ProfieleModalContainer>

)
}

//<ProfieleModalContainer>
// {isAuthenticated ? (
//     <>
//       <button onClick={() => navigate('/profile/edit')}>Edytuj profil</button>
//       <button onClick={handleLogout}>Wyloguj</button>
//     </>
//   ) : (
//     <>
//       <button onClick={() => navigate('/register')}>Zarejestruj</button>
//       <button onClick={() => navigate('/login')}>Zaloguj</button>
//     </>
//   )}
//</ProfieleModalContainer>