import React, {createContext, useState,useEffect} from 'react';
import firebase from '../Settings/ConfigFirebase';

export const AlumnosContext = createContext();


const AlumnosProvider = (props)=>{
    const [ropa, setRopa] = useState({
        id:"",
        genero:"",
        temporada:"",
        talla:"",
        descripcion:""
    })

    const [lista, setLista]= useState([]);
    const [listaSelected, setListaSelected]= useState([]);

    useEffect(()=>{
        firebase.database().ref('Ropa').on('value', snapshot=>{
            let ropaLista=[];
            snapshot.forEach(row=>{
                ropaLista.push({
                    id:row.key,
                    genero:row.val().genero,
                    temporada:row.val().temporada,
                    talla:row.val().talla,
                    descripcion:row.val().descripcion
                })
            })
            setLista(ropaLista)
        })
    },[])




    const eliminar =(id)=>{
        firebase.database().ref('Ropa/'+id).set(null).then(()=>{
            alert("Eliminado")
        })

        const temporal = lista.filter((item)=>{
            return item.id!== id;
        })
        setLista(temporal)
    }

    const addSelect=(t)=>{
        const temporal = lista.filter((selected)=>{
            return selected.temporada=== t;
        })
        setListaSelected(temporal)
    }
    return(
        <AlumnosContext.Provider
            value={{
                ropa,
                lista,
                setRopa,
                setLista,
                eliminar,
                setListaSelected,
                listaSelected,
                addSelect
            }}
        >
            {props.children}

        </AlumnosContext.Provider>
    )
}

export default AlumnosProvider;