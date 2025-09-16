import "./Profile.css"

function Profile() {
  return (
    <div className="profile-container">
      <h1>Lisett-Marleen Foster</h1>

      <h2>Hobid ja huvid:</h2>
      <ul>
        <li>Programmeermine</li>
        <li>Jalgrattasõit</li>
        <li>Muusika kuulamine</li>
        <li>Lugemine</li>
      </ul>

      <h2>Kontakt</h2>
      <form>
        <label>
          E-mail:
          <input type="email" placeholder="Teie e-mail" />
        </label>
        <br />
        <label>
          Sõnum:
          <textarea placeholder="Kirjuta sõnum siia..." />
        </label>
        <br />
        <button type="button">Saada</button>
      </form>
    </div>
  )
}

export default Profile
