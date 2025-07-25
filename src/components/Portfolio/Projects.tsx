import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";
import aiDashboard from "@/assets/ai-dashboard.jpg";
import fraudDetection from "@/assets/fraud-detection.jpg";
import nlpProcessing from "@/assets/nlp-processing.jpg";
import medicineAnalysis from "@/assets/medicine-analysis.jpg";
import researchAgent from "@/assets/research-agent.jpg";

const Projects = () => {
  const projects = [
    {
      title: "OpenAI LangChain RAG Query System",
      description: "Advanced Retrieval-Augmented Generation system using LangChain for intelligent data querying across multiple datasets including movie records and UK bank customer data.",
      image: aiDashboard,
      technologies: ["LangChain", "OpenAI", "Chroma", "FAISS", "SQL", "Python"],
      features: [
        "Multi-source data retrieval with vector-based search",
        "Optimized prompt templates for enhanced accuracy",
        "Real-time information extraction from structured/unstructured data",
        "Reduced query latency with efficient indexing"
      ],
      impact: "Improved query response relevance by 40% and reduced latency significantly",
      githubUrl: "#",
      liveUrl: "#"
    },
    {
      title: "Fraud Detection Using Machine Learning",
      description: "Sophisticated ML model for identifying fraudulent transactions in financial datasets with highly imbalanced classes, focusing on early fraud detection to reduce financial risk.",
      image: fraudDetection,
      technologies: ["Python", "Random Forest", "XGBoost", "SMOTE", "Scikit-learn"],
      features: [
        "Advanced feature engineering and EDA techniques",
        "Handled data imbalance using SMOTE",
        "Comprehensive model evaluation with ROC-AUC",
        "Optimized for minimal false negatives"
      ],
      impact: "Achieved high recall performance with Random Forest, significantly reducing false negatives",
      githubUrl: "#",
      liveUrl: "#"
    },
    {
      title: "NLP Document Processing with LangChain",
      description: "Comprehensive NLP preprocessing pipeline for processing AWS and IMDb datasets, implementing advanced text analysis and feature extraction techniques.",
      image: nlpProcessing,
      technologies: ["LangChain", "Python", "NLP", "TF-IDF", "CountVectorizer"],
      features: [
        "Advanced tokenization, stemming, and lemmatization",
        "CountVectorization and TF-IDF feature extraction",
        "Optimized text cleaning for improved model input quality",
        "Enhanced text-based classification and search capabilities"
      ],
      impact: "Improved downstream NLP task accuracy through refined text preprocessing",
      githubUrl: "#",
      liveUrl: "#"
    },
    {
      title: "Counterfeit Medicines Sales Prediction",
      description: "Machine learning model for predicting sales figures of counterfeit medicines, providing actionable insights for law enforcement and regulatory agencies.",
      image: medicineAnalysis,
      technologies: ["Python", "Machine Learning", "Data Analysis", "Predictive Modeling"],
      features: [
        "Pattern identification in illicit drug transactions",
        "Supervised learning for high-risk operation classification",
        "Feature engineering for transaction analysis",
        "Decision-making support for law enforcement"
      ],
      impact: "Enhanced law enforcement focus on high-net-worth counterfeit sales operations",
      githubUrl: "#",
      liveUrl: "#"
    },
    {
      title: "Research Agent using GPT-4 and Tools Integration",
      description: "Custom AI agent for automated research tasks using GPT-4o with integrated web search and content extraction capabilities for generating structured reports.",
      image: researchAgent,
      technologies: ["GPT-4", "DuckDuckGo API", "ExaTools", "Python", "AI Agents"],
      features: [
        "Automated web search and content extraction",
        "Structured Markdown report generation",
        "NYT-level research quality simulation",
        "Modular tool configuration for scalable research"
      ],
      impact: "Streamlined research workflow with high-quality automated report generation",
      githubUrl: "#",
      liveUrl: "#"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-section-alt-bg">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Featured <span className="text-primary">Projects</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-primary mx-auto"></div>
            <p className="text-muted-foreground mt-6 max-w-2xl mx-auto">
              Showcase of innovative data science and AI projects demonstrating practical applications 
              of machine learning, NLP, and advanced analytics
            </p>
          </div>

          {/* Projects Grid */}
          <div className="space-y-12">
            {projects.map((project, index) => (
              <Card key={index} className="bg-card border-border hover:border-primary transition-all duration-300 overflow-hidden group">
                <CardContent className="p-0">
                  <div className={`grid lg:grid-cols-2 gap-0 ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                    {/* Project Image */}
                    <div className={`relative overflow-hidden ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                      <img 
                        src={project.image} 
                        alt={project.title}
                        className="w-full h-64 lg:h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent lg:hidden"></div>
                    </div>

                    {/* Project Content */}
                    <div className={`p-8 lg:p-12 flex flex-col justify-center ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                      <div>
                        <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors">
                          {project.title}
                        </h3>
                        
                        <p className="text-muted-foreground mb-6 leading-relaxed">
                          {project.description}
                        </p>

                        {/* Technologies */}
                        <div className="mb-6">
                          <div className="flex flex-wrap gap-2">
                            {project.technologies.map((tech, techIndex) => (
                              <Badge key={techIndex} variant="secondary" className="bg-muted text-muted-foreground">
                                {tech}
                              </Badge>
                            ))}
                          </div>
                        </div>

                        {/* Key Features */}
                        <div className="mb-6">
                          <h4 className="text-lg font-semibold text-foreground mb-3">Key Features:</h4>
                          <ul className="space-y-2">
                            {project.features.slice(0, 3).map((feature, featureIndex) => (
                              <li key={featureIndex} className="text-muted-foreground flex items-start">
                                <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                {feature}
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Impact */}
                        <div className="mb-8">
                          <div className="bg-gradient-secondary p-4 rounded-lg border-l-4 border-primary">
                            <p className="text-sm text-muted-foreground">
                              <span className="font-semibold text-primary">Impact: </span>
                              {project.impact}
                            </p>
                          </div>
                        </div>

                        {/* Action Buttons */}
                        <div className="flex space-x-4">
                          <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                            <Github className="w-4 h-4 mr-2" />
                            View Code
                          </Button>
                          <Button className="bg-gradient-primary text-primary-foreground hover:opacity-90">
                            <ExternalLink className="w-4 h-4 mr-2" />
                            Live Demo
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* View More Projects */}
          <div className="text-center mt-16">
            <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
              <Github className="w-5 h-5 mr-2" />
              View All Projects on GitHub
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;