import type { Metadata } from "next";
import FuelNerveTopicPage, { type TopicPageContent } from "../components/FuelNerveTopicPage";

const canonical = "https://mindvector.tech/petrol-pump-dsr-software";

export const metadata: Metadata = {
  title: "Petrol Pump DSR Software & Daily Sales Reports | FuelNerve",
  description: "Understand how petrol pump DSR software connects nozzle readings, fuel sales, payment collections, stock movement and daily owner reports.",
  alternates: { canonical },
  openGraph: {
    title: "Petrol Pump DSR Software & Daily Sales Reports | FuelNerve",
    description: "Build a reviewable daily sales record from connected shift, nozzle, stock and collection data.",
    url: canonical,
    siteName: "MindVector",
    locale: "en_IN",
    type: "website",
  },
  robots: { index: true, follow: true },
};

export const content: TopicPageContent = {
  canonical,
  eyebrow: "PETROL PUMP DSR SOFTWARE",
  title: "Build the daily sales report",
  accent: "from the day that actually happened.",
  introduction: "A useful petrol pump DSR should do more than present a final sales total. It should connect nozzle readings, product rates, payment collections, customer credit, tank movement and operating expenses so the owner can review how the day was built.",
  definition: "Petrol pump DSR software creates a Daily Sales Report from operational records captured during each shift. Instead of copying totals between registers, it brings fuel volume, sales value, payment mode, credit, stock movement and expenses into one reviewable daily record.",
  problemTitle: "A DSR is only as reliable as the records behind it.",
  problemCopy: "When the report is assembled after the day closes, missing readings or collection differences can be difficult to trace. A connected workflow builds the report as shifts are opened, operated, reconciled and closed—leaving evidence for every important total.",
  outcomes: [
    "See where each sales figure came from.",
    "Review cash, UPI, cards and credit separately.",
    "Connect fuel sales with nozzle and stock movement.",
    "Keep corrections and review history visible.",
    "Give the owner a consistent daily operating picture.",
  ],
  sections: [
    {
      number: "01",
      title: "Nozzle and product sales",
      copy: "Opening and closing meter readings establish the metered volume for each nozzle. Product rates turn that volume into an expected sales value that can be reviewed shift by shift.",
      points: ["Opening and closing readings", "Nozzle and product mapping", "Rate-effective sales value"],
    },
    {
      number: "02",
      title: "Collections by payment method",
      copy: "Cash, UPI, card, fleet and other collection methods remain separate. This makes it possible to compare what was sold with what was collected without hiding differences inside a single total.",
      points: ["Cash and digital collections", "Credit and fleet sales", "Expected-versus-actual review"],
    },
    {
      number: "03",
      title: "Stock and purchase context",
      copy: "Tank positions, deliveries, testing and other stock movements explain why the book position changed. The DSR can be reviewed alongside the operating events that affected stock.",
      points: ["Opening and closing position", "Deliveries and testing", "Difference visibility"],
    },
    {
      number: "04",
      title: "Expenses, credit and owner review",
      copy: "Operating expenses and customer-credit movements affect the cash picture even when fuel sales are correct. Bringing them into the same daily review gives the owner a clearer explanation of the numbers.",
      points: ["Day expenses", "Customer credit", "Owner review and exports"],
    },
  ],
  workflowTitle: "Build the DSR throughout the workday.",
  workflowIntro: "The report becomes easier to trust when every shift contributes structured source records instead of a final total entered from memory.",
  workflow: [
    { title: "Record opening positions", copy: "Start with assigned staff, nozzle readings, tank positions and effective product rates." },
    { title: "Capture the day", copy: "Record sales, collections, credit transactions, deliveries and operating expenses as they occur." },
    { title: "Reconcile each shift", copy: "Compare metered sales with payment methods and review unresolved differences before closing." },
    { title: "Review the daily picture", copy: "Open the DSR with its underlying shift, stock, customer and account records available for follow-up." },
  ],
  buyerTitle: "Ask whether the report can explain itself.",
  buyerIntro: "A polished PDF is not enough. Good DSR software should preserve the underlying records and make discrepancies easier to investigate.",
  buyerChecklist: [
    "Can every sales total be traced to product and nozzle readings?",
    "Are cash, UPI, card, credit and fleet payments kept distinct?",
    "Do deliveries, testing and stock adjustments remain visible?",
    "Can authorised users correct a record without erasing history?",
    "Can an owner review and export reports without rebuilding them in a spreadsheet?",
  ],
  faqs: [
    ["What is a DSR in a petrol pump?", "DSR commonly means Daily Sales Report. It summarises the fuel and non-fuel activity for the day, including sales volume and value, collections, credit, stock-related information and other operating records needed for review."],
    ["Does a digital DSR replace nozzle readings?", "No. Nozzle readings remain an important source record. Digital DSR software connects those readings to products, shifts, sales value and collections so the final report can be reviewed against its source."],
    ["Can a DSR show cash and UPI separately?", "Yes. A connected system should preserve payment methods separately and compare their combined value with the expected collection for the shift or day."],
    ["Can FuelNerve export daily reports?", "FuelNerve provides reporting and export workflows from the same operating records used for shifts, stock, collections, credit and accounts."],
  ],
  related: [
    { href: "/petrol-pump-shift-reconciliation", label: "Shift reconciliation", description: "Connect nozzle sales with collections before a shift closes." },
    { href: "/petrol-pump-inventory-management", label: "Fuel inventory", description: "Track tank stock, deliveries, dips and fuel movement." },
    { href: "/petrol-pump-accounting-software", label: "Accounting", description: "Keep operational and financial records connected." },
  ],
};

export default function Page() {
  return <FuelNerveTopicPage content={content} />;
}
