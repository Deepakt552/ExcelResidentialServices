import React from 'react';
import Seo from '@/Components/Seo';
import { Link } from "@inertiajs/react";
import {
  Hammer,
  ArrowLeft,
  ChevronRight,
  Home,
  Calendar,
  Phone,
  CheckCircle,
  Clock,
  Target,
  Award,
  Wrench,
  Users,
  Shield,
  TrendingUp,
  DollarSign,
  Building2,
  PaintBucket,
  Ruler,
  Zap,
  FileText,
  ClipboardCheck,
  HardHat,
  Layers,
  Bell,
  Sparkles
} from 'lucide-react';
import Footer from '@/Components/Footer';

const RehabProjects = () => {
  const seoData = {
    title: "Property Rehab Projects | Excel Residential Services",
    description: "Expert property rehabilitation services. From minor updates to major renovations, we maximize your property's potential.",
    keywords: "Rehab Projects, Property Renovation, Home Remodeling, Construction Management, Real Estate Development"
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <Seo {...seoData} />

      {/* Hero Section */}
      <section className="relative py-32 bg-gradient-to-br from-[#22346e] via-[#1a2a5a] to-[#0f1a3d] overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Cpath d='M50 50c0-5.523 4.477-10 10-10s10 4.477 10 10-4.477 10-10 10c0 5.523-4.477 10-10 10s-10-4.477-10-10 4.477-10 10-10zM10 10c0-5.523 4.477-10 10-10s10 4.477 10 10-4.477 10-10 10c0 5.523-4.477 10-10 10S0 25.523 0 20s4.477-10 10-10zm10 8c4.418 0 8-3.582 8-8s-3.582-8-8-8-8 3.582-8 8 3.582 8 8 8zm40 40c4.418 0 8-3.582 8-8s-3.582-8-8-8-8 3.582-8 8 3.582 8 8 8z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}></div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-br from-amber-500/20 to-transparent rounded-full blur-3xl"></div>
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
              <span className="text-white text-sm" style={{ fontFamily: "'Inter', sans-serif" }}>Rehab Projects</span>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center gap-4 mb-8">
                  <div className="h-px w-16 bg-gradient-to-r from-transparent to-[#f1424b]"></div>
                  <span className="text-[#f1424b] tracking-widest text-sm font-semibold uppercase" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                    Renovation Experts
                  </span>
                  <div className="h-px w-16 bg-gradient-to-l from-transparent to-[#f1424b]"></div>
                </div>

                <h1 className="text-5xl md:text-6xl font-bold text-white mb-8 leading-tight" style={{ fontFamily: "'Playfair Display', serif" }}>
                  Rehab<br />Projects
                </h1>

                <p className="text-white/80 text-xl leading-relaxed mb-12" style={{ fontFamily: "'Inter', sans-serif" }}>
                  Transforming properties through expert renovation and rehabilitation for maximum value enhancement.
                </p>

                <div className="flex flex-wrap gap-6">
                  <Link
                    href="/contact"
                    className="bg-white text-[#22346e] hover:bg-gray-100 font-semibold py-4 px-8 rounded-xl transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-xl flex items-center gap-3"
                    style={{ fontFamily: "'Montserrat', sans-serif" }}
                  >
                    Start Your Rehab Project
                    <ChevronRight className="w-5 h-5" />
                  </Link>
                  <button className="bg-transparent border-2 border-white/30 hover:border-white text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 transform hover:-translate-y-1 flex items-center gap-3"
                    style={{ fontFamily: "'Montserrat', sans-serif" }}
                  >
                    <Phone className="w-5 h-5" />
                    Free Consultation
                  </button>
                </div>
              </div>

              {/* Stats Card */}
              <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
                <div className="grid grid-cols-2 gap-6 mb-8">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-white mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>50%</div>
                    <div className="text-white/70 text-sm uppercase tracking-wider" style={{ fontFamily: "'Montserrat', sans-serif" }}>Avg Value Increase</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-white mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>300+</div>
                    <div className="text-white/70 text-sm uppercase tracking-wider" style={{ fontFamily: "'Montserrat', sans-serif" }}>Projects Completed</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-white mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>95%</div>
                    <div className="text-white/70 text-sm uppercase tracking-wider" style={{ fontFamily: "'Montserrat', sans-serif" }}>On-Time Delivery</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-white mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>$2M+</div>
                    <div className="text-white/70 text-sm uppercase tracking-wider" style={{ fontFamily: "'Montserrat', sans-serif" }}>Value Added</div>
                  </div>
                </div>

                <div className="border-t border-white/20 pt-8">
                  <div className="flex items-center gap-4">
                    <HardHat className="w-8 h-8 text-amber-400" />
                    <div>
                      <h4 className="text-white font-semibold text-lg" style={{ fontFamily: "'Montserrat', sans-serif" }}>Licensed Contractors</h4>
                      <p className="text-white/70 text-sm" style={{ fontFamily: "'Inter', sans-serif" }}>Fully insured & certified professionals</p>
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
                  Welcome to Our Rehab Projects Service
                </h2>

                <div className="space-y-6">
                  <p className="text-gray-700 text-lg leading-relaxed" style={{ fontFamily: "'Inter', sans-serif" }}>
                    We focus at Excel Residential Services to bring properties back to life through our professional rehabilitation services.
                  </p>
                  <p className="text-gray-700 text-lg leading-relaxed" style={{ fontFamily: "'Inter', sans-serif" }}>
                    Whether it's a single-family home, multi-unit property, or commercial asset, we ensure every rehabilitation project enhances the value, functionality, and aesthetics of your investment.
                  </p>
                </div>

                {/* Key Benefits */}
                <div className="mt-12 grid grid-cols-2 gap-6">
                  <div className="flex items-start gap-4">
                    <TrendingUp className="w-6 h-6 text-green-500 mt-1" />
                    <div>
                      <h4 className="font-semibold text-[#22346e] mb-2" style={{ fontFamily: "'Montserrat', sans-serif" }}>Value Enhancement</h4>
                      <p className="text-gray-600 text-sm" style={{ fontFamily: "'Inter', sans-serif" }}>Maximum return on investment</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Sparkles className="w-6 h-6 text-amber-500 mt-1" />
                    <div>
                      <h4 className="font-semibold text-[#22346e] mb-2" style={{ fontFamily: "'Montserrat', sans-serif" }}>Modernization</h4>
                      <p className="text-gray-600 text-sm" style={{ fontFamily: "'Inter', sans-serif" }}>Contemporary design & finishes</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Rehab Visualization */}
              <div className="relative">
                <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-3xl p-8">
                  <div className="relative">
                    <div className="absolute -top-6 -left-6 w-24 h-24 bg-amber-100 rounded-2xl"></div>
                    <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-orange-100 rounded-2xl"></div>

                    <div className="relative bg-white rounded-2xl p-8 shadow-2xl">
                      <Hammer className="w-16 h-16 text-[#22346e] mb-6 mx-auto" />
                      <h3 className="text-2xl font-bold text-[#22346e] text-center mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
                        Complete Property Rehabilitation
                      </h3>
                      <div className="space-y-4">
                        {['Structural Renovations', 'Interior Modernization', 'Exterior Upgrades', 'System Improvements'].map((item, index) => (
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

      {/* Why Choose Us Section */}
      <section className="py-24 bg-gradient-to-b from-white to-gray-100">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-4 mb-6">
                <div className="h-px w-16 bg-gradient-to-r from-transparent to-[#f1424b]"></div>
                <span className="text-[#f1424b] tracking-widest text-sm font-semibold uppercase" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                  Our Advantages
                </span>
                <div className="h-px w-16 bg-gradient-to-l from-transparent to-[#f1424b]"></div>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-[#22346e] mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
                Why Choose Us for Your Rehab Projects?
              </h2>
              <p className="text-gray-600 text-lg max-w-3xl mx-auto" style={{ fontFamily: "'Inter', sans-serif" }}>
                Professional rehabilitation services with proven results and complete satisfaction
              </p>
            </div>

            {/* Advantages Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
              {/* Expertise in Renovation */}
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-2">
                <div className="flex items-start gap-6 mb-6">
                  <div className="w-14 h-14 bg-gradient-to-br from-blue-100 to-cyan-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Wrench className="w-7 h-7 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-[#22346e] mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>
                      Expertise in Renovation
                    </h3>
                    <div className="flex items-center gap-2">
                      <Award className="w-4 h-4 text-blue-500" />
                      <span className="text-sm text-gray-600" style={{ fontFamily: "'Inter', sans-serif" }}>Professional Craftsmanship</span>
                    </div>
                  </div>
                </div>

                <p className="text-gray-700 leading-relaxed mb-6" style={{ fontFamily: "'Inter', sans-serif" }}>
                  At Excel Residential Services, our expertise in maintenance ensures that every property we manage is transformed with accuracy and care.
                </p>

                <div className="bg-blue-50 rounded-xl p-6">
                  <h4 className="font-semibold text-[#22346e] mb-4" style={{ fontFamily: "'Montserrat', sans-serif" }}>Our Expertise Includes:</h4>
                  <div className="space-y-3">
                    {['Minor improvements to full reconstruction', 'Aesthetic and functional enhancement', 'High-quality materials selection', 'Modern design solutions'].map((item, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                        <span className="text-sm text-gray-700" style={{ fontFamily: "'Inter', sans-serif" }}>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Customized Solutions */}
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-2">
                <div className="flex items-start gap-6 mb-6">
                  <div className="w-14 h-14 bg-gradient-to-br from-purple-100 to-pink-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Target className="w-7 h-7 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-[#22346e] mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>
                      Customized Solutions
                    </h3>
                    <div className="flex items-center gap-2">
                      <Layers className="w-4 h-4 text-purple-500" />
                      <span className="text-sm text-gray-600" style={{ fontFamily: "'Inter', sans-serif" }}>Tailored to Your Needs</span>
                    </div>
                  </div>
                </div>

                <p className="text-gray-700 leading-relaxed mb-6" style={{ fontFamily: "'Inter', sans-serif" }}>
                  We acknowledge that each property has unique needs, so we provide tailored solutions adapted to your specific requirements.
                </p>

                <div className="bg-purple-50 rounded-xl p-6">
                  <h4 className="font-semibold text-[#22346e] mb-4" style={{ fontFamily: "'Montserrat', sans-serif" }}>Our Customization:</h4>
                  <div className="space-y-3">
                    {['Personalized property strategies', 'Budget-specific planning', 'Property-type specialization', 'Goal-oriented approaches'].map((item, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-purple-500" />
                        <span className="text-sm text-gray-700" style={{ fontFamily: "'Inter', sans-serif" }}>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Quality Assurance */}
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-2">
                <div className="flex items-start gap-6 mb-6">
                  <div className="w-14 h-14 bg-gradient-to-br from-green-100 to-emerald-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Shield className="w-7 h-7 text-green-600" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-[#22346e] mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>
                      Quality Assurance
                    </h3>
                    <div className="flex items-center gap-2">
                      <ClipboardCheck className="w-4 h-4 text-green-500" />
                      <span className="text-sm text-gray-600" style={{ fontFamily: "'Inter', sans-serif" }}>Highest Standards</span>
                    </div>
                  </div>
                </div>

                <p className="text-gray-700 leading-relaxed mb-6" style={{ fontFamily: "'Inter', sans-serif" }}>
                  Excel Residential Services places quality assurance at the heart of our property management services.
                </p>

                <div className="bg-green-50 rounded-xl p-6">
                  <h4 className="font-semibold text-[#22346e] mb-4" style={{ fontFamily: "'Montserrat', sans-serif" }}>Our Quality Standards:</h4>
                  <div className="space-y-3">
                    {['Strict inspection protocols', 'Premium material selection', 'Vetted contractor partnerships', 'Long-term durability focus'].map((item, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        <span className="text-sm text-gray-700" style={{ fontFamily: "'Inter', sans-serif" }}>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Timely Delivery */}
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-2">
                <div className="flex items-start gap-6 mb-6">
                  <div className="w-14 h-14 bg-gradient-to-br from-orange-100 to-yellow-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Clock className="w-7 h-7 text-orange-600" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-[#22346e] mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>
                      Timely Delivery
                    </h3>
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-orange-500" />
                      <span className="text-sm text-gray-600" style={{ fontFamily: "'Inter', sans-serif" }}>On-Schedule Completion</span>
                    </div>
                  </div>
                </div>

                <p className="text-gray-700 leading-relaxed mb-6" style={{ fontFamily: "'Inter', sans-serif" }}>
                  Early delivery is the cornerstone of our real estate management services, ensuring every project is completed on schedule.
                </p>

                <div className="bg-orange-50 rounded-xl p-6">
                  <h4 className="font-semibold text-[#22346e] mb-4" style={{ fontFamily: "'Montserrat', sans-serif" }}>Our Process:</h4>
                  <div className="space-y-3">
                    {['Structured project timelines', 'Clear milestone tracking', 'Efficient workflow management', 'Proactive deadline management'].map((item, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-orange-500" />
                        <span className="text-sm text-gray-700" style={{ fontFamily: "'Inter', sans-serif" }}>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Cost-Effective Banner */}
            <div className="mt-16 bg-gradient-to-r from-[#22346e] to-[#1a2a5a] rounded-3xl p-10">
              <div className="grid lg:grid-cols-3 gap-8 items-center">
                <div className="lg:col-span-2">
                  <div className="flex items-center gap-4 mb-6">
                    <DollarSign className="w-12 h-12 text-green-400" />
                    <div>
                      <h3 className="text-3xl font-bold text-white" style={{ fontFamily: "'Playfair Display', serif" }}>
                        Cost-Effective Services
                      </h3>
                      <div className="flex items-center gap-2 mt-2">
                        <TrendingUp className="w-5 h-5 text-green-400" />
                        <span className="text-white/80 text-sm" style={{ fontFamily: "'Inter', sans-serif" }}>Maximum ROI</span>
                      </div>
                    </div>
                  </div>

                  <p className="text-white/90 text-lg leading-relaxed" style={{ fontFamily: "'Inter', sans-serif" }}>
                    At Excel Residential Services, we provide premium property management services without compromising quality. Our strategic approach ensures property owners maximize their investment through efficient renovations and smart budget solutions.
                  </p>
                </div>

                <div className="text-center">
                  <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6">
                    <div className="text-4xl font-bold text-white mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>20-30%</div>
                    <div className="text-white/80 text-sm uppercase tracking-wider" style={{ fontFamily: "'Montserrat', sans-serif" }}>Cost Savings</div>
                    <p className="text-white/70 text-xs mt-2" style={{ fontFamily: "'Inter', sans-serif" }}>Through vendor partnerships</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Project Types Section */}
      <section className="py-24">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-[#22346e] mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
                Our Rehab Project Types
              </h2>
              <p className="text-gray-600 text-lg max-w-3xl mx-auto" style={{ fontFamily: "'Inter', sans-serif" }}>
                Comprehensive rehabilitation services for all property types
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-lg text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Home className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-[#22346e] mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
                  Single-Family Homes
                </h3>
                <p className="text-gray-600 text-sm" style={{ fontFamily: "'Inter', sans-serif" }}>
                  Complete renovations and modernizations for residential properties
                </p>
              </div>

              <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-lg text-center">
                <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Building2 className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-[#22346e] mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
                  Multi-Unit Properties
                </h3>
                <p className="text-gray-600 text-sm" style={{ fontFamily: "'Inter', sans-serif" }}>
                  Large-scale renovations for apartment complexes and condominiums
                </p>
              </div>

              <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-lg text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <TrendingUp className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-bold text-[#22346e] mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
                  Commercial Properties
                </h3>
                <p className="text-gray-600 text-sm" style={{ fontFamily: "'Inter', sans-serif" }}>
                  Professional rehabilitation for retail and commercial spaces
                </p>
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
                <Hammer className="w-16 h-16 text-white mx-auto mb-6" />
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
                  Transform Your Property
                </h2>
                <p className="text-white/80 text-lg mb-10 max-w-2xl mx-auto leading-relaxed" style={{ fontFamily: "'Inter', sans-serif" }}>
                  Start your property rehabilitation project with our expert team and maximize your investment returns
                </p>
                <div className="flex flex-col sm:flex-row gap-5 justify-center">
                  <Link
                    href="/contact"
                    className="bg-white text-[#22346e] hover:bg-gray-100 font-semibold py-4 px-12 rounded-xl transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-xl flex items-center gap-3 justify-center group"
                    style={{ fontFamily: "'Montserrat', sans-serif" }}
                  >
                    <Calendar className="w-5 h-5" />
                    Schedule Project Consultation
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

export default RehabProjects;