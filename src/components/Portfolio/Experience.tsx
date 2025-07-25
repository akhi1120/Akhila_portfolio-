import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Building, Calendar, MapPin } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      role: "Developer Trainee Intern",
      company: "MEGAMINDS IT SERVICES",
      duration: "July 2025 - Present",
      location: "Remote",
      type: "Current",
      description: "Data Science Research Internship focusing on academic content development and coding assignments.",
      responsibilities: [
        "Developing code-based academic content for research articles and projects",
        "Creating solutions for university-standard coding assignments",
        "Ensuring original and copyright-free research solutions",
        "Working with mentorship on advanced AI and ML concepts"
      ]
    },
    {
      role: "Data Science Intern",
      company: "RamanaSoft IT Services",
      duration: "Nov 2024 - April 2025",
      location: "Hyderabad",
      type: "Completed",
      description: "Comprehensive data science role involving deep learning, NLP, and AI-powered applications.",
      responsibilities: [
        "Designed and deployed deep learning models using Python and TensorFlow",
        "Developed LLM-based applications using LangChain and LlamaIndex",
        "Implemented RAG systems with SQL for real-time insights",
        "Built generative AI-powered chatbot using NLP and OpenAI's GPT models",
        "Optimized data pipelines reducing processing time by 30%",
        "Applied BERT and LSTM for enhanced NLP accuracy"
      ]
    },
    {
      role: "AI & ML Intern - Best Performer",
      company: "Elevate Labs",
      duration: "April 2025 - May 2025",
      location: "Remote",
      type: "Completed",
      description: "Skill India & MSME recognized program focusing on practical machine learning applications.",
      responsibilities: [
        "Applied ML concepts to real-world datasets with classification and regression models",
        "Built Speech Emotion Detection system using audio signal processing",
        "Developed models using Logistic Regression, KNN, Decision Trees, and K-Means",
        "Performed data preprocessing and feature selection on structured/unstructured data",
        "Recognized as Best Performer for consistent high-quality solutions"
      ]
    }
  ];

  const education = [
    {
      degree: "Bachelor of Science in Chemistry",
      institution: "Government Degree College, Wanaparthy",
      year: "2023",
      grade: "CGPA: 8.19"
    },
    {
      degree: "Intermediate Public Examination (IPE)",
      institution: "CV Raman Junior College, Wanaparthy",
      year: "2020",
      grade: "CGPA: 9.5"
    },
    {
      degree: "Secondary School Certificate (SSC)",
      institution: "ZPHS High School, Yedutla, Wanaparthy",
      year: "2018",
      grade: "CGPA: 8.5"
    }
  ];

  return (
    <section id="experience" className="py-20 bg-section-alt-bg">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Experience & <span className="text-primary">Education</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-primary mx-auto"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Experience Section */}
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-8 flex items-center">
                <Building className="w-6 h-6 mr-3 text-primary" />
                Professional Experience
              </h3>
              
              <div className="space-y-6">
                {experiences.map((exp, index) => (
                  <Card key={index} className="bg-card border-border hover:border-primary transition-colors">
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h4 className="text-xl font-semibold text-foreground">{exp.role}</h4>
                          <p className="text-primary font-medium">{exp.company}</p>
                        </div>
                        <Badge variant={exp.type === "Current" ? "default" : "secondary"}>
                          {exp.type}
                        </Badge>
                      </div>
                      
                      <div className="flex items-center text-muted-foreground mb-4 space-x-4">
                        <div className="flex items-center">
                          <Calendar className="w-4 h-4 mr-1" />
                          <span className="text-sm">{exp.duration}</span>
                        </div>
                        <div className="flex items-center">
                          <MapPin className="w-4 h-4 mr-1" />
                          <span className="text-sm">{exp.location}</span>
                        </div>
                      </div>
                      
                      <p className="text-muted-foreground mb-4">{exp.description}</p>
                      
                      <ul className="space-y-2">
                        {exp.responsibilities.slice(0, 3).map((resp, respIndex) => (
                          <li key={respIndex} className="text-sm text-muted-foreground flex items-start">
                            <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                            {resp}
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Education Section */}
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-8 flex items-center">
                <svg className="w-6 h-6 mr-3 text-primary" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z"/>
                </svg>
                Education
              </h3>
              
              <div className="space-y-6">
                {education.map((edu, index) => (
                  <Card key={index} className="bg-card border-border">
                    <CardContent className="p-6">
                      <h4 className="text-lg font-semibold text-foreground mb-2">{edu.degree}</h4>
                      <p className="text-primary font-medium mb-2">{edu.institution}</p>
                      <div className="flex items-center justify-between">
                        <span className="text-muted-foreground">{edu.year}</span>
                        <Badge variant="outline" className="border-accent text-accent">
                          {edu.grade}
                        </Badge>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Certifications */}
              <div className="mt-12">
                <h3 className="text-xl font-bold text-foreground mb-6">Certifications</h3>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <span className="w-2 h-2 bg-accent rounded-full mr-3"></span>
                    <span className="text-muted-foreground">AI & ML Internship Certificate - Best Performer (Elevate Labs)</span>
                  </div>
                  <div className="flex items-center">
                    <span className="w-2 h-2 bg-accent rounded-full mr-3"></span>
                    <span className="text-muted-foreground">Data Science Internship Certificate (RamanaSoft)</span>
                  </div>
                  <div className="flex items-center">
                    <span className="w-2 h-2 bg-accent rounded-full mr-3"></span>
                    <span className="text-muted-foreground">State Level Botany Quiz Competition Participation</span>
                  </div>
                  <div className="flex items-center">
                    <span className="w-2 h-2 bg-accent rounded-full mr-3"></span>
                    <span className="text-muted-foreground">National Service Scheme Participation</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;