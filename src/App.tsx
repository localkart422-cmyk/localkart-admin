import React, { useState } from 'react';
import { 
  Users, Store, Bike, DollarSign, ShieldCheck, 
  Search, Filter, CheckCircle2, XCircle, ChevronRight, 
  TrendingUp, ArrowUpRight, Wallet, Clock, AlertCircle 
} from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState<'users' | 'shops' | 'delivery' | 'commission'>('users');
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');

  // Dummy stats data
  const stats = {
    totalUsers: 1245,
    activeShops: 86,
    deliveryPartners: 142,
    platformCommission: '8% / 4%'
  };

  // Mock data for tables
  const usersList = [
    { id: 1, name: 'Ananya Rao', email: 'ananya.rao@example.com', role: 'Customer', address: 'House 12, Main Street, Near Temple, Pincode: 800001', balance: '₹450', preference: 'Instant UPI', status: 'Approved' },
    { id: 2, name: 'Rahul Sharma', email: 'rahul.s@example.com', role: 'Customer', address: 'Flat 4B, Boring Road, Patna, Pincode: 800001', balance: '₹1,200', preference: 'Bank Transfer', status: 'Approved' },
    { id: 3, name: 'Priya Singh', email: 'priya.s@example.com', role: 'Customer', address: 'Gandhi Maidan East, Patna, Pincode: 800004', balance: '₹85', preference: 'Instant UPI', status: 'Pending' }
  ];

  const shopsList = [
    { id: 1, name: 'Bhatia General Store', owner: 'Vikram Bhatia', category: 'Groceries', address: 'Kankarbagh Main Road, Patna', commission: '8%', settlement: 'Auto (1%)', status: 'Active' },
    { id: 2, name: 'Patna Fresh Veggies', owner: 'Manoj Kumar', category: 'Vegetables', address: 'Boring Canal Road, Patna', commission: '8%', settlement: 'Auto (1%)', status: 'Active' },
    { id: 3, name: 'Daily Needs Mart', owner: 'Sanjay Verma', category: 'General', address: 'Exhibition Road, Patna', commission: '8%', settlement: 'Manual', status: 'Pending' }
  ];

  const deliveryList = [
    { id: 1, name: 'Amit Kumar', phone: '+91 98765 43210', vehicle: 'EV Scooter (Ola Roadster)', zone: 'Zone 1 - Kankarbagh', earnings: '₹3,450', status: 'Online' },
    { id: 2, name: 'Ranjeet Yadav', phone: '+91 91234 56789', vehicle: 'Motorcycle', zone: 'Zone 2 - Boring Road', earnings: '₹2,890', status: 'Online' }
  ];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans">
      {/* Top Header */}
      <header className="bg-white border-b border-slate-200 sticky top-0 z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="bg-indigo-600 text-white p-2 rounded-xl font-bold text-xl tracking-wider">LK</div>
            <div>
              <h1 className="text-lg font-bold text-slate-900 leading-tight">LocalKart Admin Dashboard</h1>
              <p className="text-xs text-slate-500">Manage users, 8%/4% commissions, auto payouts & 1% instant withdrawals.</p>
            </div>
          </div>
          <div className="flex items-center space-x-3">
            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-emerald-50 text-emerald-700 border border-emerald-200">
              <span className="w-2 h-2 mr-1.5 bg-emerald-500 rounded-full animate-pulse"></span>
              Live System
            </span>
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        
        {/* Metric Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-8">
          <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm flex items-center justify-between">
            <div>
              <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Total Users</p>
              <h3 className="text-2xl font-ext500 font-bold text-slate-900 mt-1">{stats.totalUsers}</h3>
            </div>
            <div className="p-3 bg-indigo-50 text-indigo-600 rounded-xl"><Users className="w-6 h-6" /></div>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm flex items-center justify-between">
            <div>
              <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Active Shops</p>
              <h3 className="text-2xl font-bold text-slate-900 mt-1">{stats.activeShops}</h3>
            </div>
            <div className="p-3 bg-blue-50 text-blue-600 rounded-xl"><Store className="w-6 h-6" /></div>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm flex items-center justify-between">
            <div>
              <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Delivery Partners</p>
              <h3 className="text-2xl font-bold text-slate-900 mt-1">{stats.deliveryPartners}</h3>
            </div>
            <div className="p-3 bg-amber-50 text-amber-600 rounded-xl"><Bike className="w-6 h-6" /></div>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm flex items-center justify-between">
            <div>
              <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Platform Commission</p>
              <h3 className="text-2xl font-bold text-slate-900 mt-1">{stats.platformCommission}</h3>
            </div>
            <div className="p-3 bg-emerald-50 text-emerald-600 rounded-xl"><DollarSign className="w-6 h-6" /></div>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="flex border-b border-slate-200 mb-6 space-x-8">
          <button 
            onClick={() => setActiveTab('users')} 
            className={`pb-3 text-sm font-semibold border-b-2 transition-colors ${activeTab === 'users' ? 'border-indigo-600 text-indigo-600' : 'border-transparent text-slate-500 hover:text-slate-700'}`}>
            Users Management
          </button>
          <button 
            onClick={() => setActiveTab('shops')} 
            className={`pb-3 text-sm font-semibold border-b-2 transition-colors ${activeTab === 'shops' ? 'border-indigo-600 text-indigo-600' : 'border-transparent text-slate-500 hover:text-slate-700'}`}>
            Shops & Commission (8%)
          </button>
          <button 
            onClick={() => setActiveTab('delivery')} 
            className={`pb-3 text-sm font-semibold border-b-2 transition-colors ${activeTab === 'delivery' ? 'border-indigo-600 text-indigo-600' : 'border-transparent text-slate-500 hover:text-slate-700'}`}>
            Delivery Partners (4%)
          </button>
          <button 
            onClick={() => setActiveTab('commission')} 
            className={`pb-3 text-sm font-semibold border-b-2 transition-colors ${activeTab === 'commission' ? 'border-indigo-600 text-indigo-600' : 'border-transparent text-slate-500 hover:text-slate-700'}`}>
            Auto Payouts & 1% Instant
          </button>
        </div>

        {/* Filter & Search Bar */}
        <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-sm mb-6 flex flex-col sm:flex-row gap-4 items-center justify-between">
          <div className="relative w-full sm:w-80">
            <Search className="absolute left-3 top-2.5 text-slate-400 w-5 h-5" />
            <input 
              type="text" 
              placeholder="Search user, shop, phone..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>
          <div className="flex items-center space-x-3 w-full sm:w-auto justify-end">
            <Filter className="text-slate-400 w-4 h-4" />
            <select 
              value={statusFilter} 
              onChange={(e) => setStatusFilter(e.target.value)}
              className="border border-slate-200 rounded-xl px-3 py-2 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500">
              <option value="all">All Status</option>
              <option value="active">Active / Approved</option>
              <option value="pending">Pending</option>
            </select>
          </div>
        </div>

        {/* Tab 1: Users Table */}
        {activeTab === 'users' && (
          <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
            <div className="px-6 py-4 border-b border-slate-200 font-bold text-slate-800">Registered Users & Wallet Payout Preferences</div>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-slate-50 text-xs font-semibold text-slate-500 uppercase tracking-wider border-b border-slate-200">
                    <th className="px-6 py-3">User Details</th>
                    <th className="px-6 py-3">Role</th>
                    <th className="px-6 py-3">Address & Pincode</th>
                    <th className="px-6 py-3">Wallet Balance</th>
                    <th className="px-6 py-3">Payout Preference</th>
                    <th className="px-6 py-3">Status</th>
                    <th className="px-6 py-3 text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-sm">
                  {usersList.map((u) => (
                    <tr key={u.id} className="hover:bg-slate-50/50">
                      <td className="px-6 py-4 font-medium text-slate-900">
                        {u.name}
                        <div className="text-xs text-slate-400 font-normal">{u.email}</div>
                      </td>
                      <td className="px-6 py-4 text-slate-600">{u.role}</td>
                      <td className="px-6 py-4 text-slate-600 text-xs max-w-xs">{u.address}</td>
                      <td className="px-6 py-4 font-semibold text-indigo-600">{u.balance}</td>
                      <td className="px-6 py-4 text-slate-600">{u.preference}</td>
                      <td className="px-6 py-4">
                        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${u.status === 'Approved' ? 'bg-emerald-50 text-emerald-700' : 'bg-amber-50 text-amber-700'}`}>
                          {u.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-right">
                        <button className="text-indigo-600 hover:text-indigo-800 font-medium text-xs bg-indigo-50 px-3 py-1.5 rounded-lg transition-colors">Manage</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Tab 2: Shops Table */}
        {activeTab === 'shops' && (
          <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
            <div className="px-6 py-4 border-b border-slate-200 font-bold text-slate-800">Partner Shops & 8% Commission Setup</div>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-slate-50 text-xs font-semibold text-slate-500 uppercase tracking-wider border-b border-slate-200">
                    <th className="px-6 py-3">Shop Name</th>
                    <th className="px-6 py-3">Owner</th>
                    <th className="px-6 py-3">Category</th>
                    <th className="px-6 py-3">Address</th>
                    <th className="px-6 py-3">Commission Rate</th>
                    <th className="px-6 py-3">Settlement</th>
                    <th className="px-6 py-3">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-sm">
                  {shopsList.map((s) => (
                    <tr key={s.id} className="hover:bg-slate-50/50">
                      <td className="px-6 py-4 font-medium text-slate-900">{s.name}</td>
                      <td className="px-6 py-4 text-slate-600">{s.owner}</td>
                      <td className="px-6 py-4 text-slate-600">{s.category}</td>
                      <td className="px-6 py-4 text-slate-600 text-xs">{s.address}</td>
                      <td className="px-6 py-4 font-semibold text-emerald-600">{s.commission}</td>
                      <td className="px-6 py-4 text-slate-600">{s.settlement}</td>
                      <td className="px-6 py-4">
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-emerald-50 text-emerald-700">
                          {s.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Tab 3: Delivery Partners */}
        {activeTab === 'delivery' && (
          <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
            <div className="px-6 py-4 border-b border-slate-200 font-bold text-slate-800">Delivery Partners & 4% Commission Allocation</div>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-slate-50 text-xs font-semibold text-slate-500 uppercase tracking-wider border-b border-slate-200">
                    <th className="px-6 py-3">Partner Name</th>
                    <th className="px-6 py-3">Phone</th>
                    <th className="px-6 py-3">Vehicle</th>
                    <th className="px-6 py-3">Operating Zone</th>
                    <th className="px-6 py-3">Total Earnings</th>
                    <th className="px-6 py-3">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-sm">
                  {deliveryList.map((d) => (
                    <tr key={d.id} className="hover:bg-slate-50/50">
                      <td className="px-6 py-4 font-medium text-slate-900">{d.name}</td>
                      <td className="px-6 py-4 text-slate-600">{d.phone}</td>
                      <td className="px-6 py-4 text-slate-600">{d.vehicle}</td>
                      <td className="px-6 py-4 text-slate-600 text-xs">{d.zone}</td>
                      <td className="px-6 py-4 font-semibold text-indigo-600">{d.earnings}</td>
                      <td className="px-6 py-4">
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-50 text-blue-700">
                          {d.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Tab 4: Commission & Payouts Info */}
        {activeTab === 'commission' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
              <h3 className="text-base font-bold text-slate-900 mb-4 flex items-center">
                <Wallet className="w-5 h-5 mr-2 text-indigo-600" /> Auto Payout & Instant Withdrawal Rules
              </h3>
              <ul className="space-y-3 text-sm text-slate-600">
                <li className="flex items-start">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 mr-2 mt-0.5 shrink-0" />
                  <span><strong>Standard Auto Payouts:</strong> Processed automatically at midnight for all verified sellers and delivery partners.</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 mr-2 mt-0.5 shrink-0" />
                  <span><strong>1% Instant Withdrawal:</strong> Allows partners to withdraw their active balance instantly with a nominal 1% gateway fee.</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 mr-2 mt-0.5 shrink-0" />
                  <span><strong>Secure UPI Integration:</strong> Direct bank account or UPI handle verification via automated gateway hooks.</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
              <h3 className="text-base font-bold text-slate-900 mb-4 flex items-center">
                <DollarSign className="w-5 h-5 mr-2 text-emerald-600" /> Revenue Split Structure
              </h3>
              <div className="space-y-4">
                <div className="p-4 bg-slate-50 rounded-xl border border-slate-100 flex items-center justify-between">
                  <div>
                    <h4 className="font-semibold text-slate-800 text-sm">Shop Commission Split</h4>
                    <p className="text-xs text-slate-500">Deducted directly from total order value per transaction.</p>
                  </div>
                  <span className="text-lg font-bold text-indigo-600">8%</span>
                </div>
                <div className="p-4 bg-slate-50 rounded-xl border border-slate-100 flex items-center justify-between">
                  <div>
                    <h4 className="font-semibold text-slate-800 text-sm">Delivery Partner Commission</h4>
                    <p className="text-xs text-slate-500">Allocated for local rapid fulfillment.</p>
                  </div>
                  <span className="text-lg font-bold text-blue-600">4%</span>
                </div>
              </div>
            </div>
          </div>
        )}

      </main>
    </div>
  );
        }
                
