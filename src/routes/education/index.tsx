import { component$ } from "@builder.io/qwik";
import { routeLoader$ } from "@builder.io/qwik-city";
import { SchoolList } from "~/components/school-list/school-list";
import { GET_SCHOOLS_QUERY } from "~/graphql/queries/get-schools";
import { GraphQlClient } from "~/lib/graph-ql-client";
import { type School } from "~/types/school.type";

export const useSchools = routeLoader$(async () => {
  const client = new GraphQlClient();
  const req = await client.query({ query: GET_SCHOOLS_QUERY });
  const res = await req.json();
  return res.data.getSchools as School[];
});

export default component$(() => {
  const schools = useSchools();
  return <SchoolList schools={schools.value} />;
});
