import { component$ } from "@builder.io/qwik";
import { FormatAddress } from "~/lib/format-address";
import { type School } from "~/types/school.type";

export interface ResumeSchoolProps {
  school: School;
}

export const ResumeSchool = component$<ResumeSchoolProps>((props) => {
  const { school } = props;
  return (
    <div>
      <h4>{school.Name}</h4>
      {school.From && school.To && (
        <div class="flex flex-wrap">
          <div class="mr-4">
            <strong class="mr-2">From</strong>
            {school.From.Month} {school.From.Year}
          </div>
          <div>
            <strong class="mr-2">To</strong>
            {school.To.Month} {school.To.Year}
          </div>
        </div>
      )}
      {school.Address && FormatAddress(school.Address) && (
        <div>
          <strong class="mr-2">Address</strong>
          {FormatAddress(school.Address)}
        </div>
      )}
      {school.Degree && (
        <div>
          <strong class="mr-2">Degree</strong>
          {school.Degree}
        </div>
      )}
      {school.Program && (
        <div>
          <strong class="mr-2">Program</strong>
          {school.Program}
        </div>
      )}
      <br />
    </div>
  );
});
