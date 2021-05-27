import React from 'react'
import * as S from './style'
import api from "../../services/api";
import { UserContext } from '../../hooks/UserContext'
import BotaoMenuMetas from "../../components/BotaoMenuMetas/BotaoMenuMetas";
import BotaoAdicionar from "../../assets/botao-adicionar.svg";
import Aviao from "../../assets/aviao.svg";
import CardMetas from "../../components/CardMetas/CardMetas";
import GreyPig from "../../components/GreyPig/GreyPig";

export default function Metas() {
    const { dados } = React.useContext(UserContext);
    const [metas, setMetas] = React.useState([]);

    React.useEffect(() => {
        fetchMetas();
    }, [dados]);

    async function fetchMetas() {
        if (dados) {
            const response = await api.get(`/economigos/usuarios/${dados.usuario.id}`);
            setMetas(await response.data.metaDtos);
        }
    }

    return (
        <S.Metas className="animeRight">
            <S.NavMetas>
                <BotaoMenuMetas nome="Metas Ativas" active />
                <BotaoMenuMetas nome="Metas Inativas" />
                <BotaoMenuMetas nome="Metas Finalizadas" />
            </S.NavMetas>
            <S.AdicionarMeta>
                <img src={BotaoAdicionar} alt="" />
            </S.AdicionarMeta>
            {
                metas.length == 0 ?
                    <GreyPig height="50" mensagem="Esta conta não possui metas!"/>
                    :
                    <S.Cards style={metas.length > 2 ? { overflowY: "scroll" } : { overflowY: "hidden" }}>
                        {
                            metas.map(itemMeta => (
                                <CardMetas nome={itemMeta.nome} urlImage={Aviao} valorFinal={itemMeta.valorFinal} valorInicial={itemMeta.valorAtual} />
                            ))
                        }
                    </S.Cards>
            }
        </S.Metas>
    )
}
