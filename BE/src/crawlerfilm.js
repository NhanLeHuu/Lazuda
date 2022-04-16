const Nightmare = require('nightmare')
const cheerio = require('cheerio');
const nightmare = Nightmare({ show: false })
    // const url = 'https://phimmoi123.com/';
    // const url = 'http://khophimhd.net/';
const url = 'https://www.fullphim.net/';

nightmare
    .goto(url)
    .wait('body')
    .evaluate(() => document.querySelector('body').innerHTML)
    .end()
    .then(response => {
        getData(response);
    }).catch(err => {
        console.log(err);
    });

let pagehome = {
    phimbo: [],
    phimle: [],
    phimrap: [],
    phimhoathinh: []
}

// summary
let summary = {}
let urlresend = ""

// reading
let readingfilm = { filmlienquan: [] }
let urlreading = ""

// search
let searchfilm = []
let urlsearch = ""

// home
let getData = html => {
    data = [];
    const $ = cheerio.load(html);

    var section = $(".section")
    $(section.children()[0]).find(".item-list").find(".item").each((i, element) => {
        var title = $(element).find('.item-block-title').text();
        var type = $(element).find('.info-title-link').text();
        var getimg = $(element).find('.item-image-block').attr('style');
        var gethref = $(element).find('.item-image-block').attr('href');
        var img = "https://www.fullphim.net" + /".*"/.exec(getimg).toString().replace(/\"/g, "");
        var href = "https://www.fullphim.net" + gethref;

        pagehome.phimbo.push({
            title,
            type,
            img,
            href
        })
    })

    $(section.children()[1]).find(".item-list").find(".item").each((i, element) => {
        var title = $(element).find('.item-block-title').text();
        var type = $(element).find('.info-title-link').text();
        var getimg = $(element).find('.item-image-block').attr('style');
        var gethref = $(element).find('.item-image-block').attr('href');
        var img = "https://www.fullphim.net" + /".*"/.exec(getimg).toString().replace(/\"/g, "");
        var href = "https://www.fullphim.net" + gethref;

        pagehome.phimle.push({
            title,
            type,
            img,
            href
        })
    })

    $(section.children()[2]).find(".item-list").find(".item").each((i, element) => {
        var title = $(element).find('.item-block-title').text();
        var type = $(element).find('.info-title-link').text();
        var getimg = $(element).find('.item-image-block').attr('style');
        var gethref = $(element).find('.item-image-block').attr('href');
        var img = "https://www.fullphim.net" + /".*"/.exec(getimg).toString().replace(/\"/g, "");
        var href = "https://www.fullphim.net" + gethref;

        pagehome.phimrap.push({
            title,
            type,
            img,
            href
        })
    })

    $(section.children()[3]).find(".item-list").find(".item").each((i, element) => {
        var title = $(element).find('.item-block-title').text();
        var type = $(element).find('.info-title-link').text();
        var getimg = $(element).find('.item-image-block').attr('style');
        var gethref = $(element).find('.item-image-block').attr('href');
        var img = "https://www.fullphim.net" + /".*"/.exec(getimg).toString().replace(/\"/g, "");
        var href = "https://www.fullphim.net" + gethref;

        pagehome.phimhoathinh.push({
            title,
            type,
            img,
            href
        })
    })
}

class CrawlerFilm {

    getFilmHome(req, res) {
        res.status(200).json({
            status: 200,
            pagehome
        })
    }

    async getSummaryFilm(req, res) {
        var url = req.body.summary;

        const Nightmare = require('nightmare')
        const body = Nightmare({ show: false })

        if (summary.title && urlresend == url) {
            res.status(200).json({
                status: 200,
                data: summary
            })
        } else {
            urlresend = url
            await body
                .goto(url)
                .wait('body')
                .evaluate(() => document.querySelector('body').innerHTML)
                .end()
                .then(response => {
                    const $ = cheerio.load(response)
                    var title = $(".header-title").text()
                    var getimg = $(".header-thumbnail-image").attr("style")
                    var img = "https://www.fullphim.net" + /".*"/.exec(getimg).toString().replace(/\"/g, "");
                    var thongtin = $(".header-short-description").find("p").html().toString()
                    var mota = $(".rtb.w-richtext").html().toString()
                    var trailer = $(".review-video.w-video.w-embed").html().toString()
                    var back = $(".dynamic-page-header").attr("style")
                    var background = "https://www.fullphim.net" + /".*"/.exec(back).toString().replace(/\"/g, "");
                    var hrefreading = "https://www.fullphim.net" + $($(".header-info-item").find("a")[1]).attr("href")

                    var filmlienquan = []

                    $(".container.w-container").find(".item-list").find(".item").each((i, element) => {
                        var title = $(element).find('.item-block-title').text();
                        var type = $(element).find('.info-title-link').text();
                        var getimg = $(element).find('.item-image-block').attr('style');
                        var gethref = $(element).find('.item-image-block').attr('href');
                        var img = "https://www.fullphim.net" + /".*"/.exec(getimg).toString().replace(/\"/g, "");
                        var href = "https://www.fullphim.net" + gethref;

                        filmlienquan.push({
                            title,
                            type,
                            img,
                            href
                        })
                    })

                    summary = {
                        title,
                        thongtin,
                        mota,
                        trailer,
                        hrefreading,
                        filmlienquan,
                        background,
                        img
                    }

                    res.status(200).json({
                        status: 200,
                        data: summary
                    })
                }).catch(err => {
                    console.log(err);
                });
        }
    }

    async getReadingFilm(req, res) {
        var url = req.body.href
        const Nightmare = require('nightmare')
        const body = Nightmare({ show: false })

        if (readingfilm.filmlienquan.length > 0 && urlreading == url) {
            res.status(200).json({
                status: 200,
                data: readingfilm
            })
        } else {
            urlreading = url

            await body
                .goto(url)
                .wait('body')
                .evaluate(() => document.querySelector('body').innerHTML)
                .end()
                .then(response => {
                    const $ = cheerio.load(response)
                    var iframe = $($(".w-iframe")[0]).children().html().toString()
                    var episode = []
                    $(".collection-list.w-dyn-items").find(".collection-item").each((i, element) => {
                        episode.push({
                            tap: $(element).find("a").text(),
                            href: "https://www.fullphim.net" + $(element).find("a").attr("href")
                        })
                    })
                    var filmlienquan = []

                    $(".container.w-container").find(".item-list").find(".item").each((i, element) => {
                        var title = $(element).find('.item-block-title').text();
                        var type = $(element).find('.info-title-link').text();
                        var getimg = $(element).find('.item-image-block').attr('style');
                        var gethref = $(element).find('.item-image-block').attr('href');
                        var img = "https://www.fullphim.net" + /".*"/.exec(getimg).toString().replace(/\"/g, "");
                        var href = "https://www.fullphim.net" + gethref;

                        filmlienquan.push({
                            title,
                            type,
                            img,
                            href
                        })
                    })
                    readingfilm = {
                        iframe,
                        filmlienquan,
                        episode
                    }
                    res.status(200).json({
                        status: 200,
                        data: readingfilm
                    })
                }).catch(err => {
                    console.log(err);
                });
        }
    }

    async getSearchFilm(req, res) {
        var url = req.body.urlsearch
        const Nightmare = require('nightmare')
        const body = Nightmare({ show: false })
        if (searchfilm.length > 0 && urlsearch == url) {
            res.status(200).json({
                status: 200,
                data: searchfilm
            })
        } else {
            urlsearch = url
            searchfilm = []

            await body
                .goto(url)
                .wait('body')
                .evaluate(() => document.querySelector('body').innerHTML)
                .end()
                .then(response => {
                    const $ = cheerio.load(response)

                    $(".search-result-items").find(".search-item").each((i, element) => {
                        var getimg = $(element).find('.search-image').attr('style')
                        var img = "https://www.fullphim.net" + /".*"/.exec(getimg).toString().replace(/\"/g, "");
                        var href = "https://www.fullphim.net" + $(element).find('.search-image').attr('href')
                        var title = $(element).find('.search-link-title').text()
                        var noidung = $(element).find('.search-paragraph').text()

                        searchfilm.push({
                            img,
                            href,
                            title,
                            noidung
                        })
                    })

                    res.status(200).json({
                        status: 200,
                        data: searchfilm
                    })
                }).catch(err => {
                    console.log(err);
                });
        }
    }
}

module.exports = CrawlerFilm