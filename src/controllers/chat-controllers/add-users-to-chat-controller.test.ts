import { AddUsersToChatAPI } from "../../api/chat/add-users-api";
import { CHAT_PAGE_EVENT_NAME } from "../../pages/chat/events";
import store from "../../store/store";
import {
  AddUsersToChatController,
  AddUsersToChatFormModel,
} from "./add-users-to-chat-controller";

describe("AddUsersToChatController", () => {
  let formModel: AddUsersToChatFormModel = {
    users: [1],
    chatId: 1,
  };

  test("should call API", async () => {
    const mockCall = jest
      .spyOn(AddUsersToChatAPI.prototype, "add")
      .mockImplementation(() => {
        return new Promise((resolve) => {
          resolve(null);
        });
      });

    store.on(
      "popupAddUserToChat usersList",
      () => {},
      () => {}
    );

    await AddUsersToChatController.add(formModel);

    expect(mockCall).toHaveBeenCalled();
  });

  test("should call store", async () => {
    const mockFn = jest.fn();

    store.on("popupAddUserToChat usersList", mockFn, mockFn);

    await AddUsersToChatController.add(formModel);

    expect(mockFn).toHaveBeenCalled();
  });
});
