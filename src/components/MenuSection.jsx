import React, { useState, useMemo } from 'react';
import { Coffee, Utensils, Sparkles, Plus, Check, Search, Info, QrCode, ArrowRight } from 'lucide-react';
import { cafeConfig } from '../config/cafeConfig';
import ImageWithFallback from './ImageWithFallback';

export default function MenuSection({
  onSelectItem,
  selectedItems = {},
  onOpenQrScanner,
  currentTable = 'Table 4 (Patio)',
  onOpenOrderModal,
}) {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [dietaryFilter, setDietaryFilter] = useState('All');
  const [priceBudget, setPriceBudget] = useState('All'); // 'All' | 'under150' | 'specials'

  // Filter menu items by category, search text, dietary preferences, and budget
  const filteredItems = useMemo(() => {
    return cafeConfig.menuItems.filter((item) => {
      const matchesCategory =
        activeCategory === 'All' || item.category.toLowerCase() === activeCategory.toLowerCase();
      
      const matchesSearch =
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesDietary =
        dietaryFilter === 'All' || item.dietary.toLowerCase() === dietaryFilter.toLowerCase();

      let matchesBudget = true;
      if (priceBudget === 'under150') {
        matchesBudget = item.price <= 140;
      } else if (priceBudget === 'above150') {
        matchesBudget = item.price >= 150;
      }

      return matchesCategory && matchesSearch && matchesDietary && matchesBudget;
    });
  }, [activeCategory, searchQuery, dietaryFilter, priceBudget]);

  const categories = cafeConfig.menuCategories;
  const dietaryOptions = ['All', 'Vegetarian', 'Vegan', 'Eggless'];

  return (
    <section id="menu" className="py-20 sm:py-28 bg-cream-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cream-200 text-espresso-800 text-xs font-semibold tracking-wider uppercase mb-3">
            <Utensils className="w-3.5 h-3.5 text-terracotta-500" />
            <span>Taste & Craft</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-espresso-900 tracking-tight">
            Our Everyday Menu
          </h2>
          <p className="text-base sm:text-lg text-espresso-600 mt-3 font-normal max-w-xl mx-auto">
            From ₹100 morning filter brews and herb fries to slow-fermented bakes and Callebaut chocolate tarts.
          </p>

          {/* Table Mode Banner */}
          <div className="mt-5 flex flex-wrap items-center justify-center gap-3">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-50 border border-amber-200 text-amber-900 text-xs font-medium">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>Table Ordering Active: <strong>{currentTable}</strong></span>
            </div>

            <button
              onClick={onOpenQrScanner}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-cream-200 hover:bg-cream-300 text-espresso-800 text-xs font-semibold transition-colors border border-cream-300"
            >
              <QrCode className="w-3.5 h-3.5 text-terracotta-500" />
              <span>Scan or Change Table QR</span>
            </button>
          </div>
        </div>

        {/* Filter Controls Bar */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-4 mb-10 pb-6 border-b border-cream-200">
          
          {/* Category Tabs (Scrollable on mobile) */}
          <div className="flex items-center gap-2 overflow-x-auto w-full lg:w-auto pb-2 lg:pb-0 scrollbar-none">
            {categories.map((cat) => {
              const isActive = activeCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-4 sm:px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 whitespace-nowrap focus:outline-none focus:ring-2 focus:ring-terracotta-500 ${
                    isActive
                      ? 'bg-espresso-900 text-cream-50 shadow-sm'
                      : 'bg-cream-100 text-espresso-700 hover:bg-cream-200 hover:text-espresso-900'
                  }`}
                  aria-pressed={isActive}
                >
                  {cat}
                </button>
              );
            })}
          </div>

          {/* Search, Budget & Dietary Filters */}
          <div className="flex flex-wrap items-center gap-3 w-full lg:w-auto justify-end">
            
            {/* Price Filter */}
            <div className="flex items-center gap-1">
              <span className="text-[11px] text-espresso-500 uppercase tracking-wider hidden sm:inline">Price:</span>
              <button
                onClick={() => setPriceBudget(priceBudget === 'under150' ? 'All' : 'under150')}
                className={`px-3 py-1.5 text-xs rounded-full border transition-colors ${
                  priceBudget === 'under150'
                    ? 'bg-terracotta-500 text-white border-terracotta-500'
                    : 'bg-cream-100 text-espresso-700 border-cream-300'
                }`}
              >
                ≤ ₹140 (Pocket-Friendly)
              </button>
            </div>

            {/* Search Input */}
            <div className="relative w-full sm:w-44">
              <Search className="w-4 h-4 text-espresso-500 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search menu..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-3 py-2 text-xs rounded-full bg-cream-100 border border-cream-300 text-espresso-900 placeholder:text-espresso-500 focus:outline-none focus:ring-2 focus:ring-terracotta-500 focus:bg-cream-50 transition-colors"
                aria-label="Search menu items"
              />
            </div>

            {/* Dietary Filter */}
            <div className="flex items-center gap-1">
              <div className="flex gap-1 overflow-x-auto">
                {dietaryOptions.map((diet) => (
                  <button
                    key={diet}
                    onClick={() => setDietaryFilter(diet)}
                    className={`px-2.5 py-1.5 text-[11px] rounded-full border transition-colors ${
                      dietaryFilter === diet
                        ? 'bg-sage-600 text-cream-50 border-sage-600'
                        : 'bg-transparent text-espresso-600 border-cream-300 hover:border-espresso-400'
                    }`}
                  >
                    {diet}
                  </button>
                ))}
              </div>
            </div>

          </div>
        </div>

        {/* Menu Items Grid */}
        {filteredItems.length === 0 ? (
          <div className="text-center py-16 bg-cream-100/50 rounded-3xl border border-dashed border-cream-300 p-8">
            <Coffee className="w-10 h-10 text-espresso-400 mx-auto mb-3" />
            <h3 className="font-serif text-xl font-bold text-espresso-900">No menu items match your search</h3>
            <p className="text-sm text-espresso-600 mt-1">Try resetting the category or budget filters.</p>
            <button
              onClick={() => {
                setActiveCategory('All');
                setSearchQuery('');
                setDietaryFilter('All');
                setPriceBudget('All');
              }}
              className="mt-4 px-4 py-2 text-xs font-semibold text-cream-50 bg-espresso-900 rounded-full hover:bg-espresso-800 transition-colors"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredItems.map((item) => {
              const count = selectedItems[item.id] || 0;
              return (
                <div
                  key={item.id}
                  className="bg-cream-100/40 hover:bg-cream-100/90 border border-cream-200/90 rounded-2xl p-4 transition-all duration-200 hover:shadow-warm flex flex-col justify-between group"
                >
                  {/* Top Image + Badges */}
                  <div>
                    <div className="w-full h-44 rounded-xl overflow-hidden bg-cream-200 relative mb-3.5">
                      <ImageWithFallback
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      {item.popular && (
                        <span className="absolute top-2 left-2 bg-espresso-900/90 text-cream-50 text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider">
                          Popular
                        </span>
                      )}
                      <span className="absolute bottom-2 right-2 bg-cream-50/95 backdrop-blur-sm text-espresso-900 font-serif font-bold text-sm px-2.5 py-1 rounded-full shadow-sm">
                        ₹{item.price}
                      </span>
                    </div>

                    <div className="flex items-center gap-2 mb-1.5">
                      <span className="text-[11px] font-semibold text-terracotta-600 uppercase tracking-wider">
                        {item.category}
                      </span>
                      <span className="text-cream-300">•</span>
                      <span className="text-[11px] font-medium text-sage-700 bg-sage-50 px-2 py-0.5 rounded-md border border-sage-200">
                        {item.dietary}
                      </span>
                    </div>

                    <h3 className="font-serif text-lg font-bold text-espresso-900 group-hover:text-terracotta-600 transition-colors">
                      {item.name}
                    </h3>

                    <p className="text-xs text-espresso-600 mt-1.5 line-clamp-2 leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  {/* Add to Order Action */}
                  <div className="pt-3.5 mt-3.5 border-t border-cream-200/60 flex items-center justify-between">
                    <span className="text-xs font-mono font-bold text-espresso-900">
                      ₹{item.price}
                    </span>
                    <button
                      onClick={() => onSelectItem(item)}
                      className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all duration-150 active:scale-95 shadow-sm ${
                        count > 0
                          ? 'bg-sage-600 text-cream-50 hover:bg-sage-700'
                          : 'bg-espresso-900 text-cream-50 hover:bg-terracotta-500'
                      }`}
                      aria-label={`Add ${item.name} to order`}
                    >
                      {count > 0 ? (
                        <>
                          <Check className="w-3.5 h-3.5" />
                          <span>Added ({count})</span>
                        </>
                      ) : (
                        <>
                          <Plus className="w-3.5 h-3.5" />
                          <span>Add to Order</span>
                        </>
                      )}
                    </button>
                  </div>

                </div>
              );
            })}
          </div>
        )}

      </div>
    </section>
  );
}
