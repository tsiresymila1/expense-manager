"use client"
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { ArrowRight, CheckCircle, ChevronDown, ChevronUp, FileText, Shield } from 'lucide-react';
import Link from 'next/link';
import React, { useState } from 'react';

export default function TermsOfService() {
    const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>({
        description: true,
        account: true,
        usage: true,
        liability: false,
        termination: false,
        modifications: false
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
            <Card className="shadow-lg py-0 h-f">
                <div className="h-full">
                    <CardContent className="p-6 text-sm">
                        <div className="space-y-6">
                            <div className="flex justify-between items-center">
                                <div className="text-sm text-muted-foreground">
                                    Last updated: April 7, 2025
                                </div>
                                <Link href="/privacy">
                                    <Button variant="outline" size="sm" className="flex items-center gap-1">
                                        <Shield size={16} />
                                        Privacy Policy
                                        <ArrowRight size={14} />
                                    </Button>
                                </Link>
                            </div>

                            {/* Introduction */}
                            <div>
                                <SectionHeader
                                    section="description"
                                    title="Introduction"
                                    icon={<FileText size={20} className="text-blue-600" />}
                                />
                                {expandedSections.description && (
                                    <div className="py-4 space-y-3">
                                        <p>
                                            Welcome to <span className="font-semibold">Expense Manager</span>.
                                            {'These Terms of Service ("Terms") govern your access to and use of the Expense Manager application, website, and services (collectively, the "Service"), so please read them carefully before using the Service.'}
                                        </p>
                                        <p>
                                            By accessing or using the Service, you agree to be bound by these Terms. If you disagree with any part of the terms, you may not access the Service.
                                        </p>
                                        <p>
                                            {'The Service is owned and operated by Expense Manager Inc. ("we," "us," or "our")'}.
                                        </p>
                                    </div>
                                )}
                            </div>

                            {/* Account Terms */}
                            <div>
                                <SectionHeader
                                    section="account"
                                    title="Account Registration & Terms"
                                    icon={<CheckCircle size={20} className="text-green-600" />}
                                />
                                {expandedSections.account && (
                                    <div className="py-4 text-gray-700 dark:text-gray-200 space-y-3">
                                        <p>
                                            To use certain features of the Service, you must register for an account. When you register, you may do so by:
                                        </p>
                                        <ul className="list-disc pl-6 space-y-2">
                                            <li>Creating an account with your name, email, and password</li>
                                            <li>Using Google sign-in to create an account using your Google profile information, including your name, email, and profile image</li>
                                        </ul>
                                        <p>
                                            You agree to provide accurate, current, and complete information during the registration process and to update such information to keep it accurate, current, and complete.
                                        </p>
                                        <p>
                                            You are responsible for safeguarding your password and for all activities that occur under your account. You agree to notify us immediately of any unauthorized use of your account.
                                        </p>
                                        <p>
                                            We reserve the right to disable any user account at any time if, in our opinion, you have failed to comply with these Terms.
                                        </p>
                                        <p>
                                            {"Users must be at least 16 years old to create an account. If you are under 18, you must have your parent or guardian's permission to use the Service."}
                                        </p>
                                    </div>
                                )}
                            </div>

                            {/* Service Usage */}
                            <div>
                                <SectionHeader
                                    section="usage"
                                    title="Service Usage & Restrictions"
                                    icon={<FileText size={20} className="text-blue-600" />}
                                />
                                {expandedSections.usage && (
                                    <div className="py-4 text-gray-700 dark:text-gray-200 space-y-3">
                                        <p>
                                            Expense Manager provides tools to track, manage, and analyze personal and business expenses. You agree to use the Service only for lawful purposes and in accordance with these Terms.
                                        </p>
                                        <p className="font-semibold">You agree not to:</p>
                                        <ul className="list-disc pl-6 space-y-2">
                                            <li>Use the Service in any way that violates any applicable local, state, national, or international law or regulation</li>
                                            <li>Use the Service to transmit or upload any material that contains viruses, trojan horses, worms, or any other malicious code</li>
                                            <li>Interfere with or disrupt the Service or servers or networks connected to the Service</li>
                                            <li>Attempt to gain unauthorized access to any part of the Service</li>
                                            <li>Use the Service to harvest or collect user information, including email addresses</li>
                                            <li>Impersonate or attempt to impersonate us, our employees, another user, or any other person or entity</li>
                                        </ul>
                                        <p>
                                            We reserve the right to terminate or restrict your access to the Service, without prior notice, for any conduct that we, in our sole discretion, believe violates these Terms or is harmful to other users of the Service, us, or third parties, or for any other reason.
                                        </p>
                                    </div>
                                )}
                            </div>

                            {/* Limitation of Liability */}
                            <div>
                                <SectionHeader
                                    section="liability"
                                    title="Limitation of Liability"
                                    icon={<Shield size={20} className="text-red-600" />}
                                />
                                {expandedSections.liability && (
                                    <div className="py-4 text-gray-700 dark:text-gray-200 space-y-3">
                                        <p>
                                            In no event shall Expense Manager, its directors, employees, partners, agents, suppliers, or affiliates be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from:
                                        </p>
                                        <ul className="list-disc pl-6 space-y-2">
                                            <li>Your access to or use of or inability to access or use the Service</li>
                                            <li>Any conduct or content of any third party on the Service</li>
                                            <li>Any content obtained from the Service</li>
                                            <li>Unauthorized access, use, or alteration of your transmissions or content</li>
                                        </ul>
                                        <p>
                                            {'The Service is provided on an "AS IS" and "AS AVAILABLE" basis. We make no warranties, expressed or implied, regarding the operation or availability of the Service.'}
                                        </p>
                                        <p>
                                            While we strive to provide accurate financial calculations and expense tracking, we cannot guarantee the absolute accuracy of all data. You are responsible for verifying the accuracy of any financial information and making your own financial decisions.
                                        </p>
                                    </div>
                                )}
                            </div>

                            {/* Termination */}
                            <div>
                                <SectionHeader
                                    section="termination"
                                    title="Termination"
                                    icon={<FileText size={20} className="text-blue-600" />}
                                />
                                {expandedSections.termination && (
                                    <div className="py-4 text-gray-700 dark:text-gray-200 space-y-3">
                                        <p>
                                            You may terminate your account at any time by following the instructions on the Service or by contacting us.
                                        </p>
                                        <p>
                                            We may terminate or suspend your account and access to the Service immediately, without prior notice or liability, for any reason, including, without limitation, if you breach these Terms.
                                        </p>
                                        <p>
                                            Upon termination, your right to use the Service will immediately cease. If you wish to terminate your account, you may simply discontinue using the Service or request account deletion through the Settings page.
                                        </p>
                                        <p>
                                            All provisions of the Terms which by their nature should survive termination shall survive termination, including, without limitation, ownership provisions, warranty disclaimers, indemnity, and limitations of liability.
                                        </p>
                                    </div>
                                )}
                            </div>

                            {/* Modifications */}
                            <div>
                                <SectionHeader
                                    section="modifications"
                                    title="Modifications to Terms"
                                    icon={<FileText size={20} className="text-blue-600" />}
                                />
                                {expandedSections.modifications && (
                                    <div className="py-4 text-gray-700 dark:text-gray-200 space-y-3">
                                        <p>
                                            {"We reserve the right to modify or replace these Terms at any time. If a revision is material, we will provide at least 30 days' notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion."}
                                        </p>
                                        <p>
                                            By continuing to access or use our Service after any revisions become effective, you agree to be bound by the revised terms. If you do not agree to the new terms, you are no longer authorized to use the Service.
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
                        Accept Terms
                    </Button>
                </CardFooter>
            </Card>
        </div>
    );
}