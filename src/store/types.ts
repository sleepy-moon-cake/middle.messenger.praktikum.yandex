import { Page404Props } from "../pages/404/types";
import { Page500Props } from "../pages/500/types";
import { ChatPageProps } from "../pages/chat/types";
import { SettingsPageProps } from "../pages/settings/types";
import { SignInPageProps } from "../pages/signin/types";
import { SignUpPageProps } from "../pages/signup/types";

export type State = {
  chatPage: ChatPageProps;
  signInPage: SignInPageProps;
  signUpPage: SignUpPageProps;
  settingsPage: SettingsPageProps;
  page500: Page500Props;
  page404: Page404Props;
};
