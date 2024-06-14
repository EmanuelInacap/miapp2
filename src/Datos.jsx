function Datos(props){
    const {nombre,edad,apellido}=props.alumnos
    return(
        <h1>Hola {nombre} {apellido} {edad}</h1>
    )
    
}

export default Datos;