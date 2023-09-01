import {
  component$,
  useSignal,
  $,
  useVisibleTask$,
  useStore,
} from "@builder.io/qwik";
import { AddressForm } from "~/components/address-form/address-form";
import { NameForm } from "~/components/name-form/name-form";
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
        {"content-" + steps[2]}
      </div>
      <div class="step-content" id={"content-" + steps[3]}>
        {"content-" + steps[3]}
      </div>
      <div class="step-content" id={"content-" + steps[4]}>
        {"content-" + steps[4]}
      </div>
      <div class="flex flex-wrap justify-between">
        <button id="previous-button" onClick$={previousStep}>
          Previous
        </button>
        <button id="next-button" onClick$={nextStep}>
          Next
        </button>
      </div>
    </div>
  );
});
