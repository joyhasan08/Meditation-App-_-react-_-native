import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';

interface MeditationSession {
  date: string;
  duration: number;
  type: string;
}

const MeditationHistory = () => {
  // This would typically come from a state management system or local storage
  const dummyHistory: MeditationSession[] = [
    { date: '2025-11-04', duration: 10, type: 'Mindfulness' },
    { date: '2025-11-03', duration: 15, type: 'Breathing' },
    { date: '2025-11-02', duration: 20, type: 'Focus' },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Meditation History</Text>
      <ScrollView style={styles.historyList}>
        {dummyHistory.map((session, index) => (
          <View key={index} style={styles.historyItem}>
            <Text style={styles.date}>{session.date}</Text>
            <Text style={styles.details}>
              {session.duration} mins - {session.type}
            </Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#f5f5f5',
    borderRadius: 10,
    marginTop: 16,
  },
  heading: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 12,
  },
  historyList: {
    maxHeight: 200,
  },
  historyItem: {
    backgroundColor: 'white',
    padding: 12,
    marginBottom: 8,
    borderRadius: 8,
    elevation: 2,
  },
  date: {
    fontSize: 14,
    fontWeight: '600',
  },
  details: {
    fontSize: 12,
    color: '#666',
    marginTop: 4,
  },
});

export default MeditationHistory;