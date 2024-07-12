import { useState } from 'react';
import axios from 'axios';

const ImageSearch = () => {
  const [query, setQuery] = useState('');
  const [images, setImages] = useState<string[]>([]);

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await axios.get('https://api.unsplash.com/search/photos', {
        params: { query },
        headers: {
          Authorization: `Client-ID YOUR_UNSPLASH_ACCESS_KEY`
        }
      });
      setImages(response.data.results.map((img: any) => img.urls.small));
    } catch (error) {
      console.error('Error fetching images', error);
    }
  };

  const handleBookmark = async (imageUrl: string) => {
    try {
      const token = localStorage.getItem('token');
      await axios.post('http://localhost:8000/api/bookmarks/', { image_url: imageUrl }, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      alert('Image bookmarked!');
    } catch (error) {
      console.error('Error bookmarking image', error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSearch}>
        <input type="text" value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search for images" required />
        <button type="submit">Search</button>
      </form>
      <div>
        {images.map((url, index) => (
          <div key={index}>
            <img src={url} alt="Unsplash Image" />
            <button onClick={() => handleBookmark(url)}>Bookmark</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageSearch;
