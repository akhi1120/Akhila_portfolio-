import { Github, Linkedin, Mail, Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-section-alt-bg border-t border-border py-12">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Brand */}
            <div>
              <div className="flex items-center mb-4">
                <div className="text-primary font-bold text-2xl mr-2">AK</div>
                <div className="text-primary text-lg">HILA</div>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                Aspiring Data Scientist & AI Enthusiast passionate about leveraging 
                technology to solve real-world problems and drive innovation.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-foreground font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#home" className="text-muted-foreground hover:text-primary transition-colors">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#about" className="text-muted-foreground hover:text-primary transition-colors">
                    About
                  </a>
                </li>
                <li>
                  <a href="#experience" className="text-muted-foreground hover:text-primary transition-colors">
                    Experience
                  </a>
                </li>
                <li>
                  <a href="#projects" className="text-muted-foreground hover:text-primary transition-colors">
                    Projects
                  </a>
                </li>
                <li>
                  <a href="#skills" className="text-muted-foreground hover:text-primary transition-colors">
                    Skills
                  </a>
                </li>
                <li>
                  <a href="#contact" className="text-muted-foreground hover:text-primary transition-colors">
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-foreground font-semibold mb-4">Get In Touch</h3>
              <div className="space-y-3">
                <div className="flex items-center">
                  <Mail className="w-4 h-4 text-primary mr-3" />
                  <span className="text-muted-foreground">akhilar617@gmail.com</span>
                </div>
                <div className="flex items-center">
                  <svg className="w-4 h-4 text-primary mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
                  </svg>
                  <span className="text-muted-foreground">+91 8790118966</span>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex space-x-4 mt-6">
                <a 
                  href="https://github.com/akhi1120" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg bg-muted hover:bg-gradient-primary flex items-center justify-center transition-all group"
                >
                  <Github className="w-5 h-5 text-muted-foreground group-hover:text-primary-foreground" />
                </a>
                <a 
                  href="https://www.linkedin.com/in/akhila-rekulapadu-1019a12a2/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg bg-muted hover:bg-gradient-primary flex items-center justify-center transition-all group"
                >
                  <Linkedin className="w-5 h-5 text-muted-foreground group-hover:text-primary-foreground" />
                </a>
                <a 
                  href="mailto:akhilar617@gmail.com"
                  className="w-10 h-10 rounded-lg bg-muted hover:bg-gradient-primary flex items-center justify-center transition-all group"
                >
                  <Mail className="w-5 h-5 text-muted-foreground group-hover:text-primary-foreground" />
                </a>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-border mt-12 pt-8 flex flex-col md:flex-row items-center justify-between">
            <p className="text-muted-foreground text-sm">
              © 2025 Akhila Rekulapadu. All rights reserved.
            </p>
            <p className="text-muted-foreground text-sm flex items-center mt-4 md:mt-0">
              Made with <Heart className="w-4 h-4 mx-1 text-red-500" /> using React & TypeScript
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;