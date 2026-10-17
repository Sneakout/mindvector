import type { Metadata } from "next";
import FuelNerveTopicPage, { type TopicPageContent } from "../components/FuelNerveTopicPage";

const canonical = "https://mindvector.tech/petrol-pump-software-pricing-india";

export const metadata: Metadata = {
  title: "Petrol Pump Software Price in India | FuelNerve Plans",
  description: "Compare FuelNerve petrol pump software pricing in India: ₹699 monthly, ₹5,988 yearly or ₹24,000 lifetime Core access per petrol pump.",
  alternates: { canonical },
  openGraph: { title: "Petrol Pump Software Price in India | FuelNerve", description: "Understand monthly, yearly, lifetime, setup and optional Intelligence costs before choosing a plan.", url: canonical, siteName: "MindVector", locale: "en_IN", type: "website" },
  robots: { index: true, follow: true },
};

const content: TopicPageContent = {
  canonical,
  eyebrow: "PETROL PUMP SOFTWARE PRICING INDIA",
  title: "Compare software cost",
  accent: "without hiding the operating terms.",
  introduction: "FuelNerve Core is available per petrol pump at ₹699 monthly, ₹5,988 yearly or ₹24,000 for lifetime software access. Assisted setup is optional at ₹2,000, applicable GST is additional, and FuelNerve Intelligence is a separate recurring plan.",
  definition: "Petrol pump software pricing should state the billing period, the number of outlets covered, included modules, setup or migration costs, support terms, taxes and any continuing third-party delivery costs. A low headline price is difficult to compare when these conditions remain unclear.",
  problemTitle: "Compare the complete operating cost—not one number.",
  problemCopy: "Monthly, annual and lifetime plans distribute cost differently. Setup effort, outlet count, optional intelligence, messaging delivery and support can also affect the real expense. Clear terms help an owner choose without assuming that every future service is included forever.",
  outcomes: [
    "₹699 monthly Core access per petrol pump.",
    "₹5,988 yearly Core access per petrol pump.",
    "₹24,000 lifetime Core software access per petrol pump.",
    "Optional assisted setup at ₹2,000.",
    "GST, Intelligence and third-party delivery terms stated separately.",
  ],
  sections: [
    { number: "01", title: "Monthly Core", copy: "A lower initial commitment for one petrol pump, billed monthly while the subscription remains active.", points: ["₹699 per month", "One petrol pump", "Core operating features"] },
    { number: "02", title: "Yearly Core", copy: "Annual access for owners who prefer one yearly payment and a lower effective monthly software cost.", points: ["₹5,988 per year", "One petrol pump", "Core operating features"] },
    { number: "03", title: "Lifetime Core", copy: "One-time software access to the FuelNerve Core plan for one petrol pump. External services and separately priced products are not implied to be lifetime-inclusive.", points: ["₹24,000 one-time", "One petrol pump", "Lifetime Core software access"] },
    { number: "04", title: "Setup, Intelligence and messaging", copy: "Assisted setup is optional. FuelNerve Intelligence uses a recurring plan, while WhatsApp delivery remains subject to Meta availability, provider charges and fair-use conditions.", points: ["₹2,000 optional setup", "Intelligence priced separately", "Messaging subject to stated terms"] },
  ],
  workflowTitle: "Choose a plan from your operating need and time horizon.",
  workflowIntro: "The right comparison includes outlet count, features, setup effort and recurring services—not only the price displayed in the largest type.",
  workflow: [
    { title: "Confirm the outlet scope", copy: "FuelNerve pricing is stated per petrol pump. Multi-outlet requirements should be discussed with the team." },
    { title: "Choose the payment horizon", copy: "Compare monthly flexibility, annual effective cost and the one-time lifetime Core option." },
    { title: "Identify optional services", copy: "Decide whether assisted setup, Intelligence or messaging workflows are required." },
    { title: "Review tax and delivery terms", copy: "Account for applicable GST and any continuing third-party messaging or service costs." },
  ],
  buyerTitle: "Put every commercial term in the comparison.",
  buyerIntro: "Before buying any petrol pump software, ask the same questions of every provider and record the answers beside the quoted price.",
  buyerChecklist: [
    "Is the price per user, petrol pump, company or device?",
    "Which operational and accounting modules are included?",
    "Is setup, data migration or training charged separately?",
    "What support, backup and export options are included?",
    "Which AI, WhatsApp or third-party services continue to carry a recurring cost?",
  ],
  faqs: [
    ["How much does FuelNerve Core cost?", "FuelNerve Core costs ₹699 per month, ₹5,988 per year or ₹24,000 for lifetime software access per petrol pump. Applicable GST is additional."],
    ["Is assisted setup mandatory?", "No. Assisted setup is optional and priced at ₹2,000 per petrol pump when required."],
    ["Is FuelNerve Intelligence included in lifetime Core?", "No. FuelNerve Intelligence is a separate recurring plan because it involves continuing AI processing and evolving agent capabilities."],
    ["Are lifetime WhatsApp alerts included?", "No unlimited lifetime WhatsApp delivery is promised. Meta and providers can charge for delivered messages and change rates, so alerts are subject to the plan, availability and fair-use terms."],
    ["Does lifetime access cover more than one petrol pump?", "The published lifetime Core price applies per petrol pump. Multi-outlet requirements should be confirmed before activation."],
  ],
  related: [
    { href: "/petrol-pump-management-software", label: "Complete overview", description: "Review every FuelNerve Core operating module." },
    { href: "/petrol-pump-accounting-software", label: "Accounting", description: "See how operational records reach financial reporting." },
    { href: "/petrol-pump-dsr-software", label: "DSR software", description: "Understand how the daily sales report is constructed." },
  ],
};

export default function Page() { return <FuelNerveTopicPage content={content} />; }
