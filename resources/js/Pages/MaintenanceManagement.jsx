import React from 'react';
import Seo from '@/Components/Seo';
import { Link } from "@inertiajs/react";
import {
  Wrench,
  ArrowLeft,
  ChevronRight,
  Shield,
  Calendar,
  Phone,
  CheckCircle,
  Clock,

  AlertTriangle,
  Home,
  Users,
  FileText,
  Award,
  BarChart3,
  Settings,
  HardHat,
  Thermometer,
  Droplets,
  Zap,
  ShieldCheck,
  Leaf,
  Bell
} from 'lucide-react';
import Footer from '@/Components/Footer';
import Header from '@/Components/Header';

const MaintenanceManagement = () => {
  const seoData = {
    title: "Property Maintenance Management | Excel Residential Services",
    description: "Proactive property maintenance and 24/7 emergency repairs. Ensuring tenant satisfaction and property value preservation.",
    keywords: "Property Maintenance, Building Repairs, Emergency Maintenance, Property Care, Facility Management"
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
        <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-br from-orange-500/20 to-transparent rounded-full blur-3xl"></div>
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
              <span className="text-white text-sm" style={{ fontFamily: "'Inter', sans-serif" }}>Maintenance Management</span>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center gap-4 mb-8">
                  <div className="h-px w-16 bg-gradient-to-r from-transparent to-[#f1424b]"></div>
                  <span className="text-[#f1424b] tracking-widest text-sm font-semibold uppercase" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                    Proactive Care
                  </span>
                  <div className="h-px w-16 bg-gradient-to-l from-transparent to-[#f1424b]"></div>
                </div>

                <h1 className="text-5xl md:text-6xl font-bold text-white mb-8 leading-tight" style={{ fontFamily: "'Playfair Display', serif" }}>
                  Maintenance<br />Management
                </h1>

                <p className="text-white/80 text-xl leading-relaxed mb-12" style={{ fontFamily: "'Inter', sans-serif" }}>
                  Ensuring property excellence through proactive maintenance and rapid response systems.
                </p>

                <div className="flex flex-wrap gap-6">
                  <Link
                    href="/contact"
                    className="bg-white text-[#22346e] hover:bg-gray-100 font-semibold py-4 px-8 rounded-xl transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-xl flex items-center gap-3"
                    style={{ fontFamily: "'Montserrat', sans-serif" }}
                  >
                    Schedule Maintenance
                    <ChevronRight className="w-5 h-5" />
                  </Link>
                  <button className="bg-transparent border-2 border-white/30 hover:border-white text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 transform hover:-translate-y-1 flex items-center gap-3"
                    style={{ fontFamily: "'Montserrat', sans-serif" }}
                  >
                    <Phone className="w-5 h-5" />
                    24/7 Emergency
                  </button>
                </div>
              </div>

              {/* Stats Card */}
              <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
                <div className="grid grid-cols-2 gap-6 mb-8">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-white mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>30 min</div>
                    <div className="text-white/70 text-sm uppercase tracking-wider" style={{ fontFamily: "'Montserrat', sans-serif" }}>Avg Response Time</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-white mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>95%</div>
                    <div className="text-white/70 text-sm uppercase tracking-wider" style={{ fontFamily: "'Montserrat', sans-serif" }}>Same-Day Resolution</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-white mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>24/7</div>
                    <div className="text-white/70 text-sm uppercase tracking-wider" style={{ fontFamily: "'Montserrat', sans-serif" }}>Emergency Support</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-white mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>200+</div>
                    <div className="text-white/70 text-sm uppercase tracking-wider" style={{ fontFamily: "'Montserrat', sans-serif" }}>Trusted Vendors</div>
                  </div>
                </div>

                <div className="border-t border-white/20 pt-8">
                  <div className="flex items-center gap-4">
                    <ShieldCheck className="w-8 h-8 text-green-400" />
                    <div>
                      <h4 className="text-white font-semibold text-lg" style={{ fontFamily: "'Montserrat', sans-serif" }}>Certified Technicians</h4>
                      <p className="text-white/70 text-sm" style={{ fontFamily: "'Inter', sans-serif" }}>Licensed & insured professionals</p>
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
                  <span className="text-[#22346e] font-medium tracking-wider uppercase" style={{ fontFamily: "'Montserrat', sans-serif" }}>Overview</span>
                  <div className="h-px w-12 bg-[#f1424b]"></div>
                </div>

                <h2 className="text-4xl md:text-5xl font-bold text-[#22346e] mb-8 leading-tight" style={{ fontFamily: "'Playfair Display', serif" }}>
                  Ensuring Property Excellence Through Proactive Maintenance
                </h2>

                <div className="space-y-6">
                  <p className="text-gray-700 text-lg leading-relaxed" style={{ fontFamily: "'Inter', sans-serif" }}>
                    Effective maintenance management is essential for maintaining the value of your property, ensuring tenant satisfaction, and minimizing costly repairs.
                  </p>
                  <p className="text-gray-700 text-lg leading-relaxed" style={{ fontFamily: "'Inter', sans-serif" }}>
                    We offer a structured and proactive approach to maintenance management at Excel Residential Services, keeping your investments in the highest condition.
                  </p>
                </div>

                {/* Key Benefits */}
                <div className="mt-12 grid grid-cols-2 gap-6">
                  <div className="flex items-start gap-4">
                    <Shield className="w-6 h-6 text-[#f1424b] mt-1" />
                    <div>
                      <h4 className="font-semibold text-[#22346e] mb-2" style={{ fontFamily: "'Montserrat', sans-serif" }}>Property Protection</h4>
                      <p className="text-gray-600 text-sm" style={{ fontFamily: "'Inter', sans-serif" }}>Prevent costly damage and repairs</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <BarChart3 className="w-6 h-6 text-green-500 mt-1" />
                    <div>
                      <h4 className="font-semibold text-[#22346e] mb-2" style={{ fontFamily: "'Montserrat', sans-serif" }}>Value Preservation</h4>
                      <p className="text-gray-600 text-sm" style={{ fontFamily: "'Inter', sans-serif" }}>Maintain and increase property value</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Maintenance Visualization */}
              <div className="relative">
                <div className="bg-gradient-to-br from-orange-50 to-yellow-50 rounded-3xl p-8">
                  <div className="relative">
                    <div className="absolute -top-6 -left-6 w-24 h-24 bg-orange-100 rounded-2xl"></div>
                    <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-yellow-100 rounded-2xl"></div>

                    <div className="relative bg-white rounded-2xl p-8 shadow-2xl">
                      <Wrench className="w-16 h-16 text-[#22346e] mb-6 mx-auto" />
                      <h3 className="text-2xl font-bold text-[#22346e] text-center mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
                        Complete Maintenance Solutions
                      </h3>
                      <div className="space-y-4">
                        {['Preventive Maintenance', 'Routine Services', 'Emergency Repairs', 'Tenant Support'].map((item, index) => (
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

      {/* Maintenance Approach Section */}
      <section className="py-24 bg-gradient-to-b from-white to-gray-100">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-4 mb-6">
                <div className="h-px w-16 bg-gradient-to-r from-transparent to-[#f1424b]"></div>
                <span className="text-[#f1424b] tracking-widest text-sm font-semibold uppercase" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                  Our Approach
                </span>
                <div className="h-px w-16 bg-gradient-to-l from-transparent to-[#f1424b]"></div>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-[#22346e] mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
                Our Maintenance Approach
              </h2>
              <p className="text-gray-600 text-lg max-w-3xl mx-auto" style={{ fontFamily: "'Inter', sans-serif" }}>
                A comprehensive maintenance strategy ensuring your property remains in optimal condition
              </p>
            </div>

            {/* Maintenance Steps */}
            <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
              {/* Step 1: Preventive Maintenance */}
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-2">
                <div className="flex items-center gap-6 mb-8">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-cyan-100 rounded-2xl flex items-center justify-center">
                    <div className="text-2xl font-bold text-[#22346e]" style={{ fontFamily: "'Playfair Display', serif" }}>1</div>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-[#22346e]" style={{ fontFamily: "'Playfair Display', serif" }}>
                      Preventive Maintenance
                    </h3>
                    <div className="flex items-center gap-2 mt-2">
                      <Calendar className="w-4 h-4 text-blue-500" />
                      <span className="text-sm text-gray-600" style={{ fontFamily: "'Inter', sans-serif" }}>Scheduled Inspections</span>
                    </div>
                  </div>
                </div>

                <p className="text-gray-700 leading-relaxed mb-6" style={{ fontFamily: "'Inter', sans-serif" }}>
                  Regular inspections and planned service help prevent small problems from becoming major issues.
                </p>

                <div className="bg-blue-50 rounded-xl p-6">
                  <h4 className="font-semibold text-[#22346e] mb-4" style={{ fontFamily: "'Montserrat', sans-serif" }}>Our preventive maintenance includes:</h4>
                  <div className="space-y-3">
                    {['HVAC system checks', 'Plumbing and electrical inspections', 'Roof and exterior assessments', 'Common area upkeep'].map((item, idx) => (
                      <div key={idx} className="flex items-center gap-3">
                        <CheckCircle className="w-4 h-4 text-blue-500" />
                        <span className="text-gray-700" style={{ fontFamily: "'Inter', sans-serif" }}>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Step 2: Routine Maintenance */}
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-2">
                <div className="flex items-center gap-6 mb-8">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-100 to-emerald-100 rounded-2xl flex items-center justify-center">
                    <div className="text-2xl font-bold text-[#22346e]" style={{ fontFamily: "'Playfair Display', serif" }}>2</div>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-[#22346e]" style={{ fontFamily: "'Playfair Display', serif" }}>
                      Routine Maintenance
                    </h3>
                    <div className="flex items-center gap-2 mt-2">
                      <Clock className="w-4 h-4 text-green-500" />
                      <span className="text-sm text-gray-600" style={{ fontFamily: "'Inter', sans-serif" }}>Daily & Weekly Tasks</span>
                    </div>
                  </div>
                </div>

                <p className="text-gray-700 leading-relaxed mb-6" style={{ fontFamily: "'Inter', sans-serif" }}>
                  Daily and weekly maintenance tasks ensure the smooth operation of your property.
                </p>

                <div className="bg-green-50 rounded-xl p-6">
                  <h4 className="font-semibold text-[#22346e] mb-4" style={{ fontFamily: "'Montserrat', sans-serif" }}>Our team handles:</h4>
                  <div className="space-y-3">
                    {['Landscaping and groundskeeping', 'Trash collection and waste management', 'Cleaning and janitorial services', 'Lighting and security system upkeep'].map((item, idx) => (
                      <div key={idx} className="flex items-center gap-3">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        <span className="text-gray-700" style={{ fontFamily: "'Inter', sans-serif" }}>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Step 3: Emergency Repairs */}
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-2">
                <div className="flex items-center gap-6 mb-8">
                  <div className="w-16 h-16 bg-gradient-to-br from-red-100 to-orange-100 rounded-2xl flex items-center justify-center">
                    <div className="text-2xl font-bold text-[#22346e]" style={{ fontFamily: "'Playfair Display', serif" }}>3</div>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-[#22346e]" style={{ fontFamily: "'Playfair Display', serif" }}>
                      Emergency Repairs
                    </h3>
                    <div className="flex items-center gap-2 mt-2">
                      <AlertTriangle className="w-4 h-4 text-red-500" />
                      <span className="text-sm text-gray-600" style={{ fontFamily: "'Inter', sans-serif" }}>24/7 Response Team</span>
                    </div>
                  </div>
                </div>

                <p className="text-gray-700 leading-relaxed mb-6" style={{ fontFamily: "'Inter', sans-serif" }}>
                  Unexpected breakdowns can disrupt tenant comfort and safety. Our 24/7 emergency response team promptly addresses issues.
                </p>

                <div className="bg-red-50 rounded-xl p-6">
                  <h4 className="font-semibold text-[#22346e] mb-4" style={{ fontFamily: "'Montserrat', sans-serif" }}>We address:</h4>
                  <div className="space-y-3">
                    {['Plumbing leaks and drainage issues', 'Electrical failures', 'Heating and cooling system malfunctions', 'Structural damages'].map((item, idx) => (
                      <div key={idx} className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                        <span className="text-gray-700" style={{ fontFamily: "'Inter', sans-serif" }}>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Step 4: Tenant Support */}
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-2">
                <div className="flex items-center gap-6 mb-8">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-100 to-pink-100 rounded-2xl flex items-center justify-center">
                    <div className="text-2xl font-bold text-[#22346e]" style={{ fontFamily: "'Playfair Display', serif" }}>4</div>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-[#22346e]" style={{ fontFamily: "'Playfair Display', serif" }}>
                      Tenant Support & Request Management
                    </h3>
                    <div className="flex items-center gap-2 mt-2">
                      <Users className="w-4 h-4 text-purple-500" />
                      <span className="text-sm text-gray-600" style={{ fontFamily: "'Inter', sans-serif" }}>Dedicated Support System</span>
                    </div>
                  </div>
                </div>

                <p className="text-gray-700 leading-relaxed mb-6" style={{ fontFamily: "'Inter', sans-serif" }}>
                  A dedicated maintenance request system allows tenants to report issues easily.
                </p>

                <div className="bg-purple-50 rounded-xl p-6">
                  <h4 className="font-semibold text-[#22346e] mb-4" style={{ fontFamily: "'Montserrat', sans-serif" }}>We provide:</h4>
                  <div className="space-y-3">
                    {['Online maintenance request forms', 'Prompt response to repair requests', 'Transparent communication on work progress', 'Scheduled maintenance coordination'].map((item, idx) => (
                      <div key={idx} className="flex items-center gap-3">
                        <CheckCircle className="w-4 h-4 text-purple-500" />
                        <span className="text-gray-700" style={{ fontFamily: "'Inter', sans-serif" }}>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Maintenance Process Visual */}

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
                <Wrench className="w-16 h-16 text-white mx-auto mb-6" />
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
                  Professional Maintenance Solutions
                </h2>
                <p className="text-white/80 text-lg mb-10 max-w-2xl mx-auto leading-relaxed" style={{ fontFamily: "'Inter', sans-serif" }}>
                  Protect your property investment with our comprehensive maintenance management services
                </p>
                <div className="flex flex-col sm:flex-row gap-5 justify-center">
                  <Link
                    href="/contact"
                    className="bg-white text-[#22346e] hover:bg-gray-100 font-semibold py-4 px-12 rounded-xl transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-xl flex items-center gap-3 justify-center group"
                    style={{ fontFamily: "'Montserrat', sans-serif" }}
                  >
                    <Calendar className="w-5 h-5" />
                    Schedule Maintenance Consultation
                  </Link>
                  <button className="bg-transparent border-2 border-white/30 hover:border-white text-white font-semibold py-4 px-12 rounded-xl transition-all duration-300 transform hover:-translate-y-1 flex items-center gap-3 justify-center group"
                    style={{ fontFamily: "'Montserrat', sans-serif" }}
                  >
                    <Bell className="w-5 h-5" />
                    Emergency: (888) 123-4567
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

export default MaintenanceManagement;