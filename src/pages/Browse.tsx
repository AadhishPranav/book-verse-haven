
import { useState, useEffect } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import BookGrid from "@/components/books/BookGrid";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Search, X } from "lucide-react";
import mockBooks from "@/data/mockBooks";
import { Book } from "@/types/Book";

const Browse = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedGenres, setSelectedGenres] = useState<string[]>([]);
  const [sortBy, setSortBy] = useState("title");
  const [filteredBooks, setFilteredBooks] = useState<Book[]>(mockBooks);

  // Extract all unique genres from the books
  const allGenres = Array.from(
    new Set(mockBooks.flatMap(book => book.genres || []))
  ).sort();

  const toggleGenre = (genre: string) => {
    setSelectedGenres(prev => 
      prev.includes(genre)
        ? prev.filter(g => g !== genre)
        : [...prev, genre]
    );
  };

  useEffect(() => {
    let result = [...mockBooks];
    
    // Filter by search query
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      result = result.filter(
        book => 
          book.title.toLowerCase().includes(query) || 
          book.author.toLowerCase().includes(query)
      );
    }
    
    // Filter by selected genres
    if (selectedGenres.length > 0) {
      result = result.filter(
        book => selectedGenres.every(genre => book.genres?.includes(genre))
      );
    }
    
    // Sort the results
    result.sort((a, b) => {
      switch(sortBy) {
        case "title":
          return a.title.localeCompare(b.title);
        case "author":
          return a.author.localeCompare(b.author);
        case "newest":
          return (b.addedDate || "").localeCompare(a.addedDate || "");
        default:
          return 0;
      }
    });
    
    setFilteredBooks(result);
  }, [searchQuery, selectedGenres, sortBy]);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-3xl md:text-4xl font-serif font-bold mb-6">Browse Books</h1>
          
          <div className="bg-card shadow-md rounded-lg p-6 mb-8">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="relative flex-grow">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                <Input
                  type="text"
                  placeholder="Search by title or author..."
                  className="pl-10"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              
              <div className="w-full md:w-48">
                <Select
                  value={sortBy}
                  onValueChange={setSortBy}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Sort by" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="title">Title</SelectItem>
                    <SelectItem value="author">Author</SelectItem>
                    <SelectItem value="newest">Newest</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            
            <div className="mt-4">
              <h3 className="font-medium mb-2">Filter by Genre:</h3>
              <div className="flex flex-wrap gap-2">
                {allGenres.map(genre => (
                  <Badge
                    key={genre}
                    variant={selectedGenres.includes(genre) ? "default" : "outline"}
                    className="cursor-pointer"
                    onClick={() => toggleGenre(genre)}
                  >
                    {genre}
                    {selectedGenres.includes(genre) && (
                      <X className="ml-1 h-3 w-3" />
                    )}
                  </Badge>
                ))}
              </div>
            </div>
            
            {(searchQuery || selectedGenres.length > 0) && (
              <div className="mt-4 flex justify-between items-center">
                <p className="text-sm text-muted-foreground">
                  Found {filteredBooks.length} books
                </p>
                <Button 
                  variant="ghost" 
                  size="sm" 
                  onClick={() => {
                    setSearchQuery("");
                    setSelectedGenres([]);
                  }}
                >
                  Clear Filters
                </Button>
              </div>
            )}
          </div>
          
          {filteredBooks.length > 0 ? (
            <BookGrid books={filteredBooks} />
          ) : (
            <div className="text-center py-16">
              <h2 className="text-2xl font-serif font-medium mb-4">No books found</h2>
              <p className="text-muted-foreground mb-8">Try adjusting your search or filters to find what you're looking for.</p>
              <Button 
                onClick={() => {
                  setSearchQuery("");
                  setSelectedGenres([]);
                }}
              >
                Reset Filters
              </Button>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Browse;
