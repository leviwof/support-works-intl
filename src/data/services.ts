export interface ServiceItem {
  id: string;
  sno: number;
  name: string;
  type: 'individual' | 'bundled';
  category: 'Technology Support' | 'Website Services' | 'Digital Services' | 'Consultation & Training' | 'Bundled Packages';
  subCategory: string;
  price: number;
  description: string;
  highlights?: string[];
  badge?: string;
}

export const servicesData: ServiceItem[] = [
  // 1-10: Technology Support (Individual)
  {
    id: 'tech-consult-30',
    sno: 1,
    name: 'Technology Consultation – 30 Minutes',
    type: 'individual',
    category: 'Technology Support',
    subCategory: 'Technology Support',
    price: 49,
    description: 'One-on-one assistance for technology questions, software issues, device setup, and digital requirements.',
    highlights: ['One-on-one remote session', 'Device & software Q&A', 'Immediate action steps']
  },
  {
    id: 'tech-consult-60',
    sno: 2,
    name: 'Technology Consultation – 60 Minutes',
    type: 'individual',
    category: 'Technology Support',
    subCategory: 'Technology Support',
    price: 99,
    badge: 'Popular',
    description: 'Detailed technology guidance covering software, devices, digital tools, and practical solutions.',
    highlights: ['Comprehensive 1-hour session', 'Deep-dive problem diagnosis', 'Customized digital guidance']
  },
  {
    id: 'comp-troubleshoot',
    sno: 3,
    name: 'Computer Troubleshooting',
    type: 'individual',
    category: 'Technology Support',
    subCategory: 'Technology Support',
    price: 99,
    description: 'Diagnosis and assistance with common computer, operating system, application, and configuration problems.',
    highlights: ['OS error diagnosis', 'Application crash resolution', 'Performance cleanup']
  },
  {
    id: 'soft-install',
    sno: 4,
    name: 'Software Installation & Setup',
    type: 'individual',
    category: 'Technology Support',
    subCategory: 'Technology Support',
    price: 129,
    description: 'Installation and configuration of supported software applications based on customer requirements.',
    highlights: ['Safe installation', 'License & profile activation', 'Configuration & test run']
  },
  {
    id: 'comp-setup-opt',
    sno: 5,
    name: 'Computer Setup & Optimization',
    type: 'individual',
    category: 'Technology Support',
    subCategory: 'Technology Support',
    price: 199,
    badge: 'Best Value',
    description: 'Setup and configuration of a computer, including software, preferences, connectivity, and general optimization.',
    highlights: ['New computer onboarding', 'Peripheral & printer connectivity', 'Startup & speed optimization']
  },
  {
    id: 'email-setup',
    sno: 6,
    name: 'Email Account Setup',
    type: 'individual',
    category: 'Technology Support',
    subCategory: 'Technology Support',
    price: 79,
    description: 'Setup and configuration of supported email accounts on computers and mobile devices.',
    highlights: ['IMAP/POP/Exchange setup', 'Cross-device sync', 'Spam & security baseline']
  },
  {
    id: 'cloud-storage-setup',
    sno: 7,
    name: 'Cloud Storage Setup',
    type: 'individual',
    category: 'Technology Support',
    subCategory: 'Technology Support',
    price: 149,
    description: 'Configuration of supported cloud-storage services and assistance with organizing files.',
    highlights: ['Google Drive / OneDrive / Dropbox', 'Automated sync rules', 'Secure sharing controls']
  },
  {
    id: 'data-organization',
    sno: 8,
    name: 'Data Organization Service',
    type: 'individual',
    category: 'Technology Support',
    subCategory: 'Technology Support',
    price: 199,
    description: 'Organization of digital files, folders, documents, photos, and other customer-provided data.',
    highlights: ['Folder structure cleanup', 'Deduplication strategy', 'Clear categorization']
  },
  {
    id: 'backup-setup',
    sno: 9,
    name: 'Backup Setup & Configuration',
    type: 'individual',
    category: 'Technology Support',
    subCategory: 'Technology Support',
    price: 149,
    description: 'Setup and configuration of a backup solution for important personal files and documents.',
    highlights: ['Local & cloud redundancy', 'Automated schedule', 'Recovery verification test']
  },
  {
    id: 'digital-sec-review',
    sno: 10,
    name: 'Digital Security Review',
    type: 'individual',
    category: 'Technology Support',
    subCategory: 'Technology Support',
    price: 249,
    badge: 'Essential',
    description: 'Review of basic account, password, device, and security settings with practical recommendations.',
    highlights: ['Account vulnerability audit', '2FA/MFA setup guidance', 'Actionable security report']
  },

  // 11-20: Website Services (Individual)
  {
    id: 'web-troubleshoot',
    sno: 11,
    name: 'Website Troubleshooting',
    type: 'individual',
    category: 'Website Services',
    subCategory: 'Website Services',
    price: 199,
    description: 'Diagnosis and correction of common website errors, display problems, and functionality issues.',
    highlights: ['Broken layout fix', 'Form & script error check', 'Cross-browser testing']
  },
  {
    id: 'web-content-update',
    sno: 12,
    name: 'Website Content Update',
    type: 'individual',
    category: 'Website Services',
    subCategory: 'Website Services',
    price: 149,
    description: 'Updating existing website text, images, pages, contact information, and customer-provided content.',
    highlights: ['Copy & image updates', 'Menu & link maintenance', 'Rapid turnaround']
  },
  {
    id: 'web-speed-opt',
    sno: 13,
    name: 'Website Speed Optimization',
    type: 'individual',
    category: 'Website Services',
    subCategory: 'Website Services',
    price: 299,
    badge: 'Performance',
    description: 'Review and optimization of applicable website elements to improve loading speed and performance.',
    highlights: ['Image & asset compression', 'Caching configuration', 'Core Web Vitals boost']
  },
  {
    id: 'wp-setup',
    sno: 14,
    name: 'WordPress Setup',
    type: 'individual',
    category: 'Website Services',
    subCategory: 'Website Services',
    price: 299,
    description: 'Installation and basic configuration of a WordPress website, including themes, plugins, and essential settings.',
    highlights: ['Fresh CMS installation', 'Essential security plugins', 'Theme configuration']
  },
  {
    id: 'landing-page-dev',
    sno: 15,
    name: 'Landing Page Development',
    type: 'individual',
    category: 'Website Services',
    subCategory: 'Website Services',
    price: 399,
    badge: 'Popular',
    description: 'Design and development of a responsive single-page website for personal or professional use.',
    highlights: ['High-converting layout', 'Mobile-first responsive', 'Lead capture integration']
  },
  {
    id: 'personal-web-dev',
    sno: 16,
    name: 'Personal Website',
    type: 'individual',
    category: 'Website Services',
    subCategory: 'Website Services',
    price: 699,
    description: 'Development of a professional personal website containing customer information, biography, portfolio, or services.',
    highlights: ['Custom bio & showcase', 'Responsive modern design', 'Contact & booking links']
  },
  {
    id: 'pro-web-dev',
    sno: 17,
    name: 'Professional Website',
    type: 'individual',
    category: 'Website Services',
    subCategory: 'Website Services',
    price: 999,
    badge: 'Flagship',
    description: 'Customized multi-page website with responsive design, contact functionality, and content sections.',
    highlights: ['Multi-page structure', 'Modern brand aesthetic', 'SEO & lead generation setup']
  },
  {
    id: 'web-redesign',
    sno: 18,
    name: 'Website Redesign',
    type: 'individual',
    category: 'Website Services',
    subCategory: 'Website Services',
    price: 799,
    description: 'Modern redesign of an existing website with improved layout, navigation, presentation, and responsive design.',
    highlights: ['UI/UX overhaul', 'Mobile responsiveness fix', 'Brand refresh']
  },
  {
    id: 'seo-web-audit',
    sno: 19,
    name: 'SEO Website Audit',
    type: 'individual',
    category: 'Website Services',
    subCategory: 'Website Services',
    price: 199,
    description: 'Review of website structure, content, technical elements, and basic SEO factors with an improvement report.',
    highlights: ['Technical audit', 'Keyword & tag evaluation', 'Actionable recommendation PDF']
  },
  {
    id: 'basic-seo-opt',
    sno: 20,
    name: 'Basic SEO Optimization',
    type: 'individual',
    category: 'Website Services',
    subCategory: 'Website Services',
    price: 399,
    description: 'Implementation of basic on-page SEO improvements, including titles, descriptions, headings, and content structure.',
    highlights: ['Meta title & descriptions', 'H1-H6 hierarchy cleanup', 'Sitemap & indexing check']
  },

  // 21-30: Digital Services (Individual)
  {
    id: 'resume-cv-prep',
    sno: 21,
    name: 'Resume / CV Preparation',
    type: 'individual',
    category: 'Digital Services',
    subCategory: 'Digital Services',
    price: 149,
    badge: 'Popular',
    description: 'Creation or professional redesign of a resume or CV using information provided by the customer.',
    highlights: ['ATS-friendly formatting', 'Keyword targeted', 'Executive design layout']
  },
  {
    id: 'linkedin-opt',
    sno: 22,
    name: 'LinkedIn Profile Optimization',
    type: 'individual',
    category: 'Digital Services',
    subCategory: 'Digital Services',
    price: 199,
    description: 'Improvement of a LinkedIn profile, including headline, summary, experience, and professional presentation.',
    highlights: ['Compelling headline & about', 'Experience rewriting', 'Search visibility polish']
  },
  {
    id: 'pro-doc-design',
    sno: 23,
    name: 'Professional Document Design',
    type: 'individual',
    category: 'Digital Services',
    subCategory: 'Digital Services',
    price: 99,
    description: 'Professional formatting and visual presentation of reports, proposals, documents, and other digital materials.',
    highlights: ['Clean typography & hierarchy', 'Brand alignment', 'Print & PDF delivery']
  },
  {
    id: 'pres-design',
    sno: 24,
    name: 'Presentation Design',
    type: 'individual',
    category: 'Digital Services',
    subCategory: 'Digital Services',
    price: 249,
    description: 'Design and formatting of professional PowerPoint or digital presentations using customer-provided content.',
    highlights: ['Pitch decks & keynotes', 'Visual storytelling & charts', 'Editable PPT/Google Slides']
  },
  {
    id: 'digital-portfolio',
    sno: 25,
    name: 'Digital Portfolio Development',
    type: 'individual',
    category: 'Digital Services',
    subCategory: 'Digital Services',
    price: 499,
    description: 'Creation of a professional online portfolio showcasing skills, experience, projects, and achievements.',
    highlights: ['Project gallery showcase', 'Interactive presentation', 'Mobile responsive']
  },
  {
    id: 'graphic-design',
    sno: 26,
    name: 'Graphic Design Service',
    type: 'individual',
    category: 'Digital Services',
    subCategory: 'Digital Services',
    price: 149,
    description: "Creation or refinement of digital graphics based on the customer's requirements.",
    highlights: ['Web graphics & banners', 'Social media assets', 'Vector / high-res files']
  },
  {
    id: 'photo-edit',
    sno: 27,
    name: 'Photo Editing Service',
    type: 'individual',
    category: 'Digital Services',
    subCategory: 'Digital Services',
    price: 99,
    description: 'Editing, enhancement, cropping, resizing, and formatting of customer-provided photographs.',
    highlights: ['Color correction & touchups', 'Headshot refinement', 'Web & print export']
  },
  {
    id: 'personal-branding',
    sno: 28,
    name: 'Personal Branding Package',
    type: 'individual',
    category: 'Digital Services',
    subCategory: 'Digital Services',
    price: 399,
    badge: 'High Impact',
    description: 'Development of professional digital branding materials, profile presentation, biography, and visual elements.',
    highlights: ['Cohesive digital identity', 'Bio & brand narrative', 'Multi-platform assets']
  },
  {
    id: 'doc-conversion',
    sno: 29,
    name: 'Digital Document Conversion',
    type: 'individual',
    category: 'Digital Services',
    subCategory: 'Digital Services',
    price: 79,
    description: 'Conversion and formatting of customer-provided documents into commonly used digital formats.',
    highlights: ['PDF/Word/Excel conversion', 'Format preservation', 'Clean text cleanup']
  },
  {
    id: 'digital-file-org',
    sno: 30,
    name: 'Digital File Organization',
    type: 'individual',
    category: 'Digital Services',
    subCategory: 'Digital Services',
    price: 149,
    description: 'Organization and restructuring of customer-provided digital documents, folders, and files.',
    highlights: ['Logical folder taxonomy', 'Naming conventions', 'Productivity workflow']
  },

  // 31-38: Consultation & Training (Individual)
  {
    id: 'dig-skills-30',
    sno: 31,
    name: 'Digital Skills Consultation – 30 Minutes',
    type: 'individual',
    category: 'Consultation & Training',
    subCategory: 'Consultation & Training',
    price: 49,
    description: 'One-on-one guidance for understanding and using digital tools, applications, and online services.',
    highlights: ['Focused questions answered', 'Tool recommendations', 'Step-by-step guidance']
  },
  {
    id: 'dig-skills-60',
    sno: 32,
    name: 'Digital Skills Consultation – 60 Minutes',
    type: 'individual',
    category: 'Consultation & Training',
    subCategory: 'Consultation & Training',
    price: 99,
    description: 'Detailed individual guidance tailored to the customer’s technology and digital needs.',
    highlights: ['Tailored workflow walkthrough', 'Software deep-dive', 'Practical exercises']
  },
  {
    id: 'comp-skills-1hr',
    sno: 33,
    name: 'Computer Skills Training – 1 Hour',
    type: 'individual',
    category: 'Consultation & Training',
    subCategory: 'Consultation & Training',
    price: 79,
    description: 'Individual training covering everyday computer usage, files, applications, and internet tools.',
    highlights: ['Windows/Mac navigation', 'File management & browsing', 'Safe computing habits']
  },
  {
    id: 'msoffice-1hr',
    sno: 34,
    name: 'Microsoft Office Training – 1 Hour',
    type: 'individual',
    category: 'Consultation & Training',
    subCategory: 'Consultation & Training',
    price: 79,
    description: 'Personalized training in Microsoft Word, Excel, PowerPoint, and related Office applications.',
    highlights: ['Word templates & formatting', 'PowerPoint presentations', 'Outlook productivity']
  },
  {
    id: 'excel-1hr',
    sno: 35,
    name: 'Excel Training – 1 Hour',
    type: 'individual',
    category: 'Consultation & Training',
    subCategory: 'Consultation & Training',
    price: 99,
    badge: 'Popular',
    description: 'One-on-one instruction covering Excel functions, formulas, spreadsheets, formatting, and practical use.',
    highlights: ['VLOOKUP/XLOOKUP/INDEX-MATCH', 'Pivot Tables & charts', 'Formulas & cleanup']
  },
  {
    id: 'programming-1hr',
    sno: 36,
    name: 'Programming Consultation – 1 Hour',
    type: 'individual',
    category: 'Consultation & Training',
    subCategory: 'Consultation & Training',
    price: 129,
    description: 'Technical guidance covering programming concepts, development tools, coding questions, and project-related assistance.',
    highlights: ['Code review & architecture', 'Debugging assistance', 'Developer environment setup']
  },
  {
    id: 'web-mgmt-training',
    sno: 37,
    name: 'Website Management Training',
    type: 'individual',
    category: 'Consultation & Training',
    subCategory: 'Consultation & Training',
    price: 129,
    description: 'Training on managing website content, basic updates, pages, images, and routine website tasks.',
    highlights: ['CMS content publishing', 'Media library management', 'Routine backup guidelines']
  },
  {
    id: 'dig-prod-training',
    sno: 38,
    name: 'Digital Productivity Training',
    type: 'individual',
    category: 'Consultation & Training',
    subCategory: 'Consultation & Training',
    price: 99,
    description: 'Personalized guidance on digital tools and workflows for improving organization and everyday productivity.',
    highlights: ['Task management workflows', 'Note-taking & cloud sync', 'Time-saving shortcuts']
  },

  // 39-57: Bundled Packages
  // Technology Packages (39-42)
  {
    id: 'pkg-essential-support',
    sno: 39,
    name: 'Essential Digital Support Package',
    type: 'bundled',
    category: 'Bundled Packages',
    subCategory: 'Technology Packages',
    price: 199,
    badge: 'Starter',
    description: 'A complete initial care kit for users needing direct assistance with email, devices, and guidance.',
    highlights: [
      'Technology Consultation – 60 Min',
      'Computer Troubleshooting',
      'Email Account Setup'
    ]
  },
  {
    id: 'pkg-comp-setup',
    sno: 40,
    name: 'Computer Setup Package',
    type: 'bundled',
    category: 'Bundled Packages',
    subCategory: 'Technology Packages',
    price: 349,
    description: 'Everything needed to configure a new or refreshed computer system properly from day one.',
    highlights: [
      'Computer Setup & Optimization',
      'Software Installation & Setup',
      'Cloud Storage Setup'
    ]
  },
  {
    id: 'pkg-security-backup',
    sno: 41,
    name: 'Digital Security & Backup Package',
    type: 'bundled',
    category: 'Bundled Packages',
    subCategory: 'Technology Packages',
    price: 399,
    badge: 'Security',
    description: 'Protect your valuable documents and personal information with dual-layered security and automated backup.',
    highlights: [
      'Digital Security Review',
      'Backup Setup & Configuration',
      'Cloud Storage Setup'
    ]
  },
  {
    id: 'pkg-complete-care',
    sno: 42,
    name: 'Complete Computer Care Package',
    type: 'bundled',
    category: 'Bundled Packages',
    subCategory: 'Technology Packages',
    price: 499,
    badge: 'Most Popular',
    description: 'The all-in-one overhaul for computer speed, application setup, file protection, and online safety.',
    highlights: [
      'Computer Setup & Optimization',
      'Software Installation & Setup',
      'Backup Setup & Configuration',
      'Digital Security Review'
    ]
  },

  // Website Packages (43-46)
  {
    id: 'pkg-web-starter',
    sno: 43,
    name: 'Website Starter Package',
    type: 'bundled',
    category: 'Bundled Packages',
    subCategory: 'Website Packages',
    price: 699,
    description: 'Quickly launch an effective online presence with a dedicated single landing page on WordPress.',
    highlights: [
      'WordPress Setup',
      'Landing Page Development',
      'Basic Website Configuration'
    ]
  },
  {
    id: 'pkg-pro-web',
    sno: 44,
    name: 'Professional Website Package',
    type: 'bundled',
    category: 'Bundled Packages',
    subCategory: 'Website Packages',
    price: 1299,
    badge: 'Top Pick',
    description: 'A full multi-page business website optimized for high performance and search engine discovery.',
    highlights: [
      'Professional Website (Multi-page)',
      'Basic SEO Optimization',
      'Website Speed Optimization'
    ]
  },
  {
    id: 'pkg-web-refresh',
    sno: 45,
    name: 'Website Refresh Package',
    type: 'bundled',
    category: 'Bundled Packages',
    subCategory: 'Website Packages',
    price: 999,
    description: 'Revitalize an older website with a modern aesthetic, updated content, and an in-depth SEO audit.',
    highlights: [
      'Website Redesign',
      'Website Content Update',
      'SEO Website Audit'
    ]
  },
  {
    id: 'pkg-web-growth',
    sno: 46,
    name: 'Website Growth Package',
    type: 'bundled',
    category: 'Bundled Packages',
    subCategory: 'Website Packages',
    price: 1499,
    badge: 'Best For Growth',
    description: 'Comprehensive web architecture engineered for fast page loads, high Google ranking, and client conversion.',
    highlights: [
      'Professional Website',
      'Basic SEO Optimization',
      'Website Speed Optimization',
      'SEO Website Audit'
    ]
  },

  // Digital Professional Packages (47-49)
  {
    id: 'pkg-pro-profile',
    sno: 47,
    name: 'Professional Digital Profile Package',
    type: 'bundled',
    category: 'Bundled Packages',
    subCategory: 'Digital Professional Packages',
    price: 499,
    description: 'Upgrade your career presentation across resume, LinkedIn, and corporate documentation.',
    highlights: [
      'Resume/CV Preparation',
      'LinkedIn Profile Optimization',
      'Professional Document Design'
    ]
  },
  {
    id: 'pkg-personal-branding',
    sno: 48,
    name: 'Personal Branding Package',
    type: 'bundled',
    category: 'Bundled Packages',
    subCategory: 'Digital Professional Packages',
    price: 699,
    badge: 'Executive',
    description: 'Establish a dominant digital presence with custom branding, an online portfolio, and a polished LinkedIn presence.',
    highlights: [
      'Personal Branding Package',
      'Digital Portfolio Development',
      'LinkedIn Profile Optimization'
    ]
  },
  {
    id: 'pkg-digital-pro',
    sno: 49,
    name: 'Digital Professional Package',
    type: 'bundled',
    category: 'Bundled Packages',
    subCategory: 'Digital Professional Packages',
    price: 799,
    description: 'The ultimate executive bundle combining resume, portfolio, LinkedIn overhaul, and presentation design.',
    highlights: [
      'Resume/CV Preparation',
      'LinkedIn Profile Optimization',
      'Digital Portfolio Development',
      'Professional Document Design'
    ]
  },

  // Training Packages (50-52)
  {
    id: 'pkg-msoffice-skills',
    sno: 50,
    name: 'Microsoft Office Skills Package',
    type: 'bundled',
    category: 'Bundled Packages',
    subCategory: 'Training Packages',
    price: 299,
    description: 'Hands-on practical mastery of Word, Excel, PowerPoint, and personal digital productivity.',
    highlights: [
      'Microsoft Office Training – 2 Hours',
      'Excel Training – 1 Hour',
      'Digital Productivity Training – 1 Hour'
    ]
  },
  {
    id: 'pkg-comp-skills-training',
    sno: 51,
    name: 'Computer Skills Training Package',
    type: 'bundled',
    category: 'Bundled Packages',
    subCategory: 'Training Packages',
    price: 299,
    description: 'Build confidence with everyday computer usage, file management, digital workflows, and personal consultation.',
    highlights: [
      'Computer Skills Training – 2 Hours',
      'Digital Productivity Training – 1 Hour',
      'Digital Skills Consultation – 1 Hour'
    ]
  },
  {
    id: 'pkg-web-mgmt-training',
    sno: 52,
    name: 'Website Management Training Package',
    type: 'bundled',
    category: 'Bundled Packages',
    subCategory: 'Training Packages',
    price: 249,
    description: 'Learn how to confidently manage, update, and publish content on your own website without hiring developers.',
    highlights: [
      'Website Management Training',
      'Digital Skills Consultation – 60 Min',
      'Digital Productivity Training'
    ]
  },

  // Business Packages (53-57)
  {
    id: 'pkg-small-biz',
    sno: 53,
    name: 'Small Business Digital Package',
    type: 'bundled',
    category: 'Bundled Packages',
    subCategory: 'Business Packages',
    price: 999,
    badge: 'Popular for Small Biz',
    description: 'A turnkey foundation for small businesses: a multi-page website, branded documentation, SEO, and consultation.',
    highlights: [
      'Professional Website',
      'Professional Document Design',
      'Basic SEO Optimization',
      'Digital Skills Consultation'
    ]
  },
  {
    id: 'pkg-complete-setup',
    sno: 54,
    name: 'Complete Digital Setup Package',
    type: 'bundled',
    category: 'Bundled Packages',
    subCategory: 'Business Packages',
    price: 1499,
    description: 'Robust business launch package integrating a modern website, cloud backup security, and branding assets.',
    highlights: [
      'Professional Website',
      'Basic SEO Optimization',
      'Digital Security Review',
      'Cloud/Backup Setup',
      'Professional Document Design'
    ]
  },
  {
    id: 'pkg-biz-launch',
    sno: 55,
    name: 'Business Digital Launch Package',
    type: 'bundled',
    category: 'Bundled Packages',
    subCategory: 'Business Packages',
    price: 1799,
    badge: 'High Value',
    description: 'Engineered for new companies wanting immediate market presence, SEO visibility, and team digital efficiency.',
    highlights: [
      'Professional Website',
      'SEO Website Audit',
      'Basic SEO Optimization',
      'Professional Document Design',
      'Digital Productivity Training'
    ]
  },
  {
    id: 'pkg-biz-web-opt',
    sno: 56,
    name: 'Business Website & Optimization Package',
    type: 'bundled',
    category: 'Bundled Packages',
    subCategory: 'Business Packages',
    price: 1999,
    description: 'Performance-driven bundle focusing on ultra-fast loading speeds, on-page SEO, audit report, and staff training.',
    highlights: [
      'Professional Website',
      'Website Speed Optimization',
      'Basic SEO Optimization',
      'SEO Website Audit',
      'Website Management Training'
    ]
  },
  {
    id: 'pkg-complete-digital-biz',
    sno: 57,
    name: 'Complete Digital Business Package',
    type: 'bundled',
    category: 'Bundled Packages',
    subCategory: 'Business Packages',
    price: 2499,
    badge: 'Enterprise Flagship',
    description: 'Our most comprehensive enterprise solution covering web development, speed optimization, security, SEO, and staff training.',
    highlights: [
      'Professional Website',
      'Website Speed Optimization',
      'SEO Optimization',
      'Digital Security Review',
      'Professional Document Design',
      'Digital Productivity Training'
    ]
  }
];
