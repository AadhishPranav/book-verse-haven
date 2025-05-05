
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import BookGrid from "@/components/books/BookGrid";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Book } from "lucide-react";
import mockBooks from "@/data/mockBooks";
import { Link } from "react-router-dom";

const Bookshelf = () => {
  // In a real app, we would fetch the user's bookshelf from Supabase
  // For now, we'll use mock data
  const savedBooks = mockBooks.slice(0, 3); // Pretend these are the user's saved books
  const readingBooks = mockBooks.slice(3, 5); // Pretend these are the books the user is reading
  const finishedBooks = mockBooks.slice(5, 8); // Pretend these are the books the user has finished

  const isLoggedIn = false; // This would be from authentication state

  if (!isLoggedIn) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <div className="container mx-auto px-4 py-16">
            <div className="text-center max-w-2xl mx-auto">
              <Book className="h-16 w-16 text-book-primary mx-auto mb-6" />
              <h1 className="text-3xl md:text-4xl font-serif font-bold mb-4">Your Bookshelf</h1>
              <p className="text-xl text-muted-foreground mb-8">
                Sign in to save your favorite books and track your reading progress.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link to="/login">
                  <Button size="lg">Sign In</Button>
                </Link>
                <Link to="/register">
                  <Button size="lg" variant="outline">Create Account</Button>
                </Link>
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-3xl md:text-4xl font-serif font-bold mb-8">My Bookshelf</h1>
          
          <Tabs defaultValue="saved" className="mb-8">
            <TabsList className="mb-6">
              <TabsTrigger value="saved">Saved Books</TabsTrigger>
              <TabsTrigger value="reading">Currently Reading</TabsTrigger>
              <TabsTrigger value="finished">Finished</TabsTrigger>
            </TabsList>
            <TabsContent value="saved">
              {savedBooks.length > 0 ? (
                <BookGrid books={savedBooks} />
              ) : (
                <div className="text-center py-16">
                  <h2 className="text-2xl font-serif font-medium mb-4">No saved books yet</h2>
                  <p className="text-muted-foreground mb-8">
                    Books you save will appear here. Start browsing to find books you want to read!
                  </p>
                  <Link to="/browse">
                    <Button>Browse Books</Button>
                  </Link>
                </div>
              )}
            </TabsContent>
            <TabsContent value="reading">
              {readingBooks.length > 0 ? (
                <BookGrid books={readingBooks} />
              ) : (
                <div className="text-center py-16">
                  <h2 className="text-2xl font-serif font-medium mb-4">Not reading any books</h2>
                  <p className="text-muted-foreground mb-8">
                    Books you start reading will appear here.
                  </p>
                  <Link to="/browse">
                    <Button>Find Something to Read</Button>
                  </Link>
                </div>
              )}
            </TabsContent>
            <TabsContent value="finished">
              {finishedBooks.length > 0 ? (
                <BookGrid books={finishedBooks} />
              ) : (
                <div className="text-center py-16">
                  <h2 className="text-2xl font-serif font-medium mb-4">No finished books</h2>
                  <p className="text-muted-foreground mb-8">
                    Books you've finished reading will appear here.
                  </p>
                  <Link to="/browse">
                    <Button>Browse Books</Button>
                  </Link>
                </div>
              )}
            </TabsContent>
          </Tabs>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Bookshelf;
