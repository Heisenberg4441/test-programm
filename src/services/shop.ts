import * as postgres from 'postgres'
import { values } from '../types'
import { sql } from '../config'

// PLU: number      Артикул товара(Добавляется само)
// PRODUCT_NAME: string     Название товара
// QUANTITY_OF_PRODUCTS_IN_SHOP: string    Кол-во товара на полке 
// QUANTITY_OF_PRODUCTS_IN_CART: string     Кол-во товара в заказе
// REMAINING_OF_PRODUCTS_IN_SHOP: string    Для какого магазина товары(?) - спросить в чате


//Создание нового товара
export const createNewProduct = async (values: values) => {
    return sql`
    INSERT INTO products (
        plu,
	    product_name,
	    quantity_of_products_in_shop,
	    quantity_of_products_in_cart,
	    name_of_shop
    )  VALUES (
        ${values.plu},
        ${values.product_name},
        ${values.quantity_of_products_in_shop},
        ${values.quantity_of_products_in_cart},
        ${values.remaining_of_products_in_shop});`
}

export const createNewTable = async () => {
    return sql`
    CREATE TABLE products(
	    plu INTEGER,
	    product_name TEXT,
	    quantity_of_products_in_shop INTEGER,
	    quantity_of_products_in_cart INTEGER,
	    name_of_shop TEXT
    );
    `
}