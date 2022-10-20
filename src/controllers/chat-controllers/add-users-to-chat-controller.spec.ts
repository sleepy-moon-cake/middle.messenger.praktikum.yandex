import { AddUsersToChatAPI } from "../../api/chat/add-users-api";
import { CHAT_PAGE_EVENT_NAME } from "../../screens/chat/events";
import store from "../../store/store";
import {
  AddUsersToChatController,
  AddUsersToChatFormModel,../../pages/chat/events
} from "./add-users-to-chat-controller";
import { expect } from "chai";
import * as sinon from "sinon";

describe("AddUsersToChatController", () => {
  let formModel: AddUsersToChatFormModel = {
    users: [1],
    chatId: 1,
  };

  it("should call API", async () => {
    let spyAPI = sinon.stub(AddUsersToChatAPI.prototype, "add").callsFake(() => {
      return new Promise((resolve) => {
        resolve(null);
      });
    });

    store.on(
      CHAT_PAGE_EVENT_NAME,
      () => {},
      () => {}
    );

    await AddUsersToChatController.add(formModel);

    expect(spyAPI.called).to.be.true;
  });

  it("should call store", async () => {
    const spyStore = sinon.spy();

    store.on(CHAT_PAGE_EVENT_NAME, spyStore, spyStore);

    await AddUsersToChatController.add(formModel);

    expect(spyStore.called).to.be.true;
  });
});
