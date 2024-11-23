import { useEffect, useState } from "react";

export default function PrivacyPolicy() {
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    setFadeIn(true); // Trigger fade-in effect after mounting
  }, []);

  return (
    <div className="bg-white dark:bg-transparent dark:bg-gradient-to-br dark:from-white/20 dark:via-transparent transition-colors duration-500 ease-in-out">
      <div
        className={`container pb-6 pt-12 mx-auto px-10 md:px-16 lg:px-32 xl:px-64 transition-opacity transform duration-1000 ease-in-out  ${
          fadeIn ? "opacity-100" : "opacity-0"
        }`}
      >
        <div className="flex justify-center ">
          <h1 className=" text-black dark:text-white font-semibold text-center">
            Privacy Policy
          </h1>
        </div>
        <hr className="my-6 mx-0 border-gray-200 dark:border-neutral-700" />

        <p className="my-4 text-neutral-600 dark:text-neutral-300">
          At MAHTX Detailing, we are committed to protecting your privacy and
          ensuring that your personal information is handled securely and
          responsibly. This Privacy Policy outlines how we collect, use, and
          safeguard your data. By using our services, you agree to the terms of
          this policy.
        </p>

        <h2 className="text-2xl font-semibold mb-2 text-black dark:text-white">
          1. Information We Collect
        </h2>
        <p className="mb-4 text-neutral-600 dark:text-neutral-300">
          We may collect personal information such as your name, email address,
          phone number, and vehicle details when you book an appointment,
          request a quote, or interact with our website. Additionally, we may
          collect non-personal data such as browser type, device information,
          and usage patterns to improve our services.
        </p>

        <h2 className="text-2xl font-semibold mb-2 text-black dark:text-white">
          2. How We Use Your Information
        </h2>
        <p className="mb-4 text-neutral-600 dark:text-neutral-300">
          We use the information we collect to provide, maintain, and improve
          our detailing services, as well as to communicate with you about
          appointment confirmations, updates, promotions, or any changes to our
          services. We may also use your information to personalize your
          experience and conduct analytics and research to enhance our
          offerings.
        </p>

        <h2 className="text-2xl font-semibold mb-2 text-black dark:text-white">
          3. Sharing Your Information
        </h2>
        <p className="mb-4 text-neutral-600 dark:text-neutral-300">
          We do not sell or share your personal information with third parties
          except in the following cases: when we have your consent, when
          required by law, to protect our rights, or with trusted third-party
          service providers who assist us in operating our business (e.g.,
          payment processors, scheduling platforms). These providers are
          obligated to protect your information and only use it as directed by
          us.
        </p>

        <h2 className="text-2xl font-semibold mb-2 text-black dark:text-white">
          4. Data Security
        </h2>
        <p className="mb-4 text-neutral-600 dark:text-neutral-300">
          We implement reasonable security measures to protect your information
          from unauthorized access, disclosure, alteration, or destruction.
          While we strive to use commercially acceptable means to protect your
          personal information, we cannot guarantee its absolute security.
        </p>

        <h2 className="text-2xl font-semibold mb-2 text-black dark:text-white">
          5. Cookies and Tracking Technologies
        </h2>
        <p className="mb-4 text-neutral-600 dark:text-neutral-300">
          We may use cookies and similar tracking technologies to track activity
          on our website and hold certain information. You can instruct your
          browser to refuse all cookies or indicate when a cookie is being sent.
          However, if you do not accept cookies, you may not be able to use some
          parts of our service.
        </p>

        <h2 className="text-2xl font-semibold mb-2 text-black dark:text-white">
          6. Your Rights and Choices
        </h2>
        <p className="mb-4 text-neutral-600 dark:text-neutral-300">
          You have the right to access, update, delete, or restrict the
          processing of your personal data. To exercise these rights, please
          contact us at mattp@mahtxautocare.com. We will respond to your request
          within a reasonable timeframe.
        </p>

        <h2 className="text-2xl font-semibold mb-2 text-black dark:text-white">
          7. Changes to This Privacy Policy
        </h2>
        <p className="mb-4 text-neutral-600 dark:text-neutral-300">
          We may update our Privacy Policy from time to time. We will notify you
          of any changes by posting the new Privacy Policy on this page. We
          encourage you to review this Privacy Policy periodically for any
          changes. Changes to this Privacy Policy are effective when they are
          posted on this page.
        </p>

        <h2 className="text-2xl font-semibold mb-2 text-black dark:text-white">
          8. Contact Us
        </h2>
        <p className="mb-4 text-neutral-600 dark:text-neutral-300">
          If you have any questions about this Privacy Policy, please contact us
          at:
          <br />
          mattp@mahtxautocare.com
        </p>
        <hr className="mt-12 mx-0 border-gray-200 dark:border-neutral-700" />
      </div>
    </div>
  );
}
