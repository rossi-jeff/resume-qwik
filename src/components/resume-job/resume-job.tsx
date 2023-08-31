import { component$ } from "@builder.io/qwik";
import { type Job } from "~/types/job.type";
import { FormatAddress } from "~/lib/format-address";

export interface ResumeJobProps {
  job: Job;
}

export const ResumeJob = component$<ResumeJobProps>((props) => {
  const { job } = props;
  return (
    <div>
      <h4>{job.Company}</h4>
      {job.From && job.To && (
        <div class="flex flex-wrap">
          <div class="mr-4">
            <strong class="mr-2">From</strong>
            {job.From.Month} {job.From.Year}
          </div>
          <div>
            <strong class="mr-2">To</strong>
            {job.To.Month} {job.To.Year}
          </div>
        </div>
      )}
      {job.Address && (
        <div>
          <strong class="mr-2">Address</strong>
          {FormatAddress(job.Address)}
        </div>
      )}
      {job.Title && (
        <div>
          <strong class="mr-2">Title</strong>
          {job.Title}
        </div>
      )}
      {job.Duties && (
        <div>
          <strong class="mr-2">Duties</strong>
          {job.Duties}
        </div>
      )}
      <br />
    </div>
  );
});
