import { Box } from '@mui/material'
import React from 'react'
import Navbar from '../../Layout/Navbar'
import MandirIntro from '../../Widgets/MandirWidgets/MandirIntro'
import MandirList from '../../Widgets/MandirWidgets/MandirList'
import MandirEnd from '../../Widgets/MandirWidgets/MandirEnd'
import Footer from '../../Widgets/HomeWidgets/Footer'
import NewNavbar from '../../Layout/NewNavbar'

var south_mandir = [
  {

    "region": "List of Mandir in South India",

    "page": 1,
    "btnText": "Read more",

    "img1": "/images/mandir/south/virupaksha.png",
    "name1": "Virupaksha Temple",
    "place1": "(Hampi, Karnataka)",
    "content1": "The Virupaksha Temple is a part of the famous monuments at Hampi in Karnataka and is a UNESCO World Heritage Site. While the South Indian temple was originally built in the 7th century, several rulers have made additions to it through the years.",
    "nav1": "/virupaksha",

    "img2": "/images/mandir/south/meenakshi.png",
    "name2": "Meenakshi Temple",
    "place2": "(Madurai, Tamil Nadu)",
    "content2": "The Arulmigu Meenakshi Sundareshwarar Temple is located on the banks of the Vaigai River in the temple city of Madurai, Tamil Nadu. The South Indian temple was built in devotion to Goddess Meenakshi, a form of Parvati, and Lord Shiva.",
    "nav2": "/meenakshi",

    "img3": "/images/mandir/south/ramanathaswamy.png",
    "name3": "Ramanathaswamy Temple",
    "place3": "(Rameshawaram, Tamil Nadu)",
    "content3": "Located on Rameshwaram Island, Ramanathaswamy Temple is dedicated to Lord Shiva. While its location on an island makes it a picturesque delight, this South famous island also has a fascinating significance in Hindu mythology.",
    "nav3": "/ramanathaswamy",

    "img4": "/images/mandir/south/airavatesvara.png",
    "name4": "Airavatesvara Temple",
    "place4": "(Kumbakonam, Tamil Nadu)",
    "content4": "The Airavatesvara Temple is located in the Thanjavur District of Tamil Nadu. Built in the 12th century, the South Indian temple is dedicated to Lord Shiva. The South famous temple is named after Airavata, the white elephant of Lord Indra, who worshipped Lord Shiva.",
    "nav4": "/airavatesvara",

    "img5": "/images/mandir/south/brihadeeswara.png",
    "name5": "Brihadeeswara Temple",
    "place5": "(Thanjavur, Tamil Nadu)",
    "content5": "This South famous temple is locally known as Thanjai Periya Kovil and Rajarajeswaram. Located on the southern bank of the Cauvery, this temple is one of the biggest temples in India. Dating back to the 11th century, the South Indian temple is dedicated to Lord Shiva.",
    "nav5": "/brihadeeswara",

    "img6": "/images/mandir/south/aihole_pattadakal.png",
    "name6": "Aihole and Pattadakal",
    "place6": "(Hampi, Karnataka)",
    "content6": "These capital cities of Chalukyas are exclusively famous for their beautiful temples in Karnataka. These South Indian temples date back to 5th century CE, very elaborate in their architecture and grandeur. Aihole is also called the “cradle of Hindu Rock Architecture.",
    "nav6": "/aihole",

  },
  {

    "region": "List of Mandir in South India",

    "page": 2,
    "btnText": "Read more",

    "img1": "/images/mandir/south/virupaksha.png",
    "name1": "Virupaksha Temple",
    "place1": "(Hampi, Karnataka)",
    "content1": "The Virupaksha Temple is a part of the famous monuments at Hampi in Karnataka and is a UNESCO World Heritage Site. While the South Indian temple was originally built in the 7th century, several rulers have made additions to it through the years in a bid to display their power.",
    "nav1": "/banke-bihari",

    "img2": "/images/mandir/south/meenakshi.png",
    "name2": "Meenakshi Temple",
    "place2": "(Madurai, Tamil Nadu)",
    "content2": "The Arulmigu Meenakshi Sundareshwarar Temple is located on the banks of the Vaigai River in the temple city of Madurai, Tamil Nadu. The South Indian temple was built in devotion to Goddess Meenakshi, a form of Parvati, and Lord Shiva.",
    "nav2": "/banke-bihari",

    "img3": "/images/mandir/south/ramanathaswamy.png",
    "name3": "Ramanathaswamy Temple",
    "place3": "(Rameshawaram, Tamil Nadu)",
    "content3": "Located on Rameshwaram Island, Ramanathaswamy Temple is dedicated to Lord Shiva. While its location on an island makes it a picturesque delight, this South famous island also has a fascinating significance in Hindu mythology.",

    "img4": "/images/mandir/south/airavatesvara.png",
    "name4": "Airavatesvara Temple",
    "place4": "(Kumbakonam, Tamil Nadu)",
    "content4": "The Airavatesvara Temple is located in the Thanjavur District of Tamil Nadu. Built in the 12th century, the South Indian temple is dedicated to Lord Shiva. The South famous temple is named after Airavata, the white elephant of Lord Indra, who worshipped Lord Shiva.",

    "img5": "/images/mandir/south/brihadeeswara.png",
    "name5": "Brihadeeswara Temple",
    "place5": "(Thanjavur, Tamil Nadu)",
    "content5": "This South famous temple is locally known as Thanjai Periya Kovil and Rajarajeswaram. Located on the southern bank of the Cauvery, this temple is one of the biggest temples in India. Dating back to the 11th century, the South Indian temple is dedicated to Lord Shiva.",

    "img6": "/images/mandir/south/aihole_pattadakal.png",
    "name6": "Aihole and Pattadakal",
    "place6": "(Hampi, Karnataka)",
    "content6": "These capital cities of Chalukyas are exclusively famous for their beautiful temples in Karnataka. These South Indian temples date back to 5th century CE, very elaborate in their architecture and grandeur. Aihole is also called the “cradle of Hindu Rock Architecture.",

  },
  {

    "region": "List of Mandir in South India",

    "page": 3,
    "btnText": "Read more",

    "img1": "/images/mandir/south/virupaksha.png",
    "name1": "Virupaksha Temple",
    "place1": "(Hampi, Karnataka)",
    "content1": "The Virupaksha Temple is a part of the famous monuments at Hampi in Karnataka and is a UNESCO World Heritage Site. While the South Indian temple was originally built in the 7th century, several rulers have made additions to it through the years in a bid to display their power.",
    "nav1": "/banke-bihari",

    "img2": "/images/mandir/south/meenakshi.png",
    "name2": "Meenakshi Temple",
    "place2": "(Madurai, Tamil Nadu)",
    "content2": "The Arulmigu Meenakshi Sundareshwarar Temple is located on the banks of the Vaigai River in the temple city of Madurai, Tamil Nadu. The South Indian temple was built in devotion to Goddess Meenakshi, a form of Parvati, and Lord Shiva.",
    "nav2": "/banke-bihari",

    "img3": "/images/mandir/south/ramanathaswamy.png",
    "name3": "Ramanathaswamy Temple",
    "place3": "(Rameshawaram, Tamil Nadu)",
    "content3": "Located on Rameshwaram Island, Ramanathaswamy Temple is dedicated to Lord Shiva. While its location on an island makes it a picturesque delight, this South famous island also has a fascinating significance in Hindu mythology.",

    "img4": "/images/mandir/south/airavatesvara.png",
    "name4": "Airavatesvara Temple",
    "place4": "(Kumbakonam, Tamil Nadu)",
    "content4": "The Airavatesvara Temple is located in the Thanjavur District of Tamil Nadu. Built in the 12th century, the South Indian temple is dedicated to Lord Shiva. The South famous temple is named after Airavata, the white elephant of Lord Indra, who worshipped Lord Shiva.",

    "img5": "/images/mandir/south/brihadeeswara.png",
    "name5": "Brihadeeswara Temple",
    "place5": "(Thanjavur, Tamil Nadu)",
    "content5": "This South famous temple is locally known as Thanjai Periya Kovil and Rajarajeswaram. Located on the southern bank of the Cauvery, this temple is one of the biggest temples in India. Dating back to the 11th century, the South Indian temple is dedicated to Lord Shiva.",

    "img6": "/images/mandir/south/aihole_pattadakal.png",
    "name6": "Aihole and Pattadakal",
    "place6": "(Hampi, Karnataka)",
    "content6": "These capital cities of Chalukyas are exclusively famous for their beautiful temples in Karnataka. These South Indian temples date back to 5th century CE, very elaborate in their architecture and grandeur. Aihole is also called the “cradle of Hindu Rock Architecture.",

  },

]

const SouthMandir = () => {
  return (
    <Box>
      <NewNavbar />
      <MandirIntro mandir_type={'South India Mandir'} mandir_image={"url('/images/mandir/south_mandir.png')"} />
      <MandirList mandir={south_mandir} />
      <MandirEnd />
      <Footer />
    </Box>
  )
}

export default SouthMandir
