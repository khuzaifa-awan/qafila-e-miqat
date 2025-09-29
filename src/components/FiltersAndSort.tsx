import { useState } from 'react';
import { Filter, SlidersHorizontal, Calendar, DollarSign, Star, Clock } from 'lucide-react';
import { Button } from './ui/buttonP';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Slider } from './ui/slider';
import { Checkbox } from './ui/checkbox';
import { Badge } from './ui/badge';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from './ui/collapsible';

export interface FilterOptions {
  duration: string[];
  budget: [number, number];
  stars: number[];
  month: string[];
  flightType: string[];
}

interface FiltersAndSortProps {
  onFilterChange: (filters: FilterOptions) => void;
  onSortChange: (sortBy: string) => void;
  activeFilters: FilterOptions;
  totalPackages: number;
  filteredPackages: number;
}

export function FiltersAndSort({
  onFilterChange,
  onSortChange,
  activeFilters,
  totalPackages,
  filteredPackages
}: FiltersAndSortProps) {
  const [isFiltersOpen, setIsFiltersOpen] = useState(false);
  const [priceRange, setPriceRange] = useState<[number, number]>(activeFilters.budget);

  const durationOptions = ['7 Days', '10 Days', '14 Days', '21 Days', '30 Days'];
  const starOptions = [3, 4, 5];
  const monthOptions = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];
  // const flightOptions = ['Direct', 'Indirect'];
  const sortOptions = [
    { value: 'price-low', label: 'Price: Low to High' },
    { value: 'price-high', label: 'Price: High to Low' },
    { value: 'popularity', label: 'Most Popular' },
    { value: 'rating', label: 'Highest Rated' },
    { value: 'duration', label: 'Duration' },
    { value: 'newest', label: 'Newest Packages' }
  ];

  const handleFilterUpdate = (filterType: keyof FilterOptions, value: any) => {
    const newFilters = { ...activeFilters, [filterType]: value };
    onFilterChange(newFilters);
  };

  const handleArrayFilter = (filterType: keyof FilterOptions, value: string, checked: boolean) => {
    const currentArray = activeFilters[filterType] as string[];
    let newArray;
    
    if (checked) {
      newArray = [...currentArray, value];
    } else {
      newArray = currentArray.filter(item => item !== value);
    }
    
    handleFilterUpdate(filterType, newArray);
  };

  const handleStarFilter = (star: number, checked: boolean) => {
    const currentStars = activeFilters.stars as number[];
    let newStars;
    
    if (checked) {
      newStars = [...currentStars, star];
    } else {
      newStars = currentStars.filter(s => s !== star);
    }
    
    handleFilterUpdate('stars', newStars);
  };

  const clearAllFilters = () => {
    const clearedFilters: FilterOptions = {
      duration: [],
      budget: [150000, 500000],
      stars: [],
      month: [],
      flightType: []
    };
    onFilterChange(clearedFilters);
    setPriceRange([150000, 500000]);
  };

  const getActiveFilterCount = () => {
    return activeFilters.duration.length + 
           activeFilters.stars.length + 
           activeFilters.month.length + 
           activeFilters.flightType.length +
           (priceRange[0] !== 150000 || priceRange[1] !== 500000 ? 1 : 0);
  };

  return (
    <div className="bg-[#eaddcf] border rounded-lg p-6 mb-6 top-20 z-40">
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
        {/* Results Count */}
        <div className="flex items-center gap-2">
          <span className="text-sm text-muted-foreground">
            Showing {filteredPackages} of {totalPackages} packages
          </span>
          {getActiveFilterCount() > 0 && (
            <Badge variant="secondary" className="ml-2">
              {getActiveFilterCount()} filters applied
            </Badge>
          )}
        </div>

        {/* Sort and Filter Controls */}
        <div className="flex items-center gap-4">
          {/* Sort */}
          <div className="flex items-center gap-2">
            <SlidersHorizontal className="w-4 h-4" />
            <Select onValueChange={onSortChange}>
              <SelectTrigger className="w-48 bg-accent">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent className='bg-white'>
                {sortOptions.map((option) => (
                  <SelectItem key={option.value} value={option.value}>
                    {option.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Filter Toggle */}
          <Button
            variant="outline"
            onClick={() => setIsFiltersOpen(!isFiltersOpen)}
            className="flex items-center gap-2"
          >
            <Filter className="w-4 h-4" />
            Filters
            {getActiveFilterCount() > 0 && (
              <Badge variant="destructive" className="ml-1 px-1.5 py-0.5 text-xs">
                {getActiveFilterCount()}
              </Badge>
            )}
          </Button>

          {getActiveFilterCount() > 0 && (
            <Button variant="ghost" onClick={clearAllFilters} className="text-sm">
              Clear All
            </Button>
          )}
        </div>
      </div>

      {/* Expandable Filters */}
      <Collapsible open={isFiltersOpen} onOpenChange={setIsFiltersOpen}>
        <CollapsibleContent className="mt-6 pt-6 border-t">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            
            {/* Duration Filter */}
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-primary" />
                <h4 className="font-medium">Duration</h4>
              </div>
              <div className="space-y-2">
                {durationOptions.map((duration) => (
                  <div key={duration} className="flex items-center space-x-2">
                    <Checkbox
                      id={`duration-${duration}`}
                      checked={activeFilters.duration.includes(duration)}
                      onCheckedChange={(checked) => 
                        handleArrayFilter('duration', duration, checked as boolean)
                      }
                    />
                    <label htmlFor={`duration-${duration}`} className="text-sm">
                      {duration}
                    </label>
                  </div>
                ))}
              </div>
            </div>

            {/* Budget Filter */}
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <DollarSign className="w-4 h-4 text-primary" />
                <h4 className="font-medium">Budget (PKR)</h4>
              </div>
              <div className="space-y-4">
                <Slider
                  value={priceRange}
                  onValueChange={(value) => {
                    setPriceRange(value as [number, number]);
                    handleFilterUpdate('budget', value);
                  }}
                  max={500000}
                  min={150000}
                  step={10000}
                  className="w-full"
                />
                <div className="flex justify-between text-sm text-muted-foreground">
                  <span>PKR {priceRange[0].toLocaleString()}</span>
                  <span>PKR {priceRange[1].toLocaleString()}</span>
                </div>
              </div>
            </div>

            {/* Hotel Stars Filter */}
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <Star className="w-4 h-4 text-primary" />
                <h4 className="font-medium">Hotel Rating</h4>
              </div>
              <div className="space-y-2">
                {starOptions.map((stars) => (
                  <div key={stars} className="flex items-center space-x-2">
                    <Checkbox
                      id={`stars-${stars}`}
                      checked={activeFilters.stars.includes(stars)}
                      onCheckedChange={(checked) => 
                        handleStarFilter(stars, checked as boolean)
                      }
                    />
                    <label htmlFor={`stars-${stars}`} className="text-sm flex items-center gap-1">
                      {stars} Star {Array.from({ length: stars }, (_, i) => (
                        <Star key={i} className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                      ))}
                    </label>
                  </div>
                ))}
              </div>
            </div>

            {/* Travel Month Filter */}
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4 text-primary" />
                <h4 className="font-medium">Travel Month</h4>
              </div>
              <div className="space-y-2 max-h-40 overflow-y-auto">
                {monthOptions.map((month) => (
                  <div key={month} className="flex items-center space-x-2">
                    <Checkbox
                      id={`month-${month}`}
                      checked={activeFilters.month.includes(month)}
                      onCheckedChange={(checked) => 
                        handleArrayFilter('month', month, checked as boolean)
                      }
                    />
                    <label htmlFor={`month-${month}`} className="text-sm">
                      {month}
                    </label>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </CollapsibleContent>
      </Collapsible>
    </div>
  );
}