# Задание один.
## Инструкция по запуску:
- npm install
- npm start
### Для общения с сервером используется Postman

# Проверка работоспособности
## Перед началом работы у вас должен быть сервер PostgreSQL,
## все параметры для подключения к нему находятся в /src/config.ts

После проверки всех данных создайте новые таблицы.
Для этого отправьте:
- POST запрос на адрес http://localhost:3000/shop/createNewProductTable
- POST запрос на адрес http://localhost:3000/history/createNewOperationHistoryTable

## Создание/изменение/получение продуктов из PostgreSQL:
Для того, чтобы создать/изменить/получить какой либо продукт из таблицы надо:
#### Создать продукт
- POST запрос на адрес http://localhost:3000/shop/createNewProduct с телом {

}
#### Изменить остаток
##### Изменение остатка в магазине
- POST запрос на адрес http://localhost:3000/shop/editQuantityInShop с телом: `{
    "plu": number,
    "changeValue": number,
    "delete": [
        boolean
    ]
}`
##### Изменение остатка в магазине
- POST запрос на адрес http://localhost:3000/shop/editQuantityInCart с телом: `{
    "plu": number,
    "changeValue": number,
    "delete": [
        boolean
    ]
}`

##### Изменить общий остаток(И в магазине, и в корзине)
- POST запрос на адрес http://localhost:3000/shop/editQuantity с телом: `{
    "plu": number,
    "changeCartValue": number,
    "changeShopValue": number,
    "delete": [
        boolean, boolean
    ]
}`
