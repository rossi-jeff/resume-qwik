import { component$, $ } from "@builder.io/qwik";
import {
  EmailTypeOptions,
  type ContactType,
  PhoneTypeOptions,
  PrefferedTypeOptions,
} from "~/types/contact.type";

export interface ContactInfoFormProps {
  contact: ContactType;
}

export const ContactInfoForm = component$<ContactInfoFormProps>((props) => {
  const { contact } = props;
  const updateContactInfo = $((e: { target: { name: any; value: string } }) => {
    switch (e.target.name) {
      case "Email":
        contact.Email = e.target.value;
        break;
      case "Phone":
        contact.Phone = e.target.value;
        break;
      case "Preferred":
        contact.Preferred = e.target.value;
        break;
      case "EmailType":
        contact.EmailType = e.target.value;
        break;
      case "PhoneType":
        contact.PhoneType = e.target.value;
        break;
    }
  });
  return (
    <div class="flex flex-wrap justify-between">
      <div>
        <label for="EmailType" class="block">
          Email Type
        </label>
        <select
          name="EmailType"
          value={contact.EmailType}
          onChange$={updateContactInfo}
        >
          {EmailTypeOptions.map((t, i) => (
            <option key={i} value={t}>
              {t}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label for="Email" class="block">
          Email
        </label>
        <input
          type="email"
          name="Email"
          value={contact.Email}
          onChange$={updateContactInfo}
        />
      </div>
      <div>
        <label for="PhoneType" class="block">
          Phone Type
        </label>
        <select
          name="PhoneType"
          value={contact.PhoneType}
          onChange$={updateContactInfo}
        >
          {PhoneTypeOptions.map((t, i) => (
            <option key={i} value={t}>
              {t}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label for="Phone" class="block">
          Phone
        </label>
        <input
          type="tel"
          name="Phone"
          value={contact.Phone}
          onChange$={updateContactInfo}
        />
      </div>
      <div>
        <label for="Preferred" class="block">
          Preferred
        </label>
        <select
          name="Preferred"
          value={contact.Preferred}
          onChange$={updateContactInfo}
        >
          {PrefferedTypeOptions.map((p, i) => (
            <option key={i} value={p}>
              {p}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
});
