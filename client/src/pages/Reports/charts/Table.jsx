import { Table as TableAnt} from 'antd';

export const Table = ({sales}) => {

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
            sales: sales?.almaty,
            address: 'New York No. 1 Lake Park',
        },
        {
            key: '2',
            city: 'Astana',
            sales: sales?.astana,
            address: 'London No. 1 Lake Park',
        },
        {
            key: '3',
            city: 'Karaganda',
            sales: sales?.karaganda,
            address: 'Sidney No. 1 Lake Park',
        },
        {
            key: '4',
            city: 'Shymkent',
            sales: sales?.shymkent,
            address: 'Sidney No. 1 Lake Park',
        },
    ];

    return (<TableAnt columns={columns} dataSource={data} />)

}