import { component$ } from "@builder.io/qwik";
import { type School } from "~/types/school.type";
import { SchoolCard } from "../school-card/school-card";

export interface SchoolListProps {
  schools: School[];
}

export const SchoolList = component$<SchoolListProps>((props) => {
  const { schools } = props;
  return (
    <div class="p-2">
      <h1>Education</h1>
      {schools.map((school) => (
        <SchoolCard key={school.Id} school={school} />
      ))}
    </div>
  );
});
