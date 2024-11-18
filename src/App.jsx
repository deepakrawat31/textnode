import {
  ArrowUUpLeft,
  ArrowUUpRight,
  CaretUp,
  Graph,
} from "@phosphor-icons/react";

export default function App() {
  return (
    <div className="flex h-dvh flex-col gap-4 p-2 md:p-4">
      <header className="flex items-center gap-2">
        <a
          href="/"
          className="md:hover:motion-preset-shake md:motion-ease-spring-snappy flex items-center gap-1"
        >
          <Graph className="size-6" />
          <span className="uppercase">home</span>
        </a>
      </header>
      <div className="flex items-center justify-center gap-2">
        <button className="flex items-center gap-2 rounded bg-neutral-800 px-2 py-1 capitalize ring-1 ring-neutral-300/30 transition-all md:hover:ring-neutral-300/50">
          <span>undo</span>
          <ArrowUUpLeft className="size-4" />
        </button>
        <button className="flex items-center gap-2 rounded bg-neutral-800 px-2 py-1 capitalize ring-1 ring-neutral-300/30 transition-all md:hover:ring-neutral-300/50">
          <span>redo</span>
          <ArrowUUpRight className="size-4" />
        </button>
      </div>
      <main className="flex flex-1 items-center justify-center">
        <div className="h-full w-full max-w-3xl rounded-md ring-1 ring-neutral-300/30"></div>
      </main>
      <footer className="flex items-center justify-center gap-2">
        <button className="rounded bg-neutral-800 px-2 py-1 capitalize ring-1 ring-neutral-300/30 md:hover:ring-neutral-300/50">
          add text
        </button>
        <button className="flex items-center gap-1 rounded bg-neutral-800 px-2 py-1 capitalize ring-1 ring-neutral-300/30 md:hover:ring-neutral-300/50">
          font <CaretUp className="size-4" />
        </button>
        <button className="rounded bg-neutral-800 p-1 px-2 font-bold ring-1 ring-neutral-300/30 md:hover:ring-neutral-300/50">
          B
        </button>
        <button className="rounded bg-neutral-800 p-1 px-2 italic ring-1 ring-neutral-300/30 md:hover:ring-neutral-300/50">
          I
        </button>
        <button className="rounded bg-neutral-800 p-1 px-2 underline underline-offset-1 ring-1 ring-neutral-300/30 md:hover:ring-neutral-300/50">
          U
        </button>
      </footer>
    </div>
  );
}
