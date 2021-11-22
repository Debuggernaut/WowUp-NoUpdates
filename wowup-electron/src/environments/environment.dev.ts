// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `index.ts`, but if you do
// `ng build --env=prod` then `index.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const AppConfig = {
  production: false,
  environment: "DEV",
  wowUpWebsiteUrl: "https://github.com/Debuggernaut/WowUp-NoUpdates",
  wowUpApiUrl: "https://github.com/Debuggernaut/WowUp-NoUpdates",
  wowUpHubUrl: "https://github.com/Debuggernaut/WowUp-NoUpdates",
  googleAnalyticsId: "",
  wowupRepositoryUrl: "https://github.com/Debuggernaut/WowUp-NoUpdates",
  warcraftTavernNewsFeedUrl:
    "https://www.warcrafttavern.com/?call_custom_simple_rss=1&csrp_post_type=wow-classic-news,tbc-classic-news,retail-news&csrp_thumbnail_size=large",
  azure: {
    applicationInsightsKey: "",
  },
  autoUpdateIntervalMs: 3600000, // 1 hour
  appUpdateIntervalMs: 3600000, // 1 hour
  defaultHttpTimeoutMs: 10000,
  defaultHttpResetTimeoutMs: 30000,
  wowUpHubHttpTimeoutMs: 10000,
  newsRefreshIntervalMs: 3600000, // 1 hour
  featuredAddonsCacheTimeSec: 30, // 30 sec
};
