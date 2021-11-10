const https = require('https');
const axios = require('axios').default;
const cheerio = require('cheerio');

const URL = 'https://matmuh.itu.edu.tr/haberler';
const PREFIX = 'https://matmuh.itu.edu.tr';

async function fetchAnnouncements() {
    const { data } = await axios.get(URL);
    const $ = cheerio.load(data);
    const result = [];
    $('div.news__list-item > div.card').each((index, container) => {
        result.push({
            title: $(container).find('h2').text(),
            body: $(container).find('.card__text-container > p').text().replace('\n', '').trim(),
            date: $(container).find('span').text(),
            link: PREFIX + $(container).find('a.btn').attr()['href']
        })
    })
    return result.reverse();
}

module.exports = {
    fetchAnnouncements
}