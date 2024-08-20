import React, { useState } from 'react';
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"

const flashcardData = [
  {
    title: "Chamas: Overview",
    content: [
      ["What are Chamas?", "Traditional group savings and investment clubs in Kenya"],
      ["Importance", "Play a crucial role in Kenya's financial landscape"],
      ["Typical Formation", "Friends, family members, or colleagues"],
      ["Purpose", "Collective investments, savings, and social support"],
      ["Harambee's Approach", "Revolutionize traditional system through blockchain technology"]
    ]
  },
  {
    title: "Blockchain-Powered Chama Management",
    content: [
      ["Digital Creation", "Easy setup through mobile app or web interface"],
      ["Transparent Records", "Immutable blockchain ledger for all transactions"],
      ["Automated Contributions", "Scheduled automatic deductions from members' accounts"],
      ["Democratic Decisions", "Blockchain-based voting system for investment choices"],
      ["Investment Management", "Integration with bank's investment products"]
    ]
  },
  {
    title: "Tokenized Chama Contributions",
    content: [
      ["Chama Tokens", "Unique tokens representing member contributions"],
      ["Fractional Ownership", "Enable owning fractions of Chama investments"],
      ["Token Benefits", "Easy transfer of ownership within the Chama"],
      ["Secondary Market", "Platform for trading Chama tokens"],
      ["Liquidity", "Provide option for members needing early exit"]
    ]
  },
  {
    title: "Chama-Based Crowdfunding",
    content: [
      ["Project Showcase", "Digital platform for Chamas to present investment projects"],
      ["Inter-Chama Investments", "Chamas can invest in other Chamas' projects"],
      ["Individual Participation", "Bank customers can invest in Chama-led projects"],
      ["Smart Contracts", "Automate fund collection, distribution, and payments"],
      ["Benefit", "Democratize access to community-driven investments"]
    ]
  },
  {
    title: "Community Development Initiatives",
    content: [
      ["Chama-Led Projects", "Platform for initiating local development projects"],
      ["Crowdfunding", "Mechanism for community members to contribute"],
      ["Impact Tracking", "Blockchain-based system to monitor project progress"],
      ["Matching Funds", "Bank-sponsored matching for community development"],
      ["Goal", "Incentivize socially beneficial initiatives"]
    ]
  },
  {
    title: "Financial Education and Support",
    content: [
      ["Training", "Digital courses on Chama management and investment"],
      ["AI Advisory", "AI-driven investment recommendations for Chamas"],
      ["Peer Learning", "Forum for Chamas to share experiences"],
      ["Mentorship", "Programs connecting successful Chamas with new ones"],
      ["Certification", "Program for Chama leaders"]
    ]
  },
  {
    title: "Integration with Core Banking",
    content: [
      ["Fund Transfers", "Easy movement between individual and Chama accounts"],
      ["Mobile Money", "Integration with mobile money services for contributions"],
      ["Performance Analytics", "Advanced tools for tracking Chama financial performance"],
      ["Benchmarking", "Compare performance against other Chamas and investments"],
      ["Tax Management", "Automated tax calculations and reporting for earnings"]
    ]
  },
  {
    title: "Security and Dispute Resolution",
    content: [
      ["Multi-Signature Wallets", "Require multiple approvals for large transactions"],
      ["Smart Contract Resolution", "Automated enforcement of predefined rules for disputes"],
      ["Human Intervention", "Escalation mechanism for complex issues"],
      ["Insurance", "Tailored products to protect Chama investments"],
      ["Coverage", "Protection for unforeseen events affecting operations"]
    ]
  },
  {
    title: "Regulatory Compliance",
    content: [
      ["KYC/AML", "Streamlined process for Chama registration and monitoring"],
      ["Reporting", "Automated generation of required regulatory reports"],
      ["Audit Trails", "Comprehensive, blockchain-based records of all activities"],
      ["Compliance", "Ensure adherence to group savings and investment regulations"],
      ["Facilitation", "Easy audits by internal and external parties"]
    ]
  },
  {
    title: "Future Innovations",
    content: [
      ["Cross-Border Chamas", "Facilitate international Chamas for Kenyans in diaspora"],
      ["Chama-to-Chama Lending", "Peer-to-peer lending platform for Chamas"],
      ["DeFi Integration", "Connect Chamas with global decentralized finance protocols"],
      ["Risk Assessment", "Develop models for Chama-to-Chama loans"],
      ["Global Opportunities", "Provide access to wider range of investments"]
    ]
  }
];

const ChamasGroupSavingsFlashcards = () => {
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

export default ChamasGroupSavingsFlashcards;
