import type { Project } from "./project-data";

const visualContent = {
  "repair-desk": (
    <>
      <path d="M92 76h336v188H92z" />
      <path d="M92 117h336M122 95h126m-126 43h210m-210 25h155m-155 25h188" />
      <path d="M122 218h128v24H122zM278 218h120" />
      <circle cx="386" cy="95" r="7" />
      <path d="m348 167 15 15 28-32" />
    </>
  ),
  twinecapital: (
    <>
      <path d="M66 268h388" />
      <path d="M112 268v-67h47v67M195 268v-104h47v104M278 268v-141h47v141M361 268V91h47v177" />
      <path d="m93 155 81-28 64 12 77-69 83-18" />
      <circle cx="174" cy="127" r="5" />
      <circle cx="238" cy="139" r="5" />
      <circle cx="315" cy="70" r="5" />
      <circle cx="398" cy="52" r="5" />
    </>
  ),
  minerallink: (
    <>
      <path d="m126 210 83-93 73 43 90-93" />
      <path d="m209 117 7 110 66-67 88 20 2-113" />
      <path d="m126 210 90 17m132-134 18 87" />
      <circle cx="126" cy="210" r="8" />
      <circle cx="209" cy="117" r="8" />
      <circle cx="282" cy="160" r="8" />
      <circle cx="372" cy="67" r="8" />
      <circle cx="374" cy="247" r="8" />
    </>
  ),
  "ember-gas": (
    <>
      <path d="M88 240h344M110 240V127h112v113M266 240V93h112v147" />
      <path d="M138 127V96h56v31M294 93V62h56v31" />
      <path d="M137 169h58m-58 31h58m106-65h58m-58 31h58m-58 31h58" />
      <circle cx="161" cy="112" r="6" />
      <circle cx="317" cy="78" r="6" />
      <path d="M70 270h380M70 75h25m330 0h25" />
    </>
  ),
  tone4dmedia: (
    <>
      <path d="M88 85h344v190H88z" />
      <path d="M88 126h344M126 85v190m230-190v190" />
      <path d="M148 157h142m-142 27h109m71 26h72m-72 23h72" />
      <path d="M148 224h142v37H148z" />
      <circle cx="374" cy="161" r="22" />
    </>
  ),
  "on-eaglewings-group": (
    <>
      <circle cx="260" cy="170" r="119" />
      <circle cx="260" cy="170" r="87" />
      <path d="m146 226 114-144 114 144M178 226l82-101 82 101M214 226l46-58 46 58" />
      <path d="M92 274h336M126 247h268M161 226h198" />
      <circle cx="260" cy="168" r="5" />
    </>
  ),
} satisfies Record<Project["slug"], React.ReactNode>;

export function ProjectVisual({ slug }: { slug: Project["slug"] }) {
  const drawing = visualContent[slug];

  return (
    <svg
      aria-hidden="true"
      className="project-visual"
      fill="none"
      viewBox="0 0 520 340"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <pattern
          height="28"
          id={`grid-${slug}`}
          patternUnits="userSpaceOnUse"
          width="28"
        >
          <path d="M28 0H0V28" fill="none" stroke="currentColor" strokeOpacity=".09" />
        </pattern>
      </defs>
      <path d="M0 0h520v340H0z" fill={`url(#grid-${slug})`} />
      <path
        d="M44 46h432M44 294h432M44 46v248M476 46v248"
        className="project-visual-frame"
      />
      <g className="project-visual-drawing">{drawing}</g>
      <path d="M44 294h432" className="project-visual-baseline" />
    </svg>
  );
}
