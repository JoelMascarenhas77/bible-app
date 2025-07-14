// pages/ReadPage.tsx
import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { Button, Card } from 'react-native-paper';

const oldTestament = [
  ['Gen', 'Ex', 'Lev', 'Num', 'Deu'],
  ['Jos', 'Jdg', 'Rut'],
  ['1Sa', '2Sa', '1Ki', '2Ki', '1Ch', '2Ch'],
  ['Ezr', 'Neh', 'Est'],
  ['Job', 'Psa', 'Pro', 'Ecc', 'Sng'],
  ['Isa', 'Jer', 'Lam', 'Ezk', 'Dan'],
  ['Hos', 'Joe', 'Amo', 'Oba', 'Jon', 'Mic'],
  ['Nah', 'Hab', 'Zep', 'Hag', 'Zec', 'Mal'],
];

const newTestament = [
  ['Mat', 'Mk', 'Lk', 'Jn', 'Act'],
  ['Rom', '1Co', '2Co'],
  ['Gal', 'Eph', 'Php', 'Col'],
  ['1Th', '2Th', '1Ti', '2Ti', 'Tit', 'Phm'],
  ['Heb', 'Jas', '1Pe', '2Pe'],
  ['1Jn', '2Jn', '3Jn', 'Jud', 'Rev'],
];

const BooksPage = () => {
  const renderRow = (row: string[], index: number) => (
    <View key={index} style={styles.rowCard}>
      <View style={styles.buttonRow}>
        {row.map((book, idx) => (
          <Button
            key={idx}
            mode="contained"
            compact={true}
            onPress={() => console.log(`Pressed ${book}`)}
            contentStyle={{ paddingVertical: 0, paddingHorizontal: 4 }}
            labelStyle={{ fontSize: 12 }}
            style={styles.button}
          >
            {book}
          </Button>
        ))}
      </View>
    </View>
  );

  return (
    <ScrollView style={styles.container}>
      <Card style={styles.card}>
        <Card.Title title="Old Testament" />
        <Card.Content>
          {oldTestament.map(renderRow)}
        </Card.Content>
      </Card>

      <Card style={styles.card}>
        <Card.Title title="New Testament" />
        <Card.Content>
          {newTestament.map(renderRow)}
        </Card.Content>
      </Card>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    paddingTop: 30,
  },
  card: {
    marginBottom: 10,
  },
  rowCard: {
    marginBottom: 6,
    backgroundColor: '#f2f2f2',
    paddingVertical: 4,
    paddingHorizontal: 2,
    borderRadius: 4,
  },
  buttonRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  button: {
    marginRight: 4,
    minWidth: 40,
    width: '15%',
  },
});

export default BooksPage;
