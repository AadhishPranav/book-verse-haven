
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import BookGrid from "@/components/books/BookGrid";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import mockBooks from "@/data/mockBooks";
import { Book, BookOpen, Search } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  const featuredBooks = mockBooks.filter(book => book.isFeatured);
  const newBooks = mockBooks.filter(book => book.isNew);
  const popularBooks = mockBooks.filter(book => book.isPopular);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-book-light to-background py-16 md:py-24">
          <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0 md:pr-8">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold leading-tight mb-4">
                Your Digital Library <br /> Anywhere, Anytime
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Discover, manage, and read your e-books across all your devices with BookVerse - your personal digital library.
              </p>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <Button size="lg" className="bg-book-primary hover:bg-book-hover">
                  <BookOpen className="mr-2 h-5 w-5" />
                  Browse Library
                </Button>
                <Button size="lg" variant="outline" className="border-book-primary text-book-primary hover:bg-book-light">
                  <Search className="mr-2 h-5 w-5" />
                  Find Books
                </Button>
              </div>
            </div>
            <div className="md:w-1/2 relative">
              <div className="relative mx-auto max-w-md">
                <img 
                  src="https://images.unsplash.com/photo-1507842217343-583bb7270b66?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" 
                  alt="Digital Library" 
                  className="rounded-lg shadow-2xl"
                />
                <div className="absolute -bottom-6 -right-6 bg-white p-3 rounded-lg shadow-xl">
                  <Book className="h-8 w-8 text-book-primary" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Books Section */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl md:text-3xl font-serif font-bold">Featured Books</h2>
              <Link to="/browse">
                <Button variant="ghost" className="text-book-primary hover:text-book-hover">
                  View All
                </Button>
              </Link>
            </div>
            <BookGrid books={featuredBooks} />
          </div>
        </section>

        {/* Categories Section */}
        <section className="py-12 bg-muted/50">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-serif font-bold mb-8 text-center">Popular Categories</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {["Fiction", "Non-Fiction", "Science Fiction", "Romance", "Mystery", "Biography", "History", "Self-Help"].map((category) => (
                <Card key={category} className="p-8 text-center hover:bg-muted transition-colors cursor-pointer">
                  <h3 className="font-serif font-semibold text-lg">{category}</h3>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* New Releases Section */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl md:text-3xl font-serif font-bold">New Releases</h2>
              <Link to="/new">
                <Button variant="ghost" className="text-book-primary hover:text-book-hover">
                  View All
                </Button>
              </Link>
            </div>
            <BookGrid books={newBooks.slice(0, 6)} />
          </div>
        </section>

        {/* Popular Books Section */}
        <section className="py-12 bg-muted/50">
          <div className="container mx-auto px-4">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl md:text-3xl font-serif font-bold">Popular This Month</h2>
              <Link to="/popular">
                <Button variant="ghost" className="text-book-primary hover:text-book-hover">
                  View All
                </Button>
              </Link>
            </div>
            <BookGrid books={popularBooks.slice(0, 6)} />
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-book-primary text-primary-foreground">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">Ready to Build Your Digital Library?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Join BookVerse today and get access to thousands of e-books that you can read anytime, anywhere.
            </p>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/20">
              Create Free Account
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
