// src/components/HomeTabs.jsx

import TabsSection from "./TabsSection";
import {
  serviceTabs,
  salesTabs,
} from "../data/tabsData";

export default function HomeTabs() {
  return (
    <>
      <TabsSection
        heading="Service"
        tabs={serviceTabs}
      />

      <TabsSection
        heading="Sales"
        tabs={salesTabs}
      />
    </>
  );
}
