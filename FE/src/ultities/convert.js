const Convert = {
    // convert image
    srcImage(product) {
        if (product instanceof Array) {
            product.forEach(element => {
                element.galley = []
                var srcimg = element.img.split(',')
                for (let i = 0; i < srcimg.length; i++) {
                    srcimg[i] = "/assets/product/" + srcimg[i]
                }
                element.galley = srcimg
            })

        } else {
            product.galley = []
            var srcimg = product.img.split(',')
            for (let i = 0; i < srcimg.length; i++) {
                srcimg[i] = "/assets/product/" + srcimg[i]
            }
            product.galley = srcimg
        }
        return product
    },
    getBase64Image(img) {
        var canvas = document.createElement("canvas");
        canvas.width = img.width;
        canvas.height = img.height;

        var ctx = canvas.getContext("2d");
        ctx.drawImage(img, 0, 0);

        var dataURL = canvas.toDataURL("image/png");

        return dataURL.replace(/^data:image\/(png|jpg);base64,/, "");
    },
    NumberFromString(x) {
        var string = x;
        var number = parseInt(string.replace(/^\D+/g, ''));
        return number;
    },
    numberRemoveDot(x) {
        var number = parseInt(x.toString().replaceAll(",", ""))
        return number
            // number.toLocaleString("de-DE")
    },
    numberHaveDot(x) {
        var number = x.toLocaleString("de-DE").replaceAll(".", ",")
        return number
    },
    convertStringToBoolean(val) {
        val.forEach(e => {
            if (e.macdinh === 'true') {
                e.macdinh = true
            } else {
                e.macdinh = false
            }
        })
        return val
    },
    formatDate(date) {
        var hours = date.getHours();
        var minutes = date.getMinutes();
        var ampm = hours >= 12 ? 'pm' : 'am';
        hours = hours % 12;
        hours = hours ? hours : 12; // the hour '0' should be '12'
        minutes = minutes < 10 ? '0' + minutes : minutes;
        var strTime = hours + ':' + minutes + ' ' + ampm;
        return (date.getMonth() + 1) + "/" + date.getDate() + "/" + +date.getFullYear() + " " + strTime;
    },
    convertToDate(d) {
        var m = d.split(" ")[0].replaceAll("/", "-");
        var date = new Date(m);

        return date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear()
    },
    ngayDelivery(d) {
        var m = d.split(" ")[0].replaceAll("/", "-");
        var date = new Date(m);
        var weekday = new Array(7);
        weekday[0] = "Chủ Nhật";
        weekday[1] = "Thứ Hai";
        weekday[2] = "Thứ Ba";
        weekday[3] = "Thứ Tư";
        weekday[4] = "Thứ Năm";
        weekday[5] = "Thứ Sáu";
        weekday[6] = "Thứ Bảy";

        return weekday[(date.getDay() + 2)] + " ," + (parseInt(date.getDate()) + 2) + "/" + (date.getMonth() + 1) + "/" + date.getFullYear() +
            " ~ " + weekday[(date.getDay() + 3)] + " ," + (parseInt(date.getDate()) + 3) + "/" + (date.getMonth() + 1) + "/" + date.getFullYear()
    },
    createMaDonHang(length) {
        var result = [];
        var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        var charactersLength = characters.length;
        for (var i = 0; i < length; i++) {
            result.push(characters.charAt(Math.floor(Math.random() *
                charactersLength)));
        }
        return result.join('').toLocaleUpperCase();
    },
    removeVietnameseTones(str) {
        const newStr = str.normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/đ/g, "d")
            .replace(/Đ/g, "D");
        var vn = newStr.replaceAll(" ", "-");
        vn = vn.replaceAll(",", "");
        return vn;
    }
}

export default Convert