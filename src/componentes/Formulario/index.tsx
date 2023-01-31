import './Formulario.css';
import CampoTexto from '../CampoTexto';
import ListaSuspensa from '../ListaSuspensa';
import Botao from '../Botao';
import { useState } from 'react';
import { IColaborador } from '../../compartilhado/interfaces/IColaborador';
import {v4 as uuidv4} from 'uuid';

interface FormularioProps {
    aoColaboradorCadastrado: (colaborador: IColaborador) => void;
    aoCriarTime: (nome: string, cor: string) => void;
    times: string[];
}

const Formulario = (props : FormularioProps) => {

    const [nome, setNome] = useState('');
    const [cargo, setCargo] = useState('');
    const [imagem, setImagem] = useState('');
    const [time, setTime] = useState('');
    const [data, setData] = useState('');
    const [nomeTime, setNomeTime] = useState('');
    const [corTime, setCorTime] = useState('');

    const aoSalvar = (evento: React.FormEvent<HTMLFormElement>) => {
        evento.preventDefault();
        props.aoColaboradorCadastrado ({
            id: uuidv4(),
            nome,
            cargo,
            imagem,
            time,
            data,
            favorito: false
        })  
        setNome('');
        setCargo('');
        setImagem('');
        setTime('');
    }

    const aoSubmeter = (evento : React.FormEvent<HTMLFormElement>) => {
        evento.preventDefault();
        props.aoCriarTime(nomeTime, corTime);
    }

    return (
        <section className='formulario'>
            <form onSubmit={aoSalvar}>
                <h2>Preencha os dados para criar o card do colaborador:</h2>
                <CampoTexto obrigatorio={true} label="Nome" placeholder="Digite seu nome" valor={nome} aoAlterado={valor => setNome(valor)}/>
                <CampoTexto obrigatorio={true} label="Cargo" placeholder="Digite seu cargo" valor={cargo} aoAlterado={valor => setCargo(valor)}/>
                <CampoTexto label="Imagem" placeholder="Digite o endereço da imagem" valor={imagem} aoAlterado={valor => setImagem(valor)}/>
                <CampoTexto label='Data de entrada no time' placeholder='' valor={data} aoAlterado={valor => setData(valor)} tipo='date' />
                <ListaSuspensa obrigatorio={true} itens={props.times} label="Time" valor={time} aoAlterado={valor => setTime(valor)}/>
                <Botao>Criar Card</Botao>
            </form>
            <form onSubmit={aoSubmeter}>
                <h2>Preencha os dados para criar um novo time:</h2>
                <CampoTexto obrigatorio label="Nome" placeholder="Digite o nome do time" valor={nomeTime} aoAlterado={valor => setNomeTime(valor)}/>
                <CampoTexto obrigatorio label="Cor" placeholder="Digite a cor do time" valor={corTime} aoAlterado={valor => setCorTime(valor)} tipo='color'/>
                <Botao>Criar um novo time</Botao>
            </form>
        </section>
    )
}

export default Formulario;