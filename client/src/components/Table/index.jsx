//library
import React from 'react';
import { Table as TableAnt, Tag } from 'antd';
import {ButtonContainer} from "../Navbar/style";

//Style

//Images

function Table() {
    const columns = [
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
            render: text => <a>{text}</a>,
        },
        {
            title: 'Address',
            dataIndex: 'address',
            key: 'address',
        },
        {
            title: 'Price',
            key: 'price',
            dataIndex: 'price',
            render: tags => (
                <Tag color={'green'} key={tags}>
                    {tags}
                </Tag>
            ),
        },
        {
            title: 'Action',
            key: 'action',
            render: () => (
                <ButtonContainer>
                    Select
                </ButtonContainer>
            ),
        },
    ];

    const data = [
        {
            key: '1',
            name: 'Gadget city',
            address: 'New York No. 1 Lake Park',
            price: '123 434 т',
        },
        {
            key: '2',
            name: 'Play Seven',
            address: 'London No. 1 Lake Park',
            price: '323 344 т',
        },
        {
            key: '3',
            name: 'Ril Store',
            address: 'Sidney No. 1 Lake Park',
            price: '989 900 т',
        },
    ];
    return (
        <TableAnt columns={columns} dataSource={data} />
    );
}

export default Table;