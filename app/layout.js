import './globals.css';
import Header from './components/Header';
import Footer from './components/Footer';
import GsapScrollProvider from './components/GsapScrollProvider';

export const metadata = {
  title: 'SyncOps',
  description: 'AI-powered software solutions, development, and consulting by SyncOps.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true}>
        <GsapScrollProvider />
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}


