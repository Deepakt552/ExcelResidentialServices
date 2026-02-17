import React from 'react';
import Seo from '@/Components/Seo';
import { Link } from "@inertiajs/react";
import {
  Home,
  ArrowLeft,
  ChevronRight,
  Shield,
  Calendar,
  Phone,
  CheckCircle,
  Clock,
  Users,
  FileText,
  Award,
  BarChart3,
  Settings,
  Building2,
  DollarSign,
  Handshake,
  MessageSquare,
  AlertTriangle,
  Target,
  Eye,
  ClipboardCheck,
  Briefcase,
  PieChart,
  ClipboardList,
  ShieldCheck,
  Bell
} from 'lucide-react';
import Footer from '@/Components/Footer';
import Header from '@/Components/Header';

const GeneralManagement = () => {
  const seoData = {
    title: "General Property Management | Excel Residential Services",
    description: "Comprehensive general management for real estate. Operational oversight, vendor coordination, and tenant relations.",
    keywords: "General Management, Property Operations, Vendor Management, Tenant Relations, Real Estate Administration"
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <Seo {...seoData} />
      <Header />

      {/* Hero Section */}
      <section className="relative py-32 bg-gradient-to-br from-[#22346e] via-[#1a2a5a] to-[#0f1a3d] overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Cpath d='M50 50c0-5.523 4.477-10 10-10s10 4.477 10 10-4.477 10-10 10c0 5.523-4.477 10-10 10s-10-4.477-10-10 4.477-10 10-10zM10 10c0-5.523 4.477-10 10-10s10 4.477 10 10-4.477 10-10 10c0 5.523-4.477 10-10 10S0 25.523 0 20s4.477-10 10-10zm10 8c4.418 0 8-3.582 8-8s-3.582-8-8-8-8 3.582-8 8 3.582 8 8 8zm40 40c4.418 0 8-3.582 8-8s-3.582-8-8-8-8 3.582-8 8 3.582 8 8 8z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}></div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-br from-purple-500/20 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-tr from-white/10 to-transparent rounded-full blur-3xl"></div>

        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <div className="max-w-6xl mx-auto">
            {/* Breadcrumb */}
            <div className="flex items-center gap-3 mb-8">
              <Link
                href="/services"
                className="text-white/70 hover:text-white transition-colors duration-300 flex items-center gap-2 text-sm"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                <ArrowLeft className="w-4 h-4" />
                Back to Services
              </Link>
              <ChevronRight className="w-4 h-4 text-white/40" />
              <span className="text-white text-sm" style={{ fontFamily: "'Inter', sans-serif" }}>General Management</span>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center gap-4 mb-8">
                  <div className="h-px w-16 bg-gradient-to-r from-transparent to-[#f1424b]"></div>
                  <span className="text-[#f1424b] tracking-widest text-sm font-semibold uppercase" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                    Comprehensive Oversight
                  </span>
                  <div className="h-px w-16 bg-gradient-to-l from-transparent to-[#f1424b]"></div>
                </div>

                <h1 className="text-5xl md:text-6xl font-bold text-white mb-8 leading-tight" style={{ fontFamily: "'Playfair Display', serif" }}>
                  General<br />Management
                </h1>

                <p className="text-white/80 text-xl leading-relaxed mb-12" style={{ fontFamily: "'Inter', sans-serif" }}>
                  Comprehensive oversight ensuring smooth operations and maximum value for your property investments.
                </p>

                <div className="flex flex-wrap gap-6">
                  <Link
                    href="/contact"
                    className="bg-white text-[#22346e] hover:bg-gray-100 font-semibold py-4 px-8 rounded-xl transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-xl flex items-center gap-3"
                    style={{ fontFamily: "'Montserrat', sans-serif" }}
                  >
                    Request Management Proposal
                    <ChevronRight className="w-5 h-5" />
                  </Link>
                  <button className="bg-transparent border-2 border-white/30 hover:border-white text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 transform hover:-translate-y-1 flex items-center gap-3"
                    style={{ fontFamily: "'Montserrat', sans-serif" }}
                  >
                    <Phone className="w-5 h-5" />
                    Schedule Consultation
                  </button>
                </div>
              </div>

              {/* Stats Card */}
              <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
                <div className="grid grid-cols-2 gap-6 mb-8">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-white mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>360°</div>
                    <div className="text-white/70 text-sm uppercase tracking-wider" style={{ fontFamily: "'Montserrat', sans-serif" }}>Full Coverage</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-white mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>99%</div>
                    <div className="text-white/70 text-sm uppercase tracking-wider" style={{ fontFamily: "'Montserrat', sans-serif" }}>Tenant Retention</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-white mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>24/7</div>
                    <div className="text-white/70 text-sm uppercase tracking-wider" style={{ fontFamily: "'Montserrat', sans-serif" }}>Management</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-white mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>500+</div>
                    <div className="text-white/70 text-sm uppercase tracking-wider" style={{ fontFamily: "'Montserrat', sans-serif" }}>Properties Managed</div>
                  </div>
                </div>

                <div className="border-t border-white/20 pt-8">
                  <div className="flex items-center gap-4">
                    <Award className="w-8 h-8 text-yellow-400" />
                    <div>
                      <h4 className="text-white font-semibold text-lg" style={{ fontFamily: "'Montserrat', sans-serif" }}>Certified Management</h4>
                      <p className="text-white/70 text-sm" style={{ fontFamily: "'Inter', sans-serif" }}>CPM and ARM certified professionals</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-24">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <div className="inline-flex items-center gap-4 mb-6">
                  <div className="h-px w-12 bg-[#f1424b]"></div>
                  <span className="text-[#22346e] font-medium tracking-wider uppercase" style={{ fontFamily: "'Montserrat', sans-serif" }}>Introduction</span>
                  <div className="h-px w-12 bg-[#f1424b]"></div>
                </div>

                <h2 className="text-4xl md:text-5xl font-bold text-[#22346e] mb-8 leading-tight" style={{ fontFamily: "'Playfair Display', serif" }}>
                  Welcome to Our General Management Services
                </h2>

                <div className="space-y-6">
                  <p className="text-gray-700 text-lg leading-relaxed" style={{ fontFamily: "'Inter', sans-serif" }}>
                    At Excel Residential Services, we understand that effective property management goes beyond routine maintenance and tenant relations.
                  </p>
                  <p className="text-gray-700 text-lg leading-relaxed" style={{ fontFamily: "'Inter', sans-serif" }}>
                    Our General Management services are designed to provide a comprehensive, hands-on approach to overseeing all aspects of property operations.
                  </p>
                </div>

                {/* Key Benefits */}
                <div className="mt-12 grid grid-cols-2 gap-6">
                  <div className="flex items-start gap-4">
                    <Target className="w-6 h-6 text-[#f1424b] mt-1" />
                    <div>
                      <h4 className="font-semibold text-[#22346e] mb-2" style={{ fontFamily: "'Montserrat', sans-serif" }}>Holistic Approach</h4>
                      <p className="text-gray-600 text-sm" style={{ fontFamily: "'Inter', sans-serif" }}>Complete property oversight</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <ShieldCheck className="w-6 h-6 text-green-500 mt-1" />
                    <div>
                      <h4 className="font-semibold text-[#22346e] mb-2" style={{ fontFamily: "'Montserrat', sans-serif" }}>Risk Management</h4>
                      <p className="text-gray-600 text-sm" style={{ fontFamily: "'Inter', sans-serif" }}>Proactive problem prevention</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Management Visualization */}
              <div className="relative">
                <div className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-3xl p-8">
                  <div className="relative">
                    <div className="absolute -top-6 -left-6 w-24 h-24 bg-purple-100 rounded-2xl"></div>
                    <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-blue-100 rounded-2xl"></div>

                    <div className="relative bg-white rounded-2xl p-8 shadow-2xl">
                      <Briefcase className="w-16 h-16 text-[#22346e] mb-6 mx-auto" />
                      <h3 className="text-2xl font-bold text-[#22346e] text-center mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
                        Complete Property Management
                      </h3>
                      <div className="space-y-4">
                        {['Property Oversight', 'Financial Management', 'Vendor Coordination', 'Tenant Relations'].map((item, index) => (
                          <div key={index} className="flex items-center gap-3">
                            <CheckCircle className="w-5 h-5 text-green-500" />
                            <span className="text-gray-700" style={{ fontFamily: "'Inter', sans-serif" }}>{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-gradient-to-b from-white to-gray-100">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-4 mb-6">
                <div className="h-px w-16 bg-gradient-to-r from-transparent to-[#f1424b]"></div>
                <span className="text-[#f1424b] tracking-widest text-sm font-semibold uppercase" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                  Our Services
                </span>
                <div className="h-px w-16 bg-gradient-to-l from-transparent to-[#f1424b]"></div>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-[#22346e] mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
                What We Offer
              </h2>
              <p className="text-gray-600 text-lg max-w-3xl mx-auto" style={{ fontFamily: "'Inter', sans-serif" }}>
                Comprehensive general management solutions covering every aspect of property operations
              </p>
            </div>

            {/* Services Grid */}
            <div className="grid md:grid-cols-2 gap-8">
              {/* Property Oversight */}
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-2">
                <div className="flex items-start gap-6 mb-6">
                  <div className="w-14 h-14 bg-gradient-to-br from-blue-100 to-cyan-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Eye className="w-7 h-7 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-[#22346e] mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>
                      Property Oversight
                    </h3>
                    <div className="flex items-center gap-2">
                      <Building2 className="w-4 h-4 text-blue-500" />
                      <span className="text-sm text-gray-600" style={{ fontFamily: "'Inter', sans-serif" }}>Complete Property Management</span>
                    </div>
                  </div>
                </div>

                <p className="text-gray-700 leading-relaxed mb-6" style={{ fontFamily: "'Inter', sans-serif" }}>
                  At Excel Residential Services we perform a proactive method to supervise assets and ensure that your financing remains in optimal condition and in accordance with all policies.
                </p>

                <div className="bg-blue-50 rounded-xl p-6">
                  <h4 className="font-semibold text-[#22346e] mb-4" style={{ fontFamily: "'Montserrat', sans-serif" }}>Our Approach:</h4>
                  <div className="space-y-3">
                    {['Daily inspections and monitoring', 'Proactive maintenance management', 'Safety standards compliance', 'Aesthetic appeal maintenance'].map((item, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                        <span className="text-sm text-gray-700" style={{ fontFamily: "'Inter', sans-serif" }}>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Financial Management */}
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-2">
                <div className="flex items-start gap-6 mb-6">
                  <div className="w-14 h-14 bg-gradient-to-br from-green-100 to-emerald-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <PieChart className="w-7 h-7 text-green-600" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-[#22346e] mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>
                      Financial Management
                    </h3>
                    <div className="flex items-center gap-2">
                      <DollarSign className="w-4 h-4 text-green-500" />
                      <span className="text-sm text-gray-600" style={{ fontFamily: "'Inter', sans-serif" }}>Transparent Financial Oversight</span>
                    </div>
                  </div>
                </div>

                <p className="text-gray-700 leading-relaxed mb-6" style={{ fontFamily: "'Inter', sans-serif" }}>
                  Effective economic management is the cornerstone of asset control. At Excel Residential Services, we will make sure the financial health of your properties through careful planning and accurate reporting.
                </p>

                <div className="bg-green-50 rounded-xl p-6">
                  <h4 className="font-semibold text-[#22346e] mb-4" style={{ fontFamily: "'Montserrat', sans-serif" }}>Our Services:</h4>
                  <div className="space-y-3">
                    {['Budget planning and forecasting', 'Accurate financial reporting', 'Expense management', 'Rent collection optimization'].map((item, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        <span className="text-sm text-gray-700" style={{ fontFamily: "'Inter', sans-serif" }}>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Vendor and Contractor Coordination */}
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-2">
                <div className="flex items-start gap-6 mb-6">
                  <div className="w-14 h-14 bg-gradient-to-br from-orange-100 to-yellow-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Handshake className="w-7 h-7 text-orange-600" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-[#22346e] mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>
                      Vendor and Contractor Coordination
                    </h3>
                    <div className="flex items-center gap-2">
                      <ClipboardCheck className="w-4 h-4 text-orange-500" />
                      <span className="text-sm text-gray-600" style={{ fontFamily: "'Inter', sans-serif" }}>Professional Network Management</span>
                    </div>
                  </div>
                </div>

                <p className="text-gray-700 leading-relaxed mb-6" style={{ fontFamily: "'Inter', sans-serif" }}>
                  At Excel Residential Services we provide smooth and efficient coordination of vendors and contractors to ensure your property operates smoothly.
                </p>

                <div className="bg-orange-50 rounded-xl p-6">
                  <h4 className="font-semibold text-[#22346e] mb-4" style={{ fontFamily: "'Montserrat', sans-serif" }}>Our Process:</h4>
                  <div className="space-y-3">
                    {['Vendor selection and vetting', 'Contract negotiation', 'Work supervision', 'Quality assurance'].map((item, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                        <span className="text-sm text-gray-700" style={{ fontFamily: "'Inter', sans-serif" }}>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Tenant Relations */}
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-2">
                <div className="flex items-start gap-6 mb-6">
                  <div className="w-14 h-14 bg-gradient-to-br from-purple-100 to-pink-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Users className="w-7 h-7 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-[#22346e] mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>
                      Tenant Relations
                    </h3>
                    <div className="flex items-center gap-2">
                      <MessageSquare className="w-4 h-4 text-purple-500" />
                      <span className="text-sm text-gray-600" style={{ fontFamily: "'Inter', sans-serif" }}>Positive Community Building</span>
                    </div>
                  </div>
                </div>

                <p className="text-gray-700 leading-relaxed mb-6" style={{ fontFamily: "'Inter', sans-serif" }}>
                  At Excel Residential Services, we prefer to support positive tenant relationships to ensure a harmonious living and working environment.
                </p>

                <div className="bg-purple-50 rounded-xl p-6">
                  <h4 className="font-semibold text-[#22346e] mb-4" style={{ fontFamily: "'Montserrat', sans-serif" }}>Our Focus:</h4>
                  <div className="space-y-3">
                    {['Clear communication channels', 'Prompt issue resolution', 'Lease administration', 'Community engagement'].map((item, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-purple-500" />
                        <span className="text-sm text-gray-700" style={{ fontFamily: "'Inter', sans-serif" }}>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Emergency Response Section */}
            <div className="mt-16 bg-gradient-to-r from-red-50 to-orange-50 rounded-3xl p-8 border border-red-100">
              <div className="grid lg:grid-cols-2 gap-8 items-center">
                <div>
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center">
                      <AlertTriangle className="w-6 h-6 text-red-600" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-[#22346e]" style={{ fontFamily: "'Playfair Display', serif" }}>
                        Emergency Response
                      </h3>
                      <div className="flex items-center gap-2 mt-2">
                        <Clock className="w-4 h-4 text-red-500" />
                        <span className="text-sm text-gray-600" style={{ fontFamily: "'Inter', sans-serif" }}>24/7 Emergency Service</span>
                      </div>
                    </div>
                  </div>

                  <p className="text-gray-700 leading-relaxed mb-6" style={{ fontFamily: "'Inter', sans-serif" }}>
                    We acknowledge at Excel Residential Services that emergencies may occur at any time and rapid response is essential. Our emergency response service is available 24/7.
                  </p>

                  <div className="space-y-3">
                    {['Plumbing emergencies', 'Electrical failures', 'Weather-related damages', 'Structural issues'].map((item, idx) => (
                      <div key={idx} className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                        <span className="text-gray-700" style={{ fontFamily: "'Inter', sans-serif" }}>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="text-center">
                  <Bell className="w-20 h-20 text-red-500 mx-auto mb-6" />
                  <div className="bg-white rounded-xl p-6 shadow-lg">
                    <h4 className="font-bold text-[#22346e] text-xl mb-4" style={{ fontFamily: "'Montserrat', sans-serif" }}>Emergency Hotline</h4>
                    <div className="text-3xl font-bold text-red-600 mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>(888) 123-4567</div>
                    <p className="text-gray-600 text-sm" style={{ fontFamily: "'Inter', sans-serif" }}>Available 24 hours, 7 days a week</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-r from-[#22346e] to-[#1a2a5a] rounded-3xl p-12 lg:p-16 relative overflow-hidden">
              <div className="absolute inset-0 opacity-10">
                <div className="absolute inset-0" style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M0 38.59l2.83-2.83 1.41 1.41L1.41 40H0v-1.41zM0 1.4l2.83 2.83 1.41-1.41L1.41 0H0v1.41zM38.59 40l-2.83-2.83 1.41-1.41L40 38.59V40h-1.41zM40 1.41l-2.83 2.83-1.41-1.41L38.59 0H40v1.41zM20 18.6l2.83-2.83 1.41 1.41L21.41 20l2.83 2.83-1.41 1.41L20 21.41l-2.83 2.83-1.41-1.41L18.59 20l-2.83-2.83 1.41-1.41L20 18.59z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                }}></div>
              </div>

              <div className="relative z-10 text-center">
                <Briefcase className="w-16 h-16 text-white mx-auto mb-6" />
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
                  Comprehensive Property Management
                </h2>
                <p className="text-white/80 text-lg mb-10 max-w-2xl mx-auto leading-relaxed" style={{ fontFamily: "'Inter', sans-serif" }}>
                  Let our experienced team handle all aspects of your property management needs
                </p>
                <div className="flex flex-col sm:flex-row gap-5 justify-center">
                  <Link
                    href="/contact"
                    className="bg-white text-[#22346e] hover:bg-gray-100 font-semibold py-4 px-12 rounded-xl transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-xl flex items-center gap-3 justify-center group"
                    style={{ fontFamily: "'Montserrat', sans-serif" }}
                  >
                    <Calendar className="w-5 h-5" />
                    Request Management Proposal
                  </Link>
                  <button className="bg-transparent border-2 border-white/30 hover:border-white text-white font-semibold py-4 px-12 rounded-xl transition-all duration-300 transform hover:-translate-y-1 flex items-center gap-3 justify-center group"
                    style={{ fontFamily: "'Montserrat', sans-serif" }}
                  >
                    <Phone className="w-5 h-5" />
                    Call: (888) 123-4567
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default GeneralManagement;