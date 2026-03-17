import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { Dashboard } from './components/Dashboard'
import "@/lib/mock"

const BASE_URL = (import.meta.env?.VITE_BASE_URL as string | undefined) ?? "http://localhost:8080/"

async function apiFetch(
  path: string,
  options: RequestInit = {}
): Promise<Response> {
  const res = await fetch(`${BASE_URL}${path}`, {
    credentials: "include",
    headers: {
      "cache": "no-store",
      "Content-Type": "application/json",
      ...(options.headers || {}),
    },
    ...options,
  })

  return res
}

function App() {
  const [canView, modifyCanView] = useState(false)

  useEffect(() => {
      apiFetch("canView.php")
        .then(res => res.json())
        .then((data: { allowed: boolean }) => modifyCanView(data.allowed))
        .catch(() => modifyCanView(false))
    }, [])
  return (
    canView && (
    <Router>
      <main className="px-2 md:px-4 lg:px-8 xl:px-16 py-12">
        <Routes>
          <Route path="/" element={<Dashboard />} />
        </Routes>
      </main>
    </Router>
    )
  )
}

export default App
