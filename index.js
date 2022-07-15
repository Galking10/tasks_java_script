//  const titleRef = document.createElement('h1')

//  titleRef.textContent = 'Вот наш заголовок!'

//  titleRef.classList.add('title')

//  console.log(titleRef)

const products = [
    {
    name: 'Сервоприводы',
    description:   'Рандомный текстРандомный текст Рандомный текстРандомный текст',
    price: 2000,
    available: true,
},
{
    name: 'Первопривод',
    description:   'Рандомный текстРандомный текст Рандомный текстРандомный текст',
    price: 3000,
    available: false,
},
{
    name: 'Сервоприводы',
    description:   'Рандомный текстРандомный текст Рандомный текстРандомный текст',
    price: 4000,
    available: true,
},
]

const createProductCard = product => {

    const containerRef = document.createElement('div')
    containerRef.classList.add('product-card')
    
    const titleRef = document.createElement('h2')
    titleRef.textContent = product.name
    titleRef.classList.add('product-card__name', 
    product.available 
    ? 'product-card__name--available' 
    : 'product-card__name--not-available')
    
    const descrRef = document.createElement('p')
    descrRef.textContent = product.description
    
    const priceRef = document.createElement('p')
    priceRef.textContent = `Цена ${product.price} продукта`
    
    containerRef.append(titleRef, titleRef, descrRef, priceRef)

    return containerRef
    
    
}
// console.log(createProductCard(product[2]))

const productCard = products.map(product => createProductCard(product))

console.log(productCard)

const productsListRef = document.querySelector('.js-products')

productsListRef.append(...productCard)
product.forEach( product => 
    console.log(product)

)