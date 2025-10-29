import React, { useEffect, useMemo, useRef, useState } from 'react';
import { Alert, Animated, Easing, SafeAreaView, Text, TextInput, TouchableOpacity, View } from 'react-native';

function formatTime(totalSeconds: number) {
  const m = Math.floor(totalSeconds / 60).toString().padStart(2, '0');
  const s = Math.floor(totalSeconds % 60).toString().padStart(2, '0');
  return `${m}:${s}`;
}

export default function BreakScreen() {
  const presets = [5, 10, 15]; // minutes
  const [minutes, setMinutes] = useState<number>(5);
  const [total, setTotal] = useState<number>(minutes * 60);
  const [remaining, setRemaining] = useState<number>(minutes * 60);
  const [running, setRunning] = useState<boolean>(false);

  const intervalRef = useRef<number | null>(null);
  const progress = useRef(new Animated.Value(0)).current; // 0..100 percent

  // keep total/remaining in sync when minutes changes and timer not running
  useEffect(() => {
    if (!running) {
      const t = Math.max(1, Math.floor(minutes)) * 60;
      setTotal(t);
      setRemaining(t);
      progress.setValue(0);
    }
  }, [minutes, running, progress]);

  // tick loop
  const start = () => {
    if (running || remaining <= 0) return;
    setRunning(true);
    const startAt = Date.now();
    const startRemaining = remaining;
    intervalRef.current = setInterval(() => {
      const elapsed = (Date.now() - startAt) / 1000;
      const next = Math.max(0, startRemaining - elapsed);
      setRemaining(next);
    }, 100) as unknown as number;
  };

  const pause = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = null;
    setRunning(false);
  };

  const reset = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = null;
    setRunning(false);
    setRemaining(total);
    Animated.timing(progress, { toValue: 0, duration: 200, easing: Easing.out(Easing.ease), useNativeDriver: false }).start();
  };

  // progress animation and finish handling
  useEffect(() => {
    const pct = total > 0 ? ((total - remaining) / total) * 100 : 0;
    Animated.timing(progress, { toValue: pct, duration: 120, easing: Easing.out(Easing.ease), useNativeDriver: false }).start();

    if (remaining <= 0 && running) {
      pause();
      // Placeholder finish behavior (no audio yet)
      Alert.alert('Time up', 'Hope you feel calmer ✨');
    }
  }, [remaining, total]);

  useEffect(() => () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
  }, []);

  const barWidth = progress.interpolate({ inputRange: [0, 100], outputRange: ['0%', '100%'] });

  const ControlButton = ({ label, onPress, kind = 'primary' as 'primary' | 'secondary' }:
    { label: string; onPress: () => void; kind?: 'primary' | 'secondary' }) => (
    <TouchableOpacity onPress={onPress} className={`${kind === 'primary' ? 'bg-teal-600' : 'bg-slate-200'} px-5 py-3 rounded-xl`}>
      <Text className={`${kind === 'primary' ? 'text-white' : 'text-slate-800'} font-semibold`}>{label}</Text>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView className='flex-1 bg-white'>
      <View className='p-6 gap-6'>
        <View>
          <Text className='text-3xl font-semibold'>Take a Break</Text>
          <Text className='text-slate-600 mt-1'>Set a timer and breathe.</Text>
        </View>

        <View className='flex-row gap-2'>
          {presets.map(m => (
            <TouchableOpacity key={m} onPress={() => setMinutes(m)} className={`px-3 py-2 rounded-full border ${minutes === m ? 'bg-teal-600 border-teal-600' : 'bg-white border-slate-300'}`}>
              <Text className={`${minutes === m ? 'text-white' : 'text-slate-700'}`}>{m} min</Text>
            </TouchableOpacity>
          ))}
        </View>

        <View className='flex-row items-center gap-2'>
          <TextInput
            keyboardType='number-pad'
            placeholder='Custom minutes'
            value={String(minutes)}
            onChangeText={(t) => setMinutes(Number(t.replace(/[^0-9]/g, '')) || 0)}
            className='flex-1 border border-slate-300 rounded-xl px-3 py-2'
          />
          <TouchableOpacity onPress={() => { /* minutes already bound */ }} className='px-4 py-2 rounded-xl bg-slate-100 border border-slate-300'>
            <Text className='text-slate-700'>Apply</Text>
          </TouchableOpacity>
        </View>

        <View className='items-center gap-3 mt-2'>
          <Text className='text-6xl font-light'>{formatTime(remaining)}</Text>
          <View className='w-full h-3 bg-slate-200 rounded-full overflow-hidden'>
            <Animated.View style={{ width: barWidth }} className='h-3 bg-teal-600' />
          </View>
        </View>

        <View className='flex-row justify-center gap-3 pt-2'>
          {!running ? (
            <ControlButton label='Start' onPress={start} />
          ) : (
            <ControlButton label='Pause' onPress={pause} />
          )}
          <ControlButton label='Reset' onPress={reset} kind='secondary' />
        </View>
      </View>
    </SafeAreaView>
  );
}