export interface RoadmapNode {
  label: string;
  children?: string[];
}

export interface RoadmapBranch {
  label: string;
  color: string;
  nodes: RoadmapNode[];
  side: "left" | "right";
}

export interface RoadmapData {
  title: string;
  branches: RoadmapBranch[];
}

const roadmaps: Record<string, RoadmapData> = {
  foundation: {
    title: "Foundation",
    branches: [
      { label: "Vision & Mission", color: "bg-blue-100 border-blue-300", side: "left", nodes: [{ label: "Core Purpose" }, { label: "Long-term Vision" }, { label: "Mission Statement" }] },
      { label: "Business Model", color: "bg-green-100 border-green-300", side: "right", nodes: [{ label: "Revenue Streams" }, { label: "Cost Structure" }, { label: "Value Delivery" }] },
      { label: "Legal & Structure", color: "bg-amber-100 border-amber-300", side: "left", nodes: [{ label: "Entity Type" }, { label: "Compliance" }, { label: "IP Protection" }] },
      { label: "Value Proposition", color: "bg-purple-100 border-purple-300", side: "right", nodes: [{ label: "Problem-Solution Fit" }, { label: "Unique Selling Point" }, { label: "Customer Promise" }] }
    ]
  },
  "market-intelligence": {
    title: "Market Intelligence",
    branches: [
      { label: "ICP Research", color: "bg-green-100 border-green-300", side: "left", nodes: [{ label: "Demographics" }, { label: "Psychographics" }, { label: "Pain Points" }, { label: "Buying Behavior" }] },
      { label: "Competitor Analysis", color: "bg-red-100 border-red-300", side: "right", nodes: [{ label: "Direct Competitors" }, { label: "Indirect Competitors" }, { label: "SWOT Analysis" }] },
      { label: "Demand Signals", color: "bg-blue-100 border-blue-300", side: "left", nodes: [{ label: "Search Trends" }, { label: "Social Listening" }, { label: "Market Gaps" }] },
      { label: "Market Sizing", color: "bg-amber-100 border-amber-300", side: "right", nodes: [{ label: "TAM" }, { label: "SAM" }, { label: "SOM" }] }
    ]
  },
  strategy: {
    title: "Strategy",
    branches: [
      { label: "Positioning", color: "bg-purple-100 border-purple-300", side: "left", nodes: [{ label: "Market Position" }, { label: "Category Design" }, { label: "Perception Mapping" }] },
      { label: "Go-to-Market", color: "bg-green-100 border-green-300", side: "right", nodes: [{ label: "Launch Strategy" }, { label: "Channel Selection" }, { label: "Messaging Framework" }] },
      { label: "Differentiation", color: "bg-blue-100 border-blue-300", side: "left", nodes: [{ label: "Competitive Moat" }, { label: "Unique Mechanisms" }, { label: "Brand Story" }] },
      { label: "Strategic Planning", color: "bg-amber-100 border-amber-300", side: "right", nodes: [{ label: "OKRs" }, { label: "Quarterly Goals" }, { label: "Milestones" }] }
    ]
  },
  "offer-monetization": {
    title: "Offer & Monetization",
    branches: [
      { label: "Pricing Model", color: "bg-amber-100 border-amber-300", side: "left", nodes: [{ label: "Freemium" }, { label: "Subscription" }, { label: "One-time" }, { label: "Usage-based" }] },
      { label: "Packaging", color: "bg-blue-100 border-blue-300", side: "right", nodes: [{ label: "Tier Design" }, { label: "Feature Gating" }, { label: "Upsell Paths" }] },
      { label: "Revenue Model", color: "bg-green-100 border-green-300", side: "left", nodes: [{ label: "Primary Revenue" }, { label: "Secondary Revenue" }, { label: "Recurring vs One-time" }] },
      { label: "Offer Design", color: "bg-purple-100 border-purple-300", side: "right", nodes: [{ label: "Core Offer" }, { label: "Bonuses" }, { label: "Guarantees" }] }
    ]
  }
};

export default roadmaps;
