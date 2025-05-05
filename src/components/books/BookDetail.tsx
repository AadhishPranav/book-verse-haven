
import { useState } from "react";
import { Book } from "@/types/Book";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { BookOpen, Bookmark, Share, Download } from "lucide-react";
import { toast } from "@/components/ui/use-toast";

interface BookDetailProps {
  book: Book;
}

const BookDetail = ({ book }: BookDetailProps) => {
  const [isSaved, setIsSaved] = useState(false);

  const handleSaveBook = () => {
    setIsSaved(!isSaved);
    toast({
      title: isSaved ? "Removed from bookshelf" : "Added to bookshelf",
      description: isSaved ? "This book has been removed from your bookshelf" : "This book has been added to your bookshelf",
    });
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
        <div className="md:col-span-4 lg:col-span-3">
          <Card className="p-4 bg-muted/50">
            <div className="book-cover mx-auto max-w-[250px]">
              <AspectRatio ratio={2/3} className="mx-auto">
                <img 
                  src={book.coverUrl} 
                  alt={book.title} 
                  className="object-cover w-full h-full rounded"
                />
              </AspectRatio>
            </div>
            
            <div className="mt-6 space-y-3">
              <Button className="w-full" variant="default">
                <BookOpen className="mr-2 h-4 w-4" />
                Read Now
              </Button>
              
              <Button 
                className="w-full" 
                variant={isSaved ? "default" : "outline"}
                onClick={handleSaveBook}
              >
                <Bookmark className="mr-2 h-4 w-4" />
                {isSaved ? "Saved to Bookshelf" : "Add to Bookshelf"}
              </Button>
              
              <div className="flex space-x-2">
                <Button className="flex-1" variant="outline" size="sm">
                  <Download className="h-4 w-4" />
                </Button>
                <Button className="flex-1" variant="outline" size="sm">
                  <Share className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </Card>
        </div>
        
        <div className="md:col-span-8 lg:col-span-9">
          <div>
            <h1 className="text-3xl md:text-4xl font-serif font-bold">{book.title}</h1>
            <p className="text-xl text-muted-foreground mt-2">{book.author}</p>
            
            <div className="flex flex-wrap gap-2 mt-4">
              {book.genres?.map((genre, index) => (
                <Badge key={index} variant="secondary" className="text-xs">{genre}</Badge>
              ))}
            </div>
            
            <Separator className="my-6" />
            
            <div className="prose max-w-none">
              <p className="text-lg leading-relaxed">{book.description}</p>
            </div>
            
            <Separator className="my-6" />
            
            <div className="grid grid-cols-2 gap-4">
              <div>
                <h3 className="font-serif font-semibold mb-2">Details</h3>
                <dl className="space-y-2">
                  <div className="flex justify-between">
                    <dt className="text-muted-foreground">Published</dt>
                    <dd>{book.publishedDate}</dd>
                  </div>
                  <div className="flex justify-between">
                    <dt className="text-muted-foreground">Publisher</dt>
                    <dd>{book.publisher}</dd>
                  </div>
                  <div className="flex justify-between">
                    <dt className="text-muted-foreground">Language</dt>
                    <dd>{book.language}</dd>
                  </div>
                  <div className="flex justify-between">
                    <dt className="text-muted-foreground">Pages</dt>
                    <dd>{book.pages}</dd>
                  </div>
                </dl>
              </div>
              
              <div>
                <h3 className="font-serif font-semibold mb-2">File Information</h3>
                <dl className="space-y-2">
                  <div className="flex justify-between">
                    <dt className="text-muted-foreground">Format</dt>
                    <dd>{book.format}</dd>
                  </div>
                  <div className="flex justify-between">
                    <dt className="text-muted-foreground">File Size</dt>
                    <dd>{book.fileSize}</dd>
                  </div>
                  <div className="flex justify-between">
                    <dt className="text-muted-foreground">Added</dt>
                    <dd>{book.addedDate}</dd>
                  </div>
                </dl>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetail;
