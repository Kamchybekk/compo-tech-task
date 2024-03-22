import styled from '@emotion/styled';
import Breadcrumbs from './shared/ui/Breadcrums/Breadcrums';
import Header from './widgets/Header/Header';
import Navbar from './widgets/Navbar/Navbar';
import Product from './features/Product/Product';
import shoes1 from './shared/assets/images/shoes1.png';
import shoes2 from './shared/assets/images/shoes2.avif';
import shoes3 from './shared/assets/images/shoes3.avif';
import shoes4 from './shared/assets/images/shoes4.avif';
import { useState } from 'react';

const inititalProductData = {
    id: 1,
    title: 'КРОССОВКИ МУЖСКИЕ SKECHERS SUNNY DALE',
    images: [shoes1, shoes2, shoes3, shoes4],
    price: {
        originalPrice: 166534,
        currentPrice: 122566,
        currency: 'RUB',
        discountPercentage: 15,
    },
    stock: {
        available: 12,
        orderIsPacked: true,
    },
    delivery: {
        tomorrow: '7 шт.',
        pickup: '7 шт.',
    },
    characteristics: {
        itemCode: 'ELC00696',
        vendorCode: 'ELC02000000696',
        postingCode: 'ELC00696',
        EAN: 'ELC00696',
        brand: 'Electric used',
        series: 'ELC00696',
    },
    description:
        'Создание приверженного покупателя специфицирует неопровержимый комплексный анализ ситуации. CTR существенно индуцирует из ряда вон выходящий SWOT-анализ. Воздействие на потребителя определяет возрастающий интеграл по поверхности, что известно даже школьникам. Отсюда естественно следует, что коммуникация уравновешивает косвенный фактор коммуникации. Поле направлений естественно допускает экспериментальный скачок функции, таким образом сбылась мечта идиота - утверждение полностью доказано.     Арифметическая прогрессия притягивает линейно зависимый пуллояльных изданий',
};

function App() {
    const [productData, setProductData] = useState(inititalProductData);

    return (
        <div className="App">
            <Header />
            <Navbar />
            <ContainerContent>
                <Breadcrumbs />
                <h1>{productData.title}</h1>
                <Product
                    setProductData={setProductData}
                    productData={productData}
                />
            </ContainerContent>
        </div>
    );
}

export default App;

const ContainerContent = styled('div')`
    padding: 17px 25px;
`;
