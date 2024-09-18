import { server } from "..";
import { createNewProduct, createNewTable } from "../services/shop";

server.post('/api/postUser', async (req, res) => {
  //  res.body = await postUser(req.body)
    return res
})

server.get('/api/getUsers', async (req, res) => {
   // res.body = await getUsers()
    return res
})

server.delete('/api/deleteUser', async (req, res) => {
   // res.body = await deleteUser(req.body.id)
    return res
})

//Добавить новый продукт
server.post('/shop/createNewProduct', async (req, res) => {
    res.body = await createNewProduct(req.body)
    return res
})

//Создать таблицу
server.post('/shop/createNewTable', async (req, res) => {
    res.body = await createNewTable()
    return res
})



