export default function Home({ dark, setDark}) {
  return (
    <div style={{
      color: dark ? '#e2e2f2' : '#1e1f26',
      backgroundColor: dark ? '#1e1f26' : '#e2e2f2'
    }}>
      <h1>Hello world</h1>
      <button onClick={() => setDark(!dark)}>Change theme</button>
    </div>
  )
}
