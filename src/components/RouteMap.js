const US_OUTLINE = [
  [120, 40], [150, 45], [200, 50], [300, 45], [400, 50], [480, 55],
  [540, 75], [600, 60], [650, 85], [700, 70], [760, 90], [820, 110],
  [840, 140], [815, 175], [830, 200], [810, 220], [790, 250], [770, 270],
  [750, 300], [760, 330], [745, 360], [770, 390], [755, 420], [760, 460],
  [740, 500], [770, 580], [775, 580], [760, 595], [730, 560], [700, 530],
  [660, 505], [610, 495], [560, 510], [530, 490], [470, 500], [420, 480],
  [360, 500], [300, 460], [320, 400], [260, 390], [180, 380], [95, 365],
  [75, 320], [95, 270], [70, 220], [90, 150], [100, 90],
];

const OUTLINE_PATH =
  US_OUTLINE.map((p, i) => `${i === 0 ? 'M' : 'L'}${p[0]},${p[1]}`).join(' ') + ' Z';

export default function RouteMap() {
  return (
    <svg
      viewBox="0 0 960 600"
      width="100%"
      height="100%"
      preserveAspectRatio="xMidYMid meet"
      role="img"
      aria-labelledby="routeMapTitle"
    >
      <title id="routeMapTitle">
        Map of the continental United States showing the journey from Portland, Oregon
        to Bethlehem, Pennsylvania to Los Angeles, California
      </title>

      {/* country outline */}
      <path
        d={OUTLINE_PATH}
        fill="var(--accent)"
        fillOpacity="0.07"
        stroke="var(--border)"
        strokeWidth="2.5"
        strokeLinejoin="round"
      />

      {/* flight paths */}
      <path
        d="M115,95 Q420,40 715,295"
        fill="none"
        stroke="var(--accent)"
        strokeWidth="2"
        strokeDasharray="7 7"
        opacity="0.6"
      />
      <path
        d="M715,295 Q400,480 90,345"
        fill="none"
        stroke="var(--accent)"
        strokeWidth="2"
        strokeDasharray="7 7"
        opacity="0.6"
      />

      {/* plane icons, rotated along each path */}
      <g transform="translate(417,118) rotate(18.4)">
        <path d="M -12,-5 L 12,0 L -12,5 L -5,0 Z" fill="var(--accent)" />
      </g>
      <g transform="translate(401,400) rotate(175.4)">
        <path d="M -12,-5 L 12,0 L -12,5 L -5,0 Z" fill="var(--accent)" />
      </g>

      {/* Portland, OR */}
      <circle cx="115" cy="95" r="11" fill="none" stroke="var(--accent)" strokeWidth="1.5" opacity="0.45" />
      <circle cx="115" cy="95" r="5.5" fill="var(--accent)" />
      <text x="134" y="91" fontSize="17" fontWeight="600" fill="var(--text)" opacity="0.85">Portland, OR</text>
      <text x="134" y="111" fontSize="13" fill="var(--text-muted)" opacity="0.8">Grew up here</text>

      {/* Bethlehem, PA */}
      <circle cx="715" cy="295" r="11" fill="none" stroke="var(--accent)" strokeWidth="1.5" opacity="0.45" />
      <circle cx="715" cy="295" r="5.5" fill="var(--accent)" />
      <text x="700" y="276" fontSize="17" fontWeight="600" fill="var(--text)" textAnchor="end" opacity="0.85">Bethlehem, PA</text>
      <text x="700" y="296" fontSize="13" fill="var(--text-muted)" textAnchor="end" opacity="0.8">Studied at Lehigh</text>

      {/* Los Angeles, CA */}
      <circle cx="90" cy="345" r="11" fill="none" stroke="var(--accent)" strokeWidth="1.5" opacity="0.45" />
      <circle cx="90" cy="345" r="5.5" fill="var(--accent)" />
      <text x="109" y="341" fontSize="17" fontWeight="600" fill="var(--text)" opacity="0.85">Los Angeles, CA</text>
      <text x="109" y="361" fontSize="13" fill="var(--text-muted)" opacity="0.8">Based here now</text>
    </svg>
  );
}
