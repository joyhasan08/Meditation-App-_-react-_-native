import { Meditation } from "./types";

export const meditation: Meditation[] = [
    {
        id: 1,
        title: 'Morning Mindfulness',
        duration: 10, // in minutes
        description: 'A short session to help you start your day with a clear mind.',
        type: 'audio',
        pro: false
    },
    {
        id: 2,
        title: 'Deep Sleep Meditation',
        duration: 30, // in minutes
        description: 'A calming session to guide you into a peaceful sleep.',
        type: 'audio',
        pro: true
    },
    {
        id: 3,
        title: 'Guided Meditation for Stress Relief',
        duration: 20, // in minutes
        description: 'A guided session to help reduce stress and anxiety.',
        type: 'video',
        pro: false
    },
    {
        id: 4,
        title: 'Chakra Balancing Meditation',
        duration: 45, // in minutes
        description: 'A longer session focused on balancing your chakras and energy flow.',
        type: 'audio',
        pro: true
    },
    {
        id: 5,
        title: 'Breathing Techniques for Focus',
        duration: 15, // in minutes
        description: 'A brief session that teaches breathing techniques to improve focus.',
        type: 'video',
        pro: false
    }
]