import React from "react";
import { useEffect} from "react";
import { useDispatch, useSelector } from "react-redux"
import { getProducts, getLineProducts } from '../Redux/Actions';
import Card from "./Cards/Card";
import Navbar from "./Navbar";
import Menu from "./Menu";
import Footer from "./Footer";
//import "./Home.css";
import ProductDetail from "./Details";
import { Route, Switch } from "react-router-dom";
import { useParams } from "react-router-dom";
import "./LineProducts.css";

export default function LineProducts() {
    const { id } = useParams()
    const dispatch = useDispatch()
    const allProducts = useSelector((state) => state.products)
    console.log(selectedCategory)

    return (
        <div>
            <div>
                <Navbar />
            </div>
            <div>
                <Menu />
            </div>
            <link href="https://fonts.googleapis.com/css2?family=Raleway:wght@400;700&display=swap" rel="stylesheet"></link>
        <div className="line-container" >

            <div className="cards-container">
                {allProducts?.map((el) => {
                    return (
                        <div key={el.id}>
                            <Card
                                images={el.images}
                                name={el.name}
                                id={el.id}
                                price={el.price}
                            />
                        </div>
                    );
                })}
            </div>
        </div>
        <div>
            < Footer />
        </div>
        </div>
    )
}
