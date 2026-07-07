export const Footer = () => {
  return (
    <footer className="border-t border-border py-8 mt-20">
      <div className="container mx-auto px-6 text-center">
        <h3 className="text-xl font-semibold">Dhruv Sonagara</h3>

        <p className="text-muted-foreground mt-2">
          Aspiring Software Engineer | React Developer
        </p>

        <p className="text-muted-foreground mt-2">
          📧 dhruvsonagara18@gmail.com
        </p>

        <p className="text-sm text-muted-foreground mt-6">
          © {new Date().getFullYear()} Dhruv Sonagara. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};