import { component$ } from "@builder.io/qwik";
import { FormatName } from "~/lib/format-name";
import { type Reference } from "~/types/reference.type";

export interface ResumeReferenceProps {
  reference: Reference;
}

export const ResumeReference = component$<ResumeReferenceProps>((props) => {
  const { reference } = props;
  return (
    <div>
      {reference.Name && <h4>{FormatName(reference.Name)}</h4>}
      {reference.Company && (
        <div>
          <strong class="mr-2">Company</strong>
          {reference.Company}
        </div>
      )}
      {reference.Title && (
        <div>
          <strong class="mr-2">Title</strong>
          {reference.Title}
        </div>
      )}
      {reference.Phones && reference.Phones.length > 0 && (
        <div>
          <strong class="mr-2">Phone</strong>
          {reference.Phones.map((p) => p.Number).join(", ")}
        </div>
      )}
      {reference.Emails && reference.Emails.length > 0 && (
        <div>
          <strong class="mr-2">Email</strong>
          {reference.Emails.map((e) => e.Address).join(", ")}
        </div>
      )}
      <br />
    </div>
  );
});
