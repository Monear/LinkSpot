// app/studio/[[...index]]/page.tsx

"use client";

import { NextStudio } from "next-sanity/studio";
import config from "@/sanity.config";
import RootLayout from "../app/(site)/components/global/StudioLayout";

export default function Studio() {
  return(
  <RootLayout>
    <NextStudio config={config} />
  </RootLayout>
  );
}