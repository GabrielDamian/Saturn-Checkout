
//TODO: add master checker for 'products' global object to prevent deprecated format (medata and products)
export const products = {
    femei:{
        metadata:{
            name: "Femei",
            link: "femei",
            
            type: {
                "tricou": ["model","marime"],
                "papuci": ["model", "inaltime"]
            },
        },  
        products:[
            {
                id: 'price_1M3gg8CLryJM3oFk1HLgAxox',
                type: "tricou",
                model: "cu maneci",
                marime: "XL",

                name: "Tricou Adidas Original",
                pret: 87.00,
                
            },
            {
                id: 'price_1M3ggnCLryJM3oFktgGRI74X',
                type: "papuci",
                model: "cu talpa",
                inaltime: "2",

                name: "Adidasi Puma",
                pret: 55.00
            }
        ]
        
    }
}