import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function TermsAndConditions() {
    return (
        <div className="max-w-3xl mx-auto px-4 py-10">
            <Card className="shadow-sm rounded-2xl border border-gray-200">
                <CardHeader>
                    <CardTitle className="text-2xl font-bold">Terms and Conditions</CardTitle>
                    <p className="text-sm text-muted-foreground">Effective Date: 07 Avril 2025</p>
                </CardHeader>
                <CardContent>
                    <div className=" pr-4">
                        <div className="space-y-6 text-sm text-gray-800 leading-relaxed">
                            <section>
                                <h2 className="font-semibold text-base mb-1">1. Acceptance of Terms</h2>
                                <p>
                                    By accessing or using our app, you confirm that you can form a binding contract and that you have read, understood, and agree to be bound by these Terms and our Privacy Policy.
                                </p>
                            </section>

                            <section>
                                <h2 className="font-semibold text-base mb-1">2. User Accounts</h2>
                                <p className="font-medium">a. Email & Password Authentication</p>
                                <ul className="list-disc ml-5">
                                    <li>Users can register using a valid email address and password.</li>
                                    <li>You are responsible for keeping your login credentials secure.</li>
                                </ul>
                                <p className="mt-2 font-medium">b. Google Sign-In</p>
                                <ul className="list-disc ml-5">
                                    <li>Users can log in with Google OAuth.</li>
                                    <li>We collect your name, email, and profile image to create your account and personalize your experience.</li>
                                </ul>
                            </section>

                            <section>
                                <h2 className="font-semibold text-base mb-1">3. Information Collection & Use</h2>
                                <p>
                                    We collect personal information to authenticate users, manage profiles, and improve the app. We never sell or share your data without consent.
                                </p>
                            </section>

                            <section>
                                <h2 className="font-semibold text-base mb-1">4. Data Storage and Security</h2>
                                <p>
                                    All data is encrypted and securely stored using modern security standards to prevent unauthorized access or disclosure.
                                </p>
                            </section>

                            <section>
                                <h2 className="font-semibold text-base mb-1">5. User Responsibilities</h2>
                                <ul className="list-disc ml-5">
                                    <li>Provide accurate and complete information</li>
                                    <li>Use the app only for personal finance management</li>
                                    <li>Do not exploit or misuse the app</li>
                                </ul>
                            </section>

                            <section>
                                <h2 className="font-semibold text-base mb-1">6. Prohibited Activities</h2>
                                <ul className="list-disc ml-5">
                                    <li>No illegal usage of the app</li>
                                    <li>No security breaches</li>
                                    <li>No unauthorized copying or redistribution</li>
                                </ul>
                            </section>

                            <section>
                                <h2 className="font-semibold text-base mb-1">7. Termination</h2>
                                <p>
                                    We reserve the right to suspend or terminate your account if you violate any terms or misuse the service.
                                </p>
                            </section>

                            <section>
                                <h2 className="font-semibold text-base mb-1">8. Third-party Services</h2>
                                <p>
                                    {"We integrate Google Sign-In. Your use is also governed by Google's "}
                                    <a href="https://policies.google.com/terms" className="text-blue-600 underline ml-1" target="_blank" rel="noopener noreferrer">Terms of Service</a> and
                                    <a href="https://policies.google.com/privacy" className="text-blue-600 underline ml-1" target="_blank" rel="noopener noreferrer">Privacy Policy</a>.
                                </p>
                            </section>

                            <section>
                                <h2 className="font-semibold text-base mb-1">9. Changes to the Terms</h2>
                                <p>
                                    We may update these Terms at any time. Continued use after changes means you accept the new terms.
                                </p>
                            </section>

                            <section>
                                <h2 className="font-semibold text-base mb-1">10. Contact Us</h2>
                                <p>
                                    Email: tsiresymila@gmail.com <br />
                                    Company: Digi-Talent <br />
                                    Address: Lot III J 37 Ter Andavamamba, Antananarivo, Madagascar <br />
                                    Phone: +261 34 20 835 74 <br />
                                    Website: https://tsiresymila.vercel.app <br />
                                </p>
                            </section>

                            <section>
                                <h2 className="font-semibold text-base mb-1">11. Governing Law</h2>
                                <p>
                                    These Terms are governed by the laws of Madagascar/Antananarivo.
                                </p>
                            </section>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </div>
    )
}
