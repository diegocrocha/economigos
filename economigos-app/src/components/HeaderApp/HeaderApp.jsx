import React from 'react'
import Logo from '../../assets/logo-escuro.svg'
import Perfil from '../../components/LogosSVGComponentes/PerfilIcon/Perfil'
import Notificacoes from '../../components/LogosSVGComponentes/NotificationIcon/Notification'
import SearchPrincipal from '../../components/SearchPrincipal/SearchPrincipal';
import * as S from "./style";

export default function HeaderApp() {
    return (
        <S.HeaderApp>
            <S.AlinhamentoLogo>
                <S.HeaderAppImage src={Logo}/>
            </S.AlinhamentoLogo>
            <S.AlinhamentoSearch>
                <SearchPrincipal/>
            </S.AlinhamentoSearch>
            <S.AlinhamentoIcones>
                <Notificacoes/>
                <Perfil/>
            </S.AlinhamentoIcones>
        </S.HeaderApp>
    )
}
