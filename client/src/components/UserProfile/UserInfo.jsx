import React, { useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { useDispatch, useSelector } from 'react-redux';
import { getUserInfo, getBuys } from "../../Redux/Actions";
import CartCard from "./CartCard";
import Navbar from "../Navbar";
import Menu from "../Menu";
import Footer from "../Footer";
import "./UserInfo.css"

export default function UserInfo({ id }) {
  const dispatch = useDispatch();
  const { user } = useAuth0();
  const userInfo = useSelector((state) => state.userInfo);
  const buys = useSelector((state) => state.buys);
  
  useEffect(() => {
    dispatch(getUserInfo(id));
    dispatch(getBuys());
  }, [dispatch, id]);

  // Filtrar los productos comprados por el usuario actual
  const userBuys = user ? buys.filter((buy) => buy.user.email === user.email) : [];

  return (

    <div>
      <div>
          <Navbar />
        </div>
        <div>
          <Menu />
        </div>
        <h5 className="compra">Compras</h5>
        <div className="compras">
    
      {userBuys.map((buy) => (
        <CartCard 
        key={buy.id}
        name={buy.product.name}
        images={buy.product.images}
        />
      ))}
  
    </div>

    <div>
          <Footer />
        </div>
    </div>
  );
}


