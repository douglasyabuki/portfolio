import { Footer } from './components/footer/Footer';
import { Header } from './components/header/Header';
import { MainView } from './components/main-view/MainView';

export const App = () => {
  return (
    <main className="page text-white-primary scrollbar-hide">
      <Header />
      <MainView />
      <Footer />
    </main>
  );
};
