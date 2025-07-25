import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  return (
    <section id="about" className="py-20 bg-section-bg">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              About <span className="text-primary">Me</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-primary mx-auto"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Image */}
            <div className="relative">
              <div className="relative">
                <img 
                  src="/lovable-uploads/d91ded3d-1059-4c44-8bc1-f7d65e99a765.png" 
                  alt="Akhila Rekulapadu" 
                  className="w-full max-w-md mx-auto rounded-2xl shadow-2xl"
                />
                <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-accent rounded-full opacity-20"></div>
                <div className="absolute -top-6 -left-6 w-24 h-24 border-2 border-primary rounded-full"></div>
              </div>
            </div>

            {/* Right Side - Content */}
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  Passionate Data Scientist & AI Innovator
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  I'm a skilled Data Science professional with a strong foundation in Machine Learning, 
                  Deep Learning, Natural Language Processing, and Generative AI. My journey in data science 
                  is driven by curiosity and a passion for solving real-world problems through innovative 
                  AI solutions.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  With expertise in Python, TensorFlow, LangChain, and MLOps, I specialize in building 
                  and optimizing data pipelines, developing predictive models, and creating AI-powered 
                  applications. I have hands-on experience with LLMs, RAG systems, and advanced NLP 
                  techniques including BERT and LSTM.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Currently pursuing opportunities to apply my technical expertise in impactful data 
                  science roles, I'm committed to leveraging AI to drive business intelligence and 
                  informed decision-making.
                </p>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-2 gap-6 mt-8">
                <Card className="bg-card border-border">
                  <CardContent className="p-6 text-center">
                    <div className="text-3xl font-bold text-primary mb-2">5+</div>
                    <div className="text-muted-foreground">Projects Completed</div>
                  </CardContent>
                </Card>
                <Card className="bg-card border-border">
                  <CardContent className="p-6 text-center">
                    <div className="text-3xl font-bold text-secondary mb-2">3</div>
                    <div className="text-muted-foreground">Internships</div>
                  </CardContent>
                </Card>
              </div>

              {/* Personal Info */}
              <div className="space-y-3 mt-8">
                <div className="flex items-center">
                  <span className="text-foreground font-semibold w-24">Name:</span>
                  <span className="text-muted-foreground">Akhila Rekulapadu</span>
                </div>
                <div className="flex items-center">
                  <span className="text-foreground font-semibold w-24">Email:</span>
                  <span className="text-muted-foreground">akhilar617@gmail.com</span>
                </div>
                <div className="flex items-center">
                  <span className="text-foreground font-semibold w-24">Phone:</span>
                  <span className="text-muted-foreground">+91 8790118966</span>
                </div>
                <div className="flex items-center">
                  <span className="text-foreground font-semibold w-24">Location:</span>
                  <span className="text-muted-foreground">Hyderabad, India</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;