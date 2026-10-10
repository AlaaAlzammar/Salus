import PrimaryButton from "@/components/ui/PrimaryButton";
import TextField from "@/components/ui/TextField";
import {
  BuildingIcon,
  PhoneIcon,
  PinIcon,
  StoreIcon,
  UserIcon,
} from "@/components/ui/icons";
import { content } from "./content";
import type { JoinForm } from "./useJoinForm";

export default function PharmacyStep({ form }: { form: JoinForm }) {
  const { errors, getFieldProps } = form;

  return (
    <>
      <div className="grid grid-cols-2 gap-x-5 mobile:grid-cols-1">
        <TextField
          id="pharmacyName"
          label={content.labels.pharmacyName}
          placeholder={content.placeholders.pharmacyName}
          icon={<StoreIcon />}
          error={errors.pharmacyName ?? ""}
          inputProps={{
            ...getFieldProps("pharmacyName"),
            autoComplete: "organization",
          }}
        />
        <TextField
          id="ownerName"
          label={content.labels.ownerName}
          placeholder={content.placeholders.ownerName}
          icon={<UserIcon />}
          error={errors.ownerName ?? ""}
          inputProps={{ ...getFieldProps("ownerName"), autoComplete: "name" }}
        />
        <TextField
          id="phone"
          label={content.labels.phone}
          placeholder={content.placeholders.phone}
          icon={<PhoneIcon />}
          error={errors.phone ?? ""}
          inputProps={{
            ...getFieldProps("phone"),
            type: "tel",
            inputMode: "tel",
            autoComplete: "tel",
          }}
        />
        <TextField
          id="city"
          label={content.labels.city}
          placeholder={content.placeholders.city}
          icon={<BuildingIcon />}
          error={errors.city ?? ""}
          inputProps={{
            ...getFieldProps("city"),
            autoComplete: "address-level2",
          }}
        />
        <TextField
          id="address"
          label={content.labels.address}
          placeholder={content.placeholders.address}
          icon={<PinIcon />}
          error={errors.address ?? ""}
          className="col-span-2 mobile:col-span-1"
          inputProps={{
            ...getFieldProps("address"),
            autoComplete: "street-address",
          }}
        />
      </div>

      <PrimaryButton type="submit" className="mt-1">
        {content.next}
      </PrimaryButton>
    </>
  );
}
