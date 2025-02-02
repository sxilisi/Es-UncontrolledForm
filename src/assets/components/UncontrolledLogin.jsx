export default function UncontrolledLogin() {
  function onLogin(event) {
    event.preventDefault();

    const formData = new FormData(event.target);

    const data = {
      username: formData.get("username"),
      password: formData.get("password"),
      session: formData.get("session") === "on" ? true : false,
    };

    console.log(data);
  }

  return (
    <form onSubmit={onLogin}>
      <h1>My Uncontrolled Form</h1>
      <input name="username" />
      <input name="password" />
      <input name="session" type="checkbox" />

      <button>Login</button>
      <button type="reset">Reset</button>
    </form>
  );
}
