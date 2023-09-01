import { component$, $ } from "@builder.io/qwik";
import type { Address } from "~/types/address.type";

export interface AddressFormProps {
  address: Address;
}

export const AddressForm = component$<AddressFormProps>((props) => {
  const { address } = props;
  const updateAddress = $(
    (e: { target: { name: any; value: string | undefined } }) => {
      switch (e.target.name) {
        case "Address":
          address.Address = e.target.value;
          break;
        case "Suite":
          address.Suite = e.target.value;
          break;
        case "City":
          address.City = e.target.value;
          break;
        case "State":
          address.State = e.target.value;
          break;
        case "Zip":
          address.Zip = e.target.value;
          break;
      }
    }
  );
  return (
    <div>
      <div class="mb-2">
        <label for="Address" class="block">
          Address
        </label>
        <input
          type="text"
          name="Address"
          class="w-full"
          value={address.Address}
          onChange$={updateAddress}
        />
      </div>
      <div class="mb-2">
        <label for="Suite" class="block">
          Suite
        </label>
        <input
          type="text"
          name="Suite"
          class="w-full"
          value={address.Suite}
          onChange$={updateAddress}
        />
      </div>
      <div class="flex flex-wrap justify-between">
        <div>
          <label for="City" class="block">
            City
          </label>
          <input
            type="text"
            name="City"
            value={address.City}
            onChange$={updateAddress}
          />
        </div>
        <div>
          <label for="State" class="block">
            State
          </label>
          <input
            type="text"
            name="State"
            value={address.State}
            onChange$={updateAddress}
          />
        </div>
        <div>
          <label for="Zip" class="block">
            Zip
          </label>
          <input
            type="text"
            name="Zip"
            value={address.Zip}
            onChange$={updateAddress}
          />
        </div>
      </div>
    </div>
  );
});
