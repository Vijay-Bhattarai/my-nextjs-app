import { useEffect, useState } from 'react';
import axios from 'axios';

const Bookmarks = () => {
  const [bookmarks, setBookmarks] = useState<any[]>([]);

  useEffect(() => {
    const fetchBookmarks = async () => {
      try {
        const token = localStorage.getItem('token');
        const response = await axios.get('http://localhost:8000/api/bookmarks/', {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
        setBookmarks(response.data);
      } catch (error) {
        console.error('Error fetching bookmarks', error); // Fixed: Added closing parenthesis
      }
    };
    fetchBookmarks();
  }, []); // Dependency array is empty, so it runs once on component mount

  return (
    <div>
      <h2>Your Bookmarks</h2>
      <div>
        {bookmarks.map((bookmark, index) => (
          <div key={index}>
            <img src={bookmark.image_url} alt="Bookmarked" />
            <p>{bookmark.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Bookmarks;
