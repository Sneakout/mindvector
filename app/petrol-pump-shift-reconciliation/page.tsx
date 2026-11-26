import type { Metadata } from "next";
import FuelNerveTopicPage, { type TopicPageContent } from "../components/FuelNerveTopicPage";
import ShiftWorkedExample from "./ShiftWorkedExample";

const canonical = "https://mindvector.tech/petrol-pump-shift-reconciliation";

export const metadata: Metadata = {
  title: "Petrol Pump Shift & Nozzle Reconciliation Software | FuelNerve",
  description: "Learn how to close a petrol pump shift in FuelNerve and reconcile nozzle readings with cash, UPI, card and credit. Includes a worked shortage example.",
  alternates: { canonical },
  openGraph: { title: "Petrol Pump Shift & Nozzle Reconciliation Software", description: "Follow a FuelNerve shift from opening readings to closing and payment reconciliation.", url: canonical, siteName: "MindVector", locale: "en_IN", type: "website" },
  robots: { index: true, follow: true },
};

export const content: TopicPageContent = {
  canonical,
  workedExample: <ShiftWorkedExample />,
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
    "Investigate shortages or excesses before completing reconciliation.",
    "Preserve handover and approval history.",
  ],
  sections: [
    { number: "01", title: "Staff and nozzle assignment", copy: "Responsibility starts with knowing who operated which nozzle during the shift. Assignments provide the context needed for readings, sales and handover review.", points: ["Attendant assignment", "Nozzle responsibility", "Shift timing"] },
    { number: "02", title: "Opening and closing readings", copy: "Meter movement determines the product volume attributed to the shift. Effective sales rates then establish the expected value for reconciliation.", points: ["Meter readings", "Product volume", "Expected sales value"] },
    { number: "03", title: "Collection split", copy: "Record each payment channel independently rather than forcing the entire handover into cash. Customer and fleet credit remain sales even when they are not current-day collections.", points: ["Cash and UPI", "Cards and fleet", "Customer credit"] },
    { number: "04", title: "Difference and review", copy: "After shift closing, compare sales allocated to each payment method with what you verified. Record any unresolved shortage or excess before completing reconciliation.", points: ["Shortage or excess", "Reconciliation notes", "Locked record after reconciliation"] },
  ],
  workflowTitle: "How to close and reconcile a shift in FuelNerve.",
  workflowIntro: "Adapted from the FuelNerve user guide. Record the shift in Operations → Shifts, then verify the payment split in Operations → Reconciliation.",
  workflow: [
    { title: "Open the shift", copy: "In Operations → Shifts, choose the station and actual opening time. Confirm opening nozzle readings, assign an attendant to each nozzle and enter the physical cash at start." },
    { title: "Close the shift", copy: "Enter the actual closing time, each closing meter reading and any test quantities, noting whether test fuel was returned. Record staff collections, actual closing tank dips and the physical cash left in the drawer, including starting cash." },
    { title: "Verify cash, UPI, card and credit", copy: "Open the shift in Operations → Reconciliation. Allocate sales by payment type and verify receipts against the handover and payment records. Exclude opening float from cash sales receipts; record unpaid customer credit and prepaid fleet balance used separately from new money collected." },
    { title: "Explain the difference", copy: "Check any short or excess amount by payment method against the original records. Add the required explanation and complete reconciliation; the reconciled record is then shown as locked." },
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
    ["How are petrol pump shift sales calculated?", "Start with closing minus opening nozzle readings. Subtract returned test litres for the worked example on this page, then multiply saleable litres by the applicable product rate."],
    ["Is opening cash float part of shift sales?", "No. Include opening float in the physical drawer count if it is still there, but exclude it from the cash collected from sales in Reconciliation. Account separately for any cash added, deposited or handed over."],
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
