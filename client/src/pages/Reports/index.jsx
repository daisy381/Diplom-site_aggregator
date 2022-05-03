//library
import React from 'react';

//components
import PieChart from "../../components/PieChart";
import LineChart from "../../components/LineChart";
import BarChart from "../../components/BarChart";


//Style
import {
    Cards,
    Card,
    BodyContainer
} from './style'
import {TitleContainer} from "../Products/style";
import {Divider} from "antd";

//Images

function Reports() {
    return (
        <BodyContainer>
            <TitleContainer>Analysis</TitleContainer>
            <Cards>
                <Card>
                    <PieChart/>
                </Card>
                <Card>
                    <LineChart/>
                </Card>
            </Cards>
            <Divider/>
            <BarChart/>
        </BodyContainer>
    );
}

export default Reports;