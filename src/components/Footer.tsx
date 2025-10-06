import { MessageCircle, BookOpen, Briefcase } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-background border-t py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <a
            href="#"
            className="flex items-start gap-4 p-6 rounded-xl border hover:shadow-card transition-all duration-300"
          >
            <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-600 flex items-center justify-center flex-shrink-0">
              <MessageCircle className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="font-bold mb-1">Community</h3>
              <p className="text-sm text-muted-foreground">
                Join the squad. Get access to other crypto lovers, make friends, and share tips.
              </p>
            </div>
          </a>

          <a
            href="#"
            className="flex items-start gap-4 p-6 rounded-xl border hover:shadow-card transition-all duration-300"
          >
            <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-purple-500 to-pink-600 flex items-center justify-center flex-shrink-0">
              <BookOpen className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="font-bold mb-1">Quidax Blog</h3>
              <p className="text-sm text-muted-foreground">
                It's always a good day to learn about crypto. Check out our blog for informative posts.
              </p>
            </div>
          </a>

          <a
            href="#"
            className="flex items-start gap-4 p-6 rounded-xl border hover:shadow-card transition-all duration-300"
          >
            <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center flex-shrink-0">
              <Briefcase className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="font-bold mb-1">Careers</h3>
              <p className="text-sm text-muted-foreground">
                Got some wicked skills? Check out career opportunities at Quidax.
              </p>
            </div>
          </a>
        </div>

        <div className="text-center pt-8 border-t">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Quidax. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
