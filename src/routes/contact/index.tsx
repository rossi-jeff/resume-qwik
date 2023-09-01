import {
  component$,
  useSignal,
  $,
  useVisibleTask$,
  useStore,
} from "@builder.io/qwik";
import { AddressForm } from "~/components/address-form/address-form";
import { ContactInfoForm } from "~/components/contact-info-form/contact-info-form";
import { MessageForm } from "~/components/message-form/message-form";
import { NameForm } from "~/components/name-form/name-form";
import { CREATE_CONTACT_MUTATION } from "~/graphql/mutations/create-contact";
import { FormatAddress } from "~/lib/format-address";
import { FormatName } from "~/lib/format-name";
import { GraphQlClient } from "~/lib/graph-ql-client";
import { RemoveBlanks } from "~/lib/remove-blanks";
import { type ContactType, blankContact } from "~/types/contact.type";

export default component$(() => {
  const steps = ["name", "address", "contact-info", "message", "confirmation"];
  const current = useSignal(0);
  const contact = useStore<ContactType>(blankContact);
  const previousStep = $(() => {
    if (current.value == 0) return;
    current.value--;
  });
  const nextStep = $(() => {
    if (current.value >= steps.length - 1) return;
    current.value++;
  });
  const clearState = $(() => {
    contact.Address = blankContact.Address;
    contact.Name = blankContact.Name;
    contact.Email = "";
    contact.Phone = "";
    contact.EmailType = "Home";
    contact.PhoneType = "Home";
    contact.Preferred = "Email";
    contact.Subject = "";
    contact.Message = "";
    current.value = 0;
  });
  const sendContact = $(async () => {
    const variables = RemoveBlanks(contact);
    const client = new GraphQlClient();
    const req = await client.mutate({
      mutation: CREATE_CONTACT_MUTATION,
      variables,
    });
    const res = await req.json();
    console.log(res);
    clearState();
  });
  useVisibleTask$(({ track }) => {
    track(() => current.value);
    for (let i = 0; i < steps.length; i++) {
      const step = document.getElementById(`step-${steps[i]}`);
      const content = document.getElementById(`content-${steps[i]}`);
      if (i == current.value) {
        if (step) step.classList.add("current");
        if (content) content.classList.add("current");
      } else {
        if (step) step.classList.remove("current");
        if (content) content.classList.remove("current");
      }
    }
  });
  return (
    <div class="p-2">
      <h1>Contact Me</h1>
      <div class="stepper-display">
        <div class="step" id={"step-" + steps[0]}>
          Name
        </div>
        <div class="step" id={"step-" + steps[1]}>
          Address
        </div>
        <div class="step" id={"step-" + steps[2]}>
          Contact Info
        </div>
        <div class="step" id={"step-" + steps[3]}>
          Message
        </div>
        <div class="step" id={"step-" + steps[4]}>
          Confirmation
        </div>
      </div>
      <div class="step-content" id={"content-" + steps[0]}>
        <NameForm name={contact.Name} />
      </div>
      <div class="step-content" id={"content-" + steps[1]}>
        <AddressForm address={contact.Address} />
      </div>
      <div class="step-content" id={"content-" + steps[2]}>
        <ContactInfoForm contact={contact} />
      </div>
      <div class="step-content" id={"content-" + steps[3]}>
        <MessageForm contact={contact} />
      </div>
      <div class="step-content" id={"content-" + steps[4]}>
        <table>
          <tbody>
            <tr>
              <th class="text-left">Name</th>
              <td>{FormatName(contact.Name)}</td>
            </tr>
            <tr>
              <th class="text-left">Address</th>
              <td>{FormatAddress(contact.Address)}</td>
            </tr>
            <tr>
              <th class="text-left">Email</th>
              <td>
                {contact.Email} ({contact.EmailType})
              </td>
            </tr>
            <tr>
              <th class="text-left">Phone</th>
              <td>
                {contact.Phone} ({contact.PhoneType})
              </td>
            </tr>
            <tr>
              <th class="text-left">Preferred</th>
              <td>{contact.Preferred}</td>
            </tr>
            <tr>
              <th class="text-left">Subject</th>
              <td>{contact.Subject}</td>
            </tr>
            <tr>
              <th class="text-left">Message</th>
              <td>{contact.Message}</td>
            </tr>
          </tbody>
        </table>
        <button onClick$={sendContact}>Send Form</button>
      </div>
      <div class="flex flex-wrap justify-between">
        <button id="previous-button" onClick$={previousStep}>
          &lt; Previous
        </button>
        <button id="next-button" onClick$={nextStep}>
          Next &gt;
        </button>
      </div>
    </div>
  );
});
