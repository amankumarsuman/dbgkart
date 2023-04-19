import { Paper } from "@mui/material";
import React from "react";

function TermsAndConditions() {
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
        Terms & Conditions
      </Paper>
      <Paper sx={{ width: "90%", margin: "2em auto", padding: "1em" }}>
        1:-Acceptance of Terms: By accessing or using our services, you agree to
        be bound by these terms and conditions, which constitute a legal
        agreement between you and Naturalganic("we", "us", or "our").
        <br />
        2:-Service Description: We provide a platform for customers to order
        groceries from local shops and have them delivered to their doorstep.
        Our services include order processing, payment processing, and delivery
        coordination.
        <br />
        3:- User Account: To use our services, you must create a user account.
        You agree to provide accurate and complete information when creating
        your account and to update your information as necessary. You are
        responsible for maintaining the confidentiality of your account
        information, including your username and password.
        <br />
        4:- Order Placement and Payment: You can place an order by selecting
        items from our website or app and submitting payment information.
        Payment is required in advance of delivery. We accept various payment
        methods, including credit cards, debit cards, and online wallets.
        <br />
        5:-Delivery: We will make every effort to deliver your order within the
        estimated timeframe,if delivery get late and it is delivered after 40
        minutes then total 10% or ordered amound will get refunded into your
        wallet and you can use it in next purchase. This will be a type of
        cashback and it will have some expiry date. if you ll not use it within
        48hours then it will automatically get expired. . We are not responsible
        for delays caused by factors outside of our control, such as traffic or
        weather or any natural disaster.
        <br />
        6:- Returns and Refunds: If you are not satisfied with your order,
        please contact us within 24 hours of delivery to request a refund or
        return. We reserve the right to refuse refunds or returns if we believe
        the request is fraudulent or abusive. Limitation of Liability: Our
        liability to you is limited to the amount you paid for our services. We
        are not liable for any indirect, incidental, or consequential damages
        arising from your use of our services. Intellectual Property: Our
        website, app, and all content and materials are protected by
        intellectual property laws. You may not use our content or materials
        without our express written consent. Governing Law and Dispute
        Resolution: These terms and conditions are governed by the laws of
        India. Any disputes arising from your use of our services will be
        resolved through arbitration in accordance with the rules of the Indian
        Arbitration and Conciliation Act. The arbitration will be conducted in
        the English language and held in the city of Darbhanga. The award
        rendered by the arbitrator will be final and binding, and judgment may
        be entered upon it in any court having jurisdiction thereof. Changes to
        Terms and Conditions: We may update these terms and conditions from time
        to time. We will notify you of any material changes by email or by
        posting a notice on our website or app. Your continued use of our
        services after any changes constitutes acceptance of the updated terms
        and conditions.
      </Paper>
    </>
  );
}

export default TermsAndConditions;
