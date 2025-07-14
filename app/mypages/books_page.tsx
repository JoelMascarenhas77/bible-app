// pages/ReadPage.tsx
import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { Button, Card } from 'react-native-paper';

const oldTestament = [
  'Gen', 'Exo', 'Lev', 'Num', 'Deu',
  'Jos', 'Jdg', 'Rut', '1Sa', '2Sa',
  '1Ki', '2Ki', '1Ch', '2Ch', 'Ezr',
  'Neh', 'Est', 'Job', 'Psa', 'Pro',
  'Ecc', 'Sng', 'Isa', 'Jer', 'Lam',
  'Ezk', 'Dan', 'Hos', 'Jol', 'Amo',
  'Oba', 'Jon', 'Mic', 'Nah', 'Hab',
  'Zep', 'Hag', 'Zec', 'Mal'
];

const newTestament = [
  'Mat', 'Mrk', 'Luk', 'Jhn', 'Act',
  'Rom', '1Co', '2Co', 'Gal', 'Eph',
  'Php', 'Col', '1Th', '2Th', '1Ti',
  '2Ti', 'Tit', 'Phm', 'Heb', 'Jas',
  '1Pe', '2Pe', '1Jn', '2Jn', '3Jn',
  'Jud', 'Rev'
];


const BooksPage = () => {
  const renderButtons = (books: string[]) =>
    books.map((book, index) => (
      <Button
        key={index}
        mode="contained"
        style={styles.button}
        compact = {true}
        labelStyle={{fontSize: 8  }}
        onPress={() => console.log(`Pressed ${book}`)}
      >
        {book}
      </Button>
    ));

  return (
    <ScrollView  style= {styles.container}>
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
  
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 1,
  },
  card: {
    marginBottom: 4,
  },
  buttonGrid: {
   
    flexDirection: 'row',
    flexWrap: 'wrap',
   
  },
  button: {

 
  width: '15%',
  margin: 1,
  minWidth: 1,
  alignItems: 'center',
},


});

export default BooksPage;
