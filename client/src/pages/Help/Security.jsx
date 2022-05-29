export const Security = () => {
    return (
        <div className='w-full mt-[64px] px-5'>
            <h1 className="title text-left">Правила личной безопасности</h1>
            <div className='bg-white p-7 mt-2 rounded'>
                <h2 className="font-mono mt-5">
                    Не сообщайте никому свои пароли, ПИН- и CVV-коды
                    и коды из СМС — даже сотрудникам доверенной организации.
                </h2>
                <h2 className="font-mono mt-5">
                    Не переходите по подозрительным ссылкам. Мошенники могут прислать вам
                    ссылку на поддельный сайт и украсть логины и пароли от ваших аккаунтов.
                </h2>
                <h2 className="font-mono mt-5">
                    Используйте только официальные приложения организации в App Store и Google Play.
                </h2>
            </div>

            <h1 className="title text-left mt-5">Банковская карта</h1>
            <div className='bg-white p-5 mt-5 rounded'>
                <h2 className="font-mono mt-5 font-bold">
                    Проверяйте адреса сайтов
                </h2>
                <h2 className="font-mono mt-5">
                    Всегда проверяйте, совпадает ли адрес сайта, на котором вы находитесь,
                    с официальным адресом Easily: https://www.easily.kz.
                </h2>
                <h2 className="font-mono mt-5">
                    Если страница Ozon кажется вам подозрительной, не вводите на ней свои персональные данные.
                    Закройте страницу, если в браузере появится сообщение о переходе на подозрительный сайт.
                </h2>

                <h2 className="font-mono mt-5 font-bold">
                    Установите антивирус
                </h2>
                <h2 className="font-mono mt-5">
                    Убедитесь, что на вашем устройстве нет вирусов. С помощью вирусов злоумышленники могут
                    украсть ваши файлы, заблокировать компьютер и узнать пароли для сайтов, на которых вы
                    зарегистрированы.
                </h2>
                <h2 className="font-mono mt-5">
                    Быстро проверить компьютер и удалить вирусы помогут бесплатные программы Kaspersky Virus
                    Removal Tool или Dr.Web CureIt!. Их нужно скачивать заново перед проверкой. Для постоянной
                    защиты компьютера нужно установить антивирус.

                </h2>
                <h2 className="font-mono mt-5">
                    Бесплатные антивирусы: avast!, Avira, AVG, Bitdefender Antivirus, Kaspersky Free,
                    Panda Free Antivirus.
                </h2>

            </div>
        </div>
    )
}