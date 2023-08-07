import { Greeting } from "./components/Greeting"

export default function Page() {
  return (
    <div className="flex h-full w-full items-center justify-center rounded-lg bg-slate-300 font-mono">
      <Greeting />
    </div>
  )
}
