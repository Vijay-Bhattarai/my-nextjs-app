import ProtectedRoute from '../components/ProtectedRoute';
import Bookmarks from '../components/Bookmarks';

const BookmarksPage = () => {
  return (
    <ProtectedRoute>
      <Bookmarks />
    </ProtectedRoute>
  );
};

export default BookmarksPage;
