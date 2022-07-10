import { useState } from "react";
import Formulario from "./Formulario";
import PintarPersonajes from "./PintarPersonajes";

const Home = () => {
    const [nombre, setNombre] = useState("");

    return (
        <div className="container">
            <h1>HOME</h1>
            <Formulario setNombre={setNombre} />
            <button
                className="btn btn-success mt-2"
                onClick={() => setNombre("")}
            >
                Reiniciar
            </button>
            <PintarPersonajes nombre={nombre} />
        </div>
    );
};

export default Home;