import './Colaborador.css';
import {AiFillCloseCircle, AiFillHeart, AiOutlineHeart} from 'react-icons/ai';

interface ColaboradorProps {
    id: string;
    nome: string;
    imagem: string;
    cargo: string;
    corDeFundo: string;
    data: string;
    aoDeletar: (id: string) => void;
    favorito: boolean;
    aoFavoritar: (id: string) => void;
}

const Colaborador = ({id, nome, imagem, cargo, corDeFundo, data, aoDeletar, favorito, aoFavoritar} : ColaboradorProps) => {

    function favoritar() {
        aoFavoritar(id);
    }

    return (
        <div className='colaborador'>
            <AiFillCloseCircle size={25} className='deletar' onClick={() => aoDeletar(id)}/>
            <div className='cabecalho' style={{backgroundColor: corDeFundo}}>
                <img src={imagem} alt={nome}/>
            </div>
            <div className='rodape'>
                <h4>{nome}</h4>
                <h5>{cargo}</h5>
                <h5>{new Date(data).toLocaleDateString()}</h5>
                <div className='favoritar'>
                    {favorito 
                        ? <AiFillHeart size={25} color='red' onClick={favoritar}/> 
                        : <AiOutlineHeart size={25} onClick={favoritar}/> }
                </div>
            </div>
        </div>
    )
}

export default Colaborador;