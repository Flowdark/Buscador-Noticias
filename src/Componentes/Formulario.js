import React from 'react';
import styles from "./Formulario.module.css";
import useSelect from "../Hooks/useSelect";
import PropTypes from "prop-types";

const Formulario = ({ guardarCategoria }) => {

    //Utilizar Custom Hook
    const OPCIONES = [
        {value: "general", label: "GENERAL"},
        {value: "business", label: "Negocios"},
        {value: "entertaiment", label: "Entretenimiento"},
        {value: "health", label: "Salud"},
        {value: "science", label: "Ciencia"},
        {value: "sports", label: "Deportes"},
        {value: "technology", label: "Tecnologia"},
    ]

    //Utilizar Custom Hook
    const [ categoria, SelectNoticias ] = useSelect("general", OPCIONES)

    //Buscar Noticias
    const buscarNoticias = e => {
        e.preventDefault();

        guardarCategoria(categoria);
    }

    return ( 
        <div className={`${styles.buscador} row`}>
            <div className="col s12 m8 offset-m2">
                <form
                    onSubmit={buscarNoticias}
                >
                    <h2 className={styles.heading}>Encuentra Noticias por Categoria</h2>
                    <SelectNoticias />
                    <div className="input-field col s12">
                        <input 
                            type="submit"
                            className={`btn-large amber darken-2 ${styles.btn_block}`}
                            value="Buscar"
                        />
                    </div>
                </form>
            </div>
        </div>
     );
}

Formulario.propTypes = {
    guardarCategoria: PropTypes.func.isRequired
}
 
export default Formulario;