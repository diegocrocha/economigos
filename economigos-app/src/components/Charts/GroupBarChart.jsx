import React from 'react'
import { VictoryBar, VictoryChart, VictoryGroup, VictoryTooltip, VictoryAxis, VictoryTheme } from 'victory';

export default function GroupBarChart({dataReceitas, dataGastos}) {
    
    let fontSizeLabelY = dataReceitas.length == 3 ? 35 : 30;

    return (
        <VictoryChart 
            domainPadding={{ x: [300, 50], y: [100, 0] }}
            animate={{
                duration: 600,
                onLoad: { duration: 500 }
              }}
            labelComponent={<VictoryTooltip />}
            width={dataReceitas.length == 3 ? 600 : 900}
            // height={dataReceitas.length == 3 ? 400 : 800}
        >
            <VictoryAxis
                key="x-axis"
                style={{
                    tickLabels: {
                        fontSize: 30,
                        fontFamily: "Poppins",
                        fontWeight: "bold",
                        fill: "#4d4d4d"
                    }
                }}
                theme={VictoryTheme.material} />
            <VictoryAxis
                tickFormat={(t) => `${Math.round(t >= 1000 ? t / 1000 + "k" : t)}`}
                dependentAxis
                orientation="left"
                style={{
                    tickLabels: {
                        fontSize: fontSizeLabelY,
                        fontFamily: "Poppins",
                        fontWeight: "bold",
                        fill: "#4d4d4d"
                    }
                }}/>
            <VictoryGroup offset={12}>
                <VictoryBar
                    cornerRadius={{ topLeft: 20, topRight: 20 }}
                    alignment="end"
                    style={{ data: { fill: "rgb(50, 162, 135)", width: 35 } }}
                    data={dataReceitas} />
                <VictoryBar
                    cornerRadius={{ topLeft: 20, topRight: 20 }}
                    alignment="start"
                    style={{ data: { fill: "#A23232", width: 35 } }}
                    data={dataGastos} />
            </VictoryGroup>

        </VictoryChart>
    )
}
