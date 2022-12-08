import Root from './MainPage.style';

export default function MainPage() {
  return <>
    <Root>
        <div className="main-page">
        <header className="header">
            <img src="logo.svg" alt="" height="37" />
        </header>
        <section className="preview">
        <div className="preview-container">
            <h1 className="preview-heading">Очередная закупка уже скоро!</h1>
            <p>Начало:</p>
            <h2 className="preview-subheading">10 декабря, суббота, 09:00</h2>
            <a className="preview-button" href='/store'>В магазин</a>
        </div>
        </section>
        <main className="main-page-content">
        <section className="page-section">
            <article className="page-section-content">
            <h2>Что такое СоцКооп</h2>
            <p>
                СоцКооп — это объединение людей, созданное для совместных закупок
                товаров и борьбы с дороговизной.
            </p>
            <p>
                Мы нацелены на коллективную работу и вовлечение активных участников
                в процесс принятия решений.
            </p>
            <p>
                Наши ценности – взаимовыручка, соучастие, горизонтальная экономика,
                прозрачность и честность.
            </p>
            </article>
            <aside className="page-section-aside">
            <article className="qr-item">
                <img
                className="qr-item-code"
                src="qr-aside-01.svg"
                alt="Информационный телеграм-канал СоцКооп"
                />
                <p className="qr-item-label">
                Информационный телеграм-канал. 
                <a href="https://t.me/+8DFjKvDrZR41ZGIy" target="_blank"
                    > Прямая ссылка</a
                >
                </p>
            </article>
            </aside>
        </section>
        <section className="page-section">
            <article className="page-section-content">
            <h2>Наши цели</h2>
            <p>
                Мы стремимся к построению горизонтальной экономической структуры,
                вовлекая участников в работу и обеспечивая прозрачность всех её
                этапов.
            </p>
            <p>
                Каждый участник может помочь в выборе поставщиков, товаров, в оценке
                качества, может участвовать в работе ревизионной комиссии или в
                другой кооперативной деятельности.
            </p>
            <p>
                Своей задачей мы видим поддержку семей, одиноких людей и всех, кому
                товары в магазинах кажутся дорогими даже на ценниках со скидками.
            </p>
            <p>
                Для этого мы стремимся сделать цены на нашем сайте ниже минимум на
                15% по сравнению с тем магазином, куда вы обычно ходите за
                покупками. На некоторые позиции цена у нас ниже вдвое.
            </p>
            </article>
            <aside className="page-section-aside">
            <article className="qr-item">
                <img
                className="qr-item-code"
                src="qr-aside-02.svg"
                alt="Информационный телеграм-канал СоцКооп"
                />
                <p className="qr-item-label">
                Телеграм-чат чтобы поболтать с нами и единомышленниками. 
                <a href="https://t.me/+8DFjKvDrZR41ZGIy" target="_blank"
                    > Прямая ссылка</a
                >
                </p>
            </article>
            </aside>
        </section>
        <section className="page-section">
            <article className="page-section-content">
            <h2>Как это работает?</h2>
            <p>
                Низкий уровень наших цен достигается прямой работой с
                производителями и крупными оптовыми поставщиками. А ещё –
                специальным налоговым режимом и государственной поддержкой
                потребительских кооперативов.
            </p>
            <p>
                Но что делать, если вы знаете, что какой-то товар у нас на сайте не
                такой дешёвый, и вы знаете, где купить дешевле?
            </p>
            <p>
                Войдите в состав кооператива для доступа к закупкам и участию в
                выборе поставщиков. И уже на следующей закупке товар от более
                дешёвого поставщика станет доступен всем участникам.
            </p>
            <p>
                Когда вы сами убедитесь в выгодности совместных закупок, пригласите
                в кооператив друзей, соседей, коллег по работе!
            </p>
            <p>
                Чем больше людей покупают совместно, тем больше объёмы закупки и тем
                более выгодные условия можно получить у поставщиков.
            </p>
            <p>
                Для приглашения достаточно запомнить краткое название нашего сайта –&nbsp;
                <a href="#">СОЦКООП.РФ</a>, или поделиться нашим&nbsp;
                <a href="https://t.me/+8DFjKvDrZR41ZGIy" target="_blank">
                телеграмм-каналом</a
                >.
            </p>
            </article>
            <aside className="page-section-aside">
            <img src="aside-02.jpg" alt="Давайте закупаться вместе!" />
            </aside>
        </section>
        <section className="page-section">
            <article className="page-section-content">
            <h2>Это безопасно?</h2>
            <p>
                Да, участие в потребительском кооперативе не накладывает никаких
                неявных или скрытых обязательств:
            </p>
            <ul>
                <li>
                Нет никаких периодических или обязательных платежей. Ваша личная
                информация защищается в соответствии с Законом 152-ФЗ О защите
                персональных данных;
                </li>
                <li>
                Платежи проходят напрямую на расчётный счёт кооператива и защищены
                технологиями банковской безопасности;
                </li>
                <li>
                Каждому участнику доступна информация о движении средств на его
                личном паевом счету.
                </li>
            </ul>
            <p>
                Более того, участники вправе получать информацию о расходовании
                средств кооператива в целом.
            </p>
            <p>
                Устав кооператива предполагает направление средств, вырученных от
                уставной хозяйственной деятельности на развитие самого кооператива и
                его целевых программ, которые определяются общим собранием
                участников.
            </p>
            <p>
                Чтобы подробне узнать об уставе и других нормативных документах вы
                можете написать нам.
            </p>
            <p>
                СоцКооп поможет не только поправить семейный бюджет, но и получить
                уникальный опыт поддержки и взаимопомощи — это то, чего нам всем так
                не хватает сегодня. Заходите в чат, присоединяйтесь к сообществу
                друзей! Чем нас больше, тем мы сильнее!
            </p>
            </article>
            <aside className="page-section-aside">
            <img src="aside-03.jpg" alt="Привет, это СоцКооп!" />
            </aside>
        </section>
        <section className="page-section">
            <article className="page-section-content">
            <h2>Планы на будущее</h2>
            <p>
                Наши планы — расширяться, вовлекать и объединять. Мы хотим разрушить
                монополию корпораций на поставки продовольствия и важнейших товаров
                нашим семьям. Мы хотим привнести в жизнь всех участников радость
                общения с друзьями, радость общего дела.
            </p>
            <p>
                Присоединяйтесь к ближайшей закупке, пишите нам и расскажите о нас
                вашим друзьям и близким!
            </p>
            </article>
            <aside className="page-section-aside">
            <img src="aside-01.jpg" alt="Привет, это СоцКооп!" />
            </aside>
        </section>
        </main>
        <footer className="main-page-footer">
            ПК "СоцКооп" | 2022
        </footer>
    </div>
    </Root>
  </>
}