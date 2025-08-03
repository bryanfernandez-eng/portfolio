export const WavePattern = () => {
  return (
    <div className="absolute inset-0 overflow-hidden opacity-30">
      <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1000">
        <defs>
          <pattern id="wave" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
            <path d="M0,50 Q25,25 50,50 T100,50" stroke="rgba(34, 211, 238, 0.3)" strokeWidth="2" fill="none">
              <animate attributeName="d" values="M0,50 Q25,25 50,50 T100,50;M0,50 Q25,75 50,50 T100,50;M0,50 Q25,25 50,50 T100,50" dur="4s" repeatCount="indefinite"/>
            </path>
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#wave)"/>
      </svg>
    </div>
  );
};