const HolaMundo = ({saludo, nombre}) => {
  return (
    <>
        <h1>{saludo}</h1>
        <p>{nombre}</p>
    </>
  )
}
export default HolaMundo

// const HolaMundo = (props) => {
//     return (
//       <>
//           <h1>{props.saludo}</h1>
//           <p>{props.nombre}</p>
//       </>
//     )
//   }
//   export default HolaMundo