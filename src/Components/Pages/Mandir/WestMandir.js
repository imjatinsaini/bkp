import { Box } from '@mui/material'
import React from 'react'
import Navbar from '../../Layout/Navbar'
import MandirIntro from '../../Widgets/MandirWidgets/MandirIntro'
import MandirList from '../../Widgets/MandirWidgets/MandirList'
import MandirEnd from '../../Widgets/MandirWidgets/MandirEnd'
import Footer from '../../Widgets/HomeWidgets/Footer'
import NewNavbar from '../../Layout/NewNavbar'

var west_mandir = [
  {

    "region": "List of Mandir in West India",

    "page": 1,
    "btnText": "Read more",

    "img1": "/images/mandir/west/dwarkadhish.png",
    "name1": "Dwarkadhish Temple",
    "place1": "(Dwarka, Gujrat)",
    "content1": "Lord Krishna is being worshipped here and he is known to be as a King of Dwarka. On the eve of Janmastami (the day on which the birthday of Lord Krishna is being celebrated) around thousand of Devotees addresses the temple to offer prayer and for other rituals.",
    "nav1": "/banke-bihari",

    "img2": "/images/mandir/west/kailash.png",
    "name2": "Kailash Temple",
    "place2": "(Aurangabad, Maharashtra)",
    "content2": "Kailash Temple is located in Ellora in Aurangabad district of Maharashtra. The temple is dedicated to Lord Shiva.It is one of the rock cut cave temple in India. It has 34 cave temples and monasteries which all together makes a benevolent Ellora Caves.",
    "nav2": "/banke-bihari",

    "img3": "/images/mandir/west/siddhivinayak.png",
    "name3": "Shree Siddhivinayak Temple",
    "place3": "(Mumbai, Maharashtra)",
    "content3": "Shree Siddhivinayak Mandir is dedicated to Lord Ganesha. Located in Prabhadevi in Mumbai, it is unquestionably the most popular and significant temple of Lord Shree Ganesh.This two centuries old Ganpati temple is the richest temple in Mumbai.",

    "img4": "/images/mandir/west/mahalaxmi.png",
    "name4": "Shree Mahalaxmi Temple",
    "place4": "(Mumbai, Maharashtra)",
    "content4": "The temple is devoted to Devi Mahalaxmi who is the deity of fortune as per the Hindu Mythology. It is one of the most well-known temples of Mumbai, situated on Bhulabhai Desai Road in Mahalaxmi part. The temple was constructed in 1831 by a Hindu merchant Dhakji Dadaji.",

    "img5": "/images/mandir/west/shani_dev.png",
    "name5": "Shani Dev",
    "place5": "(Shingnapur, Maharashtra)",
    "content5": "Shani Dev Shignapur is the most important shrine of Lord Shani, located in Maharashtra. It’s believed that the god here is \"Swayambhu\" that has self appeared from the earth in the form of Black but grand stone.The temple is believed to be a \"jagrut devasthan\".",

    "img6": "/images/mandir/west/trimbakeshwar.png",
    "name6": "Shree Trimbakeshwar Temple",
    "place6": "(Nasik, Maharashtra)",
    "content6": "The Trimbakeshwar temple is one of the most adored and holy pilgrimage sites in India. It is also said to be the support of the river Godavari as there are many myths associated with the life of this channel.Trimbakeshwar is a religious point having one of the twelve Jyotirlingas.",

  },
  {

    "region": "List of Mandir in West India",

    "page": 2,
    "btnText": "Read more",

    "img1": "/images/mandir/west/dwarkadhish.png",
    "name1": "Dwarkadhish Temple",
    "place1": "(Dwarka, Gujrat)",
    "content1": "Lord Krishna is being worshipped here and he is known to be as a King of Dwarka. On the eve of Janmastami (the day on which the birthday of Lord Krishna is being celebrated) around thousand of Devotees addresses the temple to offer prayer and for other rituals.",
    "nav1": "/banke-bihari",

    "img2": "/images/mandir/west/kailash.png",
    "name2": "Kailash Temple",
    "place2": "(Aurangabad, Maharashtra)",
    "content2": "Kailash Temple is located in Ellora in Aurangabad district of Maharashtra. The temple is dedicated to Lord Shiva.It is one of the rock cut cave temple in India. It has 34 cave temples and monasteries which all together makes a benevolent Ellora Caves.",
    "nav2": "/banke-bihari",

    "img3": "/images/mandir/west/siddhivinayak.png",
    "name3": "Shree Siddhivinayak Temple",
    "place3": "(Mumbai, Maharashtra)",
    "content3": "Shree Siddhivinayak Mandir is dedicated to Lord Ganesha. Located in Prabhadevi in Mumbai, it is unquestionably the most popular and significant temple of Lord Shree Ganesh.This two centuries old Ganpati temple is the richest temple in Mumbai.",

    "img4": "/images/mandir/west/mahalaxmi.png",
    "name4": "Shree Mahalaxmi Temple",
    "place4": "(Mumbai, Maharashtra)",
    "content4": "The temple is devoted to Devi Mahalaxmi who is the deity of fortune as per the Hindu Mythology. It is one of the most well-known temples of Mumbai, situated on Bhulabhai Desai Road in Mahalaxmi part. The temple was constructed in 1831 by a Hindu merchant Dhakji Dadaji.",

    "img5": "/images/mandir/west/shani_dev.png",
    "name5": "Shani Dev",
    "place5": "(Shingnapur, Maharashtra)",
    "content5": "Shani Dev Shignapur is the most important shrine of Lord Shani, located in Maharashtra. It’s believed that the god here is \"Swayambhu\" that has self appeared from the earth in the form of Black but grand stone.The temple is believed to be a \"jagrut devasthan\".",

    "img6": "/images/mandir/west/trimbakeshwar.png",
    "name6": "Shree Trimbakeshwar Temple",
    "place6": "(Nasik, Maharashtra)",
    "content6": "The Trimbakeshwar temple is one of the most adored and holy pilgrimage sites in India. It is also said to be the support of the river Godavari as there are many myths associated with the life of this channel.Trimbakeshwar is a religious point having one of the twelve Jyotirlingas.",

  },
  {

    "region": "List of Mandir in West India",

    "page": 3,
    "btnText": "Read more",

    "img1": "/images/mandir/west/dwarkadhish.png",
    "name1": "Dwarkadhish Temple",
    "place1": "(Dwarka, Gujrat)",
    "content1": "Lord Krishna is being worshipped here and he is known to be as a King of Dwarka. On the eve of Janmastami (the day on which the birthday of Lord Krishna is being celebrated) around thousand of Devotees addresses the temple to offer prayer and for other rituals.",
    "nav1": "/banke-bihari",

    "img2": "/images/mandir/west/kailash.png",
    "name2": "Kailash Temple",
    "place2": "(Aurangabad, Maharashtra)",
    "content2": "Kailash Temple is located in Ellora in Aurangabad district of Maharashtra. The temple is dedicated to Lord Shiva.It is one of the rock cut cave temple in India. It has 34 cave temples and monasteries which all together makes a benevolent Ellora Caves.",
    "nav2": "/banke-bihari",

    "img3": "/images/mandir/west/siddhivinayak.png",
    "name3": "Shree Siddhivinayak Temple",
    "place3": "(Mumbai, Maharashtra)",
    "content3": "Shree Siddhivinayak Mandir is dedicated to Lord Ganesha. Located in Prabhadevi in Mumbai, it is unquestionably the most popular and significant temple of Lord Shree Ganesh.This two centuries old Ganpati temple is the richest temple in Mumbai.",

    "img4": "/images/mandir/west/mahalaxmi.png",
    "name4": "Shree Mahalaxmi Temple",
    "place4": "(Mumbai, Maharashtra)",
    "content4": "The temple is devoted to Devi Mahalaxmi who is the deity of fortune as per the Hindu Mythology. It is one of the most well-known temples of Mumbai, situated on Bhulabhai Desai Road in Mahalaxmi part. The temple was constructed in 1831 by a Hindu merchant Dhakji Dadaji.",

    "img5": "/images/mandir/west/shani_dev.png",
    "name5": "Shani Dev",
    "place5": "(Shingnapur, Maharashtra)",
    "content5": "Shani Dev Shignapur is the most important shrine of Lord Shani, located in Maharashtra. It’s believed that the god here is \"Swayambhu\" that has self appeared from the earth in the form of Black but grand stone.The temple is believed to be a \"jagrut devasthan\".",

    "img6": "/images/mandir/west/trimbakeshwar.png",
    "name6": "Shree Trimbakeshwar Temple",
    "place6": "(Nasik, Maharashtra)",
    "content6": "The Trimbakeshwar temple is one of the most adored and holy pilgrimage sites in India. It is also said to be the support of the river Godavari as there are many myths associated with the life of this channel.Trimbakeshwar is a religious point having one of the twelve Jyotirlingas.",

  },

]

const WestMandir = () => {
  return (
    <Box>
      <NewNavbar />
      <MandirIntro mandir_type={'West India Mandir'} mandir_image={"url('/images/mandir/west_mandir.png')"} />
      <MandirList mandir={west_mandir} />
      <MandirEnd />
      <Footer />
    </Box>
  )
}

export default WestMandir
