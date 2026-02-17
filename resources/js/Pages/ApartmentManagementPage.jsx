import React from 'react';
import Seo from '@/Components/Seo';
import {
  Building2,
  Users,
  Wrench,
  DollarSign,
  Shield,
  CheckCircle,
  ArrowLeft,
  Phone,
  Calendar,
  ChevronRight,
  Home,
  FileText,
  Clock,
  BarChart3,
  Target,
  ShieldCheck,
  Award,
  Star
} from 'lucide-react';
import Footer from '@/Components/Footer';
import Header from '@/Components/Header';
import Logopage from '@/Components/logopage';

const ApartmentManagementPage = () => {
  const seoData = {
    title: "Apartment Management Services | Excel Residential Services",
    description: "Professional apartment management services in Los Angeles. Maximizing occupancy, rent collection, and property value.",
    keywords: "Apartment Management, Residential Property Management, Tenant Screening, Rent Collection, Los Angeles"
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <Seo {...seoData} />
      <Header />
      <Logopage />

      {/* Hero Section */}
      <section className="relative py-32 bg-gradient-to-br from-[#22346e] via-[#1a2a5a] to-[#0f1a3d] overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Cpath d='M50 50c0-5.523 4.477-10 10-10s10 4.477 10 10-4.477 10-10 10c0 5.523-4.477 10-10 10s-10-4.477-10-10 4.477-10 10-10zM10 10c0-5.523 4.477-10 10-10s10 4.477 10 10-4.477 10-10 10c0 5.523-4.477 10-10 10S0 25.523 0 20s4.477-10 10-10zm10 8c4.418 0 8-3.582 8-8s-3.582-8-8-8-8 3.582-8 8 3.582 8 8 8zm40 40c4.418 0 8-3.582 8-8s-3.582-8-8-8-8 3.582-8 8 3.582 8 8 8z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}></div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-br from-[#f1424b]/20 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-tr from-white/10 to-transparent rounded-full blur-3xl"></div>

        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <div className="max-w-6xl mx-auto">
            {/* Breadcrumb */}
            <div className="flex items-center gap-3 mb-8">
              <a href="/services" className="text-white/70 hover:text-white transition-colors duration-300 flex items-center gap-2 text-sm" style={{ fontFamily: "'Inter', sans-serif" }}>
                <ArrowLeft className="w-4 h-4" />
                Back to Services
              </a>
              <ChevronRight className="w-4 h-4 text-white/40" />
              <span className="text-white text-sm" style={{ fontFamily: "'Inter', sans-serif" }}>Apartment Management</span>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center gap-4 mb-8">
                  <div className="h-px w-16 bg-gradient-to-r from-transparent to-[#f1424b]"></div>
                  <span className="text-[#f1424b] tracking-widest text-sm font-semibold uppercase" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                    Premium Service
                  </span>
                  <div className="h-px w-16 bg-gradient-to-l from-transparent to-[#f1424b]"></div>
                </div>

                <h1 className="text-5xl md:text-6xl font-bold text-white mb-8 leading-tight" style={{ fontFamily: "'Playfair Display', serif" }}>
                  Apartment<br />Management
                </h1>

                <p className="text-white/80 text-xl leading-relaxed mb-12" style={{ fontFamily: "'Inter', sans-serif" }}>
                  Comprehensive property management solutions ensuring optimal occupancy, tenant satisfaction, and operational excellence for your residential investments.
                </p>


              </div>

              {/* Stats Card */}
              <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
                <div className="grid grid-cols-2 gap-6 mb-8">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-white mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>98%</div>
                    <div className="text-white/70 text-sm uppercase tracking-wider" style={{ fontFamily: "'Montserrat', sans-serif" }}>Tenant Satisfaction</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-white mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>24/7</div>
                    <div className="text-white/70 text-sm uppercase tracking-wider" style={{ fontFamily: "'Montserrat', sans-serif" }}>Support</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-white mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>45 min</div>
                    <div className="text-white/70 text-sm uppercase tracking-wider" style={{ fontFamily: "'Montserrat', sans-serif" }}>Avg Response Time</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-white mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>200+</div>
                    <div className="text-white/70 text-sm uppercase tracking-wider" style={{ fontFamily: "'Montserrat', sans-serif" }}>Properties Managed</div>
                  </div>
                </div>

                <div className="border-t border-white/20 pt-8">
                  <div className="flex items-center gap-4">
                    <Award className="w-8 h-8 text-[#f1424b]" />
                    <div>
                      <h4 className="text-white font-semibold text-lg" style={{ fontFamily: "'Montserrat', sans-serif" }}>Award-Winning Service</h4>
                      <p className="text-white/70 text-sm" style={{ fontFamily: "'Inter', sans-serif" }}>Recognized for excellence in property management</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What is Apartment Management Section */}
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
                  What is Apartment Management?
                </h2>

                <div className="space-y-6">
                  <p className="text-gray-700 text-lg leading-relaxed" style={{ fontFamily: "'Inter', sans-serif" }}>
                    The apartment control includes all factors of walking and maintaining a residential property, from members of tenants family to maintenance and financial control.
                  </p>
                  <p className="text-gray-700 text-lg leading-relaxed" style={{ fontFamily: "'Inter', sans-serif" }}>
                    In Excel Residential Services, we remove stress from the solution of your rental and we will assure ourselves for the owner and tenants to make sure for the owners and tenants.
                  </p>
                </div>

                {/* Key Benefits */}
                <div className="mt-12 grid grid-cols-2 gap-6">
                  <div className="flex items-start gap-4">
                    <ShieldCheck className="w-6 h-6 text-[#f1424b] mt-1" />
                    <div>
                      <h4 className="font-semibold text-[#22346e] mb-2" style={{ fontFamily: "'Montserrat', sans-serif" }}>Risk Reduction</h4>
                      <p className="text-gray-600 text-sm" style={{ fontFamily: "'Inter', sans-serif" }}>Minimize legal and financial risks</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <BarChart3 className="w-6 h-6 text-[#f1424b] mt-1" />
                    <div>
                      <h4 className="font-semibold text-[#22346e] mb-2" style={{ fontFamily: "'Montserrat', sans-serif" }}>Maximize ROI</h4>
                      <p className="text-gray-600 text-sm" style={{ fontFamily: "'Inter', sans-serif" }}>Optimize rental income & property value</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Image/Visual Representation */}
              <div className="relative">
                <div className="bg-gradient-to-br from-[#22346e]/10 to-transparent rounded-3xl p-8">
                  <div className="relative">
                    <div className="absolute -top-6 -left-6 w-24 h-24 bg-[#f1424b]/10 rounded-2xl"></div>
                    <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[#22346e]/10 rounded-2xl"></div>

                    <div className="relative bg-white rounded-2xl p-8 shadow-2xl">
                      <Building2 className="w-16 h-16 text-[#22346e] mb-6 mx-auto" />
                      <h3 className="text-2xl font-bold text-[#22346e] text-center mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
                        Complete Property Care
                      </h3>
                      <div className="space-y-4">
                        {['Tenant Screening', 'Maintenance', 'Financial Reports', 'Legal Compliance'].map((item, index) => (
                          <div key={index} className="flex items-center gap-3">
                            <CheckCircle className="w-5 h-5 text-[#f1424b]" />
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

      {/* Our Services Section */}
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
                Expert Services Tailored to Your Needs
              </h2>
              <p className="text-gray-600 text-lg max-w-3xl mx-auto" style={{ fontFamily: "'Inter', sans-serif" }}>
                Comprehensive solutions covering every aspect of apartment management
              </p>
            </div>

            {/* Services Grid */}
            <div className="grid md:grid-cols-2 gap-8">
              {/* Tenant Management */}
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-2">
                <div className="flex items-start gap-6 mb-6">
                  <div className="w-14 h-14 bg-gradient-to-br from-[#22346e]/10 to-transparent rounded-xl flex items-center justify-center flex-shrink-0">
                    <Users className="w-7 h-7 text-[#22346e]" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-[#22346e] mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>
                      Tenant Management
                    </h3>
                    <div className="flex items-center gap-2">
                      <Star className="w-4 h-4 text-yellow-500" />
                      <span className="text-sm text-gray-600" style={{ fontFamily: "'Inter', sans-serif" }}>Core Service</span>
                    </div>
                  </div>
                </div>

                <p className="text-gray-700 leading-relaxed mb-6" style={{ fontFamily: "'Inter', sans-serif" }}>
                  The tenant's management is the cornerstone of hits administration, which ensures harmonious courting between owners of things and residents. In Excel Residential Services, when managing each part of the tenant's interaction, from thorough screening and trouble-free movements to resolving questions and ensuring a well-timed renewal of rent.
                </p>

                <div className="bg-gray-50 rounded-xl p-6">
                  <h4 className="font-semibold text-[#22346e] mb-4" style={{ fontFamily: "'Montserrat', sans-serif" }}>Key Features:</h4>
                  <div className="grid grid-cols-2 gap-4">
                    {['Thorough Screening', 'Lease Management', 'Conflict Resolution', 'Renewal Processing'].map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-[#f1424b]" />
                        <span className="text-sm text-gray-700" style={{ fontFamily: "'Inter', sans-serif" }}>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Maintenance & Repairs */}
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-2">
                <div className="flex items-start gap-6 mb-6">
                  <div className="w-14 h-14 bg-gradient-to-br from-[#f1424b]/10 to-transparent rounded-xl flex items-center justify-center flex-shrink-0">
                    <Wrench className="w-7 h-7 text-[#f1424b]" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-[#22346e] mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>
                      Maintenance & Repairs
                    </h3>
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-[#f1424b]" />
                      <span className="text-sm text-gray-600" style={{ fontFamily: "'Inter', sans-serif" }}>24/7 Emergency Service</span>
                    </div>
                  </div>
                </div>

                <p className="text-gray-700 leading-relaxed mb-6" style={{ fontFamily: "'Inter', sans-serif" }}>
                  Maintenance and repair are the backbone effective checks of things that make sure that your complicated apartment remains safe, practical and attractive. We offer 24/7 emergency support, repeating inspections and a network of trusted retailers who solve problems directly and professionally.
                </p>

                <div className="bg-red-50 rounded-xl p-6">
                  <h4 className="font-semibold text-[#22346e] mb-4" style={{ fontFamily: "'Montserrat', sans-serif" }}>Service Areas:</h4>
                  <div className="grid grid-cols-2 gap-4">
                    {['Emergency Repairs', 'Preventive Maintenance', 'Vendor Management', 'Quality Inspections'].map((area, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-[#f1424b] rounded-full"></div>
                        <span className="text-sm text-gray-700" style={{ fontFamily: "'Inter', sans-serif" }}>{area}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Financial Management */}
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-2">
                <div className="flex items-start gap-6 mb-6">
                  <div className="w-14 h-14 bg-gradient-to-br from-[#22346e]/10 to-transparent rounded-xl flex items-center justify-center flex-shrink-0">
                    <DollarSign className="w-7 h-7 text-[#22346e]" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-[#22346e] mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>
                      Financial Management
                    </h3>
                    <div className="flex items-center gap-2">
                      <Target className="w-4 h-4 text-green-500" />
                      <span className="text-sm text-gray-600" style={{ fontFamily: "'Inter', sans-serif" }}>Revenue Optimization</span>
                    </div>
                  </div>
                </div>

                <p className="text-gray-700 leading-relaxed mb-6" style={{ fontFamily: "'Inter', sans-serif" }}>
                  Effective cash management is the cornerstone of hits management that will make sure easy operations and maximized profitability. We manage the Excel Residential Services all the time from the precise collection of rental and different cash reports of strategic finances that create plans and optimization of costs.
                </p>

                <div className="bg-green-50 rounded-xl p-6">
                  <h4 className="font-semibold text-[#22346e] mb-4" style={{ fontFamily: "'Montserrat', sans-serif" }}>Financial Services:</h4>
                  <div className="space-y-3">
                    {['Rent Collection', 'Budget Planning', 'Tax Compliance', 'Financial Reporting'].map((service, idx) => (
                      <div key={idx} className="flex items-center justify-between">
                        <span className="text-sm text-gray-700" style={{ fontFamily: "'Inter', sans-serif" }}>{service}</span>
                        <ChevronRight className="w-4 h-4 text-gray-400" />
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Legal Compliance */}
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-2">
                <div className="flex items-start gap-6 mb-6">
                  <div className="w-14 h-14 bg-gradient-to-br from-[#f1424b]/10 to-transparent rounded-xl flex items-center justify-center flex-shrink-0">
                    <Shield className="w-7 h-7 text-[#f1424b]" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-[#22346e] mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>
                      Legal Compliance
                    </h3>
                    <div className="flex items-center gap-2">
                      <FileText className="w-4 h-4 text-[#22346e]" />
                      <span className="text-sm text-gray-600" style={{ fontFamily: "'Inter', sans-serif" }}>Full Protection</span>
                    </div>
                  </div>
                </div>

                <p className="text-gray-700 leading-relaxed mb-6" style={{ fontFamily: "'Inter', sans-serif" }}>
                  Legal compliance is a fundamental issue of management of powerful things that ensures that your private home is adhered to all nearby, kingdom and federal legal instructions. We remain up to date with the constantly evolving criminal environment, from fair housing policies to tenants' rights and eviction laws.
                </p>

                <div className="bg-blue-50 rounded-xl p-6">
                  <h4 className="font-semibold text-[#22346e] mb-4" style={{ fontFamily: "'Montserrat', sans-serif" }}>Compliance Areas:</h4>
                  <div className="grid grid-cols-2 gap-4">
                    {['Fair Housing', 'Lease Agreements', 'Eviction Laws', 'Safety Regulations'].map((area, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <ShieldCheck className="w-4 h-4 text-[#22346e]" />
                        <span className="text-sm text-gray-700" style={{ fontFamily: "'Inter', sans-serif" }}>{area}</span>
                      </div>
                    ))}
                  </div>
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

export default ApartmentManagementPage;