import type { Metadata } from "next";
import FuelNerveTopicPage, { type TopicPageContent } from "../components/FuelNerveTopicPage";

const canonical = "https://mindvector.tech/petrol-pump-shift-reconciliation";

export const metadata: Metadata = {
  title: "Petrol Pump Shift & Nozzle Reconciliation Software | FuelNerve",
  description: "Connect attendants, nozzle readings, fuel sales, cash, UPI, cards and credit in a reviewable petrol pump shift-closing workflow.",
  alternates: { canonical },
  openGraph: { title: "Petrol Pump Shift & Nozzle Reconciliation Software", description: "Review expected sales and actual collections before a petrol pump shift closes.", url: canonical, siteName: "MindVector", locale: "en_IN", type: "website" },
  robots: { index: true, follow: true },
};

const content: TopicPageContent = {
  canonical,
  eyebrow: "PETROL PUMP SHIFT RECONCILIATION",
  title: "Close every shift",
  accent: "with readings, collections and responsibility intact.",
  introduction: "Petrol pump shift reconciliation connects attendants and nozzles with metered fuel sales, product rates and the money actually handed over through cash, UPI, card, customer credit and fleet accounts.",
  definition: "Shift reconciliation is the process of comparing what a petrol pump should have collected from metered sales with the collections and credit transactions recorded for that shift. A digital workflow preserves the staff assignment, readings, payment split, differences and review status together.",
  problemTitle: "A shortage total is not an explanation.",
  problemCopy: "When readings and collections live in different registers, the final difference is visible but difficult to investigate. A connected closing workflow shows which staff, nozzles, products and payment methods contributed to the shift result.",
  outcomes: [
    "Assign attendants to the right shift and nozzle.",
    "Calculate expected sales from meter movement and rates.",
    "Separate cash, UPI, cards, fleet and credit.",
    "Review overages or shortages before final closure.",
    "Preserve handover and approval history.",
  ],
  sections: [
    { number: "01", title: "Staff and nozzle assignment", copy: "Responsibility starts with knowing who operated which nozzle during the shift. Assignments provide the context needed for readings, sales and handover review.", points: ["Attendant assignment", "Nozzle responsibility", "Shift timing"] },
    { number: "02", title: "Opening and closing readings", copy: "Meter movement determines the product volume attributed to the shift. Effective sales rates then establish the expected value for reconciliation.", points: ["Meter readings", "Product volume", "Expected sales value"] },
    { number: "03", title: "Collection split", copy: "Record each payment channel independently rather than forcing the entire handover into cash. Customer and fleet credit remain sales even when they are not current-day collections.", points: ["Cash and UPI", "Cards and fleet", "Customer credit"] },
    { number: "04", title: "Difference and approval", copy: "Compare expected value with collections and credit, document unresolved differences and allow authorised review before the shift becomes final.", points: ["Shortage or excess", "Closing notes", "Review and audit history"] },
  ],
  workflowTitle: "Make closing a controlled sequence, not a calculation scramble.",
  workflowIntro: "Each step should carry forward the records already captured instead of asking the manager to reconstruct the shift at the end.",
  workflow: [
    { title: "Open and assign", copy: "Select the shift, attendants and nozzles, then capture the opening positions." },
    { title: "Capture sales context", copy: "Record closing readings, product rates and any testing or non-sale movement relevant to the shift." },
    { title: "Enter the handover", copy: "Separate cash, UPI, cards, fleet, customer credit and any other approved collection method." },
    { title: "Review and close", copy: "Investigate the calculated difference, add supporting notes and complete the authorised handover." },
  ],
  buyerTitle: "Test the difficult closing, not only the perfect one.",
  buyerIntro: "During a demo, ask what happens when a shift has customer credit, multiple digital payments, a changed rate or an unresolved difference.",
  buyerChecklist: [
    "Can attendants and nozzles be assigned clearly?",
    "Does the system calculate volume and value from source readings?",
    "Can every collection method be entered separately?",
    "Is customer credit treated correctly without appearing as cash?",
    "Can differences, notes and approvals be reviewed later?",
  ],
  faqs: [
    ["How is petrol pump shift sales calculated?", "Metered volume is generally derived from closing minus opening nozzle readings, adjusted for relevant non-sale movement where applicable. The effective product rate is then used to calculate the expected sales value."],
    ["Why can sales be higher than collections?", "Some sales may be recorded on customer credit or fleet accounts, and some payment records may still be missing or assigned incorrectly. Reconciliation helps separate legitimate timing or credit differences from an unexplained shortage."],
    ["Can one attendant work on more than one nozzle?", "The operating setup should reflect how the station actually assigns responsibility. FuelNerve supports shift and nozzle assignment records so the station can configure a practical workflow."],
    ["Can a closed shift be changed?", "Authorised correction may be necessary, but the system should preserve audit history. Access and approval rules should prevent silent changes to completed records."],
  ],
  related: [
    { href: "/petrol-pump-dsr-software", label: "DSR software", description: "Carry reviewed shift records into the daily operating report." },
    { href: "/petrol-pump-inventory-management", label: "Fuel inventory", description: "Connect nozzle sales with tanks, deliveries and stock positions." },
    { href: "/petrol-pump-credit-management", label: "Credit management", description: "Keep credit sales connected to customer and vehicle accounts." },
  ],
};

export default function Page() { return <FuelNerveTopicPage content={content} />; }
