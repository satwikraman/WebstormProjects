const express = require('express');
const mongoose = require('mongoose');
const { Schema } = mongoose;
const bookModel = new Schema(
    {
        name: { type: String },
        age: { type: String }
    }
);
module.exports = mongoose.model('Book', bookModel);