import React, { useState } from 'react';
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"

const comparisonData = [
  {
    title: "1. Understanding Blockchain Basics",
    data: [
      ["Concept", "Description", "What to Learn"],
      ["Blockchain", "A decentralized, distributed ledger technology", "Read 'Blockchain Basics' by Daniel Drescher"],
      ["Transactions", "Records of value transfer", "Understand how transactions are created and validated"],
      ["Blocks", "Groups of transactions", "Learn how blocks are formed and linked"],
      ["Consensus", "Agreement on the state of the blockchain", "Study different consensus mechanisms"],
      ["Smart Contracts", "Self-executing code on the blockchain", "Grasp the concept of automated agreements"],
      ["Next Step", "Complete a basic blockchain course on Coursera or edX", "Aim to understand these core concepts thoroughly"]
    ]
  },
  {
    title: "2. Introduction to Web Development",
    data: [
      ["Concept", "Description", "Python Analogy"],
      ["HTML", "Structure of web pages", "Like the skeleton of a Python class"],
      ["CSS", "Styling of web pages", "Similar to formatting output in Python"],
      ["JavaScript", "Client-side programming", "Like Python, but for web browsers"],
      ["HTTP", "Protocol for web communication", "Similar to how Python modules communicate"],
      ["Web Server", "Software to serve web pages", "Like running a Python script that listens for requests"],
      ["Next Step", "Complete the 'Web Development for Beginners' course on MDN", "Focus on understanding how web apps work"]
    ]
  },
  {
    title: "3. Getting Started with Django",
    data: [
      ["Concept", "Description", "Relation to Python"],
      ["Django", "Web framework for Python", "Builds on your Python knowledge"],
      ["Models", "Data structure definitions", "Similar to Python classes"],
      ["Views", "Request handlers", "Python functions for web requests"],
      ["Templates", "HTML with Django template language", "Like string formatting in Python, but for HTML"],
      ["URLs", "Routing for web requests", "Maps URLs to Python functions"],
      ["Next Step", "Complete the official Django tutorial", "Build a basic web application using Django"]
    ]
  },
  {
    title: "4. Setting Up Your Development Environment",
    data: [
      ["Tool", "Purpose", "How to Install"],
      ["Python", "Programming language", "Download from python.org (use Python 3.7+)"],
      ["pip", "Package manager for Python", "Comes with Python installation"],
      ["Virtual Environment", "Isolate project dependencies", "Use 'python -m venv myenv' to create"],
      ["Git", "Version control system", "Download from git-scm.com"],
      ["VS Code", "Code editor", "Download from code.visualstudio.com"],
      ["Next Step", "Install all tools and create a test Python project", "Ensure you can run Python in a virtual environment"]
    ]
  },
  {
    title: "5. Creating Your First Django Project",
    data: [
      ["Step", "Command", "Description"],
      ["Create a directory", "mkdir harambee_bank", "Makes a new folder for your project"],
      ["Create a virtual environment", "python -m venv env", "Sets up an isolated Python environment"],
      ["Activate the environment", "source env/bin/activate (Unix) or env\\Scripts\\activate (Windows)", "Activates the virtual environment"],
      ["Install Django", "pip install django", "Installs the Django framework"],
      ["Start a new project", "django-admin startproject harambee_bank .", "Creates a new Django project"],
      ["Run the server", "python manage.py runserver", "Starts the development server"]
    ]
  },
  {
    title: "6. Understanding Hyperledger Fabric Basics",
    data: [
      ["Concept", "Description", "Analogy"],
      ["Hyperledger Fabric", "Enterprise blockchain framework", "Like a blockchain-specific web framework"],
      ["Peer", "Node that maintains the ledger", "Similar to a database server"],
      ["Orderer", "Node that orders transactions", "Like a task scheduler"],
      ["Channel", "Private blockchain subnet", "Similar to a private chat room"],
      ["Chaincode", "Smart contracts in Fabric", "Like Python functions on the blockchain"],
      ["Next Step", "Read the Hyperledger Fabric introduction docs", "Focus on understanding the basic architecture"]
    ]
  },
  {
    title: "7. Setting Up Hyperledger Fabric",
    data: [
      ["Step", "Description", "Command/Action"],
      ["Install Prerequisites", "Set up necessary tools", "Install Docker and Docker Compose"],
      ["Download Fabric Samples", "Get example Fabric projects", "curl -sSL https://bit.ly/2ysbOFE | bash -s"],
      ["Explore Test Network", "Understand basic network setup", "cd fabric-samples/test-network"],
      ["Start the Network", "Run a basic Fabric network", "./network.sh up"],
      ["Create a Channel", "Set up a blockchain subnet", "./network.sh createChannel"],
      ["Next Step", "Run through the Fabric test network tutorial", "Understand how to interact with the network"]
    ]
  },
  {
    title: "8. Writing Your First Chaincode",
    data: [
      ["Concept", "Description", "Python Analogy"],
      ["Chaincode", "Smart contract in Fabric", "Like a Python class with specific methods"],
      ["Init", "Initialization function", "Similar to __init__ in Python classes"],
      ["Invoke", "Function to call chaincode", "Like calling a method on a Python object"],
      ["State", "Data stored on the blockchain", "Similar to instance variables in Python"],
      ["Logging", "Output for debugging", "Like print() statements in Python"],
      ["Next Step", "Write a simple chaincode in Go or JavaScript", "Start with a basic asset transfer example"]
    ]
  },
  {
    title: "9. Connecting Django to Hyperledger Fabric",
    data: [
      ["Step", "Description", "Python/Django Analogy"],
      ["Install Fabric SDK", "Add Fabric SDK to your project", "pip install fabric-sdk-py"],
      ["Configure Connection", "Set up network connection details", "Similar to database configuration in Django"],
      ["Create Fabric Client", "Initialize connection to Fabric", "Like creating a database connection"],
      ["Invoke Chaincode", "Call smart contract functions", "Similar to calling a Python function"],
      ["Query Ledger", "Retrieve data from the blockchain", "Like querying a database in Django"],
      ["Next Step", "Create a Django view that interacts with Fabric", "Start with a simple query or invoke operation"]
    ]
  },
  {
    title: "10. Basic Banking Operations with Blockchain",
    data: [
      ["Operation", "Traditional Method", "Blockchain Method"],
      ["Create Account", "Insert record in database", "Invoke chaincode to create account on ledger"],
      ["Check Balance", "Query database", "Query chaincode for current state"],
      ["Transfer Money", "Update two database records", "Invoke chaincode to create a transfer transaction"],
      ["Transaction History", "Query database with filters", "Query blockchain for transaction records"],
      ["Close Account", "Delete or flag database record", "Invoke chaincode to mark account as closed"],
      ["Next Step", "Implement these operations in your Django app", "Create views and templates for each operation"]
    ]
  },
  {
    title: "11. Testing Your Blockchain Bank",
    data: [
      ["Test Type", "Description", "How to Implement"],
      ["Unit Tests", "Test individual functions", "Use Python's unittest framework"],
      ["Integration Tests", "Test interaction between components", "Test Django views that interact with Fabric"],
      ["Chaincode Tests", "Test smart contract logic", "Write tests in the chaincode's language (Go/JavaScript)"],
      ["Network Tests", "Test blockchain network operations", "Use Fabric's test utilities"],
      ["User Interface Tests", "Test the web interface", "Use tools like Selenium with Python"],
      ["Next Step", "Write tests for each component of your system", "Start with unit tests for your Django views"]
    ]
  }
];

const BlockchainBankingAbsoluteBeginnerGuide = () => {
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

export default BlockchainBankingAbsoluteBeginnerGuide;
