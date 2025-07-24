"use client";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const Footer = () => {
  const [modalContent, setModalContent] = useState<"privacy" | "popia" | null>(
    null
  );

  const handleOpenModal = (type: "privacy" | "popia") => setModalContent(type);
  const handleCloseModal = () => setModalContent(null);
  const modalRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
        handleCloseModal();
      }
    };
    if (modalContent) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [modalContent]);

  return (
    <>
      <AnimatePresence>
        {modalContent && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-60 z-50 flex items-center justify-center px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              ref={modalRef}
              className="bg-white rounded-lg shadow-lg relative w-full max-w-xl max-h-[90vh] overflow-y-auto p-6 md:p-8"
              initial={{ y: -30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -30, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              {/* Close Button */}
              <button
                onClick={handleCloseModal}
                className="absolute top-2 right-4 text-gray-600 text-xl font-bold hover:text-red-500"
              >
                ✕
              </button>

              {/* Modal Title */}
              <h2 className="text-xl font-bold mb-4 text-green-900">
                {modalContent === "privacy" ? "Privacy Policy" : "POPIA Notice"}
              </h2>

              {/* Modal Body (Scrollable on overflow) */}
              <div className="text-gray-700 font-montserrat text-sm leading-relaxed space-y-4">
                {modalContent === "privacy" ? (
                  <>
                    <b>Effective Date: 24/07/2025</b> <br />
                    At El-Kore Tech, your privacy matters deeply to us. We are
                    committed to protecting the personal information you share
                    with us and ensuring it is handled with care, integrity, and
                    in full compliance with the Protection of Personal
                    Information Act (POPIA) of South Africa. 1. Information We
                    Collect We may collect the following personal information
                    when you interact with our website or contact us: Name and
                    surname Email address Any other information you voluntarily
                    provide through our contact forms or communications 2. How
                    We Use Your Information We collect and process your
                    information in order to: Respond to your enquiries or
                    requests Provide relevant services or information Improve
                    our service offerings and user experience Keep internal
                    records, in line with legal and regulatory requirements 3.
                    Consent By using our contact forms or engaging with our
                    website, you consent to the collection and use of your
                    personal information as described in this policy. You may
                    withdraw your consent at any time by contacting us directly.
                    4. Protection of Your Information We take reasonable steps
                    to protect your personal information from loss, misuse,
                    unauthorised access, disclosure, alteration, or destruction.
                    All data is securely stored and only accessible by
                    authorised personnel. 5. Sharing of Information We will
                    never sell or rent your personal information. We do not
                    share your data with third parties unless: Required by law
                    Necessary to fulfil your request or provide a service you’ve
                    asked for (with your permission) 6. Your Rights Under POPIA
                    You have the right to: Request access to the personal data
                    we hold about you Correct or update your personal
                    information Request deletion or restriction of your data
                    Lodge a complaint with the Information Regulator To exercise
                    these rights, please contact us at: info@elkoretech.com 7.
                    Cookies and Website Usage Our website may use cookies to
                    enhance your browsing experience. These cookies do not
                    collect personal information and you can disable them in
                    your browser settings if preferred. 8. Changes to This
                    Policy We may update this Privacy Policy from time to time
                    to reflect changes in our practices or legal requirements.
                    Please check back periodically for any updates. 9. Contact
                    Us If you have any questions about this Privacy Policy or
                    how your data is handled, please reach out to us at
                    info@elkoretech.com.
                  </>
                ) : (
                  <>
                    By submitting this form, you consent to Ikore Solutions and
                    Technology, trading as El-Kore Tech, collecting and
                    processing your personal information for the purpose of
                    responding to your enquiry. We are committed to protecting
                    your privacy in accordance with the Protection of Personal
                    Information Act (POPIA). Your information will not be shared
                    with any third parties without your explicit consent and
                    will be used solely for the purpose intended. Should you
                    wish to access, update, or delete your personal information,
                    please contact us at info@elkoretech.com.
                  </>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <footer className="bg-green-900 text-white py-8 px-4 sm:px-6 md:px-20 lg:px-32 space-y-4">
        <div className="text-center font-montserrat">
          <p className="font-semibold">
            IKORE Solutions and Technology​ PTY (LTD) Trading as El-Kore Tech
          </p>
          <p>
            Corner Tyrwhitt and, 24 Cradock Ave, Rosebank, Johannesburg, 2196
          </p>
          <p>info@elkoretech.com</p>
        </div>
        <div className="flex justify-center gap-4">
          <button
            onClick={() => handleOpenModal("privacy")}
            className="underline hover:text-green-300 transition-colors"
          >
            Privacy Policy
          </button>
          <button
            onClick={() => handleOpenModal("popia")}
            className="underline hover:text-green-300 transition-colors"
          >
            POPIA
          </button>
        </div>
      </footer>
    </>
  );
};

export default Footer;
