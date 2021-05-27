import React from 'react'
import { VictoryPie } from 'victory';

export default function GroupPieChart({ maior, meio, menor }) {
    return (
        <VictoryPie
            innerRadius={({ datum }) => datum.y + 70}
            cornerRadius = {14}
            colorScale={["#32A287", "#23705E", "#133D33" ]}
            data={[
                // dataCategorias.map(dado => (
                //     { x: dado.key, y: dado.value }
                // ))
                { x: maior.nome, y: maior.porcentagem },
                { x: meio.nome, y: meio.porcentagem },
                { x: menor.nome, y: menor.porcentagem }
            ]}
            style={{
                labels: {
                    display: "none"   
                }
            }}
        />
    )
}
