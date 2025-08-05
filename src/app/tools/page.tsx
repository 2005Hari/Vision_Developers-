"use client";

import { useState } from "react";
import Navigation from "@/components/sections/Navigation";
import Footer from "@/components/sections/Footer";
import { Calculator, TrendingUp, Home, BarChart3, FileText, Search, X, ArrowLeft } from "lucide-react";

export default function Tools() {
  const [activeTool, setActiveTool] = useState<string | null>(null);
  const [mortgageData, setMortgageData] = useState({
    loanAmount: '',
    interestRate: '',
    loanTerm: '',
    monthlyPayment: 0
  });
  const [investmentData, setInvestmentData] = useState({
    purchasePrice: '',
    rentalIncome: '',
    expenses: '',
    appreciation: '',
    roi: 0
  });
  const [propertyData, setPropertyData] = useState({
    address: '',
    bedrooms: '',
    bathrooms: '',
    squareMeters: '',
    estimatedValue: 0
  });
  const [loanComparison, setLoanComparison] = useState({
    loan1: { amount: '', rate: '', term: '', monthly: 0 },
    loan2: { amount: '', rate: '', term: '', monthly: 0 },
    difference: 0
  });

  const calculateMortgage = () => {
    const principal = parseFloat(mortgageData.loanAmount);
    const rate = parseFloat(mortgageData.interestRate) / 100 / 12;
    const term = parseFloat(mortgageData.loanTerm) * 12;
    
    if (principal && rate && term) {
      const monthlyPayment = (principal * rate * Math.pow(1 + rate, term)) / (Math.pow(1 + rate, term) - 1);
      setMortgageData(prev => ({ ...prev, monthlyPayment: monthlyPayment }));
    }
  };

  const calculateROI = () => {
    const purchasePrice = parseFloat(investmentData.purchasePrice);
    const rentalIncome = parseFloat(investmentData.rentalIncome) * 12;
    const expenses = parseFloat(investmentData.expenses) * 12;
    const appreciation = parseFloat(investmentData.appreciation) / 100;
    
    if (purchasePrice && rentalIncome && expenses !== undefined) {
      const netIncome = rentalIncome - expenses;
      const appreciationValue = purchasePrice * appreciation;
      const totalReturn = netIncome + appreciationValue;
      const roi = (totalReturn / purchasePrice) * 100;
      setInvestmentData(prev => ({ ...prev, roi: roi }));
    }
  };

  const estimatePropertyValue = () => {
    const bedrooms = parseFloat(propertyData.bedrooms);
    const bathrooms = parseFloat(propertyData.bathrooms);
    const squareMeters = parseFloat(propertyData.squareMeters);
    
    if (bedrooms && bathrooms && squareMeters) {
      // Simple estimation formula (can be made more sophisticated)
      const baseValue = 500000; // Base value for 3 bed, 2 bath, 150sqm
      const bedroomFactor = (bedrooms / 3) * 1.2;
      const bathroomFactor = (bathrooms / 2) * 1.1;
      const sizeFactor = (squareMeters / 150) * 1.3;
      
      const estimatedValue = baseValue * bedroomFactor * bathroomFactor * sizeFactor;
      setPropertyData(prev => ({ ...prev, estimatedValue: estimatedValue }));
    }
  };

  const compareLoans = () => {
    const calculateMonthly = (amount: string, rate: string, term: string) => {
      const principal = parseFloat(amount);
      const monthlyRate = parseFloat(rate) / 100 / 12;
      const months = parseFloat(term) * 12;
      
      if (principal && monthlyRate && months) {
        return (principal * monthlyRate * Math.pow(1 + monthlyRate, months)) / (Math.pow(1 + monthlyRate, months) - 1);
      }
      return 0;
    };

    const monthly1 = calculateMonthly(loanComparison.loan1.amount, loanComparison.loan1.rate, loanComparison.loan1.term);
    const monthly2 = calculateMonthly(loanComparison.loan2.amount, loanComparison.loan2.rate, loanComparison.loan2.term);
    
    setLoanComparison(prev => ({
      ...prev,
      loan1: { ...prev.loan1, monthly: monthly1 },
      loan2: { ...prev.loan2, monthly: monthly2 },
      difference: Math.abs(monthly1 - monthly2)
    }));
  };

  const renderTool = () => {
    switch (activeTool) {
      case 'mortgage':
        return (
          <div className="bg-white rounded-lg shadow-lg p-8 max-w-2xl mx-auto">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-primary-dark">Mortgage Calculator</h2>
              <button onClick={() => setActiveTool(null)} className="text-gray-500 hover:text-gray-700">
                <X className="w-6 h-6" />
              </button>
            </div>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Loan Amount ($)</label>
                <input
                  type="number"
                  value={mortgageData.loanAmount}
                  onChange={(e) => setMortgageData(prev => ({ ...prev, loanAmount: e.target.value }))}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-dark"
                  placeholder="500,000"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Interest Rate (%)</label>
                <input
                  type="number"
                  value={mortgageData.interestRate}
                  onChange={(e) => setMortgageData(prev => ({ ...prev, interestRate: e.target.value }))}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-dark"
                  placeholder="4.5"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Loan Term (Years)</label>
                <input
                  type="number"
                  value={mortgageData.loanTerm}
                  onChange={(e) => setMortgageData(prev => ({ ...prev, loanTerm: e.target.value }))}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-dark"
                  placeholder="30"
                />
              </div>
              <button
                onClick={calculateMortgage}
                className="w-full bg-primary-dark text-white py-3 rounded-md hover:bg-primary-dark/90 transition-colors"
              >
                Calculate Payment
              </button>
              {mortgageData.monthlyPayment > 0 && (
                <div className="bg-green-50 border border-green-200 rounded-md p-4">
                  <h3 className="text-lg font-semibold text-green-800">Monthly Payment</h3>
                  <p className="text-2xl font-bold text-green-600">${mortgageData.monthlyPayment.toFixed(2)}</p>
                </div>
              )}
            </div>
          </div>
        );

      case 'investment':
        return (
          <div className="bg-white rounded-lg shadow-lg p-8 max-w-2xl mx-auto">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-primary-dark">Investment Calculator</h2>
              <button onClick={() => setActiveTool(null)} className="text-gray-500 hover:text-gray-700">
                <X className="w-6 h-6" />
              </button>
            </div>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Purchase Price ($)</label>
                <input
                  type="number"
                  value={investmentData.purchasePrice}
                  onChange={(e) => setInvestmentData(prev => ({ ...prev, purchasePrice: e.target.value }))}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-dark"
                  placeholder="600,000"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Monthly Rental Income ($)</label>
                <input
                  type="number"
                  value={investmentData.rentalIncome}
                  onChange={(e) => setInvestmentData(prev => ({ ...prev, rentalIncome: e.target.value }))}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-dark"
                  placeholder="2,500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Monthly Expenses ($)</label>
                <input
                  type="number"
                  value={investmentData.expenses}
                  onChange={(e) => setInvestmentData(prev => ({ ...prev, expenses: e.target.value }))}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-dark"
                  placeholder="800"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Annual Appreciation (%)</label>
                <input
                  type="number"
                  value={investmentData.appreciation}
                  onChange={(e) => setInvestmentData(prev => ({ ...prev, appreciation: e.target.value }))}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-dark"
                  placeholder="3"
                />
              </div>
              <button
                onClick={calculateROI}
                className="w-full bg-primary-dark text-white py-3 rounded-md hover:bg-primary-dark/90 transition-colors"
              >
                Calculate ROI
              </button>
              {investmentData.roi > 0 && (
                <div className="bg-blue-50 border border-blue-200 rounded-md p-4">
                  <h3 className="text-lg font-semibold text-blue-800">Return on Investment</h3>
                  <p className="text-2xl font-bold text-blue-600">{investmentData.roi.toFixed(2)}%</p>
                </div>
              )}
            </div>
          </div>
        );

      case 'valuation':
        return (
          <div className="bg-white rounded-lg shadow-lg p-8 max-w-2xl mx-auto">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-primary-dark">Property Valuation</h2>
              <button onClick={() => setActiveTool(null)} className="text-gray-500 hover:text-gray-700">
                <X className="w-6 h-6" />
              </button>
            </div>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Property Address</label>
                <input
                  type="text"
                  value={propertyData.address}
                  onChange={(e) => setPropertyData(prev => ({ ...prev, address: e.target.value }))}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-dark"
                  placeholder="123 Main Street, Adelaide"
                />
              </div>
              <div className="grid grid-cols-3 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Bedrooms</label>
                  <input
                    type="number"
                    value={propertyData.bedrooms}
                    onChange={(e) => setPropertyData(prev => ({ ...prev, bedrooms: e.target.value }))}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-dark"
                    placeholder="3"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Bathrooms</label>
                  <input
                    type="number"
                    value={propertyData.bathrooms}
                    onChange={(e) => setPropertyData(prev => ({ ...prev, bathrooms: e.target.value }))}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-dark"
                    placeholder="2"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Square Meters</label>
                  <input
                    type="number"
                    value={propertyData.squareMeters}
                    onChange={(e) => setPropertyData(prev => ({ ...prev, squareMeters: e.target.value }))}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-dark"
                    placeholder="150"
                  />
                </div>
              </div>
              <button
                onClick={estimatePropertyValue}
                className="w-full bg-primary-dark text-white py-3 rounded-md hover:bg-primary-dark/90 transition-colors"
              >
                Get Estimated Value
              </button>
              {propertyData.estimatedValue > 0 && (
                <div className="bg-purple-50 border border-purple-200 rounded-md p-4">
                  <h3 className="text-lg font-semibold text-purple-800">Estimated Property Value</h3>
                  <p className="text-2xl font-bold text-purple-600">${propertyData.estimatedValue.toLocaleString()}</p>
                </div>
              )}
            </div>
          </div>
        );

      case 'market':
        return (
          <div className="bg-white rounded-lg shadow-lg p-8 max-w-4xl mx-auto">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-primary-dark">Market Analysis</h2>
              <button onClick={() => setActiveTool(null)} className="text-gray-500 hover:text-gray-700">
                <X className="w-6 h-6" />
              </button>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-primary-dark">Current Market Trends</h3>
                <div className="space-y-3">
                  <div className="bg-green-50 p-4 rounded-md">
                    <h4 className="font-semibold text-green-800">Median House Price</h4>
                    <p className="text-2xl font-bold text-green-600">$750,000</p>
                    <p className="text-sm text-green-700">+5.2% from last year</p>
                  </div>
                  <div className="bg-blue-50 p-4 rounded-md">
                    <h4 className="font-semibold text-blue-800">Days on Market</h4>
                    <p className="text-2xl font-bold text-blue-600">28 days</p>
                    <p className="text-sm text-blue-700">-12% from last year</p>
                  </div>
                  <div className="bg-orange-50 p-4 rounded-md">
                    <h4 className="font-semibold text-orange-800">Rental Yield</h4>
                    <p className="text-2xl font-bold text-orange-600">4.2%</p>
                    <p className="text-sm text-orange-700">Average for the area</p>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-primary-dark">Suburb Performance</h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center p-3 bg-gray-50 rounded-md">
                    <span className="font-medium">Brighton</span>
                    <span className="text-green-600 font-semibold">+8.5%</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-gray-50 rounded-md">
                    <span className="font-medium">Payneham</span>
                    <span className="text-green-600 font-semibold">+6.2%</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-gray-50 rounded-md">
                    <span className="font-medium">Greenacres</span>
                    <span className="text-green-600 font-semibold">+4.8%</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-gray-50 rounded-md">
                    <span className="font-medium">Hillcrest</span>
                    <span className="text-green-600 font-semibold">+7.1%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      case 'comparison':
        return (
          <div className="bg-white rounded-lg shadow-lg p-8 max-w-4xl mx-auto">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-primary-dark">Loan Comparison</h2>
              <button onClick={() => setActiveTool(null)} className="text-gray-500 hover:text-gray-700">
                <X className="w-6 h-6" />
              </button>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-primary-dark">Loan Option 1</h3>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Loan Amount ($)</label>
                    <input
                      type="number"
                      value={loanComparison.loan1.amount}
                      onChange={(e) => setLoanComparison(prev => ({ ...prev, loan1: { ...prev.loan1, amount: e.target.value } }))}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-dark"
                      placeholder="500,000"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Interest Rate (%)</label>
                    <input
                      type="number"
                      value={loanComparison.loan1.rate}
                      onChange={(e) => setLoanComparison(prev => ({ ...prev, loan1: { ...prev.loan1, rate: e.target.value } }))}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-dark"
                      placeholder="4.5"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Loan Term (Years)</label>
                    <input
                      type="number"
                      value={loanComparison.loan1.term}
                      onChange={(e) => setLoanComparison(prev => ({ ...prev, loan1: { ...prev.loan1, term: e.target.value } }))}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-dark"
                      placeholder="30"
                    />
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-primary-dark">Loan Option 2</h3>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Loan Amount ($)</label>
                    <input
                      type="number"
                      value={loanComparison.loan2.amount}
                      onChange={(e) => setLoanComparison(prev => ({ ...prev, loan2: { ...prev.loan2, amount: e.target.value } }))}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-dark"
                      placeholder="500,000"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Interest Rate (%)</label>
                    <input
                      type="number"
                      value={loanComparison.loan2.rate}
                      onChange={(e) => setLoanComparison(prev => ({ ...prev, loan2: { ...prev.loan2, rate: e.target.value } }))}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-dark"
                      placeholder="4.2"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Loan Term (Years)</label>
                    <input
                      type="number"
                      value={loanComparison.loan2.term}
                      onChange={(e) => setLoanComparison(prev => ({ ...prev, loan2: { ...prev.loan2, term: e.target.value } }))}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-dark"
                      placeholder="30"
                    />
                  </div>
                </div>
              </div>
            </div>
            <button
              onClick={compareLoans}
              className="w-full bg-primary-dark text-white py-3 rounded-md hover:bg-primary-dark/90 transition-colors mt-6"
            >
              Compare Loans
            </button>
            {(loanComparison.loan1.monthly > 0 || loanComparison.loan2.monthly > 0) && (
              <div className="mt-6 grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 border border-blue-200 rounded-md p-4">
                  <h3 className="text-lg font-semibold text-blue-800">Option 1 Monthly</h3>
                  <p className="text-2xl font-bold text-blue-600">${loanComparison.loan1.monthly.toFixed(2)}</p>
                </div>
                <div className="bg-green-50 border border-green-200 rounded-md p-4">
                  <h3 className="text-lg font-semibold text-green-800">Option 2 Monthly</h3>
                  <p className="text-2xl font-bold text-green-600">${loanComparison.loan2.monthly.toFixed(2)}</p>
                </div>
                <div className="bg-purple-50 border border-purple-200 rounded-md p-4">
                  <h3 className="text-lg font-semibold text-purple-800">Difference</h3>
                  <p className="text-2xl font-bold text-purple-600">${loanComparison.difference.toFixed(2)}</p>
                </div>
              </div>
            )}
          </div>
        );

      case 'search':
        return (
          <div className="bg-white rounded-lg shadow-lg p-8 max-w-4xl mx-auto">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-primary-dark">Property Search</h2>
              <button onClick={() => setActiveTool(null)} className="text-gray-500 hover:text-gray-700">
                <X className="w-6 h-6" />
              </button>
            </div>
            <div className="space-y-6">
              <div className="grid md:grid-cols-3 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Location</label>
                  <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-dark">
                    <option>All Locations</option>
                    <option>Brighton</option>
                    <option>Payneham</option>
                    <option>Greenacres</option>
                    <option>Hillcrest</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Property Type</label>
                  <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-dark">
                    <option>All Types</option>
                    <option>House</option>
                    <option>Apartment</option>
                    <option>Townhouse</option>
                    <option>Land</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Price Range</label>
                  <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-dark">
                    <option>Any Price</option>
                    <option>$300k - $500k</option>
                    <option>$500k - $750k</option>
                    <option>$750k - $1M</option>
                    <option>$1M+</option>
                  </select>
                </div>
              </div>
              <div className="grid md:grid-cols-3 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Bedrooms</label>
                  <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-dark">
                    <option>Any</option>
                    <option>1+</option>
                    <option>2+</option>
                    <option>3+</option>
                    <option>4+</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Bathrooms</label>
                  <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-dark">
                    <option>Any</option>
                    <option>1+</option>
                    <option>2+</option>
                    <option>3+</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Features</label>
                  <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-dark">
                    <option>Any Features</option>
                    <option>Garage</option>
                    <option>Pool</option>
                    <option>Garden</option>
                    <option>Renovated</option>
                  </select>
                </div>
              </div>
              <button className="w-full bg-primary-dark text-white py-3 rounded-md hover:bg-primary-dark/90 transition-colors">
                Search Properties
              </button>
              
              {/* Sample Results */}
              <div className="mt-8">
                <h3 className="text-lg font-semibold text-primary-dark mb-4">Sample Properties</h3>
                <div className="space-y-4">
                  <div className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                    <div className="flex justify-between items-start">
                      <div>
                        <h4 className="font-semibold text-lg">1 Essex Street, Brighton</h4>
                        <p className="text-gray-600">3 bed, 2 bath • 150sqm</p>
                        <p className="text-green-600 font-semibold">$750,000</p>
                      </div>
                      <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-sm">Available</span>
                    </div>
                  </div>
                  <div className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                    <div className="flex justify-between items-start">
                      <div>
                        <h4 className="font-semibold text-lg">37 Arthur Street, Payneham</h4>
                        <p className="text-gray-600">4 bed, 2 bath • 180sqm</p>
                        <p className="text-green-600 font-semibold">$850,000</p>
                      </div>
                      <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-sm">Available</span>
                    </div>
                  </div>
                  <div className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                    <div className="flex justify-between items-start">
                      <div>
                        <h4 className="font-semibold text-lg">63 Floriedale Road, Greenacres</h4>
                        <p className="text-gray-600">3 bed, 1 bath • 140sqm</p>
                        <p className="text-green-600 font-semibold">$680,000</p>
                      </div>
                      <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-sm">Available</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <>
      <Navigation />
      <main className="pt-24">
        {activeTool ? (
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[1200px] py-16">
            {renderTool()}
          </div>
        ) : (
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[1200px] py-16">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-dark mb-6">
                Real Estate Tools
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Access our comprehensive suite of real estate tools and calculators to help you make informed decisions about your property investment.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              <div className="bg-white rounded-lg shadow-lg p-6 border border-gray-200 hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 bg-primary-dark rounded-lg flex items-center justify-center mb-4">
                  <Calculator className="text-white text-2xl" />
                </div>
                <h3 className="text-xl font-semibold text-primary-dark mb-2">Mortgage Calculator</h3>
                <p className="text-gray-600 mb-4">Calculate your monthly mortgage payments, interest rates, and loan terms.</p>
                <button 
                  onClick={() => setActiveTool('mortgage')}
                  className="bg-primary-dark text-white px-6 py-2 rounded-lg hover:bg-primary-dark/90 transition-colors"
                >
                  Launch Calculator
                </button>
              </div>
              
              <div className="bg-white rounded-lg shadow-lg p-6 border border-gray-200 hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 bg-primary-dark rounded-lg flex items-center justify-center mb-4">
                  <TrendingUp className="text-white text-2xl" />
                </div>
                <h3 className="text-xl font-semibold text-primary-dark mb-2">Investment Calculator</h3>
                <p className="text-gray-600 mb-4">Analyze potential returns on your real estate investment properties.</p>
                <button 
                  onClick={() => setActiveTool('investment')}
                  className="bg-primary-dark text-white px-6 py-2 rounded-lg hover:bg-primary-dark/90 transition-colors"
                >
                  Launch Calculator
                </button>
              </div>
              
              <div className="bg-white rounded-lg shadow-lg p-6 border border-gray-200 hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 bg-primary-dark rounded-lg flex items-center justify-center mb-4">
                  <Home className="text-white text-2xl" />
                </div>
                <h3 className="text-xl font-semibold text-primary-dark mb-2">Property Valuation</h3>
                <p className="text-gray-600 mb-4">Get an estimated value for your property based on market data.</p>
                <button 
                  onClick={() => setActiveTool('valuation')}
                  className="bg-primary-dark text-white px-6 py-2 rounded-lg hover:bg-primary-dark/90 transition-colors"
                >
                  Get Valuation
                </button>
              </div>
              
              <div className="bg-white rounded-lg shadow-lg p-6 border border-gray-200 hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 bg-primary-dark rounded-lg flex items-center justify-center mb-4">
                  <BarChart3 className="text-white text-2xl" />
                </div>
                <h3 className="text-xl font-semibold text-primary-dark mb-2">Market Analysis</h3>
                <p className="text-gray-600 mb-4">View current market trends and property price movements.</p>
                <button 
                  onClick={() => setActiveTool('market')}
                  className="bg-primary-dark text-white px-6 py-2 rounded-lg hover:bg-primary-dark/90 transition-colors"
                >
                  View Analysis
                </button>
              </div>
              
              <div className="bg-white rounded-lg shadow-lg p-6 border border-gray-200 hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 bg-primary-dark rounded-lg flex items-center justify-center mb-4">
                  <FileText className="text-white text-2xl" />
                </div>
                <h3 className="text-xl font-semibold text-primary-dark mb-2">Loan Comparison</h3>
                <p className="text-gray-600 mb-4">Compare different loan options and find the best rates.</p>
                <button 
                  onClick={() => setActiveTool('comparison')}
                  className="bg-primary-dark text-white px-6 py-2 rounded-lg hover:bg-primary-dark/90 transition-colors"
                >
                  Compare Loans
                </button>
              </div>
              
              <div className="bg-white rounded-lg shadow-lg p-6 border border-gray-200 hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 bg-primary-dark rounded-lg flex items-center justify-center mb-4">
                  <Search className="text-white text-2xl" />
                </div>
                <h3 className="text-xl font-semibold text-primary-dark mb-2">Property Search</h3>
                <p className="text-gray-600 mb-4">Search for properties with advanced filters and criteria.</p>
                <button 
                  onClick={() => setActiveTool('search')}
                  className="bg-primary-dark text-white px-6 py-2 rounded-lg hover:bg-primary-dark/90 transition-colors"
                >
                  Start Search
                </button>
              </div>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-8 text-center">
              <h2 className="text-3xl font-bold text-primary-dark mb-4">Coming Soon</h2>
              <p className="text-gray-600 mb-6">
                We're constantly developing new tools to help you make better real estate decisions. 
                Stay tuned for more calculators and analysis tools.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <span className="bg-white px-4 py-2 rounded-full text-sm text-gray-600 border">Rental Yield Calculator</span>
                <span className="bg-white px-4 py-2 rounded-full text-sm text-gray-600 border">Stamp Duty Calculator</span>
                <span className="bg-white px-4 py-2 rounded-full text-sm text-gray-600 border">Property Tax Estimator</span>
                <span className="bg-white px-4 py-2 rounded-full text-sm text-gray-600 border">Renovation Cost Calculator</span>
              </div>
            </div>
          </div>
        )}
      </main>
      <Footer />
    </>
  );
} 