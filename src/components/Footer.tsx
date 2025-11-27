import { Heart } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="border-t border-border bg-card mt-auto">
      <div className="container mx-auto px-4 py-6">
        <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
          <span>Made with</span>
          <Heart className="h-4 w-4 fill-destructive text-destructive animate-pulse" />
          <span>by</span>
          <a
            href="https://github.com/M-tech-cmd"
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-foreground hover:text-primary transition-colors"
          >
            M-tech-cmd
          </a>
        </div>
      </div>
    </footer>
  );
};
