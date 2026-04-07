import { Download, Eye, Sparkles, Filter, Layers, Merge, BarChart3, Video as LucideIcon } from 'lucide-react';
import { Category } from '../types';

interface SidebarProps {
  categories: Category[];
  activeCategory: string | null;
  onCategoryClick: (categoryId: string) => void;
  snippetCounts: Record<string, number>;
}

const iconMap: Record<string, LucideIcon> = {
  Download,
  Eye,
  Sparkles,
  Filter,
  Layers,
  Merge,
  BarChart3,
};

export default function Sidebar({
  categories,
  activeCategory,
  onCategoryClick,
  snippetCounts,
}: SidebarProps) {
  return (
    <aside className="w-64 bg-white dark:bg-gray-900 border-r border-gray-200 dark:border-gray-700 h-[calc(100vh-73px)] overflow-y-auto">
      <div className="p-4">
        <h2 className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-3">
          Categories
        </h2>
        <nav className="space-y-1">
          {categories.map((category) => {
            const Icon = iconMap[category.icon];
            const isActive = activeCategory === category.id;
            const count = snippetCounts[category.id] || 0;

            return (
              <button
                key={category.id}
                onClick={() => onCategoryClick(category.id)}
                className={`w-full flex items-center justify-between gap-3 px-3 py-2.5 rounded-lg text-left transition-all ${
                  isActive
                    ? 'bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-400'
                    : 'text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800'
                }`}
              >
                <div className="flex items-center gap-3 flex-1">
                  <Icon className="w-5 h-5 flex-shrink-0" />
                  <span className="font-medium text-sm">{category.name}</span>
                </div>
                <span
                  className={`text-xs px-2 py-0.5 rounded-full ${
                    isActive
                      ? 'bg-blue-100 dark:bg-blue-800 text-blue-700 dark:text-blue-300'
                      : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400'
                  }`}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </nav>
      </div>
    </aside>
  );
}
