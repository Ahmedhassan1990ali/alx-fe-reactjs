import Search from './components/Search';
import AdvancedSearch from './components/AdvancedSearch';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-center mb-8">GitHub User Search</h1>
        
        {/* Simple Search */}
        <div className="mb-12">
          <h2 className="text-xl font-semibold mb-4">Simple Search</h2>
          <Search />
        </div>
        
        {/* Advanced Search */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Advanced Search</h2>
          <AdvancedSearch />
        </div>
      </div>
    </div>
  );
}

export default App;