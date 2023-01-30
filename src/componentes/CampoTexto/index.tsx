import './CampoTexto.css';

interface CampoTextoProps {
    aoAlterado: (valor: string) => void;
    placeholder: string;
    label: string;
    valor: string;
    obrigatorio?: boolean;
}

const CampoTexto = ({aoAlterado, label, obrigatorio = false, placeholder, valor}: CampoTextoProps) => {

    const aoDigitado = (evento : React.ChangeEvent<HTMLInputElement>) => {
        aoAlterado(evento.target.value);
    }

    return (
        <div className="campo-texto">
            <label>{label}</label>
            <input onChange={aoDigitado} required={obrigatorio} placeholder={placeholder}
                value={valor}/>
        </div>
    )
}

export default CampoTexto;