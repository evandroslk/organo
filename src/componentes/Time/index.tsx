import { IColaborador } from '../../compartilhado/interfaces/IColaborador';
import Colaborador from '../Colaborador';
import hexToRgba from 'hex-to-rgba';
import './Time.css';

interface TimeProps {
    id: string;
    nome: string;
    cor: string;
    colaboradores: IColaborador[];
    aoDeletar: (id: string) => void;
    mudarCor: (cor : string, nome: string) => void;
    aoFavoritar: (id: string) => void;
}

const Time = (props: TimeProps) => {

    const css = {backgroundColor : hexToRgba(props.cor, '0.6')}

    return (
        props.colaboradores.length > 0 ?
        <section className='time' style={css}>
            <input value={props.cor} type='color' className='input-cor' onChange={evento => props.mudarCor(evento.target.value, props.id)}/>
            <h3 style={{borderColor: props.cor}}>{props.nome}</h3>
            <div className='colaboradores'>
                {props.colaboradores.map(colaborador => {
                    return <Colaborador id={colaborador.id} corDeFundo={props.cor} nome={colaborador.nome} cargo={colaborador.cargo}
                        imagem={colaborador.imagem} key={colaborador.id} data={colaborador.data} aoDeletar={props.aoDeletar} favorito={colaborador.favorito}
                        aoFavoritar={props.aoFavoritar} />;
                })}
            </div>
        </section>
        : <></>
    )
}

export default Time;