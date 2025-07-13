
import * as React from 'react';
import { BottomNavigation } from 'react-native-paper';

// 👇 Import your full pages
import BooksPage from '../mypages/books_page';
import ReadPage from '../mypages/read_page';

const BottomBar = () => {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'books', title: 'Books', focusedIcon: 'book' },
    { key: 'read', title: 'Read', focusedIcon: 'book-open' },
  ]);

  const renderScene = BottomNavigation.SceneMap({
    books: BooksPage,
    read: ReadPage,
  });

  return (
    <BottomNavigation
      navigationState={{ index, routes }}
      onIndexChange={setIndex}
      renderScene={renderScene}
    />
  );
};

export default BottomBar;
