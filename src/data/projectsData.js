import creditUsImg from "../media/credit-us.jpg";
import csvParserWorkflowImg from "../media/wikipedia_csv_parser.png"
import timeMachineWorkflowImg from "../media/wikipedia_csv_time_machine.png"
import roleBasedAccessControlMatrixImg from "../media/Role-Based Access Control (RBAC) Matrix .png"
import erDiagramImg from "../media/Database ER diagram (crow's foot).png"
import disputeManagementWorkflowImg from "../media/Dispute Management Workflow Diagram.png"

import cityTemperatureOutput from "../media/city_temperature_data_test_csv.png"
import resultsCommitsAndFilesOutput from "../media/results_commit_and_files_dates.png"


const projects = [
    {
        id: "credit-repair-system",
        image: "https://cdn.bootstrapstudio.io/placeholders/1400x800.png",
        tags: [
            { label: "API", color: "#0ACF83" },
            { label: "2024", color: "#0d6efd" }
        ],
        title: "Credit Repair System",
        subtitle: "API for a credit management and dispute resolution platform that aids clients in improving their credit scores.",
        technologies: ["Django, Django Rest Framework", "PostgreSQL", "Pytest", "BeautifulSoup"],
        description: "This is the API for a credit management and dispute resolution platform that enables clients to manage their credit profiles, generate dispute letters, and work with affiliates/employees to improve their credit scores. The system integrates with multiple credit bureaus and provides automated credit report scraping, dispute management, and document generation capabilities.",
        general_details: [
            { label: "Client", value: "Desirable Diamonds Enterprises" },
            { label: "Date", value: "Jan 3, 2025" },
            { label: "Category", value: "API Design and Development" },
            { label: "Website", value: { text: "The Diamond Enterprises", url: "https://thediamondenterprises.com/home" } }

        ],
        features: [
            {
                iconPath: "M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2M8 1.918l-.797.161A4.002 4.002 0 0 0 4 6c0 .628-.134 2.197-.459 3.742-.16.767-.376 1.566-.663 2.258h10.244c-.287-.692-.502-1.49-.663-2.258C12.134 8.197 12 6.628 12 6a4.002 4.002 0 0 0-3.203-3.92L8 1.917zM14.22 12c.223.447.481.801.78 1H1c.299-.199.557-.553.78-1C2.68 10.2 3 6.88 3 6c0-2.42 1.72-4.44 4.005-4.901a1 1 0 1 1 1.99 0A5.002 5.002 0 0 1 13 6c0 .88.32 4.2 1.22 6",
                title: "Multi-role user management",
                description: `- Five distinct user roles: Admin, Employee, Affiliate, Client, and Basic User.

                              - Advanced security: IP address and device fingerprint locking for admin/affiliate accounts.

                              - JWT-based authentication with custom claims for role-based access.`,
                type: "AI Integration"
            },
            {
                iconPath: "M0 10.5A1.5 1.5 0 0 1 1.5 9h1A1.5 1.5 0 0 1 4 10.5v1A1.5 1.5 0 0 1 2.5 13h-1A1.5 1.5 0 0 1 0 11.5zm1.5-.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5zm10.5.5A1.5 1.5 0 0 1 13.5 9h1a1.5 1.5 0 0 1 1.5 1.5v1a1.5 1.5 0 0 1-1.5 1.5h-1a1.5 1.5 0 0 1-1.5-1.5zm1.5-.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5zM6 4.5A1.5 1.5 0 0 1 7.5 3h1A1.5 1.5 0 0 1 10 4.5v1A1.5 1.5 0 0 1 8.5 7h-1A1.5 1.5 0 0 1 6 5.5zM7.5 4a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5z",
                title: "Credit report management",
                description: `- Automated credit report scraping from multiple sources.

                - Structured data processing with JSON storage of report content.

                - Report comparison and tracking over time.`,
                type: "Data Science"
            },
            {
                iconPath: "M14.778.085A.5.5 0 0 1 15 .5V8a.5.5 0 0 1-.314.464L14.5 8l.186.464-.003.001-.006.003-.023.009a12.435 12.435 0 0 1-.397.15c-.264.095-.631.223-1.047.35-.816.252-1.879.523-2.71.523-.847 0-1.548-.28-2.158-.525l-.028-.01C7.68 8.71 7.14 8.5 6.5 8.5c-.7 0-1.638.23-2.437.477A19.626 19.626 0 0 0 3 9.342V15.5a.5.5 0 0 1-1 0V.5a.5.5 0 0 1 1 0v.282c.226-.079.496-.17.79-.26C4.606.272 5.67 0 6.5 0c.84 0 1.524.277 2.121.519l.043.018C9.286.788 9.828 1 10.5 1c.7 0 1.638-.23 2.437-.477a19.587 19.587 0 0 0 1.349-.476l.019-.007.004-.002h.001M14 1.221c-.22.078-.48.167-.766.255-.81.252-1.872.523-2.734.523-.886 0-1.592-.286-2.203-.534l-.008-.003C7.662 1.21 7.139 1 6.5 1c-.669 0-1.606.229-2.415.478A21.294 21.294 0 0 0 3 1.845v6.433c.22-.078.48-.167.766-.255C4.576 7.77 5.638 7.5 6.5 7.5c.847 0 1.548.28 2.158.525l.028.01C9.32 8.29 9.86 8.5 10.5 8.5c.668 0 1.606-.229 2.415-.478A21.317 21.317 0 0 0 14 7.655V1.222z",
                title: "Dispute management system",
                description: `- Categorized dispute reasons with role-based access control.

                - Automated letter generation for credit bureaus.

                - Multi-round dispute tracking with progress monitoring.`,
                type: "User Experience"
            },
            {
                iconPath: "M14.778.085A.5.5 0 0 1 15 .5V8a.5.5 0 0 1-.314.464L14.5 8l.186.464-.003.001-.006.003-.023.009a12.435 12.435 0 0 1-.397.15c-.264.095-.631.223-1.047.35-.816.252-1.879.523-2.71.523-.847 0-1.548-.28-2.158-.525l-.028-.01C7.68 8.71 7.14 8.5 6.5 8.5c-.7 0-1.638.23-2.437.477A19.626 19.626 0 0 0 3 9.342V15.5a.5.5 0 0 1-1 0V.5a.5.5 0 0 1 1 0v.282c.226-.079.496-.17.79-.26C4.606.272 5.67 0 6.5 0c.84 0 1.524.277 2.121.519l.043.018C9.286.788 9.828 1 10.5 1c.7 0 1.638-.23 2.437-.477a19.587 19.587 0 0 0 1.349-.476l.019-.007.004-.002h.001M14 1.221c-.22.078-.48.167-.766.255-.81.252-1.872.523-2.734.523-.886 0-1.592-.286-2.203-.534l-.008-.003C7.662 1.21 7.139 1 6.5 1c-.669 0-1.606.229-2.415.478A21.294 21.294 0 0 0 3 1.845v6.433c.22-.078.48-.167.766-.255C4.576 7.77 5.638 7.5 6.5 7.5c.847 0 1.548.28 2.158.525l.028.01C9.32 8.29 9.86 8.5 10.5 8.5c.668 0 1.606-.229 2.415-.478A21.317 21.317 0 0 0 14 7.655V1.222z",
                title: "Document generation & management",
                description: `- Template-based letter generation with dynamic content filling.

                              - Client agreement templates with electronic signing workflow.

                              - File upload system for signed agreements, government IDs, utility bills.`,
                type: "User Experience"
            },
            {
                iconPath: "M14.778.085A.5.5 0 0 1 15 .5V8a.5.5 0 0 1-.314.464L14.5 8l.186.464-.003.001-.006.003-.023.009a12.435 12.435 0 0 1-.397.15c-.264.095-.631.223-1.047.35-.816.252-1.879.523-2.71.523-.847 0-1.548-.28-2.158-.525l-.028-.01C7.68 8.71 7.14 8.5 6.5 8.5c-.7 0-1.638.23-2.437.477A19.626 19.626 0 0 0 3 9.342V15.5a.5.5 0 0 1-1 0V.5a.5.5 0 0 1 1 0v.282c.226-.079.496-.17.79-.26C4.606.272 5.67 0 6.5 0c.84 0 1.524.277 2.121.519l.043.018C9.286.788 9.828 1 10.5 1c.7 0 1.638-.23 2.437-.477a19.587 19.587 0 0 0 1.349-.476l.019-.007.004-.002h.001M14 1.221c-.22.078-.48.167-.766.255-.81.252-1.872.523-2.734.523-.886 0-1.592-.286-2.203-.534l-.008-.003C7.662 1.21 7.139 1 6.5 1c-.669 0-1.606.229-2.415.478A21.294 21.294 0 0 0 3 1.845v6.433c.22-.078.48-.167.766-.255C4.576 7.77 5.638 7.5 6.5 7.5c.847 0 1.548.28 2.158.525l.028.01C9.32 8.29 9.86 8.5 10.5 8.5c.668 0 1.606-.229 2.415-.478A21.317 21.317 0 0 0 14 7.655V1.222z",
                title: "Affiliate & referral system",
                description: `- Affiliate management with approval workflows.

                            - Referral link generation and tracking.

                            - Client assignment and progress monitoring.`,
                type: "User Experience"
            },
            {
                iconPath: "M14.778.085A.5.5 0 0 1 15 .5V8a.5.5 0 0 1-.314.464L14.5 8l.186.464-.003.001-.006.003-.023.009a12.435 12.435 0 0 1-.397.15c-.264.095-.631.223-1.047.35-.816.252-1.879.523-2.71.523-.847 0-1.548-.28-2.158-.525l-.028-.01C7.68 8.71 7.14 8.5 6.5 8.5c-.7 0-1.638.23-2.437.477A19.626 19.626 0 0 0 3 9.342V15.5a.5.5 0 0 1-1 0V.5a.5.5 0 0 1 1 0v.282c.226-.079.496-.17.79-.26C4.606.272 5.67 0 6.5 0c.84 0 1.524.277 2.121.519l.043.018C9.286.788 9.828 1 10.5 1c.7 0 1.638-.23 2.437-.477a19.587 19.587 0 0 0 1.349-.476l.019-.007.004-.002h.001M14 1.221c-.22.078-.48.167-.766.255-.81.252-1.872.523-2.734.523-.886 0-1.592-.286-2.203-.534l-.008-.003C7.662 1.21 7.139 1 6.5 1c-.669 0-1.606.229-2.415.478A21.294 21.294 0 0 0 3 1.845v6.433c.22-.078.48-.167.766-.255C4.576 7.77 5.638 7.5 6.5 7.5c.847 0 1.548.28 2.158.525l.028.01C9.32 8.29 9.86 8.5 10.5 8.5c.668 0 1.606-.229 2.415-.478A21.317 21.317 0 0 0 14 7.655V1.222z",
                title: "Communication system",
                description: `- Canned email templates for standardized communication.

                            - Text/email communication tracking.

                            - Contact preference management (Text, Email, Phone, No Preference).`,
                type: "User Experience"
            },
            {
                iconPath: "M14.778.085A.5.5 0 0 1 15 .5V8a.5.5 0 0 1-.314.464L14.5 8l.186.464-.003.001-.006.003-.023.009a12.435 12.435 0 0 1-.397.15c-.264.095-.631.223-1.047.35-.816.252-1.879.523-2.71.523-.847 0-1.548-.28-2.158-.525l-.028-.01C7.68 8.71 7.14 8.5 6.5 8.5c-.7 0-1.638.23-2.437.477A19.626 19.626 0 0 0 3 9.342V15.5a.5.5 0 0 1-1 0V.5a.5.5 0 0 1 1 0v.282c.226-.079.496-.17.79-.26C4.606.272 5.67 0 6.5 0c.84 0 1.524.277 2.121.519l.043.018C9.286.788 9.828 1 10.5 1c.7 0 1.638-.23 2.437-.477a19.587 19.587 0 0 0 1.349-.476l.019-.007.004-.002h.001M14 1.221c-.22.078-.48.167-.766.255-.81.252-1.872.523-2.734.523-.886 0-1.592-.286-2.203-.534l-.008-.003C7.662 1.21 7.139 1 6.5 1c-.669 0-1.606.229-2.415.478A21.294 21.294 0 0 0 3 1.845v6.433c.22-.078.48-.167.766-.255C4.576 7.77 5.638 7.5 6.5 7.5c.847 0 1.548.28 2.158.525l.028.01C9.32 8.29 9.86 8.5 10.5 8.5c.668 0 1.606-.229 2.415-.478A21.317 21.317 0 0 0 14 7.655V1.222z",
                title: "Progress tracking & analytics",
                description: `- Client progress indicators (login status, document uploads, credit reports).

                              - Aggregated dashboard data for administrators.

                              - Dispute round completion tracking.`,
                type: "User Experience"
            }

        ],
        gallery_items: [
            {
                image: "https://cdn.bootstrapstudio.io/placeholders/1400x800.png",
                tags: [
                    { label: "API", color: "#0ACF83" },
                    { label: "2024", color: "#0d6efd" }
                ],
                title: "Lorem Ipsum"
            },
            {
                image: "https://cdn.bootstrapstudio.io/placeholders/1400x800.png",
                tags: [
                    { label: "WEB INTEGRATION", color: "#BB0087" },
                    { label: "2024", color: "#0d6efd" }
                ],
                title: "Lorem Ipsum"
            },
            {
                image: "https://cdn.bootstrapstudio.io/placeholders/1400x800.png",
                tags: [
                    { label: "AUTOMATION", color: "#0ACF83" },
                    { label: "2024", color: "#0d6efd" }
                ],
                title: "Lorem Ipsum"
            }
        ],

        architecture_design_items: [
            {
                id: "data-model",
                label: "Data Model",
                title: "Entity Relationship Diagram for Credit Repair",
                texts: [
                    "The system's data architecture is built around a comprehensive entity relationship model that structures all credit management operations. The core framework extends Django's AbstractUser to support five distinct roles (Admin, Employee, Affiliate, Client, User) with specialized profile models for clients and affiliates. Client records contain encrypted fields for sensitive data including SSN, credit monitoring credentials, and security answers.",
                    "The model establishes relationships between credit reports from three bureaus (TransUnion, Experian, Equifax), dispute reasons with role-based accessibility, and automatically generated dispute letters. Supporting entities manage invoices, client agreements, referral tracking, and multi-round dispute progression with completion status monitoring.",
                ],
                highlight: "",
                image: erDiagramImg
            },
            {
                id: "role-based-access-control",
                label: "Role-Based Access Control",
                title: "Role-Based Access Control Matrix",
                texts: [
                    "The platform implements a granular role-based access control system defining precise permissions across all data operations. Five user roles have carefully scoped privileges: Clients access only their own data records and associated documents; Affiliates manage exclusively their assigned clients with creation and modification rights; Employees have read-only access across multiple clients; Administrators maintain full system control. Object-level permissions enforce data isolation, while IP address and device fingerprint locking provides additional security for administrative roles.",
                     "The permission matrix governs all CRUD operations across client profiles, credit reports, dispute management, document generation, and system configuration."
                ],
                highlight: "",
                image: roleBasedAccessControlMatrixImg
            },
            {
                id: "dispute-management",
                label: "Dispute Management",
                title: "Dispute Management Workflow",
                texts: [
                    "The dispute workflow system automates credit dispute generation through a structured multi-stage process. The sequence begins with credit report ingestion from integrated monitoring services (IdentityIQ, IdentityClub, 3Scores), followed by item selection across four dispute categories: personal information, account information, public records, and inquiry information. Users apply categorized dispute reasons with role-based filtering, then the system generates bureau-specific dispute letters using dynamic template filling.", 
                    "The process tracks progression through multiple dispute rounds with completion criteria including letter generation, document submission, and file verification. Each dispute maintains status tracking and connects to client progress monitoring throughout the resolution lifecycle."
                ],
                highlight: "",
                image: disputeManagementWorkflowImg
            }
        ],

        project_links: [
            { name: 'GitHub', url: '#', icon: 'bi bi-github' },
            { name: 'Demo video', url: '#', icon: 'bi bi-camera-reels-fill' },
            { name: 'Live demo', url: '#', icon: 'bi bi-laptop-fill' },
            { name: 'Marketplace', url: '#', icon: 'bi bi-bag-dash-fill' },
        ]
    },
    {
        id: "csr-scheduler",
        image: "https://cdn.bootstrapstudio.io/placeholders/1400x800.png",
        tags: [
            { label: "WEB INTEGRATION", color: "#BB0087" },
            { label: "2024", color: "#0d6efd" }
        ],
        title: "CSR Scheduler: Job Runner Interface Replacement Feature",
        subtitle: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
        technologies: ["React", "Node.js", "GraphQL", "Docker"],
        description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?",
        general_details: [
            { label: "Client", value: "Acme Corp" },
            { label: "Date", value: "January 2024" },
            { label: "Category", value: "Web Development" },
            { label: "Website", value: "https://example.com" }
        ],
        features: [
            {
                iconPath: "M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2M8 1.918l-.797.161A4.002 4.002 0 0 0 4 6c0 .628-.134 2.197-.459 3.742-.16.767-.376 1.566-.663 2.258h10.244c-.287-.692-.502-1.49-.663-2.258C12.134 8.197 12 6.628 12 6a4.002 4.002 0 0 0-3.203-3.92L8 1.917zM14.22 12c.223.447.481.801.78 1H1c.299-.199.557-.553.78-1C2.68 10.2 3 6.88 3 6c0-2.42 1.72-4.44 4.005-4.901a1 1 0 1 1 1.99 0A5.002 5.002 0 0 1 13 6c0 .88.32 4.2 1.22 6",
                title: "Real-time Anomaly Detection",
                description: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem.",
                type: "API"
            },
            {
                iconPath: "M0 10.5A1.5 1.5 0 0 1 1.5 9h1A1.5 1.5 0 0 1 4 10.5v1A1.5 1.5 0 0 1 2.5 13h-1A1.5 1.5 0 0 1 0 11.5zm1.5-.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5zm10.5.5A1.5 1.5 0 0 1 13.5 9h1a1.5 1.5 0 0 1 1.5 1.5v1a1.5 1.5 0 0 1-1.5 1.5h-1a1.5 1.5 0 0 1-1.5-1.5zm1.5-.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5zM6 4.5A1.5 1.5 0 0 1 7.5 3h1A1.5 1.5 0 0 1 10 4.5v1A1.5 1.5 0 0 1 8.5 7h-1A1.5 1.5 0 0 1 6 5.5zM7.5 4a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5z",
                title: "Lorem ipsum dolor",
                description: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem.",
                type: "Functional"
            },
            {
                iconPath: "M14.778.085A.5.5 0 0 1 15 .5V8a.5.5 0 0 1-.314.464L14.5 8l.186.464-.003.001-.006.003-.023.009a12.435 12.435 0 0 1-.397.15c-.264.095-.631.223-1.047.35-.816.252-1.879.523-2.71.523-.847 0-1.548-.28-2.158-.525l-.028-.01C7.68 8.71 7.14 8.5 6.5 8.5c-.7 0-1.638.23-2.437.477A19.626 19.626 0 0 0 3 9.342V15.5a.5.5 0 0 1-1 0V.5a.5.5 0 0 1 1 0v.282c.226-.079.496-.17.79-.26C4.606.272 5.67 0 6.5 0c.84 0 1.524.277 2.121.519l.043.018C9.286.788 9.828 1 10.5 1c.7 0 1.638-.23 2.437-.477a19.587 19.587 0 0 0 1.349-.476l.019-.007.004-.002h.001M14 1.221c-.22.078-.48.167-.766.255-.81.252-1.872.523-2.734.523-.886 0-1.592-.286-2.203-.534l-.008-.003C7.662 1.21 7.139 1 6.5 1c-.669 0-1.606.229-2.415.478A21.294 21.294 0 0 0 3 1.845v6.433c.22-.078.48-.167.766-.255C4.576 7.77 5.638 7.5 6.5 7.5c.847 0 1.548.28 2.158.525l.028.01C9.32 8.29 9.86 8.5 10.5 8.5c.668 0 1.606-.229 2.415-.478A21.317 21.317 0 0 0 14 7.655V1.222z",
                title: "Nemo enim ipsam",
                description: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem.",
                type: "Performance"
            }
        ],
        gallery_items: [
            {
                image: "https://cdn.bootstrapstudio.io/placeholders/1400x800.png",
                tags: [
                    { label: "API", color: "#0ACF83" },
                    { label: "2024", color: "#0d6efd" }
                ],
                title: "Lorem Ipsum"
            },
            {
                image: "https://cdn.bootstrapstudio.io/placeholders/1400x800.png",
                tags: [
                    { label: "WEB INTEGRATION", color: "#BB0087" },
                    { label: "2024", color: "#0d6efd" }
                ],
                title: "Lorem Ipsum"
            },
            {
                image: "https://cdn.bootstrapstudio.io/placeholders/1400x800.png",
                tags: [
                    { label: "AUTOMATION", color: "#0ACF83" },
                    { label: "2024", color: "#0d6efd" }
                ],
                title: "Lorem Ipsum"
            }
        ],
        project_links: [
            { name: 'GitHub', url: '#', icon: 'bi bi-github' },
            { name: 'Demo video', url: '#', icon: 'bi bi-camera-reels-fill' },
            { name: 'Live demo', url: '#', icon: 'bi bi-laptop-fill' },
            { name: 'Marketplace', url: '#', icon: 'bi bi-bag-dash-fill' },
        ]
    },
    {
        id: "research-imbalances-on-wikipedia",
        image: "https://cdn.bootstrapstudio.io/placeholders/1400x800.png",
        tags: [
            { label: "WEB INTEGRATION", color: "#BB0087" },
            { label: "2024", color: "#0d6efd" }
        ],
        // NOTE: How can we have rich text with strong tags and line breaks in the description, or HTML syntax 
        title: "Research Imbalances in Translation Between Languages on Wikipedia",
        subtitle: "A set of tools used to aid the investigation of research imbalances in Wikipedia articles.",
        technologies: ["Node.js", "Python", "Node.js", "GitHub API", "Pandas", "Octokit.js", "PyYAML", "csv-diff"],
        description: `Articles on Wikipedia can be translated from their original language into numerous others using the assisted translation tool, Content Translation. 
        Initial investigations have found that the flow of translations between Wikipedia's language editions is extremely imbalanced.\n
        The tools in this section were developed to assist the initial investigation. Their purpose was to validate the problem, test hypotheses, and find explanations for the anomalies to guide further research.`,
        general_details: [
            { label: "Client", value: "Outreachy, Wikimedia Foundation" },
            { label: "Date", value: "Aug 2023" },
            { label: "Category", value: "Tools & scripts for automation" },
            { label: "Website", value: { text: "Wikimedia Project", url: "https://meta.wikimedia.org/wiki/Research:Content_Translation_language_imbalances" } }
        ],
        features: [],
        architecture_design_items: [
            {
                id: "csv-parser",
                label: "CSV Parser",
                title: "CSV Parser Workflow",
                texts: [
                    "A specialized parser that transforms complex, multi-file Wikimedia configuration data into a clean, analyzable dataset.",
                    "- Multi-File Aggregation: Intelligently parses and combines data from numerous YAML files within a directory structure into a single, flat in-memory model.",
                    "- Language Pair Extraction: Extracts and normalizes all supported source-and-target language pairs from the configuration into a standardized format.",
                    "- CSV Export: Outputs a clean, ready-to-analyze CSV file, making complex config data accessible for spreadsheet analysis or dashboard ingestion.",
                    "- Schema Consistency: Ensures a consistent data output schema for reliable analysis.",
                    "Tech: Python • PyYAML • csvdiff"
                ],
                highlight: "",
                image: csvParserWorkflowImg
            },
            {
                id: "csv-time-machine",
                label: "CSV Time Machine",
                title: "CSV Time Machine Workflow",
                texts: [
                    "A version control system for data, enabling full historical tracking and restoration for any CSV file within a git repository.",
                    "- Historical Tracking & Playback: Parses a repository's entire git history to reconstruct the state of a CSV file at any point in time.",
                    "- Point-in-Time Restoration: Restore a CSV to its exact state from any previous commit, eliminating manual data recovery.",
                    "- Temporal Comparison: Visually compare data between any two commits to quickly identify what was added, removed, or changed.",
                    "- Non-Destructive Updates: Appends new data without rewriting entire files, maintaining a clean and efficient change history.",
                    "Tech: Python • Git, Python • GitHub API • Octokit"
                ],  
                highlight: "",
                image: timeMachineWorkflowImg
            }
        ],

        gallery_items: [
            {
                image: cityTemperatureOutput,
                tags: [
                ],
                title: "CSV Parser Output"
            },
            {
                image: resultsCommitsAndFilesOutput,
                tags: [
                ],
                title: " CSV Time Machine Output"
            }
        ],
        project_links: [
            { name: 'GitHub - CSV Time Machine', url: 'https://github.com/ahn-nath/configuration-evolution-over-time.time-machine/tree/main', icon: 'bi bi-github' },
            { name: 'GitHub - CSV Parser', url: 'https://github.com/ahn-nath/wikimedia-cxserver-config-parser/blob/main/requirements.txt', icon: 'bi bi-github' },


        ]
    }
];

export default projects;
