(function () {
  window.OilPricePage = window.OilPricePage || {};

  const { PRICE_TIME_ZONE } = window.OilPricePage.config;
  const dateFormatter = new Intl.DateTimeFormat("en-CA", {
    timeZone: PRICE_TIME_ZONE,
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  });

  function formatPrice(value) {
    return Number.isFinite(value) ? value.toFixed(2) : "-";
  }

  function normalizeDate(value) {
    return String(value || "").slice(0, 10);
  }

  function dateDaysAgo(days) {
    const date = new Date();
    date.setDate(date.getDate() - days);
    return formatDateParts(date);
  }

  function toNumber(value) {
    const number = Number(value);
    return Number.isFinite(number) ? number : null;
  }

  function formatDateParts(date) {
    const parts = Object.fromEntries(
      dateFormatter.formatToParts(date).map((part) => [part.type, part.value])
    );
    return `${parts.year}-${parts.month}-${parts.day}`;
  }

  window.OilPricePage.format = {
    dateDaysAgo,
    formatPrice,
    normalizeDate,
    toNumber,
  };
})();
