import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.f3.weathermate',
  appName: 'F3 WeatherMate',
  webDir: 'dist',
  server: {
    androidScheme: 'https'
  }
};

export default config;