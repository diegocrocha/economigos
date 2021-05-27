import React from 'react'
import * as G from '../../styles/globalComponents'
import BotaoAdicionar from "../../assets/botao-adicionar.svg";
import ItemTab from '../../components/ItemTab/ItemTab';
import SetaProximo from "../../assets/seta-proximo.svg";
import * as S from './style'
import { UserContext } from '../../hooks/UserContext';
import api from '../../services/api';
import pt from 'date-fns/locale/pt-BR';
import { 
    parseISO, 
    format,
} from 'date-fns';
import ItemUltimasAtividades from '../../components/ItemUltimasAtividades/ItemUltimasAtividades';
import GreyPig from '../../components/GreyPig/GreyPig';
import CartaoColorido from '../../components/LogosSVGComponentes/CartaoColorido/CartaoColorido';


export default function Cartoes() {
    const { dados } = React.useContext(UserContext)
    const [ativo, setAtivo] = React.useState(null)
    const [cartoes, setCartoes] = React.useState(null)
    const [detalheCartao, setDetalheCartao] = React.useState(null);
    let counts = 0;

    React.useEffect(() => {
        fetchCartoes()
    }, [dados])

    React.useEffect(() => {
        if (cartoes != null) {
            setAtivo(cartoes[0].id)
        }
    }, [cartoes]);

    React.useEffect(() => {
        fetchData();
    }, [ativo]);

    async function fetchCartoes() {
        if (dados) {
            const response = await api.get(`/economigos/usuarios/${dados.usuario.id}`);
            setCartoes(await response.data.cartaoDtos);
        }
    }

    async function fetchData() {
        if (ativo) {
            const response = await api.get(`/economigos/cartoes/${ativo}`);
            setDetalheCartao(response.data);
        }
    }

    function formatData(data) {
        return  format(
            parseISO(data), 
            "dd 'de' MMMM 'de' yyyy",
            { locale: pt }
          );
    }

    return (
        <S.CartoesWrapper className="animeRight">
            <G.GroupMenu style={{height: "23%"}}>
                <G.ImgBtnAdicionar src={BotaoAdicionar} alt="" />
                <G.TabLayout id="TabLayout">
                {cartoes && cartoes.map(cartao => (
                        <ItemTab setAtivo={setAtivo} active={ativo} key={cartao.id} idItemTab={cartao.id} nome={cartao.nome} />
                    ))}
                </G.TabLayout>
                <G.ImgBtnProximo src={SetaProximo} alt="" />
            </G.GroupMenu>
            <S.InfoCartao>
                <G.GroupInfosContaCartao>
                    <p>Limite do Cartão</p>
                    {detalheCartao ? 
                        <div style={{color:"#32A287"}}>R$<span>{detalheCartao.limite.toLocaleString('pt-br', { minimumFractionDigits: 2 })}</span></div>
                        :
                        <div>---------</div>
                    }
                </G.GroupInfosContaCartao>
                <G.GroupInfosContaCartao>
                    <p>Fatura Atual</p>
                    {detalheCartao ? 
                        <div style={{color:"#A23232"}}>R$<span>{detalheCartao.valor.toLocaleString('pt-br', { minimumFractionDigits: 2 })}</span></div>
                        :
                        <div>---------</div>
                    }
                </G.GroupInfosContaCartao>
            </S.InfoCartao>
            <S.DetalhesCartao>
                <div>
                    <p>Vencimento da Fatura</p>
                    {detalheCartao ? 
                        <p>{formatData(detalheCartao.vencimento)}</p>
                        :
                        <p>---------</p>
                    }
                    
                </div>
                <div>
                    <p>Status do mês</p>
                    {detalheCartao ? 
                        <p style={detalheCartao.pago ? {color:"#32A287"} : {color:"#A23232"}}>{detalheCartao.pago ? "Pago" : "Não Pago"}</p>
                        :
                        <p>---------</p>
                    }
                    
                </div>
                <div>
                    <p>Fechamento da fatura</p>
                    {detalheCartao ? 
                        <p>{formatData(detalheCartao.fechamento)}</p>
                        :
                        <p>---------</p>
                    }
                </div>
            </S.DetalhesCartao>
            
            <S.UltimasAtividades>
                <p className="titulo">Últimas Atividades</p>

                <div style={detalheCartao && detalheCartao.gastos.lenght > 4 ? {overflow: "hidden scroll"} : {overflow: "hidden"}} className="conjuntoItensUltimasAtividades">
                    {
                        detalheCartao ?
                        detalheCartao.gastos.map(gasto => (  
                            counts++ % 2 == 0 ?
                            <ItemUltimasAtividades data={gasto.dataPagamento} descricao={gasto.descricao} categoria={gasto.categoria}/>
                            :
                            <ItemUltimasAtividades data={gasto.dataPagamento} descricao={gasto.descricao} categoria={gasto.categoria} BackGrey/>
                        ))
                        :
                        <GreyPig mensagem="Você não tem Atividades"/>
                    }
                </div>
            </S.UltimasAtividades>
        </S.CartoesWrapper>
    )
}
