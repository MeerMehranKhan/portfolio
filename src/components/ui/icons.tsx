/* ============================================
   CUSTOM SVG ICONS
   Brand icons not available in lucide-react v1.8+
   These are standard SVG paths from Simple Icons
   ============================================ */

interface IconProps {
  size?: number;
  className?: string;
}

export function GithubIcon({ size = 24, className = "" }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      className={`text-foreground ${className}`}
    >
      <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
    </svg>
  );
}

export function LinkedinIcon({ size = 24, className = "" }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      className={className}
    >
      <path fill="#0A66C2" d="M22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      <path fill="#FFF" d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452z" />
    </svg>
  );
}

export function GmailIcon({ size = 24, className = "" }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 256 204" className={className} xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="gmail-a" x1="165" x2="165" y1="44" y2="166" gradientUnits="userSpaceOnUse">
          <stop stopColor="#60d673"></stop>
          <stop offset="0.17" stopColor="#42c868"></stop>
          <stop offset="0.39" stopColor="#0ebc5f"></stop>
          <stop offset="0.62" stopColor="#00a9bb"></stop>
          <stop offset="0.86" stopColor="#3c90ff"></stop>
          <stop offset="1" stopColor="#3186ff"></stop>
        </linearGradient>
        <linearGradient id="gmail-b" x1="8" x2="184" y1="46.13" y2="46.13" gradientUnits="userSpaceOnUse">
          <stop offset="0.08" stopColor="#ff63a0"></stop>
          <stop offset="0.3" stopColor="#fc413d"></stop>
          <stop offset="0.5" stopColor="#fc413d"></stop>
          <stop offset="0.65" stopColor="#fc413d"></stop>
          <stop offset="0.72" stopColor="#fc5c30"></stop>
          <stop offset="0.86" stopColor="#feb10c"></stop>
          <stop offset="0.91" stopColor="#fec700"></stop>
          <stop offset="0.96" stopColor="#ffdb0f"></stop>
        </linearGradient>
      </defs>
      <g transform="matrix(1.454542, 0, 0, 1.454542, -11.636063, -37.817696)">
        <path fill="url(#gmail-a)" d="M146 44h38v110c0 6.627-5.373 12-12 12h-20a6 6 0 0 1-6-6z"></path>
        <path fill="#fc413d" d="M46 44H8v110c0 6.627 5.373 12 12 12h20a6 6 0 0 0 6-6z"></path>
        <path fill="url(#gmail-b)" d="M39.226 30.456c-8.033-6.752-20.018-5.714-26.77 2.319-6.752 8.032-5.714 20.017 2.319 26.77l76.078 63.949a8 8 0 0 0 10.295 0l76.078-63.95c8.032-6.752 9.07-18.737 2.318-26.77-6.752-8.032-18.737-9.07-26.769-2.318L96 78.18z"></path>
      </g>
    </svg>
  );
}

export function OutlookIcon({ size = 24, className = "" }: IconProps) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={size} height={size} className={className}>
        <path d="M7 6.43l5.5-1.12v13.38L7 17.57V6.43zM12.5 5.31l8 1.45v10.48l-8 1.45V5.31z" fill="#0078D4"/>
        <path d="M13.5 8h5.5v1.2H13.5V8zM13.5 10.7h5.5v1.2H13.5v-1.2zM13.5 13.4h4v1.2h-4v-1.2z" fill="#fff" opacity=".8"/>
        <path d="M8.7 10.3c.7 0 1.2.6 1.2 1.3 0 .7-.5 1.3-1.2 1.3-.7 0-1.2-.6-1.2-1.3 0-.7.5-1.3 1.2-1.3zm0 .5c-.4 0-.7.3-.7.8 0 .5.3.8.7.8.4 0 .7-.3.7-.8 0-.5-.3-.8-.7-.8z" fill="#fff"/>
    </svg>
  );
}
