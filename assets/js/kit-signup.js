/**
 * Cookie-Free ConvertKit Form Handler
 * 
 * This script handles ConvertKit form submissions without loading the ConvertKit JavaScript
 * which would set cookies/localStorage for tracking. This provides GDPR compliance
 * while maintaining full functionality.
 * 
 * Features:
 * - No cookies or localStorage set on page load
 * - Inline success/error messages (no redirects)
 * - Handles multiple forms with unique IDs
 * - Progressive enhancement (works without JS fallback)
 * - Prevents double submissions
 * 
 * Forms supported:
 * - #kit-signup (article pages)
 * - #kit-signup-footer (footer)
 * 
 * Technical approach:
 * - Uses fetch() with no-cors mode to submit to ConvertKit's endpoint
 * - Assumes success since no-cors prevents reading response status
 * - Hides form elements and shows inline success message
 * - Maintains accessibility with proper ARIA attributes
 */
(() => {
  // Find all ConvertKit forms on the page
  const forms = document.querySelectorAll("form[id^='kit-signup']");
  if (!forms.length) return;

  // ConvertKit form endpoint - no tracking cookies needed
  const KIT_ACTION_URL = "https://app.kit.com/forms/9067006/subscriptions";

  // Helper functions for showing/hiding elements
  function show(el) { if (el) el.hidden = false; }
  function hide(el) { if (el) el.hidden = true; }

  // Attach event listeners to each form
  forms.forEach(form => {
    const formId = form.id;
    
    // Find elements using robust selectors
    const successEl = form.querySelector('[data-kit-success]');
    const errorEl = form.querySelector('[data-kit-error]');
    const emailInput = form.querySelector('input[name="email_address"]');
    const formContainer = form.querySelector('.kit-fields');
    const submitBtn = form.querySelector('button[type="submit"]');

    form.addEventListener("submit", async (e) => {
      e.preventDefault();

      // Hide any existing messages
      hide(successEl);
      hide(errorEl);

      // Basic client-side validation
      if (!emailInput || !emailInput.value || !emailInput.checkValidity()) {
        show(errorEl);
        if (emailInput) emailInput.focus();
        return;
      }

      // Disable button to prevent double submissions and show loading state
      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.setAttribute("aria-busy", "true");
      }

      try {
        const data = new FormData(form);

        // Submit to ConvertKit endpoint
        // Note: no-cors mode prevents reading response, but submission still works
        await fetch(KIT_ACTION_URL, {
          method: "POST",
          body: data,
          mode: "no-cors"
        });

        // Since we can't read the response with no-cors, we assume success
        // Clear form fields and disable them
        form.querySelectorAll("input, button").forEach(el => {
          if (el.tagName !== "BUTTON") el.value = "";
          el.disabled = true;
        });

        // Hide the form container and show success message
        if (formContainer) {
          formContainer.style.display = 'none';
        }
        show(successEl);
      } catch (err) {
        // If fetch fails, show error and re-enable form
        show(errorEl);
        if (submitBtn) submitBtn.disabled = false;
      } finally {
        // Always remove loading state
        if (submitBtn) submitBtn.removeAttribute("aria-busy");
      }
    });
  });
})();
