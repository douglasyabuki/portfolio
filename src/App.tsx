import { Footer } from './components/footer/Footer';
import { Header } from './components/header/Header';
import { MainView } from './components/main-view/MainView';

export const App = () => {
  return (
    <main className="text-text-primary min-h-screen w-full">
      <Header />
      <MainView />
      <Footer />
    </main>
  );
};
