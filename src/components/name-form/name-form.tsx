import { component$, $ } from "@builder.io/qwik";
import { type FullName, SalutationTypeOptions } from "~/types/full-name.type";

export interface NameFormProps {
  name: FullName;
}

export const NameForm = component$<NameFormProps>((props) => {
  const { name } = props;
  const updateName = $(
    (e: { target: { name: any; value: string | undefined } }) => {
      switch (e.target.name) {
        case "Salutation":
          name.Salutation = e.target.value;
          break;
        case "First":
          name.First = e.target.value;
          break;
        case "Middle":
          name.Middle = e.target.value;
          break;
        case "Last":
          name.Last = e.target.value;
          break;
        case "Suffix":
          name.Suffix = e.target.value;
          break;
      }
    }
  );
  return (
    <div class="flex flex-wrap justify-between">
      <div>
        <label for="Salutation" class="block">
          Salutation
        </label>
        <select
          name="Salutation"
          value={name.Salutation}
          onChange$={updateName}
        >
          {SalutationTypeOptions.map((opt) => (
            <option key={opt} value={opt}>
              {opt}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label for="First" class="block">
          First
        </label>
        <input
          type="text"
          name="First"
          value={name.First}
          onChange$={updateName}
        />
      </div>
      <div>
        <label for="Middle" class="block">
          Middle
        </label>
        <input
          type="text"
          name="Middle"
          value={name.Middle}
          onChange$={updateName}
        />
      </div>
      <div>
        <label for="Last" class="block">
          Last
        </label>
        <input
          type="text"
          name="Last"
          value={name.Last}
          onChange$={updateName}
        />
      </div>
      <div>
        <label for="Suffix" class="block">
          Suffix
        </label>
        <input
          type="text"
          name="Suffix"
          value={name.Suffix}
          class="w-20"
          onChange$={updateName}
        />
      </div>
    </div>
  );
});
