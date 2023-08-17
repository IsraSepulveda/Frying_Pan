import React from 'react';

function Profile() {
  return (
    <div>
      <div>Please enter the code that was sent to your email to unlock your locker...</div>
      <form action="http://172.18.7.23:8000/openLocker/" method="POST">
        <input type="text" name="item_id" />
        <button type="submit">submit</button>
      </form>
    </div>
  );
}

export default Profile;




// import React, { useState } from 'react';

// function Profile() {
//   const [itemId, setItemId] = useState('');

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     // Aquí puedes realizar cualquier lógica necesaria antes de enviar el formulario
//     // Por ejemplo, puedes hacer una solicitud POST al servidor con el item_id
//     // utilizando librerías como Axios o fetch.

//     // Ejemplo con fetch:
//    // fetch('http://0.0.0.0:8000/openLocker/', {
//     fetch('http://172.18.7.23:8000/openLocker/', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({ item_id: itemId }),
//     })
//       .then(response => response.json())
//       .then(data => {
//         // Manejar la respuesta del servidor si es necesario
//         console.log(data);
//       })
//       .catch(error => {
//         // Manejar errores si ocurren durante la solicitud
//         console.error(error);
//       });
//   };

//   return (
//     <div>
//       <form onSubmit={handleSubmit}>
//         <div>Please enter the code that has been sent to your email to unlock your locker</div>
//         <input
//           type="text"
//           name="item_id"
//           value={itemId}
//           onChange={(event) => setItemId(event.target.value)}
//         />
//         <button type="submit">submit</button>
//       </form>
//     </div>
//   );
// }

// export default Profile;




// import React, { useState, useEffect } from 'react';

// function Profile() {
//   const [options, setOptions] = useState([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await fetch('http://172.18.7.23:8000/locker/enable');
//         const data = await response.json();
//         setOptions(data); // Actualiza el estado con los datos recibidos
//       } catch (error) {
//         console.error('Error al obtener datos de la API:', error);
//       }
//     };

//     fetchData();
//   }, []);

//   return (
//     <form>
//       <select id="selectElement">
//         {options.map(item => (
//           <option key={item.id} value={item.id}>
//             {item.name}
//           </option>
//         ))}
//       </select>
//     </form>
//   );
// }

// export default Profile;

//----------------------------------------------------------------

// import React, { useEffect } from 'react';

// function Profile() {
//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await fetch('http://172.18.7.23:8000/locker/enable');
//         const data = await response.json();

//         const selectElement = document.getElementById('selectElement');
        
//         data.forEach(item => {
//           const optionElement = document.createElement('option');
//           optionElement.value = item.id;
//           optionElement.textContent = item.name;
          
//           selectElement.appendChild(optionElement);
//         });
//       } catch (error) {
//         console.error('Error al obtener datos de la API:', error);
//       }
//     };

//     fetchData();
//   }, []);

//   return (
//     <form>
//       <select id="selectElement">
//         {/* Las opciones generadas por JavaScript se agregarán aquí */}
//       </select>
//     </form>
//   );
// }

// export default Profile;





// import React, { useEffect } from 'react';

// function Profile() {
//   useEffect(() => {
//     const data = {
//       id: '2',
//       passw: '245654'
//     };
//     const url = 'http://172.18.7.23:8000/pass';

//     // Configuración de la solicitud
//     const options = {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json'
//       },
//       body: JSON.stringify(data) // Convierte el objeto a una cadena JSON
//     };
    
//     // Hacer la solicitud utilizando fetch()
//     fetch(url, options)
//       .then(response => response.json()) // Convertir la respuesta a JSON
//       .then(deta => {
//         // Manejar la respuesta de la API
//         console.log("wtf:");
//         console.log(deta);
//       })
//       .catch(error => {
//         // Manejar errores de la solicitud
//         console.error('Error:', error);
//       });
//   }, []); // El arreglo de dependencias vacío asegura que este efecto solo se ejecute una vez al montar el componente

//   return (
//     <div>
//       {/* Contenido de tu componente */}
//     </div>
//   );
// }

// export default Profile;


// import React, { useState } from "react";

// function Profile() {
//   const [nombre, setNombre] = useState("");
//   const [email, setEmail] = useState("");
//   const [respuestaServidor, setRespuestaServidor] = useState("");

//   const handleSubmit = async (event) => {
//     event.preventDefault();

//     const datos = {
//       nombre: nombre,
//       email: email
//     };

//     try {
//       const response = await fetch('http://172.18.7.23:8000/pass', {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json"
//         },
//         body: JSON.stringify(datos)
//       });

//       const responseData = await response.json(); // Valor devuelto por el servidor
//       setRespuestaServidor(responseData);
//     } catch (error) {
//       console.error("Error al enviar el formulario:", error);
//     }
//   };

//   return (
//     <div>
//       <form onSubmit={handleSubmit}>
//         {/* ... Campos del formulario ... */}
//         <button type="submit">Enviar</button>
//       </form>

//       {respuestaServidor && (
//         <p>Respuesta del servidor: {respuestaServidor}</p>
//       )}
//     </div>
//   );
// }

// export default Profile;

// import React, { useState } from "react";
// import axios from "axios";

// function Profile() {
//   const [nombre, setNombre] = useState("");
//   const [email, setEmail] = useState("");
//   const [respuestaServidor, setRespuestaServidor] = useState("");

//   const handleSubmit = async (event) => {
//     event.preventDefault();

//     const datos = {
//       nombre: nombre,
//       email: email
//     };

//     try {
//       const response = await axios.post('http://172.18.7.23:8000/pass', datos);
//       const responseData = response.data; // Valor devuelto por el servidor
//       setRespuestaServidor(responseData);
//     } catch (error) {
//       console.error("Error al enviar el formulario:", error);
//     }
//   };

//   return (
//     <div>
//       <form onSubmit={handleSubmit}>
//         {/* ... Campos del formulario ... */}
//         <button type="submit">Enviar</button>
//       </form>

//       {respuestaServidor && (
//         <p>Respuesta del servidor: {respuestaServidor}</p>
//       )}
//     </div>
//   );
// }

// export default Profile;

//-----------------------------------------------------------------------------

// import React, { useState } from "react";
// import axios from "axios";

// function Profile() {
//   const [nombre, setNombre] = useState("");

//   const handleSubmit = async (event) => {
//     event.preventDefault();

//     const datos = {
//       nombre: nombre
//     };

//     try {
//       const response = await axios.post("http://172.18.7.23:8000/pass", datos);
//       console.log("Respuesta del servidor:", response.data);
//     } catch (error) {
//       console.error("Error al enviar el formulario:", error);
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <label htmlFor="nombre">ID:</label>
//       <input
//         type="text"
//         id="nombre"
//         value={nombre}
//         onChange={(event) => setNombre(event.target.value)}
//       /><br/><br/>
    
//       <button type="submit">Enviar</button>
//     </form>
//   );
// }

// export default Profile;


// import React, { useState } from 'react';

// function Profile() {
//   const enviarFormulario = () => {
//     const formulario = document.getElementById("miFormulario");
//     const datos = {
//       nombre: formulario.nombre.value,
//       email: formulario.email.value
//     };

//     const datosJSON = JSON.stringify(datos);

//     fetch("ruta-del-recurso", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json"
//       },
//       body: datosJSON
//     })
//     .then(response => response.json())
//     .then(data => {
//       // Hacer algo con la respuesta del servidor
//     })
//     .catch(error => {
//       console.error("Error al enviar el formulario:", error);
//     });
//   };

//   return (
//     <div>
//       <form id="miFormulario">
//         <label htmlFor="nombre">Nombre:</label>
//         <input type="text" id="nombre" name="nombre" /><br /><br />
        
//         <label htmlFor="email">Email:</label>
//         <input type="email" id="email" name="email" /><br /><br />
        
//         <input type="button" value="Enviar" onClick={enviarFormulario} />
//       </form>
//     </div>
//   );
// }

// export default Profile;



// import React, { useState, useEffect } from 'react';

// function Profile() {
//     const [data, setData] = useState([]);
//   const [selectedItem, setSelectedItem] = useState('');
//   const apiUrl = 'http://172.18.7.23:8000/locker/enable';

//   useEffect(() => {
//     fetch(apiUrl)
//       .then(response => response.json())
//       .then(data => {
//         console.log(data); // Verifica la estructura de los datos
//         setData(data.items); // Asigna el arreglo de items
//       })
//       .catch(error => console.error('Error fetching data:', error));
//   }, []);
  
  

//   const handleSelectChange = event => {
//     setSelectedItem(event.target.value);
//   };

//   const handleSubmit = event => {
//     event.preventDefault();
//     // Aquí puedes usar el valor seleccionado (selectedItem) para hacer lo que necesites, como enviarlo a la API
//   };

//   return (
//     <div className="Profile">
//       <div>Selecciona un elemento:</div>
//       <form onSubmit={handleSubmit}>

//         {data && Array.isArray(data) && (
//   <select value={selectedItem} onChange={handleSelectChange}>
//     <option value="">Seleccione un elemento</option>
//     {data.map(item => (
//       <option key={item.id} value={item.id}>
//         {item.name}
//       </option>
//     ))}
//   </select>
// )}
//         <button type="submit">Enviar</button>
//       </form>
//     </div>
//   );
// }

// export default Profile;


// import React, { useState, useEffect } from 'react';

// function Profile() {
//   const [data, setData] = useState(null);
//   const apiUrl = 'http://172.18.7.23:8000/locker/enable';

//   useEffect(() => {
//     // Realizar la solicitud fetch cuando el componente se monta
//     fetch(apiUrl)
//       .then(response => response.json())
//       .then(data => setData(data))
//       .catch(error => console.error('Error fetching data:', error));
//   }, []);

//   return (
//     <div className="Profile">
//       <div>Respuesta de la API:</div>
//       {data ? (
//         <pre>{JSON.stringify(data, null, 2)}</pre>
//       ) : (
//         <p>Cargando datos...</p>
//       )}
//     </div>
//   );
// }

// export default Profile;

// -----------------------------------------------------------


// import React, { useEffect } from 'react';

// const Profile = () => {
//   useEffect(() => {
//     const data = {
//       id: '2',
//       passw: '245654'
//     };
//     const url = 'http://172.18.7.23:8000/locker/enable';

//     // Configuración de la solicitud
//     const options = {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'Profilelication/json'
//       },
//       body: JSON.stringify(data) // Convierte el objeto a una cadena JSON
//     };

//     // Hacer la solicitud utilizando fetch()
//     fetch(url, options)
//       .then(response => response.json()) // Convertir la respuesta a JSON
//       .then(deta => {
//         // Manejar la respuesta de la API
//         console.log('wtf:');
//         console.log(deta);
//       })
//       .catch(error => {
//         // Manejar errores de la solicitud
//         console.error('Error:', error);
//       });
//   }, []);

//   return (
//     <div>
//       {/* Tu componente JSX */}
//     </div>
//   );
// };

// export default Profile;
