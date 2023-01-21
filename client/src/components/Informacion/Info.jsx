import React from "react";
import NavBar from "../NavBar/NavBar";
import "./info.css";

export default function Info() {
  return (
    <>
      <div className="divcontainerInfo">
        <NavBar />
        <div className="divInfo">
          <h1 className="titleInfo">Composición:</h1>
          <p className="textInfo">
            Las sales que componen el agua de mar están constituidas por: sodio,
            potasio, calcio, flúor, hierro, iodo, fósforo, cloro, magnesio,
            bromo, estroncio, boro, manganeso, cobre, silicio…
            <br />
            <br />
            Presenta alrededor de 100 elementos biodisponibles de los 118
            elementos de la tabla periódica. La presencia de estos elementos
            hace del agua de mar un excelente recurso para suplir el déficit
            mineral o complementar su aporte a la alimentación habitual.
            <br />
            <br />
            El conocimiento de la terapia con agua de mar se lo debemos al
            científico francés René Quinton (1867-1925), que demostró la
            similitud de la composición del plasma sanguíneo con la del agua de
            mar. Quinton diluyó el agua marina para rebajar la concentración de
            sales y acercarla a la de la sangre, consiguió un plasma marino con
            el que curó a miles de personas, en una época en la que no había
            antibióticos.
          </p>
          <br />
          <h1 className="titleInfo">Beneficios para nuestra salud:</h1>
          <ul className="listInfo">
            <li>
              Proporciona al organismo minerales y oligoelementos indispensables
              para su buen funcionamiento.
            </li>
            <li>
              Alivia los síntomas de la rinitis, sinusitis y otras enfermedades
              respiratorias.
            </li>
            <li>Mucolítico, disuelve las mucosidades e hidrata las mucosas.</li>
            <li>Mucolítico, disuelve las mucosidades e hidrata las mucosas.</li>
            <li>Acelera la cicatrización de las heridas.</li>
            <li>
              Su contenido en magnesio contribuye a reducir el estrés y la
              ansiedad.
            </li>
            <li>Reduce la fatiga y acelera la recuperación muscular.</li>
            <li>
              Se puede utilizar como colutorio, desinfectante y cicatrizante
              para infecciones de boca. Tratamiento de gingivitis.
            </li>
            <li>
              Es un laxante natural, estimula los movimientos peristálticos y el
              vaciado intestinal.
            </li>
            <li>
              Mejora el sabor de los alimentos, al cocinar con agua de mar en
              lugar de sal.
            </li>
            <li>Antioxidante, enlentece el envejecimiento celular.</li>
            <li>
              Recomendada para quienes practican ayuno intermitente, pues al
              realizarlo se pierden sales y es importante recuperarlas para
              evitar cansancio, calambres, dolores de cabeza, etc.
            </li>
            <li>Alcalinizante de nuestro medio interno.</li>
          </ul>
          <br />
          <h1 className="titleInfo">Como se obtiene:</h1>
          <p className="textInfo">
            Se obtiene de la profundidad, en mar adentro y luego se decanta y se
            filtra para que sea una bebida apta para su consumo.
          </p>
          <br />
          <h1 className="titleInfo">Como consumirla:</h1>
          <p className="textInfo">
            Se puede consumir diluída (solución isótónica) manteniendo una
            relación de tres partes de agua dulce con una parte de agua de mar.
            Beber sola o mezclada con jugos. Comenzar de a poco para que el
            organismo se acostumbre (unos 30 ml el primer día e ir aumentando
            hasta alcanzar 1 vaso diario. Dosis máxima 500 ml diarios.) También
            como sustituto de la sal en las preparaciones (agregarla al agua de
            cocción en lugar de sal común) Se puede también consumirla como
            solución hipertónica. Aquí podemos encontrar su efecto laxante.
          </p>
          <br />
          <h1 className="titleInfo">Lecturas recomendadas: </h1>
          {/* <p className="textInfo"> */}
          <ul className="listInfo">
            <li>La mejor sal, agua de mar de Mariano Arnal.</li>
            <li>Agua de mar, nutrición orgánica de Angel Gracia Quinton.</li>
            <li>La cura del agua de mar de Jean Claude Secondé.</li>
            <li>Como cura el agua de mar de Cecilia Nova.</li>
            <li>El agua de mar Dra Maria Alejandra Rodriguez Zia.</li>
            <li>
              Como beneficiarse del agua de mar Dr. Héctor Bustos Serrano.
            </li>
          </ul>
          {/* La mejor sal, agua de mar de Mariano Arnal.
            <br />
            Agua de mar, nutrición orgánica de Angel Gracia Quinton,
            <br />
            La cura del agua de mar de Jean Claude Secondé.
            <br />
            Como cura el agua de mar de Cecilia Nova.
            <br />
            El agua de mar Dra Maria Alejandra Rodriguez Zia
            <br />
            Como beneficiarse del agua de mar Dr. Héctor Bustos Serrano
          </p> */}
        </div>
      </div>
    </>
  );
}
