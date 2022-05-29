//library
import {Alert, Image} from "antd";

//image
import byCard from '../../img/pages/Help/by-card.png'

export const Payment = () => {
    return (
        <div className='w-full mt-[64px] px-5'>
            <h1 className="title text-left">Способы оплаты</h1>
            <div className='bg-white p-10 mt-2 rounded'>
                <Alert
                    className="mt-[10px]"
                    message="Осторожно"
                    description="Некоторые способы оплаты могут быть недоступны для выбранного региона или способа доставки."
                    type="warning"
                    showIcon
                />
                <h2 className="font-mono mt-5">
                    Покупая на Easily, вы можете выбрать любой из доступных способов
                    оплаты или комбинировать их.
                </h2>
                <h2 className="font-mono mt-5">
                    Оплачивайте заказы банковской картой, Easily Card или Qiwi.
                    Если у вас есть подарочный сертификат Easily, активируйте его.
                    Если вы оформляете заказ на сайте, вы можете выбрать оплату
                    с помощью Системы быстрых платежей. Если на вашем Балансе
                    средств есть доступные средства, вы можете платить с него
                </h2>

                <Alert
                    className="mt-5"
                    message="Инфо"
                    description="
                    С 01.01.2022 для покупателей в Казахстане стоимость товара отображается с
                    надбавкой 12% из-за вступления в силу «Цифрового налога» на территории Казахстана."
                    type="info"
                    showIcon
                />
            </div>

            <h1 className="title text-left mt-5">Банковская карта</h1>
            <div className='bg-white p-5 mt-5 rounded'>
                <h2 className="font-mono">
                    Чтобы оплатить заказ банковской картой:
                </h2>
                <h2 className="font-mono pl-4 mt-5">
                    1. При оформлении заказа в разделе Способ оплаты выберите сохранённую карту
                    или нажмите Новой картой онлайн.
                </h2>
                <Image
                    width={200}
                    src={byCard}
                />
                <h2 className="font-mono pl-4 mt-5">
                    2.Нажмите Оплатить онлайн.
                </h2>
                <h2 className="font-mono pl-4 mt-5">
                    3.Если вы оплачиваете новой картой, введите данные карты.
                </h2>
                <h2 className="font-mono pl-4 mt-5">
                    4.Нажмите Оплатить. Минимальная сумма оплаты — 100 тенге.
                </h2>
                <h2 className="font-mono  mt-5">
                    К оплате принимаются банковские карты, у которых 16, 18, 19 цифр в номере:
                </h2>

                <h2 className="font-mono pl-4 mt-5">
                   - VISA, MasterCard, МИР, China UnionPay, JCB и American Express;
                </h2>

            </div>


        </div>
    )
}