import type { Metadata } from "next";
import FuelNerveTopicPage, { type TopicPageContent } from "../components/FuelNerveTopicPage";

const canonical = "https://mindvector.tech/petrol-pump-accounting-software";

export const metadata: Metadata = {
  title: "Petrol Pump Accounting Software & Reports | FuelNerve",
  description: "Connect petrol pump sales, collections, purchases, expenses, salaries, customers, suppliers and operational reports in FuelNerve.",
  alternates: { canonical },
  openGraph: { title: "Petrol Pump Accounting Software & Reports | FuelNerve", description: "Keep forecourt operations and financial records connected from shift closing to owner review.", url: canonical, siteName: "MindVector", locale: "en_IN", type: "website" },
  robots: { index: true, follow: true },
};

const content: TopicPageContent = {
  canonical,
  eyebrow: "PETROL PUMP ACCOUNTING SOFTWARE",
  title: "Keep the accounts connected",
  accent: "to the work that created them.",
  introduction: "Petrol pump accounting becomes more useful when sales, collections, credit, purchases, expenses and salaries retain their connection to shifts, stock, customers and suppliers. FuelNerve brings those records into one operating picture for review and reporting.",
  definition: "Petrol pump accounting software records the financial effect of daily station operations. It should connect sales and payment methods with customer credit, supplier purchases, expenses, payroll, inventory and reports so an owner can move from a total back to the operating record behind it.",
  problemTitle: "A ledger can balance while the operation remains unclear.",
  problemCopy: "Generic accounting software may show the financial entry without the shift, nozzle, tank or customer context. Petrol-pump-specific records help an owner understand not only where an amount was posted, but which daily activity produced it.",
  outcomes: [
    "Connect sales with actual collection methods.",
    "Keep customer and supplier balances current.",
    "Record expenses and salaries with clear references.",
    "Review fuel and non-fuel profitability separately.",
    "Preserve exports and audit history for follow-up.",
  ],
  sections: [
    { number: "01", title: "Sales and collection records", copy: "Shift sales and payment methods establish what was sold, what was collected and what moved into customer or fleet credit rather than current-day cash.", points: ["Fuel and non-fuel sales", "Cash and digital payments", "Credit allocation"] },
    { number: "02", title: "Purchases and suppliers", copy: "Supplier invoices, fuel receipts and other purchases belong with the stock or expense movement they created. This keeps payable and inventory context available together.", points: ["Supplier invoices", "Purchase references", "Payable visibility"] },
    { number: "03", title: "Expenses and salaries", copy: "Record recurring and day-to-day operating costs with the station, date, category and supporting context needed for owner review.", points: ["Operating expenses", "Staff salaries", "Category and evidence"] },
    { number: "04", title: "Reports and audit history", copy: "Daily, account and profitability reports should allow the reviewer to return to source records, export information and see authorised changes over time.", points: ["DSR and accounts", "Profit reports", "Exports and audit trail"] },
  ],
  workflowTitle: "Let operations create cleaner financial records.",
  workflowIntro: "When the source transaction is entered once and classified correctly, accounting becomes a connected outcome rather than a second round of data entry.",
  workflow: [
    { title: "Capture the operating event", copy: "Record the shift sale, customer transaction, supplier invoice, expense or salary in its real business context." },
    { title: "Classify the financial effect", copy: "Identify collection method, credit account, supplier, category and any inventory movement connected to the record." },
    { title: "Review balances and differences", copy: "Use customer, supplier, cash and operating reports to identify missing or inconsistent records." },
    { title: "Export and close the period", copy: "Provide reviewed information to the owner or accounting process while preserving the underlying audit trail." },
  ],
  buyerTitle: "Choose operational accounting, not duplicate entry.",
  buyerIntro: "The software should reduce the gap between the forecourt and the accounts. Ask how a shift transaction reaches customer, cash, stock and reporting records.",
  buyerChecklist: [
    "Does a shift entry flow into sales and collection reporting?",
    "Can credit be attached to the correct customer, vehicle or fleet account?",
    "Are purchases connected to suppliers and relevant stock movements?",
    "Can expenses and salaries be categorised and reviewed?",
    "Are exports and corrections controlled by permissions and audit history?",
  ],
  faqs: [
    ["Why use petrol-pump-specific accounting software?", "Petrol pumps have operational records—such as nozzle readings, tank movement, shift handovers and fuel credit—that generic accounting tools may not capture directly. A specialised system keeps those events connected to the financial record."],
    ["Does FuelNerve record customer and supplier accounts?", "Yes. FuelNerve connects customer credit, supplier invoices and payments with the wider operating and accounting records of the station."],
    ["Can FuelNerve track expenses and salaries?", "Yes. Operating expenses and staff salaries can be recorded so the owner can review their effect alongside sales, purchases and profit reporting."],
    ["Does FuelNerve replace a chartered accountant?", "No. FuelNerve organises operational and accounting records. Tax filings, audits and professional advice should still be handled according to the business's requirements by an appropriate professional."],
  ],
  related: [
    { href: "/petrol-pump-dsr-software", label: "DSR software", description: "Build the daily report from shift, stock and collection records." },
    { href: "/petrol-pump-credit-management", label: "Credit management", description: "Keep customer, vehicle and fleet balances connected." },
    { href: "/petrol-pump-software-pricing-india", label: "Pricing guide", description: "Compare monthly, yearly and lifetime access clearly." },
  ],
};

export default function Page() { return <FuelNerveTopicPage content={content} />; }
