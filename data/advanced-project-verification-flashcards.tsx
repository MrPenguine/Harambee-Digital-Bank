import React, { useState } from 'react';
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"

const flashcardData = [
  {
    title: "AI-Powered Project Verification Overview",
    content: [
      ["Core Technologies", "Blockchain, AI, Computer Vision, Crowd-sourcing, GIS"],
      ["Primary Goal", "Automated and crowd-verified project progress tracking"],
      ["Key Feature", "Multi-layered verification process integrating machine and human inputs"],
      ["Data Sources", "Satellite imagery, on-site photos, public submissions, official reports"],
      ["Benefit", "Near-impossible to fake project progress or misappropriate funds"]
    ]
  },
  {
    title: "Geospatial Project Definition",
    content: [
      ["Initial Setup", "Define project location and scope using GIS coordinates"],
      ["For Roads", "Specify start point, end point, and route using map interface"],
      ["For Buildings", "Define construction site boundaries and expected structures"],
      ["Integration", "GIS data stored on blockchain, linked to project smart contract"],
      ["Accessibility", "Public can view project locations and expected outcomes on map"]
    ]
  },
  {
    title: "Computer Vision for Progress Tracking",
    content: [
      ["Data Source", "Regular satellite imagery of project site (e.g., weekly updates)"],
      ["AI Model", "Trained to recognize construction progress, road development, etc."],
      ["Analysis", "Compare current imagery with previous data and project plans"],
      ["Output", "Percentage of completion, detected anomalies or deviations"],
      ["Blockchain Integration", "AI analysis results recorded on blockchain regularly"]
    ]
  },
  {
    title: "Crowd-Sourced Verification",
    content: [
      ["Public Participation", "Anyone can submit on-site photos and comments"],
      ["Location Verification", "App uses GPS to ensure photos are taken at project site"],
      ["Metadata Analysis", "AI checks photo metadata for authenticity and location accuracy"],
      ["Volume Requirement", "Projects over 40B KSH require min. 1000 public submissions"],
      ["Incentive System", "Reward system for valuable and verified public contributions"]
    ]
  },
  {
    title: "AI-Driven Photo Analysis",
    content: [
      ["Process", "AI analyzes crowd-submitted photos for project progress"],
      ["Features", "Recognizes construction elements, road surfaces, building stages"],
      ["Comparison", "Matches observed progress with expected timeline and milestones"],
      ["Credibility Scoring", "Assigns credibility scores to submissions based on consistency"],
      ["Flagging", "Highlights discrepancies between official reports and public submissions"]
    ]
  },
  {
    title: "Multi-Layer Verification Process",
    content: [
      ["Layer 1", "AI analysis of satellite imagery and crowd-sourced photos"],
      ["Layer 2", "Bank's on-site verification team assessment"],
      ["Layer 3", "Certified independent verifier's report"],
      ["Layer 4", "Government agency final approval"],
      ["Consensus", "Smart contract requires agreement across multiple layers for fund release"]
    ]
  },
  {
    title: "Smart Contract for Fund Disbursement",
    content: [
      ["Trigger Conditions", "Meet verification thresholds across all layers"],
      ["Partial Payments", "Release funds based on verified percentage of completion"],
      ["Holdbacks", "Retain final payment until full project completion verified"],
      ["Dispute Resolution", "Automated process for handling conflicting verification data"],
      ["Transparency", "All fund movements and justifications recorded on blockchain"]
    ]
  },
  {
    title: "Bank's Role in Enhanced Verification",
    content: [
      ["Data Aggregation", "Collect and process data from all verification layers"],
      ["On-Site Teams", "Deploy bank representatives for physical site inspections"],
      ["AI Model Management", "Maintain and update AI models for progress recognition"],
      ["Public Interface", "Manage platform for public submissions and reward distribution"],
      ["Compliance Checks", "Ensure all processes adhere to regulatory requirements"]
    ]
  },
  {
    title: "Public Dashboard and Reporting",
    content: [
      ["Live Updates", "Real-time project progress visible on public web interface"],
      ["Interactive Maps", "GIS-based visualization of all ongoing projects"],
      ["Submission Portal", "Interface for public to submit photos and comments"],
      ["Progress Tracker", "Visual representation of verified project milestones"],
      ["Financial Transparency", "Clear breakdown of fund allocation and disbursement"]
    ]
  },
  {
    title: "Security and Anti-Fraud Measures",
    content: [
      ["Photo Authentication", "AI-powered detection of manipulated or false images"],
      ["Sybil Attack Prevention", "Measures to prevent multiple submissions from same source"],
      ["Data Encryption", "End-to-end encryption for all submitted data"],
      ["Audit Trails", "Comprehensive logging of all system interactions on blockchain"],
      ["Anomaly Detection", "AI algorithms to flag unusual patterns in submissions or progress"]
    ]
  }
];

const AdvancedProjectVerificationFlashcards = () => {
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

export default AdvancedProjectVerificationFlashcards;
