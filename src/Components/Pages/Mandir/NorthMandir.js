import { Box } from '@mui/material'
import React from 'react'
import MandirIntro from '../../Widgets/MandirWidgets/MandirIntro'
import MandirList from '../../Widgets/MandirWidgets/MandirList'
import Footer from '../../Widgets/HomeWidgets/Footer'
import MandirEnd from '../../Widgets/MandirWidgets/MandirEnd'
import NewNavbar from '../../Layout/NewNavbar'

var north_mandir = [
  {

    "region": "List of Mandir in North India",

    "page": 1,
    "btnText": "Read more",

    "img1": "/images/mandir/north/vaishno_devi.png",
    "name1": "Shri Naina Devi ",
    "place1": "(Distt Bilaspur, Himachal Pradesh)",
    "content1": "Shri Naina Devi Ji  is one of the 51 Shaktipeeths, located in Bilaspur district in the North Indian state of Himachal Pradesh. It attracts huge pilgrims round the year; especially during Shravan Ashtami and in the Navaratras of Chaitra and Ashwin.  ",
    "nav1": "/banke-bihari",

    "img2": "/images/mandir/north/mansa_devi.png",
    "name2": "Mata Mansa Devi ",
    "place2": "(Panchkula, Chandigarh)",
    "content2": "Mata Mansa Devi is one of the noted Shakti s in North India. Dedicated to goddess Mansa Devi Ji. The  complex is spread of about 100 acres on the foothills of Shivalik in village Bilaspur, near Mani Majra, Panchkula.",
    "nav2": "/banke-bihari",

    "img3": "/images/mandir/north/vaishno_devi.png",
    "name3": "Shri Maa Vaishno Devi ",
    "place3": "(Katra, Jammu & Kashmir)",
    "content3": "Shri Mata Vaishno Devi  is considered to be one of the holiest pilgrimages of this era. Goddess Vaishno Devi is considered to be incarnation of combined Shakti (power) of the Goddess Lakshmi, Goddess Saraswati and Goddess Kali.",

    "img4": "/images/mandir/north/bajreshwari_devi.png",
    "name4": "Shri Bajreshwari Devi  ",
    "place4": "(Kangra, Himachal Pradesh)",
    "content4": "Shri Bajreshwari Devi , one of the 51 Shaktipeeths, is a famous Hindu  in north India dedicated to the goddess Bajreshwari Devi, the Goddess of Lightening. Goddess Bajreshwari Devi is also known by Vajreshwari Devi or Brajeshwari Devi.",

    "img5": "/images/mandir/north/kalkaji.png",
    "name5": "Shri Kalkaji ",
    "place5": "(Nehru Place, New Delhi)",
    "content5": "Shri Kalkaji  is a famous shrine dedicated to Goddess Kali. It is believed that the  dates back to Satya Yuga when the Goddess had incarnated and killed the demon “Raktabija” along with others who were troubling the gods dwelling in nearby area.",

    "img6": "/images/mandir/north/jwala_ji.png",
    "name6": "Maa Jwala Ji ",
    "place6": "(Kangra, Himachal Pradesh)",
    "content6": "Maa Jwala Ji  is dedicated to the Goddess Jwalamukhi. The  is one of the 51 Shaktipeeths, and hence considered very powerful.Here the Mahajihwa of Bhagwati Sati was cut off from the Sudarshan Chakra of Lord Vishnu ji.",

  },
  {

    "region": "List of Mandir in North India",

    "page": 2,
    "btnText": "Read more",

    "img1": "/images/mandir/north/vaishno_devi.png",
    "name1": "Shri Naina Devi ",
    "place1": "(Distt Bilaspur, Himachal Pradesh)",
    "content1": "Shri Naina Devi Ji  is one of the 51 Shaktipeeths, located in Bilaspur district in the North Indian state of Himachal Pradesh. It attracts huge pilgrims round the year; especially during Shravan Ashtami and in the Navaratras of Chaitra and Ashwin.  ",
    "nav1": "/banke-bihari",

    "img2": "/images/mandir/north/mansa_devi.png",
    "name2": "Mata Mansa Devi ",
    "place2": "(Panchkula, Chandigarh)",
    "content2": "Mata Mansa Devi is one of the noted Shakti s in North India. Dedicated to goddess Mansa Devi Ji. The  complex is spread of about 100 acres on the foothills of Shivalik in village Bilaspur, near Mani Majra, Panchkula.",
    "nav2": "/banke-bihari",

    "img3": "/images/mandir/north/vaishno_devi.png",
    "name3": "Shri Maa Vaishno Devi ",
    "place3": "(Katra, Jammu & Kashmir)",
    "content3": "Shri Mata Vaishno Devi  is considered to be one of the holiest pilgrimages of this era. Goddess Vaishno Devi is considered to be incarnation of combined Shakti (power) of the Goddess Lakshmi, Goddess Saraswati and Goddess Kali.",

    "img4": "/images/mandir/north/bajreshwari_devi.png",
    "name4": "Shri Bajreshwari Devi  ",
    "place4": "(Kangra, Himachal Pradesh)",
    "content4": "Shri Bajreshwari Devi , one of the 51 Shaktipeeths, is a famous Hindu  in north India dedicated to the goddess Bajreshwari Devi, the Goddess of Lightening. Goddess Bajreshwari Devi is also known by Vajreshwari Devi or Brajeshwari Devi.",

    "img5": "/images/mandir/north/kalkaji.png",
    "name5": "Shri Kalkaji ",
    "place5": "(Nehru Place, New Delhi)",
    "content5": "Shri Kalkaji  is a famous shrine dedicated to Goddess Kali. It is believed that the  dates back to Satya Yuga when the Goddess had incarnated and killed the demon “Raktabija” along with others who were troubling the gods dwelling in nearby area.",

    "img6": "/images/mandir/north/jwala_ji.png",
    "name6": "Maa Jwala Ji ",
    "place6": "(Kangra, Himachal Pradesh)",
    "content6": "Maa Jwala Ji  is dedicated to the Goddess Jwalamukhi. The  is one of the 51 Shaktipeeths, and hence considered very powerful.Here the Mahajihwa of Bhagwati Sati was cut off from the Sudarshan Chakra of Lord Vishnu ji.",

  },
  {

    "region": "List of Mandir in North India",

    "page": 3,
    "btnText": "Read more",

    "img1": "/images/mandir/north/vaishno_devi.png",
    "name1": "Shri Naina Devi ",
    "place1": "(Distt Bilaspur, Himachal Pradesh)",
    "content1": "Shri Naina Devi Ji  is one of the 51 Shaktipeeths, located in Bilaspur district in the North Indian state of Himachal Pradesh. It attracts huge pilgrims round the year; especially during Shravan Ashtami and in the Navaratras of Chaitra and Ashwin.  ",
    "nav1": "/banke-bihari",

    "img2": "/images/mandir/north/mansa_devi.png",
    "name2": "Mata Mansa Devi ",
    "place2": "(Panchkula, Chandigarh)",
    "content2": "Mata Mansa Devi is one of the noted Shakti s in North India. Dedicated to goddess Mansa Devi Ji. The  complex is spread of about 100 acres on the foothills of Shivalik in village Bilaspur, near Mani Majra, Panchkula.",
    "nav2": "/banke-bihari",

    "img3": "/images/mandir/north/vaishno_devi.png",
    "name3": "Shri Maa Vaishno Devi ",
    "place3": "(Katra, Jammu & Kashmir)",
    "content3": "Shri Mata Vaishno Devi  is considered to be one of the holiest pilgrimages of this era. Goddess Vaishno Devi is considered to be incarnation of combined Shakti (power) of the Goddess Lakshmi, Goddess Saraswati and Goddess Kali.",

    "img4": "/images/mandir/north/bajreshwari_devi.png",
    "name4": "Shri Bajreshwari Devi  ",
    "place4": "(Kangra, Himachal Pradesh)",
    "content4": "Shri Bajreshwari Devi , one of the 51 Shaktipeeths, is a famous Hindu  in north India dedicated to the goddess Bajreshwari Devi, the Goddess of Lightening. Goddess Bajreshwari Devi is also known by Vajreshwari Devi or Brajeshwari Devi.",

    "img5": "/images/mandir/north/kalkaji.png",
    "name5": "Shri Kalkaji ",
    "place5": "(Nehru Place, New Delhi)",
    "content5": "Shri Kalkaji  is a famous shrine dedicated to Goddess Kali. It is believed that the  dates back to Satya Yuga when the Goddess had incarnated and killed the demon “Raktabija” along with others who were troubling the gods dwelling in nearby area.",

    "img6": "/images/mandir/north/jwala_ji.png",
    "name6": "Maa Jwala Ji ",
    "place6": "(Kangra, Himachal Pradesh)",
    "content6": "Maa Jwala Ji  is dedicated to the Goddess Jwalamukhi. The  is one of the 51 Shaktipeeths, and hence considered very powerful.Here the Mahajihwa of Bhagwati Sati was cut off from the Sudarshan Chakra of Lord Vishnu ji.",

  },

]

const NorthMandir = () => {
  return (
    <Box>
      <NewNavbar />
      <MandirIntro mandir_type={'North India Mandir'} mandir_image={"url('/images/mandir/north_mandir.png')"} />
      <MandirList mandir={north_mandir} />
      <MandirEnd />
      <Footer />
    </Box>
  )
}

export default NorthMandir
