import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import SearchBar from '../../components/SearchBar/SearchBar'

const Home = () => {
  const SearchHandler = (SearchData) => {
    console.log(SearchData);
  }

  return (
    <>
      <Navbar />
      <SearchBar onSearchChange={SearchHandler} />
    </>
  )
}

export default Home