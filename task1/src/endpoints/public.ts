import { server } from "..";
import { createNewOperationHistoryTable, getAllOperations, getOperationsByFilter } from "../services/operationHistory,";
import { createNewProduct, createProductsNewTable, editQuantity, editQuantityInCart, editQuantityInShop, getAllProducts, getProductsByFilter, getQuantity } from "../services/shop";

server.post('/api/postUser', async (req, res) => {
  //  res.body = await postUser(req.body)
    return res;
})

server.get('/api/getUsers', async (req, res) => {
   // res.body = await getUsers()
    return res;
})

server.delete('/api/deleteUser', async (req, res) => {
   // res.body = await deleteUser(req.body.id)
    return res;
})

//Добавить новый продукт
server.post('/shop/createNewProduct', async (req, res) => {
    res.body = await createNewProduct(req.body);
    return res;
})

//Получить все товары
server.get('/shop/getAllProducts', async (req, res) => {
    res.body = await getAllProducts();
    return res;
})
//Изменить остаток товаров в магазине
server.post('/shop/editQuantityInShop', async (req, res) => {
    res.body = await editQuantityInShop(req.body)
    return res
})

//Изменить остаток товаров в корзине
server.post('/shop/editQuantityInCart', async (req, res) => {
    res.body = await editQuantityInCart(req.body)
    return res
})

//Изменить остаток
server.post('/shop/editQuantity', async (req, res) => {
    res.body = await editQuantity(req.body)
    return res
})

//Получение остатка по фильтрам
server.get('/shop/getQuantityByFilter', async (req, res) => {
    res.body = await getQuantity(req.body)
    return res
})

//Получить продукт по фильтру
server.get('/shop/getProductsByFilter', async (req, res) => {
    res.body = await getProductsByFilter(req.body)
    return res
})

//Создать таблицу с продуктами
server.post('/shop/createProductsNewTable', async (req, res) => {
    res.body = await createProductsNewTable();
    return res;
})


//Сервис логирования операций


//Получение всех операций
server.get('/history/getAllOperations', async (req, res) => {
    res.body = await getAllOperations()
    return res
})

//Получение операций по фильтрам
server.get('/history/getOperationsByFilter', async (req, res) => {
    res.body = await getOperationsByFilter(req.body)
    return res
})

//Создание новой таблицы логирования операций
server.post("/history/createNewOperationHistoryTable", async (req, res) => {
    res.body = await createNewOperationHistoryTable()
    return res
})