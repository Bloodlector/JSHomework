const express = require('express');
const fs = require('fs');
const { resolve } = require('path');

const GOODS = './static/goods.json';
const BASKET_GOODS = './static/basket-goods.json'

const writeAllFromFile = (data) => new Promise((resolve, reject) => {
    fs.writeFile('./static/basket-goods.json', JSON.stringify(data), (err) => {
        if (err) {
            reject(err)
        } else {
            resolve(data);
        }
    })

})


const getAllFromFile = (path) => new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8', (err, data) => {
        if (err) {
            reject(err);
        }
        else {
            resolve(JSON.parse(data));
        }

    })
})


addGood = (id) => new Promise((resolve, reject) => {
    try {
        getAllFromFile(BASKET_GOODS).then((_items) => {
            let items = [..._items];
            if (
                items.some((item) => {
                    return item.id == id;
                })
            ) {
                items = items.map((item) => {
                    if (item.id == id) {
                        return {
                            ...item,
                            count: item.count + 1
                        }
                    } else {
                        return item;
                    }
                })
            } else {
                items.push({
                    id,
                    count: 1
                })
            }
            writeAllFromFile(items).then(() => {
                resolve(items);
            })

        })
    } catch (err) {
        console.log(err);
        reject(err);
    }
})


deleteGood = (id) => new Promise((resolve, reject) => {
    try {
        getAllFromFile(BASKET_GOODS).then((_items) => {
            let items = [..._items];
            if (
                items.some((item) => {
                    return item.id == id;
                })
            ) {
                items = items.map((item) => {
                    if (item.id == id) {
                        return {
                            ...item,
                            count: item.count + 1
                        }
                    } else {
                        return item;
                    }
                })
            } else {
                items.push({
                    id,
                    count: 1
                })
            }
            writeAllFromFile(items).then(() => {
                resolve(items);
            })

        })
    } catch (err) {
        console.log(err);
        reject(err);
    }
})

const getBasketGoods = () => new Promise((resolve, reject) => {
    Promise.all([
        getAllFromFile(BASKET_GOODS),
        getAllFromFile(GOODS)
    ]).then(([basketGoodsItems, goodsItems]) => {
        const result = basketGoodsItems.map((item) => {
            const gItems = goodsItems.find(({ id: _id }) => {
                return _id === item.id;
            });
            if (gItems) {
                return {
                    ...item,
                    ...gItems
                }
            } else {
                item
            }

        })
        resolve(result);
    })
})


module.exports = {
    addGood,
    getBasketGoods
}