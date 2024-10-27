import Header from './Header';
import Footer from './Footer';
import ModuleNavigator from './ModuleNavigator';

export default function Layout({ children }) {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="flex-grow flex">
        {/* Desktop Module Navigator */}
        <div className="hidden lg:block w-80 border-r border-gray-800">
          <ModuleNavigator />
        </div>
        
        {/* Main Content Area */}
        <main className="flex-grow overflow-y-auto">
          <div className="container py-8 px-4 lg:px-8">
            {children}
          </div>
        </main>
      </div>
      <Footer />
    </div>
  );
}
