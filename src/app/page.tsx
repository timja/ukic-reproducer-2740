import PageInner from "@/app/page-inner";

// Uncomment to workaround https://github.com/mi6/ic-ui-kit/issues/2740
/*
import dynamic from "next/dynamic";
const PageInner = dynamic(() => import('./page-inner'), { ssr: false });
 */

export default function Home() {
  return <PageInner />;
}
