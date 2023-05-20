import React from "react";
import { useEffect} from "react";
import { useDispatch, useSelector } from "react-redux"
import { getProducts } from '../Redux/Actions';
import Card from './Card';
//import { Link } from "react-router-dom";

export default function Home() {
    const dispatch = useDispatch()
    const allProducts = useSelector((state) => state.products)

    useEffect(() => {
        dispatch(getProducts());
    }, [dispatch])

    return (
        <div>
            <div className="cards-container">
                {allProducts?.map((el) => {
                    return (
                        <div key={el.id}>
                            <Card
                                name={el.name}
                                images={el.images}
                                id={el.id}
                            />
                        </div>
                    );
                })}
            </div>
        </div>
    )
}
