export default function TestIframePage() {
  return (
    <div className="min-h-screen bg-slate-900 flex items-center justify-center">
      <div className="w-[800px] h-[500px] bg-white">
        <iframe
          src="https://webwinddigital.com"
          title="Webwind Test"
          className="w-full h-full border-0"
        />
      </div>
    </div>
  )
}

