import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How SystemFriendly Labs collects, uses, and protects your personal data.",
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <section className="px-8 pt-[120px] pb-[56px] border-b" style={{ borderColor: "var(--color-border)" }}>
        <div className="max-w-[840px] mx-auto">
          <div className="mono text-[12px] mb-5 load-in" style={{ color: "var(--color-text-muted)" }}>
            <Link href="/" style={{ color: "var(--color-text-muted)" }}>Home</Link> / Privacy Policy
          </div>
          <span className="eyebrow load-in">Legal</span>
          <h1 className="text-[clamp(30px,4vw,44px)] leading-[1.1] mt-4 load-in">Privacy Policy</h1>
          <p className="text-[14px] mono mt-4" style={{ color: "var(--color-text-muted)" }}>
            Last updated: [INSERT DATE] &nbsp;·&nbsp; Effective: [INSERT DATE]
          </p>
        </div>
      </section>

      <section className="px-8 py-[80px]">
        <div className="max-w-[840px] mx-auto">
          <Reveal>
            <div className="blog-content" dangerouslySetInnerHTML={{ __html: PRIVACY_HTML }} />
          </Reveal>
        </div>
      </section>
    </>
  );
}

const PRIVACY_HTML = `
<p>This Privacy Policy explains how SystemFriendly Labs ("we," "us," "our"), operating this website at systemfriendly.com, collects, uses, discloses, and protects personal data belonging to visitors and users of this website ("you"). We are committed to handling your personal data responsibly and in accordance with India's Digital Personal Data Protection Act, 2023 ("DPDP Act") and other applicable law.</p>

<p>By using this website, you agree to the collection and use of information in accordance with this policy. If you do not agree, please do not use this website.</p>

<h2>1. What Personal Data We Collect</h2>

<p>We only collect personal data that you voluntarily provide to us, or that is generated through your ordinary use of this website. Specifically:</p>

<h3>1.1 Contact Form</h3>
<p>When you submit our contact form, we collect your name, email address, company name (optional), area of interest (optional), and any message or project details you provide.</p>

<h3>1.2 Newsletter / Lead Capture Popup</h3>
<p>If you submit your details through a popup or lead capture form on this site, we collect your email address and any message you provide.</p>

<h3>1.3 Chatbot Conversations</h3>
<p>If you use the chat widget on this website, we may log the messages exchanged during that session, associated with a randomly generated session identifier stored in your browser. This session identifier is not linked to your name or email unless you separately provide that information within the chat itself.</p>

<h3>1.4 Website Usage Data (Analytics)</h3>
<p>We use Google Analytics to understand how visitors use this website. This may collect information such as your approximate location (derived from IP address), device and browser type, pages visited, time spent on the site, and referring website. This is collected using cookies and similar tracking technologies. See Section 4 (Cookies) below.</p>

<h3>1.5 WhatsApp</h3>
<p>If you choose to contact us via WhatsApp through a link on this website, you will leave this website and interact with WhatsApp (operated by Meta) directly. Any information you share via WhatsApp is governed by WhatsApp's own privacy policy, not this one.</p>

<h2>2. How We Use Your Personal Data</h2>

<p>We use the personal data described above only for the following purposes:</p>
<ul>
<li>To respond to your enquiries and communicate with you about a potential or ongoing engagement</li>
<li>To operate and improve the chatbot and website experience</li>
<li>To understand aggregate website usage and improve our content and site performance</li>
<li>To comply with legal obligations where applicable</li>
</ul>

<p>We do not sell your personal data. We do not use your personal data for automated decision-making that produces legal or similarly significant effects concerning you.</p>

<h2>3. Legal Basis for Processing</h2>

<p>Under the DPDP Act, we process your personal data on the basis of your consent, given at the point you voluntarily submit a form or otherwise provide your information to us. You may withdraw this consent at any time by contacting us using the details in Section 9 below, though this will not affect the lawfulness of processing carried out before withdrawal.</p>

<h2 id="cookies">4. Cookies</h2>

<p>This website uses cookies set by Google Analytics to collect anonymised or pseudonymised usage data. Cookies are small text files stored on your device. You can control or disable cookies through your browser settings; doing so may affect certain website functionality but will not prevent you from browsing the site or submitting forms.</p>

<h2>5. How We Share Your Data</h2>

<p>We do not sell or rent your personal data. We may share limited personal data with the following categories of third parties, solely to operate this website and respond to you:</p>
<ul>
<li><strong>Hosting and infrastructure providers</strong> (currently Vercel) who host this website and process data as part of that hosting.</li>
<li><strong>Analytics providers</strong> (Google Analytics) who process usage data as described in Section 4.</li>
<li><strong>Email service providers</strong> used to send you a response to your enquiry.</li>
<li>Where required by law, regulation, or a valid legal process.</li>
</ul>

<h2>6. Data Retention</h2>

<p>We retain personal data collected through the contact form and lead capture popup for as long as reasonably necessary to respond to your enquiry and maintain a record of business communications, or until you request deletion. Chatbot session logs are retained for a limited period for quality and improvement purposes. [INSERT SPECIFIC RETENTION PERIOD ONCE DEFINED, e.g. "12 months from last contact."]</p>

<h2>7. Data Security</h2>

<p>We take reasonable technical and organisational measures to protect your personal data against unauthorised access, alteration, disclosure, or destruction, including rate-limiting on our forms and standard web security practices. However, no method of transmission over the internet or electronic storage is completely secure, and we cannot guarantee absolute security.</p>

<h2>8. Your Rights Under the DPDP Act</h2>

<p>Subject to applicable law, you have the right to:</p>
<ul>
<li><strong>Access</strong> the personal data we hold about you</li>
<li><strong>Correct or update</strong> inaccurate or incomplete personal data</li>
<li><strong>Erase</strong> your personal data, where it is no longer necessary for the purpose it was collected</li>
<li><strong>Withdraw consent</strong> at any time, as described in Section 3</li>
<li><strong>Nominate</strong> another individual to exercise these rights on your behalf in the event of your death or incapacity</li>
<li><strong>Register a grievance</strong> regarding how we handle your personal data, as described in Section 9</li>
</ul>

<p>To exercise any of these rights, please contact our Grievance Officer using the details below.</p>

<h2>9. Grievance Officer / Contact</h2>

<p>In accordance with the DPDP Act, we have designated the following Grievance Officer to address any questions, concerns, or complaints regarding this Privacy Policy or our handling of your personal data:</p>

<p>
[INSERT GRIEVANCE OFFICER NAME]<br />
[INSERT DESIGNATION]<br />
Email: [INSERT GRIEVANCE OFFICER EMAIL]<br />
Address: [INSERT REGISTERED BUSINESS ADDRESS — Buxar, Bihar]
</p>

<p>We aim to respond to all legitimate requests within [INSERT TIMEFRAME, e.g. "30 days"], in accordance with applicable law.</p>

<h2>10. Children's Data</h2>

<p>This website is not directed at children, and we do not knowingly collect personal data from individuals under the age of 18. If you believe a child has provided us with personal data, please contact us and we will take steps to delete it.</p>

<h2>11. Changes to This Policy</h2>

<p>We may update this Privacy Policy from time to time to reflect changes in our practices or applicable law. The "Last updated" date at the top of this page will reflect the most recent revision. We encourage you to review this page periodically.</p>

<h2>12. Contact Us</h2>

<p>If you have any questions about this Privacy Policy, please contact us at hello@systemfriendly.com or through our <a href="/contact">contact page</a>.</p>
`;
