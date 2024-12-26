import "@src/style/global.scss";
import "@src/style/pages/help.scss";
import getImageURL from "../utils/getImageURL";
function Help() {
  return (
    <div className="help-board">
      <div className="help-getready_img_field">
        <img
          className="help-sign_header"
          src={getImageURL("./assets/santamodel-1.webp")}
          alt="hero"
          draggable="false"
        />
      </div>
      <div className="help-content-container">
        <div className="help-content-board">
          <div className="help-title">Overview</div>
          <div className="help-letter">
            Welcome to <span className="help-content-bold">HowLucky2025!</span>{" "}
            <br />
            <br />
            HowLucky2025 is a fun and interactive app designed to let users
            explore their luck month by month. Each month, users are allocated
            12 boxes, each containing unique items representing their luck
            status and points. Users select 7 boxes to reveal their luck for the
            month and accumulate points to see their overall luck for the year.
            Users can preview their yearly results by paying $4.99 or wait until
            Christmas Day or New Year’s Day to view their results for free. If
            users wish to retry their luck for any specific month, they can do
            so by paying $4.99. Payments are securely handled via Stripe or
            PayPal.
          </div>
        </div>
        <div className="help-content-board">
          <div className="help-title">How to Play</div>
          <div className="help-letter">
            <span className="help-content-bold">Monthly Boxes: </span>
            <br />
            Each month, you will be allocated 12 boxes. <br />
            <br />
            <span className="help-content-bold">Each box contains: </span>
            <br />
            • An item name
            <br />
            • A description
            <br />
            • A luck status
            <br />• A luck point
            <br />
            <br />
            <span className="help-content-bold"> Select Your Boxes: </span>
            <br />
            Choose 7 boxes each month to determine your luck for that month. The
            luck status and points from the selected boxes will contribute to
            your monthly and yearly luck score. <br />
            <br />
            <span className="help-content-bold">View Your Results: </span>
            <br />
            <br />
            <span className="help-content-bold">• Paid Users:</span> Pay $4.99
            to preview your yearly results anytime.
            <br />
            <span className="help-content-bold">• Non-Paid Users: </span>
            View your results for free on Christmas Day or New Year’s Day.
            <br />
            <br />
            <span className="help-content-bold">Retry Luck: </span>
            <br />
            If you want to update your luck for any specific month, you can
            retry by paying $4.99.
            <br />
            <br />
            <span className="help-content-bold"> Payment Options: </span>
            <br />
            Payments are securely processed via Stripe or PayPal.
            <br />
            <br />
            <span className="help-content-bold">
              Enjoy playing HowLucky2025 and discover your luck for the year
              ahead!
            </span>
          </div>
        </div>
        <br />
        <div className="help-content-board">
          <div className="help-title">Privacy Policy</div>
          <br />
          <div className="help-letter">
            <span className="help-content-bold">1. Introduction</span>
            <br />
            <br />
            HowLucky2025 ("we," "our," or "us") is committed to protecting your
            privacy. This Privacy Policy explains how we collect, use, disclose,
            and safeguard your information when you use our app. By using
            HowLucky2025, you agree to the terms of this Privacy Policy. <br />
            <br />
            <span className="help-content-bold">2. Information We Collect</span>
            <br />
            <br />
            We may collect the following types of information: Personal
            Information: Your username, email address, DoB, Job, and payment
            information (processed securely via Stripe or PayPal). Usage Data:
            Information about how you interact with the app, such as box
            selections, monthly results, and retry attempts. <br />
            <br />
            <span className="help-content-bold">
              3. How We Use Your Information{" "}
            </span>
            <br />
            <br />
            We use the information we collect to: Provide and improve the app's
            functionality. Process payments securely (via Stripe and PayPal).
            Generate and display your luck results. Communicate with you about
            updates, promotions, or support. Ensure compliance with legal
            obligations. <br />
            <br />
            <span className="help-content-bold">
              4. Sharing Your Information{" "}
            </span>
            <br />
            <br />
            We do not sell or rent your personal information to third parties.
            However, we may share your information with: Service Providers:
            Third-party services like Stripe and PayPal for payment processing.
            Legal Authorities: When required by law or to protect our rights and
            interests.
            <br />
            <br />
            <span className="help-content-bold">5. Data Security </span>
            <br />
            <br /> We take reasonable measures to protect your personal
            information from unauthorized access, use, or disclosure. However,
            no method of transmission over the internet is 100% secure, and we
            cannot guarantee absolute security. <br />
            <br />
            <span className="help-content-bold">6. Your Rights </span>
            <br />
            <br /> Depending on your location, you may have the following
            rights: Access, update, or delete your personal information. Opt-out
            of promotional communications. Restrict or object to certain data
            processing activities.
            <br />
            <br />
            <span className="help-content-bold">7. Contact Us </span>
            <br />
            <br />
            If you have any questions about this Privacy Policy, please contact
            us at: URL: <a href="https://howlucky2025.com/contact">Contact</a>
          </div>
        </div>
      </div>

      <div className="help-footer">
        <div className="help-letter">HowLuck Help Center</div>
      </div>
    </div>
  );
}

export default Help;
