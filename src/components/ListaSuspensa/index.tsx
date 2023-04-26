import './ListaSuspensa.css'

interface ListaSuspensaProps {
    label: string
    itens: string[]
    aoAlterado: (valor: string) => void
    obrigatorio?: boolean
    valor?: string
}

const ListaSuspensa = ({ aoAlterado, obrigatorio, itens, label, valor }: ListaSuspensaProps) => {
    return (
        <div className='lista-suspensa'>
            <label>{label}</label>
            <select onChange={evento => aoAlterado(evento.target.value)} required={obrigatorio} value={valor}>
                <option value=""></option>
                {itens.map(itens => {
                    return <option key={itens}>{itens}</option>
                })}
            </select>
        </div>
    )
}

export default ListaSuspensa