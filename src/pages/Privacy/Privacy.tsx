
import '../Shared/Shared.css';
import { Helmet } from "react-helmet";
import './Privacy.css';

export const Privacy = () => {
  return <div className="FullPageContent">
    <Helmet>
      <meta charSet="utf-8" />
      <title>Privacy - Paignton Cricket Club</title>
      <link href="/gallery" />
    </Helmet>
    <h3 className="ContentTitle">PRIVACY & COOKIE POLICY</h3>
    <div className="entry-content privacyContent">
      <p><strong>Last updated:</strong> April 2025</p>

      <h3>1. Introduction</h3>
      <p>Welcome to Paignton Cricket Club’s website. We respect your privacy and are committed to protecting your personal data. This policy outlines how we collect, use, and store data when you visit our website.</p>

      <h3>2. What Information We Collect</h3>
      <p>We do not collect personal data unless you explicitly provide it (e.g., via forms or emails). However, certain information is collected automatically through cookies and third-party tools, such as:</p>
      <ul>
        <li>Your browser and device type</li>
        <li>IP address (anonymized for analytics)</li>
        <li>Pages visited and time spent</li>
        <li>Location (general region)</li>
      </ul>

      <h3>3. How We Use Your Information</h3>
      <p>We use the data we collect to:</p>
      <ul>
        <li>Understand how visitors use our site</li>
        <li>Improve content and performance</li>
        <li>Display relevant advertisements via Google AdSense</li>
        <li>Enable embedded services (e.g., live Twitter feeds or fundraising pages)</li>
      </ul>
      <p>We do <strong>not</strong> sell or share your data with other parties outside of our embedded services.</p>

      <h3>4. Cookies</h3>
      <p>Cookies are small text files stored on your device. Our site uses:</p>

      <h3>Required Cookies</h3>
      <p>These are necessary for the website to function properly.</p>

      <h3>Analytics Cookies (optional)</h3>
      <p>We use Google Analytics to measure how visitors interact with our website. This helps us understand and improve our content. IP addresses are anonymized.</p>

      <h3>Advertising Cookies (optional)</h3>
      <p>We display ads via Google AdSense. Google may use cookies to personalize ads based on your interests. These cookies are managed by Google, and we do not have access to them.</p>

      <h3>Embedded Third-Party Cookies</h3>
      <p>We embed content from services like:</p>
      <ul>
        <li>YouTube (videos)</li>
        <li>Twitter (feeds)</li>
        <li>Facebook (posts)</li>
        <li>GoFundMe (fundraising embeds)</li>
      </ul>
      <p>These services may set cookies even if you don’t interact with the embedded content.</p>

      <h3>5. Consent & Cookie Management</h3>
      <p>When you visit our site, you are shown a cookie consent banner. You can choose to:</p>
      <ul>
        <li>Accept all cookies</li>
        <li>Decline optional cookies</li>
      </ul>
      <p>You may also manage or withdraw your consent at any time by clicking the “Manage Cookies” button on the website.</p>

      <h3>6. Third-Party Services</h3>
      <p>We use or embed content from the following services, which may collect data according to their own privacy policies:</p>
      <ul>
        <li><a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">Google Analytics</a></li>
        <li><a href="https://policies.google.com/technologies/ads" target="_blank" rel="noopener noreferrer">Google AdSense</a></li>
        <li><a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">YouTube</a></li>
        <li><a href="https://twitter.com/en/privacy" target="_blank" rel="noopener noreferrer">Twitter</a></li>
        <li><a href="https://www.facebook.com/policy.php" target="_blank" rel="noopener noreferrer">Facebook</a></li>
        <li><a href="https://www.gofundme.com/privacy" target="_blank" rel="noopener noreferrer">GoFundMe</a></li>
      </ul>

      <h3>7. Contact</h3>
      <p>If you have any questions about this policy, please contact us at:</p>
      <p>
        <strong>Paignton Cricket Club</strong><br />
        Email: paigntoncricketclub@hotmail.com
      </p>

      <h3>8. Changes to This Policy</h3>
      <p>We may update this privacy policy from time to time. Any changes will be posted on this page with the updated date at the top.</p>
    </div>
  </div>
}