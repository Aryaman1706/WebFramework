import { User, UserProps } from "../models/User";
import { View } from "./View";

export class UserShow extends View<User, UserProps> {
  template(): string {
    return `
        <div>
            <h1>User Name: ${this.model.get("name")}</h1>
            <h1>User Age: ${this.model.get("age")}</h1>
        </div>
    `;
  }
}
