import React, { useState } from 'react';
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"

const comparisonData = [
  {
    title: "Hyperledger Fabric: Core Components",
    data: [
      ["Component", "Description", "Relevance to Harambee Bank"],
      ["Peer Nodes", "Maintain ledger and smart contracts", "Secure transaction processing"],
      ["Orderer Nodes", "Consensus and transaction ordering", "Ensure transaction finality"],
      ["Certificate Authority", "Manages identities", "KYC and access control"],
      ["Channels", "Private subnets of network", "Isolate sensitive customer data"],
      ["Chaincode", "Smart contracts", "Implement banking logic and rules"],
      ["Ledger", "Immutable record of transactions", "Audit trail for all bank operations"]
    ]
  },
  {
    title: "Hyperledger Fabric: Consensus Mechanisms",
    data: [
      ["Mechanism", "Description", "Advantage for Banking"],
      ["Raft", "Crash Fault Tolerant ordering service", "High performance, easy setup"],
      ["Kafka", "Distributed streaming platform", "Scalable, good for high throughput"],
      ["PBFT", "Byzantine Fault Tolerant algorithm", "Strong consistency, suitable for multi-bank scenarios"],
      ["Solo", "Single orderer node (for testing)", "Quick development and testing"],
      ["Custom", "Pluggable consensus", "Flexibility to meet specific regulatory requirements"]
    ]
  },
  {
    title: "Django Integration with Hyperledger Fabric",
    data: [
      ["Aspect", "Implementation", "Benefit"],
      ["API Layer", "Django REST framework interfacing with Fabric SDK", "Seamless integration of blockchain with web services"],
      ["User Authentication", "Django auth linked to Fabric CA", "Single sign-on with blockchain identities"],
      ["Database Syncing", "Custom middleware for PostgreSQL and Fabric ledger", "Consistency between off-chain and on-chain data"],
      ["Admin Interface", "Django admin customized for blockchain operations", "Easy management of blockchain network"],
      ["Asynchronous Tasks", "Celery for handling long-running blockchain queries", "Improved responsiveness of the web application"],
      ["Caching", "Redis caching of blockchain query results", "Reduced load on the blockchain network"]
    ]
  },
  {
    title: "Postman for Blockchain API Testing",
    data: [
      ["Feature", "Use Case", "Benefit"],
      ["Collections", "Organize Fabric API endpoints", "Streamlined testing workflow"],
      ["Environment Variables", "Store network addresses and user credentials", "Easy switching between test and prod networks"],
      ["Pre-request Scripts", "Generate Fabric transaction proposals", "Automate complex blockchain interactions"],
      ["Tests", "Verify blockchain responses", "Ensure consistency of smart contract results"],
      ["Newman", "CLI tool for running Fabric API tests", "Continuous integration of blockchain tests"],
      ["Monitors", "Track Fabric network performance", "Proactive identification of blockchain issues"]
    ]
  },
  {
    title: "Blockchain-Driven User Authentication",
    data: [
      ["Feature", "Implementation", "Advantage"],
      ["Identity Management", "Fabric CA for issuing certificates", "Decentralized, cryptographic user identities"],
      ["Multi-factor Auth", "Combine Fabric certs with traditional factors", "Enhanced security with blockchain backup"],
      ["Single Sign-On", "Use Fabric identities across bank services", "Seamless user experience with high security"],
      ["Role-Based Access", "Map Fabric certs to Django permissions", "Granular, tamper-proof access control"],
      ["Audit Trail", "Log auth events on Fabric ledger", "Immutable record of all access attempts"],
      ["Privacy", "Use Fabric channels for sensitive user data", "Compliance with data protection regulations"]
    ]
  },
  {
    title: "Blockchain-Based Transaction Processing",
    data: [
      ["Feature", "Implementation", "Benefit"],
      ["Real-time Settlement", "Instant finality with Fabric consensus", "Faster transactions, reduced risk"],
      ["Smart Contracts", "Chaincode for transaction logic", "Automated, transparent processing"],
      ["Multi-Currency Support", "Tokenization using Fabric chaincode", "Efficient handling of various currencies"],
      ["Atomic Transactions", "Fabric's built-in atomic commits", "Ensures all-or-nothing transactions"],
      ["Transaction History", "Immutable ledger records", "Comprehensive, tamper-proof audit trail"],
      ["Confidentiality", "Private data collections in Fabric", "Transact without revealing sensitive info"]
    ]
  },
  {
    title: "Blockchain-Driven Data Encryption",
    data: [
      ["Feature", "Implementation", "Advantage"],
      ["On-chain Encryption", "Fabric's built-in encryption", "Data secure at rest and in transit"],
      ["Off-chain Encryption", "Django-encrypted fields linked to Fabric", "Flexible encryption for sensitive data"],
      ["Key Management", "Fabric CA for certificate management", "Secure, decentralized key infrastructure"],
      ["Zero-Knowledge Proofs", "ZKP libraries integrated with Fabric", "Verify without revealing data"],
      ["Homomorphic Encryption", "Custom chaincode for encrypted computation", "Perform calculations on encrypted data"],
      ["Quantum-Resistant Algorithms", "Post-quantum crypto libraries in Fabric", "Future-proof encryption"]
    ]
  },
  {
    title: "Blockchain-Based Regulatory Compliance",
    data: [
      ["Feature", "Implementation", "Benefit"],
      ["AML Checks", "Chaincode for transaction monitoring", "Real-time, automated compliance checks"],
      ["KYC Verification", "Store KYC data in Fabric private data collections", "Secure, shareable customer information"],
      ["Audit Trails", "Immutable ledger for all operations", "Comprehensive, tamper-proof records"],
      ["Reporting", "Automated report generation from blockchain data", "Accurate, real-time regulatory reporting"],
      ["Privacy Compliance", "Fabric channels for data isolation", "GDPR and other privacy regulation compliance"],
      ["Cross-Border Compliance", "Smart contracts for international regulations", "Automated multi-jurisdictional compliance"]
    ]
  },
  {
    title: "Blockchain-Driven Customer Support",
    data: [
      ["Feature", "Implementation", "Advantage"],
      ["Ticket Management", "Chaincode for creating and tracking tickets", "Immutable record of all customer interactions"],
      ["Identity Verification", "Fabric CA for customer authentication", "Secure, privacy-preserving customer verification"],
      ["Dispute Resolution", "Smart contracts for automated resolution", "Transparent, fair dispute handling"],
      ["Service Level Agreements", "Chaincode to enforce and track SLAs", "Automated compliance with service promises"],
      ["Feedback System", "Blockchain-based reputation system", "Tamper-proof customer feedback"],
      ["Knowledge Base", "Decentralized storage of support information", "Always up-to-date, consensus-driven knowledge"]
    ]
  },
  {
    title: "Blockchain-Based Financial Analytics",
    data: [
      ["Feature", "Implementation", "Benefit"],
      ["Real-time Analytics", "Fabric queries for instant data access", "Up-to-the-minute financial insights"],
      ["Predictive Models", "Machine learning on blockchain data", "Accurate forecasting based on complete data"],
      ["Risk Assessment", "Smart contracts for automated risk calculation", "Real-time, transparent risk management"],
      ["Fraud Detection", "AI models analyzing blockchain patterns", "Quick identification of suspicious activities"],
      ["Performance Metrics", "Chaincode for calculating KPIs", "Trustworthy, consensus-based performance data"],
      ["Regulatory Reporting", "Automated report generation from blockchain", "Streamlined, accurate compliance reporting"]
    ]
  },
  {
    title: "Integration with Traditional Banking Systems",
    data: [
      ["Aspect", "Implementation", "Advantage"],
      ["Core Banking", "API gateway between Fabric and core system", "Gradual migration to blockchain"],
      ["Payment Systems", "Chaincode interfaces with SWIFT, local systems", "Blockchain security for traditional payments"],
      ["ATM Networks", "Fabric channels for ATM communications", "Secure, real-time ATM transactions"],
      ["Credit Scoring", "Blockchain-based scoring algorithms", "More accurate, comprehensive credit assessments"],
      ["Interbank Settlements", "Fabric for real-time gross settlement", "Faster, more efficient interbank transactions"],
      ["Loan Management", "Smart contracts for loan lifecycle", "Automated, transparent loan processing"]
    ]
  }
];

const HarambeeBankBlockchainFocus = () => {
  const [currentCard, setCurrentCard] = useState(0);

  const nextCard = () => {
    setCurrentCard((prev) => (prev + 1) % comparisonData.length);
  };

  const prevCard = () => {
    setCurrentCard((prev) => (prev - 1 + comparisonData.length) % comparisonData.length);
  };

  return (
    <div className="flex flex-col items-center w-full max-w-3xl mx-auto">
      <Card className="w-full">
        <CardHeader className="text-2xl font-bold text-center">
          {comparisonData[currentCard].title}
        </CardHeader>
        <CardContent>
          <table className="w-full border-collapse">
            <thead>
              <tr>
                {comparisonData[currentCard].data[0].map((header, index) => (
                  <th key={index} className="border p-2 bg-gray-100">{header}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {comparisonData[currentCard].data.slice(1).map((row, rowIndex) => (
                <tr key={rowIndex}>
                  {row.map((cell, cellIndex) => (
                    <td key={cellIndex} className="border p-2">{cell}</td>
                  ))}
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
        Card {currentCard + 1} of {comparisonData.length}
      </div>
    </div>
  );
};

export default HarambeeBankBlockchainFocus;
