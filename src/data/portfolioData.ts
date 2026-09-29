export interface Project {
  id: string;
  name: string;
  category: 'AI/ML' | 'Computer Vision' | 'Cybersecurity';
  badgeCategory: string;
  type: string;
  technologies: string[];
  shortDescription: string;
  overview: string;
  problem: string;
  solution: string;
  aimlAngle: string;
  cybersecurityAngle: string;
  status: 'In Progress' | 'Completed';
  githubUrl: string;
  interactiveVisualType: 'phantom' | 'mask' | 'ids' | 'scanner';
}

export interface SkillCategory {
  id: string;
  name: string;
  iconName: string;
  skills: string[];
  summary: string;
}

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  category: string;
  description: string;
  skillsCovered: string[];
}

export const PERSONAL_INFO = {
  name: 'POTHULA HEMANTH',
  role: 'AI & ML Undergraduate',
  subheading: 'Computer Vision · Cybersecurity · Agentic AI',
  location: 'Bengaluru, Karnataka, India',
  phone: '+91 7013610422',
  email: 'yadavhemanth373@gmail.com',
  github: 'https://github.com/yadavhemanth373-cell',
  githubDisplay: 'github.com/yadavhemanth373-cell',
  linkedin: 'https://linkedin.com/in/hemanth-yadav-71130b341',
  linkedinDisplay: 'linkedin.com/in/hemanth-yadav-71130b341',
  summary:
    'AI & ML undergraduate building AI-driven computer vision and cybersecurity systems in Python, from CNN training in TensorFlow/Keras and real-time OpenCV inference to ML-based intrusion detection and social engineering defence. Oracle-certified in Agentic AI foundations, with hands-on Salesforce administration training. Seeking an AI/ML internship to build practical, secure machine learning solutions.',
  education: {
    degree: 'B.Tech, Artificial Intelligence and Machine Learning',
    institution: 'Nagarjuna College of Engineering and Technology',
    location: 'Bengaluru, Karnataka',
    expectedGraduation: '2027',
  },
};

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    id: 'aiml',
    name: 'Machine Learning & DL',
    iconName: 'Brain',
    summary: 'End-to-end model development from architecture design to evaluation.',
    skills: [
      'TensorFlow',
      'Keras',
      'Convolutional Neural Networks (CNNs)',
      'Model Training & Evaluation',
      'Data Augmentation',
    ],
  },
  {
    id: 'cv',
    name: 'Computer Vision',
    iconName: 'Camera',
    summary: 'Sub-second real-time video stream analysis and object tracking.',
    skills: [
      'OpenCV',
      'Image Processing',
      'Face Detection',
      'Real-Time Video Inference',
      'Bounding-Box Annotation',
    ],
  },
  {
    id: 'cyber',
    name: 'Cybersecurity',
    iconName: 'ShieldAlert',
    summary: 'Defensive engineering against social engineering, injection, and intrusions.',
    skills: [
      'Web Application Security',
      'SQL Injection & XSS Testing',
      'Intrusion Detection',
      'Phishing & Social Engineering Defence',
    ],
  },
  {
    id: 'agentic',
    name: 'Generative & Agentic AI',
    iconName: 'Sparkles',
    summary: 'Foundation concepts for autonomous agent workflows and prompt systems.',
    skills: [
      'LLM Fundamentals',
      'AI Agent Concepts',
      'Prompt Engineering',
      'Google Gemini',
    ],
  },
  {
    id: 'salesforce',
    name: 'Salesforce Administration',
    iconName: 'Database',
    summary: 'CRM architecture, granular security governance, and workflow automation.',
    skills: [
      'Salesforce CRM Administration',
      'Flow Builder',
      'Process Automation',
      'Custom Objects & Fields',
      'Profiles & Permission Sets',
      'Role Hierarchies',
      'Field-Level Security',
    ],
  },
  {
    id: 'programming',
    name: 'Programming & Data',
    iconName: 'Code',
    summary: 'Core language proficiency and structured numerical processing.',
    skills: [
      'Python',
      'C++ (Foundational)',
      'NumPy',
      'Data Preprocessing',
      'Data Analysis',
      'Dataset Preparation',
      'Data Structures & Algorithms',
      'Object-Oriented Programming',
      'Problem Solving',
      'Git & GitHub',
      'VS Code',
    ],
  },
];

export const PROJECTS: Project[] = [
  {
    id: 'phantom-guard',
    name: 'Phantom Guard',
    category: 'Cybersecurity',
    badgeCategory: 'Cybersecurity & AI',
    type: 'Major Project',
    technologies: ['Python', 'Machine Learning', 'AI Techniques', 'Cybersecurity', 'NLP Pattern Analysis'],
    shortDescription:
      'Security platform detecting social engineering attempts such as phishing messages and malicious links, proactively warning users before engagement.',
    overview:
      'Phantom Guard is a major cybersecurity platform engineered to detect social engineering maneuvers in digital communications. It flags deceptive intent, suspicious hyperlinks, and psychological manipulation patterns in messages before users fall victim to attacks.',
    problem:
      'Social engineering remains the number one attack vector for breaching personal and enterprise perimeters. Attackers continuously bypass static email spam filters using sophisticated linguistic framing and zero-day malicious URLs.',
    solution:
      'An intelligent detection pipeline analyzing lexical and behavioral signals in inbound text messages and URLs, offering real-time risk indicators and preemptive warnings.',
    aimlAngle:
      'Leverages machine learning algorithms trained to isolate manipulation patterns, suspicious syntax markers, and deception signatures across communication channels.',
    cybersecurityAngle:
      'Targets initial attack vector compromise, actively halting credential harvesting, reconnaissance exploits, and drive-by malware delivery.',
    status: 'In Progress',
    githubUrl: 'https://github.com/yadavhemanth373-cell/phantom-guard',
    interactiveVisualType: 'phantom',
  },
  {
    id: 'face-mask-detection',
    name: 'Real-Time Face Mask Detection System',
    category: 'Computer Vision',
    badgeCategory: 'Computer Vision & Deep Learning',
    type: 'Computer Vision Project',
    technologies: ['Python', 'TensorFlow', 'Keras', 'OpenCV', 'NumPy'],
    shortDescription:
      'End-to-end CNN pipeline in TensorFlow/Keras integrated with OpenCV webcam streams for sub-second real-time inference and labeled bounding boxes.',
    overview:
      'Built a complete deep learning computer vision pipeline capable of detecting and classifying masked and unmasked faces on dynamic live webcam feeds with sub-second response times.',
    problem:
      'Manual monitoring of mask compliance in busy transit hubs and healthcare facilities is inefficient and susceptible to human oversight under dynamic lighting conditions.',
    solution:
      'Trained a custom Convolutional Neural Network (CNN) in TensorFlow/Keras and paired it with high-frequency OpenCV video stream extraction, dynamically drawing color-coded bounding boxes on each subject.',
    aimlAngle:
      'Implemented robust CNN training with comprehensive data augmentation techniques including rotation, horizontal flipping, and color shift perturbations to eliminate over-fitting.',
    cybersecurityAngle:
      'Computer vision monitoring systems must ensure model integrity and prevent adversarial perturbations from spoofing verification boundaries.',
    status: 'Completed',
    githubUrl: 'https://github.com/yadavhemanth373-cell/face-mask-detection',
    interactiveVisualType: 'mask',
  },
  {
    id: 'intrusion-detection-system',
    name: 'Intrusion Detection System Using Machine Learning',
    category: 'AI/ML',
    badgeCategory: 'Cybersecurity & Machine Learning',
    type: 'Mini Project',
    technologies: ['Python', 'Machine Learning', 'Data Preprocessing', 'Feature Encoding'],
    shortDescription:
      'Trained and evaluated ML classifiers on labeled network traffic data to isolate malicious intrusions from normal activity while minimizing false alarms.',
    overview:
      'Developed a network anomaly detection system that parses high-volume connection metadata, extracts crucial telemetry features, and trains machine learning classifiers to distinguish benign traffic from cyber attacks.',
    problem:
      'Modern security operations centers struggle with alert fatigue caused by excessive false alarms generated by traditional signature-based detection rules.',
    solution:
      'Engineered an ML classification pipeline that preprocesses raw network traffic, encodes protocol attributes, and trains multiple classifiers with a key emphasis on optimizing precision and recall to curb false alarms.',
    aimlAngle:
      'Compared multiple classification architectures using rigorous Accuracy, Precision, and Recall evaluation metrics to establish the optimal balance between high threat recall and low false-positive noise.',
    cybersecurityAngle:
      'Fortifies internal network perimeters against unauthorized port scans, denial of service attempts, and lateral movement by malicious actors.',
    status: 'Completed',
    githubUrl: 'https://github.com/yadavhemanth373-cell/network-intrusion-detection',
    interactiveVisualType: 'ids',
  },
  {
    id: 'web-vulnerability-scanner',
    name: 'Web Vulnerability Scanner',
    category: 'Cybersecurity',
    badgeCategory: 'Cybersecurity Tool',
    type: 'Security Tool',
    technologies: ['Python', 'Web Application Security', 'SQL Injection Testing', 'XSS Testing', 'Automation'],
    shortDescription:
      'Python tool that crawls web applications and audits URLs and input forms for SQL Injection and Cross-Site Scripting (XSS), generating structured reports.',
    overview:
      'Created an automated defensive security audit tool in Python that crawls application endpoints, inspects HTML form inputs and URL parameters, and probes for critical web vulnerabilities.',
    problem:
      'Undetected input validation bugs such as SQL Injection (SQLi) and Cross-Site Scripting (XSS) allow attackers to extract database records or execute arbitrary scripts in victim sessions.',
    solution:
      'Constructed a focused vulnerability scanner that simulates benign attack payloads against input vectors, checks application responses for reflection or SQL syntax leakages, and outputs structured audit reports.',
    aimlAngle:
      'Structures security audit data and HTTP response patterns into parseable diagnostic datasets, facilitating systematic vulnerability classification.',
    cybersecurityAngle:
      'Implements automated offensive security testing methodologies (DAST principles) to help developers quickly remediate OWASP Top 10 vulnerabilities prior to production deployment.',
    status: 'Completed',
    githubUrl: 'https://github.com/yadavhemanth373-cell/web-vulnerability-scanner',
    interactiveVisualType: 'scanner',
  },
];

export const RESEARCH_ITEM = {
  title: 'Morphing Technology & Biometric Security',
  topic: 'Morphing Technology',
  description:
    'Researched image morphing techniques and their security implications, including face-morphing attacks on biometric identity verification and approaches to detect them.',
  focusAreas: [
    {
      title: 'Face-Morphing Attacks',
      detail:
        'Investigation into how digital manipulation blends landmark facial coordinates from two distinct subjects into a single hybrid image capable of matching multiple biometric records.',
    },
    {
      title: 'Biometric Verification Vulnerability',
      detail:
        'Analysis of automated passport gate checkpoints and electronic identity verification systems against synthetic facial feature anomalies.',
    },
    {
      title: 'Detection Methodologies',
      detail:
        'Exploration of algorithmic approaches including frequency domain analysis, deep feature disparity mapping, and landmark distortion detection to identify manipulated biometric data.',
    },
  ],
};

export const EXPERIENCE_ITEM = {
  role: 'Salesforce Administrator Trainee',
  organization: 'Salesforce Administration Training',
  period: 'Sep 2025 – Present',
  summary:
    'Hands-on administration experience modeling enterprise CRM architectures, designing declarative automation flows, and implementing zero-trust record access controls.',
  responsibilities: [
    'Designed standard and custom objects, fields, and relationships to model CRM data.',
    'Applied field-level security to protect sensitive records.',
    'Configured profiles, permission sets, and role hierarchies.',
    'Applied least-privilege access and controlled record sharing.',
    'Built declarative automations in Flow Builder.',
    'Worked with business processes and CRM record life cycles.',
    'Preparing for the Salesforce Certified Administrator exam.',
  ],
  securityKeynote:
    'Enforced strict least-privilege principles across profiles and permission sets, ensuring sensitive business data remains protected at both field and object levels.',
};

export const CERTIFICATIONS: Certification[] = [
  {
    id: 'oracle-agentic',
    title: 'Oracle Agentic AI Foundations Associate',
    issuer: 'Oracle',
    category: 'Agentic AI',
    description:
      'Validates foundational comprehension of autonomous AI agents, tool-augmented reasoning, cognitive orchestration loops, and enterprise AI deployment models.',
    skillsCovered: ['Agent Architectures', 'Autonomous Workflows', 'Tool Integration', 'Enterprise AI Principles'],
  },
  {
    id: 'google-gemini',
    title: 'Gemini Certified University Student',
    issuer: 'Google',
    category: 'Generative AI',
    description:
      'Certified by Google in multimodal prompting, large language model fundamentals, Gemini ecosystem capabilities, and responsible AI system design.',
    skillsCovered: ['Google Gemini', 'Prompt Engineering', 'Multimodal AI', 'LLM Concepts'],
  },
  {
    id: 'salesforce-trailhead',
    title: 'Admin Fundamentals Superbadges',
    issuer: 'Salesforce Trailhead',
    category: 'Cloud CRM',
    description:
      'Demonstrated practical proficiency in Salesforce data modeling, declarative business logic, user management, and security governance.',
    skillsCovered: ['Flow Builder', 'Custom Objects & Schema', 'Field-Level Security', 'Role Hierarchies'],
  },
  {
    id: 'servicenow-micro',
    title: 'ServiceNow Micro-Certification',
    issuer: 'ServiceNow',
    category: 'Enterprise IT',
    description:
      'Attained validation in enterprise digital workflow design, service catalog management, and core incident/request lifecycle automation.',
    skillsCovered: ['Workflow Automation', 'Service Catalog', 'ITSM Processes', 'Platform Governance'],
  },
  {
    id: 'unity-essentials',
    title: 'Unity Essentials Pathway',
    issuer: 'Unity Learn',
    category: 'Simulation & 3D',
    description:
      'Acquired core competencies in spatial computation, 3D coordinate geometry, physics engine integration, and interactive rendering pipelines.',
    skillsCovered: ['3D Coordinate Systems', 'Physics Simulation', 'Object Hierarchy', 'Scene Composition'],
  },
];

export const CURRENTLY_EXPLORING = [
  {
    title: 'Agentic AI',
    focus: 'Autonomous Agent Frameworks & Tool Invocation',
    detail:
      'Investigating multi-agent task delegation, prompt orchestration loops, and deterministic tool-calling workflows for resilient software operations.',
  },
  {
    title: 'Computer Vision',
    focus: 'Edge-Optimized Inference & Real-Time Video',
    detail:
      'Exploring high-throughput image processing pipelines, feature extraction optimization, and low-latency computer vision inference on constrained hardware.',
  },
  {
    title: 'Cybersecurity',
    focus: 'ML-Driven Anomaly Detection & Threat Defence',
    detail:
      'Researching advanced machine learning architectures for detecting subtle lateral movement in networks and defending against sophisticated social engineering attacks.',
  },
  {
    title: 'Machine Learning',
    focus: 'Deep CNN Architectures & False-Alarm Reduction',
    detail:
      'Studying loss function customization, feature space regularization, and precision-recall balancing for high-stakes defensive classification pipelines.',
  },
];
