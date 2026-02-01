/**
 * Google Analytics integration.
 * Set NEXT_PUBLIC_GA_MEASUREMENT_ID in .env.local to enable.
 */
export function AnalyticsScript() {
  const measurementId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;
  if (!measurementId) return null;

  return (
    <>
      <script async src={`https://www.googletagmanager.com/gtag/js?id=${measurementId}`} />
      <script
        dangerouslySetInnerHTML={{
          __html: `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','${measurementId}');`,
        }}
      />
    </>
  );
}
