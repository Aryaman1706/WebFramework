import { User, UserProps } from "../models/User";
import { UserForm } from "./UserForm";
import { UserShow } from "./UserShow";
import { View } from "./View";

export class UserEdit extends View<User, UserProps> {
  regionsMap(): { [key: string]: string } {
    return {
      userShow: ".user-show",
      UserForm: ".user-form",
    };
  }

  onRender(): void {
    new UserForm(this.regions.userShow, this.model).render();
    new UserShow(this.regions.userShow, this.model).render();
  }

  template(): string {
    return `
        <div>
            <div class="user-show"></div>
            <div class="user-form"></div>
        </div>
    `;
  }
}
