import { useEffect, useRef, useState } from 'react';

export const useFetch = (url) => {
     
     //Hacemos uso de useRef 
     //La idea es que el isMounted mantenga la referencia cuando el hook esta vivo o el componente que lo usa
     //siga montado 
     const isMounted = useRef(true);

     const [state, setState] = useState({data:null, loading: true, error: null});

     //Cuando se desmonte el componente canbia el valor del isMounted a false
     //No dispara la renderizacion del mismo solo se mantiene la referencia  
     useEffect(() => {
         
        return () => {
            isMounted.current = false;
        }

     }, [])

     
     useEffect(() => {

        setState({data:null, loading:true, error:null})

        fetch(url)
            .then(resp => resp.json())
            .then(data => {
                
                if(isMounted.current){
                    setState({
                        loading: false,
                        error: null,
                        data
                    });
                }  
                    
            })
            .catch(() => {
                setState({
                    data: null,
                    loading: false,
                    error: 'No se pudo cargar la info'
                })
            })

     }, [url])

     return state;
}