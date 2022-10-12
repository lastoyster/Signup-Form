import { useState } from "react";
import { Input } from "../Input";
import styles from "./styles.module.scss";

export function Form() {
  const [name, setName] = useState("");
  const [sirname, setsirName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function shippingForm(event) {
    event.preventDefault();
    console.log("");
  }

  return (
    <form onSubmit={shippingForm} className={styles.container}>
      <Input
        value={name}
        onChange={(event) => setName(event.target.value)}
        placeholder="Name"
        required
      />
      <Input
        value={sirname}
        onChange={(event) => setsirName(event.target.value)}
        placeholder="Sirname"
        required
      />
      <Input
        value={email}
        onChange={(event) => setEmail(event.target.value)}
        placeholder="E-mail"
        type="email"
        required
      />
      <Input
        value={password}
        onChange={(event) => setPassword(event.target.value)}
        placeholder="password"
        type="password"
        required
      />
      <button type="submit" className={styles.button}>
        Register my free trial
      </button>
      <p>
        By clicking the button you agree to our{" "}
        <a href="#">Terms and Services</a>
      </p>
    </form>
  );
}
