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

  //console.log(userInfo)

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

  console.log(userObj)


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


  
