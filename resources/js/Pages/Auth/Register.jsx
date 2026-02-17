import React from 'react';
import { Head, Link, useForm } from '@inertiajs/react';
import { 
    UserPlus, 
    Mail, 
    Lock, 
    User,
    Eye, 
    EyeOff,
    Home,
    Shield,
    CheckCircle,
    Building,
    ArrowRight
} from 'lucide-react';

export default function Register() {
    const { data, setData, post, processing, errors, reset } = useForm({
        name: '',
        email: '',
        password: '',
        password_confirmation: '',
    });

    const [showPassword, setShowPassword] = React.useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = React.useState(false);

    const submit = (e) => {
        e.preventDefault();
        post(route('register'), {
            onFinish: () => reset('password', 'password_confirmation'),
        });
    };

    // Password strength checker
    const checkPasswordStrength = (password) => {
        if (!password) return { score: 0, label: 'Empty', color: 'bg-gray-200' };
        
        let score = 0;
        if (password.length >= 8) score++;
        if (/[A-Z]/.test(password)) score++;
        if (/[0-9]/.test(password)) score++;
        if (/[^A-Za-z0-9]/.test(password)) score++;
        
        const levels = [
            { score: 0, label: 'Very Weak', color: 'bg-red-500' },
            { score: 1, label: 'Weak', color: 'bg-orange-500' },
            { score: 2, label: 'Fair', color: 'bg-yellow-500' },
            { score: 3, label: 'Good', color: 'bg-blue-500' },
            { score: 4, label: 'Strong', color: 'bg-green-500' },
        ];
        
        return levels[Math.min(score, 4)];
    };

    const passwordStrength = checkPasswordStrength(data.password);

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
            <Head title="Create Account | Excel Residential Services" />
            
            {/* Background Pattern */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-[#22346e]/5 to-transparent rounded-full blur-3xl"></div>
                <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-[#f1424b]/5 to-transparent rounded-full blur-3xl"></div>
                <div className="absolute inset-0 opacity-[0.03]">
                    <div className="absolute inset-0" style={{
                        backgroundImage: `radial-gradient(circle at 2px 2px, #22346e 2px, transparent 0)`,
                        backgroundSize: '60px 60px'
                    }}></div>
                </div>
            </div>

            <div className="relative z-10 sm:mx-auto sm:w-full sm:max-w-md">
                {/* Logo Section */}
                <div className="text-center">
                    <div className="flex justify-center mb-8">
                        <div className="relative">
                            <div className="absolute inset-0 bg-gradient-to-r from-[#22346e] to-[#f1424b] rounded-2xl blur-lg opacity-30"></div>
                            <div className="relative bg-white p-4 rounded-2xl shadow-2xl border border-gray-100">
                                <img 
                                    src="/logo.png" 
                                    alt="Excel Residential Services"
                                    className="h-16 w-auto"
                                />
                            </div>
                        </div>
                    </div>

                    <div className="mb-2">
                        <div className="inline-flex items-center gap-3">
                            <div className="h-px w-8 bg-gradient-to-r from-transparent to-[#f1424b]"></div>
                            <div className="p-2 bg-gradient-to-r from-[#22346e] to-[#1a2a5a] rounded-lg">
                                <UserPlus className="w-5 h-5 text-white" />
                            </div>
                            <div className="h-px w-8 bg-gradient-to-l from-transparent to-[#f1424b]"></div>
                        </div>
                    </div>

                    <h2 className="text-4xl font-bold text-[#22346e] mb-3" style={{ fontFamily: "'Playfair Display', serif" }}>
                        Create Account
                    </h2>
            
                </div>

                {/* Registration Form */}
                <div className="mt-10 bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden">
                    <div className="px-8 py-8 sm:px-10">
                        <form onSubmit={submit} className="space-y-6">
                            {/* Name Field */}
                            <div className="space-y-2">
                                <label className="block text-sm font-medium text-gray-700" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                                    Full Name
                                </label>
                                <div className="relative">
                                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                        <User className="h-5 w-5 text-gray-400" />
                                    </div>
                                    <input
                                        id="name"
                                        type="text"
                                        name="name"
                                        value={data.name}
                                        autoComplete="name"
                                        required
                                        onChange={(e) => setData('name', e.target.value)}
                                        className="block w-full pl-10 pr-3 py-3 border border-gray-200 rounded-xl bg-gray-50 focus:outline-none focus:ring-2 focus:ring-[#22346e]/20 focus:border-[#22346e] transition-all duration-300"
                                        placeholder="John Doe"
                                        style={{ fontFamily: "'Inter', sans-serif" }}
                                    />
                                </div>
                                {errors.name && (
                                    <p className="text-red-500 text-xs mt-1 flex items-center gap-1" style={{ fontFamily: "'Inter', sans-serif" }}>
                                        <span>⚠</span> {errors.name}
                                    </p>
                                )}
                            </div>

                            {/* Email Field */}
                            <div className="space-y-2">
                                <label className="block text-sm font-medium text-gray-700" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                                    Email Address
                                </label>
                                <div className="relative">
                                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                        <Mail className="h-5 w-5 text-gray-400" />
                                    </div>
                                    <input
                                        id="email"
                                        type="email"
                                        name="email"
                                        value={data.email}
                                        autoComplete="email"
                                        required
                                        onChange={(e) => setData('email', e.target.value)}
                                        className="block w-full pl-10 pr-3 py-3 border border-gray-200 rounded-xl bg-gray-50 focus:outline-none focus:ring-2 focus:ring-[#22346e]/20 focus:border-[#22346e] transition-all duration-300"
                                        placeholder="john@example.com"
                                        style={{ fontFamily: "'Inter', sans-serif" }}
                                    />
                                </div>
                                {errors.email && (
                                    <p className="text-red-500 text-xs mt-1 flex items-center gap-1" style={{ fontFamily: "'Inter', sans-serif" }}>
                                        <span>⚠</span> {errors.email}
                                    </p>
                                )}
                            </div>

                            {/* Password Field */}
                            <div className="space-y-2">
                                <label className="block text-sm font-medium text-gray-700" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                                    Password
                                </label>
                                <div className="relative">
                                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                        <Lock className="h-5 w-5 text-gray-400" />
                                    </div>
                                    <input
                                        id="password"
                                        type={showPassword ? "text" : "password"}
                                        name="password"
                                        value={data.password}
                                        autoComplete="new-password"
                                        required
                                        onChange={(e) => setData('password', e.target.value)}
                                        className="block w-full pl-10 pr-10 py-3 border border-gray-200 rounded-xl bg-gray-50 focus:outline-none focus:ring-2 focus:ring-[#22346e]/20 focus:border-[#22346e] transition-all duration-300"
                                        placeholder="••••••••"
                                        style={{ fontFamily: "'Inter', sans-serif" }}
                                    />
                                    <button
                                        type="button"
                                        onClick={() => setShowPassword(!showPassword)}
                                        className="absolute inset-y-0 right-0 pr-3 flex items-center"
                                    >
                                        {showPassword ? (
                                            <EyeOff className="h-5 w-5 text-gray-400 hover:text-gray-600 transition-colors duration-300" />
                                        ) : (
                                            <Eye className="h-5 w-5 text-gray-400 hover:text-gray-600 transition-colors duration-300" />
                                        )}
                                    </button>
                                </div>
                                
                                {/* Password Strength Meter */}
                                {data.password && (
                                    <div className="space-y-2">
                                        <div className="flex items-center justify-between">
                                            <span className="text-xs text-gray-500">Password strength:</span>
                                            <span className="text-xs font-medium" style={{ color: passwordStrength.color.replace('bg-', 'text-') }}>
                                                {passwordStrength.label}
                                            </span>
                                        </div>
                                        <div className="w-full bg-gray-200 rounded-full h-1.5">
                                            <div 
                                                className={`${passwordStrength.color} h-1.5 rounded-full transition-all duration-500`}
                                                style={{ width: `${(passwordStrength.score / 4) * 100}%` }}
                                            ></div>
                                        </div>
                                    </div>
                                )}
                                
                                {errors.password && (
                                    <p className="text-red-500 text-xs mt-1 flex items-center gap-1" style={{ fontFamily: "'Inter', sans-serif" }}>
                                        <span>⚠</span> {errors.password}
                                    </p>
                                )}
                            </div>

                            {/* Confirm Password Field */}
                            <div className="space-y-2">
                                <label className="block text-sm font-medium text-gray-700" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                                    Confirm Password
                                </label>
                                <div className="relative">
                                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                        <Lock className="h-5 w-5 text-gray-400" />
                                    </div>
                                    <input
                                        id="password_confirmation"
                                        type={showConfirmPassword ? "text" : "password"}
                                        name="password_confirmation"
                                        value={data.password_confirmation}
                                        autoComplete="new-password"
                                        required
                                        onChange={(e) => setData('password_confirmation', e.target.value)}
                                        className="block w-full pl-10 pr-10 py-3 border border-gray-200 rounded-xl bg-gray-50 focus:outline-none focus:ring-2 focus:ring-[#22346e]/20 focus:border-[#22346e] transition-all duration-300"
                                        placeholder="••••••••"
                                        style={{ fontFamily: "'Inter', sans-serif" }}
                                    />
                                    <button
                                        type="button"
                                        onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                                        className="absolute inset-y-0 right-0 pr-3 flex items-center"
                                    >
                                        {showConfirmPassword ? (
                                            <EyeOff className="h-5 w-5 text-gray-400 hover:text-gray-600 transition-colors duration-300" />
                                        ) : (
                                            <Eye className="h-5 w-5 text-gray-400 hover:text-gray-600 transition-colors duration-300" />
                                        )}
                                    </button>
                                </div>
                                {errors.password_confirmation && (
                                    <p className="text-red-500 text-xs mt-1 flex items-center gap-1" style={{ fontFamily: "'Inter', sans-serif" }}>
                                        <span>⚠</span> {errors.password_confirmation}
                                    </p>
                                )}
                            </div>

                            {/* Password Requirements */}
                            <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
                                <h4 className="text-sm font-semibold text-[#22346e] mb-2" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                                    Password Requirements:
                                </h4>
                                <ul className="space-y-1 text-xs text-gray-600">
                                    <li className="flex items-center gap-2">
                                        <CheckCircle className={`w-3 h-3 ${data.password.length >= 8 ? 'text-green-500' : 'text-gray-300'}`} />
                                        <span>At least 8 characters</span>
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <CheckCircle className={`w-3 h-3 ${/[A-Z]/.test(data.password) ? 'text-green-500' : 'text-gray-300'}`} />
                                        <span>One uppercase letter</span>
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <CheckCircle className={`w-3 h-3 ${/[0-9]/.test(data.password) ? 'text-green-500' : 'text-gray-300'}`} />
                                        <span>One number</span>
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <CheckCircle className={`w-3 h-3 ${/[^A-Za-z0-9]/.test(data.password) ? 'text-green-500' : 'text-gray-300'}`} />
                                        <span>One special character</span>
                                    </li>
                                </ul>
                            </div>

                            {/* Register Button */}
                            <button
                                type="submit"
                                disabled={processing}
                                className="w-full bg-gradient-to-r from-[#22346e] to-[#1a2a5a] hover:from-[#f1424b] hover:to-[#d4333b] text-white font-semibold py-4 px-6 rounded-xl transition-all duration-500 transform hover:-translate-y-0.5 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                                style={{ fontFamily: "'Montserrat', sans-serif" }}
                            >
                                <div className="flex items-center justify-center gap-3">
                                    {processing ? (
                                        <>
                                            <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                            </svg>
                                            <span>Creating Account...</span>
                                        </>
                                    ) : (
                                        <>
                                            <span>Create Account</span>
                                            <ArrowRight className="w-5 h-5" />
                                        </>
                                    )}
                                </div>
                            </button>
                        </form>
                    </div>

                    {/* Footer */}
                    <div className="px-8 py-6 bg-gradient-to-r from-gray-50 to-gray-100 border-t border-gray-200 sm:px-10">
                        <div className="text-center">
                            <p className="text-xs text-gray-500" style={{ fontFamily: "'Inter', sans-serif" }}>
                                Already have an account?{' '}
                                <Link 
                                    href={route('login')} 
                                    className="text-[#22346e] hover:text-[#f1424b] font-medium transition-colors duration-300"
                                    style={{ fontFamily: "'Montserrat', sans-serif" }}
                                >
                                    Sign in here
                                </Link>
                            </p>
                        </div>
                    </div>
                </div>

                {/* Back to Home */}
                <div className="mt-8 text-center">
                    <Link
                        href="/"
                        className="inline-flex items-center gap-2 text-[#22346e] hover:text-[#f1424b] font-medium transition-colors duration-300 group"
                        style={{ fontFamily: "'Montserrat', sans-serif" }}
                    >
                        <Home className="w-4 h-4" />
                        <span>Back to Homepage</span>
                        <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                    </Link>
                </div>

            </div>
        </div>
    );
}