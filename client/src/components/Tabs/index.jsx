//library
import React from 'react';
import { Tabs as TabsAnt } from 'antd';
import Comment from "../Comment";
import Table from "../Table";

const { TabPane } = TabsAnt;


//Style

//Images

function Tabs() {

    function callback(key) {
        console.log(key);
    }

    return (
        <TabsAnt defaultActiveKey="1" onChange={callback}>
            <TabPane tab="Sellers" key="1">
                <Table/>
            </TabPane>
            <TabPane tab="Reviews" key="2">
                <Comment/>
            </TabPane>
            <TabPane tab="Characteristics" key="3">
                Content of Tab Pane 3
            </TabPane>
        </TabsAnt>
    );
}

export default Tabs;