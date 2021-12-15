const express = require('express');
const cors = require('cors')
const { addGood, getBasketGoods, deleteGood } = require('./helpers')

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static('./static'));


app.get('/basketgoods', (req, res) => {
    getBasketGoods().then((data) => {
        res.send(data);
    })
});

app.post('/:id', (req, res) => {
    addGood(req.params.id).then(() => {
        getBasketGoods().then((data) => {
            res.send(data);
        })
    }).catch((err) => {
        res.send(err);
    })
})

app.delete('/:id', (req, res) => {

})


app.listen('8000', () => {
    console.log('server run');
});
