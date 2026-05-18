export default function Footer() {
  const year = new Date().getFullYear();
  
  return (
    <footer className="py-12 bg-black border-t border-white/5 relative overflow-hidden">
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[50%] h-[100px] bg-primary/20 blur-[100px] rounded-full pointer-events-none" />
      
      <div className="container mx-auto px-6 text-center relative z-10">
        <p className="text-white/50 text-sm mb-2" data-testid="footer-text">
          Designed by <span className="text-white font-medium">Santosh Gurung</span>
        </p>
        <p className="text-white/30 text-xs">
          &copy; {year} All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
