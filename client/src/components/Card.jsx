// import React from "react";
// import { Link } from "react-router-dom";

// export default function Card({ id, images, name }) {
  
//   const imageUrls = images.split(", "); // Separar las URLs de imagen en un array

//   return (
//     <div>
//       <Link to={`/products/${id}`} className="card-link">
//         <h2 className="cardName">{name}</h2>
//         <div>
//           {/* Itera cada URL de imagen y renderizar cada una */}
//           {imageUrls.map((imageUrl, index) => (
//             <img key={index} src={imageUrl} alt="no" />
//           ))}
//         </div>
//       </Link>
//     </div>
//   );
// }
import React from "react";
import { Link } from "react-router-dom";
import "./Card.css";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Card({ id, images, name, price }) {
  const imageUrls = images.split(", ");
  const firstImageUrl = imageUrls[0]; // Obtener la primera URL de imagen

  return (
    <div className="card" style={{ width: "250px", height: "400px", margin: "5px" }}>
      <Link to={`/${id}`} className="card-link">
        <img src={firstImageUrl} alt="no" className="card-img-top" style={{ height: "250px", objectFit: "cover" }} />
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <h6 className="card-subtitle mb-2 text-muted">${price}</h6>
        </div>
      </Link>
    </div>
  );
}


