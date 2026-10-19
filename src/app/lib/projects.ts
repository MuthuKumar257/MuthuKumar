import type { ProjectId } from './routes.js'

import tokenTrim1 from '../../assets/projects/TokenTrim1.png'
import tokenTrim2 from '../../assets/projects/TokenTrim2.png'
import tokenTrim3 from '../../assets/projects/TokenTrim3.png'

import codeExamAdmin from '../../assets/projects/CodeExamAdmin.png'
import codeExamFaculty from '../../assets/projects/CodeExamFaculty.png'
import codeExamLogin from '../../assets/projects/CodeExamLogin.png'
import codeExamStudent from '../../assets/projects/CodeExamStudent.png'

import cashFlowAi1 from '../../assets/projects/CashFlowAI1.png'
import cashFlowAi2 from '../../assets/projects/CashFlowAI2.png'
import cashFlowAiLogin from '../../assets/projects/CashFlowAILogin.png'

import alumnyxHome from '../../assets/projects/AlumnyxHome.jpeg'
import alumnyxConnections from '../../assets/projects/AlumnyxConnections.jpeg'
import alumnyxJobs from '../../assets/projects/AlumnyxJobs.jpeg'
import alumnyxLogin from '../../assets/projects/AlumnyxLogin.jpeg'

import kitchenCustomer from '../../assets/projects/KitchenMangerCustomer.png'
import kitchenCashier from '../../assets/projects/KitchenMangerCashier.png'
import kitchenLine from '../../assets/projects/KitchenMangerKitchen.png'
import kitchenManager from '../../assets/projects/KitchenMangerMager.png'

import lightBoundaryCover from '../../assets/projects/LightBoundaryCover.png'

export type Metric = { value: string; label: string }
export type Shot = { src: string; alt: string; width: number; height: number; caption?: string }
export type Quote = { text: string; source: string }
export type Endorsement = { text: string; role: string; highlight?: string }
export type Flow = { label: string; steps: string[] }
export type Film = { src: string; poster: string; captions: string; duration: string; key?: string; iv?: string }

export type CaseStudy = {
  problem: { body: string; stats?: Metric[]; quote?: Quote }
  insight: string
  contrast?: { title: string; items: string[]; keep: boolean }[]
  decisions: { title: string; body: string; shots: Shot[]; flows?: Flow[]; compare?: true }[]
  result: { title?: string; body: string; metrics?: Metric[]; note?: string; quote?: Quote; changes?: [string, string][]; shots?: Shot[] }
  takeaway: { line: string; body?: string }
  partners?: Endorsement[]
  film?: Film
  cover?: Shot
}

type Teaser = {
  id: ProjectId
  name: string
  category: string
  headline: string
  description: string
  summary: string
  role: string
  organization: string
  timeline?: string
  status?: string
  team: string
  scope: string
  metrics: Metric[]
  color: string
  ink: string
  cover: Shot
  tags?: string[]
  liveUrl?: string
  repoUrl?: string
  earlier?: true
  concept?: true
}

export type Project = Teaser & ((CaseStudy & { locked?: never }) | { locked: true })

export const projects: Project[] = [
  {
    id: 'toktrim',
    name: 'TokTrim',
    category: 'AI & Prompt Optimization',
    headline: 'AI prompt optimization middleware reducing token costs by up to 50%.',
    description: 'An AI prompt optimization middleware built with Python and FastAPI. It preprocesses and compresses prompts to reduce token costs by up to 50% through intelligent text compression and low-latency filtering for enterprise AI applications.',
    summary: 'Preprocesses and compresses LLM prompts to cut API token costs in half with sub-15ms overhead.',
    role: 'Creator & Lead Developer',
    organization: 'Independent Project',
    timeline: '2026',
    status: 'Live on Microsoft Edge Store',
    team: 'Sole Developer',
    scope: 'Stateless FastAPI middleware, semantic prompt pruning, Microsoft Edge extension',
    tags: ['Python', 'FastAPI', 'Prompt Engineering', 'Microsoft Edge Extension', 'REST APIs', 'LLM Cost Optimization'],
    liveUrl: 'https://microsoftedge.microsoft.com/addons/detail/tokentrim-ai-prompt-cos/mmjcikimhghfdpmnbbbflpjkldgggbko',
    metrics: [
      { value: 'Up to 50%', label: 'Token cost reduction' },
      { value: '<15ms', label: 'Processing overhead' },
    ],
    color: '#0f2b26',
    ink: '#a7f3d0',
    cover: {
      src: tokenTrim2,
      alt: 'TokTrim prompt cost optimizer interface and compression dashboard',
      width: 1536,
      height: 877,
    },
    problem: {
      body: 'Modern LLM API billing scales directly with prompt token count. High-volume enterprise bots and interactive AI workflows routinely send bloated context, repetitive instructions, and redundant syntactic whitespace, leading to inflated operational expenditure and unnecessary network overhead.',
      stats: [
        { value: '50%', label: 'Maximum token cost savings observed' },
        { value: '<15ms', label: 'Stateless processing overhead' },
      ],
    },
    insight: 'Optimizing and pruning prompt payloads at the gateway layer before dispatching to LLM providers unlocks massive cost efficiency without degrading conversational or reasoning accuracy.',
    decisions: [
      {
        title: 'Stateless Python & FastAPI middleware architecture',
        body: 'Constructed a high-throughput, stateless FastAPI service capable of intercepting and filtering outgoing prompt payloads in real time with sub-15ms overhead. The service acts as an invisible gateway between user clients and upstream LLM endpoints.',
        shots: [
          {
            src: tokenTrim3,
            alt: 'TokTrim API architecture and request processing interface',
            width: 1531,
            height: 952,
            caption: 'TokenTrim compression pipeline inspecting active prompt payloads.',
          },
        ],
      },
      {
        title: 'Semantic-preserving compression & heuristic token pruning',
        body: 'Implemented algorithmic text heuristics and whitespace normalization that eliminate redundant prompt boilerplate and duplicate phrasing while preserving crucial system directives, tone constraints, and reasoning accuracy.',
        shots: [
          {
            src: tokenTrim1,
            alt: 'TokTrim browser popup and instant cost saving calculator',
            width: 353,
            height: 496,
            caption: 'Edge extension popup displaying token count reduction metrics.',
          },
        ],
      },
    ],
    result: {
      body: 'Published on the official Microsoft Edge Add-ons catalog. TokTrim reliably achieves up to 50% token reduction across multi-turn prompts and verbose instructions while maintaining rapid sub-millisecond execution times.',
      metrics: [
        { value: 'Up to 50%', label: 'Token cost reduction' },
        { value: 'Live', label: 'Microsoft Edge Add-ons Catalog' },
      ],
      shots: [
        {
          src: tokenTrim2,
          alt: 'TokTrim live store preview and extension overview',
          width: 1536,
          height: 877,
        },
      ],
    },
    takeaway: {
      line: 'Targeted pre-processing delivers compounding financial and latency gains in AI systems.',
      body: 'Optimizing prompts before inference is often far more cost-effective than simply choosing smaller, less capable base models.',
    },
  },
  {
    id: 'codeexam',
    name: 'CodeExam',
    category: 'Assessment Platform',
    headline: 'End-to-end coding exam platform with real-time IDE and browser proctoring.',
    description: 'An online coding examination and technical assessment platform for educational institutions, faculty, and students. It includes a coding IDE, assessment workflows, and browser-based proctoring capabilities.',
    summary: 'Unified assessment suite combining in-browser IDE, isolated server sandbox, and tamper-resistant proctoring.',
    role: 'Full Stack Developer',
    organization: 'Educational Technology',
    timeline: '2025 to 2026',
    status: 'Completed',
    team: 'Engineering Team',
    scope: 'React & Vite frontend, Supabase PostgreSQL & Realtime backend, server sandbox execution engine, WebRTC proctoring',
    tags: ['React', 'TypeScript', 'Supabase', 'PostgreSQL', 'Realtime Sandbox', 'WebRTC Proctoring'],
    metrics: [
      { value: '3 Portals', label: 'Admin, Faculty, and Student' },
      { value: 'Zero-Install', label: 'In-browser compilation & execution' },
    ],
    color: '#16233b',
    ink: '#93c5fd',
    cover: {
      src: codeExamAdmin,
      alt: 'CodeExam administrator dashboard showing exam management and student statistics',
      width: 1518,
      height: 827,
    },
    problem: {
      body: 'Educational institutions conducting technical assessments struggle with inconsistent local student coding setups and rampant tab-switching dishonesty during remote exams. Traditional test suites either require cumbersome client installations or lack isolated runtime sandboxes with continuous proctoring telemetry.',
      stats: [
        { value: '100%', label: 'Browser-based execution with zero local setup' },
        { value: 'Real-Time', label: 'Telemetry, blur tracking & screen logs' },
      ],
    },
    insight: 'Pairing an isolated server-side execution sandbox with proactive, event-driven proctoring safeguards gives faculty trusted assessments without frustrating students.',
    decisions: [
      {
        title: 'Role-based portal architecture with Supabase Realtime',
        body: 'Engineered three dedicated portals with Supabase PostgreSQL and Row-Level Security: an Admin portal for institution-wide batch setup, a Faculty portal for authoring problem statements and dual public/hidden test suites, and a focused Student workspace.',
        shots: [
          {
            src: codeExamFaculty,
            alt: 'CodeExam faculty interface for managing questions and test cases',
            width: 1518,
            height: 821,
            caption: 'Faculty portal for creating assessments and defining input/output verification suites.',
          },
          {
            src: codeExamStudent,
            alt: 'CodeExam student testing workspace with live editor and submission terminal',
            width: 1522,
            height: 831,
            caption: 'Student examination view featuring syntax-highlighted editor and instant test-runner.',
          },
        ],
      },
      {
        title: 'Isolated server-side execution sandbox & proctoring safeguards',
        body: 'Decoupled code execution from student hardware using an isolated server-side sandbox with strict CPU, memory, and timeout limits. Integrated event hooks tracking window blur, full-screen exits, and copy-paste attempts alongside WebRTC and MediaRecorder proctoring streams.',
        shots: [
          {
            src: codeExamLogin,
            alt: 'CodeExam secure authentication and credential verification page',
            width: 1536,
            height: 827,
            caption: 'Secure authentication barrier routing users into respective verified dashboards.',
          },
          {
            src: codeExamAdmin,
            alt: 'CodeExam admin overview',
            width: 1518,
            height: 827,
            caption: 'Admin management console tracking batch examinations.',
          },
        ],
      },
    ],
    result: {
      body: 'CodeExam provides an end-to-end assessment environment where students write, compile, and execute code within clean bounds while instructors review automated test passing rates and proctoring logs.',
      metrics: [
        { value: 'Instant', label: 'Automated test suite evaluation' },
        { value: 'Integrity', label: 'Audit-ready proctoring history' },
      ],
    },
    takeaway: {
      line: 'Robust security and developer ergonomics can seamlessly coexist in educational software.',
      body: 'When assessment tooling feels fast, fair, and reliable, students focus entirely on clean problem solving.',
    },
  },
  {
    id: 'cashflow-ai',
    name: 'CashFlow AI',
    category: 'Financial Intelligence',
    headline: 'AI-powered financial platform forecasting cash flow and liquidity risks.',
    description: 'An AI-powered financial intelligence platform that analyzes financial data, forecasts cash flow, identifies potential cash shortages, and provides insights into expenses and delayed customer payments.',
    summary: 'Predictive financial intelligence forecasting cash runway and flagging overdue customer accounts.',
    role: 'Full Stack Developer',
    organization: 'FinTech Solution',
    timeline: '2026',
    status: 'Completed',
    team: 'Solo Developer',
    scope: '7-module FastAPI ML backend, Scikit-learn risk ensemble, Pydantic schemas, 30/60/90-day cashflow forecasting',
    tags: ['Python', 'FastAPI', 'Scikit-learn', 'Financial Forecasting', 'Pydantic', 'React'],
    metrics: [
      { value: '30/60/90 Day', label: 'Liquidity shortage warnings' },
      { value: 'Automated', label: 'Delayed payment risk scoring' },
    ],
    color: '#281c3d',
    ink: '#d8b4fe',
    cover: {
      src: cashFlowAi1,
      alt: 'CashFlow AI executive dashboard displaying cash trajectory, receivables, and payables',
      width: 1532,
      height: 821,
    },
    problem: {
      body: 'Growing businesses frequently encounter unexpected liquidity pinches driven by chronic customer payment delays and unbudgeted expense spikes. Static accounting spreadsheets fail to expose impending cash deficits or quantify the rolling impact of overdue accounts receivable.',
      stats: [
        { value: 'Proactive', label: '30/60/90-day cash shortage alerts' },
        { value: 'Granular', label: 'Days Beyond Terms & expense variance' },
      ],
    },
    insight: 'Transforming backward-looking ledger entries into predictive trajectory models gives founders actionable foresight into exact runway bottlenecks.',
    decisions: [
      {
        title: 'Predictive cashflow trajectory engine & shortage alerts',
        body: 'Developed a 7-module Python & FastAPI backend (data_loader, feature_engineering, risk_model, cashflow_forecast) that models rolling burn rates, projecting daily balances and generating proactive 30, 60, and 90-day cash shortage warning alerts.',
        shots: [
          {
            src: cashFlowAi2,
            alt: 'CashFlow AI deep analytics view with revenue forecasting graphs and burn rate breakdown',
            width: 1532,
            height: 830,
            caption: 'Predictive cash runway trajectory model showing projected balance trends.',
          },
        ],
      },
      {
        title: 'Days Beyond Terms (DBT) feature engineering & classification ensemble',
        body: 'Engineered client payment metrics including Days Beyond Terms (DBT) and payment completion ratios. Built a Scikit-learn classification ensemble (RandomForest, LogisticRegression, GradientBoosting) to score client default probabilities and detect anomalous vendor expense surges.',
        shots: [
          {
            src: cashFlowAiLogin,
            alt: 'CashFlow AI portal authentication screen',
            width: 1536,
            height: 827,
            caption: 'Protected client portal entry with role-based corporate access.',
          },
        ],
      },
    ],
    result: {
      body: 'Delivered an intuitive executive financial workspace that highlights runway health, anticipated liquidity gaps, and key payment collection priorities.',
      metrics: [
        { value: 'Early Alert', label: 'Deficit prevention visibility' },
        { value: 'Real-Time', label: 'Accounts receivable tracking' },
      ],
    },
    takeaway: {
      line: 'Visual clarity turns dry accounting data into proactive operational confidence.',
      body: 'Forecasting is most valuable when it delivers clear, prescriptive recommendations rather than just static numbers.',
    },
  },
  {
    id: 'alumnyx',
    name: 'Alumnyx',
    category: 'Mobile Networking',
    headline: 'React Native networking platform powering mentorship, communication, and careers.',
    description: 'A React Native alumni networking platform that supports mentorship, communication, and job opportunities through role-based access.',
    summary: 'Cross-platform collegiate network connecting students and verified alumni for mentorship and job referrals.',
    role: 'Mobile & Frontend Developer',
    organization: 'Collegiate Platform',
    timeline: '2025 to 2026',
    status: 'Completed',
    team: 'Mobile Engineering Team',
    scope: 'React Native mobile application, role-based workflows, verified alumni directory, mentorship pairing & job referral board',
    tags: ['React Native', 'TypeScript', 'REST APIs', 'Role-Based Access', 'Mentorship & Jobs'],
    metrics: [
      { value: 'Role-Based', label: 'Student, Alumni & Coordinator' },
      { value: 'Cross-Platform', label: 'Unified React Native codebase' },
    ],
    color: '#1a273b',
    ink: '#7dd3fc',
    cover: {
      src: alumnyxHome,
      alt: 'Alumnyx mobile app home feed featuring community announcements and networking events',
      width: 702,
      height: 1600,
    },
    problem: {
      body: 'Higher education institutions struggle with fragmented, low-engagement alumni communication. Enrolled students lack direct channels to seek verified industry mentorship or authentic job referrals, while alumni find generic professional networks impersonal and disconnected from their alma mater.',
      stats: [
        { value: 'Direct', label: 'Mentorship connection pipeline' },
        { value: 'Exclusive', label: 'Curated alumni job & referral hub' },
      ],
    },
    insight: 'A dedicated mobile-first platform tailored specifically to college alumni fosters organic professional mentorship far better than generic social networks.',
    decisions: [
      {
        title: 'Three-tier role-based access & verified alumni directory',
        body: 'Architected distinct role workflows for Enrolled Students, Verified Alumni, and Department Coordinators. Built a searchable alumni directory with deep filtering across graduation batches, target industries, job titles, and academic departments.',
        shots: [
          {
            src: alumnyxConnections,
            alt: 'Alumnyx member connections and directory list showing alumni profiles',
            width: 702,
            height: 1600,
            caption: 'Searchable alumni directory with graduation batch and company filters.',
          },
          {
            src: alumnyxLogin,
            alt: 'Alumnyx secure mobile login interface with institutional credentials',
            width: 702,
            height: 1600,
            caption: 'Institutional login screen verifying collegiate affiliation.',
          },
        ],
      },
      {
        title: 'Dedicated alumni job referral hub & structured mentorship pairing',
        body: 'Created focused mobile workflows where alumni post exclusive company job openings and internship referrals, alongside a direct messaging pipeline enabling students to book mentorship sessions and receive career guidance.',
        shots: [
          {
            src: alumnyxJobs,
            alt: 'Alumnyx career opportunities feed displaying openings posted by alumni',
            width: 702,
            height: 1600,
            caption: 'Alumni job referral feed enabling direct student applications.',
          },
          {
            src: alumnyxHome,
            alt: 'Alumnyx main mobile navigation and feed',
            width: 702,
            height: 1600,
            caption: 'Home stream featuring upcoming career workshops and network highlights.',
          },
        ],
      },
    ],
    result: {
      body: 'Built a fluid React Native application that brings students and alumni together, facilitating meaningful career mentorships and direct job referrals.',
      metrics: [
        { value: 'iOS & Android', label: 'Single codebase deployment' },
        { value: 'Direct', label: 'Student-to-alumni communication' },
      ],
    },
    takeaway: {
      line: 'Specialized communities thrive when mobile interactions are frictionless and trustworthy.',
      body: 'Role-based verification gives both students and alumni the confidence to connect and collaborate freely.',
    },
  },
  {
    id: 'kitchen-manager',
    name: 'Kitchen Manager',
    category: 'Restaurant Management',
    headline: 'Full-stack restaurant order and inventory system with dine-in and takeaway workflows.',
    description: 'A full-stack restaurant order and inventory management application with menu pricing, dine-in and takeaway workflows, and protected kitchen administration.',
    summary: 'Full-stack restaurant operations platform managing real-time orders, table routing, KDS, POS, and inventory.',
    role: 'Full Stack Developer',
    organization: 'Commercial Solution',
    timeline: '2025',
    status: 'Completed',
    team: 'Full Stack Engineer',
    scope: 'React 19 & Tailwind CSS v4 frontend, Node.js & Express 4.21 backend, dual database engine, KDS & Cashier POS',
    tags: ['React 19', 'Node.js', 'Express.js', 'TypeScript', 'KDS / POS', 'Tailwind CSS'],
    metrics: [
      { value: 'Real-Time', label: 'Live KDS preparation stages' },
      { value: '4 Portals', label: 'Customer, Kitchen, Cashier & Manager' },
    ],
    color: '#34241a',
    ink: '#fed7aa',
    cover: {
      src: kitchenCustomer,
      alt: 'Kitchen Manager customer ordering tray with Indian Rupee menu pricing and item customization',
      width: 1536,
      height: 773,
    },
    problem: {
      body: 'Fast-paced dining establishments suffer from misplaced paper tickets, confused dine-in versus takeaway routing, and inventory discrepancies between front-of-house staff and kitchen lines. Without synchronized digital ticketing, prep bottlenecks and billing delays inevitably mount.',
      stats: [
        { value: 'Zero Slips', label: 'Digital real-time order transmission' },
        { value: 'Passcode', label: 'Protected kitchen and inventory controls' },
      ],
    },
    insight: 'Providing purpose-built, high-contrast interfaces for each restaurant role ensures orders move from customer trays to hot preparation lines without delays.',
    decisions: [
      {
        title: 'Customer menu ordering with smart cart, UPI QR & live stage tracking',
        body: 'Engineered a responsive React 19 customer interface featuring dietary filters (veg, vegan, spicy), dynamic Indian Rupee (₹) pricing, GST tax computation, simulated UPI QR payment flow, and live order status tracking (Received → Preparing → Ready → Served).',
        shots: [
          {
            src: kitchenCustomer,
            alt: 'Kitchen Manager customer menu view',
            width: 1536,
            height: 773,
            caption: 'Customer menu interface with real-time Indian Rupee (₹) pricing and tray builder.',
          },
          {
            src: kitchenCashier,
            alt: 'Kitchen Manager cashier order settlement terminal with bill breakdown',
            width: 1536,
            height: 783,
            caption: 'Cashier checkout station handling payment collection and invoice printing.',
          },
        ],
      },
      {
        title: 'Node.js & Express operations suite with KDS, POS & Prepaid Dining policy',
        body: 'Built an Express 4.21 backend supporting a Kitchen Display System (KDS) with color-coded timers, a Cashier Billing POS for table checkout, visual table management, Recharts revenue analytics, and a configurable Prepaid Dining policy toggle.',
        shots: [
          {
            src: kitchenLine,
            alt: 'Kitchen Manager cook preparation queue showing active ticket items and cook times',
            width: 1533,
            height: 777,
            caption: 'Live kitchen preparation screen displaying incoming tickets by order type.',
          },
          {
            src: kitchenManager,
            alt: 'Kitchen Manager protected admin portal showing sales reports and stock counts',
            width: 1527,
            height: 776,
            caption: 'Protected management panel overseeing stock levels and restaurant performance.',
          },
        ],
      },
    ],
    result: {
      body: 'Delivered an end-to-end restaurant management system that streamlines order intake, accelerates kitchen fulfillment, and maintains exact inventory accuracy.',
      metrics: [
        { value: '100% Digital', label: 'Paperless kitchen queue dispatch' },
        { value: 'Accurate', label: 'Real-time stock balance tracking' },
      ],
    },
    takeaway: {
      line: 'High-speed operations need high-contrast, uncluttered user interfaces.',
      body: 'Reducing visual noise and clearly delineating role workflows minimizes operational errors in fast-paced environments.',
    },
  },
  {
    id: 'light-boundary',
    name: 'Light Boundary System',
    category: 'IoT & Embedded Systems',
    headline: 'Sensor-based cricket boundary detection system triggering instant LED alerts.',
    description: 'A sensor-based cricket boundary detection system that triggers LED lights when a ball touches or crosses the boundary rope.',
    summary: 'Microcontroller and I2C accelerometer sensor system delivering instant optical confirmation for boundary decisions.',
    role: 'Hardware & Systems Developer',
    organization: 'Sports Engineering',
    timeline: '2025',
    status: 'Completed',
    team: 'Embedded Systems Developer',
    scope: 'Arduino microcontroller logic, MPU6050 I2C accelerometer & gyroscope assembly, real-time threshold trigger, optical LED strip perimeter',
    tags: ['Arduino', 'MPU6050 I2C', 'Embedded C/C++', 'Optical Sensors', 'IoT Edge', 'Sports Tech'],
    metrics: [
      { value: 'Sub-Second', label: 'Instant LED optical trigger' },
      { value: 'MPU6050 I2C', label: 'Precision motion sensing' },
    ],
    color: '#122b1c',
    ink: '#86efac',
    cover: {
      src: lightBoundaryCover,
      alt: 'Light Boundary System architectural diagram and cricket boundary LED detection setup',
      width: 1536,
      height: 880,
    },
    problem: {
      body: 'Boundary contact decisions in cricket frequently rest on ambiguous third-umpire video replays where ground-level shadows and camera angles obscure millimetric contact between the ball and rope. Grassroots and regional grounds lack million-dollar camera tracking, leaving critical calls disputed.',
      stats: [
        { value: 'Sub-Second', label: 'Sensor-to-LED trigger response' },
        { value: 'Tamper-Free', label: 'Physical boundary contact verification' },
      ],
    },
    insight: 'Embedding responsive tactile sensors directly along the boundary line produces immediate, unambiguous optical verification at the exact millisecond of impact.',
    decisions: [
      {
        title: 'MPU6050 accelerometer & gyroscope integration over I2C',
        body: 'Interfaced the MPU6050 6-axis motion tracking sensor with an Arduino microcontroller via I2C (SCL/SDA). Calibrated acceleration and angular velocity thresholds to reliably detect ball impact and rope disturbance while filtering out ambient grass vibrations.',
        shots: [
          {
            src: lightBoundaryCover,
            alt: 'Light Boundary System sensor array and visual trigger line',
            width: 1536,
            height: 880,
            caption: 'Boundary perimeter layout with integrated edge sensors and signal processors.',
          },
        ],
      },
      {
        title: 'Instantaneous perimeter optical LED trigger circuit',
        body: 'Engineered embedded C++ logic to immediately energize high-intensity optical LED strips lining the boundary rope upon impact detection, giving players, umpires, and spectators immediate, unambiguous visual confirmation without replay latency.',
        shots: [
          {
            src: lightBoundaryCover,
            alt: 'Light Boundary System schematic and real-time response circuit',
            width: 1536,
            height: 880,
            caption: 'Optical LED feedback channel providing real-time umpire decision support.',
          },
        ],
      },
    ],
    result: {
      body: 'Created a working proof-of-concept boundary system that illuminates instantly on ball contact, providing an objective, camera-independent decision tool for cricket venues.',
      metrics: [
        { value: 'Instantaneous', label: 'Optical feedback on contact' },
        { value: 'Objective', label: 'Eliminates replay ambiguity' },
      ],
    },
    takeaway: {
      line: 'Physical sensor technology bridges the gap between digital precision and live sports.',
      body: 'Instant physical feedback often delivers higher trust and clarity than delayed off-field digital reviews.',
    },
  },
]
