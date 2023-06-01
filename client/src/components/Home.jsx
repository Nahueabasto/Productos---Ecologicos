import React from "react";
import { useEffect} from "react";
import { useDispatch, useSelector } from "react-redux"
import { getProducts } from '../Redux/Actions';
import Card from './Card';
import Navbar from "./Navbar";
import "./Home.css";

export default function Home() {
    const dispatch = useDispatch()
    const allProducts = useSelector((state) => state.products)

    useEffect(() => {
        dispatch(getProducts());
    }, [dispatch])

    return (
        <div>
            <div>
                <Navbar />
            </div>
        <div>
            <div className="cards-container">
                {allProducts?.map((el) => {
                    return (
                        <div key={el.id}>
                            <Card
                                images={el.images}
                                name={el.name}
                                id={el.id}
                            />
                        </div>
                    );
                })}
            </div>
        </div>
        </div>
    )
}
