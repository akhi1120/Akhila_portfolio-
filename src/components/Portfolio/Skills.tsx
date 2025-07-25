import { Card, CardContent } from "@/components/ui/card";
import { 
  Code, 
  Database, 
  BarChart3, 
  Brain, 
  Cpu, 
  FileCode,
  GitBranch,
  Zap,
  MessageSquare,
  Search,
  Target,
  Lightbulb
} from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming",
      icon: Code,
      skills: [
        { name: "Python", icon: Code },
        { name: "SQL", icon: Database }
      ]
    },
    {
      title: "Data & AI",
      icon: Brain,
      skills: [
        { name: "Machine Learning", icon: Cpu },
        { name: "Deep Learning", icon: Brain },
        { name: "Large Language Models", icon: MessageSquare },
        { name: "Generative AI", icon: Lightbulb },
        { name: "Natural Language Processing", icon: FileCode },
        { name: "Transformers", icon: Zap }
      ]
    },
    {
      title: "Visualization & BI",
      icon: BarChart3,
      skills: [
        { name: "Power BI", icon: BarChart3 },
        { name: "Matplotlib", icon: BarChart3 },
        { name: "Seaborn", icon: BarChart3 }
      ]
    },
    {
      title: "MLOps & Development",
      icon: GitBranch,
      skills: [
        { name: "Git", icon: GitBranch },
        { name: "MLOps", icon: Target },
        { name: "Hugging Face", icon: Brain },
        { name: "DuckDuckGo API", icon: Search }
      ]
    },
    {
      title: "Frameworks & Libraries",
      icon: FileCode,
      skills: [
        { name: "LlamaIndex", icon: Search },
        { name: "LangChain", icon: MessageSquare },
        { name: "NumPy", icon: Code },
        { name: "Pandas", icon: Database },
        { name: "Scikit-Learn", icon: Cpu },
        { name: "TensorFlow", icon: Brain },
        { name: "PyTorch", icon: Brain }
      ]
    },
    {
      title: "Advanced AI Techniques",
      icon: Zap,
      skills: [
        { name: "LSTM", icon: Brain },
        { name: "RAG", icon: Search },
        { name: "BERT", icon: MessageSquare },
        { name: "Prompt Engineering", icon: Lightbulb }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-section-bg">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Technical <span className="text-primary">Skills</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-primary mx-auto"></div>
            <p className="text-muted-foreground mt-6 max-w-2xl mx-auto">
              Comprehensive expertise in modern data science, machine learning, and AI technologies
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, index) => (
              <Card key={index} className="bg-card border-border hover:border-primary transition-all duration-300 group">
                <CardContent className="p-6">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 rounded-lg bg-gradient-primary flex items-center justify-center mr-4 group-hover:scale-110 transition-transform">
                      <category.icon className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground">{category.title}</h3>
                  </div>
                  
                  <div className="space-y-3">
                    {category.skills.map((skill, skillIndex) => (
                      <div key={skillIndex} className="flex items-center group/skill">
                        <div className="w-8 h-8 rounded-md bg-muted flex items-center justify-center mr-3 group-hover/skill:bg-skill-icon transition-colors">
                          <skill.icon className="w-4 h-4 text-skill-icon group-hover/skill:text-primary-foreground" />
                        </div>
                        <span className="text-muted-foreground group-hover/skill:text-foreground transition-colors">
                          {skill.name}
                        </span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Additional Skills Note */}
          <div className="mt-16 text-center">
            <Card className="bg-gradient-secondary border-border max-w-4xl mx-auto">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  Core Competencies
                </h3>
                <div className="grid md:grid-cols-2 gap-6 text-left">
                  <div>
                    <h4 className="text-lg font-semibold text-primary mb-3">Technical Expertise</h4>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• End-to-end machine learning pipeline development</li>
                      <li>• Advanced NLP and text processing</li>
                      <li>• Deep learning model optimization</li>
                      <li>• AI-powered application development</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-primary mb-3">Professional Skills</h4>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• Problem-solving and analytical thinking</li>
                      <li>• Rapid learning and adaptation</li>
                      <li>• Research and development</li>
                      <li>• Cross-functional collaboration</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;