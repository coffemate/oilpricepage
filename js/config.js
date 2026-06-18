(function () {
  window.OilPricePage = window.OilPricePage || {};

  window.OilPricePage.config = {
    SUPABASE_URL: "https://nmfaolamflaqrdrjycps.supabase.co",
    SUPABASE_ANON_KEY:
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5tZmFvbGFtZmxhcXJkcmp5Y3BzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjUzNTQ1MjgsImV4cCI6MjA4MDkzMDUyOH0.h-3dELhVoFXHLM1gvD5AP6BZK_crG4O74YVBtBJjItw",
    OIL_TYPES: ["92", "95", "98", "0"],
    PRICE_TIME_ZONE: "Asia/Shanghai",
    CHART_CDN_URLS: [
      "https://cdn.jsdelivr.net/npm/chart.js@4.4.3/dist/chart.umd.min.js",
      "https://unpkg.com/chart.js@4.4.3/dist/chart.umd.min.js",
      "https://cdn.bootcdn.net/ajax/libs/Chart.js/4.4.3/chart.umd.min.js",
    ],
    CHART_COLORS: {
      "92": "#ef4444",
      "95": "#3b82f6",
      "98": "#8b5cf6",
      "0": "#10b981",
    },
  };
})();
