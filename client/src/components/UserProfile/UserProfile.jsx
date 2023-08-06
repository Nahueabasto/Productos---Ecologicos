import React, { useEffect, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Link } from "react-router-dom";
import { getUserInfo } from "../../Redux/Actions";
import { useDispatch, useSelector } from "react-redux";
import Navbar from "../Navbar";
import Menu from "../Menu";
import Footer from "../Footer";
import "./UserProfile.css"

const UserProfile = ({ id }) => {
  const dispatch = useDispatch();
  const { user } = useAuth0();
  const userInfo = useSelector((state) => state.userInfo);
  const [userObj, setUserObj] = useState(null);

  useEffect(() => {
    dispatch(getUserInfo(id));
  }, [dispatch, id]);

  

  useEffect(() => {
    // Si userInfo y user están disponibles, busca el usuario que coincide con el email
    if (userInfo && user) {
      for (const userObj of userInfo) {
        if (userObj.email === user.email) {
          setUserObj(userObj); // Almacena el usuario encontrado en el estado local
          break; // Puedes detener la búsqueda si ya encontraste al usuario
        }
      }
    }
  }, [userInfo, user]);



  return (
    
      <div>
        <div>
          <Navbar />
        </div>
        <div>
          <Menu />
        </div>
        <div className="mi-cuenta">Mi cuenta</div>
        

        <div className="containerr">
          <div className="contenedor-1">
            <h5 className="card-title-divider">Datos</h5>

            <div className="componente-1-card">
              <div className="card-body">
                <h5 className="card-titlee">Datos Personales</h5>
                {userObj && (
                  <div>
                    <img src={userObj.avatar} alt={userObj.name} />
                    <p>Nombre: {userObj.name}</p>
                    <p>Email: {userObj.email}</p>
                    <p>Profile: {userObj.profile}</p>
                  </div>
                )}
              </div>
            </div>
          </div> 
          
          <div >
          <div className="contenedor-2">
          <h5 className="card-title-dividerr">Mis compras</h5>
          <div className="primera-compra"> ¡Hace tu primera compra! </div>
          <Link to="/" className="black-button"> IR A LA TIENDA </Link>
        </div>
        </div>
        </div>

        <div>
          <Footer />
        </div>
      </div>
    
  );
};

export default UserProfile;

// import React, { useEffect, useState } from "react";
// import { useAuth0 } from "@auth0/auth0-react";
// import { createUser, getUserInfo } from "../../Redux/Actions";
// import { useDispatch, useSelector } from "react-redux";
// import Navbar from "../Navbar";
// import Menu from "../Menu";
// import Footer from "../Footer";


// const UserProfile = ({ id }) => {
//   const dispatch = useDispatch();
//   const { user, isAuthenticated, isLoading } = useAuth0();
//   const userInfo = useSelector((state) => state.userInfo);
//   const [userObj, setUserObj] = useState(null);
//   const [loading, setLoading] = useState(true); // Estado para manejar la carga

//   useEffect(() => {
//     dispatch(getUserInfo(id));
//   }, [dispatch, id]);

//   useEffect(() => {
//     if (isAuthenticated && !isLoading) {
//       const userDb = {
//         email: user.email,
//         name: user.name,
//         fullname: user.name,
//         profile: user.nickname,
//         avatar: user.picture,
//       };

//       dispatch(createUser(userDb))
//         .then(() => setLoading(false)) // Establecer el estado de carga en "false" cuando los datos se hayan guardado
//         .catch((error) => {
//           // Manejar errores, si es necesario
//           setLoading(false);
//         });
//     }
//   }, [dispatch, isAuthenticated, isLoading, user]);

//   useEffect(() => {
//     // Si userInfo y user están disponibles, busca el usuario que coincide con el email
//     if (userInfo && user) {
//       for (const userObj of userInfo) {
//         if (userObj.email === user.email) {
//           setUserObj(userObj); // Almacena el usuario encontrado en el estado local
//           break; // Puedes detener la búsqueda si ya encontraste al usuario
//         }
//       }
//     }
//   }, [userInfo, user]);

//   if (isLoading || loading || !userObj) {
//     // Muestra un spinner de carga mientras los datos se están cargando o si userObj es null
//     return <div>Loading...</div>;
//   }

//   return (
//     isAuthenticated && (
//       <div>
//         <div>
//           <Navbar />
//         </div>
//         <div>
//           <Menu />
//         </div>
//         <div>Mi cuenta</div>
//         <div>
//           <hr />
//           <div class="container mt-4">
//             <h5 class="card-title">Datos</h5>
//             <div class="card">
//               <div class="card-body">
//                 <h5 class="card-title">Datos Personales</h5>
//                 {userObj && (
//                   <div>
//                     <img src={userObj.avatar} alt={userObj.name} />
//                     <p>Nombre: {userObj.name}</p>
//                     <p>Email: {userObj.email}</p>
//                   </div>
//                 )}
//               </div>
//             </div>
//           </div>
//           <div>Mis compras</div>
//         </div>
//         <div>
//           <Footer />
//         </div>
//       </div>
//     )
//   );
// };

// export default UserProfile;

  
