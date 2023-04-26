import './CampoTexto.css'

interface CampoTextoProps {
    label: string
    valor: string
    aoAlterado: (valor: string) => void
    obrigatorio?: boolean
    placeholder?: string
}

const CampoTexto = ({ aoAlterado, label, valor, placeholder, obrigatorio = false }: CampoTextoProps) => {

    const placeholderModificada = `${placeholder}...`

    const aoDigitado = (evento: React.ChangeEvent<HTMLInputElement>) => {
        aoAlterado(evento.target.value)
    }

    return (
        <div className="campo-texto">
            <label>
                {label}
            </label>
            <input
                value={valor}
                onChange={aoDigitado}
                required={obrigatorio}
                placeholder={placeholderModificada} />
        </div>
    )
}

export default CampoTexto