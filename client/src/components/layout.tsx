import { Link } from "wouter";
import { Shield, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";

export default function Layout({ children }: { children: React.ReactNode }) {
  const NavLinks = () => (
    <>
      <Link href="/privacy">Privacy Policy</Link>
      <Link href="/terms">Terms & Conditions</Link>
    </>
  );

  return (
    <div className="min-h-screen bg-[#F7FAFC]">
      <header className="border-b bg-white">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 text-primary hover:opacity-80">
            <Shield className="h-6 w-6" />
            <span className="font-semibold">SecureShare</span>
          </Link>

          {/* Mobile Navigation */}
          <Sheet>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent>
              <nav className="flex flex-col gap-4 mt-8 text-lg">
                <NavLinks />
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        {children}
      </main>

      <footer className="mt-auto border-t bg-white py-8">
        <div className="container mx-auto px-4 text-center">
          <nav className="flex justify-center gap-6 mb-4 text-sm text-muted-foreground">
            <NavLinks />
          </nav>
          <p className="text-sm text-muted-foreground">© 2024 SecureShare. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}