import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts, getLineProducts, totalCart, createUser, getUserInfo } from '../Redux/Actions';
import Paginado from "./Cards/Paginado";
import Navbar from "./Navbar";
import Menu from "./Menu";
import Footer from "./Footer";
import Slider from "./Slider";
import "./Slider.css";
import "./Home.css";
import { useParams } from "react-router-dom";
import Recommended from "./Cards/Recommended";
import Offer from "./Cards/Offer";
import { useAuth0 } from "@auth0/auth0-react";


export default function Home() {
  const dispatch = useDispatch();
  const { categoryName } = useParams();
  const allProducts = useSelector((state) => state.products);
  const selectedCategory = useSelector((state) => state.selectedCategory);
  const isSearch = useSelector((state) => state.isSearch);
  const isLine = useSelector((state) => state.isLine);

//////////////////////
  // const [userObj, setUserObj] = useState(null);
   const [loading, setLoading] = useState(true);

  const { user, isAuthenticated, isLoading } = useAuth0();
  const userInfo = useSelector((state) => state.userInfo);
  const [userObj, setUserObj] = useState(null);

  useEffect(() => {
    if (isAuthenticated && !isLoading) {
      const userDb = {
        email: user.email,
        name: user.name,
        fullname: user.name,
        profile: user.nickname,
        avatar: user.picture,
      };
      dispatch(createUser(userDb))
      .then(() => setLoading(false)) // Establecer el estado de carga en "false" cuando los datos se hayan guardado
      .catch((error) => {
        // Manejar errores, si es necesario
        setLoading(false);
      });
  }
}, [dispatch, isAuthenticated, isLoading, user]);


  const filteredProducts = allProducts.filter(
    (product) => product.category === categoryName
  );

/////////////////////
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
////////////////////////////

///////
  useEffect(() => {
    dispatch(getProducts());
    dispatch(getUserInfo())
  }, [dispatch]);

  useEffect(() => {
    if (selectedCategory) {
      dispatch(getLineProducts(selectedCategory));
    }
  }, [dispatch, selectedCategory]);


  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div>
        <Menu />
      </div>
      <div>
        {/* Show the Slider component only if isSearch and isLine are false */}
        {!isSearch && !isLine && <Slider />}
      </div>
      <link href="https://fonts.googleapis.com/css2?family=Raleway:wght@400;700&display=swap" rel="stylesheet" />

      <div>
        <div>
          {/* Show the Paginado component only if isSearch is true */}
          {isSearch && <Paginado cards={filteredProducts} />}
        </div>
        <div>
          {/* Show the Recommended component only if isSearch is false */}
          {!isSearch && <Recommended cards={filteredProducts} showAll={true} />}
        </div>
        <div>
          {/* Show the Offer component only if isSearch is false */}
          {!isSearch && <Offer cards={filteredProducts} showAll={true} />}
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}
