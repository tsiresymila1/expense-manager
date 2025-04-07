"use client"
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { ArrowRight, CheckCircle, ChevronDown, ChevronUp, ExternalLink, FileText, Shield } from 'lucide-react';
import Link from 'next/link';
import React, { useState } from 'react';

export default function PrivacyPolicy() {
    const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>({
        description: true,
        collection: true,
        usage: true,
        sharing: false,
        security: false,
        rights: false,
        cookies: false,
        contact: false
    });

    const toggleSection = (section: string) => {
        setExpandedSections({
            ...expandedSections,
            [section]: !expandedSections[section]
        });
    };

    const SectionHeader = ({ section, title, icon }: { section: string, title: React.ReactNode, icon?: React.ReactNode }) => (
        <div
            className="flex items-center justify-between cursor-pointer py-4 border-b border-gray-100"
            onClick={() => toggleSection(section)}
        >
            <div className="flex items-center gap-2">
                {icon}
                <h3 className="text-lg font-semibold">{title}</h3>
            </div>
            {expandedSections[section] ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
        </div>
    );

    return (
        <div className="container mx-auto py-8 px-4 max-w-4xl">
            <Card className="shadow-lg">

                <div className="">
                    <CardContent className="p-6 text-sm">
                        <div className="space-y-6">
                            <div className="flex justify-between items-center">
                                <div className="text-sm text-muted-foreground">
                                    Last updated: April 7, 2025
                                </div>
                                <Link href="/terms">
                                    <Button variant="outline" size="sm" className="flex items-center gap-1">
                                        <FileText size={16} />
                                        Terms of Service
                                        <ArrowRight size={14} />
                                    </Button>
                                </Link>
                            </div>

                            {/* Introduction */}
                            <div>
                                <SectionHeader
                                    section="description"
                                    title="Introduction"
                                    icon={<Shield size={20} className="text-indigo-600" />}
                                />
                                {expandedSections.description && (
                                    <div className="py-4 text-gray-700 dark:text-gray-200 space-y-3">
                                        <p>
                                            {' Expense Manager ("we", "our", or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our Expense Manager application and website (collectively, the "Service").'}
                                        </p>
                                        <p>
                                            Please read this Privacy Policy carefully. By using the Service, you agree to the collection and use of information in accordance with this policy. If you do not agree with our policies and practices, do not use our Service.
                                        </p>
                                        <p>
                                            This Privacy Policy applies to all users of the Service, including those who register for an account and those who use the Service without registering.
                                        </p>
                                    </div>
                                )}
                            </div>

                            {/* Information Collection */}
                            <div>
                                <SectionHeader
                                    section="collection"
                                    title="Information We Collect"
                                    icon={<FileText size={20} className="text-indigo-600" />}
                                />
                                {expandedSections.collection && (
                                    <div className="py-4 text-gray-700 dark:text-gray-200 space-y-3">
                                        <p className="font-semibold">Information You Provide:</p>
                                        <ul className="list-disc pl-6 space-y-2">
                                            <li>
                                                <span className="font-medium">Account Information:</span> When you register, we collect your name, email address, and password. If you sign in with Google, we collect your Google profile information, including your name, email address, and profile image.
                                            </li>
                                            <li>
                                                <span className="font-medium">Financial Information:</span> To provide our expense management services, we collect financial data you input, such as income, expenses, receipts, budgets, and transaction information.
                                            </li>
                                            <li>
                                                <span className="font-medium">Communications:</span> If you contact us directly, we may collect additional information you provide in that communication.
                                            </li>
                                        </ul>

                                        <p className="font-semibold mt-4">Information Automatically Collected:</p>
                                        <ul className="list-disc pl-6 space-y-2">
                                            <li>
                                                <span className="font-medium">Device Information:</span> We collect information about the device you use to access our Service, including device type, operating system, unique device identifiers, and mobile network information.
                                            </li>
                                            <li>
                                                <span className="font-medium">Log Data:</span> When you use our Service, our servers automatically record information including your IP address, browser type, the pages you visit, the time and date of your visit, time spent on those pages, and other statistics.
                                            </li>
                                            <li>
                                                <span className="font-medium">Cookies and Similar Technologies:</span> We use cookies and similar tracking technologies to track activity on our Service and hold certain information.
                                            </li>
                                        </ul>
                                    </div>
                                )}
                            </div>

                            {/* Information Usage */}
                            <div>
                                <SectionHeader
                                    section="usage"
                                    title="How We Use Your Information"
                                    icon={<FileText size={20} className="text-indigo-600" />}
                                />
                                {expandedSections.usage && (
                                    <div className="py-4 text-gray-700 dark:text-gray-200 space-y-3">
                                        <p>
                                            We use the information we collect for various purposes, including to:
                                        </p>
                                        <ul className="list-disc pl-6 space-y-2">
                                            <li>Provide, maintain, and improve our Service</li>
                                            <li>Create and maintain your account</li>
                                            <li>Process and track your expenses</li>
                                            <li>Generate financial reports and analytics based on your data</li>
                                            <li>Send you technical notices, updates, security alerts, and support messages</li>
                                            <li>Respond to your comments, questions, and customer service requests</li>
                                            <li>Monitor and analyze trends, usage, and activities in connection with our Service</li>
                                            <li>Detect, prevent, and address technical issues, fraud, or illegal activity</li>
                                            <li>Personalize and improve the Service and provide content or features that match user profiles or interests</li>
                                        </ul>
                                        <p>
                                            We process your data based on legitimate interests, the fulfillment of our contract with you, compliance with our legal obligations, and/or your consent.
                                        </p>
                                    </div>
                                )}
                            </div>

                            {/* Information Sharing */}
                            <div>
                                <SectionHeader
                                    section="sharing"
                                    title="Information Sharing and Disclosure"
                                    icon={<ExternalLink size={20} className="text-orange-600" />}
                                />
                                {expandedSections.sharing && (
                                    <div className="py-4 text-gray-700 dark:text-gray-200 space-y-3">
                                        <p>
                                            We may share your information in the following situations:
                                        </p>
                                        <ul className="list-disc pl-6 space-y-2">
                                            <li>
                                                <span className="font-medium">Third-Party Service Providers:</span> We may share your information with third-party vendors, service providers, and other partners who assist us in providing the Service, such as hosting services, analytics providers, and customer service providers.
                                            </li>
                                            <li>
                                                <span className="font-medium">Legal Requirements:</span> We may disclose your information if required by law, such as to comply with a subpoena, legal proceedings, or government request.
                                            </li>
                                            <li>
                                                <span className="font-medium">Business Transfers:</span> In connection with any merger, sale of company assets, financing, or acquisition of all or a portion of our business, your information may be transferred as part of the transaction.
                                            </li>
                                            <li>
                                                <span className="font-medium">With Your Consent:</span> We may share your information with your consent or at your direction.
                                            </li>
                                            <li>
                                                <span className="font-medium">Aggregated or Anonymized Data:</span> We may share aggregated or anonymized information that cannot reasonably be used to identify you.
                                            </li>
                                        </ul>
                                        <p>
                                            We do not sell your personal information to third parties.
                                        </p>
                                    </div>
                                )}
                            </div>

                            {/* Data Security */}
                            <div>
                                <SectionHeader
                                    section="security"
                                    title="Data Security"
                                    icon={<Shield size={20} className="text-green-600" />}
                                />
                                {expandedSections.security && (
                                    <div className="py-4 text-gray-700 dark:text-gray-200 space-y-3">
                                        <p>
                                            We implement appropriate technical and organizational measures to protect the security of your personal information. However, please be aware that no method of transmission over the internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
                                        </p>
                                        <p>
                                            Our security measures include:
                                        </p>
                                        <ul className="list-disc pl-6 space-y-2">
                                            <li>Encryption of your personal data in transit and at rest</li>
                                            <li>Regular security assessments and penetration testing</li>
                                            <li>Access controls and authentication procedures for our staff</li>
                                            <li>Monitoring for suspicious activities</li>
                                            <li>Regular security updates to our systems</li>
                                        </ul>
                                        <p>
                                            You are responsible for maintaining the security of your account credentials and for any activity that occurs under your account.
                                        </p>
                                    </div>
                                )}
                            </div>

                            {/* Your Rights */}
                            <div>
                                <SectionHeader
                                    section="rights"
                                    title="Your Rights and Choices"
                                    icon={<CheckCircle size={20} className="text-indigo-600" />}
                                />
                                {expandedSections.rights && (
                                    <div className="py-4 text-gray-700 dark:text-gray-200 space-y-3">
                                        <p>
                                            Depending on your location, you may have certain rights regarding your personal information:
                                        </p>
                                        <ul className="list-disc pl-6 space-y-2">
                                            <li>
                                                <span className="font-medium">Access:</span> You can request a copy of the personal information we hold about you.
                                            </li>
                                            <li>
                                                <span className="font-medium">Rectification:</span> You can request correction of inaccurate or incomplete information.
                                            </li>
                                            <li>
                                                <span className="font-medium">Deletion:</span> You can request that we delete your personal information in certain circumstances.
                                            </li>
                                            <li>
                                                <span className="font-medium">Restriction:</span> You can request that we restrict processing of your personal information.
                                            </li>
                                            <li>
                                                <span className="font-medium">Data Portability:</span> You can request a copy of your data in a structured, commonly used, and machine-readable format.
                                            </li>
                                            <li>
                                                <span className="font-medium">Objection:</span> You can object to our processing of your personal information.
                                            </li>
                                        </ul>
                                        <p>
                                            You can exercise many of these rights through your account settings. For other requests, please contact us using the information provided at the end of this Privacy Policy.
                                        </p>
                                        <p>
                                            Please note that we may need to verify your identity before responding to your requests.
                                        </p>
                                    </div>
                                )}
                            </div>

                            {/* Cookies Policy */}
                            <div>
                                <SectionHeader
                                    section="cookies"
                                    title="Cookies and Tracking Technologies"
                                    icon={<FileText size={20} className="text-indigo-600" />}
                                />
                                {expandedSections.cookies && (
                                    <div className="py-4 text-gray-700 dark:text-gray-200 space-y-3">
                                        <p>
                                            We use cookies and similar tracking technologies to track activity on our Service and hold certain information. Cookies are files with a small amount of data that may include an anonymous unique identifier.
                                        </p>
                                        <p>
                                            Types of cookies we use:
                                        </p>
                                        <ul className="list-disc pl-6 space-y-2">
                                            <li>
                                                <span className="font-medium">Essential Cookies:</span> Necessary for the Service to function properly.
                                            </li>
                                            <li>
                                                <span className="font-medium">Functionality Cookies:</span> Enable features like saving your preferences.
                                            </li>
                                            <li>
                                                <span className="font-medium">Analytics Cookies:</span> Help us understand how you use the Service.
                                            </li>
                                            <li>
                                                <span className="font-medium">Authentication Cookies:</span> Recognize you when you log in to your account.
                                            </li>
                                        </ul>
                                        <p>
                                            You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to use some portions of our Service.
                                        </p>
                                    </div>
                                )}
                            </div>

                            {/* Contact Information */}
                            <div>
                                <SectionHeader
                                    section="contact"
                                    title="Contact Us"
                                    icon={<FileText size={20} className="text-indigo-600" />}
                                />
                                {expandedSections.contact && (
                                    <div className="py-4 text-gray-700 dark:text-gray-200 space-y-3">
                                        <p>
                                            If you have any questions or concerns about this Privacy Policy or our data practices, please contact us:
                                        </p>
                                        <div className="p-4 bg-gray-50 dark:bg-gray-950 rounded-lg">
                                            <p>Tsiresy Milà.</p>
                                            <p>Email: tsiresymila@gmail.app</p>
                                            <p>Address: III J 37 Ter Andavamamba, Antananarivo, Madagascar 101</p>
                                            <p>Phone: +261 34 20 835 74</p>
                                        </div>
                                        <p>
                                            We will respond to your request within 30 days.
                                        </p>
                                    </div>
                                )}
                            </div>
                        </div>
                    </CardContent>
                </div>

                <CardFooter className="border-t flex justify-between items-center p-6">
                    <div className="text-sm text-muted-foreground">
                        © 2025 Expense Manager Inc. All rights reserved.
                    </div>
                    <Button className="gap-2">
                        <CheckCircle size={16} />
                        I Accept
                    </Button>
                </CardFooter>
            </Card>
        </div>
    );
}