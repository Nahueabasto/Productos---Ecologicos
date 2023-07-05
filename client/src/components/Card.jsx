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
import "./Card.css"; // Importar archivo CSS para estilos personalizados

export default function Card({ id, images, name }) {
  const imageUrls = images.split(", ");
  const firstImageUrl = imageUrls[0]; // Obtener la primera URL de imagen

  return (
    <div> <Link to={`/${id}`} className="card-link">
    <div className="card-content">
          {/* Mostrar solo la primera URL de imagen */}
          <img src={firstImageUrl} alt="no" className="imagenes"/>
          <h2 className="cardName">{name}</h2>
        </div>
        </Link>
    </div>
  );  
}
