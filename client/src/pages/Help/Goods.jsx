import { Card, Col, Row } from 'antd';


export const Goods = () => {
    return (
        <div className='w-full mt-[64px] px-5'>
            <Row gutter={16}>
                <Col span={8}>
                    <Card title="Характеристики и наличие" bordered={true} className="font-mono text-2xl">
                        Что делать если товара нет в наличии или у него слишком высокая цена
                    </Card>
                </Col>
                <Col span={8}>
                    <Card title="Избранные товары" bordered={false} className="font-mono text-xl">
                        Как добавить товар и создать список в избранном
                    </Card>
                </Col>
                <Col span={8}>
                    <Card title="Вопросы и ответы о товаре" bordered={false} className="font-mono text-xl">
                        Как задать вопрос о товаре, ответить на него и настроить уведомления
                    </Card>
                </Col>
            </Row>
            <Row gutter={16} className="mt-10">
                <Col span={8}>
                    <Card title="Добавить в корзину" bordered={true} className="font-mono text-xl">
                        Как добавить выбранный товар в корзину.Для дальнейшей покупки
                    </Card>
                </Col>
                <Col span={8}>
                    <Card title="Предзаказ товаров" bordered={false} className="font-mono text-xl">
                        Как оформить, отредактировать или отменить предзаказ товаров
                    </Card>
                </Col>
                <Col span={8}>
                    <Card title="Учененные товары" bordered={false} className="font-mono text-xl">
                        Причины уценки и как вернуть уцененные товары
                    </Card>
                </Col>
            </Row>
        </div>
    )
}