import creditUsImg from "../media/credit-us.jpg";
import csvParserWorkflowImg from "../media/wikipedia_csv_parser.png"
import timeMachineWorkflowImg from "../media/wikipedia_csv_time_machine.png"
import roleBasedAccessControlMatrixImg from "../media/Role-Based Access Control (RBAC) Matrix .png"
import erDiagramImg from "../media/Database ER diagram (crow's foot).png"
import disputeManagementWorkflowImg from "../media/Dispute Management Workflow Diagram.png"

import cityTemperatureOutput from "../media/city_temperature_data_test_csv.png"
import resultsCommitsAndFilesOutput from "../media/results_commit_and_files_dates.png"
import csrSchedulerImg from "../media/calendar.jpg"

import brainsetAuthImg from "../media/auth_screen.png"
import brainsetCrewOnboardingImg from "../media/dealmemo_tracking_area.png"
import brainsetApprovalRoundImg from "../media/callsheet_editor.png"
import brainsetApprovalTemplateImg from "../media/call_sheet_editor_template.png"
import brainsetLocationPhotosImg from "../media/locations_screen01.png"
import brainsetLocationDocumentsImg from "../media/locations_screen02.png"
import brainsetCalendarImg from "../media/calendar_screen.png"
import brainsetFileManagerImg from "../media/file_manager.png"
import brainsetAgencyClientImg from "../media/brand_agency.png"


const projects = [
    {
        id: "brainset-production-os",
        image: brainsetAuthImg,
        tags: [
            { label: "WEB / SAAS", color: "#0ACF83" },
            { label: "2026", color: "#0d6efd" }
        ],
        title: "Brainset — Production OS",
        subtitle: "A multi-tenant SaaS that runs audiovisual productions end to end, hardened and connected so production teams can rely on it for daily work.",
        technologies: [
            "TypeScript",
            "Next.js 14 (App Router)",
            "React",
            "Node.js 20",
            "Express 5",
            "Prisma 6",
            "PostgreSQL 17",
            "Zod",
            "TanStack Query",
            "Tailwind CSS",
            "AWS S3",
            "AWS SES",
            "Puppeteer (PDF)"
        ],
        description: `Brainset is a multi-tenant platform for audiovisual production companies — commercials, digital, film and music videos — covering calendar, tasks, schedules, crew, casting, locations, transport, vendors, call sheets, travel, creative and budget in one system. When the engagement started the product was feature-rich but not yet dependable: modules existed in isolation, file uploads accepted anything the browser sent, dates drifted by a day depending on the user's timezone, and PDFs arrived blank in the client's inbox. None of that is visible on a feature list, and all of it stops a production team from trusting the tool on a shoot day.

The work targeted the paths that carry real production documents. File uploads got a single shared safety policy — extension, MIME and first-bytes signature checks enforced at every presign, commit, copy and promote path instead of eight per-module allowlists. Upload commits were made race-safe and quota-correct with unique S3 key constraints, Postgres advisory locks, existence verification against storage before writing a row, and a cleanup path for presigned uploads that were never committed. Calendar-day fields moved to Postgres DATE columns behind an explicit "YYYY-MM-DD" wire contract, which removed the off-by-one shift from location scout dates, exports and generated documents.

On top of that base came the features producers asked for: a recipient picker so a call sheet reaches exactly the chosen crew members, staged approval attachments with size ceilings that respect what an email provider will actually deliver, reusable rich-text approval notes rendered through a sanitizer, agency branding in the call sheet header, and crew onboarding that distinguishes a deal memo that was sent from one that was opened and signed — plus a single action that streams every signed deal memo of a project into a ZIP. Delivered as 12 reviewed pull requests over roughly a month, about 3,700 added lines across 88 files, each one scoped and accepted against agreed success criteria before merging to production.`,
        general_details: [
            { label: "Client", value: "Brain Productions (Brainset)" },
            { label: "Date", value: "Aug 2026 – Sep 2026" },
            { label: "Category", value: "Full-Stack Development and Platform Hardening" },
            { label: "Website", value: { text: "brainset.io", url: "https://brainset.io" } }
        ],
        features: [
            {
                iconPath: "bi bi-shield-lock",
                title: "Executable-upload defense on every file surface",
                description: `- One shared policy module replaced per-module allowlists, so a new upload surface inherits the rule instead of quietly reopening the hole.

- Rejects files by extension and MIME, and inspects the first bytes for PE, ELF, Mach-O, Java class and shebang signatures, which is what catches a binary renamed to .pdf.

- Enforced at presign, commit, copy and promote — validating only the presign would leave the back door of committing under a different filename.

- Thumbnails are validated too, closing a path where a renamed binary passed the existence check and took the original file down with it.

- The same rules run client-side for immediate feedback, without becoming the only line of defense.`,
                type: "Security"
            },
            {
                iconPath: "bi bi-database-check",
                title: "Upload integrity and storage accounting",
                description: `- Unique constraints on stored object keys, so the same upload can never produce two rows.

- Commit and cleanup are serialized with Postgres advisory locks inside the transaction that updates the shared storage counter, which keeps concurrent uploads from double-counting an organization's usage.

- The backend verifies the object actually exists in storage before creating its row, instead of trusting the client's word that the upload finished.

- A dedicated cleanup path discards presigned uploads that were never committed, so a form abandoned before its first save stops leaving orphaned files behind.

- Deletions that fail now raise instead of passing silently, which is what made earlier leftovers invisible.`,
                type: "Reliability"
            },
            {
                iconPath: "bi bi-send-check",
                title: "Call sheet distribution with recipient control",
                description: `- Producers choose exactly who receives each call sheet: select or clear all, expand crew by department, and check people individually.

- Only checked recipients with a valid email are sent to, which ends the all-or-nothing send that leaked drafts to the whole crew.

- The automatic resend-to-bounces retry keeps its own behavior and deliberately bypasses the picker, so a failed delivery still reaches its original recipient.`,
                type: "Workflow"
            },
            {
                iconPath: "bi bi-paperclip",
                title: "Approval packets and reusable approval notes",
                description: `- Supporting files can be staged on an approval round, then travel with the approval email and are consumed only once that email is actually sent.

- Per-file, per-round and per-message size ceilings are checked before the round opens, so an approval never fails at the last step for exceeding what the mail provider accepts.

- The approval note is written in a rich text editor and saved as a project-scoped template with placeholder resolution, so the same wording goes out every time; it renders through a sanitizer, keeping unsafe markup out of both the email and the public approval page.

- Agency became a first-class project field, so its logo prints in the call sheet header alongside the production company's.`,
                type: "Documents"
            },
            {
                iconPath: "bi bi-file-earmark-zip",
                title: "Crew onboarding visibility and bulk deal memo download",
                description: `- A view timestamp on signed documents separates a deal memo that was sent from one that was actually opened, which is the difference a coordinator chases by phone.

- The onboarding table reads the latest deal memo per crew member and shows status, sent, received and signed times, signer details and a per-member download.

- One action renders every signed deal memo of a project and streams them into a ZIP, with a file cap, sanitized names and abort handling so a cancelled download does not leave the server working.`,
                type: "Workflow"
            },
            {
                iconPath: "bi bi-calendar-check",
                title: "Correctness fixes that were blocking daily use",
                description: `- Location scout dates became true calendar days — Postgres DATE columns behind a "YYYY-MM-DD" wire contract with shared parse and format helpers — which removed the shift of one day that users saw in the UI, CSV exports and generated releases.

- Calendar and date picker moved to a Sunday-first week, matching how production weeks are read, with visible labels going through the dictionary.

- PDF attachments stopped arriving blank: the mail transport defaulted to 7-bit encoding, which corrupts binary content, and now declares base64 explicitly.

- Location document and photo uploaders gained drag-and-drop, keyboard access, clear format hints and count and size limits.`,
                type: "Bug Fixing"
            }
        ],
        architecture_design_items: [
            {
                id: "file-safety",
                label: "File safety",
                title: "One upload policy instead of eight allowlists",
                texts: [
                    "Every module that accepts files — creative documents, crew, locations, moodboards, storyboards, travel, vendors, generic uploads — used to carry its own idea of what was acceptable. The failure mode of that shape is predictable: the ninth module is written without the rule. The policy was extracted into a single module that exposes the blocked extension and MIME sets, a filename-extension reader that trims the trailing dots and spaces an operating system ignores, a reusable Zod field for filename validation, and a signature check over the first bytes.",
                    "The scope is stated honestly in the code: this is a policy check over the file's label plus a look at its leading bytes, not an antivirus. What it does buy is that the two ways into storage — the declared name and the declared MIME type — end at the same guarded object, and that a renamed binary is caught by content rather than by trust."
                ],
                highlight: "",
                image: brainsetLocationPhotosImg
            },
            {
                id: "upload-integrity",
                label: "Upload integrity",
                title: "Commits that survive races and abandoned forms",
                texts: [
                    "Uploads follow the presigned-URL pattern: the browser sends bytes straight to object storage and the backend only signs the request and records the result. That split leaves two gaps. Two commits arriving together can both add the same bytes to an organization's storage counter, and a user who uploads then closes the form without saving leaves objects nobody references.",
                    "Both gaps were closed on the write path. Object keys are unique per collection, the commit verifies the object exists in storage before inserting, and the insert plus the counter update happen in one transaction guarded by a Postgres advisory lock, so quota and file-count checks see a consistent picture. A cleanup endpoint removes presigned uploads that were never committed, the UI forces that cleanup before an unsaved form closes, and deletions that fail now raise a specific error instead of returning quietly."
                ],
                highlight: "",
                image: brainsetFileManagerImg
            },
            {
                id: "calendar-dates",
                label: "Calendar dates",
                title: "Days are days, not instants",
                texts: [
                    "Scout dates, shoot days and similar fields mean a day on a wall calendar, but they were stored as timestamps. Anyone whose timezone sat behind UTC saw them a day earlier, and the drift reached the UI, the CSV export and the generated release documents, each fixing it differently or not at all.",
                    "The contract was made explicit end to end: the API carries \"YYYY-MM-DD\", the database stores DATE, and shared helpers on both backend and frontend parse and serialize using UTC calendar components. Range queries close on the end of the day rather than its midnight, so a row that ever arrives with a time component does not fall out of the last day of the window — or, in the single-day view, out of the window entirely."
                ],
                highlight: "",
                image: brainsetCalendarImg
            },
            {
                id: "documents-delivery",
                label: "Documents & delivery",
                title: "PDF, email and ZIP as one pipeline",
                texts: [
                    "Call sheets, deal memos and releases are HTML templates rendered to PDF on the server and delivered by email, so a rendering detail becomes a client-facing failure. Two fixes came from that path: attachments now declare base64 transfer encoding, because the transport's 7-bit default corrupts binary content and produced blank PDFs on the recipient's side, and template wording was corrected where it described the wrong thing to the person signing.",
                    "The same pipeline was extended rather than duplicated. Rich-text approval notes are stored as project-scoped templates, resolved for placeholders and passed through a sanitizer before reaching an email or a public approval page. Bulk export reuses the renderer and streams results into a ZIP, with a file cap, sanitized entry names and abort handling so a cancelled request stops the work instead of orphaning it."
                ],
                highlight: "",
                image: brainsetApprovalTemplateImg
            },
            {
                id: "tenancy",
                label: "Tenancy & validation",
                title: "Working inside a multi-tenant contract",
                texts: [
                    "Every entity in the platform is isolated by organization, and production data is additionally scoped to a project, with membership checked on each request. New endpoints had to inherit that shape rather than restate it — the recipient picker, the approval attachments, the cleanup route and the bulk download all resolve access through the existing tenant and project guards before touching data.",
                    "The rest of the contract is just as prescriptive and was followed throughout: request inputs validated with Zod schemas, the Prisma schema as the single source of truth with a migration for every model change, pagination on list endpoints, no signed storage URL ever persisted, and every user-visible string added to the English and Spanish dictionaries instead of hardcoded."
                ],
                highlight: "",
                image: brainsetAgencyClientImg
            }
        ],
        gallery_items: [
            {
                id: 1,
                image: brainsetCrewOnboardingImg,
                tags: [
                    { label: "LIST VIEW", color: "#BB0087" },
                    { label: "2026", color: "#0d6efd" }
                ],
                title: "Crew onboarding with deal memo status"
            },
            {
                id: 2,
                image: brainsetApprovalRoundImg,
                tags: [
                    { label: "MODAL", color: "#BB0087" },
                    { label: "2026", color: "#0d6efd" }
                ],
                title: "Approval round with attachments and note selector"
            },
            {
                id: 3,
                image: brainsetApprovalTemplateImg,
                tags: [
                    { label: "TEMPLATE", color: "#BB0087" },
                    { label: "2026", color: "#0d6efd" }
                ],
                title: "Reusable approval note with resolved placeholders"
            },
            {
                id: 4,
                image: brainsetLocationPhotosImg,
                tags: [
                    { label: "UPLOAD", color: "#BB0087" },
                    { label: "2026", color: "#0d6efd" }
                ],
                title: "Photo uploader with enforced formats and limits"
            },
            {
                id: 5,
                image: brainsetLocationDocumentsImg,
                tags: [
                    { label: "UPLOAD", color: "#BB0087" },
                    { label: "2026", color: "#0d6efd" }
                ],
                title: "Insurance documents restricted to PDF"
            },
            {
                id: 6,
                image: brainsetCalendarImg,
                tags: [
                    { label: "CALENDAR", color: "#BB0087" },
                    { label: "2026", color: "#0d6efd" }
                ],
                title: "Sunday-first production calendar"
            },
            {
                id: 7,
                image: brainsetFileManagerImg,
                tags: [
                    { label: "STORAGE", color: "#BB0087" },
                    { label: "2026", color: "#0d6efd" }
                ],
                title: "File manager with project and organization usage"
            },
            {
                id: 8,
                image: brainsetAgencyClientImg,
                tags: [
                    { label: "BRANDING", color: "#BB0087" },
                    { label: "2026", color: "#0d6efd" }
                ],
                title: "Agency as a first-class client with its own logo"
            }
        ],
        project_links: []
    },
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
                description: `- Five user roles: Admin, Employee, Affiliate, Client, and Basic User.

                              - Advanced security: IP address and device fingerprint locking for admin/affiliate accounts.

                              - JWT-based authentication.`,
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

                              - File upload system for documents.`,
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
        /*
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
        */

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
            { label: "WEB", color: "#BB0087" },
            { label: "2025", color: "#0d6efd" }
        ],
        title: "CSR Scheduler: Job Runner Interface Replacement",
        subtitle: "Desktop web MVP that replaces a FileMaker Pro scheduling tool so installation managers can assign crews across multiple branches with parity-plus speed and clarity.",
        technologies: ["React", "Node.js", "TypeScript", "REST APIs"],
        description: `CSR Scheduler is a browser-based MVP built to replace a legacy FileMaker Pro “Job Runner” application used for nightly installation scheduling. The client needed to leave the old system to cut subscription costs and protect IP, while giving scheduling managers a workflow that was at least as fast and usable as the desktop tool they already relied on.

The product focuses on “parity plus”: recreate the existing scheduling experience in a modern web app, keep what works, and leave behind the worst parts of the legacy flow. Job data is refreshed from upstream systems on a short interval so schedulers always work from near real-time work orders.

The core loop mirrors the field operation: each evening a scheduling manager filters jobs by branch and install date, reviews materials and payouts, assigns installers from the list/detail views, and saves draft assignments for the next day. Warehouse staff can reassign crews in the morning when availability changes. Later in the day, verified completions can be finalized and sent onward to finance for crew payment and client invoicing.`,
        general_details: [
            { label: "Client", value: "Acorn Analytics / CSR Engineering" },
            { label: "Date", value: "Jan 2025 (MVP)" },
            { label: "Category", value: "Web application — operations scheduling" },
            { label: "Website", value: { text: "Private client application", url: "#" } }
        ],
        features: [
            {
                iconPath: "bi bi-table",
                title: "Job list with branch & date filters",
                description: `- Sortable table of jobs for the selected install date and branch (Phoenix, Vegas, Denver).

- Columns include job description with material types and square footage, job number, requested date, property name, site address, city/state/zip, lot/suite, assigned installer, entry person, and payout.

- List view is read-only except for the installer assignment control, matching the scheduler’s rapid assign-and-move-on workflow.`,
                type: "Operations UI"
            },
            {
                iconPath: "bi bi-person-workspace",
                title: "Installer assignment & draft schedules",
                description: `- Assign an available installer/crew to each job from the list or detail drawer.

- Evening assignments are saved as a shared draft so warehouse managers can review and adjust the next morning when crews are absent or reject work.

- Designed for the real operational cycle: night scheduling → morning reassignment → end-of-day verification.`,
                type: "Workflow"
            },
            {
                iconPath: "bi bi-layout-sidebar-inset",
                title: "Job detail drawer (overview + itemized)",
                description: `- Clicking a job opens a side drawer with overview fields: job number, worker, install date, property, description, address, and labor payout.

- Itemized section separates materials and labor so schedulers can match crews to material types and estimate crew size from quantities.

- Quality-control rework jobs are identifiable from dashed job numbers (e.g. 12345-1) so the original crew can be sent back when appropriate.`,
                type: "User Experience"
            },
            {
                iconPath: "bi bi-file-earmark-pdf",
                title: "Floor plan PDF viewer",
                description: `- From the detail drawer, open the job’s floor-plan PDF to judge complexity and whether one person or a larger crew is required.

- Supports in-drawer scrolling across pages and opening the PDF in a new tab for closer inspection.

- Replaces a flawed legacy “job mail” workaround screen that was intentionally not carried into the new app.`,
                type: "Documents"
            },
            {
                iconPath: "bi bi-shield-lock",
                title: "Authentication for a small ops team",
                description: `- Login / logout / forgot-password for a small set of authorized users (on the order of ~10 accounts for MVP).

- Individual credentials prepare the system for future audit logging of schedule changes.

- No self-service signup in MVP; accounts are provisioned for scheduling, warehouse, and verification roles.`,
                type: "Security"
            },
            {
                iconPath: "bi bi-check2-circle",
                title: "Assignments verified → finance handoff",
                description: `- End-of-day verification flow for confirming which crews completed which jobs.

- An “All Verified” style finalization freezes the day’s completed assignments and notifies finance for crew payment and client invoicing.

- Incomplete jobs are left outside that freeze so they can roll into the next scheduling cycle.`,
                type: "Business process"
            },
            {
                iconPath: "bi bi-lightning-charge",
                title: "Desktop-speed list ↔ detail switching",
                description: `- Built for a desktop browser workflow where the scheduler jumps between list and detail constantly.

- Day’s job dataset is small enough to keep highly responsive in-memory / local caching so context switches feel as fast as the native FileMaker tool.

- Branch/date changes and floor-plan loads can be slower; the hot path is list ↔ detail.`,
                type: "Performance"
            }
        ],
        architecture_design_items: [
            {
                id: "scheduling-lifecycle",
                label: "Scheduling lifecycle",
                title: "Night draft → morning adjust → afternoon verify",
                texts: [
                    "The MVP is shaped around a repeating operational day. In the evening, the scheduling manager filters by branch and install date, reviews materials and payouts, and assigns installers until every job for the next day is covered. Those assignments are shared but treated as a draft because warehouse reality often changes overnight.",
                    "In the morning, warehouse staff reopen the same schedule, reassign crews that are absent or refuse work, and release materials. Later in the afternoon, a verifier confirms completion with each crew and finalizes the day so finance can pay installers and invoice customers. Incomplete work feeds the next evening’s scheduling pass."
                ],
                highlight: "",
                image: csrSchedulerImg
            },
            {
                id: "parity-plus-migration",
                label: "Parity-plus migration",
                title: "Leaving FileMaker without losing the workflow",
                texts: [
                    "The replacement was scoped as “parity plus”: port the scheduling manager’s essential FileMaker experience to a web app, keep behavior familiar where it already worked, and drop known-bad legacy screens such as the old job-mail workaround.",
                    "Out of scope for MVP included mobile layouts, Google Maps replacement, broad edit rights beyond installer assignment and verification, and most ERP ingestion/export concerns. Upstream job data is assumed to arrive already synchronized on a short refresh interval so the UI can focus on assignment speed and clarity."
                ],
                highlight: "",
                image: csrSchedulerImg
            },
            {
                id: "list-detail-model",
                label: "List + detail model",
                title: "Fast table, rich drawer, PDF when needed",
                texts: [
                    "The information architecture is intentionally small: a high-density Job List for scanning and sorting, plus a detail drawer that opens on row click with overview, itemized materials/labor, and a Floor Plan tab for PDF inspection.",
                    "Editable surface area stays minimal on purpose. Almost everything in list/detail is read-only so schedulers move quickly; the primary write action is choosing the installer, with a separate end-of-day verification action that finalizes completed work for finance."
                ],
                highlight: "",
                image: csrSchedulerImg
            }
        ],
        gallery_items: [
            {
                id: 1,
                image: "https://cdn.bootstrapstudio.io/placeholders/1400x800.png",
                tags: [
                    { label: "LIST VIEW", color: "#BB0087" },
                    { label: "2025", color: "#0d6efd" }
                ],
                title: "Job List View"
            },
            {
                id: 2,
                image: "https://cdn.bootstrapstudio.io/placeholders/1400x800.png",
                tags: [
                    { label: "DETAIL", color: "#0ACF83" },
                    { label: "2025", color: "#0d6efd" }
                ],
                title: "Job Detail — Itemized materials & labor"
            },
            {
                id: 3,
                image: "https://cdn.bootstrapstudio.io/placeholders/1400x800.png",
                tags: [
                    { label: "PDF", color: "#0d6efd" },
                    { label: "2025", color: "#0ACF83" }
                ],
                title: "Floor Plan PDF in detail drawer"
            }
        ],
        project_links: [
            { name: 'GitHub', url: '#', icon: 'bi bi-github' },
            { name: 'Demo video', url: '#', icon: 'bi bi-camera-reels-fill' },
            { name: 'Live demo', url: '#', icon: 'bi bi-laptop-fill' },
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
                id: 1,
                image: cityTemperatureOutput,
                tags: [
                ],
                title: "CSV Parser Output"
            },
            {   
                id: 2,
                image: resultsCommitsAndFilesOutput,
                tags: [
                ],
                title: "CSV Time Machine Output"
            }
        ],
        project_links: [
            { name: 'GitHub - CSV Time Machine', url: 'https://github.com/ahn-nath/configuration-evolution-over-time.time-machine/tree/main', icon: 'bi bi-github' },
            { name: 'GitHub - CSV Parser', url: 'https://github.com/ahn-nath/wikimedia-cxserver-config-parser/blob/main/requirements.txt', icon: 'bi bi-github' },


        ]
    }
];

export default projects;
