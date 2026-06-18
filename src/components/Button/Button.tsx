import { useContext, type MouseEventHandler } from "react";
import './Button.css';
import { CurrencyContext } from "../../App";

function Button (buttonProps: {titulo: string, onClick: MouseEventHandler<HTMLButtonElement>, secundario : boolean }) {
  const { currency } = useContext(CurrencyContext)
  console.log (currency)

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