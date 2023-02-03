import React from "react";
import NavBar from "../NavBar/NavBar";
import "./home.css";

export default function Home() {
  return (
    <div className="divContainerHome">
      <NavBar />
      <div className="divhome">
        <h1 className="titlehome">
          AHORA TENÉS LA POSIBILIDAD DE TENER AGUA DE MAR EN TU CASA
        </h1>
        <br />
        <p className="phome">
          BIENDEMAR Agua de Mar es una fuente natural de vitaminas, minerales,
          oligoelementos, ácidos nucleicos, aminoácidos esenciales, proteínas,
          grasas e hidratos de carbono.
          <br />
          <br />
          Todo en su forma orgánica y biodisponible.
        </p>
      </div>
      <div className="divcolumns">
        <div className="divshomeinfo">
          <h1 className="titleshome">EXTRACCIÓN</h1>
          <p>
            En BIENDEMAR, extraemos el agua de la costa Atlántica en mar
            abierto, entre la primera y tercera milla náutica donde sabemos que
            el agua es de calidad, lejos de afluentes y sin la influencia de
            aguas continentales.
            <br />
            <br />
            Además de elegir cuidadosamente el lugar de extracción, también
            tenemos en cuenta el momento de realizarla para que las condiciones
            del agua sean las óptimas en cuanto a salinidad y turbidez.
          </p>
        </div>
        <div className="divshomeinfo">
          <h1 className="titleshome">PROCESO</h1>
          <p>
            BIENDEMAR Agua de mar es envasada tras un proceso de decantación de,
            por lo menos 3 días, que elimina las partículas sólidas en
            suspensión, como algas y arena.
            <br />
            <br />
            Luego, se realiza un segundo filtrado a fin de garantizar su máxima
            pureza.
            <br />
            <br />
            Finalmente, se procede al envasado del producto.
          </p>
        </div>
        <div className="divshomeinfo">
          <h1 className="titleshome">FORMATO</h1>
          <p>
            BIENDEMAR Natural está disponibles en envases de PET en los
            siguientes formatos:
            <br />
            <br />
            - 1 litro.
            <br />
            <br />
            - 5 litros.
            <br />
            <br />- 10 litros.
          </p>
        </div>
      </div>
    </div>
  );
}
