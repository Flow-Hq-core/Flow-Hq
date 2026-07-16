export type RStatus = "done" | "pending";

export interface RNode {
  label: string;
  status: RStatus;
  cluster?: { label: string; status: RStatus }[];
  children?: RNode[];
  sequential?: boolean;
}

export const businessRoadmap: RNode[] = [
  {
    label: "Business Foundations",
    status: "done",
    children: [
      {
        label: "Vision Layer",
        status: "done",
        children: [
          { label: "Long-Term Vision", status: "done" },
          { label: "3-Year Direction", status: "done" },
          { label: "Founder Intent", status: "done" },
          { label: "Exit Possibility", status: "pending" }
        ]
      },
      {
        label: "Mission Layer",
        status: "done",
        children: [
          { label: "Core Purpose", status: "done" },
          { label: "Problem Definition", status: "done" },
          { label: "Impact Statement", status: "done" }
        ]
      },
      {
        label: "Objectives",
        status: "done",
        children: [
          { label: "Strategic Objectives", status: "done" },
          { label: "Annual Targets", status: "done" },
          { label: "OKRs", status: "pending" },
          { label: "KPI Mapping", status: "pending" }
        ]
      },
      {
        label: "Core Assets",
        status: "done",
        cluster: [
          { label: "Skills", status: "done" },
          { label: "Network", status: "done" },
          { label: "Capital", status: "pending" },
          { label: "Audience", status: "done" },
          { label: "IP", status: "pending" }
        ]
      }
    ]
  },
  {
    label: "Market Research",
    status: "done",
    children: [
      {
        label: "Industry Overview",
        status: "done",
        cluster: [
          { label: "Market Size", status: "done" },
          { label: "Market Maturity", status: "done" },
          { label: "Entry Barriers", status: "pending" }
        ]
      },
      {
        label: "Research Methods",
        status: "done",
        children: [
          { label: "Primary Research", status: "done" },
          { label: "Secondary Research", status: "done" },
          { label: "Customer Interviews", status: "done" },
          { label: "Surveys", status: "pending" }
        ]
      },
      {
        label: "Audience Mapping",
        status: "pending",
        children: [
          { label: "Demographics", status: "done" },
          { label: "Psychographics", status: "pending" },
          { label: "Behavioral Patterns", status: "pending" },
          { label: "Buying Triggers", status: "pending" }
        ]
      }
    ]
  },
  {
    label: "Customer Intelligence",
    status: "done",
    children: [
      { label: "Customer Segments", status: "done" },
      { label: "Customer Personas", status: "done" },
      { label: "Customer Goals", status: "done" },
      {
        label: "Customer Journey",
        status: "pending",
        sequential: true,
        children: [
          { label: "Awareness", status: "done" },
          { label: "Interest", status: "pending" },
          { label: "Consideration", status: "pending" },
          { label: "Purchase", status: "pending" },
          { label: "Retention", status: "pending" },
          { label: "Advocacy", status: "pending" }
        ]
      }
    ]
  },
  {
    label: "Competitive Strategy",
    status: "pending",
    children: [
      {
        label: "Competitor Mapping",
        status: "done",
        children: [
          { label: "Direct Competitors", status: "done" },
          { label: "Indirect Competitors", status: "pending" },
          { label: "Substitute Products", status: "pending" }
        ]
      },
      {
        label: "Market Gaps",
        status: "pending",
        cluster: [
          { label: "Underserved Segments", status: "pending" },
          { label: "Price Gaps", status: "pending" },
          { label: "Experience Gaps", status: "pending" },
          { label: "Authority Gaps", status: "pending" }
        ]
      },
      {
        label: "Positioning",
        status: "pending",
        children: [
          { label: "Category Selection", status: "pending" },
          { label: "Frame of Reference", status: "pending" },
          { label: "Unique Angle", status: "pending" }
        ]
      }
    ]
  },
  {
    label: "Offer & Monetization",
    status: "pending",
    children: [
      {
        label: "Offer Design",
        status: "pending",
        children: [
          { label: "Core Offer", status: "pending" },
          { label: "Promise Structure", status: "pending" },
          { label: "Delivery Format", status: "pending" }
        ]
      },
      {
        label: "Offer Ladder",
        status: "pending",
        cluster: [
          { label: "Free", status: "pending" },
          { label: "Low Ticket", status: "pending" },
          { label: "Core Offer", status: "pending" },
          { label: "High Ticket", status: "pending" },
          { label: "Backend", status: "pending" }
        ]
      },
      {
        label: "Pricing Strategy",
        status: "pending",
        children: [
          { label: "Value-Based Pricing", status: "pending" },
          { label: "Premium Positioning", status: "pending" },
          { label: "Discount Strategy", status: "pending" }
        ]
      }
    ]
  },
  {
    label: "Marketing Strategy",
    status: "pending",
    children: [
      {
        label: "Growth Channels",
        status: "pending",
        children: [
          { label: "Organic Social", status: "pending" },
          { label: "Paid Ads", status: "pending" },
          { label: "Partnerships", status: "pending" },
          { label: "Referrals", status: "pending" }
        ]
      },
      {
        label: "Platform Strategy",
        status: "pending",
        children: [
          { label: "Instagram Funnel", status: "pending" },
          { label: "YouTube Authority", status: "pending" },
          { label: "Email Engine", status: "pending" }
        ]
      }
    ]
  },
  {
    label: "Sales System",
    status: "pending",
    sequential: true,
    children: [
      { label: "Sales Funnel", status: "pending" },
      { label: "Lead Qualification", status: "pending" },
      { label: "Discovery Calls", status: "pending" },
      { label: "Proposal Templates", status: "pending" },
      { label: "Closing Framework", status: "pending" },
      {
        label: "Upsell & Cross-Sell",
        status: "pending",
        children: [
          { label: "Order Bumps", status: "pending" },
          { label: "Upgrade Paths", status: "pending" },
          { label: "Bundle Offers", status: "pending" }
        ]
      }
    ]
  },
  {
    label: "Operations",
    status: "pending",
    children: [
      {
        label: "Fulfillment Systems",
        status: "pending",
        children: [
          { label: "Delivery Workflow", status: "pending" },
          { label: "Onboarding Flow", status: "pending" },
          { label: "Support System", status: "pending" }
        ]
      },
      {
        label: "Workflow Systems",
        status: "pending",
        children: [
          { label: "Task Management", status: "pending" },
          { label: "Project Boards", status: "pending" },
          { label: "SOP Library", status: "pending" }
        ]
      },
      {
        label: "Automation",
        status: "pending",
        cluster: [
          { label: "Email Automation", status: "pending" },
          { label: "CRM Automation", status: "pending" },
          { label: "Zapier Systems", status: "pending" },
          { label: "AI Assistants", status: "pending" }
        ]
      }
    ]
  },
  {
    label: "Financial System",
    status: "pending",
    children: [
      {
        label: "Unit Economics",
        status: "pending",
        children: [
          { label: "CAC by Channel", status: "pending" },
          { label: "LTV Calculation", status: "pending" },
          { label: "Payback Period", status: "pending" }
        ]
      },
      {
        label: "Financial Health",
        status: "pending",
        cluster: [
          { label: "Burn Rate", status: "pending" },
          { label: "Runway", status: "pending" },
          { label: "Cash Flow", status: "pending" }
        ]
      },
      {
        label: "Forecasting",
        status: "pending",
        children: [
          { label: "Monthly Projection", status: "pending" },
          { label: "Scenario Planning", status: "pending" }
        ]
      }
    ]
  },
  {
    label: "Growth Strategy",
    status: "pending",
    children: [
      {
        label: "Retention & Expansion",
        status: "pending",
        children: [
          { label: "Engagement Sequences", status: "pending" },
          { label: "Loyalty Incentives", status: "pending" }
        ]
      },
      {
        label: "Scaling Infrastructure",
        status: "pending",
        children: [
          { label: "Systems Upgrade", status: "pending" },
          { label: "Hiring Plan", status: "pending" },
          { label: "Leadership Layer", status: "pending" }
        ]
      }
    ]
  }
];
