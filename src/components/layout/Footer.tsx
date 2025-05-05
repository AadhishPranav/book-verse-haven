
import { Link } from "react-router-dom";
import { Book } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border mt-12 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between">
          <div className="mb-8 md:mb-0">
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <Book className="h-6 w-6 text-book-primary" />
              <span className="text-lg font-serif font-bold text-book-primary">BookVerse</span>
            </Link>
            <p className="text-sm text-muted-foreground max-w-xs">
              Your digital library for discovering, managing, and reading e-books across all your devices.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-serif font-semibold mb-4">Explore</h3>
              <ul className="space-y-2">
                <li><Link to="/browse" className="text-sm text-muted-foreground hover:text-accent">Browse Books</Link></li>
                <li><Link to="/genres" className="text-sm text-muted-foreground hover:text-accent">Genres</Link></li>
                <li><Link to="/authors" className="text-sm text-muted-foreground hover:text-accent">Authors</Link></li>
                <li><Link to="/new" className="text-sm text-muted-foreground hover:text-accent">New Releases</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-serif font-semibold mb-4">Account</h3>
              <ul className="space-y-2">
                <li><Link to="/login" className="text-sm text-muted-foreground hover:text-accent">Sign In</Link></li>
                <li><Link to="/register" className="text-sm text-muted-foreground hover:text-accent">Create Account</Link></li>
                <li><Link to="/bookshelf" className="text-sm text-muted-foreground hover:text-accent">My Bookshelf</Link></li>
                <li><Link to="/settings" className="text-sm text-muted-foreground hover:text-accent">Settings</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-serif font-semibold mb-4">Support</h3>
              <ul className="space-y-2">
                <li><Link to="/help" className="text-sm text-muted-foreground hover:text-accent">Help Center</Link></li>
                <li><Link to="/contact" className="text-sm text-muted-foreground hover:text-accent">Contact Us</Link></li>
                <li><Link to="/privacy" className="text-sm text-muted-foreground hover:text-accent">Privacy Policy</Link></li>
                <li><Link to="/terms" className="text-sm text-muted-foreground hover:text-accent">Terms of Use</Link></li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="border-t border-border mt-8 pt-6 text-center">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} BookVerse Library. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
