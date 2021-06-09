//Custom hook encargado de manejar formularios  
import { useState } from "react"


//initialState es igual a un objeto vacio para que no marque error 
export const useForm = (initialState = {}) => {

    const [values, setValues] = useState(initialState);    
    
    //Con este metodo reseteamos el formulario
    //reset lo exportamos como tercer argumento en el arreglo
    //Y lo extraemos como tercer argumento del useForm en TodoApp   
    const reset = () => {
        setValues(initialState);
    }

    const handleInputChange = ({target}) => {
        
        setValues({
            ...values,
            [target.name]: target.value
        }); 
    }

    //Podemos retornarlo como un objeto, con dos funciones  
    return [values, handleInputChange, reset];
}
