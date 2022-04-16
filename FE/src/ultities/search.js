
export const smartphone = {
    price: {
        type: "checkbox",
        label: "KHOẢNG GIÁ",
        content: [
            {
                name: "Dưới 1Tr",
                filter: "<",
                data: "1000000"
            },
            {
                name: "1Tr ~ 2Tr",
                filter: "~",
                data: "1000000,2000000"
            },
            {
                name: "2Tr ~ 4Tr",
                filter: "~",
                data: "2000000,4000000"
            },
            {
                name: "4Tr ~ 6Tr",
                filter: "~",
                data: "4000000,6000000"
            },
            {
                name: "6Tr ~ 10Tr",
                filter: "~",
                data: "6000000,10000000"
            },
            {
                name: "10Tr ~ 15Tr",
                filter: "~",
                data: "10000000,15000000"
            },
            {
                name: "15Tr ~ 20Tr",
                filter: "~",
                data: "15000000,20000000"
            },
            {
                name: "Trên 20Tr",
                filter: ">",
                data: "20000000"
            }
        ]
    },
    baohanh: {
        type: "checkbox",
        label: "BẢO HÀNH",
        content: [
            {
                name:"24 tháng",
                filter: "*",
                data: "24"
            },
            {
                name: "18 tháng",
                filter: "*",
                data: "18"
            },
            {
                name: "15 tháng",
                filter: "*",
                data: "15"  
            },
            {
                name: "12 tháng",
                filter: "*",
                data: "12"  
            },
            {
                name: "9 tháng",
                filter: "*",
                data: "9"  
            },
            {
                name: "6 tháng",
                filter: "*",
                data: "6"  
            },
            {
                name: "3 tháng",
                filter: "*",
                data: "3"  
            },
            {
                name: "1 tháng",
                filter: "*",
                data: "1"  
            },
            {
                name: "Không bảo hành",
                filter: "*",
                data: "0"  
            },
        ]
    },
    xuatxu: {
        type: "checkbox",
        label: "XUẤT XỨ",
        content: [
            {
                name: "Việt Nam",
                filter: "*",
                data: "VN"
            },
            {
                name: "Nhật Bản",
                filter: "*",
                data: "JP" 
            },
            {
                name: "Đài Loan",
                filter: "*",
                data: "TW" 
            },
            {
                name: "HongKong",
                filter: "*",
                data: "HK" 
            },
            {
                name: "Trung Quốc",
                filter: "*",
                data: "CN" 
            },
            {
                name: "Mỹ",
                filter: "*",
                data: "US" 
            },
            {
                name: "Hàng chính hãng",
                filter: "*",
                data: "CH"
            },
            {
                name: "Hàng nhập khẩu",
                filter: "*",
                data: "NK"
            }
        ]
    },
    ram: {
        type: "checkbox",
        label: "RAM",
        content: [
            {
                name: "Dưới 1GB",
                filter: "<",
                data: "1GB"
            },
            {
                name: "1GB ~ 2GB",
                filter: "~",
                data: "1GB,2GB"
            },
            {
                name: "2GB ~ 4GB",
                filter: "~",
                data: "1GB,2GB"
            },
            {
                name: "4GB ~ 6GB",
                filter: "~",
                data: "4GB,6GB"
            },
            {
                name: "Trên 6GB",
                filter: ">",
                data: "6GB"
            },
        ]
    },
    sosim: {
        type: "checkbox",
        label: "SỐ SIM",
        content: [
            {
                name: "1 Sim",
                filter: "*",
                data: "1"
            },
            {
                name: "2 Sim",
                filter: "*",
                data: "2"
            },
        ]
    }
}
