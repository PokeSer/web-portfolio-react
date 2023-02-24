// En vez de usar name ? name : 'Componente sin nombre' (que ademas queda feo poner name ? name xD), react incorpora estos props donde le pasas un valor por defecto si este no lo llama
export const Greeting = ({ name = "Componente sin nombre" }) => {
  return <h1>{name}</h1>;
};

export default Greeting;
