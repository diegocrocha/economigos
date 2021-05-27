import React from 'react'
import api from "../../services/api";
import { UserContext } from '../../hooks/UserContext'
import * as S from "./style";
import ItemTab from "../../components/ItemTab/ItemTab";
import BotaoAdicionar from "../../assets/botao-adicionar.svg";
import SetaProximo from "../../assets/seta-proximo.svg";
import Lancamento from "../../components/Lancamento/Lancamento";
import Cifrao from "../../assets/cifrao-fundo-redondo.svg";
import Alimentacao from "../../assets/alimentacao-fundo-redondo.svg";
import Download from "../../assets/download.svg";
import barChart from "../../assets/bar-chart.svg"
import GroupBarChart from '../../components/Charts/GroupBarChart'
import * as G from "../../styles/globalComponents";
import ItemListaCategoria from "../../components/ItemListaCategoria/ItemListaCategoria";
import GreyPig from "../../components/GreyPig/GreyPig";
import ContaC6 from '../../assets/tmp/conta-c6.svg'

export default function Contas() {

    const { dados } = React.useContext(UserContext);
    const [ativo, setAtivo] = React.useState(null);
    const [contas, setContas] = React.useState(null);
    const [detalheConta, setDetalheConta] = React.useState(null);
    const [listaOrdenada, setListaOrdenada] = React.useState([]);
    const [mesesAnterioresReceitas, setMesesAnterioresReceitas] = React.useState([]);
    const [mesesAnterioresGastos, setMesesAnterioresGastos] = React.useState([]);

    React.useEffect(() => {
        fetchContas();
    }, [dados]);

    React.useEffect(() => {
        if (contas != null) {
            setAtivo(contas[0].id)
        }
    }, [contas]);

    React.useEffect(() => {
        fetchData();
    }, [ativo]);

    React.useEffect(() => {
        ordenarLista();
        fetchDataDash();
    }, [detalheConta, ativo]);

    async function fetchContas() {
        if (dados) {
            const response = await api.get(`/economigos/contas?idUsuario=${dados.usuario.id}`);
            setContas(await response.data);
        }
    }

    async function fetchData() {
        if (ativo) {
            const response = await api.get(`/economigos/contas/${ativo}?idUsuario=${dados.usuario.id}`);
            setDetalheConta(response.data);
        }
    }

    async function fetchDataDash() {
        if (ativo) {
            const response = await api.get(`economigos/contas/${ativo}/ultimos-meses`);
            let gastos = []
            let receitas = []

            for (let j = response.data[0].valorMensalDtos.length - 1; j >= 0; j--) {
                gastos.push({
                    x: response.data[0].valorMensalDtos[j].mes,
                    y: response.data[0].valorMensalDtos[j].valor
                })
            }
            for (let j = response.data[1].valorMensalDtos.length - 1; j >= 0; j--) {
                receitas.push({
                    x: response.data[1].valorMensalDtos[j].mes,
                    y: response.data[1].valorMensalDtos[j].valor
                })
            }
            setMesesAnterioresReceitas(receitas);
            setMesesAnterioresGastos(gastos);
        }
    }

    function ordenarLista() {
        let listaOrdenada = [];

        if (detalheConta != null) {
            for (const renda in detalheConta.rendas) {
                listaOrdenada.push(detalheConta.rendas[Number(renda)]);
            }
            for (const gasto in detalheConta.gastos) {
                listaOrdenada.push(detalheConta.gastos[Number(gasto)]);
            }
        }
        setListaOrdenada(listaOrdenada);
    }

    return (
        <S.Contas className="animeRight">
            <G.GroupMenu>
                <G.ImgBtnAdicionar src={BotaoAdicionar} alt="" />
                <G.TabLayout id="TabLayout">
                    {contas && contas.map(conta => (
                        <ItemTab imgItem={ContaC6} setAtivo={setAtivo} active={ativo} key={conta.id} idItemTab={conta.id} nome={conta.apelido} />
                    ))}
                </G.TabLayout>
                <G.ImgBtnProximo src={SetaProximo} alt="" />
            </G.GroupMenu>

            <S.InfoItemSelected>
                <S.GroupInfosContaCartao>
                    <p>Saldo da Conta</p>
                    <div style={{ color: "#32A287" }}>R$<span>{detalheConta ? detalheConta.valorAtual.toLocaleString('pt-br', { minimumFractionDigits: 2 }) : "0,00"}</span></div>
                </S.GroupInfosContaCartao>
                <S.GroupInfosContaCartao>
                    <p>Gasto da Conta</p>
                    <div style={{ color: "#A23232" }}>R$<span>{detalheConta ? detalheConta.totalGastos.toLocaleString('pt-br', { minimumFractionDigits: 2 }) : "0,00"}</span></div>
                </S.GroupInfosContaCartao>
            </S.InfoItemSelected>

            <S.UltimasAtividades>
                <div className="Titulo">
                    <p>Últimas Atividades</p>
                </div>

                {detalheConta == null || listaOrdenada.length == 0 ?
                    (
                        <S.GroupAtividades style={{ overflowY: "none" }}>
                            <GreyPig mensagem="Você não tem atividades!"/>
                        </S.GroupAtividades>
                    )
                    :
                    (
                        <>
                            <S.GroupAtividades style={{ overflowY: "scroll" }}>
                                {listaOrdenada.map(itemList => (
                                    itemList.recebido ?
                                        <Lancamento key={itemList.id} urlImage={Cifrao} titulo={itemList.descricao !== "" ? itemList.descricao : "Receita"} data="20/10/20" valor={itemList.valor.toLocaleString('pt-br', { minimumFractionDigits: 2 })} receita />
                                        :
                                        <Lancamento key={itemList.id} urlImage={Alimentacao} titulo={itemList.descricao !== "" ? itemList.descricao : itemList.categoria} data="20/10/20" valor={itemList.valor.toLocaleString('pt-br', { minimumFractionDigits: 2 })} />
                                ))}
                            </S.GroupAtividades>
                            <div className="DownloadUltimasAtividades">
                                <div>
                                    Download Histórico
                                    <img src={Download} alt="" />
                                </div>
                            </div>
                        </>
                    )
                }
            </S.UltimasAtividades>

            <S.BalancoMensalContas>
                <div className="tituloBalanco">
                    <img src={barChart} alt="" />
                    <span className="titleChart">Balanço Mensal</span>
                </div>
                {detalheConta == null || listaOrdenada.length == 0 ?
                    (
                        <>
                            <S.GroupAtividades style={{ overflowY: "none" }}>
                                <GreyPig mensagem="Você não tem lançamentos!"/>
                            </S.GroupAtividades>
                        </>
                    )
                    :
                    (<>
                        <div className="chartBalanco" >
                            <GroupBarChart
                                dataReceitas={mesesAnterioresReceitas}
                                dataGastos={mesesAnterioresGastos}
                            />
                        </div>
                        <div className="chartDescription">
                            <ItemListaCategoria nome="Receitas" cor="#32A287" />
                            <ItemListaCategoria nome="Gastos" cor="#A23232" />
                        </div>
                    </>)
                }
            </S.BalancoMensalContas>
        </S.Contas>

    )
}
