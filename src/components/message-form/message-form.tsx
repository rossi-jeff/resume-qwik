import { component$, $ } from "@builder.io/qwik";
import type { ContactType } from "~/types/contact.type";

export interface MessageFormProps {
  contact: ContactType;
}

export const MessageForm = component$<MessageFormProps>((props) => {
  const { contact } = props;
  const updateMessage = $((e: { target: { name: any; value: string } }) => {
    switch (e.target.name) {
      case "Subject":
        contact.Subject = e.target.value;
        break;
      case "Message":
        contact.Message = e.target.value;
        break;
    }
  });
  return (
    <div>
      <div>
        <label for="Subject" class="block">
          Subject
        </label>
        <input
          type="text"
          name="Subject"
          value={contact.Subject}
          onChange$={updateMessage}
          class="w-full"
        />
      </div>
      <div>
        <label for="Message" class="block">
          Message
        </label>
        <textarea
          name="Message"
          value={contact.Message}
          onChange$={updateMessage}
          class="w-full h-16"
        ></textarea>
      </div>
    </div>
  );
});
