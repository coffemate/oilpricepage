(function () {
  window.OilPricePage = window.OilPricePage || {};

  async function ensureChartLibrary() {
    if (window.Chart) return true;

    for (const src of window.OilPricePage.config.CHART_CDN_URLS) {
      try {
        await loadScript(src);
        if (window.Chart) return true;
      } catch {
        // Try the next CDN.
      }
    }

    return false;
  }

  function downgradeChart(wrapId, fallbackId) {
    document.getElementById(wrapId).style.display = "none";
    document.getElementById(fallbackId).style.display = "block";
  }

  function loadScript(src) {
    return new Promise((resolve, reject) => {
      const script = document.createElement("script");
      script.src = src;
      script.async = false;
      script.onload = resolve;
      script.onerror = reject;
      document.head.appendChild(script);
    });
  }

  window.OilPricePage.chartLoader = {
    downgradeChart,
    ensureChartLibrary,
  };
})();
