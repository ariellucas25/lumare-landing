import React from 'react';
import { RoutePath } from '../types';

const Privacy: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12 md:py-24">
      <div className="mb-8">
        <a href={RoutePath.HOME} className="text-lumare-secondary hover:text-white transition-colors text-sm font-medium mb-4 inline-block">
          &larr; Back to Home
        </a>
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Privacy Policy</h1>
        <p className="text-lumare-muted">Last updated: November 21, 2025</p>
      </div>

      <div className="prose prose-invert prose-lg max-w-none bg-white/5 p-8 rounded-2xl border border-white/10">
        <div className="space-y-8">
          <p className="text-white">
            Lumare is a product of <strong>LUDWIG DIGITAL STUDIO LTDA</strong> (CNPJ 58.638.805/0001-45). Website: <strong>https://lumare.app</strong>. Email: <strong>support@lumare.app</strong>.
          </p>
          <p className="text-white">
            This Privacy Policy explains how Lumare ("we", "us", "App") collects, uses, stores, and protects your information. By using Lumare, you agree to the practices described here.
          </p>

          <hr className="border-white/10" />

          <section className="space-y-3">
            <h2 className="text-2xl font-semibold text-white">1. Information We Collect</h2>

            <h3 className="text-xl font-semibold text-white">1.1. Account Information</h3>
            <ul className="list-disc pl-6 space-y-1">
              <li>Email address</li>
              <li>Password (encrypted)</li>
            </ul>

            <h3 className="text-xl font-semibold text-white">1.2. Usage Data</h3>
            <ul className="list-disc pl-6 space-y-1">
              <li>Session history (date, duration, type)</li>
              <li>Favorites</li>
              <li>Emotional ratings</li>
              <li>Notes written by the user</li>
              <li>General app interactions</li>
            </ul>

            <h3 className="text-xl font-semibold text-white">1.3. Technical Data</h3>
            <ul className="list-disc pl-6 space-y-1">
              <li>Device model and OS</li>
              <li>Anonymous analytics (if enabled)</li>
              <li>App performance and crash information</li>
            </ul>

            <p>We do not collect: health or sensitive personal data, contacts, photos or media, precise location, or payment information (handled by Apple).</p>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-semibold text-white">2. How We Use Your Information</h2>
            <p>We use your data only to:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>provide access to features such as history, notes, and favorites,</li>
              <li>improve recommendations and user experience,</li>
              <li>analyze usage and performance,</li>
              <li>fix errors and maintain the App,</li>
              <li>support your Subscription status.</li>
            </ul>
            <p>We do not sell your data. We do not use it for third-party advertising.</p>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-semibold text-white">3. Audio Content and Intellectual Property</h2>
            <p>All audio sessions in Lumare are original works owned entirely by <strong>LUDWIG DIGITAL STUDIO LTDA</strong>. Your data does not include rights or licenses to use the audio outside of the App. Attempting to copy, download, record, redistribute, or extract the audio content is prohibited.</p>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-semibold text-white">4. Legal Bases (LGPD + GDPR)</h2>
            <p>We process data under the following legal bases:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li><strong>Execution of Contract</strong>: to deliver the App features you use.</li>
              <li><strong>Legitimate Interest</strong>: analytics and App improvement.</li>
              <li><strong>Consent</strong>: optional features (if any).</li>
              <li><strong>Compliance with Law</strong>: data retention where required.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-semibold text-white">5. How We Store and Protect Data</h2>
            <p>Data is stored using industry-standard security measures. Passwords are hashed and cannot be retrieved by us. Data is hosted on secure cloud infrastructure (e.g., Supabase) with regional compliance.</p>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-semibold text-white">6. Subscriptions and Billing Data</h2>
            <p>All payments, renewals, trials, and cancellations are handled exclusively by <strong>Apple</strong>, through your App Store account.</p>
            <p>We do not receive or store any of the following:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>credit card data,</li>
              <li>billing address,</li>
              <li>payment methods,</li>
              <li>transaction identifiers (beyond subscription status).</li>
            </ul>
            <p>We only receive confirmation from Apple indicating whether your Subscription is active.</p>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-semibold text-white">7. Data Retention</h2>
            <p>We retain your data while your account remains active. If you delete your account, all personal data, notes, history, ratings, and favorites are permanently deleted, except where retention is legally required.</p>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-semibold text-white">8. Your Rights</h2>
            <p>You may request:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>access to your data,</li>
              <li>correction of inaccurate data,</li>
              <li>deletion of your account,</li>
              <li>export of your data,</li>
              <li>information about processing practices.</li>
            </ul>
            <p>Contact <strong>support@lumare.app</strong> to exercise these rights.</p>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-semibold text-white">9. Children's Privacy</h2>
            <p>Lumare is not intended for users under 13 years old. We do not knowingly collect data from children. If you believe a minor has created an account, contact us to remove it.</p>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-semibold text-white">10. International Data Transfers</h2>
            <p>Your data may be processed in servers located outside your country. We ensure that appropriate safeguards are in place, in compliance with applicable laws.</p>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-semibold text-white">11. Changes to This Policy</h2>
            <p>We may update this Privacy Policy from time to time. Continued use of the App after changes means you accept the updated policy.</p>
          </section>

          <section className="space-y-2">
            <h2 className="text-2xl font-semibold text-white">12. Contact</h2>
            <p><strong>LUDWIG DIGITAL STUDIO LTDA</strong><br />CNPJ 58.638.805/0001-45<br />AV PAULISTA 1471, CONJ 1110 -- BELA VISTA<br />SAO PAULO -- SP -- Brazil<br />Email: <strong>support@lumare.app</strong></p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Privacy;
