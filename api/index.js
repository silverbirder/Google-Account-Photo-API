const express = require('express');
const request = require('request');
const { google } = require('googleapis');

require('dotenv').config();

const app = require('express')();
const port = 3000 || process.env.PORT;

const service = google.people({
    version: "v1",
    auth: process.env.API_KEY
});


app.get('/api', async (req, res) => {
    const response = await service.people.get({
        resourceName: `people/${req.query.account_id}`,
        personFields: 'photos',
    })
    // remove #=s100 to get the original file size.
    const photoUrl = response.data.photos[0].url.split('=')[0];
    request(photoUrl).pipe(res);
});

module.exports = app;