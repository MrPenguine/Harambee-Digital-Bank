import React, { useState } from 'react';
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"

const flashcardData = [
  {
    title: "Flexible Project Verification System Overview",
    content: [
      ["Scope", "Government, private, international, and personal projects in Kenya"],
      ["Key Feature", "Customizable multi-layer verification process"],
      ["Technology Stack", "Blockchain, AI, Computer Vision, GIS, Mobile Apps"],
      ["Unique Selling Point", "Adaptable trust mechanisms for various project types"],
      ["Benefit", "Ensures transparency and progress verification for any scale of project"]
    ]
  },
  {
    title: "Customizable Verification Layers",
    content: [
      ["Layer 1 (Mandatory)", "AI-driven analysis (satellite imagery, photos, data)"],
      ["Layer 2 (Customizable)", "Project owner's chosen private verifiers"],
      ["Layer 3 (Customizable)", "Public verifiers (quantity determined by project owner)"],
      ["Layer 4 (Mandatory)", "Harambee Digital Bank's verification team"],
      ["Configuration", "Project owner selects verification layers and thresholds"]
    ]
  },
  {
    title: "International Project Integration",
    content: [
      ["Use Case", "Foreign investors or diaspora funding projects in Kenya"],
      ["Setup", "Project registration and verification setup through Harambee Digital Bank"],
      ["Currency Handling", "Support for multiple currencies, converted to KSH for local operations"],
      ["Legal Compliance", "Adherence to both Kenyan and relevant international regulations"],
      ["Reporting", "Multi-language support for project updates and reporting"]
    ]
  },
  {
    title: "Personal Project Verification",
    content: [
      ["Example", "Relative abroad funding house construction in Kenya"],
      ["Minimum Requirements", "GPS location, project plan, budget, timeline"],
      ["Verification Options", "Choose trusted local contacts as private verifiers"],
      ["Progress Tracking", "Regular photo/video submissions with GPS and timestamp"],
      ["Fund Release", "Automated milestone-based payments upon verified progress"]
    ]
  },
  {
    title: "AI-Driven Progress Analysis for All Projects",
    content: [
      ["Data Sources", "Satellite imagery, submitted photos/videos, IoT sensor data"],
      ["Analysis", "AI compares current state with project plans and previous data"],
      ["Adaptability", "AI models trained for various project types (buildings, roads, etc.)"],
      ["Output", "Percentage completion, deviation alerts, progress reports"],
      ["Integration", "Results recorded on blockchain, triggering smart contract actions"]
    ]
  },
  {
    title: "Trustee and Verifier Management",
    content: [
      ["Trustee Selection", "Project owners can designate trusted individuals/entities as verifiers"],
      ["Verification Rights", "Assign specific verification tasks and access levels to trustees"],
      ["Credibility Scoring", "System tracks and rates the accuracy of verifier inputs over time"],
      ["Consensus Mechanism", "Configurable rules for resolving conflicting verifier inputs"],
      ["Transparency", "All verifier actions and decisions recorded on the blockchain"]
    ]
  },
  {
    title: "Public Participation in Private Projects",
    content: [
      ["Opt-in Feature", "Project owners can choose to include public verification"],
      ["Participation Thresholds", "Set minimum number of public verifiers based on project scale"],
      ["Incentive System", "Rewards for accurate and helpful public inputs"],
      ["Privacy Controls", "Options to limit what project details are publicly visible"],
      ["Data Aggregation", "AI synthesis of public inputs to protect individual privacy"]
    ]
  },
  {
    title: "Smart Contracts for Diverse Projects",
    content: [
      ["Customization", "Tailored smart contracts based on project type and verification layers"],
      ["Milestone Definition", "Project-specific milestones with associated fund release conditions"],
      ["Multi-sig Releases", "Require approvals from multiple designated parties for fund release"],
      ["Escrow Services", "Harambee Digital Bank holds funds in escrow, released as per contract"],
      ["Dispute Resolution", "Built-in mechanisms for handling disagreements on project progress"]
    ]
  },
  {
    title: "Mobile App for Universal Access",
    content: [
      ["User Types", "Project owners, verifiers, public participants, bank officials"],
      ["Key Features", "Project registration, progress updates, verification submissions"],
      ["Geo-tagging", "Automatic location tagging for all submitted photos/videos"],
      ["Offline Mode", "Data collection in areas with poor connectivity, sync when online"],
      ["Notifications", "Real-time alerts for required actions, milestones, and fund releases"]
    ]
  },
  {
    title: "Harambee Digital Bank's Role in Flexible Verification",
    content: [
      ["Service Provision", "Offer verification system as a service for various project types"],
      ["Customization Support", "Assist clients in setting up appropriate verification layers"],
      ["Financial Services", "Provide escrow, fund management, and international transfer services"],
      ["Technology Maintenance", "Manage AI systems, blockchain infrastructure, and mobile apps"],
      ["Regulatory Compliance", "Ensure all projects adhere to relevant financial regulations"]
    ]
  }
];

const FlexibleProjectVerificationFlashcards = () => {
  const [currentCard, setCurrentCard] = useState(0);

  const nextCard = () => {
    setCurrentCard((prev) => (prev + 1) % flashcardData.length);
  };

  const prevCard = () => {
    setCurrentCard((prev) => (prev - 1 + flashcardData.length) % flashcardData.length);
  };

  return (
    <div className="flex flex-col items-center w-full max-w-3xl mx-auto">
      <Card className="w-full">
        <CardHeader className="text-2xl font-bold text-center">
          {flashcardData[currentCard].title}
        </CardHeader>
        <CardContent>
          <table className="w-full border-collapse">
            <tbody>
              {flashcardData[currentCard].content.map((row, rowIndex) => (
                <tr key={rowIndex}>
                  <td className="border p-2 font-semibold">{row[0]}</td>
                  <td className="border p-2">{row[1]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button onClick={prevCard}><ChevronLeft className="mr-2 h-4 w-4" /> Previous</Button>
          <Button onClick={nextCard}>Next <ChevronRight className="ml-2 h-4 w-4" /></Button>
        </CardFooter>
      </Card>
      <div className="mt-4 text-sm text-gray-500">
        Card {currentCard + 1} of {flashcardData.length}
      </div>
    </div>
  );
};

export default FlexibleProjectVerificationFlashcards;
