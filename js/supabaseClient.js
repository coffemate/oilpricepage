(function () {
  window.OilPricePage = window.OilPricePage || {};

  function createDbClient() {
    if (!window.supabase) {
      throw new Error("Supabase SDK 加载失败");
    }

    const { SUPABASE_ANON_KEY, SUPABASE_URL } = window.OilPricePage.config;
    return window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
  }

  window.OilPricePage.supabaseClient = { createDbClient };
})();
