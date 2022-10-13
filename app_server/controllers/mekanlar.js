var express = require('express');
var router = express.Router();
const anaSayfa = function (req, res) {
    res.render('anasayfa', { title: 'Anasayfa' });
};
const mekanBilgisi = function (req, res) {
    res.render('mekanbilgisi', { title: 'Mekan bilgisi' });
};
const YorumEkle = function (req, res) {
    res.render('yorumekle', { title: 'Yorum Ekle' });
};



module.exports={
    anaSayfa,
    mekanBilgisi,
    YorumEkle
}