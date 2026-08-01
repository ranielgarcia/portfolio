import type { ReactNode } from "react";

/* Shared primitives — all use currentColor so diagrams adapt to the theme. */

function Box({
  x,
  y,
  w,
  h,
  label,
  accent = false,
  rx = 8,
}: {
  x: number;
  y: number;
  w: number;
  h: number;
  label: string;
  accent?: boolean;
  rx?: number;
}) {
  return (
    <g>
      <rect
        x={x}
        y={y}
        width={w}
        height={h}
        rx={rx}
        fill={accent ? "var(--brand)" : "transparent"}
        fillOpacity={accent ? 0.12 : 1}
        stroke="currentColor"
        strokeOpacity={0.4}
        strokeWidth={1.5}
      />
      <text
        x={x + w / 2}
        y={y + h / 2}
        textAnchor="middle"
        dominantBaseline="central"
        fontSize={12}
        fill="currentColor"
      >
        {label}
      </text>
    </g>
  );
}

function Arrow({
  x1,
  y1,
  x2,
  y2,
}: {
  x1: number;
  y1: number;
  x2: number;
  y2: number;
}) {
  return (
    <line
      x1={x1}
      y1={y1}
      x2={x2}
      y2={y2}
      stroke="currentColor"
      strokeOpacity={0.5}
      strokeWidth={1.5}
      markerEnd="url(#arrowhead)"
    />
  );
}

function Svg({ children }: { children: ReactNode }) {
  return (
    <svg
      viewBox="0 0 400 240"
      className="h-auto w-full text-foreground"
      role="img"
    >
      <defs>
        <marker
          id="arrowhead"
          markerWidth="8"
          markerHeight="8"
          refX="6"
          refY="3"
          orient="auto"
        >
          <path d="M0,0 L6,3 L0,6 Z" fill="currentColor" fillOpacity={0.5} />
        </marker>
      </defs>
      {children}
    </svg>
  );
}

export function CleanArchitectureDiagram() {
  const rings = [
    { r: 110, label: "Frameworks & Drivers" },
    { r: 82, label: "Interface Adapters" },
    { r: 54, label: "Use Cases" },
    { r: 26, label: "Entities" },
  ];
  return (
    <Svg>
      {rings.map((ring, i) => (
        <g key={ring.r}>
          <circle
            cx={200}
            cy={120}
            r={ring.r}
            fill={i === 3 ? "var(--brand)" : "transparent"}
            fillOpacity={i === 3 ? 0.15 : 1}
            stroke="currentColor"
            strokeOpacity={0.4}
            strokeWidth={1.5}
          />
          <text
            x={200}
            y={120 - ring.r + 14}
            textAnchor="middle"
            fontSize={10}
            fill="currentColor"
          >
            {ring.label}
          </text>
        </g>
      ))}
    </Svg>
  );
}

export function CqrsDiagram() {
  return (
    <Svg>
      <Box x={160} y={12} w={80} h={30} label="Client" />
      <Arrow x1={185} y1={42} x2={110} y2={78} />
      <Arrow x1={215} y1={42} x2={290} y2={78} />
      <Box x={40} y={80} w={140} h={30} label="Commands" accent />
      <Box x={220} y={80} w={140} h={30} label="Queries" accent />
      <Arrow x1={110} y1={110} x2={110} y2={146} />
      <Arrow x1={290} y1={110} x2={290} y2={146} />
      <Box x={40} y={148} w={140} h={30} label="Write Model" />
      <Box x={220} y={148} w={140} h={30} label="Read Model" />
      <Arrow x1={180} y1={205} x2={220} y2={205} />
      <Box x={40} y={190} w={140} h={30} label="Domain Store" />
      <Box x={220} y={190} w={140} h={30} label="Projections" />
    </Svg>
  );
}

export function DddDiagram() {
  return (
    <Svg>
      <Box x={20} y={20} w={170} h={200} label="" rx={12} />
      <text
        x={105}
        y={38}
        textAnchor="middle"
        fontSize={11}
        fill="currentColor"
      >
        Enrollment Context
      </text>
      <Box x={40} y={54} w={130} h={30} label="Aggregate Root" accent />
      <Box x={40} y={96} w={130} h={26} label="Entity" />
      <Box x={40} y={130} w={130} h={26} label="Value Object" />
      <Box x={40} y={168} w={130} h={30} label="Domain Event" />

      <Box x={210} y={20} w={170} h={200} label="" rx={12} />
      <text
        x={295}
        y={38}
        textAnchor="middle"
        fontSize={11}
        fill="currentColor"
      >
        Billing Context
      </text>
      <Box x={230} y={54} w={130} h={30} label="Aggregate Root" accent />
      <Box x={230} y={96} w={130} h={26} label="Policy" />
      <Box x={230} y={130} w={130} h={26} label="Invoice" />
      <Box x={230} y={168} w={130} h={30} label="Domain Event" />

      <Arrow x1={190} y1={183} x2={230} y2={183} />
    </Svg>
  );
}

export function EventDrivenDiagram() {
  return (
    <Svg>
      <Box x={20} y={100} w={100} h={36} label="Producer" accent />
      <Arrow x1={120} y1={118} x2={160} y2={118} />
      <Box x={160} y={96} w={80} h={44} label="Broker" />
      <Arrow x1={240} y1={110} x2={290} y2={56} />
      <Arrow x1={240} y1={118} x2={290} y2={118} />
      <Arrow x1={240} y1={128} x2={290} y2={182} />
      <Box x={290} y={38} w={90} h={34} label="Consumer A" />
      <Box x={290} y={100} w={90} h={34} label="Consumer B" />
      <Box x={290} y={164} w={90} h={34} label="Consumer C" />
    </Svg>
  );
}

export function SignalRDiagram() {
  return (
    <Svg>
      <Box x={150} y={100} w={100} h={40} label="SignalR Hub" accent />
      <Box x={20} y={20} w={90} h={32} label="Client 1" />
      <Box x={20} y={104} w={90} h={32} label="Client 2" />
      <Box x={20} y={188} w={90} h={32} label="Client 3" />
      <Arrow x1={110} y1={36} x2={150} y2={112} />
      <Arrow x1={150} y1={120} x2={110} y2={120} />
      <Arrow x1={110} y1={204} x2={150} y2={128} />
      <Box x={290} y={104} w={90} h={32} label="Backplane" />
      <Arrow x1={250} y1={120} x2={290} y2={120} />
    </Svg>
  );
}

export function MicroservicesDiagram() {
  return (
    <Svg>
      <Box x={150} y={12} w={100} h={32} label="API Gateway" accent />
      <Arrow x1={175} y1={44} x2={70} y2={92} />
      <Arrow x1={200} y1={44} x2={200} y2={92} />
      <Arrow x1={225} y1={44} x2={330} y2={92} />
      <Box x={20} y={94} w={100} h={34} label="Orders" />
      <Box x={150} y={94} w={100} h={34} label="Catalog" />
      <Box x={280} y={94} w={100} h={34} label="Payments" />
      <Arrow x1={70} y1={128} x2={70} y2={168} />
      <Arrow x1={200} y1={128} x2={200} y2={168} />
      <Arrow x1={330} y1={128} x2={330} y2={168} />
      <Box x={30} y={170} w={80} h={30} label="DB" />
      <Box x={160} y={170} w={80} h={30} label="DB" />
      <Box x={290} y={170} w={80} h={30} label="DB" />
    </Svg>
  );
}
