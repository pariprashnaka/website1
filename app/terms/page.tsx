import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description: "The terms governing your use of the SystemFriendly Labs website.",
  alternates: { canonical: "/terms" },
};

export default function TermsPage() {
  return (
    <>
      <section className="px-8 pt-[120px] pb-[56px] border-b" style={{ borderColor: "var(--color-border)" }}>
        <div className="max-w-[840px] mx-auto">
          <div className="mono text-[12px] mb-5 load-in" style={{ color: "var(--color-text-muted)" }}>
            <Link href="/" style={{ color: "var(--color-text-muted)" }}>Home</Link> / Terms & Conditions
          </div>
          <span className="eyebrow load-in">Legal</span>
          <h1 className="text-[clamp(30px,4vw,44px)] leading-[1.1] mt-4 load-in">Terms & Conditions</h1>
          <p className="text-[14px] mono mt-4" style={{ color: "var(--color-text-muted)" }}>
            Last updated: [INSERT DATE] &nbsp;·&nbsp; Effective: [INSERT DATE]
          </p>
        </div>
      </section>

      <section className="px-8 py-[80px]">
        <div className="max-w-[840px] mx-auto">
          <Reveal>
            <div className="blog-content" dangerouslySetInnerHTML={{ __html: TERMS_HTML }} />
          </Reveal>
        </div>
      </section>
    </>
  );
}

const TERMS_HTML = `
<p>These Terms and Conditions ("Terms") govern your access to and use of the website located at systemfriendly.com (the "Website"), operated by SystemFriendly Labs ("we," "us," "our"). By accessing or using this Website, you agree to be bound by these Terms. If you do not agree, please do not use this Website.</p>

<p>These Terms apply to your use of this Website only. They do not, on their own, constitute a contract for any development, consulting, or other services — any such engagement is governed by a separate signed agreement between you and us.</p>

<h2>1. Use of This Website</h2>

<p>This Website is provided to give you information about our company, services, products, and published articles, and to allow you to contact us regarding a potential engagement. You agree to use this Website only for lawful purposes and in a manner that does not infringe the rights of, or restrict or inhibit the use of this Website by, any third party.</p>

<p>You agree not to:</p>
<ul>
<li>Attempt to gain unauthorised access to any part of this Website, its systems, or the chatbot's underlying infrastructure</li>
<li>Use any automated system (bot, scraper, or similar) to access this Website in a manner that sends more requests than a human could reasonably produce in the same period</li>
<li>Submit false, misleading, or fraudulent information through our forms or chatbot</li>
<li>Use this Website to transmit any harmful code, virus, or malicious content</li>
</ul>

<h2>2. Intellectual Property</h2>

<p>All content on this Website — including text, articles, graphics, logos, illustrations, charts, and the design and layout of the Website itself — is our property or the property of our licensors, and is protected by applicable copyright, trademark, and other intellectual property laws, unless explicitly stated otherwise.</p>

<p>You may view, download, and print content from this Website for your own personal or internal business reference. You may not reproduce, republish, distribute, or create derivative works from this content for commercial purposes without our prior written permission.</p>

<h2>3. Blog and Published Content</h2>

<p>Articles and content published on our blog are provided for general informational purposes only. They do not constitute professional, legal, financial, tax, or technical advice specific to your situation, and should not be relied upon as such. Where illustrative figures, cost ranges, or case studies are presented, we make reasonable efforts to clearly label them as illustrative or to cite the source of any factual claim; you should independently verify any information material to a decision you intend to make.</p>

<h2>4. Third-Party Links and Services</h2>

<p>This Website may contain links to third-party websites or services, including WhatsApp, and may embed or reference third-party tools such as Google Analytics. We do not control and are not responsible for the content, privacy practices, or terms of any third-party website or service. Your use of any third-party website or service is governed by that third party's own terms and policies.</p>

<h2>5. No Warranty</h2>

<p>This Website and its content are provided "as is" and "as available," without warranties of any kind, whether express or implied, including but not limited to warranties of accuracy, completeness, merchantability, fitness for a particular purpose, or non-infringement. We do not warrant that this Website will be uninterrupted, error-free, or free of harmful components.</p>

<h2>6. Chatbot Disclaimer</h2>

<p>The chatbot available on this Website is an automated tool intended to answer common questions and direct you to appropriate resources or contact channels. It does not provide professional advice, and its responses should not be treated as a binding commitment, quote, or professional opinion on our part. For anything that matters to a real decision, please confirm directly with us through our contact page.</p>

<h2>7. Limitation of Liability</h2>

<p>To the fullest extent permitted by applicable law, we shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenue, arising out of or in connection with your use of, or inability to use, this Website, even if we have been advised of the possibility of such damages.</p>

<p>Nothing in these Terms limits or excludes any liability that cannot be limited or excluded under applicable law.</p>

<h2>8. Indemnification</h2>

<p>You agree to indemnify and hold us harmless from any claim, demand, loss, or damage, including reasonable legal fees, arising out of your breach of these Terms or your misuse of this Website.</p>

<h2>9. Governing Law and Jurisdiction</h2>

<p>These Terms are governed by the laws of India. Any dispute arising out of or in connection with these Terms or your use of this Website shall be subject to the exclusive jurisdiction of the courts of Buxar, Bihar.</p>

<h2>10. Changes to These Terms</h2>

<p>We may update these Terms from time to time. The "Last updated" date at the top of this page will reflect the most recent revision. Your continued use of this Website after any change constitutes your acceptance of the revised Terms.</p>

<h2>11. Severability</h2>

<p>If any provision of these Terms is found to be unenforceable or invalid under applicable law, that provision will be limited or eliminated to the minimum extent necessary, and the remaining provisions will remain in full force and effect.</p>

<h2>12. Contact Us</h2>

<p>If you have any questions about these Terms, please contact us at hello@systemfriendly.com or through our <a href="/contact">contact page</a>.</p>
`;
