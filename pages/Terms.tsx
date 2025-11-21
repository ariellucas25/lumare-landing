import React from 'react';
import { RoutePath } from '../types';

const Terms: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12 md:py-24">
      <div className="mb-8">
        <a href={RoutePath.HOME} className="text-lumare-primary hover:text-white transition-colors text-sm font-medium mb-4 inline-block">
          &larr; Back to Home
        </a>
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Terms of Use</h1>
        <p className="text-lumare-muted">Last updated: November 21, 2025</p>
      </div>

      <div className="prose prose-invert prose-lg max-w-none bg-white/5 p-8 rounded-2xl border border-white/10">
        <div className="space-y-8">
          <p className="text-white">
            Lumare is a product of <strong>LUDWIG DIGITAL STUDIO LTDA</strong> (CNPJ 58.638.805/0001-45). Website: <strong>https://lumare.app</strong>. Email: <strong>support@lumare.app</strong>.
          </p>
          <p className="text-white">
            These Terms of Use ("Terms") govern your access to and use of the Lumare mobile application ("Lumare", "App", "we", "us", "our"). By creating an account or using Lumare, you agree to these Terms. If you do not agree, do not use the App.
          </p>

          <hr className="border-white/10" />

          <section className="space-y-3">
            <h2 className="text-2xl font-semibold text-white">1. Eligibility</h2>
            <p>You must be at least 13 years old (or the minimum legal age in your region) to use Lumare. By creating an account, you confirm that the information you provide is accurate and that you are authorized to use the App.</p>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-semibold text-white">2. Account Registration</h2>
            <p>To access certain features, you must create an account using a valid email and password. You are responsible for maintaining the confidentiality of your login credentials and for all actions taken under your account.</p>
            <p>If you suspect unauthorized access, notify us immediately at <strong>support@lumare.app</strong>.</p>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-semibold text-white">3. User Content</h2>
            <p>Lumare allows you to upload or create personal notes, emotional ratings, favorites, and session history ("User Content").</p>
            <h3 className="text-xl font-semibold text-white">You retain ownership of your User Content.</h3>
            <p>By using Lumare, you grant us a limited, non-exclusive license to store and process this content solely for:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>displaying your personal journey,</li>
              <li>powering in-app features,</li>
              <li>product improvement and analytics.</li>
            </ul>
            <p>We do <strong>not</strong> sell your data or share it with other users.</p>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-semibold text-white">4. Acceptable Use</h2>
            <p>You agree not to:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>use the App for unlawful purposes,</li>
              <li>attempt to access or modify another user's data,</li>
              <li>interfere with App functionality or security,</li>
              <li>reverse engineer or modify any part of the App,</li>
              <li>use automated tools to scrape, extract, or interact with the App.</li>
            </ul>
            <p>Violations may result in suspension or termination of your account.</p>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-semibold text-white">5. Intellectual Property &amp; Audio Content Ownership</h2>

            <h3 className="text-xl font-semibold text-white">5.1. Ownership of Content</h3>
            <p>All audio sessions, soundscapes, compositions, mixing, design, branding, logos, text, graphics, and all related intellectual property are the exclusive property of <strong>LUDWIG DIGITAL STUDIO LTDA</strong>. The audio used in Lumare is <strong>100% original and fully owned</strong> by LUDWIG DIGITAL STUDIO LTDA.</p>

            <h3 className="text-xl font-semibold text-white">5.2. Restrictions on Use of Audio Content</h3>
            <p>By using Lumare, you agree that:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>You may not download, record, screen-record, capture, or extract the audio sessions.</li>
              <li>You may not copy, reproduce, duplicate, modify, or distribute any audio content.</li>
              <li>You may not use the audio outside of the App, including in videos, podcasts, social media, livestreams, or commercial content.</li>
              <li>You may not upload or share the audio to any platform, storage, or device outside the App.</li>
              <li>You may not circumvent technical measures designed to protect our intellectual property.</li>
              <li>Any attempt to pirate, redistribute, or make derivative works of the audio is strictly prohibited.</li>
            </ul>

            <h3 className="text-xl font-semibold text-white">5.3. License</h3>
            <p>Your use of Lumare grants you a <strong>limited, non-transferable, revocable license</strong> to access the audio solely for personal, non-commercial use inside the App. You obtain <strong>no ownership</strong> or rights over the audio or any content in the App. Violations may result in account termination and legal remedies.</p>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-semibold text-white">6. Subscriptions, Trials, and Payments</h2>
            <p>Lumare offers auto-renewing subscription plans ("Subscription") that provide access to all App features. Without an active Subscription, the user cannot access audio sessions, history, notes, favorites, or premium features.</p>

            <h3 className="text-xl font-semibold text-white">6.1. Subscription Plans</h3>
            <p>The following plans are offered through the Apple App Store:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Monthly Subscription</li>
              <li>Annual Subscription</li>
            </ul>
            <p>Pricing may vary depending on region and promotional offers.</p>

            <h3 className="text-xl font-semibold text-white">6.2. Free Trial</h3>
            <p>We may provide a free trial (typically 3 or 7 days, depending on promotions). At the end of the trial, your Subscription automatically renews unless canceled at least <strong>24 hours before</strong> the trial ends. One free trial is allowed per Apple ID unless otherwise permitted.</p>

            <h3 className="text-xl font-semibold text-white">6.3. Automatic Renewal</h3>
            <p>All Subscriptions renew automatically unless canceled at least <strong>24 hours before</strong> the end of the period. Your Apple Account will be charged for renewal within 24 hours prior to the period ending.</p>

            <h3 className="text-xl font-semibold text-white">6.4. Billing and Payment</h3>
            <p>All payments and renewals are managed solely by <strong>Apple</strong>. We do not store or process any payment information.</p>

            <h3 className="text-xl font-semibold text-white">6.5. Managing Subscriptions</h3>
            <p>You may cancel or modify your Subscription via:</p>
            <p><strong>Settings -&gt; Apple ID -&gt; Subscriptions</strong></p>
            <p>Canceling stops future charges but does not refund the current period. You retain access until the paid period expires.</p>

            <h3 className="text-xl font-semibold text-white">6.6. Refunds</h3>
            <p>Refunds are handled exclusively by Apple according to their policies. You may request a refund at: <a href="https://reportaproblem.apple.com/" className="text-lumare-primary hover:text-white">https://reportaproblem.apple.com/</a></p>

            <h3 className="text-xl font-semibold text-white">6.7. Access to Premium Features</h3>
            <p>A valid Subscription is required to access:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>all audio sessions,</li>
              <li>notes,</li>
              <li>history and journey,</li>
              <li>emotional ratings,</li>
              <li>favorites,</li>
              <li>all future premium features.</li>
            </ul>
            <p>If your Subscription expires, all premium features are locked until reactivated.</p>

            <h3 className="text-xl font-semibold text-white">6.8. Changes to Subscription Terms</h3>
            <p>We may update the subscription offerings or pricing. Apple will notify you if the price changes and request approval.</p>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-semibold text-white">7. Termination</h2>
            <p>We may suspend or terminate your access if:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>you violate these Terms,</li>
              <li>you engage in misuse of copyrighted content,</li>
              <li>we are required by law or policies.</li>
            </ul>
            <p>You may delete your account anytime through the App. Deletion permanently removes your data, except where retention is legally required.</p>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-semibold text-white">8. Disclaimer of Warranties</h2>
            <p>Lumare provides wellness audio content for relaxation and personal well-being. It is <strong>not</strong> medical, psychological, or therapeutic advice.</p>
            <p>The App is provided "as is" without warranties of any kind.</p>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-semibold text-white">9. Limitation of Liability</h2>
            <p>To the fullest extent permitted by law, LUDWIG DIGITAL STUDIO LTDA is not liable for:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>indirect or consequential damages,</li>
              <li>loss of data,</li>
              <li>inability to access the App.</li>
            </ul>
            <p>Your sole remedy is to stop using the App.</p>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-semibold text-white">10. Governing Law</h2>
            <p>These Terms are governed by the laws of <strong>Brazil</strong>, with exclusive jurisdiction in the courts of <strong>Sao Paulo, SP</strong>, unless local consumer law requires otherwise.</p>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-semibold text-white">11. Changes to These Terms</h2>
            <p>We may update these Terms periodically. Continued use of the App constitutes acceptance of the updated Terms.</p>
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

export default Terms;
