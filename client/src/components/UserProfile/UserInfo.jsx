// import React, { useEffect, useState } from "react";
// import { useDispatch, useSelector } from 'react-redux';
// import { getUserInfo } from "../../Redux/Actions";


// export default function UserInfo({ id, email, fullname, profile, avatar }){
//     const dispatch = useDispatch();
//     const userInfo = useSelector((state) => state.userInfo);
//     console.log(userInfo)

//     useEffect(() => {
//         dispatch(getUserInfo(id));
//       }, [dispatch, id]);

//       const info = userInfo.info?.map((e) => e.email);
//    // console.log(info)

//     return(
//         <div>
//             <h1>1</h1>
//             {selectedImage && (
//             <img
//               src={selectedImage}
//               alt="Not found"
//               className="enlarged-image"
//             />
//           )}
//           <div className="detalle">
//             <p className="detalle-name">{details.name}</p>
//             <p className="detalle-price">${details.price}</p>
//             <p className="detalle-texto">Size:</p> {details.size}
//             <p className="detalle-texto">Brand:</p>{" "}
//             <div className="detalle-brands">{brands}</div>
//             <p className="detalle-texto">Detail:</p> {details.details}
//             <p className="detalle-texto">Line:</p>{" "}
//             <div className="detalle-lines">{lines}</div>
//           </div>
//         </div>
//       )}
//         </div>
//     )
// }