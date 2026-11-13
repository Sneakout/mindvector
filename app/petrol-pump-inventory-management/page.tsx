import type { Metadata } from "next";
import FuelNerveTopicPage, { type TopicPageContent } from "../components/FuelNerveTopicPage";

const canonical = "https://mindvector.tech/petrol-pump-inventory-management";

export const metadata: Metadata = {
  title: "Petrol Pump Inventory Management Software | FuelNerve",
  description: "Manage petrol pump tank stock, MS, HSD, lubricants, AdBlue, deliveries, dips, density and inventory movement with connected records.",
  alternates: { canonical },
  openGraph: { title: "Petrol Pump Inventory Management Software | FuelNerve", description: "Connect tank stock, deliveries, dip readings, testing, lubricant sales and stock review.", url: canonical, siteName: "MindVector", locale: "en_IN", type: "website" },
  robots: { index: true, follow: true },
};

export const content: TopicPageContent = {
  canonical,
  eyebrow: "PETROL PUMP INVENTORY MANAGEMENT",
  title: "Know how fuel and stock moved",
  accent: "before the closing number appears.",
  introduction: "Petrol pump inventory management is not one stock total. It is the connected story of tank openings, receipts, nozzle sales, testing, transfers, dip readings and non-fuel inventory—kept in a form an owner can review.",
  definition: "Petrol pump inventory software tracks the book and physical movement of MS, HSD and other products. It records deliveries, tank positions, dip and density observations, meter-linked sales, testing and adjustments while also managing lubricants, AdBlue and other non-fuel stock.",
  problemTitle: "Stock differences need context, not just an alarm.",
  problemCopy: "A closing stock figure can be correct mathematically while still hiding a missing delivery record, an unclosed shift or an unexplained adjustment. Connecting each movement to a source record makes review more useful and responsibility clearer.",
  outcomes: [
    "See MS and HSD positions by tank.",
    "Record deliveries against the receiving tank.",
    "Keep dips, density and testing observations together.",
    "Track lubricants, AdBlue and other stock separately.",
    "Review differences with the transactions behind them.",
  ],
  sections: [
    { number: "01", title: "Tank and product setup", copy: "Map each tank to its fuel product and keep a clear record of opening position, capacity context and movements that change the book balance.", points: ["MS and HSD tanks", "Opening position", "Product-specific records"] },
    { number: "02", title: "Deliveries, dips and density", copy: "Record tanker receipts, observed dips, density readings and testing information against the correct date, tank and supporting document.", points: ["Purchase receipt", "Dip observations", "Density and testing"] },
    { number: "03", title: "Sales-linked stock movement", copy: "Nozzle readings establish metered sales. Connecting nozzles to products and shifts allows stock movement to be reviewed with the sales activity that created it.", points: ["Nozzle-to-product mapping", "Shift volume", "Book stock movement"] },
    { number: "04", title: "Lubes, AdBlue and non-fuel inventory", copy: "Non-fuel products need their own purchases, sales and closing positions. Keeping these records in the same operating system gives the owner one broader inventory view.", points: ["Purchases and sales", "Item-level position", "Non-fuel revenue context"] },
  ],
  workflowTitle: "Follow every inventory movement from source to review.",
  workflowIntro: "Inventory becomes more explainable when receipts, sales and observations are recorded where they occur and reviewed together.",
  workflow: [
    { title: "Start with an opening position", copy: "Carry forward the reviewed tank and item positions into the next operating period." },
    { title: "Record receipts and observations", copy: "Capture deliveries, dips, density, testing and supporting references against the correct tank or item." },
    { title: "Connect sales movement", copy: "Use shift and nozzle records to account for product sold during the day." },
    { title: "Review the closing difference", copy: "Compare physical observations and book movement, then investigate any unresolved gap with its source records." },
  ],
  buyerTitle: "Look beyond a stock-on-hand screen.",
  buyerIntro: "The useful question is not only “How much is left?” but also “Which recorded movements explain how we arrived here?”",
  buyerChecklist: [
    "Can the system separate tanks and products correctly?",
    "Are deliveries tied to supplier documents and receiving tanks?",
    "Can dips, density and testing be reviewed historically?",
    "Does nozzle sales activity update the relevant product picture?",
    "Are lubricants and AdBlue handled without mixing them into fuel totals?",
  ],
  faqs: [
    ["What inventory should petrol pump software track?", "A complete system should track fuel by tank and product, deliveries, dips, density, testing or calibration movements, lubricants, AdBlue and other non-fuel items relevant to the outlet."],
    ["Does FuelNerve support MS and HSD separately?", "Yes. FuelNerve keeps product and tank records separate so MS and HSD movements, readings and positions can be reviewed correctly."],
    ["Can software replace physical dip readings?", "Software organises and compares records, but physical observations still need to be captured according to the station's operating process. The value is in preserving those readings with the movements they help verify."],
    ["Can owners see low-stock positions?", "FuelNerve can surface stock positions that need attention. Any reorder decision remains with the owner and should consider the station's actual supply and operating context."],
  ],
  related: [
    { href: "/petrol-pump-shift-reconciliation", label: "Shift reconciliation", description: "Relate metered sales to payment collections and shift closing." },
    { href: "/petrol-pump-dsr-software", label: "DSR software", description: "Build the daily report from connected operating records." },
    { href: "/petrol-pump-credit-management", label: "Credit management", description: "Track customer and fleet balances without separate ledgers." },
  ],
};

export default function Page() { return <FuelNerveTopicPage content={content} />; }
