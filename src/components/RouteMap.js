export default function RouteMap() {
  return (
    <svg viewBox="0 0 600 420" width="100%" height="100%" role="img" aria-labelledby="routeMapTitle">
      <title id="routeMapTitle">
        Map showing the journey from Portland, Oregon to Bethlehem, Pennsylvania to Los Angeles, California
      </title>

      <defs>
        <pattern id="dotGrid" width="24" height="24" patternUnits="userSpaceOnUse">
          <circle cx="2" cy="2" r="1.2" fill="var(--border)" />
        </pattern>
      </defs>

      <rect x="0" y="0" width="600" height="420" rx="20" fill="url(#dotGrid)" opacity="0.55" />

      {/* flight paths */}
      <path
        d="M130,85 Q300,15 470,115"
        fill="none"
        stroke="var(--accent)"
        strokeWidth="1.5"
        strokeDasharray="6 6"
        opacity="0.55"
      />
      <path
        d="M470,115 Q300,250 115,310"
        fill="none"
        stroke="var(--accent)"
        strokeWidth="1.5"
        strokeDasharray="6 6"
        opacity="0.55"
      />

      {/* plane icons, rotated along each path */}
      <g transform="translate(300,57.5) rotate(5)">
        <path d="M -9,-4 L 9,0 L -9,4 L -4,0 Z" fill="var(--accent)" />
      </g>
      <g transform="translate(296,231) rotate(151)">
        <path d="M -9,-4 L 9,0 L -9,4 L -4,0 Z" fill="var(--accent)" />
      </g>

      {/* Portland, OR */}
      <circle cx="130" cy="85" r="10" fill="none" stroke="var(--accent)" strokeWidth="1.5" opacity="0.4" />
      <circle cx="130" cy="85" r="5" fill="var(--accent)" />
      <text x="148" y="81" fontSize="13" fontWeight="600" fill="var(--text)">Portland, OR</text>
      <text x="148" y="97" fontSize="11" fill="var(--text-muted)">Grew up here</text>

      {/* Bethlehem, PA */}
      <circle cx="470" cy="115" r="10" fill="none" stroke="var(--accent)" strokeWidth="1.5" opacity="0.4" />
      <circle cx="470" cy="115" r="5" fill="var(--accent)" />
      <text x="470" y="145" fontSize="13" fontWeight="600" fill="var(--text)" textAnchor="middle">Bethlehem, PA</text>
      <text x="470" y="161" fontSize="11" fill="var(--text-muted)" textAnchor="middle">Studied at Lehigh</text>

      {/* Los Angeles, CA */}
      <circle cx="115" cy="310" r="10" fill="none" stroke="var(--accent)" strokeWidth="1.5" opacity="0.4" />
      <circle cx="115" cy="310" r="5" fill="var(--accent)" />
      <text x="115" y="340" fontSize="13" fontWeight="600" fill="var(--text)" textAnchor="middle">Los Angeles, CA</text>
      <text x="115" y="356" fontSize="11" fill="var(--text-muted)" textAnchor="middle">Based here now</text>
    </svg>
  );
}
