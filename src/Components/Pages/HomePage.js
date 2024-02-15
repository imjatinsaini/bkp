import React from 'react'
import Navbar from '../Layout/Navbar'
import CarouselSlider from '../Widgets/HomeWidgets/CarouselSlider';
import Searchbar from '../Widgets/HomeWidgets/Searchbar';
import Services from '../Widgets/HomeWidgets/Services';
import Donate from '../Widgets/HomeWidgets/Donate';
import { Box } from '@mui/material';
import QuotesSlider from '../Widgets/HomeWidgets/QuotesSlider';
import NewsFeed from '../Widgets/HomeWidgets/NewsFeed';
import TourGuide from '../Widgets/HomeWidgets/TourGuide';
import WellnessPractice from '../Widgets/HomeWidgets/WellnessPractice';
import Footer from '../Widgets/HomeWidgets/Footer';

const HomePage = () => {

  return (
    <Box bgcolor='#f8f7f4'>
      <Navbar />
      <CarouselSlider />
      <Searchbar />
      <Services />
      <Donate />
      <QuotesSlider />
      <NewsFeed />
      <TourGuide />
      <WellnessPractice />
      <Footer />
    </Box>
  )
}

export default HomePage
