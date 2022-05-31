import { Table as TableAnt} from 'antd';

export const Table = () => {

    const columns = [
        {
            title: 'City',
            dataIndex: 'city',
            key: 'city',
        },
        {
            title: 'Sales',
            dataIndex: 'sales',
            key: 'sales',
        },
        {
            title: 'Address',
            dataIndex: 'address',
            key: 'address',
        }
    ];

    const data = [
        {
            key: '1',
            city: 'Almaty',
            sales: 32,
            address: 'New York No. 1 Lake Park',
        },
        {
            key: '2',
            city: 'Astana',
            sales: 42,
            address: 'London No. 1 Lake Park',
        },
        {
            key: '3',
            city: 'Karaganda',
            sales: 32,
            address: 'Sidney No. 1 Lake Park',
        },
        {
            key: '4',
            city: 'Shymkent',
            sales: 32,
            address: 'Sidney No. 1 Lake Park',
        },
    ];

    return (<TableAnt columns={columns} dataSource={data} />)

}