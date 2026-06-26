import { useRef, useState } from "react";
import "./Events.css";

function Events() {
    const [lastKey, setLastKey] = useState<string | null>(null);
    const [focused, setFocused] = useState(false);
    const [hovered, setHovered] = useState(false);
    const [submitted, setSubmitted] = useState<string | null>(null);
    const [nameForm, setNameForm] = useState("");
    const [color, setColor] = useState("");
    const [agreed, setAgreed] = useState(false);
    const [size, setSize] = useState("m");
    const inputRef = useRef<HTMLInputElement | null>(null);

    function handleSubmit(e: React.FormEvent<HTMLFontElement>) {
        e.preventDefault();
        setSubmitted(`El nombre es ${nameForm}`);
        setNameForm("");
    }

    return (
        <>
            <section className="events-section">
                <h2>onKeyDown</h2>
                <input className="ev-input" type="text" placeholder="Presionar cualquier tecla..."
                    onKeyDown={(e) => setLastKey(e.key)} />
                {lastKey && (<p> Ultima tecla: <kbd>{lastKey}</kbd></p>)}
            </section>

            <section className="events-section">
                <h2>onFocus / onBlur</h2>
                <input
                    className={`ev-input ${focused} ? "ev-input--focused" : ""`}
                    type="text"
                    placeholder="Presionar cualquier tecla..."
                    onFocus={() => setFocused(true)}
                    onBlur={() => setFocused(false)} />

            </section>

            <section className="events-section">
                <h2>onMouseEnter / onMouseLeave</h2>
                <p>Reacciona al movimiento del mouse sobre un elemento</p>
                <div className="events-section__demo">
                    <div
                        className={`ev-hover-box ${hovered} ? "ev-hover-box--active" : ""`}
                        onMouseEnter={() => setHovered(true)}
                        onMouseLeave={() => setHovered(false)}
                    >
                        {hovered ? "Mouse encima!" : "Pasa el mouse por aquí"}
                    </div>
                </div>

            </section>

            <section className="events-section">
                <h2>onSubmit - Formulario</h2>

                <form onSubmit={handleSubmit}>
                    <input className="ev-input" type="text" placeholder="Escribe tu nombre"
                        value={nameForm}
                        onChange={(e) => setNameForm(e.target.value)} />
                    <button type="submit"> Enviar</button>

                </form>
                {submitted && <p>Formulario enviado {submitted} </p>}

            </section>

            <section className="events-section">
                <h2>Select / Checkbox / Radio</h2>

                <label>
                    Color Favorito
                    <select value={color} onChange={(e) => setColor(e.target.value)}>
                        <option value="rojo"> Rojo</option>
                        <option value="verde"> Verde</option>
                        <option value="azul"> Azul</option>
                    </select>
                </label>
                <label>
                    <input type="checkbox" checked={agreed} onChange={(e) => setAgreed(e.target.checked)} />
                </label>
                <label>
                    {(["s", "m", "l"] as const).map((talla) => (
                        <label>
                            <input type="radio"
                                name="size"
                                value={talla}
                                checked={size === talla}
                                onChange={(e) => setSize(e.target.value)} />
                            {talla.toUpperCase()}
                        </label>
                    ))}

                </label>
                <p>Color: {color}</p>
                <p>Aceptó terminos: {agreed ? "Si" : "No"}</p>
                <p>La talla de la camisa es {size.toUpperCase()}</p>


            </section>

              <section className="events-section">
                <h2>useRef</h2>
                <input className="ev-input" ref={inputRef} type="text" placeholder="Seré enfocado"/>

                <button onClick={()=> inputRef.current?.focus()}> Enfocar input </button>
            </section>
        </>
    )
}

export default Events;