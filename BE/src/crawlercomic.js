const Nightmare = require('nightmare')
const cheerio = require('cheerio');
const nightmare = Nightmare({ show: false })
// const url = 'https://timtruyen.net/';
// const url = 'https://truyenkinhdien.com/';
const url = 'https://toptruyenhay.net/';

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
    decu: [],
    girl: [],
    boy: []
}
let summary = {}
let urlresend = ""

let readingcomic = { reading: [] }
let urlreading = ""

let searchcomic = []
let urlsearch = ""

let getData = html => {
    data = [];
    const $ = cheerio.load(html);
    $('.owl-wrapper').children().each((i, element) => {
        var img = $(element).find('img').attr('src')
        var title = $(element).find('img').attr('alt')
        var chuong = $($(element).find('.slide-caption').find('a')[1]).text()
        // var noidung = $(element).find('.excerpt').text()
        // var hrefReadingNow = $(element).find('.episode-book').find('a').attr('href')
        var hrefsummaryManga = $($(element).find('.slide-caption').find('a')[0]).attr('href')
        // var theloai = [];
        // $(element).find('.more-info').find('.list-tags').find('a').each((i, element) => {
        //     theloai.push($(element).text())
        // })

        pagehome.decu.push({
            title,
            img,
            chuong,
            // noidung,
            // hrefReadingNow,
            hrefsummaryManga,
            // theloai
        })
    })

    $('.Module-163').find('.row').children().each((i, element) => {
        var img = $(element).find('img').attr('src')
        var title = $(element).find('img').attr('alt')
        var chuong = $(element).find('figcaption').find('a').text()
        // var noidung = $(element).find('.excerpt').text()
        // var hrefReadingNow = $(element).find('.episode-book').find('a').attr('href')
        var hrefsummaryManga = $(element).find('.image').find('a').attr('href')
        // var theloai = [];
        // $(element).find('.more-info').find('.list-tags').find('a').each((i, element) => {
        //     theloai.push($(element).text())
        // })

        pagehome.girl.push({
            title,
            img,
            chuong,
            // noidung,
            // hrefReadingNow,
            hrefsummaryManga,
            // theloai
        })
    })

    $('.list-unstyled').children().each((i, element) => {
        var img = $(element).find('img').attr('src')
        var title = $(element).find('img').attr('alt')
        var chuong = $(element).find('.chapter').find('a').text()
        // var noidung = $(element).find('.excerpt').text()
        // var hrefReadingNow = $(element).find('.episode-book').find('a').attr('href')
        var hrefsummaryManga = $($(element).find('.t-item').find('a')).attr('href')
        // var theloai = [];
        // $(element).find('.more-info').find('.list-tags').find('a').each((i, element) => {
        //     theloai.push($(element).text())
        // })

        pagehome.boy.push({
            img,
            title,
            chuong,
            // noidung,
            // hrefReadingNow,
            hrefsummaryManga,
            // theloai
        })
    })
}

class CrawlerComic {

    getComicHome(req, res) {
        res.status(200).json({
            status: 200,
            pagehome
        })
    }

    async getSearchComic(req, res) {
        var url = req.body.urlsearch
        const Nightmare = require('nightmare')
        const body = Nightmare({ show: false })
        if (searchcomic.length > 0 && urlsearch == url) {
            res.status(200).json({
                status: 200,
                data: searchcomic
            })
        } else {
            urlsearch = url
            await body
                .goto(url)
                .wait('body')
                .evaluate(() => document.querySelector('body').innerHTML)
                .end()
                .then(response => {
                    const $ = cheerio.load(response)
                    var search = []
                    $(".section-stories").find(".col-6").each((i, element) => {
                        var img = $(element).find('img').attr('src')
                        var title = $(element).find('img').attr('alt')
                        var chuong = $(element).find('.episode-book').find('a').text()
                        var noidung = $(element).find('.excerpt').text()
                        var hrefReadingNow = $(element).find('.episode-book').find('a').attr('href')
                        var hrefsummaryManga = $($(element).find('a')[0]).attr('href')
                        var theloai = [];
                        $(element).find('.more-info').find('.list-tags').find('a').each((i, element) => {
                            theloai.push($(element).text())
                        })
                        search.push({
                            title,
                            img,
                            chuong,
                            noidung,
                            hrefReadingNow,
                            theloai,
                            hrefsummaryManga
                        })
                    })
                    searchcomic = search
                    res.status(200).json({
                        status: 200,
                        data: search
                    })
                }).catch(err => {
                    console.log(err);
                });
        }

    }

    async getReadingComic(req, res) {
        var url = req.body.href
        const Nightmare = require('nightmare')
        const body = Nightmare({ show: false })

        if (readingcomic.reading.length > 0 && urlreading == url) {
            res.status(200).json({
                status: 200,
                data: readingcomic
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
                    var prechapter = $(".link-prev-chap").attr('href')
                    var nextchapter = $(".link-next-chap").attr('href')
                    var title = $(".detail-title").text()
                    var chapter = $(".detail-title").text()
                    var reading = []
                    $(".container.gallery").find("img").each(async (i, element) => {
                        var srcimg = $(element).attr("data-src")
                        reading.push(srcimg)
                    })
                    readingcomic = {
                        reading,
                        prechapter,
                        nextchapter,
                        title,
                        chapter
                    }
                    res.status(200).json({
                        status: 200,
                        data: readingcomic
                    })
                }).catch(err => {
                    console.log(err);
                });
        }
    }

    async getSummaryComic(req, res) {
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
                    var title = $("h1").text()
                    var tinhtrang = $(".kind").find('.col-xs-8').text()
                    // var dich = $("#tabs-11").text()
                    var tacgia = $(".author").find('.col-xs-8').text()
                    var mota = $(".detail-content").find('p').text()
                    var chuong = []
                    $(".list-chapter").find('.row').each((i, element) => {
                        if(i === 1) return
                        var sochuong = $(element).find("a").text()
                        var href = $(element).find("a").attr("href")
                        var ngaygio = $(element).find(".small").text()
                        chuong.push({
                            sochuong,
                            href,
                            ngaygio
                        })
                    })
                    var truyenlienquan = []
                    $(".related-products-wrapper").find(".product-small").each((i, element) => {
                        var img = $(element).find('img').attr('src')
                        var title = $(element).find('img').attr('alt')
                        // var chuong = $(element).find('.episode-book').find('a').text()
                        // var noidung = $(element).find('.excerpt').text()
                        // var hrefReadingNow = $(element).find('.episode-book').find('a').attr('href')
                        var hrefsummaryManga = $($(element).find('a')[0]).attr('href')
                        var theloai = [];
                        // $(element).find('.more-info').find('.list-tags').find('a').each((i, element) => {
                        //     theloai.push($(element).text())
                        // })

                        truyenlienquan.push({
                            title,
                            // chuong,
                            img,
                            // noidung,
                            // hrefReadingNow,
                            hrefsummaryManga,
                            theloai
                        })
                    })
                    summary = {
                        title,
                        tacgia,
                        tinhtrang,
                        dich: "",
                        mota,
                        chuong,
                        truyenlienquan
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
}

module.exports = CrawlerComic