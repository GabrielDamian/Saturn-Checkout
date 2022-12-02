

export const filterProducts = (productParam, category)=>{
    let filtered = []
    productParam.forEach((el)=>{
        if(el.category == category)
        {
            filtered.push(el)
        }
    })
    return filtered
}

export let products = [
    {
      id: 1,
      title: 'CASEROLA PP NEGRA1 COMP. + CAPAC',
      header: 'Cod Produs: 205106',
      price: {
        first: 0,
        second: 85
      },
      category: 'caserole',
      img: '/media/products/image-001.jpg',
      specificatii:[
        ['Pret + TVA','1.0115 RON'],
        ['Bucati in set','50'],
        ['Bucati in cutie','200'],
      ]
    },
    {
      id: 2,
      title: 'CASEROLA PP NEGRA2 COMP. + CAPAC',
      header: 'Cod Produs: 205067',
      price: {
        first: 0,
        second: 85
      },
      category: 'caserole',
      img: '/media/products/image-002.jpg',
      specificatii:[
        ['Pret + TVA','1.0115 RON'],
        ['Bucati in set','50'],
        ['Bucati in cutie','200'],
      ]
  
    },
    {
      id: 3,
      title: 'CASEROLA PP NEGRA3 COMP. + CAPAC',
      header: 'Cod Produs: 205044',
      price: {
        first: 0,
        second: 85
      },
      category: 'caserole',
      img: '/media/products/image-003.jpg',
      specificatii:[
        ['Pret + TVA','1.0115 RON'],
        ['Bucati in set','50'],
        ['Bucati in cutie','200'],
      ]
    },
    {
      id: 4,
      title: '500ML PP SALAD BOLNEGRU + CAPAC',
      header: 'Cod Produs: 205276',
      price: {
        first: 0,
        second: 75
      },
      category: 'caserole',
      img: '/media/products/image-004.jpg',
      specificatii:[
        ['Pret + TVA','1.0115 RON'],
        ['Bucati in set','50'],
        ['Bucati in cutie','200'],
      ]
    },
    {
      id: 5,
      title: '750ML PP SALAD BOLNEGRU + CAPAC ',
      header: 'Cod Produs: 205276',
      price: {
        first: 0,
        second: 81
      },
      category: 'caserole',
      img: '/media/products/image-005.jpg',
      specificatii:[
        ['Pret + TVA','0.9639 RON'],
        ['Bucati in set','70'],
        ['Bucati in cutie','280'],
      ]
    },
    {
      id: 6,
      title: '1000ML PP SALADBOL NEGRU + CAPAC',
      header: 'Cod Produs: 205276',
      price: {
        first: 0,
        second: 83
      },
      category: 'caserole',
      img: '/media/products/image-006.jpg',
      specificatii:[
        ['Pret + TVA','0.9877 RON'],
        ['Bucati in set','70'],
        ['Bucati in cutie','280'],
      ]
    },
    {
      id: 7,
      title: '750ML BOL SALATAPET PATRAT + CAPAC',
      header: 'Cod Produs: 205276',
      price: {
        first: 0,
        second: 82
      },
      category: 'caserole',
      img: '/media/products/image-007.jpg',
      specificatii:[
        ['Pret + TVA','0.9758 RON'],
        ['Bucati in set','50'],
        ['Bucati in cutie','300'],
      ]
    },
    {
      id: 8,
      title: '500ML PP SALAD BOLNEGRU FARA CAPAC',
      header: 'Cod Produs: 205276',
      price: {
        first: 0,
        second: 55
      },
      category: 'caserole',
      img: '/media/products/image-008.jpg',
      specificatii:[
        ['Pret + TVA','0.6545 RON'],
        ['Bucati in set','70'],
        ['Bucati in cutie','280'],
      ]
    },
    {
      id: 9,
      title: '750ML PP SALAD BOLNEGRU FARA CAPAC',
      header: 'Cod Produs: 205276',
      price: {
        first: 0,
        second: 65
      },
      category: 'caserole',
      img: '/media/products/image-009.jpg',
      specificatii:[
        ['Pret + TVA','0.7735 RON'],
        ['Bucati in set','70'],
        ['Bucati in cutie','280'],
      ]
    },
    {
      id: 10,
      title: '1000ML PP SALAD BOL NEGRU FARA CAPAC',
      header: 'Cod Produs: 205276',
      price: {
        first: 0,
        second: 73
      },
      category: 'caserole',
      img: '/media/products/image-010.jpg',
      specificatii:[
        ['Pret + TVA','0.8687 RON'],
        ['Bucati in set','70'],
        ['Bucati in cutie','280'],
      ]
    },
    {
      id: 11,
      title: 'CASEROLA SUSHI500CC',
      header: 'Cod Produs: 205276',
      price: {
        first: 29,
        second: 50
      },
      category: 'caserole',
      img: '/media/products/image-011.jpg',
      specificatii:[
        ['Pret + TVA','35.105 RON'],
        ['Bucati in set','50'],
        ['Bucati in cutie','1000'],
      ]
    },
    {
      id: 12,
      title: 'CASEROLA SUSHI 800CC',
      header: 'Cod Produs: 205276',
      price: {
        first: 32,
        second: 60
      },
      category: 'caserole',
      img: '/media/products/image-012.jpg',
      specificatii:[
        ['Pret + TVA','38.794 RON'],
        ['Bucati in set','50'],
        ['Bucati in cutie','750'],
      ]
    },
    {
      id: 13,
      title: 'CASEROLA PP 500ML + CAPAC ',
      header: 'Cod Produs: 205276',
      price: {
        first: 0,
        second: 6
      },
      category: 'caserole',
      img: '/media/products/image-013.jpg',
      specificatii:[
        ['Pret + TVA','0.714 RON'],
        ['Bucati in set','50'],
        ['Bucati in cutie','500'],
      ]
    },
    {
      id: 14,
      title: 'CASEROLA PP 750ML + CAPAC ',
      header: 'Cod Produs: 205276',
      price: {
        first: 0,
        second: 66
      },
      category: 'caserole',
      img: '/media/products/image-014.jpg',
      specificatii:[
        ['Pret + TVA','0.786 RON'],
        ['Bucati in set','50'],
        ['Bucati in cutie','500'],
      ]
    },
    {
      id: 15,
      title: 'CASEROLA PP 1000ML + CAPAC ',
      header: 'Cod Produs: 205276',
      price: {
        first: 0,
        second: 68
      },
      category: 'caserole',
      img: '/media/products/image-015.jpg',
      specificatii:[
        ['Pret + TVA','0.8092 RON'],
        ['Bucati in set','50'],
        ['Bucati in cutie','500'],
      ]
    },
    {
      id: 16,
      title: 'BOL DE SUPA PP 360 ML',
      header: 'Cod Produs: 205276',
      price: {
        first: 0,
        second: 568
      },
      category: 'caserole',
      img: '/media/products/image-016.jpg',
      specificatii:[
        ['Pret + TVA','0.676 RON'],
        ['Bucati in set','50'],
        ['Bucati in cutie','450'],
      ]
    },
    {
      id: 17,
      title: 'BOL DE SUPA PP 460 ML',
      header: 'Cod Produs: 205276',
      price: {
        first: 0,
        second: 604
      },
      category: 'caserole',
      img: '/media/products/image-017.jpg',
      specificatii:[
        ['Pret + TVA','0.714 RON'],
        ['Bucati in set','50'],
        ['Bucati in cutie','450'],
      ]
    },
    {
      id: 18,
      title: 'BOL DE SUPA PP 560 ML',
      header: 'Cod Produs: 205276',
      price: {
        first: 0,
        second: 635
      },
      category: 'caserole',
      img: '/media/products/image-018.jpg',
      specificatii:[
        ['Pret + TVA','0.756 RON'],
        ['Bucati in set','50'],
        ['Bucati in cutie','450'],
      ]
    },
    {
      id: 19,
      title: 'BOL DE SUPA PP 680 ML',
      header: 'Cod Produs: 205276',
      price: {
        first: 0,
        second: 695
      },
      category: 'caserole',
      img: '/media/products/image-019.jpg',
      specificatii:[
        ['Pret + TVA','0.827 RON'],
        ['Bucati in set','50'],
        ['Bucati in cutie','450'],
      ]
    },
    {
      id: 20,
      title: 'BOL PP NEGRU 350ml TERMOSUDARE',
      header: 'Cod Produs: 205276',
      price: {
        first: 0,
        second: 33
      },
      category: 'caserole',
      img: '/media/products/image-020.jpg',
      specificatii:[
        ['Pret + TVA','0.3927 RON'],
        ['Bucati in set',' '],
        ['Bucati in cutie','500'],
      ]
    },
    {
      id: 21,
      title: 'CASEROLA PP 1 COMPARTIMANT TERMOSUDARE MB1-50',
      header: 'Cod Produs: 205276',
      price: {
        first: 0,
        second: 42
      },
      category: 'caserole',
      img: '/media/products/image-021.jpg',
      specificatii:[
        ['Pret + TVA','0.5 RON'],
        ['Bucati in set','50'],
        ['Bucati in cutie','400'],
      ]
    },
    {
      id: 22,
      title: 'CASEROLA PP 2 COMPARTIMANTA TERMOSUDARE 24G',
      header: 'Cod Produs: 205276',
      price: {
        first: 0,
        second: 45
      },
      category: 'caserole',
      img: '/media/products/image-022.jpg',
      specificatii:[
        ['Pret + TVA','0.5355 RON'],
        ['Bucati in set','100'],
        ['Bucati in cutie','400'],
      ]
    },
    {
      id: 23,
      title: 'CASEROLA PP 3 COMPARTIMANTA TERMOSUDARE MB3-50',
      header: 'Cod Produs: 205276',
      price: {
        first: 0,
        second: 42
      },
      category: 'caserole',
      img: '/media/products/image-023.jpg',
      specificatii:[
        ['Pret + TVA','0.5 RON'],
        ['Bucati in set','50'],
        ['Bucati in cutie','400'],
      ]
    },
    {
      id: 24,
      title: 'MASINA TERMOSUDARE',
      header: 'Cod Produs: 205276',
      price: {
        first: 2450,
        second: 0
      },
      category: 'caserole',
      img: '/media/products/image-024.jpg',
      specificatii:[
        ['Pret + TVA','2,915.5 RON'],
        ['Bucati in set',' '],
        ['Bucati in cutie','1'],
      ]
    },
    {
      id: 25,
      title: 'MATRITA PENTRU MASINA TERMOSUDARE',
      header: 'Cod Produs: 205276',
      price: {
        first: 325,
        second: 0
      },
      category: 'caserole',
      img: '/media/products/image-024.jpg',
      specificatii:[
        ['Pret + TVA','386.75 RON'],
        ['Bucati in set','1'],
        ['Bucati in cutie',' '],
      ]
    },
    {
      id: 26,
      title: 'FOLIE TERMOSUDARE EASY PEEL 190 MM*200M',
      header: 'Cod Produs: 205276',
      price: {
        first: 89,
        second: 33
      },
      category: 'caserole',
      img: '/media/products/image-025.jpg',
      specificatii:[
        ['Pret + TVA','105.91 RON'],
        ['Bucati in set',' '],
        ['Bucati in cutie',' '],
      ]
    },
    {
      id: 27,
      title: 'DONNER BOX 16 OZ',
      header: 'Cod Produs: 205276',
      price: {
        first: 0,
        second: 44
      },
      category: 'caserole',
      img: '/media/products/image-026.jpg',
      specificatii:[
        ['Pret + TVA','0.5236 RON'],
        ['Bucati in set','50'],
        ['Bucati in cutie','500'],
      ]
    },
    {
      id: 28,
      title: 'DONNER BOX 26 OZ',
      header: 'Cod Produs: 205276',
      price: {
        first: 0,
        second: 59
      },
      category: 'caserole',
      img: '/media/products/image-027.jpg',
      specificatii:[
        ['Pret + TVA','0.7021 RON'],
        ['Bucati in set','50'],
        ['Bucati in cutie','500'],
      ]
    },
    {
      id: 29,
      title: '16 OZ BOL DE SUPA DIN HARTIE + CAPAC',
      header: 'Cod Produs: 205276',
      price: {
        first: 0,
        second: 4418
      },
      category: 'caserole',
      img: '/media/products/image-028.jpg',
      specificatii:[
        ['Pret + TVA','0.5258 RON'],
        ['Bucati in set','25'],
        ['Bucati in cutie','500'],
      ]
    },
    {
      id: 30,
      title: '26 OZ (750ml) BOL SALATA CRAFT + CAPAC PET',
      header: 'Cod Produs: 205276',
      price: {
        first: 0,
        second: 65
      },
      category: 'caserole',
      img: '/media/products/image-029.jpg',
      specificatii:[
        ['Pret + TVA','0.7735 RON'],
        ['Bucati in set','50'],
        ['Bucati in cutie','300'],
      ]
    },
    {
      id: 31,
      title: 'FARFURII BIO DESERT 17 CM',
      header: 'Cod Produs: 205276',
      price: {
        first: 12,
        second: 8
      },
      category: 'farfuriiBio',
      img: '/media/products/image-030.jpg',
      specificatii:[
        ['Pret + TVA','15.232 RON'],
        ['Bucati in set','50'],
        ['Bucati in cutie','1000'],
      ]
    },
    {
      id: 32,
      title: 'FARFURII BIO 23 CM',
      header: 'Cod Produs: 205276',
      price: {
        first: 19,
        second: 8
      },
      category: 'farfuriiBio',
      img: '/media/products/image-031.jpg',
      specificatii:[
        ['Pret + TVA','23.562 RON'],
        ['Bucati in set','50'],
        ['Bucati in cutie','500'],
      ]
    },
    {
      id: 33,
      title: 'FARFURII BIO 23 CM 2 COMPARTIMENTA',
      header: 'Cod Produs: 205276',
      price: {
        first: 19,
        second: 8
      },
      category: 'farfuriiBio',
      img: '/media/products/image-032.jpg',
      specificatii:[
        ['Pret + TVA','23.562 RON'],
        ['Bucati in set','50'],
        ['Bucati in cutie','500'],
      ]
    },
    {
      id: 34,
      title: 'FARFURII BIO 26 CM 3 COMPARIMENTA',
      header: 'Cod Produs: 205276',
      price: {
        first: 27,
        second: 0
      },
      category: 'farfuriiBio',
      img: '/media/products/image-033.jpg',
      specificatii:[
        ['Pret + TVA','32.13 RON'],
        ['Bucati in set','50'],
        ['Bucati in cutie','500'],
      ]
    },
    {
      id: 35,
      title: 'FARFURII BIO ROTUND 26 CM',
      header: 'Cod Produs: 205276',
      price: {
        first: 27,
        second: 0
      },
      category: 'farfuriiBio',
      img: '/media/products/image-034.jpg',
      specificatii:[
        ['Pret + TVA','32.13 RON'],
        ['Bucati in set','50'],
        ['Bucati in cutie','500'],
      ]
    },
    {
      id: 36,
      title: 'FARFURII BIO OVALE 26CM',
      header: 'Cod Produs: 205276',
      price: {
        first: 24,
        second: 5
      },
      category: 'farfuriiBio',
      img: '/media/products/image-035.jpg',
      specificatii:[
        ['Pret + TVA','29.155 RON'],
        ['Bucati in set','50'],
        ['Bucati in cutie','500'],
      ]
    },
    {
      id: 37,
      title: 'MENU BIO HAMBURGER H6',
      header: 'Cod Produs: 205276',
      price: {
        first: 0,
        second: 64
      },
      category: 'caserole',
      img: '/media/products/image-036.jpg',
      specificatii:[
        ['Pret + TVA','0.762 RON'],
        ['Bucati in set','50'],
        ['Bucati in cutie','500'],
      ]
    },
    {
      id: 38,
      title: 'MENIU BIO HAMBURGER H9',
      header: 'Cod Produs: 205276',
      price: {
        first: 0,
        second: 70
      },
      category: 'caserole',
      img: '/media/products/image-037.jpg',
      specificatii:[
        ['Pret + TVA','0.833 RON'],
        ['Bucati in set','50'],
        ['Bucati in cutie','500'],
      ]
    },
    {
      id: 39,
      title: 'MENIU HAMBURGER H10',
      header: 'Cod Produs: 205276',
      price: {
        first: 0,
        second: 813
      },
      category: 'caserole',
      img: '/media/products/image-038.jpg',
      specificatii:[
        ['Pret + TVA','0.968 RON'],
        ['Bucati in set','50'],
        ['Bucati in cutie','500'],
      ]
    },
    {
      id: 40,
      title: 'MENIU BIO 1 COMP B034',
      header: 'Cod Produs: 205276',
      price: {
        first: 0,
        second: 813
      },
      category: 'caserole',
      img: '/media/products/image-039.jpg',
      specificatii:[
        ['Pret + TVA','0.968 RON'],
        ['Bucati in set','50'],
        ['Bucati in cutie','500'],
      ]
    },
    {
      id: 41,
      title: 'MENIU BIO 2 COMPB002',
      header: 'Cod Produs: 205276',
      price: {
        first: 0,
        second: 813
      },
      category: 'caserole',
      img: '/media/products/image-040.jpg',
      specificatii:[
        ['Pret + TVA','0.968 RON'],
        ['Bucati in set','50'],
        ['Bucati in cutie','500'],
      ]
    },
    {
      id: 42,
      title: 'MENIU BIO 3 COMP B031 ',
      header: 'Cod Produs: 205276',
      price: {
        first: 0,
        second: 823
      },
      category: 'caserole',
      img: '/media/products/image-041.jpg',
      specificatii:[
        ['Pret + TVA','0.98 RON'],
        ['Bucati in set','50'],
        ['Bucati in cutie','500'],
      ]
    },
    {
      id: 43,
      title: 'MENU SPUMA 1HAM',
      header: 'Cod Produs: 205276',
      price: {
        first: 0,
        second: 313
      },
      category: 'caserole',
      img: '/media/products/image-042.jpg',
      specificatii:[
        ['Pret + TVA','0.373 RON'],
        ['Bucati in set','100'],
        ['Bucati in cutie',' '],
      ]
    },
    {
      id: 44,
      title: 'MENU SPUMA 3HAM ',
      header: 'Cod Produs: 205276',
      price: {
        first: 0,
        second: 4
      },
      category: 'caserole',
      img: '/media/products/image-043.jpg',
      specificatii:[
        ['Pret + TVA','0.476 RON'],
        ['Bucati in set','100'],
        ['Bucati in cutie',' '],
      ]
    },
    {
      id: 45,
      title: 'CASEROLA SPUMA 1 COMP ',
      header: 'Cod Produs: 205276',
      price: {
        first: 0,
        second: 505
      },
      category: 'caserole',
      img: '/media/products/image-044.jpg',
      specificatii:[
        ['Pret + TVA','0.6 RON'],
        ['Bucati in set','100'],
        ['Bucati in cutie','200'],
      ]
    },
    {
      id: 46,
      title: 'CASEROLA SPUMA 2 COMP',
      header: 'Cod Produs: 205276',
      price: {
        first: 0,
        second: 505
      },
      category: 'farfuriiBio',
      img: '/media/products/image-045.jpg',
      specificatii:[
        ['Pret + TVA','0.6 RON'],
        ['Bucati in set','100'],
        ['Bucati in cutie','200'],
      ]
    },
    {
      id: 47,
      title: 'CASEROLA SPUMA 3 COMP ',
      header: 'Cod Produs: 205276',
      price: {
        first: 0,
        second: 505
      },
      category: 'farfuriiBio',
      img: '/media/products/image-046.jpg',
      specificatii:[
        ['Pret + TVA','0.6 RON'],
        ['Bucati in set','100'],
        ['Bucati in cutie','200'],
      ]
    },
    {
      id: 48,
      title: 'TAVITE SPUMA 200*140*30 2785 ',
      header: 'Cod Produs: 205276',
      price: {
        first: 0,
        second: 15
      },
      category: 'farfuriiBio',
      img: '/media/products/image-047.jpg',
      specificatii:[
        ['Pret + TVA','0.179 RON'],
        ['Bucati in set','100'],
        ['Bucati in cutie','250'],
      ]
    },
    {
      id: 49,
      title: 'TAVITE SPUMA 225*135*25 PT3/25 ',
      header: 'Cod Produs: 205276',
      price: {
        first: 0,
        second: 16
      },
      category: 'farfuriiBio',
      img: '/media/products/image-048.jpg',
      specificatii:[
        ['Pret + TVA','0.191 RON'],
        ['Bucati in set','500'],
        ['Bucati in cutie','500'],
      ]
    },
    {
      id: 50,
      title: 'TAVITE SPUMA 223*13.8*40 2734',
      header: 'Cod Produs: 205276',
      price: {
        first: 0,
        second: 225
      },
      category: 'farfuriiBio',
      img: '/media/products/image-049.jpg',
      specificatii:[
        ['Pret + TVA','0.268 RON'],
        ['Bucati in set','100'],
        ['Bucati in cutie','250'],
      ]
    },
    {
      id: 51,
      title: 'TAVITE SPUMA 240*150*42 2238',
      header: 'Cod Produs: 205276',
      price: {
        first: 0,
        second: 33
      },
      category: 'farfuriiBio',
      img: '/media/products/image-050.jpg',
      specificatii:[
        ['Pret + TVA','0.393 RON'],
        ['Bucati in set','100'],
        ['Bucati in cutie','250'],
      ]
    },
    {
      id: 52,
      title: 'TAVITE SPUMA 278*176*45 2446N',
      header: 'Cod Produs: 205276',
      price: {
        first: 0,
        second: 365
      },
      category: 'farfuriiBio',
      img: '/media/products/image-051.jpg',
      specificatii:[
        ['Pret + TVA','0.435 RON'],
        ['Bucati in set','100'],
        ['Bucati in cutie','250'],
      ]
    },
    {
      id: 53,
      title: 'TAVITE SPUMAPT4 ',
      header: 'Cod Produs: 205276',
      price: {
        first: 0,
        second: 3
      },
      category: 'farfuriiBio',
      img: '/media/products/image-052.jpg',
      specificatii:[
        ['Pret + TVA','0.357 RON'],
        ['Bucati in set','250'],
        ['Bucati in cutie','250'],
      ]
    },
    {
      id: 54,
      title: 'TAVITE SPUMA 290*220*35 MT12',
      header: 'Cod Produs: 205276',
      price: {
        first: 0,
        second: 39
      },
      category: 'farfuriiBio',
      img: '/media/products/image-053.jpg',
      specificatii:[
        ['Pret + TVA','0.465 RON'],
        ['Bucati in set','200'],
        ['Bucati in cutie','250'],
      ]
    },
    {
      id: 55,
      title: 'TAVITE SPUMA 284*228*28 2450',
      header: 'Cod Produs: 205276',
      price: {
        first: 0,
        second: 442
      },
      category: 'farfuriiBio',
      img: '/media/products/image-054.jpg',
      specificatii:[
        ['Pret + TVA','0.526 RON'],
        ['Bucati in set','100'],
        ['Bucati in cutie','250'],
      ]
    },
    {
      id: 56,
      title: 'TAVITE SPUMA 26.8*18*31 2800',
      header: 'Cod Produs: 205276',
      price: {
        first: 0,
        second: 365
      },
      category: 'farfuriiBio',
      img: '/media/products/image-055.jpg',
      specificatii:[
        ['Pret + TVA','0.435 RON'],
        ['Bucati in set','100'],
        ['Bucati in cutie','250'],
      ]
    },
    {
      id: 57,
      title: 'TAVITE SPUMA 290*210*42 2264N',
      header: 'Cod Produs: 205276',
      price: {
        first: 0,
        second: 47
      },
      category: 'farfuriiBio',
      img: '/media/products/image-056.jpg',
      specificatii:[
        ['Pret + TVA','0.56 RON'],
        ['Bucati in set','100'],
        ['Bucati in cutie','250'],
      ]
    },
    {
      id: 58,
      title: 'CASEROLA ALUMINIUM 520 + CAPAC',
      header: 'Cod Produs: 205276',
      price: {
        first: 0,
        second: 371
      },
      category: 'caserole',
      img: '/media/products/image-057.jpg',
      specificatii:[
        ['Pret + TVA','0.442 RON'],
        ['Bucati in set','100'],
        ['Bucati in cutie','1000'],
      ]
    },
    {
      id: 59,
      title: 'CASEROLA ALUMINIUM 901 + CAPAC',
      header: 'Cod Produs: 205276',
      price: {
        first: 0,
        second: 79
      },
      category: 'caserole',
      img: '/media/products/image-058.jpg',
      specificatii:[
        ['Pret + TVA','0.9401 RON'],
        ['Bucati in set','100'],
        ['Bucati in cutie','1000'],
      ]
    },
    {
      id: 60,
      title: 'CASEROLA ALUMINIUM S729',
      header: 'Cod Produs: 205276',
      price: {
        first: 0,
        second: 55
      },
      category: 'caserole',
      img: '/media/products/image-059.jpg',
      specificatii:[
        ['Pret + TVA','0.655 RON'],
        ['Bucati in set','100'],
        ['Bucati in cutie','1000'],
      ]
    },
    {
      id: 61,
      title: 'TAVA ALUMINIUM S164',
      header: 'Cod Produs: 205276',
      price: {
        first: 1,
        second: '05'
      },
      category: 'caserole',
      img: '/media/products/image-060.jpg',
      specificatii:[
        ['Pret + TVA','1.25 RON'],
        ['Bucati in set','100'],
        ['Bucati in cutie','1000'],
      ]
    },
    {
      id: 62,
      title: 'TAVA ALUMINIUM S931',
      header: 'Cod Produs: 205276',
      price: {
        first: 1,
        second: 23
      },
      category: 'caserole',
      img: '/media/products/image-062.jpg',
      specificatii:[
        ['Pret + TVA','1.464 RON'],
        ['Bucati in set','100'],
        ['Bucati in cutie','1000'],
      ]
    },
    {
      id: 63,
      title: 'TAVA ALUMINIUM S910',
      header: 'Cod Produs: 205276',
      price: {
        first: 1,
        second: 12
      },
      category: 'caserole',
      img: '/media/products/image-063.jpg',
      specificatii:[
        ['Pret + TVA','2.523 RON'],
        ['Bucati in set','100'],
        ['Bucati in cutie','1000'],
      ]
    },
    {
      id: 64,
      title: 'CASEROLA ALUMINIUM 2 COMP. S680 + CAPAC',
      header: 'Cod Produs: 205276',
      price: {
        first: 0,
        second: 72
      },
      category: 'caserole',
      img: '/media/products/image-064.jpg',
      specificatii:[
        ['Pret + TVA','0.8568 RON'],
        ['Bucati in set','100'],
        ['Bucati in cutie','1000'],
      ]
    },
    {
      id: 65,
      title: 'TAVITE CARTON T2',
      header: 'Cod Produs: 205276',
      price: {
        first: 7,
        second: 395
      },
      category: 'farfuriiCarton',
      img: '/media/products/image-065.jpg',
      specificatii:[
        ['Pret + TVA','8.8001 RON'],
        ['Bucati in set','100'],
        ['Bucati in cutie','1000'],
      ]
    },
    {
      id: 66,
      title: 'TAVITE CARTON T4',
      header: 'Cod Produs: 205276',
      price: {
        first: 9,
        second: '0625'
      },
      category: 'farfuriiCarton',
      img: '/media/products/image-066.jpg',
      specificatii:[
        ['Pret + TVA','10.7844 RON'],
        ['Bucati in set','100'],
        ['Bucati in cutie','1000'],
      ]
    },
    {
      id: 67,
      title: 'TAVITE CARTON T6',
      header: 'Cod Produs: 205276',
      price: {
        first: 12,
        second: '035'
      },
      category: 'farfuriiCarton',
      img: '/media/products/image-067.jpg',
      specificatii:[
        ['Pret + TVA','14.3217 RON'],
        ['Bucati in set','100'],
        ['Bucati in cutie','1000'],
      ]
    },
    {
      id: 68,
      title: 'TAVITE CARTON T8',
      header: 'Cod Produs: 205276',
      price: {
        first: 14,
        second: 355
      },
      category: 'farfuriiCarton',
      img: '/media/products/image-068.jpg',
      specificatii:[
        ['Pret + TVA','17.0825 RON'],
        ['Bucati in set','100'],
        ['Bucati in cutie','1000'],
      ]
    },
    {
      id: 69,
      title: 'TAVITE CARTON T10',
      header: 'Cod Produs: 205276',
      price: {
        first: 23,
        second: 925
      },
      category: 'farfuriiCarton',
      img: '/media/products/image-069.jpg',
      specificatii:[
        ['Pret + TVA','28.4708 RON'],
        ['Bucati in set','100'],
        ['Bucati in cutie','1000'],
      ]
    },
    {
      id: 70,
      title: 'TAVITE CARTON T12',
      header: 'Cod Produs: 205276',
      price: {
        first: 52,
        second: 2
      },
      category: 'farfuriiCarton',
      img: '/media/products/image-070.jpg',
      specificatii:[
        ['Pret + TVA','62.118 RON'],
        ['Bucati in set','100'],
        ['Bucati in cutie','1000'],
      ]
    },
    {
      id: 71,
      title: 'CUTII PIZZA MARO 28CM',
      header: 'Cod Produs: 205276',
      price: {
        first: 0,
        second: 857
      },
      category: 'farfuriiCarton',
      img: '/media/products/image-071.jpg',
      specificatii:[
        ['Pret + TVA','1.020 RON'],
        ['Bucati in set','100'],
        ['Bucati in cutie','1000'],
      ]
    },
    {
      id: 72,
      title: 'CUTII PIZZA MARO 32CM',
      header: 'Cod Produs: 205276',
      price: {
        first: 0,
        second: 963
      },
      category: 'farfuriiCarton',
      img: '/media/products/image-072.jpg',
      specificatii:[
        ['Pret + TVA','1.146 RON'],
        ['Bucati in set','100'],
        ['Bucati in cutie','1000'],
      ]
    },
    {
      id: 73,
      title: 'CUTII PIZZA ALB 32CM',
      header: 'Cod Produs: 205276',
      price: {
        first: 0,
        second: 963
      },
      category: 'farfuriiCarton',
      img: '/media/products/image-073.jpg',
      specificatii:[
        ['Pret + TVA','1.146 RON'],
        ['Bucati in set','100'],
        ['Bucati in cutie','1000'],
      ]
    },
    {
      id: 74,
      title: 'CUTII PIZZA ALB 40CM ',
      header: 'Cod Produs: 205276',
      price: {
        first: 1,
        second: 65
      },
      category: 'farfuriiCarton',
      img: '/media/products/image-074.jpg',
      specificatii:[
        ['Pret + TVA','1.964 RON'],
        ['Bucati in set','100'],
        ['Bucati in cutie','1000'],
      ]
    },
    {
      id: 75,
      title: 'CUTII PIZZA ALB 45CM ',
      header: 'Cod Produs: 205276',
      price: {
        first: 2,
        second: 15
      },
      category: 'farfuriiCarton',
      img: '/media/products/image-075.jpg',
      specificatii:[
        ['Pret + TVA','2.559 RON'],
        ['Bucati in set','100'],
        ['Bucati in cutie','1000'],
      ]
    },
    {
      id: 76,
      title: '2 oz SOSIERA CU CAPAC',
      header: 'Cod Produs: 205276',
      price: {
        first: 0,
        second: 1363
      },
      category: 'caserole',
      img: '/media/products/image-076.jpg',
      specificatii:[
        ['Pret + TVA','0.1622 RON'],
        ['Bucati in set','100'],
        ['Bucati in cutie','1000'],
      ]
    },
    {
      id: 77,
      title: '50 ML PET SOSIERA CLAR OVAL',
      header: 'Cod Produs: 205276',
      price: {
        first: 0,
        second: '095'
      },
      category: 'caserole',
      img: '/media/products/image-077.jpg',
      specificatii:[
        ['Pret + TVA','0.1131 RON'],
        ['Bucati in set','100'],
        ['Bucati in cutie','1000'],
      ]
    },
    {
      id: 78,
      title: 'BOL PP ROTUND 250- 275 + CAPAC PENTRU HUMMUS',
      header: 'Cod Produs: 205276',
      price: {
        first: 0,
        second: 297
      },
      category: 'caserole',
      img: '/media/products/image-078.jpg',
      specificatii:[
        ['Pret + TVA','0.3535 RON'],
        ['Bucati in set','50'],
        ['Bucati in cutie','1000'],
      ]
    },
    {
      id: 79,
      title: 'PET CASEROLA DREPTUNGH CU CAPAC 150ml',
      header: 'Cod Produs: 205276',
      price: {
        first: 0,
        second: 11
      },
      category: 'caserole',
      img: '/media/products/image-079.jpg',
      specificatii:[
        ['Pret + TVA','0.1309 RON'],
        ['Bucati in set','100'],
        ['Bucati in cutie','700'],
      ]
    },
    {
      id: 80,
      title: 'PET CASEROLA DREPTUNGH CU CAPAC 250ml ',
      header: 'Cod Produs: 205276',
      price: {
        first: 0,
        second: 1261
      },
      category: 'caserole',
      img: '/media/products/image-080.jpg',
      specificatii:[
        ['Pret + TVA','0.1501 RON'],
        ['Bucati in set','100'],
        ['Bucati in cutie','700/1000'],
      ]
    },
    {
      id: 81,
      title: 'PET CASEROLA DRESPTUNGH CU CAPAC 375ml',
      header: 'Cod Produs: 205276',
      price: {
        first: 0,
        second: 155
      },
      category: 'caserole',
      img: '/media/products/image-081.jpg',
      specificatii:[
        ['Pret + TVA','0.1845 RON'],
        ['Bucati in set','100'],
        ['Bucati in cutie','700'],
      ]
    },
    {
      id: 82,
      title: 'PET CASEROLA DREPTUNGH CU CAPAC 500ml',
      header: 'Cod Produs: 205276',
      price: {
        first: 0,
        second: 211
      },
      category: 'caserole',
      img: '/media/products/image-082.jpg',
      specificatii:[
        ['Pret + TVA','0.2511 RON'],
        ['Bucati in set','100'],
        ['Bucati in cutie','600/1000'],
      ]
    },
    {
      id: 83,
      title: 'PET CASEROLA DREPTUNGH CU CAPAC 750ml ',
      header: 'Cod Produs: 205276',
      price: {
        first: 0,
        second: 30
      },
      category: 'caserole',
      img: '/media/products/image-083.jpg',
      specificatii:[
        ['Pret + TVA','0.3570 RON'],
        ['Bucati in set','100'],
        ['Bucati in cutie','400'],
      ]
    },
    {
      id: 84,
      title: 'PET CASEROLA DREPTUNGH CU CAPAC 1000ml',
      header: 'Cod Produs: 205276',
      price: {
        first: 0,
        second: 38
      },
      category: 'caserole',
      img: '/media/products/image-084.jpg',
      specificatii:[
        ['Pret + TVA','0.4522 RON'],
        ['Bucati in set','100'],
        ['Bucati in cutie','400'],
      ]
    },
    {
      id: 85,
      title: 'PET DREPTUNGH CU CAPAC 1500ml',
      header: 'Cod Produs: 205276',
      price: {
        first: 0,
        second: 47
      },
      category: 'caserole',
      img: '/media/products/image-085.jpg',
      specificatii:[
        ['Pret + TVA','0.5593 RON'],
        ['Bucati in set','100'],
        ['Bucati in cutie','400'],
      ]
    },
    {
      id: 86,
      title: 'FURCULITA WPCBIO',
      header: 'Cod Produs: 205276',
      price: {
        first: 0,
        second: 17
      },
      category: 'diverse',
      img: '/media/products/image-086.jpg',
      specificatii:[
        ['Pret + TVA','0.2023 RON'],
        ['Bucati in set','100'],
        ['Bucati in cutie','2000'],
      ]
    },
    {
      id: 87,
      title: 'CUTIT WPC BIO',
      header: 'Cod Produs: 205276',
      price: {
        first: 0,
        second: 17
      },
      category: 'diverse',
      img: '/media/products/image-087.jpg',
      specificatii:[
        ['Pret + TVA','0.2023 RON'],
        ['Bucati in set','100'],
        ['Bucati in cutie','2000'],
      ]
    },
    {
      id: 88,
      title: 'CUTIT WPC BIO',
      header: 'Cod Produs: 205276',
      price: {
        first: 0,
        second: 18
      },
      category: 'diverse',
      img: '/media/products/image-088.jpg',
      specificatii:[
        ['Pret + TVA','0.2142 RON'],
        ['Bucati in set','100'],
        ['Bucati in cutie','2000'],
      ]
    },
    {
      id: 89,
      title: 'LINGURITA DE CEAI',
      header: 'Cod Produs: 205276',
      price: {
        first: 0,
        second: 11
      },
      category: 'diverse',
      img: '/media/products/image-089.jpg',
      specificatii:[
        ['Pret + TVA','0.1309 RON'],
        ['Bucati in set','100'],
        ['Bucati in cutie','2000'],
      ]
    },
    {
      id: 90,
      title: 'FURCULITA BIO AMBALATE + SERVETEL ',
      header: 'Cod Produs: 205276',
      price: {
        first: 0,
        second: 3
      },
      category: 'diverse',
      img: '/media/products/image-090.jpg',
      specificatii:[
        ['Pret + TVA','0.357 RON'],
        ['Bucati in set','100'],
        ['Bucati in cutie','1200'],
      ]
    },
    {
      id: 91,
      title: 'FURCULITA BIO AMBALATE + SERVETEL ',
      header: 'Cod Produs: 205276',
      price: {
        first: 0,
        second: 33
      },
      category: 'diverse',
      img: '/media/products/image-091.jpg',
      specificatii:[
        ['Pret + TVA','0.393 RON'],
        ['Bucati in set','100'],
        ['Bucati in cutie','1200'],
      ]
    },
    {
      id: 92,
      title: 'FURCULITA BIO AMBALATE + SERVETEL ',
      header: 'Cod Produs: 205276',
      price: {
        first: 0,
        second: 5
      },
      category: 'diverse',
      img: '/media/products/image-092.jpg',
      specificatii:[
        ['Pret + TVA','0.595 RON'],
        ['Bucati in set','100'],
        ['Bucati in cutie','1200'],
      ]
    },
    {
      id: 93,
      title: 'TRIS BIO (FURCULITA + CUTIT + LINGURA + SERVETEL)',
      header: 'Cod Produs: 205276',
      price: {
        first: 0,
        second: 7
      },
      category: 'diverse',
      img: '/media/products/image-093.jpg',
      specificatii:[
        ['Pret + TVA','0.833 RON'],
        ['Bucati in set','100'],
        ['Bucati in cutie','1200'],
      ]
    },
    {
      id: 94,
      title: 'TACUMUR BIS LUX (CUTIT+FURCULITA+ SERVETEL)',
      header: 'Cod Produs: 205276',
      price: {
        first: 0,
        second: 37
      },
      category: 'diverse',
      img: '/media/products/image-094.jpg',
      specificatii:[
        ['Pret + TVA','0.44 RON'],
        ['Bucati in set','100'],
        ['Bucati in cutie','1200'],
      ]
    },
    {
      id: 95,
      title: 'PUNGA HARTIE PORT TACUM NATUR',
      header: 'Cod Produs: 205276',
      price: {
        first: 0,
        second: '05'
      },
      category: 'diverse',
      img: '/media/products/image-095.jpg',
      specificatii:[
        ['Pret + TVA','0.0595 RON'],
        ['Bucati in set','100'],
        ['Bucati in cutie','1200'],
      ]
    },
    {
      id: 96,
      title: 'HARTIE SHAORMA 25*35 MARO',
      header: 'Cod Produs: 205276',
      price: {
        first: '10/KG',
        second: ''
      },
      category: 'diverse',
      img: '/media/products/image-095.jpg',
      specificatii:[
        ['Pret + TVA','11.9/KG RON'],
        ['Bucati in set','-'],
        ['Bucati in cutie','5 KG'],
      ]
    },
    {
      id: 97,
      title: 'HARTIE AMBALAJ PE 25*35 SHAORMA',
      header: 'Cod Produs: 205276',
      price: {
        first: '13.26/KG',
        second: ''
      },
      category: 'diverse',
      img: '/media/products/image-097.jpg',
      specificatii:[
        ['Pret + TVA','15.7794/KG RON'],
        ['Bucati in set','-'],
        ['Bucati in cutie','5 KG'],
      ]
    },
    {
      id: 98,
      title: 'COLTARE BURGHER18*18 KEBAB',
      header: 'Cod Produs: 205276',
      price: {
        first: '22.5/KG',
        second: ''
      },
      category: 'diverse',
      img: '/media/products/image-098.jpg',
      specificatii:[
        ['Pret + TVA','26.775/KG RON'],
        ['Bucati in set','-'],
        ['Bucati in cutie','5 KG'],
      ]
    },
    {
      id: 99,
      title: 'COLTARE ALBE HDPE 20*20',
      header: 'Cod Produs: 205276',
      price: {
        first: '54',
        second: ''
      },
      category: 'diverse',
      img: '/media/products/image-099.jpg',
      specificatii:[
        ['Pret + TVA','64.26 RON'],
        ['Bucati in set','-'],
        ['Bucati in cutie','1000'],
      ]
    },
    {
      id: 100,
      title: 'MX FOLIE ALUMINIUM 1KG 395 30CM',
      header: 'Cod Produs: 205276',
      price: {
        first: '49',
        second: ''
      },
      category: 'diverse',
      img: '/media/products/image-100.jpg',
      specificatii:[
        ['Pret + TVA','58.31 RON'],
        ['Bucati in set','-'],
        ['Bucati in cutie','1000'],
      ]
    },
    {
      id: 101,
      title: 'FOLIE ALUMINIUM 1,100 KG 45CM',
      header: 'Cod Produs: 205276',
      price: {
        first: '55',
        second: ''
      },
      category: 'diverse',
      img: '/media/products/image-113.jpg',
      specificatii:[
        ['Pret + TVA','65.45 RON'],
        ['Bucati in set','1'],
        ['Bucati in cutie','4'],
      ]
    },
    {
      id: 102,
      title: 'FOLIE STRETCH 30CMX100M',
      header: 'Cod Produs: 205276',
      price: {
        first: '8',
        second: '16'
      },
      category: 'diverse',
      img: '/media/products/image-114.jpg',
      specificatii:[
        ['Pret + TVA','9.711 RON'],
        ['Bucati in set','1'],
        ['Bucati in cutie','6'],
      ]
    },
    {
      id: 103,
      title: 'FOLIE PROSPETIME 0.45X250M',
      header: 'Cod Produs: 205276',
      price: {
        first: '31',
        second: ' '
      },
      category: 'diverse',
      img: '/media/products/image-115.jpg',
      specificatii:[
        ['Pret + TVA','36.89 RON'],
        ['Bucati in set','-'],
        ['Bucati in cutie','-'],
      ]
    },
    {
      id: 104,
      title: 'FOLIE ALIMINTARE 45CM X 300M ',
      header: 'Cod Produs: 205276',
      price: {
        first: '37',
        second: ' '
      },
      category: 'diverse',
      img: '/media/products/image-117.jpg',
      specificatii:[
        ['Pret + TVA','44.03 RON'],
        ['Bucati in set','1'],
        ['Bucati in cutie','6'],
      ]
    },
    {
      id: 105,
      title: 'FRIGURIE BETE 15CM',
      header: 'Cod Produs: 205276',
      price: {
        first: '2',
        second: ' '
      },
      category: 'diverse',
      img: '/media/products/image-118.jpg',
      specificatii:[
        ['Pret + TVA','2.38 RON'],
        ['Bucati in set','80'],
        ['Bucati in cutie','-'],
      ]
    },
    {
      id: 106,
      title: '4 OZ PAHAR DIN HARTIE',
      header: 'Cod Produs: 205276',
      price: {
        first: '0',
        second: '03583'
      },
      category: 'pahare',
      img: '/media/products/image-119.jpg',
      specificatii:[
        ['Pret + TVA','0.0426 RON'],
        ['Bucati in set','50'],
        ['Bucati in cutie','3000'],
      ]
    },
    {
      id: 107,
      title: '7 OZ PAHAR DIN HARTIE',
      header: 'Cod Produs: 205276',
      price: {
        first: '0',
        second: '0471'
      },
      category: 'pahare',
      img: '/media/products/image-120.jpg',
      specificatii:[
        ['Pret + TVA','0.056 RON'],
        ['Bucati in set','50'],
        ['Bucati in cutie','3000'],
      ]
    },
    {
      id: 108,
      title: '8 OZ PAHAR DIN HARTIE',
      header: 'Cod Produs: 205276',
      price: {
        first: '0',
        second: '0757'
      },
      category: 'pahare',
      img: '/media/products/image-121.jpg',
      specificatii:[
        ['Pret + TVA','0.09 RON'],
        ['Bucati in set','50'],
        ['Bucati in cutie','1000'],
      ]
    },
    {
      id: 108,
      title: 'CAPAC NEGRU PENTRU PAHAR 7 OZ DIN HARTIE',
      header: 'Cod Produs: 205276',
      price: {
        first: '0',
        second: '055'
      },
      category: 'pahare',
      img: '/media/products/image-122.jpg',
      specificatii:[
        ['Pret + TVA','0.06545 RON'],
        ['Bucati in set','100'],
        ['Bucati in cutie','2000'],
      ]
    },
    {
      id: 109,
      title: 'CAPAC NEGRU PENTRU PAHAR 8 OZ DIN HARTIE',
      header: 'Cod Produs: 205276',
      price: {
        first: '0',
        second: '061'
      },
      category: 'pahare',
      img: '/media/products/image-123.jpg',
      specificatii:[
        ['Pret + TVA','0.07259 RON'],
        ['Bucati in set','100'],
        ['Bucati in cutie','2000'],
      ]
    },
    {
      id: 110,
      title: '7 OZ PAHAR PP CLAR (200ML)',
      header: 'Cod Produs: 205276',
      price: {
        first: '0',
        second: '06'
      },
      category: 'pahare',
      img: '/media/products/image-125.jpg',
      specificatii:[
        ['Pret + TVA','0.0714 RON'],
        ['Bucati in set','50'],
        ['Bucati in cutie','2400'],
      ]
    },
    {
      id: 111,
      title: 'PAHARE DE FRAPPE 400 ML',
      header: 'Cod Produs: 205276',
      price: {
        first: '12',
        second: '3'
      },
      category: 'pahare',
      img: '/media/products/image-126.jpg',
      specificatii:[
        ['Pret + TVA','14.637 RON'],
        ['Bucati in set','50'],
        ['Bucati in cutie','800'],
      ]
    },
    {
      id: 112,
      title: 'CAPAC PAHAR BOMBAT DE 400 ML',
      header: 'Cod Produs: 205276',
      price: {
        first: '12',
        second: '15'
      },
      category: 'pahare',
      img: '/media/products/image-127.jpg',
      specificatii:[
        ['Pret + TVA','14.4585 RON'],
        ['Bucati in set','100'],
        ['Bucati in cutie','800'],
      ]
    },
    {
      id: 113,
      title: 'PAHARE FRESH 400ML CU CAPAC BOMBAT',
      header: 'Cod Produs: 205276',
      price: {
        first: '18',
        second: '375'
      },
      category: 'pahare',
      img: '/media/products/image-128.jpg',
      specificatii:[
        ['Pret + TVA','21.8663 RON'],
        ['Bucati in set','50'],
        ['Bucati in cutie','800'],
      ]
    },
    {
      id: 114,
      title: 'PAIE BIO AMBALAT INDIVIDUAL 197*6MM',
      header: 'Cod Produs: 205276',
      price: {
        first: '39',
        second: '9'
      },
      category: 'diverse',
      img: '/media/products/image-129.jpg',
      specificatii:[
        ['Pret + TVA','47.481 RON'],
        ['Bucati in set','-'],
        ['Bucati in cutie','500'],
      ]
    },
    {
      id: 115,
      title: 'SCOBITOR AMBALAT INDIVIDUAL',
      header: 'Cod Produs: 205276',
      price: {
        first: '5',
        second: '5825'
      },
      category: 'diverse',
      img: '/media/products/image-130.jpg',
      specificatii:[
        ['Pret + TVA','6.6432 RON'],
        ['Bucati in set','1000'],
        ['Bucati in cutie','-'],
      ]
    },
    {
      id: 116,
      title: 'BONETE ALBASTRE (100BUC)',
      header: 'Cod Produs: 205276',
      price: {
        first: '13',
        second: '1'
      },
      category: 'curatenie',
      img: '/media/products/image-131.jpg',
      specificatii:[
        ['Pret + TVA','15.589 RON'],
        ['Bucati in set','100'],
        ['Bucati in cutie','-'],
      ]
    },
    {
      id: 117,
      title: 'SORTURI NYLON (100BUC)',
      header: 'Cod Produs: 205276',
      price: {
        first: '16',
        second: '32'
      },
      category: 'curatenie',
      img: '/media/products/image-133.jpg',
      specificatii:[
        ['Pret + TVA','19.4208 RON'],
        ['Bucati in set','100'],
        ['Bucati in cutie','-'],
      ]
    },
    {
      id: 118,
      title: 'REZERVA BUMBAC XL',
      header: 'Cod Produs: 205276',
      price: {
        first: '7',
        second: ''
      },
      category: 'curatenie',
      img: '/media/products/image-134.jpg',
      specificatii:[
        ['Pret + TVA','8.33 RON'],
        ['Bucati in set','1'],
        ['Bucati in cutie','40'],
      ]
    },
    {
      id: 119,
      title: 'REZERVA MOTURA ITALIANA',
      header: 'Cod Produs: 205276',
      price: {
        first: '9',
        second: ''
      },
      category: 'curatenie',
      img: '/media/products/image-135.jpg',
      specificatii:[
        ['Pret + TVA','10.71 RON'],
        ['Bucati in set','1'],
        ['Bucati in cutie','-'],
      ]
    },
    {
      id: 120,
      title: 'MANUSI DE UNICA FOLOSINTA HDPE (100BUC)',
      header: 'Cod Produs: 205276',
      price: {
        first: '2',
        second: '7'
      },
      category: 'curatenie',
      img: '/media/products/image-136.jpg',
      specificatii:[
        ['Pret + TVA','3.213 RON'],
        ['Bucati in set','100'],
        ['Bucati in cutie','-'],
      ]
    },
    {
      id: 121,
      title: 'MANUSI ALBASTRU DIN NITRIL NEPUDRATE (200BUC), MARIME M SI L',
      header: 'Cod Produs: 205276',
      price: {
        first: '45',
        second: ''
      },
      category: 'curatenie',
      img: '/media/products/image-137.jpg',
      specificatii:[
        ['Pret + TVA','53.55 RON'],
        ['Bucati in set','200'],
        ['Bucati in cutie','10'],
      ]
    },
    {
      id: 122,
      title: 'PUNGI HARTIE NATUR 22*10*28 ',
      header: 'Cod Produs: 205276',
      price: {
        first: '0',
        second: '52'
      },
      category: 'diverse',
      img: '/media/products/image-138.jpg',
      specificatii:[
        ['Pret + TVA','0.6188 RON'],
        ['Bucati in set','-'],
        ['Bucati in cutie','250'],
      ]
    },
    {
      id: 123,
      title: 'PUNGI HARTIE NATUR 26*16*28',
      header: 'Cod Produs: 205276',
      price: {
        first: '0',
        second: '5883'
      },
      category: 'diverse',
      img: '/media/products/image-139.jpg',
      specificatii:[
        ['Pret + TVA','0.7 RON'],
        ['Bucati in set','-'],
        ['Bucati in cutie','250'],
      ]
    },
    {
      id: 124,
      title: 'PUNGI HARTIE NATUR 32*17*38',
      header: 'Cod Produs: 205276',
      price: {
        first: '0',
        second: '7563'
      },
      category: 'diverse',
      img: '/media/products/image-141.jpg',
      specificatii:[
        ['Pret + TVA','0.9 RON'],
        ['Bucati in set','-'],
        ['Bucati in cutie','250'],
      ]
    },
    {
      id: 125,
      title: 'PUNGA COVRIGI 15*45*19',
      header: 'Cod Produs: 205276',
      price: {
        first: '5',
        second: '3070'
      },
      category: 'diverse',
      img: '/media/products/image-142.jpg',
      specificatii:[
        ['Pret + TVA','6.3154 RON'],
        ['Bucati in set','100'],
        ['Bucati in cutie','2000'],
      ]
    },
    {
      id: 126,
      title: 'PUNGA COVRIGI 18*8*19',
      header: 'Cod Produs: 205276',
      price: {
        first: '8',
        second: '845'
      },
      category: 'diverse',
      img: '/media/products/image-143.jpg',
      specificatii:[
        ['Pret + TVA','10.5256 RON'],
        ['Bucati in set','100'],
        ['Bucati in cutie','2000'],
      ]
    },
    {
      id: 127,
      title: 'PUNGI BIO MAIEU 3 KG',
      header: 'Cod Produs: 205276',
      price: {
        first: '0',
        second: '169'
      },
      category: 'diverse',
      img: '/media/products/image-144.jpg',
      specificatii:[
        ['Pret + TVA','0.2012 RON'],
        ['Bucati in set','50'],
        ['Bucati in cutie','500'],
      ]
    },
    {
      id: 128,
      title: 'PUNGI BIO MAIEU 5 KG',
      header: 'Cod Produs: 205276',
      price: {
        first: '0',
        second: '286'
      },
      category: 'diverse',
      img: '/media/products/image-145.jpg',
      specificatii:[
        ['Pret + TVA','0.3404 RON'],
        ['Bucati in set','50'],
        ['Bucati in cutie','500'],
      ]
    },
    {
      id: 129,
      title: 'PUNGI BIO MAIEU 7 KG',
      header: 'Cod Produs: 205276',
      price: {
        first: '0',
        second: '429'
      },
      category: 'diverse',
      img: '/media/products/image-147.jpg',
      specificatii:[
        ['Pret + TVA','0.5106 RON'],
        ['Bucati in set','50'],
        ['Bucati in cutie','500'],
      ]
    },
    {
      id: 130,
      title: 'PUNGI ALIMENTARE 2 KG',
      header: 'Cod Produs: 205276',
      price: {
        first: '4',
        second: '5'
      },
      category: 'curatenie',
      img: '/media/products/image-148.jpg',
      specificatii:[
        ['Pret + TVA','5.355 RON'],
        ['Bucati in set','1'],
        ['Bucati in cutie','50'],
      ]
    },
    {
      id: 131,
      title: 'SACI FINE 60L, 50BUC/ROLA, CULORI NEGRU, ALBASTRU, SI GALBEN',
      header: 'Cod Produs: 205276',
      price: {
        first: '5',
        second: '5'
      },
      category: 'curatenie',
      img: '/media/products/image-149.jpg',
      specificatii:[
        ['Pret + TVA','6.545 RON'],
        ['Bucati in set','-'],
        ['Bucati in cutie','-'],
      ]
    },
    {
      id: 132,
      title: 'SACI FINE 120L 10BUC/ROLA, CULORI NEGRU, ALBASTRU, SI ROSU',
      header: 'Cod Produs: 205276',
      price: {
        first: '5',
        second: '6'
      },
      category: 'curatenie',
      img: '/media/products/image-150.jpg',
      specificatii:[
        ['Pret + TVA','6.664 RON'],
        ['Bucati in set','-'],
        ['Bucati in cutie','20'],
      ]
    },
    {
      id: 133,
      title: 'SERVETELE FINE DE MASA 24X24, 100BUC',
      header: 'Cod Produs: 205276',
      price: {
        first: '2',
        second: '2'
      },
      category: 'diverse',
      img: '/media/products/image-151.jpg',
      specificatii:[
        ['Pret + TVA','2.618 RON'],
        ['Bucati in set','-'],
        ['Bucati in cutie','50'],
      ]
    },
    {
      id: 134,
      title: 'SERVETELE 33X33',
      header: 'Cod Produs: 205276',
      price: {
        first: '4',
        second: '97'
      },
      category: 'diverse',
      img: '/media/products/image-152.jpg',
      specificatii:[
        ['Pret + TVA','5.9143 RON'],
        ['Bucati in set','100'],
        ['Bucati in cutie','16'],
      ]
    },
    {
      id: 135,
      title: 'SERVETELE DE CATERING/DISPENSER 21X17.5 250BUC',
      header: 'Cod Produs: 205276',
      price: {
        first: '2',
        second: '8'
      },
      category: 'diverse',
      img: '/media/products/image-153.jpg',
      specificatii:[
        ['Pret + TVA','3.332 RON'],
        ['Bucati in set','-'],
        ['Bucati in cutie','30'],
      ]
    },
    {
      id: 136,
      title: 'PROSOP CEL 2STR 55M KT11 AMBALATA INDIVIDUAL',
      header: 'Cod Produs: 205276',
      price: {
        first: '6',
        second: '5'
      },
      category: 'diverse',
      img: '/media/products/image-155.jpg',
      specificatii:[
        ['Pret + TVA','7.735 RON'],
        ['Bucati in set','-'],
        ['Bucati in cutie','6'],
      ]
    },
    {
      id: 137,
      title: 'PROSOP CEL 2STR 100M KT10 AMBALATA INDIVIDUAL',
      header: 'Cod Produs: 205276',
      price: {
        first: '10',
        second: '5'
      },
      category: 'diverse',
      img: '/media/products/image-156.jpg',
      specificatii:[
        ['Pret + TVA','12.495 RON'],
        ['Bucati in set','-'],
        ['Bucati in cutie','6'],
      ]
    },
    {
      id: 138,
      title: 'PROSOP FINE 2STR 60M UNFLAT AMABALATA INDIVIDUAL',
      header: 'Cod Produs: 205276',
      price: {
        first: '6',
        second: '8908'
      },
      category: 'diverse',
      img: '/media/products/image-157.jpg',
      specificatii:[
        ['Pret + TVA','8.2 RON'],
        ['Bucati in set','1'],
        ['Bucati in cutie','6'],
      ]
    },
    {
      id: 139,
      title: 'HARTIE IGIENICA 2STR 350GR, 120M TP01',
      header: 'Cod Produs: 205276',
      price: {
        first: '6',
        second: ''
      },
      category: 'diverse',
      img: '/media/products/image-158.jpg',
      specificatii:[
        ['Pret + TVA','7.14 RON'],
        ['Bucati in set','-'],
        ['Bucati in cutie','12'],
      ]
    },
    {
      id: 140,
      title: 'HARTIE IGIENICA CEL 2STR 13M/130FOI ',
      header: 'Cod Produs: 205276',
      price: {
        first: '0',
        second: '8'
      },
      category: 'diverse',
      img: '/media/products/image-159.jpg',
      specificatii:[
        ['Pret + TVA','0.952 RON'],
        ['Bucati in set','-'],
        ['Bucati in cutie','24'],
      ]
    },
    {
      id: 141,
      title: 'PROSOP V ALB 2STR CEL 150BUC/PAC',
      header: 'Cod Produs: 205276',
      price: {
        first: '5',
        second: '5'
      },
      category: 'diverse',
      img: '/media/products/image-160.jpg',
      specificatii:[
        ['Pret + TVA','7.14 RON'],
        ['Bucati in set','-'],
        ['Bucati in cutie','25'],
      ]
    },
    {
      id: 142,
      title: 'BURETE PROFI ABRAZIV MARE 1BUC',
      header: 'Cod Produs: 205276',
      price: {
        first: '2',
        second: ''
      },
      category: 'curatenie',
      img: '/media/products/image-162.jpg',
      specificatii:[
        ['Pret + TVA','2.38 RON'],
        ['Bucati in set','-'],
        ['Bucati in cutie','-'],
      ]
    },
    {
      id: 143,
      title: 'BURETE FINE CU CANELURI 4BUC/SET',
      header: 'Cod Produs: 205276',
      price: {
        first: '3',
        second: '5'
      },
      category: 'curatenie',
      img: '/media/products/image-163.jpg',
      specificatii:[
        ['Pret + TVA','4.165 RON'],
        ['Bucati in set','-'],
        ['Bucati in cutie','-'],
      ]
    },
    {
      id: 144,
      title: 'BURETE FINE CU CANELURI 10BUC/SET',
      header: 'Cod Produs: 205276',
      price: {
        first: '4',
        second: '59'
      },
      category: 'curatenie',
      img: '/media/products/image-164.jpg',
      specificatii:[
        ['Pret + TVA','5.4621 RON'],
        ['Bucati in set','-'],
        ['Bucati in cutie','-'],
      ]
    },
    {
      id: 145,
      title: 'LAVETA UNIVERSALA FINE 3BUC/SET',
      header: 'Cod Produs: 205276',
      price: {
        first: '2',
        second: '7'
      },
      category: 'curatenie',
      img: '/media/products/image-165.jpg',
      specificatii:[
        ['Pret + TVA','3.213 RON'],
        ['Bucati in set','-'],
        ['Bucati in cutie','-'],
      ]
    },
    {
      id: 146,
      title: 'LAVETE UMEDE FINE 5BUC/SET',
      header: 'Cod Produs: 205276',
      price: {
        first: '7',
        second: '9'
      },
      category: 'curatenie',
      img: '/media/products/image-166.jpg',
      specificatii:[
        ['Pret + TVA','9.401 RON'],
        ['Bucati in set','-'],
        ['Bucati in cutie','-'],
      ]
    },
    {
      id: 147,
      title: 'BURETE SPIRALATI DIN SARMA 13GR 3BUC',
      header: 'Cod Produs: 205276',
      price: {
        first: '2',
        second: '5'
      },
      category: 'curatenie',
      img: '/media/products/image-167.jpg',
      specificatii:[
        ['Pret + TVA','2.975 RON'],
        ['Bucati in set','-'],
        ['Bucati in cutie','-'],
      ]
    },
    {
      id: 148,
      title: 'CIF MULTI SURFACE 400ML',
      header: 'Cod Produs: 205276',
      price: {
        first: '14',
        second: '55'
      },
      category: 'curatenie',
      img: '/media/products/image-169.jpg',
      specificatii:[
        ['Pret + TVA','17.3145 RON'],
        ['Bucati in set','-'],
        ['Bucati in cutie','6'],
      ]
    },
    {
      id: 149,
      title: 'CIF WOOD POLISH 400ML',
      header: 'Cod Produs: 205276',
      price: {
        first: '16',
        second: '1625'
      },
      category: 'curatenie',
      img: '/media/products/image-170.jpg',
      specificatii:[
        ['Pret + TVA','19.2334 RON'],
        ['Bucati in set','-'],
        ['Bucati in cutie','6'],
      ]
    },
    {
      id: 150,
      title: 'CIF JAM WINDOW&MULTI SURFACE 750ML',
      header: 'Cod Produs: 205276',
      price: {
        first: '11',
        second: '55'
      },
      category: 'curatenie',
      img: '/media/products/image-171.jpg',
      specificatii:[
        ['Pret + TVA','13.7445 RON'],
        ['Bucati in set','-'],
        ['Bucati in cutie','6'],
      ]
    },
    {
      id: 151,
      title: 'CIF DEGRESANT/POWER CL DEGREASER 750ML',
      header: 'Cod Produs: 205276',
      price: {
        first: '13',
        second: '5125'
      },
      category: 'curatenie',
      img: '/media/products/image-172.jpg',
      specificatii:[
        ['Pret + TVA','16.0799 RON'],
        ['Bucati in set','-'],
        ['Bucati in cutie','6'],
      ]
    },
    {
      id: 152,
      title: 'CIF OTEL INOX /STAINLESS STEEL 750ML',
      header: 'Cod Produs: 205276',
      price: {
        first: '21',
        second: '125'
      },
      category: 'curatenie',
      img: '/media/products/image-173.jpg',
      specificatii:[
        ['Pret + TVA','25.1388 RON'],
        ['Bucati in set','-'],
        ['Bucati in cutie','6'],
      ]
    },
    {
      id: 153,
      title: 'CIF CUPTOR SI ARAGAZ/OVEN&GRILL 750ML',
      header: 'Cod Produs: 205276',
      price: {
        first: '18',
        second: '1625'
      },
      category: 'curatenie',
      img: '/media/products/image-175.jpg',
      specificatii:[
        ['Pret + TVA','21.6134 RON'],
        ['Bucati in set','-'],
        ['Bucati in cutie','6'],
      ]
    },
    {
      id: 154,
      title: 'CIF BAIE/WASHROOM 2IN1 750ML',
      header: 'Cod Produs: 205276',
      price: {
        first: '14',
        second: '3125'
      },
      category: 'curatenie',
      img: '/media/products/image-176.jpg',
      specificatii:[
        ['Pret + TVA','17.0319 RON'],
        ['Bucati in set','-'],
        ['Bucati in cutie','6'],
      ]
    },
    {
      id: 155,
      title: 'CIF CREAM 750ML',
      header: 'Cod Produs: 205276',
      price: {
        first: '9',
        second: '139'
      },
      category: 'curatenie',
      img: '/media/products/image-177.jpg',
      specificatii:[
        ['Pret + TVA','10.8755 RON'],
        ['Bucati in set','-'],
        ['Bucati in cutie','8'],
      ]
    },
    {
      id: 156,
      title: 'CIF CREAM 2L',
      header: 'Cod Produs: 205276',
      price: {
        first: '28',
        second: ''
      },
      category: 'curatenie',
      img: '/media/products/image-178.jpg',
      specificatii:[
        ['Pret + TVA','33.32 RON'],
        ['Bucati in set','-'],
        ['Bucati in cutie','2'],
      ]
    },
    {
      id: 157,
      title: 'SAPUN LICHID 5L',
      header: 'Cod Produs: 205276',
      price: {
        first: '21',
        second: ''
      },
      category: 'curatenie',
      img: '/media/products/image-179.jpg',
      specificatii:[
        ['Pret + TVA','24.99 RON'],
        ['Bucati in set','-'],
        ['Bucati in cutie','1'],
      ]
    },
    {
      id: 158,
      title: 'DETERGENT DE SPALAT VASE MAMUT',
      header: 'Cod Produs: 205276',
      price: {
        first: '22',
        second: '5'
      },
      category: 'curatenie',
      img: '/media/products/image-181.jpg',
      specificatii:[
        ['Pret + TVA','26.775 RON'],
        ['Bucati in set','5L'],
        ['Bucati in cutie','-'],
      ]
    },
    {
      id: 158,
      title: 'CIF PENTRU SPALAREA VASELOR/DISHWASH EXTRASTRONG LEMON 5L',
      header: 'Cod Produs: 205276',
      price: {
        first: '50',
        second: '8625'
      },
      category: 'curatenie',
      img: '/media/products/image-182.jpg',
      specificatii:[
        ['Pret + TVA','60.5264 RON'],
        ['Bucati in set','-'],
        ['Bucati in cutie','1'],
      ]
    },
    {
      id: 159,
      title: 'CIF BAIE/WASHROOM 2IN1 5L',
      header: 'Cod Produs: 205276',
      price: {
        first: '52',
        second: '7375'
      },
      category: 'curatenie',
      img: '/media/products/image-183.jpg',
      specificatii:[
        ['Pret + TVA','62.7577 RON'],
        ['Bucati in set','-'],
        ['Bucati in cutie','1'],
      ]
    },
    {
      id: 160,
      title: 'DOMESTOS PINE FRESH XXL 5L',
      header: 'Cod Produs: 205276',
      price: {
        first: '34',
        second: '75'
      },
      category: 'curatenie',
      img: '/media/products/image-184.jpg',
      specificatii:[
        ['Pret + TVA','41.3525 RON'],
        ['Bucati in set','-'],
        ['Bucati in cutie','1'],
      ]
    }
  ]
  