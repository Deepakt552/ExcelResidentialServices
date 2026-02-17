import React from 'react';
import { Link } from "@inertiajs/react";
import {
  Building2,
  Award,
  Users,
  Target,
  Home,
  MapPin,
  Calendar,
  ChevronRight,
  Shield,
  TrendingUp,
  Clock,
  BarChart3,
  Heart
} from 'lucide-react';
import Footer from '@/Components/Footer';
import Header from '@/Components/Header';
import Logopage from '@/Components/logopage';
import Seo from '@/Components/Seo';

const AboutUs = () => {
  const seoData = {
    title: "About Us | Excel Residential Services - Premier Property Management",
    description: "Learn about Excel Residential Services, Inc., a leader in multifamily and affordable housing property management since 2001. Serving Los Angeles, San Diego, San Jose, Fresno, Sacramento, and beyond.",
    keywords: "Excel Residential Services, Property Management, Multifamily Real Estate, Affordable Housing, Los Angeles Property Management, San Diego Property Management, San Jose, Fresno, Sacramento, California Real Estate",
    image: '/images/about-us.png',
    schema: {
      "@context": "https://schema.org",
      "@type": "RealEstateAgent",
      "name": "Excel Residential Services, Inc.",
      "image": "https://excelresidential.com/images/about-us.png",
      "description": "Full-service property management company specializing in multifamily and affordable housing.",
      "address": {
        "@type": "PostalAddress",
        "addressRegion": "CA",
        "addressCountry": "US"
      },
      "foundingDate": "2001",
      "areaServed": ["Los Angeles", "San Diego", "San Jose", "Fresno", "Sacramento"]
    }
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
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center gap-4 mb-8">
                  <div className="h-px w-16 bg-gradient-to-r from-transparent to-[#f1424b]"></div>
                  <span className="text-[#f1424b] tracking-widest text-sm font-semibold uppercase" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                    Our Story
                  </span>
                  <div className="h-px w-16 bg-gradient-to-l from-transparent to-[#f1424b]"></div>
                </div>

                <h1 className="text-5xl md:text-6xl font-bold text-white mb-8 leading-tight" style={{ fontFamily: "'Playfair Display', serif" }}>
                  Your housing needs<br />deserve the care<br />of a specialist
                </h1>

                <p className="text-white/80 text-xl leading-relaxed mb-12" style={{ fontFamily: "'Inter', sans-serif" }}>
                  Since 2001, we've been transforming property management with expertise, innovation, and personalized care.
                </p>

                <div className="flex flex-wrap gap-6">
                  <Link
                    href="/contact"
                    className="bg-white text-[#22346e] hover:bg-gray-100 font-semibold py-4 px-8 rounded-xl transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-xl flex items-center gap-3"
                    style={{ fontFamily: "'Montserrat', sans-serif" }}
                  >
                    Contact Our Team
                    <ChevronRight className="w-5 h-5" />
                  </Link>
                  <Link
                    href="/services"
                    className="bg-transparent border-2 border-white/30 hover:border-white text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 transform hover:-translate-y-1 flex items-center gap-3"
                    style={{ fontFamily: "'Montserrat', sans-serif" }}
                  >
                    Our Services
                    <ChevronRight className="w-5 h-5" />
                  </Link>
                </div>
              </div>

              {/* Hero Stats */}
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 text-center">
                  <div className="text-4xl font-bold text-white mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>23+</div>
                  <div className="text-white/80 text-sm uppercase tracking-wider" style={{ fontFamily: "'Montserrat', sans-serif" }}>Years Experience</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 text-center">
                  <div className="text-4xl font-bold text-white mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>17K+</div>
                  <div className="text-white/80 text-sm uppercase tracking-wider" style={{ fontFamily: "'Montserrat', sans-serif" }}>Units Managed</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 text-center">
                  <div className="text-4xl font-bold text-white mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>200+</div>
                  <div className="text-white/80 text-sm uppercase tracking-wider" style={{ fontFamily: "'Montserrat', sans-serif" }}>Properties</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 text-center">
                  <div className="text-4xl font-bold text-white mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>100+</div>
                  <div className="text-white/80 text-sm uppercase tracking-wider" style={{ fontFamily: "'Montserrat', sans-serif" }}>Team Years</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Content Section */}
      <section className="py-24">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-start">
              {/* Left Content */}
              <div>
                <div className="inline-flex items-center gap-4 mb-6">
                  <div className="h-px w-12 bg-[#f1424b]"></div>
                  <span className="text-[#22346e] font-medium tracking-wider uppercase" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                    About Us
                  </span>
                  <div className="h-px w-12 bg-[#f1424b]"></div>
                </div>

                <h2 className="text-4xl md:text-5xl font-bold text-[#22346e] mb-8 leading-tight" style={{ fontFamily: "'Playfair Display', serif" }}>
                  Excel Residential Services, Inc.
                </h2>

                <div className="space-y-8">
                  <div className="bg-gradient-to-br from-[#22346e]/5 to-transparent rounded-2xl p-6">
                    <p className="text-gray-700 text-lg leading-relaxed" style={{ fontFamily: "'Inter', sans-serif" }}>
                      Excel Residential Services, Inc. is a full-service property management company established in 2001, specializing in multifamily real estate.
                    </p>
                  </div>

                  <div className="space-y-6">
                    <p className="text-gray-700 leading-relaxed" style={{ fontFamily: "'Inter', sans-serif" }}>
                      The company has managed over 112 properties consisting of over 6,500 apartment units. Additionally, affiliate companies of Excel Residential Services, Inc. have managed over 200 properties, totaling more than seventeen thousand (17,000) apartment units in the United States.
                    </p>

                    <p className="text-gray-700 leading-relaxed" style={{ fontFamily: "'Inter', sans-serif" }}>
                      Since 2015, Excel Residential Services, Inc. has also started managing affordable housing residential apartments totaling 2323 units in Los Angeles, San Diego, San Jose, Fresno, Sacramento, California.
                    </p>

                    <p className="text-gray-700 leading-relaxed" style={{ fontFamily: "'Inter', sans-serif" }}>
                      Excel Residential Services, Inc. employs a highly motivated team of talented individuals with diverse skills and over 100+ years of property management experience. This experience provides market-specific expertise in a complex and evolving real estate landscape.
                    </p>

                    <div className="bg-gradient-to-br from-[#f1424b]/5 to-transparent rounded-2xl p-6 border border-[#f1424b]/10">
                      <p className="text-gray-700 leading-relaxed font-medium" style={{ fontFamily: "'Inter', sans-serif" }}>
                        Excel Residential Services, Inc. recognizes that each property is unique and customizes its services to fit each property's specific needs, maximizing value and results for property owners.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Side - Image & Design */}
              <div className="relative">
                {/* Decorative Frame */}
                <div className="absolute -top-6 -right-6 w-32 h-32 bg-gradient-to-br from-[#22346e]/10 to-transparent rounded-2xl"></div>
                <div className="absolute -bottom-6 -left-6 w-40 h-40 bg-gradient-to-tr from-[#f1424b]/10 to-transparent rounded-2xl"></div>

                {/* Main Image Card */}
                <div className="relative bg-white rounded-3xl shadow-2xl overflow-hidden">
                  <div className="h-80 relative group">
                    <img
                      src="/images/about-us.png"
                      alt="Excel Residential Services Team"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#22346e]/60 to-transparent"></div>
                  </div>

                  {/* Content Overlay */}
                  <div className="p-8">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-14 h-14 bg-gradient-to-br from-[#22346e]/10 to-transparent rounded-2xl flex items-center justify-center">
                        <Award className="w-7 h-7 text-[#22346e]" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-[#22346e]" style={{ fontFamily: "'Playfair Display', serif" }}>
                          Award-Winning Service
                        </h3>
                        <p className="text-gray-600 text-sm" style={{ fontFamily: "'Inter', sans-serif" }}>
                          Recognized for excellence in property management
                        </p>
                      </div>
                    </div>

                    <div className="space-y-4">
                      {[
                        { icon: <Target className="w-5 h-5" />, text: 'Specialized in multifamily real estate' },
                        { icon: <MapPin className="w-5 h-5" />, text: 'Serving major California cities' },
                        { icon: <Users className="w-5 h-5" />, text: '100+ years combined team experience' },
                        { icon: <Shield className="w-5 h-5" />, text: 'Full-service property management' }
                      ].map((item, index) => (
                        <div key={index} className="flex items-center gap-3">
                          <div className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center">
                            {item.icon}
                          </div>
                          <span className="text-gray-700" style={{ fontFamily: "'Inter', sans-serif" }}>{item.text}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Stats Card */}
                <div className="mt-8 bg-gradient-to-r from-[#22346e] to-[#1a2a5a] rounded-2xl p-8 text-white relative overflow-hidden">
                  <div className="absolute inset-0 opacity-10">
                    <div className="absolute inset-0" style={{
                      backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M20 38.5C9.8 38.5 1.5 30.2 1.5 20S9.8 1.5 20 1.5 38.5 9.8 38.5 20 30.2 38.5 20 38.5zm0-36C10.34 2.5 2.5 10.34 2.5 20S10.34 37.5 20 37.5 37.5 29.66 37.5 20 29.66 2.5 20 2.5z'/%3E%3Cpath d='M20 34c7.732 0 14-6.268 14-14S27.732 6 20 6 6 12.268 6 20s6.268 14 14 14zm0-27c7.18 0 13 5.82 13 13s-5.82 13-13 13S7 27.18 7 20 12.82 7 20 7z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                    }}></div>
                  </div>

                  <div className="relative z-10">
                    <h3 className="text-xl font-bold mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
                      Affordable Housing Management
                    </h3>
                    <div className="flex items-center gap-2 mb-4">
                      <Home className="w-5 h-5 text-[#f1424b]" />
                      <span className="text-lg font-medium">2,323 Units</span>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      {['Los Angeles', 'San Diego', 'San Jose', 'Fresno', 'Sacramento'].map((city, index) => (
                        <div key={index} className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-[#f1424b] rounded-full"></div>
                          <span className="text-white/90 text-sm" style={{ fontFamily: "'Inter', sans-serif" }}>{city}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-gradient-to-b from-white to-gray-100">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-4 mb-6">
                <div className="h-px w-16 bg-gradient-to-r from-transparent to-[#f1424b]"></div>
                <span className="text-[#f1424b] tracking-widest text-sm font-semibold uppercase" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                  Our Values
                </span>
                <div className="h-px w-16 bg-gradient-to-l from-transparent to-[#f1424b]"></div>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-[#22346e] mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
                What Drives Our Excellence
              </h2>
              <p className="text-gray-600 text-lg max-w-3xl mx-auto" style={{ fontFamily: "'Inter', sans-serif" }}>
                Core principles that guide our approach to property management
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-2">
                <div className="w-14 h-14 bg-gradient-to-br from-[#22346e]/10 to-transparent rounded-2xl flex items-center justify-center mb-6">
                  <Target className="w-7 h-7 text-[#22346e]" />
                </div>
                <h3 className="text-2xl font-bold text-[#22346e] mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
                  Expertise
                </h3>
                <p className="text-gray-600 leading-relaxed" style={{ fontFamily: "'Inter', sans-serif" }}>
                  Over 100+ years of combined team experience providing market-specific expertise in a complex real estate landscape.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-2">
                <div className="w-14 h-14 bg-gradient-to-br from-[#f1424b]/10 to-transparent rounded-2xl flex items-center justify-center mb-6">
                  <Heart className="w-7 h-7 text-[#f1424b]" />
                </div>
                <h3 className="text-2xl font-bold text-[#22346e] mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
                  Customization
                </h3>
                <p className="text-gray-600 leading-relaxed" style={{ fontFamily: "'Inter', sans-serif" }}>
                  Recognizing that each property is unique, we customize our services to fit specific needs, maximizing value for property owners.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-2">
                <div className="w-14 h-14 bg-gradient-to-br from-green-500/10 to-transparent rounded-2xl flex items-center justify-center mb-6">
                  <TrendingUp className="w-7 h-7 text-green-500" />
                </div>
                <h3 className="text-2xl font-bold text-[#22346e] mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
                  Growth & Innovation
                </h3>
                <p className="text-gray-600 leading-relaxed" style={{ fontFamily: "'Inter', sans-serif" }}>
                  Continuously evolving since 2001, expanding from multifamily to affordable housing while maintaining excellence.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-2">
                <div className="w-14 h-14 bg-gradient-to-br from-blue-500/10 to-transparent rounded-2xl flex items-center justify-center mb-6">
                  <Users className="w-7 h-7 text-blue-500" />
                </div>
                <h3 className="text-2xl font-bold text-[#22346e] mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
                  Team Excellence
                </h3>
                <p className="text-gray-600 leading-relaxed" style={{ fontFamily: "'Inter', sans-serif" }}>
                  A highly motivated team of talented individuals with diverse skills dedicated to exceptional property management.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-2">
                <div className="w-14 h-14 bg-gradient-to-br from-purple-500/10 to-transparent rounded-2xl flex items-center justify-center mb-6">
                  <Shield className="w-7 h-7 text-purple-500" />
                </div>
                <h3 className="text-2xl font-bold text-[#22346e] mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
                  Full-Service Commitment
                </h3>
                <p className="text-gray-600 leading-relaxed" style={{ fontFamily: "'Inter', sans-serif" }}>
                  Comprehensive property management services covering every aspect from maintenance to financial oversight.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-2">
                <div className="w-14 h-14 bg-gradient-to-br from-amber-500/10 to-transparent rounded-2xl flex items-center justify-center mb-6">
                  <Clock className="w-7 h-7 text-amber-500" />
                </div>
                <h3 className="text-2xl font-bold text-[#22346e] mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
                  Long-Term Partnership
                </h3>
                <p className="text-gray-600 leading-relaxed" style={{ fontFamily: "'Inter', sans-serif" }}>
                  Building lasting relationships with property owners through consistent results and dedicated service since 2001.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Milestones Timeline */}
      <section className="py-24">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-[#22346e] mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
                Our Journey
              </h2>
              <p className="text-gray-600 text-lg max-w-3xl mx-auto" style={{ fontFamily: "'Inter', sans-serif" }}>
                Two decades of growth, innovation, and excellence in property management
              </p>
            </div>

            <div className="relative">
              {/* Timeline Line */}
              <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 h-full w-px bg-gradient-to-b from-[#22346e] via-[#f1424b] to-transparent"></div>

              <div className="space-y-16">
                {/* Milestone 1 */}
                <div className="flex flex-col lg:flex-row items-center">
                  <div className="lg:w-1/2 lg:pr-12">
                    <div className="bg-white rounded-2xl p-8 shadow-lg">
                      <div className="flex items-center gap-4 mb-4">
                        <Calendar className="w-6 h-6 text-[#22346e]" />
                        <h3 className="text-2xl font-bold text-[#22346e]" style={{ fontFamily: "'Playfair Display', serif" }}>
                          2001
                        </h3>
                      </div>
                      <h4 className="text-xl font-bold text-[#22346e] mb-3" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                        Company Foundation
                      </h4>
                      <p className="text-gray-600" style={{ fontFamily: "'Inter', sans-serif" }}>
                        Excel Residential Services, Inc. was established, specializing in multifamily property management.
                      </p>
                    </div>
                  </div>

                  <div className="relative lg:w-auto my-8 lg:my-0">
                    <div className="w-8 h-8 bg-white border-4 border-[#22346e] rounded-full relative z-10"></div>
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-[#f1424b]/20 rounded-full animate-pulse"></div>
                  </div>

                  <div className="lg:w-1/2"></div>
                </div>

                {/* Milestone 2 */}
                <div className="flex flex-col lg:flex-row items-center">
                  <div className="lg:w-1/2"></div>

                  <div className="relative lg:w-auto my-8 lg:my-0">
                    <div className="w-8 h-8 bg-white border-4 border-[#22346e] rounded-full relative z-10"></div>
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-[#f1424b]/20 rounded-full animate-pulse"></div>
                  </div>

                  <div className="lg:w-1/2 lg:pl-12">
                    <div className="bg-white rounded-2xl p-8 shadow-lg">
                      <div className="flex items-center gap-4 mb-4">
                        <BarChart3 className="w-6 h-6 text-[#f1424b]" />
                        <h3 className="text-2xl font-bold text-[#22346e]" style={{ fontFamily: "'Playfair Display', serif" }}>
                          2015
                        </h3>
                      </div>
                      <h4 className="text-xl font-bold text-[#22346e] mb-3" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                        Affordable Housing Expansion
                      </h4>
                      <p className="text-gray-600" style={{ fontFamily: "'Inter', sans-serif" }}>
                        Began managing affordable housing apartments totaling 2,323 units across major California cities.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Milestone 3 */}
                <div className="flex flex-col lg:flex-row items-center">
                  <div className="lg:w-1/2 lg:pr-12">
                    <div className="bg-white rounded-2xl p-8 shadow-lg">
                      <div className="flex items-center gap-4 mb-4">
                        <Award className="w-6 h-6 text-green-500" />
                        <h3 className="text-2xl font-bold text-[#22346e]" style={{ fontFamily: "'Playfair Display', serif" }}>
                          Today
                        </h3>
                      </div>
                      <h4 className="text-xl font-bold text-[#22346e] mb-3" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                        Industry Leadership
                      </h4>
                      <p className="text-gray-600" style={{ fontFamily: "'Inter', sans-serif" }}>
                        Managing over 200 properties and 17,000+ units nationwide with 100+ years of combined team experience.
                      </p>
                    </div>
                  </div>

                  <div className="relative lg:w-auto my-8 lg:my-0">
                    <div className="w-8 h-8 bg-white border-4 border-[#22346e] rounded-full relative z-10"></div>
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-[#f1424b]/20 rounded-full animate-pulse"></div>
                  </div>

                  <div className="lg:w-1/2"></div>
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
                <Building2 className="w-16 h-16 text-white mx-auto mb-6" />
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
                  Partner with Experience
                </h2>
                <p className="text-white/80 text-lg mb-10 max-w-2xl mx-auto leading-relaxed" style={{ fontFamily: "'Inter', sans-serif" }}>
                  Join hundreds of property owners who trust their investments to our expert team
                </p>
                <div className="flex flex-col sm:flex-row gap-5 justify-center">
                  <Link
                    href="/contact"
                    className="bg-white text-[#22346e] hover:bg-gray-100 font-semibold py-4 px-12 rounded-xl transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-xl flex items-center gap-3 justify-center group"
                    style={{ fontFamily: "'Montserrat', sans-serif" }}
                  >
                    Get Started
                    <ChevronRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
                  </Link>
                  <Link
                    href="/services"
                    className="bg-transparent border-2 border-white/30 hover:border-white text-white font-semibold py-4 px-12 rounded-xl transition-all duration-300 transform hover:-translate-y-1 flex items-center gap-3 justify-center group"
                    style={{ fontFamily: "'Montserrat', sans-serif" }}
                  >
                    View Services
                    <ChevronRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
                  </Link>
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

export default AboutUs;