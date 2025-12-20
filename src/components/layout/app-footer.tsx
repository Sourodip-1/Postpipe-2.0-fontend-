import Link from "next/link";
import { Github, Twitter } from "lucide-react";
import { WordScramble } from "../ui/word-scramble";

const footerLinks = {
  product: [
    { href: "#", label: "Features" },
    { href: "#", label: "Pricing" },
    { href: "#", label: "Integrations" },
    { href: "#", label: "Changelog" },
  ],
  resources: [
    { href: "#", label: "Docs" },
    { href: "#", label: "Blog" },
    { href: "#", label: "Community" },
    { href: "#", label: "Contact" },
  ],
};

export function AppFooter() {
  return (
    <footer className="border-t bg-background">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-12">
          <div className="col-span-12 mb-8 md:col-span-3">
             <h3 className="font-headline text-lg font-bold">Experience liftoff</h3>
          </div>
          <div className="col-span-6 md:col-span-2">
            <h4 className="mb-4 font-semibold text-muted-foreground">Product</h4>
            <ul className="space-y-2">
              {footerLinks.product.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="hover:text-primary transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="col-span-6 md:col-span-2">
            <h4 className="mb-4 font-semibold text-muted-foreground">Resources</h4>
             <ul className="space-y-2">
              {footerLinks.resources.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="hover:text-primary transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-16 text-center">
            <WordScramble text="PostPipe" className="font-headline text-8xl md:text-[12rem] font-bold tracking-tighter" />
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-border/50 pt-8 sm:flex-row">
            <p className="text-sm text-muted-foreground">
                © {new Date().getFullYear()} PostPipe Inc. All rights reserved.
            </p>
            <div className="flex items-center gap-4">
                <Link href="#" className="text-muted-foreground hover:text-foreground">
                    <Github className="size-5" />
                    <span className="sr-only">GitHub</span>
                </Link>
                <Link href="#" className="text-muted-foreground hover:text-foreground">
                    <Twitter className="size-5" />
                    <span className="sr-only">Twitter</span>
                </Link>
            </div>
        </div>
      </div>
    </footer>
  );
}
