import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  const myName = [
    {
      id: 1,
      name: "Nicole",
    },
    {
      id: 2,
      name: "Alex",
    },
    {
      id: 3,
      name: "Gavin",
    },
    {
      id: 4,
      name: "Gideon",
    }
  ];

  const toDoList = [
    {
      id: 1,
      title: "Wash Dishes",
      description: "Wash and put away dishes after dinner tonight.",
    },
    {
      id: 2,
      title: "Take Out Trash",
      description: "Take out trash in kitchen and bathrooms in the morning.",
    },
    {
      id: 3,
      title: "Feed the Cats",
      description: "Feed the cats tonight.",
    },
    {
      id: 4,
      title: "Laundry",
      description: "Fold and put away your laundry today.",
    },
    {
      id: 5,
      title: "Put Away Toys",
      description: "Pick up and put away all your toys, books, and clothes/shoes before bed.",
    }
  ];

  const randomName = () => {
    const int = Math.floor(Math.random() * 4);
    return myName[int].name
  }
  const randomChore = () => {
    const int = Math.floor(Math.random() * 5);
    return toDoList[int].title;
  }
  return (
    <View style={styles.container}>
      <Text>
      <div className="Random">
        <h1>What's Your Chore???</h1>
        <h4>Hey there {randomName()}!</h4>
        <h4>Your chore today is:</h4>
        <h3>{randomChore()}</h3>

      </div>
      </Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    textAlign: 'center',
    justifyContent: 'center',
  },
});
