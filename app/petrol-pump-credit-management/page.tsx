import type { Metadata } from "next";
import FuelNerveTopicPage, { type TopicPageContent } from "../components/FuelNerveTopicPage";

const canonical = "https://mindvector.tech/petrol-pump-credit-management";

export const metadata: Metadata = {
  title: "Petrol Pump Credit Customer Management Software | FuelNerve",
  description: "Manage petrol pump customer credit, fleet and vehicle accounts, bills, receipts, outstanding balances, ageing and follow-up records.",
  alternates: { canonical },
  openGraph: { title: "Petrol Pump Credit Customer Management Software", description: "Connect credit sales, vehicles, fleet accounts, receipts and outstanding balances.", url: canonical, siteName: "MindVector", locale: "en_IN", type: "website" },
  robots: { index: true, follow: true },
};

const content: TopicPageContent = {
  canonical,
  eyebrow: "PETROL PUMP CREDIT MANAGEMENT",
  title: "Keep every credit sale",
  accent: "connected to the customer who owes it.",
  introduction: "Petrol pump credit management should connect each sale to the right customer, fleet or vehicle account, preserve the supporting shift record, and show bills, receipts, ageing and outstanding balances without maintaining a separate manual ledger.",
  definition: "Petrol pump credit management software records fuel and non-fuel sales that are not collected immediately. It maintains customer, vehicle and fleet accounts, generates billing records, applies receipts and shows outstanding or ageing information for collection follow-up.",
  problemTitle: "Credit becomes risky when the sale and the account separate.",
  problemCopy: "A notebook may show a balance but not the shift, vehicle, product or bill behind it. Connected credit records help owners verify how a balance arose, what has been billed, what was received and which items still require follow-up.",
  outcomes: [
    "Attach credit sales to the correct account.",
    "Track vehicles and fleets where required.",
    "Generate clear customer billing records.",
    "Apply receipts without losing transaction history.",
    "Prioritise overdue balances with supporting evidence.",
  ],
  sections: [
    { number: "01", title: "Customer, fleet and vehicle records", copy: "Maintain the account identity, vehicles or fleet structure and the information needed to allocate each approved credit transaction correctly.", points: ["Customer account", "Vehicle or fleet reference", "Access and credit context"] },
    { number: "02", title: "Credit sale capture", copy: "Record the sale against its shift, product, quantity or value and customer reference so it remains part of both the operating day and the account ledger.", points: ["Shift-linked sale", "Product and amount", "Customer allocation"] },
    { number: "03", title: "Billing and receipts", copy: "Bring eligible transactions into billing, preserve what was included and apply incoming receipts to the customer account without erasing the original sales history.", points: ["Billing period", "Transaction detail", "Receipt allocation"] },
    { number: "04", title: "Outstanding and follow-up", copy: "Review balances and ageing, identify accounts that need attention and keep any reminder or follow-up connected to the actual outstanding records.", points: ["Outstanding balance", "Ageing visibility", "Collection follow-up"] },
  ],
  workflowTitle: "Follow credit from nozzle sale to collection.",
  workflowIntro: "Every stage should refer to the same customer transaction so the owner does not have to reconcile a shift register, invoice file and receipt notebook later.",
  workflow: [
    { title: "Identify the account", copy: "Select the approved customer, fleet or vehicle reference during the shift transaction." },
    { title: "Record the credit sale", copy: "Connect the product, value and supporting shift information to the account." },
    { title: "Prepare the bill", copy: "Review eligible transactions and create a clear billing record for the agreed period." },
    { title: "Apply receipt and follow up", copy: "Record customer receipts, review the remaining balance and prioritise unresolved dues." },
  ],
  buyerTitle: "Ask for transaction-level proof, not only a balance.",
  buyerIntro: "A credit system is easier to trust when an owner can open the items behind a customer's outstanding amount.",
  buyerChecklist: [
    "Can every credit sale be traced to its shift and customer?",
    "Can vehicle or fleet references be preserved where needed?",
    "Does billing clearly show the transactions included?",
    "Can receipts be applied without changing original sales?",
    "Does the system show ageing and follow-up context?",
  ],
  faqs: [
    ["How should petrol pump customer credit be recorded?", "The credit sale should be attached to an approved customer or fleet account while preserving the date, product, amount, shift and any vehicle reference required by the business."],
    ["Can FuelNerve manage fleet and vehicle accounts?", "Yes. FuelNerve supports customer, vehicle and fleet account records so credit activity can be reviewed at the appropriate level."],
    ["What is credit ageing?", "Credit ageing groups outstanding amounts by how long they have remained unpaid. It helps an owner identify which balances are current and which require collection follow-up."],
    ["Are WhatsApp collection messages unlimited?", "WhatsApp delivery involves an external Meta and provider cost. Any included alerts are subject to the stated plan, availability and fair-use limits; delivery should not be described as unlimited lifetime messaging."],
  ],
  related: [
    { href: "/petrol-pump-accounting-software", label: "Accounting", description: "Connect customer balances with sales, receipts and reporting." },
    { href: "/petrol-pump-shift-reconciliation", label: "Shift reconciliation", description: "Separate credit sales correctly from current-day collections." },
    { href: "/petrol-pump-software-pricing-india", label: "Pricing guide", description: "Understand the software and optional service costs." },
  ],
};

export default function Page() { return <FuelNerveTopicPage content={content} />; }
