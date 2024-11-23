export type Meditation = {
    id: number;
    title: string;
    duration: number;
    description: string;
    type: 'audio' | 'video';
    pro: boolean
}