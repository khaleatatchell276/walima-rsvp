export default function Home() {
  return (
    <div style={{ textAlign: "center", padding: "2rem" }}>
      <img src="/invite.jpg" alt="Invite" style={{ maxWidth: "100%", borderRadius: "16px" }} />
      <h1>You're Invited!</h1>
      <p>We would be honoured by your presence at our Walima celebration.</p>
      <form
        name="rsvp"
        method="POST"
        data-netlify="true"
        style={{ marginTop: "2rem" }}
      >
        <input type="hidden" name="form-name" value="rsvp" />
        <p>
          <input type="text" name="name" placeholder="Your name" required />
        </p>
        <p>
          <input type="tel" name="phone" placeholder="Phone number" required />
        </p>
        <p>
          <select name="attendance" required>
            <option value="">Will you attend?</option>
            <option value="yes">Yes, Insha'Allah</option>
            <option value="no">No, sorry</option>
          </select>
        </p>
        <p>
          <button type="submit">Submit RSVP</button>
        </p>
      </form>
    </div>
  );
}
