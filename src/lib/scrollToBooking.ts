export function scrollToBookingForm(fallbackUrl = "/#book-appointment") {
  if (typeof window === "undefined") return;

  const candidateSelectors = [
    "#book-appointment",
    "#mobile-booking-form",
    "#desktop-booking-form",
    "#book-service-form",
    '[data-booking-form="true"]',
    "form"
  ];

  let visibleTarget: HTMLElement | null = null;
  for (const sel of candidateSelectors) {
    const elements = Array.from(document.querySelectorAll<HTMLElement>(sel));
    const found = elements.find((el) => {
      const style = window.getComputedStyle(el);
      const rect = el.getBoundingClientRect();
      return (
        style.display !== "none" &&
        style.visibility !== "hidden" &&
        rect.height > 60
      );
    });
    if (found) {
      visibleTarget = found;
      break;
    }
  }

  if (visibleTarget) {
    const headerOffset = 90;
    const elementPosition = visibleTarget.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

    window.scrollTo({
      top: Math.max(0, offsetPosition),
      behavior: "smooth"
    });

    // Provide visual focus and keyboard focus to the first input field
    const firstInput = visibleTarget.querySelector<HTMLInputElement>(
      'input[type="text"], input[name="name"], input'
    );
    if (firstInput) {
      setTimeout(() => {
        firstInput.focus({ preventScroll: true });
      }, 400);
    }
  } else {
    // Navigate to homepage with hash if not already on it
    if (window.location.pathname !== "/") {
      window.location.href = fallbackUrl;
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }
}
