import React from 'react'
import { Box, Link, Icon, Text } from '@chakra-ui/react'
import { RiHome2Fill } from 'react-icons/ri';
import { ChevronRightIcon } from '@chakra-ui/icons';

const Hotel = () => {

    const data= [
        {
        "name":"Ginger Goa Panjim ",
        "image":"https://r1imghtlak.mmtcdn.com/bd735e8cff9011e8a6110242ac110003.jpg?&output-quality=75&downsize=910:612&crop=910:612;0,24&output-format=jpg",
        "rating":4.2,
        "verified_rating":"Very Good",
        "rate":11999,
        "price":10998,
        "tax":1320,
        "star_category":3,
        "property_type":"Hotel",
        "location":"Goa"
        },
        {
        "name":"Evoke Lifestyle Candolim",
        "image":"https://r2imghtlak.mmtcdn.com/r2-mmt-htl-image/htl-imgs/201712261754448996-7a7ede6e3f0911e88f790af8e1f3c732.jpg?&output-quality=75&downsize=910:612&crop=910:612;4,0&output-format=jpg",
        "rating":4,
        "verified_rating":"Good",
        "rate":5499,
        "price":3300,
        "tax":892,
        "star_category":4,
        "property_type":"Hotel",
        "location":"Goa"
        },
        {
            "name":"Grande Delmon",
            "image":"https://r1imghtlak.mmtcdn.com/72fb6088af4111e8b3c10224510f5e5b.jfif?&output-quality=75&output-format=jpg",
            "rating":4.5,
            "verified_rating":"Very Good",
            "rate":5300,
            "price":4833,
            "tax":925,
            "star_category":3,
            "property_type":"Hotel",
            "location":"Goa"
        },
        {
            "name":"Treehouse Neptune ",
            "image":"https://r1imghtlak.mmtcdn.com/cca8e5f80a5311e89e5c02755708f0b3.jpg?&output-quality=75&downsize=910:612&crop=910:612;7,0&output-format=jpg",
            "rating":3.9,
            "verified_rating":"Very Good",
            "rate":7500,
            "price":4591,
            "tax":1044,
            "star_category":3,
            "property_type":"Hotel",
            "location":"Goa"
        },
        {
            "name":"Vivanta Goa, Panaji",
            "image":"https://r1imghtlak.mmtcdn.com/d0019dd4236d11e8963e0a4cef95d023.jpg?&output-quality=75&downsize=910:612&crop=910:612;4,0&output-format=jpg&downsize=821:550&crop=821:550",
            "rating":5,
            "verified_rating":"Very Good",
            "rate":13800,
            "price":11250,
            "tax":2000,
            "star_category":4.4,
            "property_type":"Hotel",
            "location":"Goa"
        },
        {
            "name":"Rio Boutique Hotel",
            "image":"https://r1imghtlak.mmtcdn.com/80dc39e8b7c211ebbd7b0242ac110003.jpeg?&output-quality=75&downsize=910:612&crop=910:612;30,0&output-format=jpg",
            "rating":4,
            "verified_rating":"Very Good",
            "rate":5850,
            "price":3300,
            "tax":808,
            "star_category":4.0,
            "property_type":"Hotel",
            "location":"Goa"
        },
        {
            "name":"The Crown Goa",
            "image":"https://r1imghtlak.mmtcdn.com/59i1mc2nn5595e5bjoq95vqg000q.jpg?&output-quality=75&downsize=910:612&crop=910:612;3,0&output-format=jpg&downsize=821:550&crop=821:550",
            "rating":5,
            "verified_rating":"Good",
            "rate":11000,
            "price":9100,
            "tax":1100,
            "star_category":4.3,
            "property_type":"Hotel",
            "location":"Goa"
        },
        {
            "name":"Ginger Goa, Dona Paula",
            "image":"https://r1imghtlak.mmtcdn.com/bd79999c337411e998720242ac110003.jpg?&output-quality=75&downsize=910:612&crop=910:612;141,0&output-format=jpg",
            "rating":3.3,
            "verified_rating":"Very Good",
            "rate":8000,
            "price":5499,
            "tax":660,
            "star_category":4.0,
            "property_type":"Hotel",
            "location":"Goa"
        },
        {
            "name":"The Fern Kadamba Hotel and Spa, Goa",
            "image":"https://r1imghtlak.mmtcdn.com/7475dd66ef1511e993600242ac110006.jpg?&output-quality=75&downsize=910:612&crop=910:612;57,0&output-format=jpg",
            "rating":5,
            "verified_rating":"Very Good",
            "rate":9799,
            "price":7369,
            "tax":1881,
            "star_category":4.2,
            "property_type":"Hotel",
            "location":"Goa"
        },
        {
            "name":"Anamiva Goa By AM Hotel Kollection",
            "image":"https://r1imghtlak.mmtcdn.com/1e43a70a587611eaaa0d0242ac110006.png?&output-quality=75&downsize=910:612&crop=910:612;0,149&output-format=jpg&downsize=821:550&crop=821:550",
            "rating":4,
            "verified_rating":"Good",
            "rate":10000,
            "price":8460,
            "tax":2000,
            "star_category":4.2,
            "property_type":"Hotel",
            "location":"Goa"
        },
        {
            "name":"Villa Ikebana | Rooms & Pool",
            "image":"https://r1imghtlak.mmtcdn.com/82a126e83e3f11e99c800242ac110003.jpg?&output-quality=75&downsize=910:612&crop=910:612;4,0&output-format=jpg",
            "rating":4,
            "verified_rating":"Excllent",
            "rate":2300,
            "price":1972,
            "tax":414,
            "star_category":4.3,
            "property_type":"Villa",
            "location":"North Goa"
        },
        {
            "name":"Orabella Villas & Suites | Caretaker & Restaurant",
            "image":"https://r1imghtlak.mmtcdn.com/fee4ac286ed111ecabed0a58a9feac02.jpg?&output-quality=75&downsize=910:612&crop=910:612;0,35&output-format=jpg&downsize=821:550&crop=821:550",
            "rating":4,
            "verified_rating":"Very Good",
            "rate":4725,
            "price":3405,
            "tax":455,
            "star_category":4.1,
            "property_type":"Villa",
            "location":"North Goa"
        },
        {
            "name":"Yogesh Villa",
            "image":"https://r1imghtlak.mmtcdn.com/477560acbcc011e9bdda0242ac110003.jpg?&output-quality=75&downsize=910:612&crop=910:612;57,0&output-format=jpg&downsize=821:550&crop=821:550",
            "rating":5,
            "verified_rating":"Excllent",
            "rate":4428,
            "price":3603,
            "tax":770,
            "star_category":4.7,
            "property_type":"Villa",
            "location":"North Goa"
        },
        {
            "name":"La Maison Fontainhas, Goa, ama Stays & Trails",
            "image":"https://r1imghtlak.mmtcdn.com/bcd213aac24b11e984160242ac110002.jpg?&output-quality=75&output-format=jpg",
            "rating":4,
            "verified_rating":"Very Good",
            "rate":10000,
            "price":8025,
            "tax":1445,
            "star_category":3.8,
            "property_type":"Villa",
            "location":"North Goa"
        },
        {
            "name":"Le Pension Stays | Marine Studios Villa",
            "image":"https://r1imghtlak.mmtcdn.com/bf553a7037c011ec92580a58a9feac02.jfif?&output-quality=75&downsize=910:612&crop=910:612;5,0&output-format=jpg",
            "rating":4,
            "verified_rating":"Excllent",
            "rate":2999,
            "price":202,
            "tax":432,
            "star_category":4.3,
            "property_type":"Villa",
            "location":"North Goa"
        },
        {
            "name":"Richmonde Ananta Elite, Goa",
            "image":"https://r1imghtlak.mmtcdn.com/d2715568d54c11e9b4bb0242ac110004.jpg?&output-quality=75&downsize=910:612&crop=910:612;3,0&output-format=jpg&downsize=821:550&crop=821:550",
            "rating":3,
            "verified_rating":"Good",
            "rate":5499,
            "price":4129,
            "tax":297,
            "star_category":3.0,
            "property_type":"Villa",
            "location":"North Goa"
        },
        {
            "name":"Laliguras Villa| Rooms & Restaurant",
            "image":"https://r2imghtlak.mmtcdn.com/r2-mmt-htl-image/room-imgs/201811181215204906-3058918-fa0ce6c415fa11eba4850242ac110002.jpg?&output-quality=75&downsize=910:612&crop=910:612;0,5&output-format=jpg",
            "rating":4,
            "verified_rating":"Excllent",
            "rate":3500,
            "price":3200,
            "tax":600,
            "star_category":4.3,
            "property_type":"Villa",
            "location":"North Goa"
        },
        {
            "name":"Glasshouse By The Project Cafe",
            "image":"https://r2imghtlak.mmtcdn.com/r2-mmt-htl-image/htl-imgs/201908131416043112-98adfe4e514f11eda90a0a58a9feac02.jpg?&output-quality=75&downsize=910:612&crop=910:612;4,0&output-format=jpg",
            "rating":3,
            "verified_rating":"Good",
            "rate":21000,
            "price":10607,
            "tax":3000,
            "star_category":3.8,
            "property_type":"Villa",
            "location":"North Goa"
        },
        {
            "name":"Home Stay in Candolim GOA",
            "image":"https://r1imghtlak.mmtcdn.com/d09c5126535611ed943c0a58a9feac02.jpeg?&output-quality=75&downsize=910:612&crop=910:612;4,0&output-format=jpg",
            "rating":2,
            "verified_rating":"Average",
            "rate":1222,
            "price":1149,
            "tax":220,
            "star_category":2.0,
            "property_type":"Villa",
            "location":"North Goa"
        },
        {
            "name":"Seclude Falling Cashews | 1 BHK Villa",
            "image":"https://r1imghtlak.mmtcdn.com/da09c00c1cb011eab0110242ac110003.jpg?&output-quality=75&downsize=910:612&crop=910:612;3,0&output-format=jpg",
            "rating":4,
            "verified_rating":"Excllent",
            "rate":8880,
            "price":5266,
            "tax":767,
            "star_category":4.3,
            "property_type":"Villa",
            "location":"North Goa"
        },
        {
            "name":"Patnem Palolem Beach Apartment | Rooms & Pool",
            "image":"https://r2imghtlak.mmtcdn.com/r2-mmt-htl-image/htl-imgs/201901091240036005-98dd551c29e011e9abf30242ac110002.jpg?&output-quality=75&downsize=583:388&crop=583:388;0,24&output-format=jpg",
            "rating":4,
            "verified_rating":"Excllent",
            "rate":4920,
            "price":3738,
            "tax":856,
            "star_category":4.3,
            "property_type":"Apartment",
            "location":"South Goa"
        },
        {
            "name":"Premier Apartment Goa-2 BHK Apartment",
            "image":"https://r1imghtlak.mmtcdn.com/19ae933aecf611e994420242ac110004.jpg?&output-quality=75&downsize=910:612&crop=910:612;3,0&output-format=jpg",
            "rating":3,
            "verified_rating":"Good",
            "rate":9999,
            "price":8030,
            "tax":2100,
            "star_category":3.4,
            "property_type":"Apartment",
            "location":"South Goa"
        },
        {
            "name":"LUISA APPARTMENT AND VILLAS NEAR TO BEACH",
            "image":"https://r1imghtlak.mmtcdn.com/f734e586adcb11ecaa210a58a9feac02.jpeg?&output-quality=75&downsize=910:612&crop=910:612;0,35&output-format=jpg",
            "rating":6,
            "verified_rating":"Very Good",
            "rate":4449,
            "price":3090,
            "tax":648,
            "star_category":3.5,
            "property_type":"Apartment",
            "location":"South Goa"
        },
        {
            "name":"Beach View Studio Apartment, Palolem Beach",
            "image":"https://r1imghtlak.mmtcdn.com/a0bd53b6e12e11eaa04c0242ac110002.jpg?&output-quality=75&downsize=910:612&crop=910:612;0,35&output-format=jpg",
            "rating":8,
            "verified_rating":"Good",
            "rate":2100,
            "price":1726,
            "tax":361,
            "star_category":3.0,
            "property_type":"Apartment",
            "location":"South Goa"
        },
        {
            "name":"CD WestWinds-2 BHK Apartment",
            "image":"https://r2imghtlak.mmtcdn.com/r2-mmt-htl-image/htl-imgs/201801101213117694-0b253b4e2c3411e4af34daf4768ad8d9.jpg?&output-quality=75&downsize=910:612&crop=910:612;4,0&output-format=jpg",
            "rating":4,
            "verified_rating":"Excllent",
            "rate":7500,
            "price":6125,
            "tax":1215,
            "star_category":4.9,
            "property_type":"Apartment",
            "location":"South Goa"
        },
        {
            "name":"Treehouse Blue ",
            "image":"https://r1imghtlak.mmtcdn.com/c7c1329a123a11e8956502755708f0b3.jpg?&output-quality=75&downsize=910:612&crop=910:612;95,0&output-format=jpg",
            "rating":8,
            "verified_rating":"Very Good",
            "rate":5999,
            "price":4442,
            "tax":533,
            "star_category":4.1,
            "property_type":"Apartment",
            "location":"South Goa"
        },
        {
            "name":"1 BHK Apartment at Lotus Hermitage",
            "image":"https://r1imghtlak.mmtcdn.com/397d5a6ad45111e996050242ac110002.jpg?&output-quality=75&downsize=910:612&crop=910:612;0,35&output-format=jpg",
            "rating":4,
            "verified_rating":"Good",
            "rate":6666,
            "price":5916,
            "tax":1200,
            "star_category":4.1,
            "property_type":"Apartment",
            "location":"South Goa"
        },
        {
            "name":"Villa Barbosa-Luxury Studio-4",
            "image":"https://r2imghtlak.mmtcdn.com/r2-mmt-htl-image/htl-imgs/202206231347004584-eb534914f87c11ec84db0a58a9feac02.jpg?&output-quality=75&downsize=910:612&crop=910:612;4,0&output-format=jpg",
            "rating":4,
            "verified_rating":"Excllent",
            "rate":4990,
            "price":3320,
            "tax":695,
            "star_category":4.5,
            "property_type":"Apartment",
            "location":"South Goa"
        },
        {
            "name":"Crystal Goa Onyx",
            "image":"https://r1imghtlak.mmtcdn.com/8cd6d66e265311eb930a0242ac110002.jpg?&output-quality=75&downsize=910:612&crop=910:612;4,0&output-format=jpg",
            "rating":5,
            "verified_rating":"Very Good",
            "rate":2400,
            "price":1157,
            "tax":271,
            "star_category":3.7,
            "property_type":"Apartment",
            "location":"South Goa"
        },
        {
            "name":"Nirvana Hill Resort",
            "image":"https://r1imghtlak.mmtcdn.com/93cb1c9839a011eda0340a58a9feac02.jpg?&output-quality=75&downsize=910:612&crop=910:612;4,0&output-format=jpg",
            "rating":8,
            "verified_rating":"Good",
            "rate":5600,
            "price":3601,
            "tax":756,
            "star_category":4.0,
            "property_type":"Tree house",
            "location":"Goa"
        }
        
    ]

  return (
    <Box>
        <Box w={["90%", "90%", "84%"]} m="auto">
          <Box display="flex" gap="5px" alignItems="center">
            <Link mt="3px" href="/"><Icon color="#00af87" as={RiHome2Fill} /></Link>
            <Icon color="#00af87" as={ChevronRightIcon} />
            <Link fontWeight="600" href="/products/protiens" fontSize="14px">Hotels</Link>
          </Box>
        </Box>
        <Box w="85%" m="auto" display="flex" justifyContent="center" alignItems="center" h="230px" bg="url(https://dynamic-media-cdn.tripadvisor.com/media/photo-o/15/33/fc/f0/goa.jpg?w=1200&h=-1&s=1)">
            <Text bg="white" color="#00af87" p="5px" fontSize={["30px", "35px", "40px"]} as="b" >Best hotels and places to stay</Text>
        </Box>
        <Box display="flex" justifyContent="space-between" alignItems="center">
            <Box></Box>
            <Box></Box>
        </Box>
    </Box>
  )
}

export default Hotel
