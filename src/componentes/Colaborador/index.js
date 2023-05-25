import './Colaborador.css'

const Colaborador = ({ nome, imagem, cargo, apelido, corDeFundo }) => {
    return (<div className='colaborador'>
        <div className='cabecalho' style={{ backgroundColor: corDeFundo }}>
            <img src={imagem} alt={nome}/>
        </div>
        <div className='rodape'>
            <h2>{nome}</h2>
            <h4>{apelido}</h4>
            <h5>{cargo}</h5>
        </div>
    </div>)
}

export default Colaborador