import React from 'react';
import Seo from '@/Components/Seo';
import { Link } from "@inertiajs/react";
import {
  RefreshCw,
  ArrowLeft,
  ChevronRight,
  Home,
  Calendar,
  Phone,
  CheckCircle,
  Clock,
  Target,
  BarChart3,
  Wrench,
  Users,
  Settings,
  TrendingUp,
  Building,
  DollarSign,
  Shield,
  Award,
  Zap,
  FileText,
  Eye,
  ClipboardCheck,
  PaintBucket,
  Hammer,
  Bell
} from 'lucide-react';
import Footer from '@/Components/Footer';
import Header from '@/Components/Header';

const PropertyTurnAround = () => {
  const seoData = {
    title: "Property Turnaround Services | Excel Residential Services",
    description: "Transform underperforming properties into profitable assets. Rapid renovation, tenant placement, and value enhancement.",
    keywords: "Property Turnaround, Real Estate Renovation, Property Flipping, Value Enhancement, Property Transformation"
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
        <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-br from-teal-500/20 to-transparent rounded-full blur-3xl"></div>
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
              <span className="text-white text-sm" style={{ fontFamily: "'Inter', sans-serif" }}>Property Turn Around</span>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center gap-4 mb-8">
                  <div className="h-px w-16 bg-gradient-to-r from-transparent to-[#f1424b]"></div>
                  <span className="text-[#f1424b] tracking-widest text-sm font-semibold uppercase" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                    Transformation Experts
                  </span>
                  <div className="h-px w-16 bg-gradient-to-l from-transparent to-[#f1424b]"></div>
                </div>

                <h1 className="text-5xl md:text-6xl font-bold text-white mb-8 leading-tight" style={{ fontFamily: "'Playfair Display', serif" }}>
                  Property<br />Turn Around
                </h1>

                <p className="text-white/80 text-xl leading-relaxed mb-12" style={{ fontFamily: "'Inter', sans-serif" }}>
                  Transforming underperforming properties into profitable, functional, and appealing assets.
                </p>

                <div className="flex flex-wrap gap-6">
                  <Link
                    href="/contact"
                    className="bg-white text-[#22346e] hover:bg-gray-100 font-semibold py-4 px-8 rounded-xl transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-xl flex items-center gap-3"
                    style={{ fontFamily: "'Montserrat', sans-serif" }}
                  >
                    Start Your Property Transformation
                    <ChevronRight className="w-5 h-5" />
                  </Link>
                  <button className="bg-transparent border-2 border-white/30 hover:border-white text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 transform hover:-translate-y-1 flex items-center gap-3"
                    style={{ fontFamily: "'Montserrat', sans-serif" }}
                  >
                    <Phone className="w-5 h-5" />
                    Free Assessment
                  </button>
                </div>
              </div>

              {/* Stats Card */}
              <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
                <div className="grid grid-cols-2 gap-6 mb-8">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-white mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>45%</div>
                    <div className="text-white/70 text-sm uppercase tracking-wider" style={{ fontFamily: "'Montserrat', sans-serif" }}>Avg Value Increase</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-white mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>60 Days</div>
                    <div className="text-white/70 text-sm uppercase tracking-wider" style={{ fontFamily: "'Montserrat', sans-serif" }}>Avg Turnaround Time</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-white mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>98%</div>
                    <div className="text-white/70 text-sm uppercase tracking-wider" style={{ fontFamily: "'Montserrat', sans-serif" }}>Occupancy Rate</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-white mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>200+</div>
                    <div className="text-white/70 text-sm uppercase tracking-wider" style={{ fontFamily: "'Montserrat', sans-serif" }}>Properties Transformed</div>
                  </div>
                </div>

                <div className="border-t border-white/20 pt-8">
                  <div className="flex items-center gap-4">
                    <Award className="w-8 h-8 text-teal-400" />
                    <div>
                      <h4 className="text-white font-semibold text-lg" style={{ fontFamily: "'Montserrat', sans-serif" }}>Certified Transformation Experts</h4>
                      <p className="text-white/70 text-sm" style={{ fontFamily: "'Inter', sans-serif" }}>Specialized in property revitalization</p>
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
                  Transforming Properties, Maximizing Value
                </h2>

                <div className="space-y-6">
                  <p className="text-gray-700 text-lg leading-relaxed" style={{ fontFamily: "'Inter', sans-serif" }}>
                    At Excel Residential Services, we specialize in Property Turnaround—the process of revitalizing underperforming or distressed properties and transforming them into profitable, functional, and appealing assets.
                  </p>
                  <p className="text-gray-700 text-lg leading-relaxed" style={{ fontFamily: "'Inter', sans-serif" }}>
                    Whether you're a landlord, investor, or homeowner, our expert team ensures your property reaches its full potential.
                  </p>
                </div>

                {/* Key Benefits */}
                <div className="mt-12 grid grid-cols-2 gap-6">
                  <div className="flex items-start gap-4">
                    <TrendingUp className="w-6 h-6 text-green-500 mt-1" />
                    <div>
                      <h4 className="font-semibold text-[#22346e] mb-2" style={{ fontFamily: "'Montserrat', sans-serif" }}>Value Enhancement</h4>
                      <p className="text-gray-600 text-sm" style={{ fontFamily: "'Inter', sans-serif" }}>Significant property value increase</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Clock className="w-6 h-6 text-[#f1424b] mt-1" />
                    <div>
                      <h4 className="font-semibold text-[#22346e] mb-2" style={{ fontFamily: "'Montserrat', sans-serif" }}>Fast Turnaround</h4>
                      <p className="text-gray-600 text-sm" style={{ fontFamily: "'Inter', sans-serif" }}>Rapid transformation process</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Transformation Visualization */}
              <div className="relative">
                <div className="bg-gradient-to-br from-teal-50 to-blue-50 rounded-3xl p-8">
                  <div className="relative">
                    <div className="absolute -top-6 -left-6 w-24 h-24 bg-teal-100 rounded-2xl"></div>
                    <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-blue-100 rounded-2xl"></div>

                    <div className="relative bg-white rounded-2xl p-8 shadow-2xl">
                      <RefreshCw className="w-16 h-16 text-[#22346e] mb-6 mx-auto" />
                      <h3 className="text-2xl font-bold text-[#22346e] text-center mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
                        Complete Property Transformation
                      </h3>
                      <div className="space-y-4">
                        {['Assessment & Planning', 'Renovation & Maintenance', 'Tenant Management', 'Operational Optimization'].map((item, index) => (
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
                  Our Process
                </span>
                <div className="h-px w-16 bg-gradient-to-l from-transparent to-[#f1424b]"></div>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-[#22346e] mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
                Our Comprehensive Services
              </h2>
              <p className="text-gray-600 text-lg max-w-3xl mx-auto" style={{ fontFamily: "'Inter', sans-serif" }}>
                A systematic approach to transforming underperforming properties into profitable assets
              </p>
            </div>

            {/* Services Grid */}
            <div className="grid md:grid-cols-2 gap-8">
              {/* Assessment & Planning */}
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-2">
                <div className="flex items-start gap-6 mb-6">
                  <div className="w-14 h-14 bg-gradient-to-br from-blue-100 to-cyan-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Eye className="w-7 h-7 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-[#22346e] mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>
                      Assessment & Planning
                    </h3>
                    <div className="flex items-center gap-2">
                      <ClipboardCheck className="w-4 h-4 text-blue-500" />
                      <span className="text-sm text-gray-600" style={{ fontFamily: "'Inter', sans-serif" }}>Strategic Foundation</span>
                    </div>
                  </div>
                </div>

                <p className="text-gray-700 leading-relaxed mb-6" style={{ fontFamily: "'Inter', sans-serif" }}>
                  The evaluation is the foundation for the successful turnaround of properties that ensures that every real estate factor is evaluated for improvement.
                </p>

                <div className="bg-blue-50 rounded-xl p-6">
                  <h4 className="font-semibold text-[#22346e] mb-4" style={{ fontFamily: "'Montserrat', sans-serif" }}>Our Assessment Includes:</h4>
                  <div className="space-y-3">
                    {['Deep structural inspections', 'Safety compliance evaluation', 'Market trend analysis', 'Tenant expectation assessment'].map((item, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                        <span className="text-sm text-gray-700" style={{ fontFamily: "'Inter', sans-serif" }}>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Renovation & Maintenance */}
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-2">
                <div className="flex items-start gap-6 mb-6">
                  <div className="w-14 h-14 bg-gradient-to-br from-green-100 to-emerald-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Hammer className="w-7 h-7 text-green-600" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-[#22346e] mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>
                      Renovation & Maintenance
                    </h3>
                    <div className="flex items-center gap-2">
                      <Wrench className="w-4 h-4 text-green-500" />
                      <span className="text-sm text-gray-600" style={{ fontFamily: "'Inter', sans-serif" }}>Physical Transformation</span>
                    </div>
                  </div>
                </div>

                <p className="text-gray-700 leading-relaxed mb-6" style={{ fontFamily: "'Inter', sans-serif" }}>
                  Renovation and maintenance are the key to maintaining and improving the value of any asset. We offer comprehensive solutions for interiors, exteriors, and long-term durability.
                </p>

                <div className="bg-green-50 rounded-xl p-6">
                  <h4 className="font-semibold text-[#22346e] mb-4" style={{ fontFamily: "'Montserrat', sans-serif" }}>Our Services Include:</h4>
                  <div className="space-y-3">
                    {['Interior modernization', 'Exterior upgrades', 'Preventive maintenance plans', 'Energy efficiency improvements'].map((item, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        <span className="text-sm text-gray-700" style={{ fontFamily: "'Inter', sans-serif" }}>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Tenant Management */}
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-2">
                <div className="flex items-start gap-6 mb-6">
                  <div className="w-14 h-14 bg-gradient-to-br from-purple-100 to-pink-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Users className="w-7 h-7 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-[#22346e] mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>
                      Tenant Management
                    </h3>
                    <div className="flex items-center gap-2">
                      <Shield className="w-4 h-4 text-purple-500" />
                      <span className="text-sm text-gray-600" style={{ fontFamily: "'Inter', sans-serif" }}>Occupancy Optimization</span>
                    </div>
                  </div>
                </div>

                <p className="text-gray-700 leading-relaxed mb-6" style={{ fontFamily: "'Inter', sans-serif" }}>
                  Effective tenant management is the cornerstone of a successful investment in real estate that ensures high occupancy rates, tenant satisfaction, and long-term profitability.
                </p>

                <div className="bg-purple-50 rounded-xl p-6">
                  <h4 className="font-semibold text-[#22346e] mb-4" style={{ fontFamily: "'Montserrat', sans-serif" }}>Our Management Approach:</h4>
                  <div className="space-y-3">
                    {['Thorough tenant screening', 'Timely maintenance response', 'Clear communication channels', 'Efficient rent collection'].map((item, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                        <span className="text-sm text-gray-700" style={{ fontFamily: "'Inter', sans-serif" }}>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Operational Optimization */}
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-2">
                <div className="flex items-start gap-6 mb-6">
                  <div className="w-14 h-14 bg-gradient-to-br from-orange-100 to-yellow-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Settings className="w-7 h-7 text-orange-600" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-[#22346e] mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>
                      Operational Optimization
                    </h3>
                    <div className="flex items-center gap-2">
                      <Zap className="w-4 h-4 text-orange-500" />
                      <span className="text-sm text-gray-600" style={{ fontFamily: "'Inter', sans-serif" }}>Efficiency Maximization</span>
                    </div>
                  </div>
                </div>

                <p className="text-gray-700 leading-relaxed mb-6" style={{ fontFamily: "'Inter', sans-serif" }}>
                  Operational optimization in the field of real estate management concerns increased efficiency, reduced costs, and improved basic performance through streamlined processes.
                </p>

                <div className="bg-orange-50 rounded-xl p-6">
                  <h4 className="font-semibold text-[#22346e] mb-4" style={{ fontFamily: "'Montserrat', sans-serif" }}>Optimization Strategies:</h4>
                  <div className="space-y-3">
                    {['Smart technology implementation', 'Data-driven decision making', 'Proactive maintenance strategy', 'Process automation'].map((item, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-orange-500" />
                        <span className="text-sm text-gray-700" style={{ fontFamily: "'Inter', sans-serif" }}>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Transformation Timeline */}
            <div className="mt-16 bg-gradient-to-r from-teal-50 to-blue-50 rounded-3xl p-8">
              <div className="text-center mb-10">
                <h3 className="text-3xl font-bold text-[#22346e]" style={{ fontFamily: "'Playfair Display', serif" }}>
                  Our 4-Phase Transformation Process
                </h3>
              </div>

              <div className="grid md:grid-cols-4 gap-4 text-center">
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mb-4">
                    <div className="text-2xl font-bold text-blue-600">1</div>
                  </div>
                  <h4 className="font-semibold text-[#22346e] mb-2" style={{ fontFamily: "'Montserrat', sans-serif" }}>Assessment</h4>
                  <p className="text-gray-600 text-sm" style={{ fontFamily: "'Inter', sans-serif" }}>Comprehensive property evaluation</p>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mb-4">
                    <div className="text-2xl font-bold text-green-600">2</div>
                  </div>
                  <h4 className="font-semibold text-[#22346e] mb-2" style={{ fontFamily: "'Montserrat', sans-serif" }}>Planning</h4>
                  <p className="text-gray-600 text-sm" style={{ fontFamily: "'Inter', sans-serif" }}>Strategic transformation roadmap</p>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 bg-orange-100 rounded-2xl flex items-center justify-center mb-4">
                    <div className="text-2xl font-bold text-orange-600">3</div>
                  </div>
                  <h4 className="font-semibold text-[#22346e] mb-2" style={{ fontFamily: "'Montserrat', sans-serif" }}>Execution</h4>
                  <p className="text-gray-600 text-sm" style={{ fontFamily: "'Inter', sans-serif" }}>Professional implementation</p>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mb-4">
                    <div className="text-2xl font-bold text-purple-600">4</div>
                  </div>
                  <h4 className="font-semibold text-[#22346e] mb-2" style={{ fontFamily: "'Montserrat', sans-serif" }}>Optimization</h4>
                  <p className="text-gray-600 text-sm" style={{ fontFamily: "'Inter', sans-serif" }}>Ongoing performance enhancement</p>
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
                <RefreshCw className="w-16 h-16 text-white mx-auto mb-6" />
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
                  Transform Your Property Today
                </h2>
                <p className="text-white/80 text-lg mb-10 max-w-2xl mx-auto leading-relaxed" style={{ fontFamily: "'Inter', sans-serif" }}>
                  Turn your underperforming property into a profitable asset with our expert turnaround services
                </p>
                <div className="flex flex-col sm:flex-row gap-5 justify-center">
                  <Link
                    href="/contact"
                    className="bg-white text-[#22346e] hover:bg-gray-100 font-semibold py-4 px-12 rounded-xl transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-xl flex items-center gap-3 justify-center group"
                    style={{ fontFamily: "'Montserrat', sans-serif" }}
                  >
                    <Calendar className="w-5 h-5" />
                    Schedule Free Assessment
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

export default PropertyTurnAround;