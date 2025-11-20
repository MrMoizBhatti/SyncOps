import CaseStudyHero from "../_components/Hero";
import ChallengeSection from "../_components/Challenges";
import SolutionSection from "../_components/Solutions";
import ResultsSection from "../_components/Results";
import Testimonial from "../_components/Testimonial";
import CaseStudyCTA from "../_components/CTA";
import RelatedCaseStudies from "../_components/RelatedStudies";

// StudyMate AI Case Study Data
const caseStudyData = {
  title: "StudyMate AI: AI-Powered Homework Help Platform",
  subtitle:
    "How SyncOps created an intelligent homework help platform that provides step-by-step solutions, explanations, and practice problems across 60+ subjects — transforming how students learn and master academic concepts with AI-powered tutoring.",
  image: "/images/studymate.png",
  industry: "Education Technology",
  duration: "10 months",
  team: "15 specialists",
  challenges: [
    {
      title: "Limited Access to Quality Tutoring and Homework Help",
      description:
        "Students struggled to find quality homework help and tutoring support. Traditional tutoring was expensive and not available 24/7, making it difficult for students to get help when they needed it most.",
      icon: "AlertTriangle",
    },
    {
      title: "Lack of Personalized Learning and Step-by-Step Guidance",
      description:
        "Students needed personalized learning experiences and detailed step-by-step explanations. Existing solutions lacked AI-powered tutoring that could adapt to individual learning styles and provide comprehensive explanations across multiple subjects.",
      icon: "Clock",
    },
  ],
  solutions: [
    {
      title: "Interactive AI Demo with Real-Time Learning",
      description:
        "We developed an interactive demo platform that showcases StudyMate AI's capabilities in real-time. The system provides step-by-step explanations, interactive chat interface, and subject-specific learning tools. Students can ask questions about math, physics, history, or any subject and receive comprehensive, educational responses.",
      image: "/images/studydemo.png",
      features: [
        "Interactive chat interface with AI-powered explanations",
        "Subject-specific learning tools (Math, Physics, History, etc.)",
      ],
    },
    {
      title: "User-Friendly Contact and Inquiry System",
      description:
        "We implemented a comprehensive contact form system that allows students, parents, and educators to easily reach out with questions or inquiries. The form includes topic categorization, project type selection, and secure message handling, ensuring all inquiries are properly routed and responded to within 1 business day.",
      image: "/images/studycontact.png",
      features: [
        "Streamlined contact form with topic categorization",
        "Secure message handling with 1 business day response guarantee",
      ],
    },
  ],
  results: [
    {
      value: "60+",
      label: "Subjects Covered",
    },
    {
      value: "24/7",
      label: "Availability",
    },
    {
      value: "500K+",
      label: "Students Helped",
    },
  ],
  testimonial: {
    quote:
      "StudyMate AI has completely transformed how I approach my homework. The step-by-step solutions actually teach me the concepts instead of just giving answers. The 24/7 availability means I can get help whenever I'm stuck, and the personalized learning has helped me improve my grades significantly. This platform is exactly what students need.",
    author: "Alex Thompson",
    role: "High School Student",
    company: "Student",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    rating: 5,
  },
  relatedCaseStudies: [
    {
      title: "MediMind AI: AI-Powered Medical Assistant Platform",
      image: "/images/medmindai.png",
      description: "Intelligent medical assistant that transforms clinical workflows with AI automation",
      link: "/case-studies/medimind",
      industry: "Healthcare",
    },
    {
      title: "FitResume AI: Intelligent Resume Builder Platform",
      image: "/images/fitresume.png",
      description: "Guided resume builder with AI coaching, premium themes, and ATS-safe exports",
      link: "/case-studies/resume-ai",
      industry: "Career & Recruitment",
    },
    {
      title: "Building GeoPulse: Community Data Intelligence Platform",
      image: "/images/GeoPluse.png",
      description: "Creating a privacy-first, scalable platform for community data collection",
      link: "/case-studies/geopulse",
      industry: "Community Intelligence",
    },
  ],
};

export default function StudyMateCaseStudyPage() {
  return (
    <div className="bg-white min-h-screen">
      <CaseStudyHero
        title={caseStudyData.title}
        subtitle={caseStudyData.subtitle}
        image={caseStudyData.image}
        industry={caseStudyData.industry}
        duration={caseStudyData.duration}
        team={caseStudyData.team}
      />
      <ChallengeSection challenges={caseStudyData.challenges} />
      <SolutionSection solutions={caseStudyData.solutions} />
      {caseStudyData.results && <ResultsSection results={caseStudyData.results} />}
      <Testimonial {...caseStudyData.testimonial} />
      <CaseStudyCTA title={caseStudyData.title} industry={caseStudyData.industry} />
      <RelatedCaseStudies caseStudies={caseStudyData.relatedCaseStudies} />
    </div>
  );
}

