
import {Messages} from "./messages";
let messages: Messages = null;

describe("Messages", () => {
   beforeEach(() => {
       messages = new Messages(null, null, null);
   });

   it("initialises", () => {
       expect(messages).toBeTruthy();
   });
});
