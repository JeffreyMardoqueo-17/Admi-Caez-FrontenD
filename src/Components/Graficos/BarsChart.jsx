
import React from 'react';
//esto se importa de recharts
import { Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'
//data para mostrar en el grafico
const data = [
    { mes: "Enero", totalMes: 10, pagado: 60 },
    { mes: 'Febrero', totalMes: 25, pagado: 70 },
    { mes: 'Marzo', totalMes: 80, pagado: 65 },
    { mes: 'Abril', totalMes: 35, pagado: 85 },
    { mes: 'Mayo', totalMes: 12, pagado: 48 },
    { mes: 'Junio', totalMes: 30, pagado: 69 },
    { mes: 'Julio', totalMes: 15, pagado: 120 },
    { mes: 'Agosto', totalMes: 15, pagado: 78 },
    { mes: 'Septiembre', totalMes: 15, pagado: 35 },
    { mes: 'Octubre', totalMes: 14, pagado: 78 },
    { mes: 'Noviembre', totalMes: 40, pagado: 12 },
    { mes: 'Diciembre', totalMes: 30, pagado: 45 },
]


const BarsChart = () => {
    return (
        <div>
            <ResponsiveContainer width="100%" aspect={2} fill="#fff">
                <BarChart
                    data={data}
                    width={500}
                    height={300}
                    margin={{
                        top: 5,
                        right: 30,
                        left: 20,
                        bottom: 5
                    }}
                >
                    <CartesianGrid strokeDasharray="4 1 2" />
                    <XAxis dataKey="mes" color="#fff" />
                    <YAxis />
                    <Tooltip />
                    <Legend fill='#fff' />
                    <Bar dataKey="totalMes" fill="#04041b" />
                    <Bar dataKey="pagado" fill="#4d51b3" />
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
}

export default BarsChart;
