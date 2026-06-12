import type { MouseEventHandler } from "react";
import './Button.css';

function Button (buttonProps: {titulo: string, onClick: MouseEventHandler<HTMLButtonElement>, secundario : boolean }) {
    return (
    <button
          type="button"
          className={buttonProps.secundario ? "secundario": "counter"}
          onClick={buttonProps.onClick}
        >
          {buttonProps.titulo}
        </button>
    )
}

export default Button;