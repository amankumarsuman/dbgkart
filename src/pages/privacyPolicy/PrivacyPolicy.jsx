import { Paper } from "@mui/material";
import React from "react";

function PrivacyPolicy() {
  return (
    <>
      <Paper
        sx={{
          width: "90%",
          margin: "2em auto",
          textAlign: "center",
          padding: "1em",
          backgroundColor: "green",
          color: "white",
          fontWeight: "bold",
          fontSize: "1.3rem",
        }}
        elevation={10}
      >
        Privacy Policy
      </Paper>
      <Paper sx={{ width: "90%", margin: "2em auto", padding: "1em" }}>
        <p>
          This privacy policy describes how{" "}
          <span style={{ color: "green", fontWeight: "bold" }}>
            Naturalganic
          </span>{" "}
          ("we," "us," or "our") collects, uses, and shares information about
          you when you use our website or mobile application (collectively, the
          "Services"). By using the Services, you agree to the terms of this
          privacy policy.
        </p>
        <h2>1. Information We Collect</h2>
        <p>
          We may collect personal information about you, such as your name,
          address, phone number, and email address when you register for an
          account with us or place an order through our Services. We may also
          collect payment information, such as credit card or other payment
          details, when you make a purchase through our Services.
        </p>
        <p>
          In addition, we may collect information about your use of the
          Services, including your IP address, device type, browser type, and
          operating system. We may also collect information about your location
          when you use the Services, either through your device's location
          services or through your IP address.
        </p>
        <h2>2. How We Use Your Information</h2>
        <p>
          We may use the information we collect to:
          <li>
            <li>Provide and improve our Services</li>
            <li>Process and fulfill your orders</li>
            <li>Communicate with you about your orders and our Services</li>
            <li>
              Send you marketing communications about our products and services,
              if you have opted in to receive them
            </li>
            <li>Respond to your inquiries and provide customer support</li>
            <li>Analyze and improve our operations and Services</li>
            <li>Comply with legal and regulatory requirements</li>
          </li>
        </p>
        <h2>3. Sharing of Your Information</h2>
        <p>
          We may share your information with third-party service providers who
          perform services on our behalf, such as payment processing, order
          fulfillment, and marketing. We may also share your information with
          our affiliates and partners for their own marketing purposes, if you
          have opted in to receive such communications.
        </p>
        <p>
          In addition, we may disclose your information if required to do so by
          law or in response to a court order, or if we believe that such
          disclosure is necessary to protect our rights, property, or safety or
          that of our users or others.
        </p>
        <h2>4. Data Retention</h2>
        <p>
          We will retain your personal information for as long as necessary to
          provide the Services and fulfill your orders, unless a longer
          retention period is required or permitted by law.
        </p>
        <h2>5. Security</h2>
        <p>
          We take reasonable measures to protect your information from
          unauthorized access, use, and disclosure. However, no security
          measures are 100% effective, and we cannot guarantee the security of
          your information.
        </p>
        <h2>6. Your Choices</h2>
        <p>
          You may opt out of receiving marketing communications from us by
          following the unsubscribe instructions included in those
          communications or by contacting us directly at [insert contact email
          or mailing address]. Please note that even if you opt out of receiving
          marketing communications, we may still send you administrative and
          transactional messages, such as confirmations of your orders and other
          important notifications.
        </p>
        <h2>7. Changes to this Privacy Policy</h2>
        <p>
          We may update this privacy policy from time to time to reflect changes
          in our practices or applicable law. If we make any material changes,
          we will notify you by email or by posting a notice on our website
          prior to the effective date of the changes. Your continued use of the
          Services after the effective date of any changes constitutes your
          acceptance of the revised privacy policy.
        </p>
        <h2>8. Contact Us</h2>
        <p>
          If you have any questions or concerns about this privacy policy or our
          practices regarding your information, please contact us at
          info@naturalganic.shop
        </p>
      </Paper>
    </>
  );
}

export default PrivacyPolicy;
