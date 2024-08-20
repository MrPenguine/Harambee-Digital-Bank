import React, { useState } from 'react';
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"

const flashcardData = [
  {
    title: "Tender Process Overview",
    content: [
      ["Definition", "Process of inviting bids for large projects or procurement of services"],
      ["Key Stages", "1. Planning, 2. Invitation, 3. Evaluation, 4. Award, 5. Contract Management"],
      ["Blockchain Role", "Ensure transparency, immutability, and traceability of the tender process"],
      ["Smart Contracts", "Automate parts of the tendering process, ensuring fairness"],
      ["Benefit", "Reduced fraud, increased efficiency, and enhanced trust in the process"]
    ]
  },
  {
    title: "Creating a Blockchain-Based Tender",
    content: [
      ["Step 1", "Define tender requirements and criteria in smart contract format"],
      ["Step 2", "Deploy tender smart contract to the Hyperledger Fabric network"],
      ["Step 3", "Generate unique cryptographic keys for each tender"],
      ["Step 4", "Set up access controls for potential bidders"],
      ["Step 5", "Implement time-bound functions for bid submission and evaluation"]
    ]
  },
  {
    title: "Technical Aspects of Tender Smart Contracts",
    content: [
      ["Language", "Go or JavaScript for Hyperledger Fabric chaincode"],
      ["Key Functions", "submitBid(), evaluateBid(), awardContract(), revokeBid()"],
      ["Data Structure", "Struct or object representing bid details"],
      ["Access Control", "Use Fabric's built-in MSP (Membership Service Provider)"],
      ["Event Emission", "Emit events for bid submission, evaluation, and award"]
    ]
  },
  {
    title: "Bid Submission and Evaluation",
    content: [
      ["Submission", "Encrypted bids stored on-chain, key held by bidder"],
      ["Time Locking", "Smart contract enforces bid submission deadline"],
      ["Bid Opening", "Automated process to decrypt and reveal bids at specified time"],
      ["Evaluation", "Predefined criteria in smart contract auto-evaluate bids"],
      ["Manual Override", "Provision for human intervention in complex evaluations"]
    ]
  },
  {
    title: "Updating the Tender System",
    content: [
      ["Chaincode Updates", "Use Fabric's chaincode lifecycle for updates"],
      ["Version Control", "Implement semantic versioning for chaincode"],
      ["Backwards Compatibility", "Ensure new versions support existing data structures"],
      ["Testing", "Rigorous testing on a staging network before deployment"],
      ["Rollback Plan", "Ability to revert to previous version if issues arise"]
    ]
  },
  {
    title: "Security Considerations in Tendering",
    content: [
      ["Bid Encryption", "Use asymmetric encryption for bid confidentiality"],
      ["Access Control", "Implement role-based access control (RBAC) in chaincode"],
      ["Audit Trails", "Log all actions and decisions on the blockchain"],
      ["Penetration Testing", "Regular security audits of the tender system"],
      ["Key Management", "Secure management of cryptographic keys for all parties"]
    ]
  },
  {
    title: "Integration with Chama System",
    content: [
      ["Chama Participation", "Allow Chamas to participate in relevant tenders"],
      ["Voting Mechanism", "Implement on-chain voting for Chamas to decide on bid participation"],
      ["Fund Allocation", "Smart contract to manage fund allocation from Chama to bid"],
      ["Risk Assessment", "AI-driven risk assessment for Chamas considering tender participation"],
      ["Performance Tracking", "Monitor and record Chama performance in won tenders"]
    ]
  },
  {
    title: "Regulatory Compliance in Tendering",
    content: [
      ["Transparency", "Ensure all steps are visible to authorized regulators"],
      ["Reporting", "Automated generation of compliance reports"],
      ["Data Privacy", "Implement data protection measures in line with regulations"],
      ["Anti-Collusion", "Smart contract features to detect and prevent bid rigging"],
      ["Audit Support", "Provide regulator-specific views of the blockchain data"]
    ]
  },
  {
    title: "Performance Optimization",
    content: [
      ["Scalability", "Implement Fabric's private data collections for large datasets"],
      ["Query Optimization", "Use Fabric's rich queries and CouchDB for complex queries"],
      ["Caching", "Implement off-chain caching for frequently accessed data"],
      ["Asynchronous Processing", "Use event-driven architecture for non-critical operations"],
      ["Benchmarking", "Regular performance testing and optimization"]
    ]
  },
  {
    title: "Future Enhancements",
    content: [
      ["AI Integration", "Implement AI for advanced bid evaluation and fraud detection"],
      ["Cross-Chain Interoperability", "Enable participation in tenders across different blockchains"],
      ["IoT Integration", "Incorporate IoT data for real-time project tracking in tenders"],
      ["Predictive Analytics", "Use historical blockchain data to predict tender outcomes"],
      ["VR/AR Interfaces", "Develop immersive interfaces for virtual bid submissions and evaluations"]
    ]
  }
];

const ChamaTenderUpdateFlashcards = () => {
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

export default ChamaTenderUpdateFlashcards;
