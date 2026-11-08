import { BusinessDetail } from "../../../components/business-detail";
import { businesses } from "../../../components/business-data";
import { createPageMetadata } from "../../../lib/metadata";

const twineEngine = businesses[0];

export const metadata = createPageMetadata(
  "TwineEngine",
  "TwineEngine focuses on custom software, websites and web applications, mobile apps, automation, IT consulting and digital transformation.",
);

export default function TwineEnginePage() {
  return <BusinessDetail business={twineEngine} />;
}
