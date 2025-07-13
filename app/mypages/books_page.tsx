// pages/ReadPage.tsx
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Button, Card } from 'react-native-paper';

const oldTestament = [
  'GEN', 'EXO', 'LEV', 'NUM', 'DEU',
  'JOS', 'JDG', 'RUT', '1SA', '2SA',
  '1KI', '2KI', '1CH', '2CH', 'EZR',
  'NEH', 'EST', 'JOB', 'PSA', 'PRO',
  'ECC', 'SNG', 'ISA', 'JER', 'LAM',
  'EZK', 'DAN', 'HOS', 'JOL', 'AMO',
  'OBA', 'JON', 'MIC', 'NAH', 'HAB',
  'ZEP', 'HAG', 'ZEC', 'MAL'
];

const newTestament = [
  'MAT', 'MRK', 'LUK', 'JHN', 'ACT',
  'ROM', '1CO', '2CO', 'GAL', 'EPH',
  'PHP', 'COL', '1TH', '2TH', '1TI',
  '2TI', 'TIT', 'PHM', 'HEB', 'JAS',
  '1PE', '2PE', '1JN', '2JN', '3JN',
  'JUD', 'REV'
];

const BooksPage = () => {
  const renderButtons = (books: string[]) =>
    books.map((book, index) => (
      <Button
        key={index}
        mode="contained"
        style={styles.button}
        onPress={() => console.log(`Pressed ${book}`)}
      >
        {book}
      </Button>
    ));

  return (
    <View style={styles.container}>
      <Card style={styles.card}>
        <Card.Title title="Old Testament" />
        <Card.Content>
          <View style={styles.buttonGrid}>
            {renderButtons(oldTestament)}
          </View>
        </Card.Content>
      </Card>

      <Card style={styles.card}>
        <Card.Title title="New Testament" />
        <Card.Content>
          <View style={styles.buttonGrid}>
            {renderButtons(newTestament)}
          </View>
        </Card.Content>
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 12,
  },
  card: {
    marginBottom: 16,
  },
  buttonGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
   
  },
  button: {
    margin: 3,
    width: '8%',
  },
});

export default BooksPage;
