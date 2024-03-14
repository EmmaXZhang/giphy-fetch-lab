/* eslint-disable no-undef */
import GifList from "./GifList";
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";

export default function SearchBar() {
  const [searchTerm, setSearchTerm] = useState("");
  const [gif, setGif] = useState([]);

  function handleChange(event) {
    setSearchTerm(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
  }

  // useEffect will trigger whenever searchTerm changes
  useEffect(() => {
    if (searchTerm) {
      searchGif(searchTerm);
    }
  }, [searchTerm]);

  async function searchGif(searchTerm) {
    try {
      const response = await axios.get(
        `https://api.giphy.com/v1/gifs/search?api_key=zvglp30k7qbhlAhfLUfOe8aFNiGPTKWa&q=${searchTerm}&limit=1`
      );
      setGif(response.data.data);
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>Search Gifs</label>
        <input type="text" value={searchTerm} onChange={handleChange} />
        <button type="submit">Search</button>
        <GifList gif={gif} />
      </form>
    </>
  );
}
