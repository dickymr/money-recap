import Theme from '@/providers/theme';

export default function Providers({ children }: { children: React.ReactNode }) {
  return <Theme>{children}</Theme>;
}
