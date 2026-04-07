import { useState, useEffect, useMemo } from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import SnippetCard from './components/SnippetCard';
import { categories, snippets } from './data';

function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState<string | null>(
    categories[0].id
  );
  const [favorites, setFavorites] = useState<Set<string>>(new Set());
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const savedDarkMode = localStorage.getItem('darkMode') === 'true';
    setDarkMode(savedDarkMode);
    if (savedDarkMode) {
      document.documentElement.classList.add('dark');
    }

    const savedFavorites = localStorage.getItem('favorites');
    if (savedFavorites) {
      setFavorites(new Set(JSON.parse(savedFavorites)));
    }
  }, []);

  const toggleDarkMode = () => {
    const newDarkMode = !darkMode;
    setDarkMode(newDarkMode);
    localStorage.setItem('darkMode', String(newDarkMode));
    if (newDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  const toggleFavorite = (id: string) => {
    const newFavorites = new Set(favorites);
    if (newFavorites.has(id)) {
      newFavorites.delete(id);
    } else {
      newFavorites.add(id);
    }
    setFavorites(newFavorites);
    localStorage.setItem('favorites', JSON.stringify([...newFavorites]));
  };

  const filteredSnippets = useMemo(() => {
    return snippets.filter((snippet) => {
      const matchesSearch =
        searchQuery === '' ||
        snippet.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        snippet.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        snippet.code.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesCategory =
        activeCategory === null || snippet.category === activeCategory;

      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, activeCategory]);

  const snippetCounts = useMemo(() => {
    const counts: Record<string, number> = {};
    categories.forEach((category) => {
      counts[category.id] = snippets.filter(
        (snippet) => snippet.category === category.id
      ).length;
    });
    return counts;
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950 transition-colors">
      <Header
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        darkMode={darkMode}
        onToggleDarkMode={toggleDarkMode}
      />

      <div className="flex">
        <Sidebar
          categories={categories}
          activeCategory={activeCategory}
          onCategoryClick={setActiveCategory}
          snippetCounts={snippetCounts}
        />

        <main className="flex-1 p-8 overflow-y-auto h-[calc(100vh-73px)]">
          <div className="max-w-5xl mx-auto">
            {searchQuery && (
              <div className="mb-6">
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Found <span className="font-semibold">{filteredSnippets.length}</span> snippet
                  {filteredSnippets.length !== 1 ? 's' : ''} matching "{searchQuery}"
                </p>
              </div>
            )}

            {activeCategory && !searchQuery && (
              <div className="mb-6">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                  {categories.find((c) => c.id === activeCategory)?.name}
                </h2>
                <p className="text-gray-600 dark:text-gray-400">
                  {filteredSnippets.length} snippet{filteredSnippets.length !== 1 ? 's' : ''}
                </p>
              </div>
            )}

            <div className="grid gap-6">
              {filteredSnippets.length === 0 ? (
                <div className="text-center py-12">
                  <p className="text-gray-500 dark:text-gray-400 text-lg">
                    No snippets found matching your search.
                  </p>
                </div>
              ) : (
                filteredSnippets.map((snippet) => (
                  <SnippetCard
                    key={snippet.id}
                    snippet={snippet}
                    isFavorite={favorites.has(snippet.id)}
                    onToggleFavorite={toggleFavorite}
                  />
                ))
              )}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;
