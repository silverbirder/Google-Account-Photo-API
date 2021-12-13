const express = require('express');
const fetch = require('node-fetch');
const {pipeline} = require('stream');
const {promisify} = require('util');
const { google } = require('googleapis');

require('dotenv').config();

const app = require('express')();

const service = google.people({
    version: "v1",
    auth: process.env.API_KEY
});

app.get('/api', async (req, res) => {
    const googlePeopleResponse = await service.people.get({
        resourceName: `people/${req.query.account_id}`,
        personFields: 'photos',
    })
    const rawPhotoUrl = googlePeopleResponse.data.photos[0].url;
    // When use_original is 1, remove #=s100 to get the original file size.
    const photoUrl = req.query.use_original == '1' ? rawPhotoUrl.split('=')[0] : rawPhotoUrl;
    const streamPipeline = promisify(pipeline);
    const photoResponse = await fetch(photoUrl);
    streamPipeline(photoResponse.body, res);
});

module.exports = app;