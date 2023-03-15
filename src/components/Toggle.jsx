import React from 'react'
import {ThemeContext} from "../App"
import {  useContext } from "react";

const themes = {
    light: {
      color: "#000000",
    },
    dark: {
      color: "aqua",
      background: "#222222"
    }
  };

const Toggle = ({hello}) => {
    const theme = useContext(ThemeContext);
  return (
    <div style={theme?themes.light:themes.dark}>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio recusandae aperiam tempora quo repellendus praesentium officia, a eius expedita, quos excepturi eos repellat fugit, debitis voluptatem animi. Consequuntur, mollitia vel.
        Soluta modi dolorum quasi itaque eligendi eius perspiciatis sapiente perferendis totam corrupti incidunt dolores dolore commodi alias consectetur sit, vitae illum sint. Ipsam vitae nihil neque dignissimos ab eligendi corporis.
        Dicta quisquam, saepe, natus libero consequuntur aperiam tenetur, dolorum veniam quo officiis modi. Enim rerum unde fugiat reprehenderit et hic harum deserunt magnam cum blanditiis aspernatur, temporibus est incidunt voluptatibus.</p>
    </div>
  )
}

export default Toggle