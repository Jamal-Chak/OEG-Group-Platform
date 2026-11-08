import { BusinessDetail } from "../../../components/business-detail";
import { businesses } from "../../../components/business-data";
import { createPageMetadata } from "../../../lib/metadata";

const twineCapital = businesses[1];

export const metadata = createPageMetadata(
  "TwineCapital",
  "TwineCapital is On-Eaglewings Group's financial technology initiative, exploring accounting, financial intelligence and connected business workflows.",
);

export default function TwineCapitalPage() {
  return <BusinessDetail business={twineCapital} />;
}
