"use client";

import { ApplyJobForm } from "../../components/apply-job-form";

export default function ApplyJobPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50">
      <ApplyJobForm jobTitle="Plumber" />
    </div>
  );
}
