import React, { useState } from 'react';
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"

const comparisonData = [
  {
    title: "Project Initiation and Planning",
    data: [
      ["Step", "Description", "Key Considerations"],
      ["Requirements Gathering", "Define specific needs for the blockchain-based bank", "Regulatory compliance, scalability, security"],
      ["Technology Stack Finalization", "Confirm Hyperledger Fabric, Django, Postman usage", "Version selection, compatibility checks"],
      ["Team Assembly", "Form teams for blockchain, backend, and testing", "Skills in Fabric, Django, and API testing"],
      ["Architecture Design", "Design overall system architecture", "Fabric network topology, Django integration points"],
      ["Development Environment Setup", "Set up local and shared development environments", "Fabric test networks, Django project structure"],
      ["Project Timeline", "Create detailed project timeline and milestones", "Account for blockchain network setup time"]
    ]
  },
  {
    title: "Hyperledger Fabric Network Setup",
    data: [
      ["Step", "Description", "Tools/Considerations"],
      ["Network Topology Design", "Define peers, orderers, and channels", "Consider bank's organizational structure"],
      ["Cryptographic Material Generation", "Create certificates and keys for network entities", "Fabric CA or external CA"],
      ["Genesis Block Creation", "Configure and generate the genesis block", "Fabric config files, channel policies"],
      ["Channel Creation", "Set up channels for different bank operations", "Privacy considerations, data segregation"],
      ["Chaincode Development", "Develop initial chaincodes for core banking functions", "Go or JavaScript, testing frameworks"],
      ["Network Deployment", "Deploy the Fabric network on target infrastructure", "On-premises vs cloud considerations"]
    ]
  },
  {
    title: "Django Backend Development",
    data: [
      ["Step", "Description", "Key Aspects"],
      ["Project Setup", "Initialize Django project and apps", "Project structure, app segregation"],
      ["Database Design", "Design PostgreSQL schema for off-chain data", "Sync with blockchain data model"],
      ["Fabric SDK Integration", "Integrate Hyperledger Fabric SDK with Django", "Connection profiles, identity management"],
      ["API Development", "Create RESTful APIs for bank operations", "Django REST framework, Fabric interactions"],
      ["Authentication System", "Implement blockchain-based user authentication", "Fabric CA integration, JWT"],
      ["Admin Interface", "Customize Django admin for blockchain operations", "Chaincode invocation, network monitoring"]
    ]
  },
  {
    title: "Smart Contract (Chaincode) Development",
    data: [
      ["Function", "Description", "Considerations"],
      ["Account Management", "Create, update, delete bank accounts", "Access control, data privacy"],
      ["Transaction Processing", "Handle deposits, withdrawals, transfers", "Atomic transactions, error handling"],
      ["Loan Management", "Implement loan application and processing logic", "Interest calculation, repayment schedules"],
      ["KYC and AML", "Develop customer verification and AML checks", "Regulatory compliance, data protection"],
      ["Reporting", "Create functions for generating financial reports", "Data aggregation, privacy preservation"],
      ["Interbank Operations", "Implement logic for interbank transactions", "Cross-channel operations, settlement"]
    ]
  },
  {
    title: "Integration and Testing",
    data: [
      ["Phase", "Description", "Tools/Techniques"],
      ["Unit Testing", "Test individual components (chaincode, Django views)", "Pytest, Fabric unit test framework"],
      ["Integration Testing", "Test interaction between Django and Fabric", "Postman collections, automated scripts"],
      ["Network Testing", "Verify Fabric network operations and performance", "Hyperledger Caliper, custom benchmarks"],
      ["Security Testing", "Conduct security audits and penetration testing", "Static analysis tools, ethical hacking"],
      ["User Acceptance Testing", "Involve stakeholders in testing", "Staging environment, real-world scenarios"],
      ["Performance Optimization", "Identify and resolve performance bottlenecks", "Profiling tools, Fabric fine-tuning"]
    ]
  },
  {
    title: "Data Migration and System Integration",
    data: [
      ["Task", "Description", "Challenges/Solutions"],
      ["Legacy Data Analysis", "Analyze existing bank data for migration", "Data cleaning, format standardization"],
      ["Blockchain Data Modeling", "Design data structure for blockchain storage", "Efficient querying, privacy considerations"],
      ["Migration Scripts", "Develop scripts to move data to blockchain", "Data integrity, transaction history preservation"],
      ["Core Banking Integration", "Connect blockchain to existing core banking system", "API development, data sync mechanisms"],
      ["Payment System Integration", "Integrate with national/international payment systems", "Compliance with payment standards"],
      ["Incremental Migration", "Plan phased migration of services to blockchain", "Minimal disruption, fallback mechanisms"]
    ]
  },
  {
    title: "Security Implementation",
    data: [
      ["Aspect", "Description", "Techniques/Tools"],
      ["Network Security", "Secure Fabric network communications", "TLS, firewalls, network segregation"],
      ["Identity Management", "Implement robust identity and access management", "Fabric CA, multi-factor authentication"],
      ["Key Management", "Secure management of cryptographic keys", "Hardware Security Modules (HSM)"],
      ["Smart Contract Security", "Ensure chaincode is secure and bug-free", "Static analysis, formal verification"],
      ["API Security", "Implement secure API endpoints", "OAuth 2.0, rate limiting, input validation"],
      ["Audit Logging", "Implement comprehensive audit logging", "Blockchain-based audit trails, log analysis tools"]
    ]
  },
  {
    title: "Regulatory Compliance Implementation",
    data: [
      ["Requirement", "Implementation Approach", "Considerations"],
      ["KYC/AML", "Blockchain-based customer verification system", "Data privacy laws, global standards"],
      ["Reporting", "Automated report generation from blockchain data", "Regulatory report formats, data accuracy"],
      ["Data Protection", "Implement data protection measures (e.g., GDPR)", "Right to be forgotten, data minimization"],
      ["Audit Trails", "Leverage blockchain for immutable audit logs", "Regulatory access, long-term data storage"],
      ["Cross-border Compliance", "Implement rules for international transactions", "Different jurisdictional requirements"],
      ["Consent Management", "Blockchain-based consent tracking", "Verifiable consent, consent revocation"]
    ]
  },
  {
    title: "User Interface Development",
    data: [
      ["Component", "Description", "Technologies"],
      ["Customer Dashboard", "Main interface for account management", "React.js, Redux for state management"],
      ["Transaction Interface", "UI for initiating and managing transactions", "React components, real-time updates"],
      ["Admin Panel", "Interface for bank administrators", "Django admin, custom Fabric management views"],
      ["Mobile App", "Develop mobile app for customer access", "React Native or Flutter"],
      ["Chatbot Integration", "AI-powered customer support chatbot", "NLP libraries, integration with Fabric"],
      ["Reporting Interface", "UI for generating and viewing reports", "Data visualization libraries (e.g., D3.js)"]
    ]
  },
  {
    title: "Deployment and DevOps",
    data: [
      ["Aspect", "Description", "Tools/Practices"],
      ["Containerization", "Containerize Fabric components and Django app", "Docker, Kubernetes"],
      ["CI/CD Pipeline", "Set up automated building and deployment", "Jenkins, GitLab CI, or GitHub Actions"],
      ["Environment Management", "Manage dev, staging, and production environments", "Terraform, Ansible"],
      ["Monitoring", "Implement system and blockchain monitoring", "Prometheus, Grafana, Hyperledger Explorer"],
      ["Backup and Recovery", "Set up backup systems for blockchain and off-chain data", "Scheduled backups, disaster recovery plans"],
      ["Scalability", "Implement auto-scaling for application components", "Kubernetes horizontal pod autoscaler"]
    ]
  },
  {
    title: "Training and Documentation",
    data: [
      ["Aspect", "Description", "Approach"],
      ["Developer Training", "Train team on Fabric and blockchain concepts", "Workshops, online courses, hands-on projects"],
      ["User Training", "Prepare training materials for bank staff", "User manuals, video tutorials, hands-on sessions"],
      ["Customer Education", "Develop resources to educate customers", "FAQ, blog posts, video explainers"],
      ["Technical Documentation", "Create comprehensive system documentation", "Architecture diagrams, API docs, runbooks"],
      ["Operational Procedures", "Document day-to-day operational procedures", "Step-by-step guides, troubleshooting manuals"],
      ["Knowledge Base", "Set up internal knowledge base for support team", "Wiki, searchable document repository"]
    ]
  }
];

const HarambeeBankImplementationProcess = () => {
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

export default HarambeeBankImplementationProcess;
